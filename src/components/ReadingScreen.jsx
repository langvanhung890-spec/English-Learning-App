import { useState } from "react"
import { readingArticles } from "../data/extraAppContent"
import { speakEnglish } from "../utils/mediaUtils"
import {
  Compass,
  BookOpen,
  Volume2,
  Languages,
  CheckCircle2,
  HelpCircle,
  Clock,
  ArrowLeft,
  Sparkles,
} from "lucide-react"

export default function ReadingScreen({ onBack }) {
  const [activeArticleId, setActiveArticleId] = useState(1)
  const [showViTranslation, setShowViTranslation] = useState(true)
  const [selectedWord, setSelectedWord] = useState(null)
  const [quizAnswers, setQuizAnswers] = useState({})

  const article =
    readingArticles.find((a) => a.id === activeArticleId) || readingArticles[0]

  const handleSelectQuiz = (qIdx, optIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))
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
            <span className="text-[10px] font-black uppercase tracking-wider text-teal-600 flex items-center gap-1">
              <Compass className="w-3 h-3" /> Đọc hiểu song ngữ & Báo chí
            </span>
            <h1 className="text-xl font-black text-gray-900 font-display">
              Reading Comprehension Lab
            </h1>
          </div>
        </div>

        <button
          onClick={() => setShowViTranslation((prev) => !prev)}
          className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer ${
            showViTranslation
              ? "bg-teal-100 text-teal-800 border border-teal-200"
              : "bg-gray-100 text-gray-600"
          }`}
          title="Bật/Tắt bản dịch tiếng Việt song ngữ"
        >
          <Languages className="w-3.5 h-3.5" />
          <span>{showViTranslation ? "Ẩn dịch" : "Hiện dịch"}</span>
        </button>
      </div>

      {/* Article Switcher Pills */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-4">
        {readingArticles.map((art) => (
          <button
            key={art.id}
            onClick={() => {
              setActiveArticleId(art.id)
              setQuizAnswers({})
              setSelectedWord(null)
            }}
            className={`px-3 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeArticleId === art.id
                ? "bg-teal-600 text-white shadow-md shadow-teal-200"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>{art.image}</span>
            <span>{art.category}</span>
          </button>
        ))}
      </div>

      {/* Article Container */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-black px-2 py-0.5 rounded bg-teal-100 text-teal-700">
            {article.level}
          </span>
          <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
        </div>

        <h2 className="text-lg font-black text-gray-900 font-display leading-snug mb-1">
          {article.title}
        </h2>
        <p className="text-xs text-gray-500 italic mb-4">
          → {article.titleVi}
        </p>

        {/* Read aloud article title button */}
        <div className="flex items-center gap-2 mb-5">
          <button
            onClick={() => speakEnglish(article.title)}
            className="px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-700 text-xs font-bold flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer shadow-xs"
          >
            <Volume2 className="w-4 h-4" />
            <span>Đọc tiêu đề</span>
          </button>
          <span className="text-[11px] text-gray-400">
            Chạm vào từ được gạch chân để tra nghĩa
          </span>
        </div>

        {/* Paragraphs */}
        <div className="space-y-4">
          {article.paragraphs.map((p, pIdx) => (
            <div
              key={pIdx}
              className="p-3.5 rounded-2xl bg-gray-50/70 border border-gray-100 space-y-2"
            >
              <div className="text-xs text-gray-800 leading-relaxed font-medium">
                {p.en}
              </div>

              {/* Vocabulary Highlights in this paragraph */}
              {p.vocabularyHighlights && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[10px] font-bold text-gray-400">
                    Từ khóa:
                  </span>
                  {p.vocabularyHighlights.map((vh, vIdx) => (
                    <button
                      key={vIdx}
                      onClick={() => {
                        setSelectedWord(vh)
                        speakEnglish(vh.word)
                      }}
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-100/70 text-teal-800 hover:bg-teal-200 transition-colors cursor-pointer"
                    >
                      {vh.word}: {vh.meaning}
                    </button>
                  ))}
                </div>
              )}

              {/* Vietnamese Translation Toggle */}
              {showViTranslation && (
                <p className="text-[11px] text-teal-900/80 italic pt-1 border-t border-gray-200/60 leading-relaxed">
                  {p.vi}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Reading Comprehension Quiz Section */}
      {article.quiz && (
        <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-4">
          <div className="flex items-center gap-1.5 mb-3">
            <HelpCircle className="w-4 h-4 text-teal-600" />
            <h3 className="text-sm font-black text-gray-900 font-display">
              Câu hỏi đọc hiểu (Comprehension Check)
            </h3>
          </div>

          <div className="space-y-4">
            {article.quiz.map((q, qIdx) => {
              const userAns = quizAnswers[qIdx]
              const hasAnswered = userAns !== undefined
              return (
                <div key={qIdx} className="p-3 rounded-2xl bg-gray-50 border border-gray-100">
                  <p className="text-xs font-bold text-gray-800 mb-2">
                    {qIdx + 1}. {q.question}
                  </p>

                  <div className="space-y-1.5">
                    {q.options.map((opt, optIdx) => {
                      let style =
                        "border-gray-200 bg-white hover:bg-gray-100 text-gray-700"
                      if (hasAnswered) {
                        if (optIdx === q.correct) {
                          style =
                            "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold"
                        } else if (optIdx === userAns) {
                          style = "border-red-500 bg-red-50 text-red-900"
                        } else {
                          style = "border-gray-200 bg-white text-gray-400 opacity-60"
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectQuiz(qIdx, optIdx)}
                          disabled={hasAnswered}
                          className={`w-full p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${style}`}
                        >
                          <span>{opt}</span>
                          {hasAnswered && optIdx === q.correct && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {hasAnswered && (
                    <p className="text-[11px] text-teal-800 bg-teal-50 p-2 rounded-lg mt-2 font-medium">
                      💡 {q.explanation}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
