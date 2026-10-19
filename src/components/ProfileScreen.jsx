import { useState } from "react"
import {
  User,
  Mail,
  Flame,
  Award,
  BookOpen,
  Clock,
  Settings,
  LogOut,
  Camera,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  Shield,
} from "lucide-react"

export default function ProfileScreen({
  user,
  onLogout,
  onGoToSettings,
  onGoToAchievements,
  onUpdateUser,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user?.name || "Học viên xuất sắc")
  const [email, setEmail] = useState(user?.email || "hocvien@example.com")
  const [targetExam, setTargetExam] = useState("IELTS Academic 7.5")

  const weeklyActivity = [
    { day: "T2", minutes: 35, active: true },
    { day: "T3", minutes: 45, active: true },
    { day: "T4", minutes: 20, active: true },
    { day: "T5", minutes: 50, active: true },
    { day: "T6", minutes: 40, active: true },
    { day: "T7", minutes: 60, active: true },
    { day: "CN", minutes: 45, active: true },
  ]

  const handleSaveProfile = (e) => {
    e.preventDefault()
    setIsEditing(false)
    if (onUpdateUser) {
      onUpdateUser({ name, email, targetExam })
    }
  }

  return (
    <div className="px-4 pt-6 pb-28">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 flex items-center gap-1">
            <User className="w-3 h-3" /> Trung tâm học viên
          </span>
          <h1 className="text-xl font-black text-gray-900 font-display">
            Hồ Sơ & Thống Kê
          </h1>
        </div>

        <button
          onClick={onGoToSettings}
          className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
          title="Cài đặt hệ thống"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>

      {/* User Hero Profile Card */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-5 text-center relative">
        <div className="relative inline-block mx-auto mb-3">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={name}
              className="w-20 h-20 rounded-3xl object-cover border-3 border-indigo-500 shadow-md"
            />
          ) : (
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center text-3xl font-black shadow-md font-display">
              {user?.emojiAvatar || (name[0] || "H").toUpperCase()}
            </div>
          )}
          <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold ring-2 ring-white">
            ✓
          </span>
        </div>

        <h2 className="text-lg font-black text-gray-900 font-display">
          {name}
        </h2>
        <p className="text-xs text-gray-500 font-medium mb-3">{email}</p>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-bold mb-3">
          <Shield className="w-3.5 h-3.5 text-indigo-600" />
          <span>Học viên Pro · Trình độ B2 Upper-Intermediate</span>
        </div>

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="w-full py-2 px-4 rounded-xl border border-gray-200 text-gray-700 font-bold text-xs hover:bg-gray-50 transition-colors cursor-pointer"
          >
            Chỉnh sửa thông tin cá nhân
          </button>
        ) : (
          <form onSubmit={handleSaveProfile} className="space-y-2.5 pt-2 text-left">
            <div>
              <label className="text-[11px] font-bold text-gray-600">Họ và tên</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 rounded-xl border border-gray-200 text-xs font-bold"
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-gray-600">Mục tiêu thi cử</label>
              <input
                type="text"
                value={targetExam}
                onChange={(e) => setTargetExam(e.target.value)}
                className="w-full p-2 rounded-xl border border-gray-200 text-xs font-bold"
              />
            </div>
            <div className="flex gap-2 pt-1">
              <button
                type="submit"
                className="flex-1 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-xs cursor-pointer"
              >
                Lưu thay đổi
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="py-2 px-4 rounded-xl border border-gray-200 text-xs font-bold text-gray-600 cursor-pointer"
              >
                Hủy
              </button>
            </div>
          </form>
        )}
      </div>

      {/* 4 Key Statistics Cards */}
      <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider font-display mb-3">
        Tổng quan thành tích học tập
      </h3>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-2xs">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">🔥</span>
            <span className="text-xs font-bold text-amber-900">Chuỗi ngày</span>
          </div>
          <p className="text-2xl font-black text-amber-900 font-display">
            {user?.streak || 7} <span className="text-xs font-semibold">ngày</span>
          </p>
          <p className="text-[10px] text-amber-700 mt-0.5">Không bỏ lỡ ngày nào</p>
        </div>

        <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 shadow-2xs">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">⭐</span>
            <span className="text-xs font-bold text-indigo-900">Điểm kinh nghiệm</span>
          </div>
          <p className="text-2xl font-black text-indigo-900 font-display">
            {(user?.xp || 1420).toLocaleString()} <span className="text-xs font-semibold">XP</span>
          </p>
          <p className="text-[10px] text-indigo-700 mt-0.5">Hạng 4 Kim Cương</p>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 shadow-2xs">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">💎</span>
            <span className="text-xs font-bold text-emerald-900">Từ vựng đã thuộc</span>
          </div>
          <p className="text-2xl font-black text-emerald-900 font-display">
            58 <span className="text-xs font-semibold">từ</span>
          </p>
          <p className="text-[10px] text-emerald-700 mt-0.5">Tỷ lệ chính xác 92%</p>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 shadow-2xs">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">⏳</span>
            <span className="text-xs font-bold text-blue-900">Thời gian học</span>
          </div>
          <p className="text-2xl font-black text-blue-900 font-display">
            28.5 <span className="text-xs font-semibold">giờ</span>
          </p>
          <p className="text-[10px] text-blue-700 mt-0.5">Tích lũy trong tháng</p>
        </div>
      </div>

      {/* Weekly Activity Heatmap */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider font-display flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span>Biểu đồ học tập 7 ngày qua</span>
          </h3>
          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
            Đạt 100% mục tiêu
          </span>
        </div>

        {/* 7-day Bar chart visualizer */}
        <div className="flex items-end justify-between gap-2 h-28 pt-4">
          {weeklyActivity.map((w, idx) => {
            const hPct = Math.round((w.minutes / 60) * 100)
            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
                <span className="text-[10px] font-mono text-gray-400 font-bold">
                  {w.minutes}m
                </span>
                <div className="w-full bg-gray-100 rounded-t-lg h-16 flex items-end overflow-hidden">
                  <div
                    className="w-full bg-indigo-600 rounded-t-lg transition-all duration-500"
                    style={{ height: `${hPct}%` }}
                  />
                </div>
                <span className="text-[11px] font-bold text-gray-600 font-display">
                  {w.day}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Quick Navigation to Achievements & Settings */}
      <div className="space-y-2 mb-5">
        <button
          onClick={onGoToAchievements}
          className="w-full p-3.5 rounded-2xl bg-white border border-gray-200 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer shadow-2xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black text-gray-900 font-display">
                Kho Huy hiệu & Thành tích
              </p>
              <p className="text-[11px] text-gray-400">
                14 huy hiệu đã đạt · Nhận thưởng XP
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>

        <button
          onClick={onGoToSettings}
          className="w-full p-3.5 rounded-2xl bg-white border border-gray-200 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer shadow-2xs"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-black text-gray-900 font-display">
                Cài đặt & Giao diện ứng dụng
              </p>
              <p className="text-[11px] text-gray-400">
                Chế độ tối Dark Mode, giọng đọc US/UK, thông báo
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Logout Button */}
      <button
        onClick={onLogout}
        className="w-full py-3 px-4 rounded-2xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
      >
        <LogOut className="w-4 h-4" />
        <span>Đăng xuất tài khoản</span>
      </button>
    </div>
  )
}
