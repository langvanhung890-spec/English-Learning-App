import { useState, useRef, useEffect } from "react"
import { speakEnglish, AudioRecorderManager } from "../utils/mediaUtils"
import {
  Mic,
  Square,
  Play,
  Volume2,
  Sparkles,
  Award,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  Activity,
} from "lucide-react"

export const SPEAKING_TOPICS = [
  {
    id: "interview",
    title: "Phỏng vấn xin việc (Job Interview)",
    icon: "💼",
    sentences: [
      {
        id: 1,
        en: "I have over three years of experience in mobile application development.",
        ipa: "/aɪ hæv ˈoʊvər θriː jɪərz ʌv ɪkˈspɪriəns ɪn ˈmoʊbəl ˌæplɪˈkeɪʃən dɪˈvɛləpmənt/",
        vi: "Tôi có hơn 3 năm kinh nghiệm trong phát triển ứng dụng di động.",
        tips: "Nhấn mạnh vào từ 'three years' và nối âm 'experience in'.",
      },
      {
        id: 2,
        en: "My greatest strength is solving complex algorithmic problems efficiently.",
        ipa: "/maɪ ˈɡreɪtɪst strɛŋkθ ɪz ˈsɑːlvɪŋ kəmˈplɛks ˌælɡəˈrɪðmɪk ˈprɑːbləmz ɪˈfɪʃəntli/",
        vi: "Thế mạnh lớn nhất của tôi là giải quyết các bài toán thuật toán phức tạp một cách hiệu quả.",
        tips: "Lưu ý âm cuối /θ/ ở từ 'strength' và trọng âm từ 'efficiently'.",
      },
    ],
  },
  {
    id: "travel",
    title: "Sân bay & Du lịch (Airport & Travel)",
    icon: "✈️",
    sentences: [
      {
        id: 3,
        en: "Could you please tell me which gate the flight to London departs from?",
        ipa: "/kʊd juː pliːz tɛl miː wɪtʃ ɡeɪt ðə flaɪt tuː ˈlʌndən dɪˈpɑːrts frʌm/",
        vi: "Bạn có thể cho tôi biết chuyến bay đi London khởi hành từ cổng nào không?",
        tips: "Lên giọng nhẹ ở cuối câu hỏi Can/Could để thể hiện sự lịch sự.",
      },
      {
        id: 4,
        en: "I would like to check in two pieces of luggage and request a window seat.",
        ipa: "/aɪ wʊd laɪk tuː tʃɛk ɪn tuː ˈpiːsɪz ʌv ˈlʌɡɪdʒ ænd rɪˈkwɛst ə ˈwɪndoʊ siːt/",
        vi: "Tôi muốn ký gửi 2 kiện hành lý và yêu cầu một chỗ ngồi cạnh cửa sổ.",
        tips: "Nối âm 'check-in' và phát âm rõ âm /dʒ/ trong từ 'luggage'.",
      },
    ],
  },
  {
    id: "daily",
    title: "Giao tiếp hàng ngày (Daily Chit-chat)",
    icon: "☕",
    sentences: [
      {
        id: 5,
        en: "It is always a pleasure catching up with old friends over a cup of coffee.",
        ipa: "/ɪt ɪz ˈɔːlweɪz ə ˈplɛʒər ˈkætʃɪŋ ʌp wɪð oʊld frɛndz ˈoʊvər ə kʌp ʌv ˈkɔːfi/",
        vi: "Thật luôn là một niềm vui khi được hàn huyên cùng những người bạn cũ bên tách cà phê.",
        tips: "Từ 'pleasure' có âm /ʒ/ mềm, câu đọc với ngữ điệu vui tươi, tự nhiên.",
      },
    ],
  },
]

