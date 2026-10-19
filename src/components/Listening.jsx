import { useState, useEffect } from "react"
import { speakEnglish } from "../utils/mediaUtils"
import {
  listeningCategories,
  longListeningExercises,
} from "../data/listeningData"

export default function Listening() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [transcriptLang, setTranscriptLang] = useState("en") // 'en' | 'vi' | 'both'
  const [userAnswers, setUserAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [showTranscript, setShowTranscript] = useState(false)

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [selectedExercise])

  const filteredExercises =
    activeCategory === "all"
      ? longListeningExercises
      : longListeningExercises.filter((ex) => ex.category === activeCategory)

  const activeEx =
    selectedExercise !== null
      ? longListeningExercises.find((ex) => ex.id === selectedExercise)
      : null

  const togglePlayAudio = () => {
    if (!activeEx) return
    if (playing) {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel()
      setPlaying(false)
    } else {
      setPlaying(true)
      const utter = speakEnglish(activeEx.transcript, speed)
      if (utter) {
        utter.onend = () => setPlaying(false)
        utter.onerror = () => setPlaying(false)
      } else {
        setPlaying(false)
      }
    }
  }

  const handleSelectAnswer = (qId, optionIdx) => {
    if (submitted) return
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIdx }))
  }

  const calculateScore = () => {
    if (!activeEx) return 0
    return activeEx.questions.filter((q) => userAnswers[q.id] === q.correct)
      .length
  }

  // ================= DETAIL EXERCISE SCREEN =================
  if (activeEx) {
    const score = calculateScore()
    const totalQuestions = activeEx.questions.length
    const answeredCount = Object.keys(userAnswers).length

    return (
      <div className="px-4 pt-10 pb-24">
        {/* Back navigation */}
        <button
          onClick={() => {
            if ("speechSynthesis" in window) window.speechSynthesis.cancel()
            setPlaying(false)
            setSelectedExercise(null)
            setUserAnswers({})
            setSubmitted(false)
            setShowTranscript(false)
          }}
          className="flex items-center gap-1.5 mb-4 text-xs font-bold cursor-pointer text-purple-700 hover:underline"
        >
          <span>←</span>
          <span>Danh sách bài nghe dài</span>
        </button>

        {/* Header Audio Card */}
        <div
          className="rounded-3xl p-5 mb-5 shadow-sm text-white"
          style={{
            background:
              "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span
              className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              {activeEx.icon} {activeEx.level} · {activeEx.duration}
            </span>
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200">
              {activeEx.questions.length} câu hỏi
            </span>
          </div>

          <h2
            className="text-xl font-black mb-1 leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {activeEx.title}
          </h2>
          <p className="text-xs text-indigo-200 mb-4">{activeEx.summary}</p>

          {/* Audio Player Controls */}
          <div className="bg-black/30 rounded-2xl p-3 flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <button
                onClick={togglePlayAudio}
                className="flex-1 py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-transform active:scale-98"
                style={{
                  background: playing ? "#EF4444" : "var(--color-primary)",
                  color: "white",
                  fontFamily: "var(--font-display)",
                }}
              >
                <span>{playing ? "⏸" : "▶"}</span>
                <span>
                  {playing ? "Tạm dừng giọng đọc" : "Phát bài nghe dài"}
                </span>
              </button>

              {/* Speed Pills */}
              <div className="flex items-center bg-white/10 rounded-xl p-1">
                {[0.8, 1, 1.2, 1.5].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSpeed(s)
                      if (playing) {
                        if ("speechSynthesis" in window)
                          window.speechSynthesis.cancel()
                        setPlaying(true)
                        const utter = speakEnglish(activeEx.transcript, s)
                        if (utter) {
                          utter.onend = () => setPlaying(false)
                          utter.onerror = () => setPlaying(false)
                        }
                      }
                    }}
                    className={`px-2 py-1 text-[11px] font-bold rounded-lg cursor-pointer transition-colors ${
                      speed === s
                        ? "bg-white text-indigo-900 shadow-xs"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>

            {/* Audio waveform / state notice */}
            <div className="flex items-center justify-between text-[11px] text-indigo-200 px-1">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    playing ? "bg-emerald-400 animate-ping" : "bg-gray-400"
                  }`}
                />
                <span>
                  {playing
                    ? "Đang phát âm thanh giọng bản xứ..."
                    : "Nhấn nút để bắt đầu luyện nghe"}
                </span>
              </div>
              <span>Tốc độ: {speed}x</span>
            </div>
          </div>
        </div>

        {/* Key Vocabulary Preview */}
        <div className="bg-white rounded-2xl p-4 mb-5 border border-gray-100 shadow-2xs">
          <p className="text-xs font-bold text-gray-500 mb-2 flex items-center gap-1">
            <span>💡</span>
            <span>TỪ VỰNG TRỌNG TÂM TRONG BÀI</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {activeEx.keyVocabulary.map((v, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-100/80"
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-xs text-purple-900">
                    {v.word}
                  </span>
                  <button
                    onClick={() => speakEnglish(v.word)}
                    title="Nghe từ này"
                    className="text-purple-600 hover:scale-110 text-xs p-0.5 cursor-pointer"
                  >
                    🔊
                  </button>
                </div>
                <span className="text-[10px] text-purple-600 block">
                  {v.phonetic}
                </span>
                <span className="text-[11px] text-gray-600 font-medium block mt-0.5">
                  {v.meaning}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Questions Section */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h3
              className="text-base font-extrabold text-gray-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Câu hỏi nghe hiểu ({answeredCount}/{totalQuestions})
            </h3>
            {submitted && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Đạt: {score}/{totalQuestions} (
                {Math.round((score / totalQuestions) * 100)}%)
              </span>
            )}
          </div>

          <div className="space-y-4">
            {activeEx.questions.map((q, qIndex) => {
              const selectedOpt = userAnswers[q.id]
              return (
                <div
                  key={q.id}
                  className="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs"
                >
                  <p className="text-xs font-bold text-gray-800 mb-3 leading-snug">
                    <span className="text-purple-600 mr-1.5">
                      Câu {qIndex + 1}:
                    </span>
                    {q.question}
                  </p>

                  <div className="space-y-2">
                    {q.options.map((opt, optIndex) => {
                      const isSelected = selectedOpt === optIndex
                      const isCorrect = optIndex === q.correct
                      let btnBg = "white"
                      let btnBorder = "var(--color-border)"
                      let btnText = "var(--color-text)"

                      if (submitted) {
                        if (isCorrect) {
                          btnBg = "#D1FAE5"
                          btnBorder = "#10B981"
                          btnText = "#065F46"
                        } else if (isSelected && !isCorrect) {
                          btnBg = "#FEE2E2"
                          btnBorder = "#EF4444"
                          btnText = "#991B1B"
                        }
                      } else if (isSelected) {
                        btnBg = "var(--color-primary-light)"
                        btnBorder = "var(--color-primary)"
                        btnText = "var(--color-primary)"
                      }

                      return (
                        <button
                          key={optIndex}
                          disabled={submitted}
                          onClick={() => handleSelectAnswer(q.id, optIndex)}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-start gap-2"
                          style={{
                            background: btnBg,
                            border: `1.5px solid ${btnBorder}`,
                            color: btnText,
                          }}
                        >
                          <span className="font-bold shrink-0">
                            {String.fromCharCode(65 + optIndex)}.
                          </span>
                          <span>{opt}</span>
                        </button>
                      )
                    })}
                  </div>

                  {submitted && (
                    <div className="mt-3 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                      <p className="font-bold text-gray-700 mb-0.5">
                        💡 Giải thích chi tiết:
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={answeredCount === 0}
              className={`mt-4 w-full py-3.5 rounded-2xl font-bold text-white shadow-sm transition-transform active:scale-98 cursor-pointer ${
                answeredCount === 0
                  ? "opacity-50 cursor-not-allowed bg-gray-400"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nộp bài nghe ({answeredCount}/{totalQuestions} câu)
            </button>
          ) : (
            <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-3xl mb-1 block">🏆</span>
              <p
                className="font-black text-emerald-900 text-base"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Kết quả nghe hiểu: {score}/{totalQuestions} câu đúng!
              </p>
              <p className="text-xs text-emerald-700 mt-1">
                {score === totalQuestions
                  ? "Tuyệt vời! Bạn nghe hiểu trọn vẹn toàn bộ bài."
                  : "Hãy xem lại bản ghi âm song ngữ phía dưới để ôn tập các câu chưa đúng nhé."}
              </p>
            </div>
          )}
        </div>

        {/* Bilingual Transcript Accordion */}
        <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-2xs">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="flex items-center gap-2 font-bold text-xs text-purple-700 cursor-pointer hover:underline"
            >
              <span>{showTranscript ? "▼" : "▶"}</span>
              <span>
                {showTranscript
                  ? "Ẩn bản ghi âm (Transcript)"
                  : "Xem bản ghi âm & Lời dịch song ngữ"}
              </span>
            </button>

            {showTranscript && (
              <div className="flex bg-gray-100 p-0.5 rounded-lg text-[10px] font-bold">
                <button
                  onClick={() => setTranscriptLang("en")}
                  className={`px-2 py-0.5 rounded cursor-pointer ${
                    transcriptLang === "en"
                      ? "bg-white text-purple-700 shadow-2xs"
                      : "text-gray-500"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setTranscriptLang("vi")}
                  className={`px-2 py-0.5 rounded cursor-pointer ${
                    transcriptLang === "vi"
                      ? "bg-white text-purple-700 shadow-2xs"
                      : "text-gray-500"
                  }`}
                >
                  Tiếng Việt
                </button>
                <button
                  onClick={() => setTranscriptLang("both")}
                  className={`px-2 py-0.5 rounded cursor-pointer ${
                    transcriptLang === "both"
                      ? "bg-white text-purple-700 shadow-2xs"
                      : "text-gray-500"
                  }`}
                >
                  Song ngữ
                </button>
              </div>
            )}
          </div>

          {showTranscript && (
            <div className="mt-3 pt-3 border-t border-gray-100 text-xs leading-relaxed space-y-3">
              {(transcriptLang === "en" || transcriptLang === "both") && (
                <div>
                  <span className="text-[10px] font-bold text-purple-600 block mb-1">
                    ENGLISH TRANSCRIPT
                  </span>
                  <p className="italic text-gray-800 whitespace-pre-line">
                    {activeEx.transcript}
                  </p>
                </div>
              )}

              {(transcriptLang === "vi" || transcriptLang === "both") && (
                <div className="bg-purple-50/50 p-3 rounded-xl border border-purple-100/50">
                  <span className="text-[10px] font-bold text-emerald-700 block mb-1">
                    BẢN DỊCH TIẾNG VIỆT
                  </span>
                  <p className="text-gray-700 whitespace-pre-line">
                    {activeEx.transcriptVi}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  // ================= EXERCISES LIST SCREEN =================
  return (
    <div className="px-4 pt-10 pb-24">
      {/* Header */}
      <div className="mb-4">
        <h1
          className="text-2xl font-black mb-1 flex items-center gap-2"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text)",
          }}
        >
          <span>Luyện nghe dài</span>
          <span>🎧</span>
        </h1>
        <p className="text-xs" style={{ color: "var(--color-muted)" }}>
          Các bài hội thoại, bài giảng học thuật và tin tức dài kèm câu hỏi trắc
          nghiệm
        </p>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-4">
        {listeningCategories.map((cat) => {
          const active = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                active
                  ? "bg-purple-600 text-white border-purple-600 shadow-xs"
                  : "bg-white text-gray-700 border-gray-200 hover:border-purple-300"
              }`}
            >
              {cat.name}
            </button>
          )
        })}
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-3">
        {filteredExercises.map((ex) => (
          <button
            key={ex.id}
            onClick={() => {
              setSelectedExercise(ex.id)
              setUserAnswers({})
              setSubmitted(false)
              setShowTranscript(false)
            }}
            className="w-full text-left rounded-3xl p-5 shadow-2xs bg-white border border-gray-100 transition-all hover:border-purple-300 active:scale-98 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <span className="text-2xl p-2 rounded-2xl bg-gray-50 border border-gray-100">
                  {ex.icon}
                </span>
                <div>
                  <span
                    className="text-[10px] font-extrabold px-2 py-0.5 rounded-full"
                    style={{ background: ex.levelBg, color: ex.levelColor }}
                  >
                    {ex.level}
                  </span>
                  <h3
                    className="font-black text-sm mt-1 text-gray-900 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {ex.title}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 line-clamp-2 mb-3">
              {ex.summary}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
              <div className="flex items-center gap-3 text-gray-400 font-semibold text-[11px]">
                <span>⏱️ {ex.duration}</span>
                <span>❓ {ex.questions.length} câu hỏi</span>
              </div>
              <span className="font-extrabold text-purple-700 flex items-center gap-1 text-xs">
                Vào luyện nghe →
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
