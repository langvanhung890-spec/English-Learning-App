import { useState, useMemo } from "react"
import { speakEnglish } from "../utils/mediaUtils"
import { vocabularyCategories, vocabularyList } from "../data/vocabularyData"

export default function Flashcards() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [viewMode, setViewMode] = useState("flashcard") // 'flashcard' | 'list'
  const [searchQuery, setSearchQuery] = useState("")
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [knownIds, setKnownIds] = useState(() => {
    try {
      const saved = localStorage.getItem("english_app_known_words")
      return saved ? new Set(JSON.parse(saved)) : new Set()
    } catch {
      return new Set()
    }
  })
  const [unknownIds, setUnknownIds] = useState(new Set())

  // Lọc từ vựng theo danh mục và tìm kiếm
  const filteredWords = useMemo(() => {
    return vocabularyList.filter((item) => {
      const matchCategory =
        activeCategory === "all" || item.category === activeCategory
      const matchSearch =
        item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.meaning.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [activeCategory, searchQuery])

  const total = filteredWords.length
  const safeIndex = total > 0 ? Math.min(index, total - 1) : 0
  const currentCard = filteredWords[safeIndex]

  const currentKnownCount = useMemo(() => {
    return filteredWords.filter((w) => knownIds.has(w.id)).length
  }, [filteredWords, knownIds])

  const progress = total > 0 ? Math.round((currentKnownCount / total) * 100) : 0

  const handleNext = (result) => {
    if (!currentCard) return
    if (result === "known") {
      setKnownIds((prev) => {
        const nextSet = new Set(prev).add(currentCard.id)
        try {
          localStorage.setItem(
            "english_app_known_words",
            JSON.stringify([...nextSet]),
          )
        } catch (e) {
          console.error(e)
        }
        return nextSet
      })
      setUnknownIds((prev) => {
        const nextSet = new Set(prev)
        nextSet.delete(currentCard.id)
        return nextSet
      })
    } else {
      setUnknownIds((prev) => new Set(prev).add(currentCard.id))
    }

    setFlipped(false)
    setTimeout(() => {
      setIndex((i) => (i + 1 < total ? i + 1 : 0))
    }, 150)
  }

  const handleReset = () => {
    setIndex(0)
    setFlipped(false)
    setUnknownIds(new Set())
  }

  return (
    <div className="px-4 pt-10 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1
            className="text-2xl font-black flex items-center gap-2"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text)",
            }}
          >
            <span>Từ vựng & Flashcards</span>
            <span>🃏</span>
          </h1>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
            {total} từ vựng khả dụng · Đã nhớ {currentKnownCount} từ ({progress}
            %)
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setViewMode("flashcard")}
            title="Chế độ thẻ lật"
            className={`px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
              viewMode === "flashcard"
                ? "bg-white text-purple-700 shadow-xs"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            🃏 Thẻ lật
          </button>
          <button
            onClick={() => setViewMode("list")}
            title="Chế độ danh sách"
            className={`px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer transition-colors ${
              viewMode === "list"
                ? "bg-white text-purple-700 shadow-xs"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            📋 Danh sách
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-3">
        {vocabularyCategories.map((cat) => {
          const active = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id)
                setIndex(0)
                setFlipped(false)
              }}
              className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 border ${
                active
                  ? "bg-purple-600 text-white border-purple-600 shadow-xs"
                  : "bg-white text-gray-700 border-gray-200 hover:border-purple-300"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </button>
          )
        })}
      </div>

      {/* Search Input */}
      <div className="relative mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setIndex(0)
          }}
          placeholder="Tìm từ tiếng Anh hoặc nghĩa tiếng Việt..."
          className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-white border text-xs outline-none focus:border-purple-600 shadow-2xs"
          style={{ borderColor: "var(--color-border)" }}
        />
        <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
          🔍
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-2.5 text-gray-400 text-xs hover:text-gray-600 cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {total === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 p-6">
          <p className="text-4xl mb-2">🔍</p>
          <p className="text-sm font-bold text-gray-700">
            Không tìm thấy từ vựng nào
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Thử đổi chủ đề hoặc xóa từ khóa tìm kiếm
          </p>
        </div>
      ) : viewMode === "flashcard" ? (
        /* ================= FLASHCARD MODE ================= */
        <div>
          {/* Progress Bar */}
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5 text-gray-500">
            <span>
              Thẻ {safeIndex + 1} / {total}
            </span>
            <span>Tiến độ: {progress}%</span>
          </div>
          <div
            className="w-full h-2 rounded-full mb-5"
            style={{ background: "var(--color-border)" }}
          >
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((safeIndex + 1) / total) * 100}%`,
                background: "var(--color-primary)",
              }}
            />
          </div>

          {/* Flip Card Container */}
          <div
            className="card-flip w-full h-72 mb-5 cursor-pointer select-none"
            onClick={() => setFlipped((f) => !f)}
          >
            <div
              className={`card-flip-inner ${flipped ? "flipped" : ""}`}
              style={{ height: "100%" }}
            >
              {/* Mặt trước của Thẻ */}
              <div
                className="card-front flex flex-col items-center justify-center p-6 shadow-md rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
                  color: "white",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  >
                    {currentCard.categoryName}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-amber-950">
                    {currentCard.level}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-2">
                  <h2
                    className="text-3xl font-black tracking-wide"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {currentCard.word}
                  </h2>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      speakEnglish(currentCard.word)
                    }}
                    title="Nghe phát âm từ vựng"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-transform active:scale-90 text-base cursor-pointer shadow-xs"
                  >
                    🔊
                  </button>
                </div>

                <p className="text-xs font-medium opacity-85 tracking-wider mb-2">
                  {currentCard.phonetic}
                </p>
                <span className="text-[11px] italic opacity-75">
                  ({currentCard.partOfSpeech})
                </span>

                <p className="text-xs mt-6 opacity-70 flex items-center gap-1">
                  <span>💡 Nhấn vào thẻ để xem nghĩa & ví dụ</span>
                </p>
              </div>

              {/* Mặt sau của Thẻ */}
              <div
                className="card-back flex flex-col items-start justify-between p-6 shadow-md rounded-3xl"
                style={{
                  background: "white",
                  border: "2px solid var(--color-primary)",
                }}
              >
                <div className="w-full">
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className="text-[11px] font-bold tracking-wider"
                      style={{ color: "var(--color-muted)" }}
                    >
                      NGHĨA TIẾNG VIỆT
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        speakEnglish(currentCard.word)
                      }}
                      className="text-xs text-purple-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      🔊 {currentCard.word}
                    </button>
                  </div>
                  <h3
                    className="text-xl font-black mb-3 text-purple-900"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {currentCard.meaning}
                  </h3>

                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="text-[11px] font-bold"
                        style={{ color: "var(--color-muted)" }}
                      >
                        CÂU VÍ DỤ
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          speakEnglish(currentCard.example)
                        }}
                        title="Nghe phát âm câu ví dụ"
                        className="px-2 py-0.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-bold cursor-pointer transition-colors"
                      >
                        🔊 Nghe câu
                      </button>
                    </div>
                    <p className="text-xs leading-relaxed italic text-gray-800 font-medium">
                      "{currentCard.example}"
                    </p>
                    <p className="text-xs leading-relaxed text-gray-500 mt-1">
                      → {currentCard.exampleVi}
                    </p>
                  </div>
                </div>

                <div className="w-full flex items-center justify-between text-[11px] text-gray-400 pt-2">
                  <span>Chủ đề: {currentCard.categoryName}</span>
                  <span>Nhấn để quay lại</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => handleNext("unknown")}
              className="flex-1 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-xs cursor-pointer"
              style={{
                background: "var(--color-red-light)",
                color: "var(--color-red)",
                fontFamily: "var(--font-display)",
              }}
            >
              <span>❌</span>
              <span>Chưa nhớ ({unknownIds.size})</span>
            </button>
            <button
              onClick={() => handleNext("known")}
              className="flex-1 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-xs cursor-pointer"
              style={{
                background: "var(--color-green-light)",
                color: "var(--color-green)",
                fontFamily: "var(--font-display)",
              }}
            >
              <span>✅</span>
              <span>Đã nhớ ({currentKnownCount})</span>
            </button>
          </div>

          <div className="flex items-center justify-between mt-4 px-1">
            <button
              onClick={() => setIndex((i) => (i - 1 + total) % total)}
              className="text-xs font-bold text-gray-500 hover:text-purple-700 cursor-pointer"
            >
              ← Thẻ trước
            </button>
            <button
              onClick={handleReset}
              className="text-xs font-bold text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              🔄 Học lại từ đầu
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % total)}
              className="text-xs font-bold text-gray-500 hover:text-purple-700 cursor-pointer"
            >
              Thẻ kế tiếp →
            </button>
          </div>
        </div>
      ) : (
        /* ================= LIST MODE ================= */
        <div className="flex flex-col gap-2.5">
          {filteredWords.map((item) => {
            const isKnown = knownIds.has(item.id)
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs hover:border-purple-200 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3
                        className="text-base font-black text-gray-900"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.word}
                      </h3>
                      <button
                        onClick={() => speakEnglish(item.word)}
                        title="Phát âm từ"
                        className="text-purple-600 hover:scale-110 p-0.5 cursor-pointer text-sm"
                      >
                        🔊
                      </button>
                      <span className="text-xs text-gray-400">
                        {item.phonetic}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-50 text-purple-700">
                        {item.categoryName}
                      </span>
                    </div>

                    <p className="text-sm font-bold text-purple-900 mb-1.5">
                      {item.meaning}
                    </p>
                    <p className="text-xs text-gray-600 italic">
                      "{item.example}"
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      → {item.exampleVi}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setKnownIds((prev) => {
                        const next = new Set(prev)
                        if (next.has(item.id)) next.delete(item.id)
                        else next.add(item.id)
                        try {
                          localStorage.setItem(
                            "english_app_known_words",
                            JSON.stringify([...next]),
                          )
                        } catch (e) {
                          console.error(e)
                        }
                        return next
                      })
                    }}
                    title={isKnown ? "Đã thuộc từ này" : "Đánh dấu đã thuộc"}
                    className={`p-2 rounded-xl text-sm font-bold cursor-pointer transition-transform active:scale-90 ${
                      isKnown
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {isKnown ? "✅" : "⚪"}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
