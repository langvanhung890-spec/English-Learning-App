import { useState } from "react"
import { Eye, EyeOff, Lock, Mail, Sparkles, CheckCircle2, UserCheck, ArrowRight } from "lucide-react"

export default function LoginScreen({ onLogin, onGoToRegister, onGoToForgotPassword }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e?.preventDefault()
    setError("")

    if (!email.trim()) {
      setError("Vui lòng nhập địa chỉ email của bạn.")
      return
    }
    if (!password) {
      setError("Vui lòng nhập mật khẩu đăng nhập.")
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      const userData = {
        name: email.split("@")[0] || "Học viên xuất sắc",
        email: email.trim(),
        avatar: null,
        level: "B2 Intermediate",
        streak: 7,
        xp: 1420,
      }
      onLogin(userData)
    }, 400)
  }

  // Chức năng Đăng nhập nhanh dành cho Giảng viên chấm điểm bài
  const handleTeacherDemoLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onLogin({
        name: "Thầy/Cô Giảng Viên (Reviewer)",
        email: "teacher.evaluator@university.edu.vn",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        level: "Examiner Master",
        streak: 15,
        xp: 2850,
      })
    }, 300)
  }

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col justify-center max-w-md mx-auto">
      {/* Brand & Logo */}
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-indigo-600 mx-auto flex items-center justify-center text-white shadow-xl shadow-indigo-200 mb-3 animate-float">
          <Sparkles className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-black text-gray-900 font-display">
          Chào mừng trở lại! 👋
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Đăng nhập để tiếp tục chuỗi streak và lộ trình học hôm nay
        </p>
      </div>

      {/* Teacher / Quick Demo Login Callout */}
      <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 mb-5 shadow-xs">
        <div className="flex items-start gap-2.5">
          <span className="text-2xl">⭐</span>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-black text-amber-900 flex items-center gap-1">
              Dành riêng cho Giảng viên chấm điểm:
            </p>
            <p className="text-[11px] text-amber-700 mt-0.5 leading-snug">
              Bấm 1 chạm để đăng nhập tức thì với đầy đủ dữ liệu điểm, streak và huy hiệu mẫu.
            </p>
          </div>
        </div>
        <button
          onClick={handleTeacherDemoLogin}
          type="button"
          className="mt-2.5 w-full py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-xs transition-transform active:scale-98 flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <UserCheck className="w-3.5 h-3.5" />
          <span>Đăng nhập nhanh (Chế độ Giảng viên)</span>
        </button>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold mb-4">
          ⚠️ {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1.5">
            Email tài khoản
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hocvien@example.com"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-gray-700">Mật khẩu</label>
            <button
              type="button"
              onClick={onGoToForgotPassword}
              className="text-xs font-bold text-indigo-600 hover:underline cursor-pointer"
            >
              Quên mật khẩu?
            </button>
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
            <span className="text-xs text-gray-600 font-medium">Ghi nhớ đăng nhập</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-200 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>Đăng nhập</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Switch to Register */}
      <div className="mt-8 text-center border-t border-gray-100 pt-5">
        <span className="text-xs text-gray-500">Chưa có tài khoản học viên? </span>
        <button
          onClick={onGoToRegister}
          className="text-xs font-black text-indigo-600 hover:underline cursor-pointer"
        >
          Đăng ký tài khoản mới ngay
        </button>
      </div>
    </div>
  )
}
