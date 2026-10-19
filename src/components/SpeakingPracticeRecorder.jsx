import { useState, useRef, useEffect } from "react"
import { speakEnglish, AudioRecorderManager } from "../utils/mediaUtils"

/**
 * Component Luyện phát âm & Thu âm giọng nói mô phỏng expo-audio
 * (useAudioRecorder, useAudioRecorderState, useAudioPlayer)
 */
export default function SpeakingPracticeRecorder({
  targetSentence = "He speaks English fluently every day.",
  translation = "Anh ấy nói tiếng Anh lưu loát mỗi ngày.",
  color = "#7C3AED",
}) {
  const [isRecording, setIsRecording] = useState(false)
  const [recordingDuration, setRecordingDuration] = useState(0)
  const [audioUrl, setAudioUrl] = useState(null)
  const [isPlayingRecorded, setIsPlayingRecorded] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const recorderManagerRef = useRef(new AudioRecorderManager())
  const timerIntervalRef = useRef(null)
  const audioPlaybackRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current)
    }
  }, [])

  // 1. Nghe phát âm mẫu từ người bản xứ (expo-audio Player)
  const handleListenSample = () => {
    speakEnglish(targetSentence, 0.9)
  }

  // 2. Bắt đầu thu âm giọng nói (expo-audio Recorder)
  const handleStartRecording = async () => {
    try {
      setFeedback(null)
      setAudioUrl(null)
      setRecordingDuration(0)

      await recorderManagerRef.current.start()
      setIsRecording(true)

      timerIntervalRef.current = setInterval(() => {
        setRecordingDuration((prev) => prev + 1)
      }, 1000)
    } catch (err) {
      alert("Không thể kích hoạt micro: " + err.message)
    }
  }

  // 3. Dừng thu âm và nhận URL file âm thanh
  const handleStopRecording = async () => {
    if (!isRecording) return
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current)

    const url = await recorderManagerRef.current.stop()
    setIsRecording(false)
    setAudioUrl(url)

    // Chấm điểm và đưa ra phản hồi giả lập thông minh
    const accuracy = Math.floor(Math.random() * 15) + 85 // 85% - 100%
    setFeedback({
      accuracy,
      message:
        accuracy >= 90
          ? "🌟 Phát âm rất chuẩn và ngữ điệu tự nhiên! (+20 XP)"
          : "👍 Phát âm khá tốt, chú ý nối âm và trọng âm câu nhé! (+15 XP)",
    })
  }

  // 4. Phát lại file giọng nói của học viên
  const handlePlayRecorded = () => {
    if (!audioUrl) return
    if (audioPlaybackRef.current) {
      audioPlaybackRef.current.pause()
    }
    audioPlaybackRef.current = new Audio(audioUrl)
    setIsPlayingRecorded(true)
    audioPlaybackRef.current.onended = () => setIsPlayingRecorded(false)
    audioPlaybackRef.current.play()
  }

  return (
    <div className="rounded-2xl p-4 bg-white border border-gray-200 shadow-xs mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
          🎙️ LUYỆN NÓI & THU ÂM (EXPO AUDIO)
        </span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
          Speaking AI
        </span>
      </div>

      {/* Câu cần phát âm */}
      <div className="p-3 rounded-xl bg-purple-50/60 border border-purple-100 mb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-sm font-black text-gray-900 leading-snug">
              &ldquo;{targetSentence}&rdquo;
            </p>
            <p className="text-xs text-gray-500 mt-1 italic">→ {translation}</p>
          </div>

          <button
            onClick={handleListenSample}
            title="Nghe mẫu phát âm"
            className="flex-shrink-0 p-2 rounded-xl bg-white border border-purple-200 text-purple-700 hover:bg-purple-100 transition-transform active:scale-90 shadow-xs cursor-pointer"
          >
            🔊 Nghe mẫu
          </button>
        </div>
      </div>

      {/* Khu vực ghi âm và trạng thái */}
      <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 border border-gray-100">
        {/* Đồng hồ ghi âm */}
        <div className="flex items-center gap-2 mb-2">
          {isRecording && (
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          )}
          <span className="font-mono text-sm font-bold text-gray-700">
            {isRecording
              ? `Đang thu âm: 00:${
                  recordingDuration < 10 ? "0" : ""
                }${recordingDuration}`
              : "Sẵn sàng thu âm"}
          </span>
        </div>

        {/* Nút bấm thu âm */}
        <div className="flex items-center gap-3">
          {!isRecording ? (
            <button
              onClick={handleStartRecording}
              className="px-4 py-2 rounded-full font-bold text-xs text-white bg-red-500 hover:bg-red-600 transition-transform active:scale-95 shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              🔴 Bắt đầu nói
            </button>
          ) : (
            <button
              onClick={handleStopRecording}
              className="px-4 py-2 rounded-full font-bold text-xs text-white bg-gray-800 hover:bg-black transition-transform active:scale-95 shadow-xs cursor-pointer flex items-center gap-1.5 animate-pulse"
            >
              ⏹ Dừng & Chấm điểm
            </button>
          )}

          {audioUrl && !isRecording && (
            <button
              onClick={handlePlayRecorded}
              className="px-4 py-2 rounded-full font-bold text-xs text-purple-700 bg-purple-100 hover:bg-purple-200 transition-transform active:scale-95 shadow-xs cursor-pointer flex items-center gap-1.5"
            >
              {isPlayingRecorded ? "🔊 Đang nghe..." : "▶ Nghe lại giọng bạn"}
            </button>
          )}
        </div>

        {/* Đánh giá kết quả */}
        {feedback && !isRecording && (
          <div className="mt-3 w-full p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-center">
            <p className="text-xs font-bold text-emerald-800">
              Độ chính xác:{" "}
              <span className="text-sm font-black">{feedback.accuracy}%</span>
            </p>
            <p className="text-[11px] text-emerald-700 mt-0.5 font-medium">
              {feedback.message}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
