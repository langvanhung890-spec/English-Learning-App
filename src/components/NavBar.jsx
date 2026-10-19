import { useEffect, useRef } from "react"
import {
  Home,
  Layers,
  Headphones,
  BookOpen,
  GraduationCap,
  User,
  LayoutGrid,
} from "lucide-react"

const navItems = [
  { id: "home", label: "Trang chủ", icon: <Home className="w-5 h-5" /> },
  { id: "flashcards", label: "Từ vựng", icon: <Layers className="w-5 h-5" /> },
  { id: "listening", label: "Luyện nghe", icon: <Headphones className="w-5 h-5" /> },
  { id: "grammar", label: "Ngữ pháp", icon: <BookOpen className="w-5 h-5" /> },
  { id: "mocktest", label: "Thi thử", icon: <GraduationCap className="w-5 h-5" /> },
  { id: "profile", label: "Hồ sơ", icon: <User className="w-5 h-5" /> },
]

export default function NavBar({ tab, setTab, onOpenShowcase }) {
  const activeRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      })
    }
  }, [tab])

  return (
    <nav
      className="fixed bottom-0 left-1/2 w-full max-w-md -translate-x-1/2 px-3 pb-3 z-40 pointer-events-none"
    >
      <div
        ref={scrollRef}
        className="pointer-events-auto flex items-center justify-between gap-1 p-1.5 rounded-3xl glass-dock shadow-2xl border border-white/60 bg-white/90 backdrop-blur-xl transition-all"
      >
        {navItems.map((item) => {
          const active = tab === item.id
          return (
            <button
              key={item.id}
              ref={active ? activeRef : null}
              onClick={() => setTab(item.id)}
              className={`flex-1 py-1.5 px-1 rounded-2xl flex flex-col items-center gap-0.5 transition-all duration-200 cursor-pointer ${
                active
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-300/50 scale-105"
                  : "text-gray-500 hover:text-indigo-600 hover:bg-gray-100/70"
              }`}
            >
              <div className="transition-transform duration-200">
                {item.icon}
              </div>
              <span className="text-[10px] font-bold tracking-tight font-display">
                {item.label}
              </span>
            </button>
          )
        })}

        {/* Dedicated 20 Pages Showcase Button */}
        <button
          onClick={onOpenShowcase}
          className="flex-1 py-1.5 px-1 rounded-2xl flex flex-col items-center gap-0.5 bg-gradient-to-tr from-amber-500 to-amber-400 text-amber-950 font-black shadow-md shadow-amber-300/40 transition-transform active:scale-95 cursor-pointer animate-pulse-glow"
          title="Mở sơ đồ 20 Trang chấm điểm"
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="text-[10px] tracking-tight">20 Trang</span>
        </button>
      </div>
    </nav>
  )
}
