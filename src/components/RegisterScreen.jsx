import { useState } from "react"
import { Eye, EyeOff, Lock, Mail, User, Sparkles, CheckCircle2, ArrowRight } from "lucide-react"

const AVATAR_OPTIONS = ["🎓", "🦁", "🐼", "🦊", "🚀", "🌟", "💎", "🎯"]

export default function RegisterScreen({ onRegisterSuccess, onGoToLogin }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [selectedAvatar, setSelectedAvatar] = useState("🎓")
  const [targetGoal, setTargetGoal] = useState("ielts")
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(true)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!name.trim()) {
      setError("Vui lòng nhập họ và tên của bạn.")
      return
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Vui lòng nhập địa chỉ email hợp lệ.")
      return
    }
    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự.")
      return
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.")
      return
    }
    if (!agreed) {
      setError("Vui lòng đồng ý với điều khoản sử dụng ứng dụng.")
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      const newUser = {
        name: name.trim(),
        email: email.trim(),
        avatar: null,
        emojiAvatar: selectedAvatar,
        targetGoal,
        level: "B1 Intermediate",
        streak: 1,
        xp: 100,
      }
      onRegisterSuccess(newUser)
    }, 500)
  }

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col justify-center max-w-md mx-auto">
      {/* Brand & Header */}
      <div className="text-center mb-6">
        <div className="w-14 h-14 rounded-2xl bg-indigo-600 mx-auto flex items-center justify-center text-white shadow-xl shadow-indigo-200 mb-3 animate-float">
          <Sparkles className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-black text-gray-900 font-display">
          Tạo tài khoản học viên 🚀
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Bắt đầu hành trình nâng tầm phản xạ tiếng Anh toàn diện
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold mb-4">
          ⚠️ {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Choose Avatar Emoji */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5">
            Chọn biểu tượng đại diện (Avatar):
          </label>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {AVATAR_OPTIONS.map((em) => (
              <button
                key={em}
                type="button"
                onClick={() => setSelectedAvatar(em)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 transition-all cursor-pointer ${
                  selectedAvatar === em
                    ? "bg-indigo-600 text-white shadow-md scale-110"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {em}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Họ và tên học viên
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nguyễn Văn A"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            Email đăng ký
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hocvien@gmail.com"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Mật khẩu
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                className="w-full pl-8 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-indigo-600 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Nhập lại mật khẩu
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••"
                className="w-full pl-8 pr-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-indigo-600 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Learning Goal Selector */}
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5">
            Mục tiêu học chính:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "daily", label: "Giao tiếp" },
              { id: "toeic", label: "Thi TOEIC" },
              { id: "ielts", label: "Luyện IELTS" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTargetGoal(item.id)}
                className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  targetGoal === item.id
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <label className="flex items-center gap-2 cursor-pointer pt-1">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-4 h-4 text-indigo-600 rounded border-gray-300"
          />
          <span className="text-xs text-gray-600">
            Tôi đồng ý với Quy chế & Chính sách bảo mật học tập
          </span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-200 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 mt-2"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>Hoàn tất Đăng ký (+100 XP)</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Switch to Login */}
      <div className="mt-6 text-center border-t border-gray-100 pt-4">
        <span className="text-xs text-gray-500">Đã có tài khoản rồi? </span>
        <button
          onClick={onGoToLogin}
          className="text-xs font-black text-indigo-600 hover:underline cursor-pointer"
        >
          Đăng nhập ngay
        </button>
      </div>
    </div>
  )
}
