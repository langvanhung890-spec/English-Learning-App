import { useState, useEffect } from "react"
import {
  Settings,
  Moon,
  Sun,
  Volume2,
  Bell,
  Globe,
  Trash2,
  Info,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Smartphone,
} from "lucide-react"

export default function SettingsScreen({ onBack, onResetData }) {
  const [darkMode, setDarkMode] = useState(() => {
    return document.documentElement.getAttribute("data-theme") === "dark"
  })
  const [voiceAccent, setVoiceAccent] = useState("en-US")
  const [speechRate, setSpeechRate] = useState(1.0)
  const [dailyReminder, setDailyReminder] = useState(true)
  const [reminderTime, setReminderTime] = useState("20:00")
  const [soundEffects, setSoundEffects] = useState(true)

  const toggleDarkMode = () => {
    const next = !darkMode
    setDarkMode(next)
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark")
      localStorage.setItem("english_app_theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
      localStorage.setItem("english_app_theme", "light")
    }
  }

  const handleTestVoice = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      const u = new SpeechSynthesisUtterance("Welcome to English Learning App! Practice makes perfect.")
      u.lang = voiceAccent
      u.rate = speechRate
      window.speechSynthesis.speak(u)
    } else {
      alert("Trình duyệt không hỗ trợ Web Speech Synthesis!")
    }
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
            <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 flex items-center gap-1">
              <Settings className="w-3 h-3" /> Tùy biến hệ thống
            </span>
            <h1 className="text-xl font-black text-gray-900 font-display">
              Cài Đặt Ứng Dụng
            </h1>
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-gray-400">v2.5 Pro</span>
      </div>

      {/* Group 1: Appearance & Display */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-4">
        <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider font-display mb-3">
          Giao diện hiển thị
        </h3>

        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Chế độ tối (Dark Mode)</p>
              <p className="text-[11px] text-gray-500">Bảo vệ mắt khi học ban đêm</p>
            </div>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`w-12 h-6.5 rounded-full transition-colors p-1 cursor-pointer flex items-center ${
              darkMode ? "bg-indigo-600 justify-end" : "bg-gray-200 justify-start"
            }`}
          >
            <div className="w-4.5 h-4.5 rounded-full bg-white shadow-xs" />
          </button>
        </div>

        <div className="flex items-center justify-between py-2 pt-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Âm thanh hiệu ứng & Chúc mừng</p>
              <p className="text-[11px] text-gray-500">Phát âm thanh khi trả lời đúng</p>
            </div>
          </div>
          <button
            onClick={() => setSoundEffects((prev) => !prev)}
            className={`w-12 h-6.5 rounded-full transition-colors p-1 cursor-pointer flex items-center ${
              soundEffects ? "bg-amber-500 justify-end" : "bg-gray-200 justify-start"
            }`}
          >
            <div className="w-4.5 h-4.5 rounded-full bg-white shadow-xs" />
          </button>
        </div>
      </div>

      {/* Group 2: Audio & Pronunciation Voice */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-4">
        <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider font-display mb-3">
          Giọng đọc & Ngữ âm chuẩn (AI Speech)
        </h3>

        <div className="mb-3">
          <label className="text-xs font-bold text-gray-700 block mb-1">
            Chất giọng bản xứ ưu tiên:
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: "en-US", label: "🇺🇸 Tiếng Anh - Mỹ (US)" },
              { id: "en-GB", label: "🇬🇧 Tiếng Anh - Anh (UK)" },
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => setVoiceAccent(v.id)}
                className={`p-2 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  voiceAccent === v.id
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
            <span>Tốc độ đọc giọng mẫu:</span>
            <span className="text-indigo-600 font-mono">{speechRate}x</span>
          </div>
          <input
            type="range"
            min="0.7"
            max="1.3"
            step="0.1"
            value={speechRate}
            onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>

        <button
          onClick={handleTestVoice}
          className="w-full py-2 px-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
        >
          <Volume2 className="w-3.5 h-3.5" />
          <span>Nghe thử phát âm mẫu</span>
        </button>
      </div>

      {/* Group 3: Notifications */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-4">
        <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider font-display mb-3">
          Nhắc nhở học tập hàng ngày
        </h3>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold text-gray-800">Thông báo nhắc giờ học</span>
          </div>
          <button
            onClick={() => setDailyReminder((prev) => !prev)}
            className={`w-12 h-6.5 rounded-full transition-colors p-1 cursor-pointer flex items-center ${
              dailyReminder ? "bg-emerald-600 justify-end" : "bg-gray-200 justify-start"
            }`}
          >
            <div className="w-4.5 h-4.5 rounded-full bg-white shadow-xs" />
          </button>
        </div>

        {dailyReminder && (
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs">
            <span className="text-gray-600 font-medium">Giờ nhắc nhở mỗi tối:</span>
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              className="p-1 rounded-lg border border-gray-300 font-bold font-mono text-gray-800"
            />
          </div>
        )}
      </div>

      {/* Project & University Info */}
      <div className="p-4 rounded-3xl bg-gray-50 border border-gray-200 text-center text-xs text-gray-500 space-y-1 mb-4">
        <p className="font-bold text-gray-800">
          Đồ án Môn học: Lập Trình Thiết Bị Di Động 2 (LTDD2)
        </p>
        <p>Ứng dụng học tiếng Anh toàn diện 20 Màn hình chuẩn UI/UX</p>
        <p className="text-[10px] text-gray-400">© 2026 Mobile Programming Project</p>
      </div>
    </div>
  )
}
