import { useState } from "react"
import { grammarQuizQuestions } from "../data/extraAppContent"
import {
  FileCheck2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BookOpen,
} from "lucide-react"

export default function GrammarQuizScreen({ onBack, onGoToGrammarTheory }) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showExplanation, setShowExplanation] = useState({})
  const [isCompleted, setIsCompleted] = useState(false)

  const currentQ = grammarQuizQuestions[currentIdx]
  const total = grammarQuizQuestions.length
  const selectedOpt = selectedAnswers[currentQ.id]
  const hasAnswered = selectedOpt !== undefined
  const isCorrect = selectedOpt === currentQ.correct

  const handleSelectOption = (optIdx) => {
    if (hasAnswered) return
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: optIdx }))
    setShowExplanation((prev) => ({ ...prev, [currentQ.id]: true }))
  }

  const handleNext = () => {
    if (currentIdx < total - 1) {
      setCurrentIdx((prev) => prev + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1)
    }
  }

  const handleRestart = () => {
    setCurrentIdx(0)
    setSelectedAnswers({})
    setShowExplanation({})
    setIsCompleted(false)
  }

  // Calculate score
  const correctCount = Object.keys(selectedAnswers).filter(
    (qId) =>
      selectedAnswers[qId] ===
      grammarQuizQuestions.find((q) => q.id === Number(qId))?.correct,
  ).length

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
            <span className="text-[10px] font-black uppercase tracking-wider text-violet-600 flex items-center gap-1">
              <FileCheck2 className="w-3 h-3" /> Luyện tập tương tác
            </span>
            <h1 className="text-xl font-black text-gray-900 font-display">
              Bài Tập Ngữ Pháp Chuyên Sâu
            </h1>
          </div>
        </div>

        <button
          onClick={onGoToGrammarTheory}
          className="px-2.5 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold flex items-center gap-1 hover:bg-purple-100 transition-colors cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Lý thuyết 12 thì</span>
        </button>
      </div>

      {!isCompleted ? (
        <>
          {/* Progress bar */}
          <div className="flex items-center justify-between text-xs text-gray-500 font-bold mb-2">
            <span>
              Câu hỏi {currentIdx + 1} / {total}
            </span>
            <span className="text-violet-600 font-black">
              {Math.round(((currentIdx + 1) / total) * 100)}%
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-gray-200 mb-5 overflow-hidden">
            <div
              className="h-full bg-violet-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-4">
            <div className="inline-block px-2.5 py-0.5 rounded-md bg-violet-100 text-violet-800 text-[10px] font-black mb-3">
              Chủ điểm: {currentQ.rule}
            </div>

            <h2 className="text-base font-extrabold text-gray-900 leading-snug mb-5 font-display">
              {currentQ.question}
            </h2>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((option, optIdx) => {
                let btnStyle =
                  "border-gray-200 bg-gray-50/50 hover:bg-gray-100 text-gray-800"
                let icon = null

                if (hasAnswered) {
                  if (optIdx === currentQ.correct) {
                    btnStyle =
                      "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-2 ring-emerald-200"
                    icon = <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  } else if (optIdx === selectedOpt) {
                    btnStyle =
                      "border-red-500 bg-red-50 text-red-900 font-bold"
                    icon = <XCircle className="w-4 h-4 text-red-600" />
                  } else {
                    btnStyle = "border-gray-200 bg-gray-50 text-gray-400 opacity-60"
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={hasAnswered}
                    className={`w-full p-3.5 rounded-2xl border text-left text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center font-bold text-[11px] text-gray-700 shrink-0 shadow-2xs">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{option}</span>
                    </div>
                    {icon}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Explanation Box */}
          {hasAnswered && (
            <div
              className={`p-4 rounded-2xl mb-4 border transition-all animate-fadeIn ${
                isCorrect
                  ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                  : "bg-amber-50 border-amber-200 text-amber-900"
              }`}
            >
              <div className="flex items-center gap-1.5 font-bold text-xs mb-1">
                <HelpCircle className="w-4 h-4" />
                <span>
                  {isCorrect ? "🎉 Chính xác!" : "💡 Giải thích ngữ pháp chi tiết:"}
                </span>
              </div>
              <p className="text-xs leading-relaxed mt-1 font-medium">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-3 mt-4">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="py-2.5 px-4 rounded-xl border border-gray-200 text-gray-600 font-bold text-xs disabled:opacity-40 cursor-pointer hover:bg-gray-50"
            >
              ← Câu trước
            </button>

            <button
              onClick={handleNext}
              disabled={!hasAnswered}
              className="py-2.5 px-6 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs shadow-md shadow-violet-200 disabled:opacity-50 cursor-pointer flex items-center gap-1.5"
            >
              <span>{currentIdx === total - 1 ? "Xem kết quả" : "Câu tiếp theo"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </>
      ) : (
        /* Completion Screen */
        <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-xl text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-violet-100 text-violet-600 mx-auto flex items-center justify-center text-3xl">
            🏆
          </div>
          <h2 className="text-xl font-black text-gray-900 font-display">
            Hoàn thành bài tập ngữ pháp!
          </h2>
          <p className="text-xs text-gray-500">
            Bạn đã xuất sắc trả lời đúng{" "}
            <strong className="text-violet-600 text-base">
              {correctCount} / {total}
            </strong>{" "}
            câu hỏi trắc nghiệm.
          </p>

          <div className="p-4 rounded-2xl bg-violet-50 border border-violet-100 text-xs font-bold text-violet-900">
            ⭐ Nhận ngay +{correctCount * 15} XP vào kho tích lũy!
          </div>

          <div className="space-y-2 pt-2">
            <button
              onClick={handleRestart}
              className="w-full py-3 px-4 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs shadow-md shadow-violet-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm lại bài tập</span>
            </button>
            <button
              onClick={onGoToGrammarTheory}
              className="w-full py-2.5 px-4 rounded-2xl border border-gray-200 text-gray-700 font-bold text-xs hover:bg-gray-50 cursor-pointer"
            >
              Ôn lại 12 thì ngữ pháp
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
