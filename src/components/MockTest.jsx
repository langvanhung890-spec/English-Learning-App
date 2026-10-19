import { useState, useEffect, useMemo } from "react"
import { vocabularyTests, grammarTests } from "../data/mockTestData"

export default function MockTest() {
  const [activeTab, setActiveTab] = useState("vocab") // 'vocab' | 'grammar'
  const [selectedTest, setSelectedTest] = useState(null)
  const [currentQIndex, setCurrentQIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes default in seconds
  const [timerActive, setTimerActive] = useState(false)
  const [historyScores, setHistoryScores] = useState(() => {
    try {
      const saved = localStorage.getItem("english_app_test_scores")
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  // Countdown timer effect
  useEffect(() => {
    let interval = null
    if (timerActive && timeLeft > 0 && !submitted) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval)
            handleSubmitTest()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [timerActive, timeLeft, submitted])

  const currentTestList = activeTab === "vocab" ? vocabularyTests : grammarTests
  const activeTestData = selectedTest
    ? [...vocabularyTests, ...grammarTests].find((t) => t.id === selectedTest)
    : null

  const handleStartTest = (test) => {
    setSelectedTest(test.id)
    setCurrentQIndex(0)
    setUserAnswers({})
    setSubmitted(false)
    setTimeLeft(test.durationMinutes * 60)
    setTimerActive(true)
  }

  const handleSelectOption = (qId, optionIdx) => {
    if (submitted) return
    setUserAnswers((prev) => ({ ...prev, [qId]: optionIdx }))
  }

  const handleSubmitTest = () => {
    setSubmitted(true)
    setTimerActive(false)

    if (activeTestData) {
      const score = activeTestData.questions.filter(
        (q) => userAnswers[q.id] === q.answer,
      ).length
      const updated = {
        ...historyScores,
        [activeTestData.id]: {
          score,
          total: activeTestData.questions.length,
          date: new Date().toLocaleDateString("vi-VN"),
        },
      }
      setHistoryScores(updated)
      try {
        localStorage.setItem("english_app_test_scores", JSON.stringify(updated))
      } catch (e) {
        console.error(e)
      }
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const scoreCount = useMemo(() => {
    if (!activeTestData) return 0
    return activeTestData.questions.filter(
      (q) => userAnswers[q.id] === q.answer,
    ).length
  }, [activeTestData, userAnswers])

  // ================= 1. MÀN HÌNH LÀM BÀI / KẾT QUẢ THI =================
  if (activeTestData) {
    const totalQ = activeTestData.questions.length
    const currentQ = activeTestData.questions[currentQIndex]
    const answeredCount = Object.keys(userAnswers).length
    const pct = Math.round((scoreCount / totalQ) * 100)

    return (
      <div className="px-4 pt-10 pb-24">
        {/* Header navigation bar */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => {
              if (!submitted && answeredCount > 0) {
                if (
                  window.confirm(
                    "Bạn có chắc muốn thoát bài thi? Kết quả hiện tại sẽ không được lưu.",
                  )
                ) {
                  setSelectedTest(null)
                  setTimerActive(false)
                }
              } else {
                setSelectedTest(null)
                setTimerActive(false)
              }
            }}
            className="flex items-center gap-1.5 text-xs font-bold text-purple-700 hover:underline cursor-pointer"
          >
            <span>←</span>
            <span>Chọn đề khác</span>
          </button>

          {!submitted ? (
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black shadow-2xs ${
                timeLeft < 120
                  ? "bg-red-100 text-red-700 animate-pulse"
                  : "bg-purple-100 text-purple-800"
              }`}
            >
              <span>⏱️</span>
              <span>{formatTime(timeLeft)}</span>
            </div>
          ) : (
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
              Đã hoàn thành
            </span>
          )}
        </div>

        {/* Title Card */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 mb-4 shadow-2xs">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700">
              {activeTestData.icon} {activeTestData.level}
            </span>
            <span className="text-xs text-gray-400 font-semibold">
              Đã làm: {answeredCount}/{totalQ} câu
            </span>
          </div>
          <h2
            className="text-lg font-black text-gray-900 leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {activeTestData.title}
          </h2>
        </div>

        {/* ================= RESULT SUMMARY BANNER ================= */}
        {submitted && (
          <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-md mb-6 text-center">
            <span className="text-4xl block mb-2">
              {scoreCount >= 8 ? "🎉" : scoreCount >= 5 ? "👏" : "💪"}
            </span>
            <h3
              className="text-2xl font-black text-gray-900 mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Kết quả: {scoreCount}/{totalQ} Điểm
            </h3>
            <p
              className="text-xs font-bold mb-4"
              style={{
                color:
                  scoreCount >= 8
                    ? "#059669"
                    : scoreCount >= 5
                      ? "#D97706"
                      : "#DC2626",
              }}
            >
              Tỷ lệ chính xác: {pct}% ·{" "}
              {scoreCount >= 8
                ? "Xuất sắc! Nắm vững kiến thức."
                : scoreCount >= 5
                  ? "Khá tốt! Cần chú ý thêm một số điểm."
                  : "Cần ôn luyện kỹ lại phần này nhé!"}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setUserAnswers({})
                  setSubmitted(false)
                  setTimeLeft(activeTestData.durationMinutes * 60)
                  setTimerActive(true)
                  setCurrentQIndex(0)
                }}
                className="flex-1 py-3 rounded-2xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 cursor-pointer shadow-xs transition-transform active:scale-95"
              >
                🔄 Làm lại đề này
              </button>
              <button
                onClick={() => {
                  setSelectedTest(null)
                  setTimerActive(false)
                }}
                className="flex-1 py-3 rounded-2xl text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 cursor-pointer transition-transform active:scale-95"
              >
                📋 Chọn đề thi khác
              </button>
            </div>
          </div>
        )}

        {/* ================= QUESTION PALETTE (1..10) ================= */}
        <div className="bg-white rounded-2xl p-3.5 border border-gray-100 mb-4 shadow-2xs">
          <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-2.5">
            <span>Bảng câu hỏi</span>
            <span>
              Câu {currentQIndex + 1} / {totalQ}
            </span>
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
            {activeTestData.questions.map((q, idx) => {
              const isAnswered = userAnswers[q.id] !== undefined
              const isCurrent = currentQIndex === idx
              const isRight = submitted && userAnswers[q.id] === q.answer
              const isWrong =
                submitted && isAnswered && userAnswers[q.id] !== q.answer

              let bg = "#F3F4F6"
              let text = "#4B5563"
              let border = "transparent"

              if (submitted) {
                if (isRight) {
                  bg = "#D1FAE5"
                  text = "#065F46"
                } else if (isWrong) {
                  bg = "#FEE2E2"
                  text = "#991B1B"
                }
              } else if (isCurrent) {
                bg = "var(--color-primary)"
                text = "white"
                border = "var(--color-primary)"
              } else if (isAnswered) {
                bg = "#EDE9FE"
                text = "#6D28D9"
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQIndex(idx)}
                  className="w-full aspect-square rounded-xl text-xs font-black transition-all cursor-pointer flex items-center justify-center border"
                  style={{ background: bg, color: text, borderColor: border }}
                >
                  {idx + 1}
                </button>
              )
            })}
          </div>
        </div>

        {/* ================= SINGLE QUESTION CARD ================= */}
        {currentQ && (
          <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-2xs mb-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-extrabold text-purple-700">
                CÂU HỎI SỐ {currentQIndex + 1}
              </span>
              {submitted && (
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    userAnswers[currentQ.id] === currentQ.answer
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {userAnswers[currentQ.id] === currentQ.answer
                    ? "✅ Đúng"
                    : "❌ Sai"}
                </span>
              )}
            </div>

            <p className="text-sm font-bold text-gray-900 leading-relaxed mb-4">
              {currentQ.question}
            </p>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = userAnswers[currentQ.id] === optIdx
                const isCorrectAnswer = optIdx === currentQ.answer

                let optBg = "white"
                let optBorder = "var(--color-border)"
                let optText = "var(--color-text)"

                if (submitted) {
                  if (isCorrectAnswer) {
                    optBg = "#D1FAE5"
                    optBorder = "#10B981"
                    optText = "#065F46"
                  } else if (isSelected && !isCorrectAnswer) {
                    optBg = "#FEE2E2"
                    optBorder = "#EF4444"
                    optText = "#991B1B"
                  }
                } else if (isSelected) {
                  optBg = "var(--color-primary-light)"
                  optBorder = "var(--color-primary)"
                  optText = "var(--color-primary)"
                }

                return (
                  <button
                    key={optIdx}
                    disabled={submitted}
                    onClick={() => handleSelectOption(currentQ.id, optIdx)}
                    className="w-full text-left px-4 py-3 rounded-2xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-3"
                    style={{
                      background: optBg,
                      border: `1.5px solid ${optBorder}`,
                      color: optText,
                    }}
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0"
                      style={{
                        background: isSelected
                          ? "var(--color-primary)"
                          : "#F3F4F6",
                        color: isSelected ? "white" : "#6B7280",
                      }}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="flex-1">{opt}</span>
                    {submitted && isCorrectAnswer && <span>✓</span>}
                  </button>
                )
              })}
            </div>

            {/* Explanation box after submission */}
            {submitted && (
              <div className="mt-4 p-4 rounded-2xl bg-purple-50/80 border border-purple-100 text-xs">
                <p className="font-extrabold text-purple-900 mb-1 flex items-center gap-1">
                  <span>💡 Lời giải thích chi tiết:</span>
                </p>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {currentQ.explanation}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Navigation bottom buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentQIndex((i) => Math.max(0, i - 1))}
            disabled={currentQIndex === 0}
            className="flex-1 py-3 rounded-2xl border border-gray-200 text-xs font-bold text-gray-600 bg-white hover:bg-gray-50 disabled:opacity-40 cursor-pointer"
          >
            ← Câu trước
          </button>

          {currentQIndex < totalQ - 1 ? (
            <button
              onClick={() =>
                setCurrentQIndex((i) => Math.min(totalQ - 1, i + 1))
              }
              className="flex-1 py-3 rounded-2xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 cursor-pointer shadow-xs"
            >
              Câu tiếp theo →
            </button>
          ) : !submitted ? (
            <button
              onClick={handleSubmitTest}
              className="flex-1 py-3 rounded-2xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 cursor-pointer shadow-xs"
            >
              Nộp bài thi 📝
            </button>
          ) : (
            <button
              onClick={() => setCurrentQIndex(0)}
              className="flex-1 py-3 rounded-2xl text-xs font-bold text-purple-700 bg-purple-100 hover:bg-purple-200 cursor-pointer"
            >
              Xem lại từ câu 1 🔍
            </button>
          )}
        </div>

        {!submitted && (
          <button
            onClick={handleSubmitTest}
            className="w-full mt-3 py-3 rounded-2xl text-xs font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            Nộp bài ngay (Đã làm {answeredCount}/{totalQ} câu)
          </button>
        )}
      </div>
    )
  }

  // ================= 2. MÀN HÌNH CHỌN PHÂN HỆ KIỂM TRA =================
  return (
    <div className="px-4 pt-10 pb-24">
      {/* Title */}
      <div className="mb-4">
        <h1
          className="text-2xl font-black mb-1 flex items-center gap-2"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text)",
          }}
        >
          <span>Thi thử & Kiểm tra</span>
          <span>📝</span>
        </h1>
        <p className="text-xs" style={{ color: "var(--color-muted)" }}>
          Hệ thống đề thi trắc nghiệm chia theo từng kỹ năng với lời giải chi
          tiết
        </p>
      </div>

      {/* Primary Category Tabs: KIỂM TRA TỪ VỰNG vs KIỂM TRA NGỮ PHÁP */}
      <div className="mb-5 flex rounded-2xl p-1 bg-gray-100 shadow-2xs">
        <button
          onClick={() => setActiveTab("vocab")}
          className={`flex-1 rounded-xl py-3 font-black text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === "vocab"
              ? "bg-purple-600 text-white shadow-xs"
              : "text-gray-500 hover:text-gray-800"
          }`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span>📚</span>
          <span>Kiểm tra Từ vựng ({vocabularyTests.length} đề)</span>
        </button>
        <button
          onClick={() => setActiveTab("grammar")}
          className={`flex-1 rounded-xl py-3 font-black text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
            activeTab === "grammar"
              ? "bg-purple-600 text-white shadow-xs"
              : "text-gray-500 hover:text-gray-800"
          }`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span>📖</span>
          <span>Kiểm tra Ngữ pháp ({grammarTests.length} đề)</span>
        </button>
      </div>

      {/* Description banner for chosen category */}
      <div
        className="rounded-2xl p-3.5 mb-4 border"
        style={{
          background: activeTab === "vocab" ? "#EDE9FE" : "#D1FAE5",
          borderColor: activeTab === "vocab" ? "#C4B5FD" : "#A7F3D0",
        }}
      >
        <p
          className="text-xs font-bold mb-0.5"
          style={{
            color: activeTab === "vocab" ? "#6D28D9" : "#047857",
          }}
        >
          {activeTab === "vocab"
            ? "🎯 Đề thi Từ vựng: Đánh giá độ nhạy từ, collocations và từ vựng chuyên ngành"
            : "⚡ Đề thi Ngữ pháp: Đánh giá các thì, cấu trúc bị động, câu điều kiện và mệnh đề"}
        </p>
        <p className="text-[11px] text-gray-600">
          Mỗi đề gồm 10 câu hỏi trắc nghiệm · Thời gian làm bài 10 phút · Có
          đồng hồ bấm giờ và đáp án giải thích.
        </p>
      </div>

      {/* List of Mock Tests for active category */}
      <div className="flex flex-col gap-3">
        {currentTestList.map((test, index) => {
          const pastResult = historyScores[test.id]
          return (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-5 border border-gray-100 shadow-2xs hover:border-purple-300 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl p-2.5 rounded-2xl bg-purple-50 text-purple-700">
                    {test.icon}
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
                        Đề số {index + 1}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                        {test.level}
                      </span>
                    </div>
                    <h3
                      className="text-sm font-black text-gray-900 mt-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {test.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-3">{test.description}</p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
                <div className="flex items-center gap-2 text-gray-400 font-semibold text-[11px]">
                  <span>❓ {test.questions.length} câu</span>
                  <span>·</span>
                  <span>⏱️ {test.durationMinutes} phút</span>
                  {pastResult && (
                    <>
                      <span>·</span>
                      <span className="text-emerald-600 font-extrabold">
                        Điểm cao nhất: {pastResult.score}/{pastResult.total}
                      </span>
                    </>
                  )}
                </div>

                <button
                  onClick={() => handleStartTest(test)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 cursor-pointer shadow-xs transition-transform active:scale-95"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pastResult ? "Thi lại" : "Bắt đầu thi"} →
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
