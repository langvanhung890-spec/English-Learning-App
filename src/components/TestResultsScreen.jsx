import { useState } from "react"
import {
  Trophy,
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Home,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react"

export default function TestResultsScreen({
  score = 85,
  totalScore = 100,
  correctCount = 17,
  totalQuestions = 20,
  duration = "11:42",
  testTitle = "Đề thi thử TOEIC Reading & Vocabulary số 01",
  onRestart,
  onGoHome,
}) {
  const [expandedQ, setExpandedQ] = useState(null)

  const sampleReviewQuestions = [
    {
      id: 1,
      q: "The company's quarterly revenue has increased ______ beyond expectations.",
      userAns: "substantially",
      correctAns: "substantially",
      isCorrect: true,
      explanation: "Phó từ 'substantially' (đáng kể) bổ nghĩa cho động từ 'increased'.",
    },
    {
      id: 2,
      q: "All participants are required to submit their feedback prior ______ Friday.",
      userAns: "to",
      correctAns: "to",
      isCorrect: true,
      explanation: "Cụm cố định 'prior to' nghĩa là 'trước khi'.",
    },
    {
      id: 3,
      q: "Neither the CEO nor his assistants ______ available for interview today.",
      userAns: "is",
      correctAns: "are",
      isCorrect: false,
      explanation: "Quy tắc 'Neither A nor B + V chia theo B'. B là 'assistants' (số nhiều) nên động từ là 'are'.",
    },
    {
      id: 4,
      q: "The warranty policy covers accidental damage ______ water damage.",
      userAns: "excluding",
      correctAns: "excluding",
      isCorrect: true,
      explanation: "Giới từ 'excluding' nghĩa là 'ngoại trừ'.",
    },
  ]

  const pct = Math.round((score / totalScore) * 100)

  return (
    <div className="px-4 pt-6 pb-28">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {onGoHome && (
            <button
              onClick={onGoHome}
              className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-rose-600 flex items-center gap-1">
              <Award className="w-3 h-3" /> Báo cáo kết quả thi
            </span>
            <h1 className="text-xl font-black text-gray-900 font-display">
              Bảng Điểm & Phân Tích
            </h1>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-black">
          Hoàn thành
        </span>
      </div>

      {/* Main Score Hero Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-rose-600 via-rose-700 to-pink-700 text-white shadow-xl shadow-rose-600/20 text-center mb-5 relative overflow-hidden">
        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center text-3xl mb-3 shadow-inner">
          🏆
        </div>

        <span className="inline-block px-3 py-0.5 rounded-full bg-white/25 text-xs font-extrabold mb-1">
          {testTitle}
        </span>

        <h2 className="text-4xl font-black font-display tracking-tight my-1">
          {score} <span className="text-2xl font-bold opacity-80">/ {totalScore}</span>
        </h2>

        <p className="text-xs text-rose-100 font-semibold mb-4">
          Ước lượng trình độ: <strong className="text-white">TOEIC 750+ / IELTS 6.5</strong>
        </p>

        {/* 3 Quick Stats */}
        <div className="grid grid-cols-3 gap-2 bg-black/20 backdrop-blur-xs p-3 rounded-2xl">
          <div>
            <p className="text-[10px] text-rose-200 font-medium">Đúng</p>
            <p className="text-sm font-black text-white">{correctCount}/{totalQuestions}</p>
          </div>
          <div>
            <p className="text-[10px] text-rose-200 font-medium">Chính xác</p>
            <p className="text-sm font-black text-white">{pct}%</p>
          </div>
          <div>
            <p className="text-[10px] text-rose-200 font-medium">Thời gian</p>
            <p className="text-sm font-black text-white">{duration}</p>
          </div>
        </div>
      </div>

      {/* Skill Performance Breakdown */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-5">
        <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider font-display mb-3">
          Phân tích năng lực theo kỹ năng
        </h3>

        <div className="space-y-3">
          {[
            { skill: "Từ vựng chuyên đề (Vocabulary)", pct: 90, color: "bg-indigo-600", text: "Xuất sắc" },
            { skill: "Ngữ pháp câu phức (Grammar)", pct: 75, color: "bg-amber-500", text: "Khá tốt" },
            { skill: "Đọc hiểu nhanh (Speed Reading)", pct: 85, color: "bg-emerald-600", text: "Tốt" },
            { skill: "Xử lý bẫy đề thi (Exam Tactics)", pct: 80, color: "bg-sky-600", text: "Tốt" },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between text-xs font-bold mb-1">
                <span className="text-gray-700">{item.skill}</span>
                <span className="text-gray-900">{item.pct}% ({item.text})</span>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className={`h-full rounded-full ${item.color} transition-all duration-500`}
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Questions Breakdown */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-6">
        <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider font-display mb-3">
          Xem lại đáp án & Lời giải chi tiết
        </h3>

        <div className="space-y-2.5">
          {sampleReviewQuestions.map((q) => {
            const isExp = expandedQ === q.id
            return (
              <div
                key={q.id}
                className="p-3 rounded-2xl border border-gray-100 bg-gray-50/70"
              >
                <div
                  onClick={() => setExpandedQ(isExp ? null : q.id)}
                  className="flex items-start justify-between gap-2 cursor-pointer"
                >
                  <div className="flex items-start gap-2">
                    {q.isCorrect ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-xs font-bold text-gray-800 leading-snug">
                        Câu {q.id}: {q.q}
                      </p>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Bạn chọn: <strong className={q.isCorrect ? "text-emerald-700" : "text-red-600"}>{q.userAns}</strong>
                        {!q.isCorrect && (
                          <span> · Đáp án đúng: <strong className="text-emerald-700">{q.correctAns}</strong></span>
                        )}
                      </p>
                    </div>
                  </div>
                  {isExp ? (
                    <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </div>

                {isExp && (
                  <div className="mt-2.5 pt-2.5 border-t border-gray-200 text-xs text-indigo-900 bg-indigo-50/60 p-2.5 rounded-xl font-medium animate-fadeIn">
                    💡 <strong>Giải thích:</strong> {q.explanation}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onRestart}
          className="py-3 px-4 rounded-2xl border border-gray-200 bg-white text-gray-700 font-bold text-xs hover:bg-gray-50 transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Làm lại bài thi</span>
        </button>

        <button
          onClick={onGoHome}
          className="py-3 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-200 transition-transform active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
        >
          <Home className="w-4 h-4" />
          <span>Về Trang chủ</span>
        </button>
      </div>
    </div>
  )
}
