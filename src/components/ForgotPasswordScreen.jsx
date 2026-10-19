import { useState } from "react"
import { Mail, KeyRound, Lock, CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react"

export default function ForgotPasswordScreen({ onBackToLogin }) {
  const [step, setStep] = useState(1) // 1: Email, 2: OTP, 3: New Password, 4: Done
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Step 1: Submit email
  const handleSendEmail = (e) => {
    e.preventDefault()
    setError("")
    if (!email.trim() || !email.includes("@")) {
      setError("Vui lòng nhập địa chỉ email hợp lệ.")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep(2)
    }, 500)
  }

  // Step 2: Handle OTP change
  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1)
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus()
    }
  }

  const handleVerifyOtp = () => {
    const code = otp.join("")
    if (code.length < 6) {
      setError("Vui lòng nhập đủ 6 chữ số mã OTP.")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep(3)
    }, 400)
  }

  // Quick fill OTP for teacher evaluation
  const handleAutoFillOtp = () => {
    setOtp(["8", "6", "8", "6", "8", "6"])
    setError("")
  }

  // Step 3: Reset password
  const handleResetPassword = (e) => {
    e.preventDefault()
    setError("")
    if (newPassword.length < 6) {
      setError("Mật khẩu mới phải có tối thiểu 6 ký tự.")
      return
    }
    if (newPassword !== confirmPassword) {
      setError("Xác nhận mật khẩu mới không trùng khớp.")
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep(4)
    }, 500)
  }

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col justify-center max-w-md mx-auto">
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={onBackToLogin}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-xl hover:bg-gray-100 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại Đăng nhập
        </button>
      </div>

      <div className="text-center mb-6">
        <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 mx-auto flex items-center justify-center text-2xl shadow-md border border-indigo-100 mb-3 animate-float">
          <KeyRound className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-black text-gray-900 font-display">
          Khôi phục mật khẩu 🔐
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          {step === 1 && "Nhập email đã đăng ký để nhận mã xác minh OTP"}
          {step === 2 && `Mã xác thực đã được gửi tới ${email || "email của bạn"}`}
          {step === 3 && "Thiết lập mật khẩu bảo mật mới cho tài khoản"}
          {step === 4 && "Đổi mật khẩu thành công! Bạn có thể đăng nhập ngay"}
        </p>
      </div>

      {/* Error notification */}
      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold mb-4">
          ⚠️ {error}
        </div>
      )}

      {/* STEP 1: Enter Email */}
      {step === 1 && (
        <form onSubmit={handleSendEmail} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              Email tài khoản của bạn
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hocvien@gmail.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
              />
            </div>
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
                <span>Gửi mã OTP xác nhận</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}

      {/* STEP 2: Enter OTP */}
      {step === 2 && (
        <div className="space-y-5">
          <div className="flex justify-center gap-2">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                id={`otp-${idx}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(idx, e.target.value)}
                className="w-11 h-12 text-center text-xl font-black rounded-xl border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
              />
            ))}
          </div>

          {/* Quick Demo button for teacher */}
          <button
            type="button"
            onClick={handleAutoFillOtp}
            className="w-full py-2 px-3 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold hover:bg-indigo-100 transition-colors cursor-pointer"
          >
            ⚡ Điền nhanh mã OTP mẫu (868686)
          </button>

          <button
            type="button"
            onClick={handleVerifyOtp}
            disabled={loading}
            className="w-full py-3 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-200 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Xác nhận mã OTP</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}

      {/* STEP 3: Enter New Password */}
      {step === 3 && (
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              Mật khẩu mới
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Tối thiểu 6 ký tự"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-indigo-600 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">
              Nhập lại mật khẩu mới
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Nhập lại chính xác"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-indigo-600 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-200 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Lưu mật khẩu mới & Tiếp tục</span>
                <CheckCircle2 className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}

      {/* STEP 4: Success */}
      {step === 4 && (
        <div className="text-center space-y-4 p-6 rounded-3xl bg-emerald-50 border border-emerald-200">
          <div className="w-16 h-16 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center text-3xl shadow-lg shadow-emerald-200">
            ✓
          </div>
          <h2 className="text-lg font-black text-emerald-900 font-display">
            Khôi phục thành công!
          </h2>
          <p className="text-xs text-emerald-700">
            Mật khẩu của bạn đã được cập nhật thành công. Vui lòng đăng nhập lại với mật khẩu mới.
          </p>
          <button
            onClick={onBackToLogin}
            className="w-full py-3 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            Đăng nhập ngay
          </button>
        </div>
      )}
    </div>
  )
}
