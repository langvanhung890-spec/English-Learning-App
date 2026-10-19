import { useState, useMemo } from "react"
import { grammarLessons } from "../data/grammarLessons"
import { speakEnglish } from "../utils/mediaUtils"
import VideoLessonPlayer from "./VideoLessonPlayer"
import SpeakingPracticeRecorder from "./SpeakingPracticeRecorder"
import HomeworkImageScanner from "./HomeworkImageScanner"

const CATEGORIES = [
  { key: "all", label: "Tất cả" },
  { key: "present", label: "Hiện tại (4)" },
  { key: "past", label: "Quá khứ (4)" },
  { key: "future", label: "Tương lai (4)" },
  { key: "other", label: "Cấu trúc khác (2)" },
]

export default function Grammar() {
  const [selectedId, setSelectedId] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [detailTab, setDetailTab] = useState("theory") // 'theory' | 'video' | 'speaking' | 'homework'
  const [completedMap, setCompletedMap] = useState(() => {
    const initial = {}
    grammarLessons.forEach((l) => {
      if (l.completed) initial[l.id] = true
    })
    return initial
  })
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizSubmitted, setQuizSubmitted] = useState({})

  const filteredLessons = useMemo(() => {
    return grammarLessons.filter((lesson) => {
      const matchCategory =
        activeCategory === "all" || lesson.category === activeCategory
      const q = searchQuery.trim().toLowerCase()
      const matchSearch =
        !q ||
        lesson.title.toLowerCase().includes(q) ||
        lesson.subtitle.toLowerCase().includes(q) ||
        lesson.categoryName.toLowerCase().includes(q) ||
        lesson.rule.toLowerCase().includes(q)
      return matchCategory && matchSearch
    })
  }, [activeCategory, searchQuery])

  const activeLesson = useMemo(() => {
    if (selectedId === null) return null
    return grammarLessons.find((l) => l.id === selectedId) || null
  }, [selectedId])

  const toggleCompleted = (id) => {
    setCompletedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // ==================== MÀN HÌNH CHI TIẾT BÀI HỌC ====================
  if (activeLesson) {
    const qKey = (qi) => `${activeLesson.id}-${qi}`
    const submitted = quizSubmitted[activeLesson.id]
    const allAnswered = activeLesson.quiz.every(
      (_, qi) => quizAnswers[qKey(qi)] !== undefined,
    )
    const score = submitted
      ? activeLesson.quiz.filter((q, qi) => quizAnswers[qKey(qi)] === q.ans)
          .length
      : 0
    const isLessonCompleted = !!completedMap[activeLesson.id]

    // Lấy câu ví dụ đầu tiên để luyện phát âm
    const sampleSentence =
      activeLesson.forms?.[0]?.parts?.[0]?.example ||
      "I study English every day."
    const sampleTranslation =
      activeLesson.forms?.[0]?.parts?.[0]?.translation ||
      "Tôi học tiếng Anh mỗi ngày."

    return (
      <div className="px-4 pt-10 pb-20">
        {/* Nút quay lại & Nút đánh dấu hoàn thành */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => {
              setSelectedId(null)
              setDetailTab("theory")
            }}
            className="flex items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-80 cursor-pointer"
            style={{ color: "var(--color-primary)" }}
          >
            <span className="text-lg">←</span> Quay lại
          </button>

          <button
            onClick={() => toggleCompleted(activeLesson.id)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
            style={{
              background: isLessonCompleted
                ? "var(--color-green-light)"
                : "#F3F4F6",
              color: isLessonCompleted
                ? "var(--color-green)"
                : "var(--color-muted)",
              border: `1px solid ${
                isLessonCompleted ? "var(--color-green)" : "#E5E7EB"
              }`,
            }}
          >
            {isLessonCompleted ? "✓ Đã nắm vững" : "○ Đánh dấu đã học"}
          </button>
        </div>

        {/* Banner tiêu đề */}
        <div
          className="rounded-3xl p-5 mb-4 shadow-sm relative overflow-hidden"
          style={{ background: activeLesson.color, color: "white" }}
        >
          <div className="flex items-start justify-between">
            <span className="text-4xl p-2 bg-white/20 rounded-2xl backdrop-blur-xs">
              {activeLesson.emoji}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white">
              {activeLesson.categoryName}
            </span>
          </div>
          <h2
            className="text-xl font-black mt-3 leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {activeLesson.title}
          </h2>
          <p className="text-xs opacity-90 mt-1 leading-relaxed">
            {activeLesson.subtitle}
          </p>
        </div>

        {/* Tabs chuyển đổi các chức năng Đa phương tiện (Expo Video / Audio / ImagePicker) */}
        <div className="flex items-center gap-1.5 p-1 bg-gray-200/70 rounded-2xl mb-4 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setDetailTab("theory")}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              detailTab === "theory"
                ? "bg-white text-purple-900 shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            📖 Các thể & Lý thuyết
          </button>
          <button
            onClick={() => setDetailTab("video")}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              detailTab === "video"
                ? "bg-white text-purple-900 shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            🎬 Video bài giảng
          </button>
          <button
            onClick={() => setDetailTab("speaking")}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              detailTab === "speaking"
                ? "bg-white text-purple-900 shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            🎙️ Luyện nói
          </button>
          <button
            onClick={() => setDetailTab("homework")}
            className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              detailTab === "homework"
                ? "bg-white text-purple-900 shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            📷 Nộp bài
          </button>
        </div>

        {/* ==================== TAB 1: CÁC THỂ & LÝ THUYẾT CHI TIẾT ==================== */}
        {detailTab === "theory" && (
          <div>
            {/* Thẻ Công thức tổng quát */}
            <div
              className="rounded-2xl p-4 mb-4 shadow-xs"
              style={{
                background: activeLesson.bg,
                border: `1.5px solid ${activeLesson.color}35`,
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="text-xs font-extrabold uppercase tracking-wider"
                  style={{ color: activeLesson.color }}
                >
                  📐 CÔNG THỨC TỔNG QUÁT
                </span>
              </div>
              <p
                className="font-black text-base leading-snug"
                style={{
                  fontFamily: "var(--font-display)",
                  color: activeLesson.color,
                }}
              >
                {activeLesson.rule}
              </p>
            </div>

            {/* Các thể & Ghi chú tiếng Việt */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-base font-black"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text)",
                  }}
                >
                  Các thể & Ghi chú chi tiết 📝
                </span>
                <span className="text-[11px] text-gray-500 italic">
                  Nhấn 🔊 để nghe phát âm
                </span>
              </div>

              <div className="flex flex-col gap-3.5">
                {activeLesson.forms.map((form, fIdx) => (
                  <div
                    key={fIdx}
                    className="rounded-2xl p-4 shadow-xs"
                    style={{
                      background: "white",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    {/* Header của thể: Khẳng định / Phủ định / Nghi vấn */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="px-2.5 py-1 rounded-lg text-xs font-black"
                          style={{
                            background: form.badgeBg,
                            color: form.badgeColor,
                          }}
                        >
                          {form.label}
                        </span>
                      </div>
                    </div>

                    {/* Danh sách các phần trong thể */}
                    <div className="flex flex-col gap-3">
                      {form.parts.map((part, pIdx) => (
                        <div
                          key={pIdx}
                          className="rounded-xl p-3"
                          style={{
                            background: "#F9FAFB",
                            border: "1px solid #EEF2F6",
                          }}
                        >
                          {/* Tag phân biệt To be / Động từ thường */}
                          {part.tag && (
                            <div className="flex items-center gap-1.5 mb-1.5">
                              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white border border-gray-200 text-gray-700">
                                {part.tag}
                              </span>
                            </div>
                          )}

                          {/* Công thức */}
                          <div className="mb-2">
                            <span className="text-[11px] font-bold text-gray-400 block mb-0.5">
                              CÔNG THỨC:
                            </span>
                            <code
                              className="font-bold text-sm px-2.5 py-1 rounded-lg inline-block w-full"
                              style={{
                                background: `${activeLesson.color}15`,
                                color: activeLesson.color,
                                fontFamily: "monospace",
                              }}
                            >
                              {part.formula}
                            </code>
                          </div>

                          {/* Ghi chú tiếng Việt */}
                          <div className="mb-2.5">
                            <span className="text-[11px] font-bold text-gray-400 block mb-0.5">
                              GHI CHÚ TIẾNG VIỆT:
                            </span>
                            <p className="text-xs leading-relaxed text-gray-700 font-medium">
                              👉 {part.note}
                            </p>
                          </div>

                          {/* Ví dụ Anh - Việt kèm nút phát âm */}
                          <div className="pt-2 border-t border-gray-200/60 flex items-start justify-between gap-2">
                            <div>
                              <span className="text-[11px] font-bold text-gray-400 block mb-1">
                                VÍ DỤ MINH HỌA:
                              </span>
                              <p
                                className="text-xs font-bold"
                                style={{ color: activeLesson.color }}
                              >
                                &ldquo;{part.example}&rdquo;
                              </p>
                              <p className="text-xs text-gray-600 mt-0.5 italic">
                                → {part.translation}
                              </p>
                            </div>
                            <button
                              onClick={() => speakEnglish(part.example)}
                              title="Nghe phát âm ví dụ này"
                              className="flex-shrink-0 mt-2 p-2 rounded-xl bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 shadow-xs cursor-pointer transition-transform active:scale-90"
                            >
                              🔊
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cách dùng chính */}
            <div
              className="rounded-2xl p-4 mb-4 shadow-xs"
              style={{
                background: "white",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                className="text-xs font-extrabold uppercase tracking-wider mb-2.5"
                style={{ color: "var(--color-muted)" }}
              >
                💡 CÁCH DÙNG CHÍNH
              </p>
              <div className="flex flex-col gap-2">
                {activeLesson.usage.map((u, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span
                      className="font-bold text-sm flex-shrink-0"
                      style={{ color: activeLesson.color }}
                    >
                      ✓
                    </span>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--color-text)" }}
                    >
                      {u}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dấu hiệu nhận biết */}
            {activeLesson.signals && activeLesson.signals.length > 0 && (
              <div
                className="rounded-2xl p-4 mb-5 shadow-xs"
                style={{
                  background: "white",
                  border: "1px solid var(--color-border)",
                }}
              >
                <p
                  className="text-xs font-extrabold uppercase tracking-wider mb-2.5"
                  style={{ color: "var(--color-muted)" }}
                >
                  🔍 DẤU HIỆU NHẬN BIẾT (TỪ KHÓA)
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {activeLesson.signals.map((sig, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold"
                      style={{
                        background: `${activeLesson.color}15`,
                        color: activeLesson.color,
                      }}
                    >
                      {sig}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bài tập nhanh (Quiz) */}
            <div className="mt-2">
              <div className="flex items-center justify-between mb-3">
                <h3
                  className="text-base font-black"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-text)",
                  }}
                >
                  Bài kiểm tra nhanh ✏️
                </h3>
                <span
                  className="text-xs font-semibold"
                  style={{ color: "var(--color-muted)" }}
                >
                  {activeLesson.quiz.length} câu hỏi
                </span>
              </div>

              {activeLesson.quiz.map((q, qi) => {
                const key = qKey(qi)
                return (
                  <div
                    key={qi}
                    className="rounded-2xl p-4 mb-3 shadow-xs"
                    style={{
                      background: "white",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <p
                      className="text-sm font-bold mb-3 leading-snug"
                      style={{ color: "var(--color-text)" }}
                    >
                      {qi + 1}. {q.q}
                    </p>
                    <div className="flex flex-col gap-2">
                      {q.opts.map((opt, oi) => {
                        let bg = "#F9FAFB"
                        let border = "var(--color-border)"
                        let color = "var(--color-text)"

                        if (submitted) {
                          if (oi === q.ans) {
                            bg = "var(--color-green-light)"
                            border = "var(--color-green)"
                            color = "var(--color-green)"
                          } else if (oi === quizAnswers[key]) {
                            bg = "var(--color-red-light)"
                            border = "var(--color-red)"
                            color = "var(--color-red)"
                          }
                        } else if (quizAnswers[key] === oi) {
                          bg = activeLesson.bg
                          border = activeLesson.color
                          color = activeLesson.color
                        }

                        return (
                          <button
                            key={oi}
                            disabled={submitted}
                            onClick={() =>
                              setQuizAnswers((a) => ({ ...a, [key]: oi }))
                            }
                            className="text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                            style={{
                              background: bg,
                              border: `1.5px solid ${border}`,
                              color,
                            }}
                          >
                            <span className="font-black mr-1.5">
                              {String.fromCharCode(65 + oi)}.
                            </span>{" "}
                            {opt}
                          </button>
                        )
                      })}
                    </div>

                    {/* Giải thích sau khi nộp bài */}
                    {submitted && q.explain && (
                      <div className="mt-3 p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-900 leading-relaxed">
                        💡 <span className="font-bold">Giải thích:</span>{" "}
                        {q.explain}
                      </div>
                    )}
                  </div>
                )
              })}

              {!submitted && (
                <button
                  disabled={!allAnswered}
                  onClick={() => {
                    setQuizSubmitted((s) => ({ ...s, [activeLesson.id]: true }))
                    const currentScore = activeLesson.quiz.filter(
                      (q, qi) => quizAnswers[qKey(qi)] === q.ans,
                    ).length
                    if (currentScore === activeLesson.quiz.length) {
                      setCompletedMap((prev) => ({
                        ...prev,
                        [activeLesson.id]: true,
                      }))
                    }
                  }}
                  className="w-full py-3.5 rounded-2xl font-bold text-white mt-1 transition-all cursor-pointer shadow-md disabled:opacity-40 disabled:cursor-not-allowed active:scale-98"
                  style={{
                    background: activeLesson.color,
                    fontFamily: "var(--font-display)",
                  }}
                >
                  Kiểm tra kết quả
                </button>
              )}

              {submitted && (
                <div
                  className="mt-3 p-4 rounded-2xl text-center shadow-xs"
                  style={{
                    background:
                      score === activeLesson.quiz.length
                        ? "var(--color-green-light)"
                        : "var(--color-accent-light)",
                    border: `1px solid ${
                      score === activeLesson.quiz.length
                        ? "var(--color-green)"
                        : "#F59E0B"
                    }`,
                  }}
                >
                  <p
                    className="text-2xl font-black"
                    style={{
                      fontFamily: "var(--font-display)",
                      color:
                        score === activeLesson.quiz.length
                          ? "var(--color-green)"
                          : "#92400E",
                    }}
                  >
                    {score}/{activeLesson.quiz.length} đúng
                  </p>
                  <p
                    className="text-xs font-semibold mt-1"
                    style={{ color: "#92400E" }}
                  >
                    {score === activeLesson.quiz.length
                      ? "🎉 Xuất sắc! Bạn đã hiểu rõ cấu trúc thì này (+30 XP)"
                      : "📚 Ôn lại các thể và thử lại để đạt điểm tối đa nhé!"}
                  </p>
                  <button
                    onClick={() => {
                      setQuizSubmitted((s) => ({
                        ...s,
                        [activeLesson.id]: false,
                      }))
                      setQuizAnswers((prev) => {
                        const next = { ...prev }
                        activeLesson.quiz.forEach(
                          (_, qi) => delete next[qKey(qi)],
                        )
                        return next
                      })
                    }}
                    className="mt-3 px-4 py-1.5 bg-white text-xs font-bold rounded-xl border border-gray-300 text-gray-700 cursor-pointer shadow-xs active:scale-95"
                  >
                    Làm lại bài kiểm tra ↺
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================== TAB 2: VIDEO BÀI GIẢNG (EXPO VIDEO) ==================== */}
        {detailTab === "video" && (
          <div>
            <div className="mb-3">
              <h3 className="text-sm font-black text-gray-900">
                Video ngữ cảnh: {activeLesson.shortTitle || activeLesson.title}
              </h3>
              <p className="text-xs text-gray-500">
                Theo dõi cách người bản xứ áp dụng thì này trong giao tiếp hàng
                ngày.
              </p>
            </div>

            <VideoLessonPlayer
              lessonTitle={activeLesson.title}
              videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />

            <div className="rounded-2xl p-4 bg-white border border-gray-200 shadow-xs mt-3">
              <h4 className="text-xs font-bold uppercase text-purple-700 mb-2">
                💡 Ghi chú ngữ cảnh trong video
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                Chú ý cách người nói nhấn mạnh vào các từ chỉ thời gian và ngữ
                điệu khi sử dụng thể khẳng định, phủ định hoặc câu hỏi nghi vấn
                trong tình huống thực tế.
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: LUYỆN NÓI & THU ÂM (EXPO AUDIO) ==================== */}
        {detailTab === "speaking" && (
          <div>
            <div className="mb-3">
              <h3 className="text-sm font-black text-gray-900">
                Luyện phát âm câu chuẩn thì {activeLesson.shortTitle}
              </h3>
              <p className="text-xs text-gray-500">
                Nghe giọng đọc bản xứ, thu âm giọng nói của bạn và so sánh độ
                chuẩn xác.
              </p>
            </div>

            <SpeakingPracticeRecorder
              targetSentence={sampleSentence}
              translation={sampleTranslation}
              color={activeLesson.color}
            />
          </div>
        )}

        {/* ==================== TAB 4: NỘP BÀI TẬP BẰNG ẢNH (EXPO IMAGE PICKER) ==================== */}
        {detailTab === "homework" && (
          <div>
            <div className="mb-3">
              <h3 className="text-sm font-black text-gray-900">
                Nộp bài tập viết: {activeLesson.shortTitle}
              </h3>
              <p className="text-xs text-gray-500">
                Viết 3 câu (khẳng định, phủ định, nghi vấn) ra vở và chụp ảnh để
                nộp bài.
              </p>
            </div>

            <HomeworkImageScanner lessonTitle={activeLesson.shortTitle} />
          </div>
        )}
      </div>
    )
  }

  // ==================== MÀN HÌNH DANH SÁCH BÀI HỌC ====================
  const completedCount = Object.values(completedMap).filter(Boolean).length

  return (
    <div className="px-4 pt-10 pb-6">
      {/* Tiêu đề trang */}
      <div className="flex items-center justify-between mb-1">
        <h1
          className="text-2xl font-black"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text)",
          }}
        >
          Ngữ pháp 📖
        </h1>
        <div
          className="px-2.5 py-1 rounded-full text-xs font-bold"
          style={{
            background: "var(--color-primary-light)",
            color: "var(--color-primary)",
          }}
        >
          {completedCount}/{grammarLessons.length} hoàn thành
        </div>
      </div>
      <p className="text-xs mb-4" style={{ color: "var(--color-muted)" }}>
        Trọn bộ 12 thì tiếng Anh chuẩn & cấu trúc ngữ pháp với đầy đủ các thể
      </p>

      {/* Thanh tìm kiếm */}
      <div className="relative mb-3.5">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400">
          🔍
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Tìm thì (vd: hiện tại đơn, past, simple, hoàn thành...)"
          className="w-full pl-9 pr-8 py-2.5 rounded-xl text-xs bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-xs"
          style={{ color: "var(--color-text)" }}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      {/* Bộ lọc danh mục */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-3 mb-3">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex-shrink-0"
              style={{
                background: isActive ? "var(--color-primary)" : "white",
                color: isActive ? "white" : "var(--color-muted)",
                border: isActive
                  ? "1px solid var(--color-primary)"
                  : "1px solid var(--color-border)",
                boxShadow: isActive
                  ? "0 2px 4px rgba(124, 58, 237, 0.2)"
                  : "none",
              }}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Danh sách các bài học */}
      {filteredLessons.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 p-6">
          <span className="text-3xl mb-2 block">🔎</span>
          <p className="text-sm font-bold text-gray-700">
            Không tìm thấy thì hoặc bài học phù hợp
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Thử từ khóa khác như "hiện tại", "quá khứ", "tương lai"...
          </p>
          <button
            onClick={() => {
              setSearchQuery("")
              setActiveCategory("all")
            }}
            className="mt-3 px-4 py-1.5 text-xs font-bold rounded-xl text-white cursor-pointer"
            style={{ background: "var(--color-primary)" }}
          >
            Xem tất cả bài học
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredLessons.map((lesson) => {
            const isCompleted = !!completedMap[lesson.id]
            return (
              <button
                key={lesson.id}
                onClick={() => {
                  setSelectedId(lesson.id)
                  setDetailTab("theory")
                }}
                className="w-full text-left rounded-2xl p-4 shadow-xs transition-all hover:shadow-md active:scale-98 cursor-pointer relative overflow-hidden"
                style={{
                  background: "white",
                  border: isCompleted
                    ? `1.5px solid ${lesson.color}50`
                    : "1px solid var(--color-border)",
                }}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-xs"
                    style={{ background: lesson.bg }}
                  >
                    {lesson.emoji}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span
                        className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md"
                        style={{
                          background: `${lesson.color}15`,
                          color: lesson.color,
                        }}
                      >
                        {lesson.categoryName}
                      </span>
                      {isCompleted && (
                        <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                          ✓ Đã học
                        </span>
                      )}
                    </div>

                    <h3
                      className="font-black text-sm leading-snug truncate"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-text)",
                      }}
                    >
                      {lesson.title}
                    </h3>

                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                      {lesson.subtitle}
                    </p>

                    <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-gray-100">
                      <code
                        className="text-[11px] font-bold px-2 py-0.5 rounded-md text-gray-600 truncate max-w-[200px]"
                        style={{ background: "#F3F4F6" }}
                      >
                        {lesson.rule}
                      </code>

                      <span
                        className="text-xs font-bold ml-auto flex items-center gap-1"
                        style={{ color: lesson.color }}
                      >
                        {isCompleted ? "Ôn tập →" : "Học ngay →"}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