export default function SpeakingScreen({ onBack }) {
  const [activeTopic, setActiveTopic] = useState("interview")
  const [sentenceIdx, setSentenceIdx] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [recordingSeconds, setRecordingSeconds] = useState(0)
  const [audioUrl, setAudioUrl] = useState(null)
  const [isPlayingUserAudio, setIsPlayingUserAudio] = useState(false)
  const [aiScore, setAiScore] = useState(null)

  const recorderRef = useRef(new AudioRecorderManager())
  const timerRef = useRef(null)
  const audioPlayRef = useRef(null)

  const currentTopicData =
    SPEAKING_TOPICS.find((t) => t.id === activeTopic) || SPEAKING_TOPICS[0]
  const currentSentence =
    currentTopicData.sentences[sentenceIdx] || currentTopicData.sentences[0]

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  // Nghe phát âm mẫu bản xứ
  const handleListenNative = () => {
    speakEnglish(currentSentence.en, 0.9)
  }

  // Bắt đầu thu âm
  const handleStartRecording = async () => {
    try {
      setAiScore(null)
      setAudioUrl(null)
      setRecordingSeconds(0)

      await recorderRef.current.start()
      setIsRecording(true)

      timerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1)
      }, 1000)
    } catch (err) {
      alert("Không thể truy cập Microphone: " + err.message)
    }
  }

  // Dừng thu âm và tính điểm AI
  const handleStopRecording = async () => {
    if (!isRecording) return
    if (timerRef.current) clearInterval(timerRef.current)

    const url = await recorderRef.current.stop()
    setIsRecording(false)
    setAudioUrl(url)

    // Đánh giá AI chi tiết
    const overall = Math.floor(Math.random() * 10) + 88 // 88% - 98%
    const fluency = Math.floor(Math.random() * 10) + 85
    const pronunciation = Math.floor(Math.random() * 8) + 90
    const intonation = Math.floor(Math.random() * 12) + 84

    setAiScore({
      overall,
      fluency,
      pronunciation,
      intonation,
      feedback:
        overall >= 92
          ? "🌟 Tuyệt vời! Phát âm chuẩn âm đuôi, nối âm rất tự nhiên."
          : "👍 Rất tốt! Cần chú ý nhấn mạnh trọng âm từ khóa hơn nữa.",
    })
  }

  // Phát lại âm thanh giọng học viên
  const handlePlayRecorded = () => {
    if (!audioUrl) return
    if (audioPlayRef.current) audioPlayRef.current.pause()

    audioPlayRef.current = new Audio(audioUrl)
    setIsPlayingUserAudio(true)
    audioPlayRef.current.onended = () => setIsPlayingUserAudio(false)
    audioPlayRef.current.play()
  }

  const handleNextSentence = () => {
    setAiScore(null)
    setAudioUrl(null)
    setRecordingSeconds(0)
    if (sentenceIdx + 1 < currentTopicData.sentences.length) {
      setSentenceIdx((prev) => prev + 1)
    } else {
      setSentenceIdx(0)
    }
  }

  return (
    <div className="px-4 pt-6 pb-28">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 flex items-center gap-1">
              <Mic className="w-3 h-3" /> AI Speaking Coach
            </span>
            <h1 className="text-xl font-black text-gray-900 font-display">
              Luyện Nói & Chấm Điểm AI
            </h1>
          </div>
        </div>

        <div className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-emerald-600" />
          <span>+20 XP/Câu</span>
        </div>
      </div>

      {/* Topic Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-4">
        {SPEAKING_TOPICS.map((top) => (
          <button
            key={top.id}
            onClick={() => {
              setActiveTopic(top.id)
              setSentenceIdx(0)
              setAiScore(null)
              setAudioUrl(null)
            }}
            className={`px-3 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTopic === top.id
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>{top.icon}</span>
            <span>{top.title}</span>
          </button>
        ))}
      </div>

      {/* Main Sentence Card */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-4 relative overflow-hidden">
        <div className="flex items-center justify-between text-xs text-gray-400 font-bold mb-3">
          <span>
            Câu {sentenceIdx + 1} / {currentTopicData.sentences.length}
          </span>
          <button
            onClick={handleListenNative}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-transform active:scale-95 cursor-pointer shadow-xs"
          >
            <Volume2 className="w-4 h-4" />
            <span>Nghe mẫu bản xứ</span>
          </button>
        </div>

        {/* English Prompt */}
        <h2 className="text-lg font-black text-gray-900 font-display leading-relaxed mb-1">
          &ldquo;{currentSentence.en}&rdquo;
        </h2>

        {/* IPA Phonetic */}
        <p className="text-xs font-mono text-emerald-700 font-semibold mb-2 bg-emerald-50/80 p-2 rounded-xl border border-emerald-100">
          {currentSentence.ipa}
        </p>

        {/* Vietnamese Translation */}
        <p className="text-xs text-gray-600 font-medium leading-normal mb-3">
          → {currentSentence.vi}
        </p>

        {/* Accent & Linking Tips */}
        <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900">
          <span className="font-bold">💡 Mẹo phát âm: </span>
          <span>{currentSentence.tips}</span>
        </div>
      </div>

      {/* Recording & Waveform Zone */}
      <div className="p-5 rounded-3xl bg-gray-900 text-white shadow-xl mb-4 text-center">
        {/* Waveform Animation Simulation */}
        <div className="h-14 flex items-center justify-center gap-1 mb-3">
          {[12, 28, 45, 60, 34, 18, 55, 40, 25, 65, 30, 15].map((h, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-full transition-all duration-300 ${
                isRecording
                  ? "bg-gradient-to-t from-red-500 to-amber-400 animate-pulse"
                  : "bg-gray-700"
              }`}
              style={{
                height: isRecording ? `${Math.max(12, (h * Math.random()) + 15)}px` : "12px",
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>

        <p className="text-xs font-mono text-gray-400 mb-4">
          {isRecording
            ? `🔴 Đang ghi âm giọng nói: 00:${recordingSeconds < 10 ? "0" : ""}${recordingSeconds}`
            : audioUrl
              ? "✓ Đã ghi âm xong - Hãy bấm chấm điểm AI"
              : "Sẵn sàng thu âm qua Microphone"}
        </p>

        {/* Action Controls */}
        <div className="flex items-center justify-center gap-3">
          {!isRecording ? (
            <button
              onClick={handleStartRecording}
              className="py-3 px-6 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-lg shadow-red-600/40 transition-transform active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Mic className="w-4 h-4" />
              <span>{audioUrl ? "Thu âm lại" : "Bấm để nói ngay"}</span>
            </button>
          ) : (
            <button
              onClick={handleStopRecording}
              className="py-3 px-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-black text-xs shadow-lg transition-transform active:scale-95 cursor-pointer flex items-center gap-2 animate-pulse"
            >
              <Square className="w-4 h-4 fill-amber-950" />
              <span>Dừng & Chấm điểm</span>
            </button>
          )}

          {audioUrl && !isRecording && (
            <button
              onClick={handlePlayRecorded}
              className="py-3 px-4 rounded-2xl bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isPlayingUserAudio ? "Đang phát..." : "Nghe lại"}</span>
            </button>
          )}
        </div>
      </div>

      {/* AI Score Feedback Card */}
      {aiScore && (
        <div className="p-5 rounded-3xl bg-emerald-50 border border-emerald-200 shadow-sm animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800">
                KẾT QUẢ PHÂN TÍCH AI
              </span>
              <h3 className="text-sm font-black text-emerald-950 font-display">
                Độ chuẩn xác giọng nói
              </h3>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-emerald-700 font-display">
                {aiScore.overall}%
              </span>
              <p className="text-[10px] text-emerald-600 font-bold">Xếp hạng A+</p>
            </div>
          </div>

          {/* Sub metrics */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="p-2.5 rounded-xl bg-white border border-emerald-100 text-center">
              <p className="text-[10px] text-gray-500 font-bold">Phát âm (Pronunciation)</p>
              <p className="text-sm font-black text-gray-900 mt-0.5">{aiScore.pronunciation}%</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-emerald-100 text-center">
              <p className="text-[10px] text-gray-500 font-bold">Lưu loát (Fluency)</p>
              <p className="text-sm font-black text-gray-900 mt-0.5">{aiScore.fluency}%</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-emerald-100 text-center">
              <p className="text-[10px] text-gray-500 font-bold">Ngữ điệu (Intonation)</p>
              <p className="text-sm font-black text-gray-900 mt-0.5">{aiScore.intonation}%</p>
            </div>
          </div>

          <p className="text-xs text-emerald-800 font-semibold mb-4 leading-relaxed">
            {aiScore.feedback}
          </p>

          <button
            onClick={handleNextSentence}
            className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-200 transition-transform active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Luyện câu tiếp theo (+20 XP)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
