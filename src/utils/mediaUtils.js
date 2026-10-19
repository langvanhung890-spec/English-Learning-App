// Utilities mô phỏng kiến trúc Multimedia của Expo (Audio, Video, ImagePicker) trên nền Web

/**
 * Phát âm thanh giọng đọc chuẩn tiếng Anh (tương tự expo-audio playback)
 * Sử dụng Web Speech Synthesis API với giọng chuẩn US/UK
 */
export const speakEnglish = (text, rate = 0.95) => {
  if (!("speechSynthesis" in window)) {
    alert("Trình duyệt không hỗ trợ phát âm thanh Web Speech!")
    return null
  }

  // Dừng âm thanh đang phát trước đó
  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = "en-US"
  utterance.rate = rate // Tốc độ đọc
  utterance.pitch = 1.0

  // Cố gắng chọn giọng chuẩn tiếng Anh chất lượng cao nếu có
  const voices = window.speechSynthesis.getVoices()
  const englishVoice =
    voices.find(
      (v) =>
        (v.lang.startsWith("en-US") || v.lang.startsWith("en-GB")) &&
        !v.name.includes("Google"),
    ) || voices.find((v) => v.lang.startsWith("en"))

  if (englishVoice) {
    utterance.voice = englishVoice
  }

  window.speechSynthesis.speak(utterance)
  return utterance
}

/**
 * Quản lý ghi âm giọng nói qua Microphone (tương tự useAudioRecorder của expo-audio)
 */
export class AudioRecorderManager {
  constructor() {
    this.mediaRecorder = null
    this.audioChunks = []
    this.audioUrl = null
    this.stream = null
  }

  async start() {
    this.audioChunks = []
    this.audioUrl = null

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error(
        "Thiết bị của bạn không hỗ trợ Microphone trên trình duyệt!",
      )
    }

    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    this.mediaRecorder = new MediaRecorder(this.stream)

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        this.audioChunks.push(event.data)
      }
    }

    this.mediaRecorder.start()
  }

  stop() {
    return new Promise((resolve) => {
      if (!this.mediaRecorder) {
        resolve(null)
        return
      }

      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: "audio/webm" })
        this.audioUrl = URL.createObjectURL(audioBlob)

        // Dừng các track microphone
        if (this.stream) {
          this.stream.getTracks().forEach((track) => track.stop())
          this.stream = null
        }

        resolve(this.audioUrl)
      }

      this.mediaRecorder.stop()
    })
  }
}
