import { useState } from "react"
import { dailyQuotes } from "../data/extraAppContent"
import { speakEnglish } from "../utils/mediaUtils"
import {
  Flame,
  Award,
  BookOpen,
  Headphones,
  Mic,
  GraduationCap,
  FileCheck2,
  BookMarked,
  PenTool,
  Trophy,
  Video,
  Camera,
  Layers,
  ChevronRight,
  Volume2,
  Sparkles,
  Target,
  Compass,
} from "lucide-react"

export default function Dashboard({ setTab, user }) {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const currentQuote = dailyQuotes[quoteIndex] || dailyQuotes[0]

  const streak = user?.streak || 7
  const xp = user?.xp || 1420
  const xpGoal = 2000
  const xpPct = Math.min(100, Math.round((xp / xpGoal) * 100))
  const displayName = user?.name?.trim() || "Học viên xuất sắc"
  const initialLetter = (displayName[0] || "H").toUpperCase()

  // 12 key action hubs mapping to our 20 pages
  const modulesGrid = [
    {
      id: "flashcards",
      title: "Từ vựng 3D",
      desc: "Lật thẻ & Ghi nhớ siêu tốc",
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
      color: "border-indigo-100 bg-indigo-50/60 hover:bg-indigo-50",
      textColor: "text-indigo-900",
      badge: "70+ Từ",
      badgeColor: "bg-indigo-100 text-indigo-700",
    },
    {
      id: "word_bank",
      title: "Sổ tay Từ điển",
      desc: "Tra cứu CEFR A1 - C1",
      icon: <BookMarked className="w-5 h-5 text-blue-600" />,
      color: "border-blue-100 bg-blue-50/60 hover:bg-blue-50",
      textColor: "text-blue-900",
      badge: "Tra cứu",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      id: "listening",
      title: "Luyện Nghe",
      desc: "Hội thoại & Podcast thực tế",
      icon: <Headphones className="w-5 h-5 text-sky-600" />,
      color: "border-sky-100 bg-sky-50/60 hover:bg-sky-50",
      textColor: "text-sky-900",
      badge: "Karaoke",
      badgeColor: "bg-sky-100 text-sky-700",
    },
    {
      id: "speaking",
      title: "Luyện Nói AI",
      desc: "Ghi âm & Chấm điểm ngữ điệu",
      icon: <Mic className="w-5 h-5 text-emerald-600" />,
      color: "border-emerald-100 bg-emerald-50/60 hover:bg-emerald-50",
      textColor: "text-emerald-900",
      badge: "Micro AI",
      badgeColor: "bg-emerald-100 text-emerald-700",
    },
    {
      id: "grammar",
      title: "12 Thì Ngữ Pháp",
      desc: "Công thức & Dấu hiệu nhận biết",
      icon: <BookOpen className="w-5 h-5 text-purple-600" />,
      color: "border-purple-100 bg-purple-50/60 hover:bg-purple-50",
      textColor: "text-purple-900",
      badge: "12 Thì",
      badgeColor: "bg-purple-100 text-purple-700",
    },
    {
      id: "grammar_quiz",
      title: "Bài tập Ngữ pháp",
      desc: "Điền khuyết & Trắc nghiệm",
      icon: <FileCheck2 className="w-5 h-5 text-violet-600" />,
      color: "border-violet-100 bg-violet-50/60 hover:bg-violet-50",
      textColor: "text-violet-900",
      badge: "Giải thích",
      badgeColor: "bg-violet-100 text-violet-700",
    },
    {
      id: "reading",
      title: "Đọc báo Song ngữ",
      desc: "Chạm từ tra nghĩa tức thì",
      icon: <Compass className="w-5 h-5 text-teal-600" />,
      color: "border-teal-100 bg-teal-50/60 hover:bg-teal-50",
      textColor: "text-teal-900",
      badge: "Tin tức",
      badgeColor: "bg-teal-100 text-teal-700",
    },
    {
      id: "writing",
      title: "Luyện Viết AI",
      desc: "Soạn email & Chấm điểm Band",
      icon: <PenTool className="w-5 h-5 text-amber-600" />,
      color: "border-amber-100 bg-amber-50/60 hover:bg-amber-50",
      textColor: "text-amber-900",
      badge: "AI Grader",
      badgeColor: "bg-amber-100 text-amber-700",
    },
    {
      id: "mocktest",
      title: "Thi thử Online",
      desc: "Đề thi TOEIC / IELTS tính giờ",
      icon: <GraduationCap className="w-5 h-5 text-rose-600" />,
      color: "border-rose-100 bg-rose-50/60 hover:bg-rose-50",
      textColor: "text-rose-900",
      badge: "Có đồng hồ",
      badgeColor: "bg-rose-100 text-rose-700",
    },
    {
      id: "video_lessons",
      title: "Video Bài giảng",
      desc: "Phụ đề song ngữ & Tua ±10s",
      icon: <Video className="w-5 h-5 text-red-600" />,
      color: "border-red-100 bg-red-50/60 hover:bg-red-50",
      textColor: "text-red-900",
      badge: "Video Player",
      badgeColor: "bg-red-100 text-red-700",
    },
    {
      id: "homework_scanner",
      title: "Quét bài Camera",
      desc: "Chụp ảnh vở bài tập & Nộp bài",
      icon: <Camera className="w-5 h-5 text-cyan-600" />,
      color: "border-cyan-100 bg-cyan-50/60 hover:bg-cyan-50",
      textColor: "text-cyan-900",
      badge: "Camera OCR",
      badgeColor: "bg-cyan-100 text-cyan-700",
    },
    {
      id: "leaderboard",
      title: "Bảng Vàng Đua Top",
      desc: "Giải đấu Kim Cương tuần",
      icon: <Trophy className="w-5 h-5 text-yellow-600" />,
      color: "border-yellow-100 bg-yellow-50/60 hover:bg-yellow-50",
      textColor: "text-yellow-900",
      badge: "Top 4",
      badgeColor: "bg-yellow-100 text-yellow-800",
    },
  ]

  const recentVocabWords = [
    { word: "Perseverance", phonetic: "/ˌpɜːsɪˈvɪərəns/", meaning: "Sự kiên trì, bền chí", topic: "IELTS" },
    { word: "Eloquent", phonetic: "/ˈeləkwənt/", meaning: "Hùng hồn, lưu loát", topic: "Giao tiếp" },
    { word: "Collaborate", phonetic: "/kəˈlæbəreɪt/", meaning: "Hợp tác, phối hợp", topic: "TOEIC" },
  ]

  return (
    <div className="px-4 pt-6 pb-28">
      {/* Top Bar / Profile Greeting */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTab("profile")}
            className="cursor-pointer transition-transform active:scale-95"
            title="Xem hồ sơ cá nhân"
          >
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-12 h-12 rounded-2xl object-cover border-2 border-indigo-200 shadow-sm"
              />
            ) : (
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center text-lg font-black shadow-md font-display">
                {user?.emojiAvatar || initialLetter}
              </div>
            )}
          </button>
          <div>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              Chào ngày mới 👋
            </p>
            <h1 className="text-lg font-black text-gray-900 font-display flex items-center gap-1.5 leading-snug">
              <span>{displayName}</span>
              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTab("achievements")}
            className="px-2.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-800 flex items-center gap-1 text-xs font-bold shadow-xs hover:bg-amber-100 transition-colors cursor-pointer"
            title="Kho Huy hiệu & Thành tích"
          >
            <Award className="w-4 h-4 text-amber-600" />
            <span>14 Huy hiệu</span>
          </button>
        </div>
      </div>

      {/* Hero Streak & XP Card */}
      <div className="rounded-3xl p-5 mb-5 text-white shadow-xl shadow-indigo-500/15 relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800">
        <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />

        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shadow-inner">
              🔥
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black font-display">{streak}</span>
                <span className="text-xs font-bold text-indigo-200">ngày</span>
              </div>
              <p className="text-[11px] font-semibold text-indigo-100/90">
                Chuỗi học liên tiếp
              </p>
            </div>
          </div>

          <div className="text-right">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-amber-950 shadow-xs">
              ⭐ Hạng Kim Cương
            </span>
            <p className="text-[11px] text-indigo-100 font-bold mt-1">
              {xp.toLocaleString()} / {xpGoal.toLocaleString()} XP
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 rounded-full bg-black/20 overflow-hidden p-0.5 relative z-10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-300 to-yellow-400 transition-all duration-700 shadow-sm"
            style={{ width: `${xpPct}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[11px] text-indigo-200 font-medium mt-1.5 relative z-10">
          <span>Tiến độ cấp độ {xpPct}%</span>
          <span>Còn {xpGoal - xp} XP lên cấp tiếp theo</span>
        </div>
      </div>

      {/* Daily Motivation Quote */}
      <div
        onClick={() => setQuoteIndex((prev) => (prev + 1) % dailyQuotes.length)}
        className="rounded-2xl p-4 mb-5 border border-indigo-100 bg-white shadow-xs cursor-pointer hover:border-indigo-200 transition-all group"
      >
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Danh ngôn truyền cảm hứng
          </span>
          <span className="text-[10px] text-gray-400 group-hover:text-indigo-600">
            Chạm để đổi câu khác ↺
          </span>
        </div>
        <p className="text-xs font-bold text-gray-800 italic leading-snug">
          &ldquo;{currentQuote.quote}&rdquo;
        </p>
        <p className="text-[11px] text-gray-500 mt-1 font-medium">
          → {currentQuote.meaning}
        </p>
        <p className="text-[10px] text-indigo-600 font-bold text-right mt-1">
          — {currentQuote.author}
        </p>
      </div>

      {/* Daily Target Mission */}
      <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 mb-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-xl shadow-xs shrink-0">
          🎯
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-black text-amber-900">
            Mục tiêu hôm nay (2/3 hoàn thành)
          </p>
          <p className="text-[11px] text-amber-700 truncate mt-0.5">
            ✓ 15 từ vựng · ✓ 1 bài nghe · ⏳ 1 bài thi thử
          </p>
        </div>
        <button
          onClick={() => setTab("mocktest")}
          className="px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shrink-0 transition-transform active:scale-95 cursor-pointer shadow-xs"
        >
          Làm ngay
        </button>
      </div>

      {/* All Key Learning Modules (Grid of 12 rich functions) */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-black text-gray-900 font-display flex items-center gap-1.5">
          <span>Trung tâm luyện tập</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-bold">
            12 Phân hệ
          </span>
        </h2>
        <span className="text-[11px] font-bold text-gray-400">Chạm để học</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mb-6">
        {modulesGrid.map((m) => (
          <button
            key={m.id}
            onClick={() => setTab(m.id)}
            className={`p-3.5 rounded-2xl border text-left transition-all duration-200 active:scale-[0.97] cursor-pointer flex flex-col justify-between ${m.color} shadow-xs hover:shadow-md`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center">
                {m.icon}
              </div>
              <span
                className={`text-[9px] font-black px-2 py-0.5 rounded-full ${m.badgeColor}`}
              >
                {m.badge}
              </span>
            </div>
            <div>
              <p className={`text-xs font-black leading-tight ${m.textColor} font-display`}>
                {m.title}
              </p>
              <p className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5 line-clamp-1">
                {m.desc}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Vocabulary Showcase with Native Audio Speaker */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-black text-gray-900 font-display">
          Từ vựng đã lưu hôm nay
        </h2>
        <button
          onClick={() => setTab("word_bank")}
          className="text-xs font-extrabold text-indigo-600 hover:underline cursor-pointer flex items-center gap-0.5"
        >
          Xem tất cả 70+ từ <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="space-y-2">
        {recentVocabWords.map((w) => (
          <div
            key={w.word}
            className="flex items-center justify-between p-3 rounded-2xl bg-white border border-gray-100 shadow-xs hover:border-gray-200 transition-all"
          >
            <div className="flex-1 min-w-0 pr-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-gray-900 font-display">
                  {w.word}
                </span>
                <span className="text-[10px] font-mono text-gray-400">
                  {w.phonetic}
                </span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-gray-100 text-gray-600">
                  {w.topic}
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-0.5 font-medium truncate">
                {w.meaning}
              </p>
            </div>

            <button
              onClick={() => speakEnglish(w.word)}
              title="Nghe phát âm chuẩn"
              className="w-8 h-8 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 transition-transform active:scale-90 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
