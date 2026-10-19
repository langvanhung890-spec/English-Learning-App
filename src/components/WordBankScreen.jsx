import { useState, useMemo } from "react"
import { vocabularyCategories, vocabularyList } from "../data/vocabularyData"
import { speakEnglish } from "../utils/mediaUtils"
import {
  Search,
  Volume2,
  Bookmark,
  BookmarkCheck,
  Filter,
  Sparkles,
  BookMarked,
  ArrowLeft,
  Layers,
} from "lucide-react"

export default function WordBankScreen({ onBack, onGoToFlashcards }) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const saved = localStorage.getItem("english_app_bookmarked_words")
      return saved ? new Set(JSON.parse(saved)) : new Set([1, 3, 5])
    } catch {
      return new Set([1, 3, 5])
    }
  })

  const toggleBookmark = (id) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      try {
        localStorage.setItem(
          "english_app_bookmarked_words",
          JSON.stringify([...next]),
        )
      } catch (e) {
        console.error(e)
      }
      return next
    })
  }

  const levels = ["all", "A1", "A2", "B1", "B2", "C1"]

  const filteredWords = useMemo(() => {
    return vocabularyList.filter((item) => {
      const matchCat = category === "all" || item.category === category
      const matchLvl = selectedLevel === "all" || item.level === selectedLevel
      const matchFav = !favoritesOnly || bookmarkedIds.has(item.id)
      const query = search.toLowerCase()
      const matchSearch =
        !search ||
        item.word.toLowerCase().includes(query) ||
        item.meaning.toLowerCase().includes(query) ||
        item.phonetic?.toLowerCase().includes(query)

      return matchCat && matchLvl && matchFav && matchSearch
    })
  }, [category, selectedLevel, favoritesOnly, search, bookmarkedIds])

  return (
    <div className="px-4 pt-6 pb-28">
      {/* Header */}
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
            <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 flex items-center gap-1">
              <BookMarked className="w-3 h-3" /> Tra từ điển & Sổ tay từ vựng
            </span>
            <h1 className="text-xl font-black text-gray-900 font-display">
              Word Bank & Dictionary
            </h1>
          </div>
        </div>

        <button
          onClick={onGoToFlashcards}
          className="px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold flex items-center gap-1 hover:bg-indigo-100 transition-colors cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Học Flashcard</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="relative mb-3">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm kiếm từ tiếng Anh hoặc nghĩa tiếng Việt..."
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-gray-200 bg-white text-xs font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none shadow-xs"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      {/* Categories Filter (Horizontal Scroll) */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 mb-2">
        {vocabularyCategories.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategory(c.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
              category === c.id
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>{c.emoji} </span>
            <span>{c.name}</span>
          </button>
        ))}
      </div>

      {/* Sub-filters: CEFR Level & Bookmarked Only */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer uppercase ${
                selectedLevel === lvl
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {lvl === "all" ? "Tất cả cấp độ" : lvl}
            </button>
          ))}
        </div>

        <button
          onClick={() => setFavoritesOnly((prev) => !prev)}
          className={`px-2.5 py-1 rounded-xl text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer shrink-0 ${
            favoritesOnly
              ? "bg-amber-100 text-amber-800 border border-amber-300"
              : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
          }`}
        >
          {favoritesOnly ? (
            <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
          ) : (
            <Bookmark className="w-3.5 h-3.5 text-gray-400" />
          )}
          <span>Yêu thích ({bookmarkedIds.size})</span>
        </button>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-gray-500 font-medium mb-3 px-1">
        <span>
          Hiển thị <strong>{filteredWords.length}</strong> từ vựng phù hợp
        </span>
        <span className="text-blue-600 font-bold">
          Tổng kho: {vocabularyList.length} từ
        </span>
      </div>

      {/* Words List */}
      <div className="space-y-3">
        {filteredWords.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-3xl border border-gray-200">
            <span className="text-4xl block mb-2">🔍</span>
            <p className="text-sm font-bold text-gray-800">
              Không tìm thấy từ vựng nào!
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc để hiển thị đầy đủ.
            </p>
          </div>
        ) : (
          filteredWords.map((item) => {
            const isBookmarked = bookmarkedIds.has(item.id)
            return (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-black text-gray-900 font-display">
                        {item.word}
                      </h3>
                      {item.level && (
                        <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">
                          {item.level}
                        </span>
                      )}
                      {item.partOfSpeech && (
                        <span className="text-[10px] italic font-semibold text-gray-400">
                          ({item.partOfSpeech})
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-indigo-600 font-semibold mt-0.5">
                      {item.phonetic}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => speakEnglish(item.word)}
                      title="Nghe phát âm chuẩn"
                      className="w-8 h-8 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition-transform active:scale-90 cursor-pointer shadow-xs"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toggleBookmark(item.id)}
                      title={isBookmarked ? "Bỏ lưu" : "Lưu vào sổ tay"}
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-transform active:scale-90 cursor-pointer shadow-xs ${
                        isBookmarked
                          ? "bg-amber-100 text-amber-600"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-400"
                      }`}
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-4 h-4" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Meaning */}
                <p className="text-xs font-bold text-gray-800 mb-2">
                  → {item.meaning}
                </p>

                {/* Example sentence */}
                {item.example && (
                  <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                    <p className="text-gray-700 italic font-medium leading-relaxed">
                      &ldquo;{item.example}&rdquo;
                    </p>
                    {item.exampleVi && (
                      <p className="text-gray-500 mt-1 text-[11px] leading-relaxed">
                        {item.exampleVi}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
