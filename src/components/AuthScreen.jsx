import { useState, useRef, useEffect } from "react"

const EMOJI_AVATARS = ["🎓", "🦁", "🐼", "🦊", "🚀", "🌟", "💎", "🎯"]

export default function AuthScreen({
  onLogin,
  user,
  isLoggedIn,
  onLogout,
  onUpdateUser,
}) {
  const [mode, setMode] = useState("login") // 'login' | 'register'
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [avatar, setAvatar] = useState(user?.avatar || null)
  const [selectedEmoji, setSelectedEmoji] = useState("🎓")
  const [isEditingName, setIsEditingName] = useState(false)
  const [editedName, setEditedName] = useState("")
  const [authError, setAuthError] = useState("")
  const [authSuccess, setAuthSuccess] = useState("")

  const fileInputRef = useRef(null)
  const cameraInputRef = useRef(null)

  // Danh sách tài khoản đã lưu trên máy
  const [savedAccounts, setSavedAccounts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("english_app_accounts") || "[]")
    } catch {
      return []
    }
  })

  // Tài khoản đăng nhập gần nhất
  const lastSavedUser = (() => {
    try {
      const saved = localStorage.getItem("english_app_user")
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })()

  useEffect(() => {
    if (user) {
      setEditedName(user.name || "")
      setAvatar(user.avatar || null)
    }
  }, [user])

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAvatar(url)
      if (onUpdateUser) {
        onUpdateUser({ avatar: url })
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setAuthError("")
  }

  const handleSelectSavedAccount = (acc) => {
    setMode("login")
    setForm((prev) => ({
      ...prev,
      email: acc.email || "",
      password: acc.password || "",
    }))
    setAuthError("")
  }

  const handleQuickDemoLogin = () => {
    const demoUser = {
      name: "Nguyễn Văn A (Học viên)",
      email: "hocvien.demo@english.app",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    }
    if (onLogin) {
      onLogin(demoUser)
    }
  }

  const handleGuestLogin = () => {
    const guestUser = {
      name: "Học viên Khách",
      email: "khach@english.app",
      avatar: null,
    }
    if (onLogin) {
      onLogin(guestUser)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAuthError("")
    setAuthSuccess("")

    // Lấy lại danh sách tài khoản mới nhất
    let currentAccounts = []
    try {
      currentAccounts = JSON.parse(
        localStorage.getItem("english_app_accounts") || "[]",
      )
    } catch {
      currentAccounts = []
    }

    if (mode === "register") {
      const trimmedName = form.name.trim()
      const trimmedEmail = form.email.trim()

      if (!trimmedName) {
        setAuthError("Vui lòng nhập họ và tên của bạn.")
        return
      }
      if (!trimmedEmail) {
        setAuthError("Vui lòng nhập địa chỉ email.")
        return
      }
      if (!form.password) {
        setAuthError("Vui lòng nhập mật khẩu.")
        return
      }
      if (form.password.length < 4) {
        setAuthError("Mật khẩu cần tối thiểu 4 ký tự.")
        return
      }
      if (form.password !== form.confirmPassword) {
        setAuthError("Mật khẩu xác nhận không trùng khớp.")
        return
      }

      const finalAvatar = avatar || selectedEmoji
      const newAccount = {
        name: trimmedName,
        email: trimmedEmail,
        password: form.password,
        avatar: finalAvatar,
        registeredAt: new Date().toISOString(),
      }

      // Cập nhật danh sách tài khoản
      const filtered = currentAccounts.filter(
        (a) => a.email.toLowerCase() !== trimmedEmail.toLowerCase(),
      )
      filtered.push(newAccount)
      try {
        localStorage.setItem("english_app_accounts", JSON.stringify(filtered))
        setSavedAccounts(filtered)
      } catch (err) {
        console.error(err)
      }

      setAuthSuccess("Đăng ký thành công! Đang chuyển hướng vào bài học...")
      setTimeout(() => {
        if (onLogin) {
          onLogin({
            name: newAccount.name,
            email: newAccount.email,
            avatar: newAccount.avatar,
          })
        }
      }, 350)
    } else {
      // Mode Đăng nhập
      const trimmedEmail = form.email.trim().toLowerCase()
      if (!trimmedEmail) {
        setAuthError("Vui lòng nhập email.")
        return
      }
      if (!form.password) {
        setAuthError("Vui lòng nhập mật khẩu.")
        return
      }

      // Tìm tài khoản đã lưu
      const existing = currentAccounts.find(
        (a) => a.email.toLowerCase() === trimmedEmail,
      )
      let accountToLogin

      if (existing) {
        if (existing.password && existing.password !== form.password) {
          setAuthError("Mật khẩu không chính xác. Vui lòng kiểm tra lại!")
          return
        }
        accountToLogin = {
          name: existing.name,
          email: existing.email,
          avatar: existing.avatar || avatar,
        }
      } else {
        // Tạo tên tự động từ email nếu chưa đăng ký trước đó
        const fallbackName =
          form.name.trim() || trimmedEmail.split("@")[0] || "Học viên"
        accountToLogin = {
          name: fallbackName,
          email: trimmedEmail,
          avatar: avatar || selectedEmoji,
        }
      }

      setAuthSuccess("Đăng nhập thành công!")
      setTimeout(() => {
        if (onLogin) {
          onLogin(accountToLogin)
        }
      }, 250)
    }
  }

  const handleSaveEditedName = () => {
    const trimmed = editedName.trim()
    if (!trimmed) return
    if (onUpdateUser) {
      onUpdateUser({ name: trimmed })
    }
    try {
      const currentAccounts = JSON.parse(
        localStorage.getItem("english_app_accounts") || "[]",
      )
      const updated = currentAccounts.map((acc) =>
        acc.email?.toLowerCase() === user?.email?.toLowerCase()
          ? { ...acc, name: trimmed }
          : acc,
      )
      localStorage.setItem("english_app_accounts", JSON.stringify(updated))
      setSavedAccounts(updated)
    } catch (e) {
      console.error(e)
    }
    setIsEditingName(false)
  }

  // Màn hình Thông tin tài khoản khi ĐÃ ĐĂNG NHẬP
  if (isLoggedIn && user) {
    return (
      <div className="px-4 pt-10 pb-24">
        <p
          className="text-sm font-semibold"
          style={{ color: "var(--color-muted)" }}
        >
          Tài khoản
        </p>
        <h1
          className="text-3xl font-black mb-5"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text)",
          }}
        >
          Thông tin tài khoản
        </h1>

        <div
          className="rounded-3xl p-5 shadow-sm"
          style={{
            background: "white",
            border: "1px solid var(--color-border)",
          }}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="user"
            onChange={handleAvatarChange}
            className="hidden"
          />

          <div className="flex items-center gap-3.5 mb-4">
            <div className="relative group">
              {avatar || user.avatar ? (
                (typeof (avatar || user.avatar) === "string" &&
                  (avatar || user.avatar).startsWith("http")) ||
                (avatar || user.avatar)?.startsWith("blob:") ? (
                  <img
                    src={avatar || user.avatar}
                    alt="Avatar"
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-purple-300 shadow-sm"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-sm bg-purple-100 border-2 border-purple-300">
                    {avatar || user.avatar}
                  </div>
                )
              ) : (
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black shadow-sm"
                  style={{
                    background: "var(--color-primary-light)",
                    color: "var(--color-primary)",
                  }}
                >
                  {user.name?.[0]?.toUpperCase() || "U"}
                </div>
              )}
              <button
                onClick={() => fileInputRef.current?.click()}
                title="Đổi ảnh đại diện"
                className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] shadow-sm hover:scale-110 active:scale-95 transition-transform cursor-pointer"
              >
                📷
              </button>
            </div>

            <div className="flex-1 min-w-0">
              {isEditingName ? (
                <div className="flex items-center gap-2 mb-1">
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="border rounded-xl px-2.5 py-1 text-sm font-bold w-full outline-none"
                    style={{ borderColor: "var(--color-primary)" }}
                    autoFocus
                  />
                  <button
                    onClick={handleSaveEditedName}
                    className="px-2.5 py-1 rounded-xl bg-purple-600 text-white text-xs font-bold cursor-pointer hover:bg-purple-700"
                  >
                    Lưu
                  </button>
                  <button
                    onClick={() => {
                      setEditedName(user.name || "")
                      setIsEditingName(false)
                    }}
                    className="px-2 py-1 rounded-xl bg-gray-200 text-gray-700 text-xs font-bold cursor-pointer hover:bg-gray-300"
                  >
                    Hủy
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p
                    className="text-lg font-black truncate"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-text)",
                    }}
                  >
                    {user.name || "Học viên"}
                  </p>
                  <button
                    onClick={() => {
                      setEditedName(user.name || "")
                      setIsEditingName(true)
                    }}
                    title="Đổi tên"
                    className="text-xs text-purple-600 hover:text-purple-800 p-1 font-bold cursor-pointer"
                  >
                    ✏️ Sửa
                  </button>
                </div>
              )}
              <p
                className="text-xs truncate"
                style={{ color: "var(--color-muted)" }}
              >
                {user.email}
              </p>
              <div className="flex items-center gap-2 mt-1.5">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-[11px] font-bold text-purple-700 hover:underline cursor-pointer"
                >
                  Chọn ảnh
                </button>
                <span className="text-gray-300 text-xs">·</span>
                <button
                  onClick={() => cameraInputRef.current?.click()}
                  className="text-[11px] font-bold text-emerald-700 hover:underline cursor-pointer"
                >
                  Chụp selfie
                </button>
              </div>
            </div>
          </div>

          <div
            className="space-y-2 text-sm"
            style={{ color: "var(--color-text)" }}
          >
            <div
              className="flex justify-between rounded-xl px-3 py-2"
              style={{ background: "var(--color-primary-light)" }}
            >
              <span style={{ color: "var(--color-muted)" }}>Trạng thái</span>
              <span
                className="font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                Đã đăng nhập
              </span>
            </div>
            <div
              className="flex justify-between rounded-xl px-3 py-2"
              style={{ background: "#F9FAFB" }}
            >
              <span style={{ color: "var(--color-muted)" }}>Tên học viên</span>
              <span className="font-bold text-purple-700">
                {user.name || "Chưa đặt tên"}
              </span>
            </div>
            <div
              className="flex justify-between rounded-xl px-3 py-2"
              style={{ background: "#F9FAFB" }}
            >
              <span style={{ color: "var(--color-muted)" }}>Cấp độ</span>
              <span className="font-bold">Cấp 4 · Chăm chỉ</span>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="mt-5 w-full py-3 rounded-2xl font-bold text-white cursor-pointer transition-transform active:scale-98 shadow-sm"
            style={{
              background: "var(--color-red)",
              fontFamily: "var(--font-display)",
            }}
          >
            Đăng xuất
          </button>
        </div>
      </div>
    )
  }

  // Màn hình ĐĂNG NHẬP / ĐĂNG KÝ (khi chưa đăng nhập hoặc khi khởi động ứng dụng)
  return (
    <div className="px-4 pt-8 pb-12 max-w-md mx-auto">
      {/* Brand Header */}
      <div className="mb-6 text-center">
        <div
          className="w-16 h-16 rounded-3xl mx-auto mb-3 flex items-center justify-center text-3xl shadow-lg ring-4 ring-purple-100"
          style={{ background: "var(--color-primary)", color: "white" }}
        >
          🎓
        </div>
        <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase mb-2 bg-purple-100 text-purple-700">
          English Learning App
        </div>
        <h1
          className="text-2xl font-black"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text)",
          }}
        >
          {mode === "login" ? "Đăng nhập học tập" : "Đăng ký tài khoản"}
        </h1>
        <p className="text-xs mt-1" style={{ color: "var(--color-muted)" }}>
          {mode === "login"
            ? "Đăng nhập để tiếp tục lộ trình học từ vựng, ngữ pháp và bài thi"
            : "Tạo tài khoản miễn phí để lưu tiến độ và cá nhân hóa lộ trình"}
        </p>
      </div>

      {/* Switch Tab Đăng nhập / Đăng ký */}
      <div className="mb-4 flex rounded-2xl p-1 shadow-sm bg-gray-100 border border-gray-200">
        <button
          type="button"
          onClick={() => {
            setMode("login")
            setAuthError("")
            setAuthSuccess("")
          }}
          className="flex-1 rounded-xl py-2.5 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
          style={{
            background:
              mode === "login" ? "var(--color-primary)" : "transparent",
            color: mode === "login" ? "white" : "var(--color-muted)",
            boxShadow:
              mode === "login" ? "0 2px 6px rgba(124, 58, 237, 0.3)" : "none",
          }}
        >
          <span>🔑</span>
          <span>Đăng nhập</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setMode("register")
            setAuthError("")
            setAuthSuccess("")
          }}
          className="flex-1 rounded-xl py-2.5 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5"
          style={{
            background:
              mode === "register" ? "var(--color-primary)" : "transparent",
            color: mode === "register" ? "white" : "var(--color-muted)",
            boxShadow:
              mode === "register"
                ? "0 2px 6px rgba(124, 58, 237, 0.3)"
                : "none",
          }}
        >
          <span>✨</span>
          <span>Đăng ký</span>
        </button>
      </div>

      {/* Quick Demo & Guest Actions */}
      <div className="mb-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleQuickDemoLogin}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold border border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors cursor-pointer shadow-xs"
        >
          <span>⚡</span>
          <span>Tài khoản Demo</span>
        </button>
        <button
          type="button"
          onClick={handleGuestLogin}
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer shadow-xs"
        >
          <span>👤</span>
          <span>Vào vai Khách</span>
        </button>
      </div>

      {/* Tài khoản đã đăng ký trên máy này (nếu có) */}
      {mode === "login" && savedAccounts.length > 0 && (
        <div className="mb-4 p-3 rounded-2xl bg-white border border-purple-100 shadow-xs">
          <p className="text-[11px] font-bold text-gray-500 mb-2 flex items-center justify-between">
            <span>💾 Tài khoản đã lưu trên thiết bị:</span>
            <span className="text-purple-600">({savedAccounts.length})</span>
          </p>
          <div className="flex flex-wrap gap-1.5">
            {savedAccounts.slice(0, 3).map((acc, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectSavedAccount(acc)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-gray-50 hover:bg-purple-50 text-gray-700 border border-gray-200 hover:border-purple-300 transition-all cursor-pointer"
              >
                <span>
                  {typeof acc.avatar === "string" && acc.avatar.length <= 4
                    ? acc.avatar
                    : "👤"}
                </span>
                <span className="truncate max-w-[120px]">
                  {acc.name || acc.email}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Alert Error */}
      {authError && (
        <div className="mb-4 p-3.5 rounded-2xl text-xs font-bold text-red-700 bg-red-50 border border-red-200 flex items-start gap-2 shadow-xs animate-shake">
          <span className="text-sm">⚠️</span>
          <span className="flex-1">{authError}</span>
        </div>
      )}

      {/* Alert Success */}
      {authSuccess && (
        <div className="mb-4 p-3.5 rounded-2xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 flex items-start gap-2 shadow-xs">
          <span className="text-sm">✅</span>
          <span className="flex-1">{authSuccess}</span>
        </div>
      )}

      {/* Main Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-3.5 bg-white p-5 rounded-3xl border border-gray-100 shadow-sm"
      >
        {mode === "register" && (
          <>
            {/* Chọn Avatar khi Đăng ký */}
            <div>
              <label className="block text-xs font-bold mb-1.5 text-gray-700">
                Chọn biểu tượng đại diện:
              </label>
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                {EMOJI_AVATARS.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => {
                      setSelectedEmoji(emoji)
                      setAvatar(emoji)
                    }}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 transition-transform cursor-pointer ${
                      selectedEmoji === emoji
                        ? "bg-purple-100 ring-2 ring-purple-600 scale-105"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold mb-1.5 text-gray-700">
                Họ và tên học viên <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ví dụ: Nguyễn Văn A"
                className="w-full rounded-2xl border px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-purple-600"
                style={{
                  borderColor: "var(--color-border)",
                  background: "#FAFAFA",
                }}
                required
              />
            </div>
          </>
        )}

        <div>
          <label className="block text-xs font-bold mb-1.5 text-gray-700">
            Email học tập <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full rounded-2xl border px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-purple-600"
            style={{
              borderColor: "var(--color-border)",
              background: "#FAFAFA",
            }}
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold mb-1.5 text-gray-700 flex justify-between">
            <span>
              Mật khẩu <span className="text-red-500">*</span>
            </span>
            {mode === "login" && (
              <span className="text-[11px] font-normal text-purple-600 hover:underline cursor-pointer">
                Quên mật khẩu?
              </span>
            )}
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full rounded-2xl border px-3.5 py-2.5 pr-10 text-sm outline-none transition-colors focus:border-purple-600"
              style={{
                borderColor: "var(--color-border)",
                background: "#FAFAFA",
              }}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer text-xs p-1"
              title={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {mode === "register" && (
          <div>
            <label className="block text-xs font-bold mb-1.5 text-gray-700">
              Xác nhận mật khẩu <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Nhập lại mật khẩu"
                className="w-full rounded-2xl border px-3.5 py-2.5 pr-10 text-sm outline-none transition-colors focus:border-purple-600"
                style={{
                  borderColor: "var(--color-border)",
                  background: "#FAFAFA",
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer text-xs p-1"
                title={showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3.5 rounded-2xl text-white font-bold shadow-md transition-all active:scale-98 cursor-pointer mt-3 flex items-center justify-center gap-2"
          style={{
            background: "var(--color-primary)",
            fontFamily: "var(--font-display)",
          }}
        >
          <span>
            {mode === "login"
              ? "🚀 Đăng nhập ngay"
              : "✨ Hoàn tất & Bắt đầu học"}
          </span>
        </button>
      </form>

      {/* Switch mode footer */}
      <div className="mt-5 text-center">
        {mode === "login" ? (
          <p className="text-xs text-gray-500">
            Bạn chưa có tài khoản?{" "}
            <button
              type="button"
              onClick={() => {
                setMode("register")
                setAuthError("")
                setAuthSuccess("")
              }}
              className="font-bold text-purple-600 hover:text-purple-800 underline cursor-pointer"
            >
              Đăng ký học viên mới
            </button>
          </p>
        ) : (
          <p className="text-xs text-gray-500">
            Bạn đã có tài khoản?{" "}
            <button
              type="button"
              onClick={() => {
                setMode("login")
                setAuthError("")
                setAuthSuccess("")
              }}
              className="font-bold text-purple-600 hover:text-purple-800 underline cursor-pointer"
            >
              Đăng nhập ngay
            </button>
          </p>
        )}
      </div>
    </div>
  )
}
