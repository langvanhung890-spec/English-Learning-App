import { useState } from "react"
import { writingPrompts } from "../data/extraAppContent"
import {
  PenTool,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Copy,
  ArrowLeft,
  Award,
  BookOpen,
} from "lucide-react"

export default function WritingScreen({ onBack }) {
  const [activePromptId, setActivePromptId] = useState(1)
  const [userText, setUserText] = useState("")
  const [showSample, setShowSample] = useState(false)
  const [aiReview, setAiReview] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const prompt =
    writingPrompts.find((p) => p.id === activePromptId) || writingPrompts[0]

  // Count words
  const words = userText
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0)
  const wordCount = words.length
  const wordProgress = Math.min(
    100,
    Math.round((wordCount / prompt.targetWords) * 100),
  )

  // AI Evaluation Simulation
  const handleEvaluate = () => {
    if (wordCount < 10) {
      alert("Vui lòng viết tối thiểu 10 từ để AI có đủ dữ liệu chấm điểm.")
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)

      const band =
        wordCount >= prompt.minWords ? (7.0 + Math.random() * 1.5).toFixed(1) : "5.5"
      const taskScore = Math.floor(Math.random() * 15) + 82
      const vocabScore = Math.floor(Math.random() * 12) + 85
      const grammarScore = Math.floor(Math.random() * 10) + 86

      setAiReview({
        band,
        taskScore,
        vocabScore,
        grammarScore,
        strengths: [
          "Bố cục bài viết rõ ràng, phân chia đoạn văn logic.",
          "Sử dụng linh hoạt các từ nối chuyển ý (transitional phrases).",
          "Từ vựng chuyên ngành được áp dụng đúng ngữ cảnh.",
        ],
        improvements: [
          "Có thể nâng cấp cấu trúc câu phức với mệnh đề quan hệ rút gọn.",
          "Chú ý tránh lặp lại từ 'important' nhiều lần, có thể thay bằng 'crucial' hoặc 'imperative'.",
        ],
      })
    }, 700)
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
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 flex items-center gap-1">
              <PenTool className="w-3 h-3" /> AI Writing Studio
            </span>
            <h1 className="text-xl font-black text-gray-900 font-display">
              Luyện Viết & Chấm Điểm AI
            </h1>
          </div>
        </div>

        <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>IELTS / TOEIC</span>
        </div>
      </div>

      {/* Prompt Selectors */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-4">
        {writingPrompts.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setActivePromptId(p.id)
              setUserText("")
              setAiReview(null)
              setShowSample(false)
            }}
            className={`px-3 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
              activePromptId === p.id
                ? "bg-amber-600 text-white shadow-md shadow-amber-200"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>✍️ {p.category}</span>
          </button>
        ))}
      </div>

      {/* Prompt Box */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-4">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
            {prompt.difficulty} Level
          </span>
          <span className="text-gray-400 font-medium">
            Mục tiêu: {prompt.targetWords} từ
          </span>
        </div>

        <h2 className="text-base font-black text-gray-900 font-display mb-1">
          {prompt.title}
        </h2>
        <p className="text-xs text-gray-500 mb-3 italic">
          → {prompt.titleVi}
        </p>

        <p className="text-xs text-gray-700 leading-relaxed font-medium bg-gray-50 p-3 rounded-2xl border border-gray-100">
          {prompt.prompt}
        </p>

        {/* Recommended Key Phrases */}
        {prompt.keywords && (
          <div className="mt-3">
            <span className="text-[11px] font-bold text-gray-500 block mb-1">
              Gợi ý từ nối & Cụm từ điểm cao:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {prompt.keywords.map((kw, i) => {
                const used = userText.toLowerCase().includes(kw.toLowerCase())
                return (
                  <span
                    key={i}
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 transition-colors ${
                      used
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {used && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                    {kw}
                  </span>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* Text Editor Area */}
      <div className="p-4 rounded-3xl bg-white border border-gray-200 shadow-sm mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-gray-700">
            Bài làm của bạn:
          </span>
          <div className="flex items-center gap-2 text-xs">
            <span
              className={`font-black ${
                wordCount >= prompt.minWords
                  ? "text-emerald-600"
                  : "text-amber-600"
              }`}
            >
              {wordCount} / {prompt.targetWords} từ
            </span>
          </div>
        </div>

        {/* Word Count Progress Bar */}
        <div className="w-full h-1.5 bg-gray-100 rounded-full mb-3 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              wordCount >= prompt.minWords ? "bg-emerald-500" : "bg-amber-400"
            }`}
            style={{ width: `${wordProgress}%` }}
          />
        </div>

        <textarea
          rows={7}
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          placeholder="Bắt đầu gõ đoạn văn tiếng Anh của bạn tại đây..."
          className="w-full p-3 rounded-2xl border border-gray-200 text-xs leading-relaxed font-sans focus:border-amber-500 focus:ring-2 focus:ring-amber-100 outline-none resize-none"
        />

        {/* Buttons: Evaluate & Sample */}
        <div className="flex items-center justify-between gap-2 mt-3">
          <button
            onClick={() => setShowSample((prev) => !prev)}
            className="py-2.5 px-3.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-xs hover:bg-gray-50 transition-colors cursor-pointer"
          >
            {showSample ? "Ẩn bài mẫu" : "Xem bài mẫu Band 8.0"}
          </button>

          <button
            onClick={handleEvaluate}
            disabled={isSubmitting}
            className="py-2.5 px-5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md shadow-amber-200 transition-transform active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            {isSubmitting ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chấm điểm AI</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Sample Answer Modal / Card */}
      {showSample && (
        <div className="p-4 rounded-3xl bg-amber-50/70 border border-amber-200 mb-4 animate-fadeIn">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-black text-amber-900 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" /> Bài viết mẫu tham khảo (Band 8.0+)
            </span>
            <button
              onClick={() => {
                navigator.clipboard?.writeText(prompt.sampleAnswer)
                alert("Đã sao chép bài mẫu vào clipboard!")
              }}
              className="text-[11px] font-bold text-amber-700 hover:underline flex items-center gap-0.5 cursor-pointer"
            >
              <Copy className="w-3 h-3" /> Copy
            </button>
          </div>
          <p className="text-xs text-amber-950 font-serif leading-relaxed whitespace-pre-line p-3 bg-white/80 rounded-2xl border border-amber-100">
            {prompt.sampleAnswer}
          </p>
        </div>
      )}

      {/* AI Score Feedback */}
      {aiReview && (
        <div className="p-5 rounded-3xl bg-emerald-50 border border-emerald-200 shadow-sm animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800">
                KẾT QUẢ ĐÁNH GIÁ WRITING AI
              </span>
              <h3 className="text-sm font-black text-emerald-950 font-display">
                IELTS Writing Band Score
              </h3>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-emerald-700 font-display">
                Band {aiReview.band}
              </span>
              <p className="text-[10px] text-emerald-600 font-bold">Good Competent</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="p-2.5 rounded-xl bg-white border border-emerald-100 text-center">
              <p className="text-[10px] text-gray-500 font-bold">Nhiệm vụ (Task)</p>
              <p className="text-sm font-black text-gray-900 mt-0.5">{aiReview.taskScore}%</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-emerald-100 text-center">
              <p className="text-[10px] text-gray-500 font-bold">Từ vựng (Lexical)</p>
              <p className="text-sm font-black text-gray-900 mt-0.5">{aiReview.vocabScore}%</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-emerald-100 text-center">
              <p className="text-[10px] text-gray-500 font-bold">Ngữ pháp (Grammar)</p>
              <p className="text-sm font-black text-gray-900 mt-0.5">{aiReview.grammarScore}%</p>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div>
              <p className="font-bold text-emerald-900 flex items-center gap-1 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Điểm mạnh:
              </p>
              <ul className="list-disc pl-5 text-emerald-800 space-y-0.5 text-[11px]">
                {aiReview.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-amber-900 flex items-center gap-1 mb-1 pt-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> Đề xuất cải thiện:
              </p>
              <ul className="list-disc pl-5 text-amber-800 space-y-0.5 text-[11px]">
                {aiReview.improvements.map((im, i) => (
                  <li key={i}>{im}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
