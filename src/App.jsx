import { useState, useEffect } from "react"
import Dashboard from "./components/Dashboard"
import Flashcards from "./components/Flashcards"
import Listening from "./components/Listening"
import Grammar from "./components/Grammar"
import MockTest from "./components/MockTest"
import NavBar from "./components/NavBar"

// New 20 Screens
import OnboardingScreen from "./components/OnboardingScreen"
import LoginScreen from "./components/LoginScreen"
import RegisterScreen from "./components/RegisterScreen"
import ForgotPasswordScreen from "./components/ForgotPasswordScreen"
import WordBankScreen from "./components/WordBankScreen"
import SpeakingScreen from "./components/SpeakingScreen"
import GrammarQuizScreen from "./components/GrammarQuizScreen"
import ReadingScreen from "./components/ReadingScreen"
import WritingScreen from "./components/WritingScreen"
import TestResultsScreen from "./components/TestResultsScreen"
import VideoLessonsScreen from "./components/VideoLessonsScreen"
import HomeworkScannerScreen from "./components/HomeworkScannerScreen"
import LeaderboardScreen from "./components/LeaderboardScreen"
import AchievementsScreen from "./components/AchievementsScreen"
import ProfileScreen from "./components/ProfileScreen"
import SettingsScreen from "./components/SettingsScreen"
import TeacherShowcaseModal, {
  ALL_PAGES_MANIFEST,
} from "./components/TeacherShowcaseModal"

import {
  Smartphone,
  Maximize2,
  GraduationCap,
  Sparkles,
  Wifi,
  Battery,
} from "lucide-react"

export default function App() {
  const [tab, setTab] = useState("home")
  const [showShowcase, setShowShowcase] = useState(false)
  const [deviceFrame, setDeviceFrame] = useState(false) // true: phone frame on desktop, false: standard mobile/responsive
  const [currentTime, setCurrentTime] = useState("09:41")

  // User state
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("english_app_user")
      return saved
        ? JSON.parse(saved)
        : {
            name: "Học viên xuất sắc",
            email: "hocvien.pro@gmail.com",
            avatar: null,
            emojiAvatar: "🎓",
            level: "B2 Upper-Intermediate",
            streak: 7,
            xp: 1420,
          }
    } catch {
      return null
    }
  })

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // Real-time clock for phone status bar
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const mins = now.getMinutes().toString().padStart(2, "0")
      setCurrentTime(`${hours}:${mins}`)
    }
    updateTime()
    const timer = setInterval(updateTime, 30000)
    return () => clearInterval(timer)
  }, [])

  // Check dark mode preference on boot
  useEffect(() => {
    const savedTheme = localStorage.getItem("english_app_theme")
    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    setIsLoggedIn(true)
    try {
      localStorage.setItem("english_app_user", JSON.stringify(userData))
    } catch (e) {
      console.error(e)
    }
    setTab("home")
  }

  const handleUpdateUser = (updatedData) => {
    const newUser = { ...user, ...updatedData }
    setUser(newUser)
    try {
      localStorage.setItem("english_app_user", JSON.stringify(newUser))
    } catch (e) {
      console.error(e)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setTab("login")
  }

  const handleResetData = () => {
    localStorage.clear()
    window.location.reload()
  }

  // Find info of current active screen
  const currentPageInfo =
    ALL_PAGES_MANIFEST.find((p) => p.id === tab) || ALL_PAGES_MANIFEST[4]

  // Render the current screen based on tab state
  const renderScreen = () => {
    switch (tab) {
      // 01. Onboarding
      case "onboarding":
        return (
          <OnboardingScreen
            onFinish={() => {
              setIsLoggedIn(true)
              setTab("home")
            }}
            onGoToLogin={() => setTab("login")}
          />
        )

      // 02. Login
      case "login":
        return (
          <LoginScreen
            onLogin={handleLogin}
            onGoToRegister={() => setTab("register")}
            onGoToForgotPassword={() => setTab("forgot_password")}
          />
        )

      // 03. Register
      case "register":
        return (
          <RegisterScreen
            onRegisterSuccess={handleLogin}
            onGoToLogin={() => setTab("login")}
          />
        )

      // 04. Forgot Password
      case "forgot_password":
        return (
          <ForgotPasswordScreen onBackToLogin={() => setTab("login")} />
        )

      // 05. Dashboard
      case "home":
        return <Dashboard setTab={setTab} user={user} />

      // 06. Flashcards 3D
      case "flashcards":
        return <Flashcards />

      // 07. Word Bank & Dictionary
      case "word_bank":
        return (
          <WordBankScreen
            onBack={() => setTab("home")}
            onGoToFlashcards={() => setTab("flashcards")}
          />
        )

      // 08. Listening
      case "listening":
        return <Listening />

      // 09. Speaking AI Coach
      case "speaking":
        return <SpeakingScreen onBack={() => setTab("home")} />

      // 10. 12 Tenses Grammar
      case "grammar":
        return <Grammar />

      // 11. Grammar Quiz
      case "grammar_quiz":
        return (
          <GrammarQuizScreen
            onBack={() => setTab("home")}
            onGoToGrammarTheory={() => setTab("grammar")}
          />
        )

      // 12. Bilingual Reading
      case "reading":
        return <ReadingScreen onBack={() => setTab("home")} />

      // 13. Writing AI
      case "writing":
        return <WritingScreen onBack={() => setTab("home")} />

      // 14. Mock Test Exam
      case "mocktest":
        return <MockTest />

      // 15. Test Results Analytics
      case "test_results":
        return (
          <TestResultsScreen
            onRestart={() => setTab("mocktest")}
            onGoHome={() => setTab("home")}
          />
        )

      // 16. Video Lessons
      case "video_lessons":
        return <VideoLessonsScreen onBack={() => setTab("home")} />

      // 17. Homework Scanner
      case "homework_scanner":
        return <HomeworkScannerScreen onBack={() => setTab("home")} />

      // 18. Leaderboard
      case "leaderboard":
        return <LeaderboardScreen onBack={() => setTab("home")} user={user} />

      // 19. Achievements & Badges
      case "achievements":
        return <AchievementsScreen onBack={() => setTab("home")} />

      // 20. Profile & Stats
      case "profile":
      case "auth":
        return (
          <ProfileScreen
            user={user}
            onLogout={handleLogout}
            onGoToSettings={() => setTab("settings")}
            onGoToAchievements={() => setTab("achievements")}
            onUpdateUser={handleUpdateUser}
          />
        )

      // 21 (Bonus). Settings
      case "settings":
        return (
          <SettingsScreen
            onBack={() => setTab("profile")}
            onResetData={handleResetData}
          />
        )

      default:
        return <Dashboard setTab={setTab} user={user} />
    }
  }

  // Should we show bottom navigation bar?
  // Only show bottom navigation for main learning/hub tabs, not in auth/onboarding flows
  const showNavBar = ![
    "onboarding",
    "login",
    "register",
    "forgot_password",
  ].includes(tab)

  return (
    <div
      className="min-h-screen text-slate-900 transition-colors duration-300"
      style={{
        background: "var(--color-bg)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* ==================== TEACHER / REVIEWER CONTROL HEADER ==================== */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200/80 px-4 py-2.5 shadow-xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          {/* Left: App Title & Current Page Badge */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center font-black shadow-xs shrink-0 font-display text-sm">
              EM
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xs text-gray-900 font-display truncate">
                  EngMastery Pro
                </span>
                <span className="hidden sm:inline-block text-[10px] font-bold px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-800">
                  LTDD2: Đủ 20 Trang
                </span>
              </div>
              <p className="text-[11px] text-gray-500 font-semibold truncate flex items-center gap-1">
                <span className="font-mono text-indigo-600 font-bold">
                  Trang {currentPageInfo.num}/20:
                </span>
                <span>{currentPageInfo.title}</span>
              </p>
            </div>
          </div>

          {/* Right: Master 20 Pages Showcase Button & Device View Mode */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Device frame toggle (Desktop only) */}
            <button
              onClick={() => setDeviceFrame((prev) => !prev)}
              title={
                deviceFrame
                  ? "Chuyển sang chế độ xem phẳng"
                  : "Chuyển sang khung điện thoại iPhone"
              }
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 text-xs font-bold transition-colors cursor-pointer"
            >
              {deviceFrame ? (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Mở rộng</span>
                </>
              ) : (
                <>
                  <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Khung Mobile</span>
                </>
              )}
            </button>

            {/* Showcase 20 Screens Trigger Button */}
            <button
              onClick={() => setShowShowcase(true)}
              className="py-1.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-xs shadow-md shadow-indigo-300/40 flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Sơ đồ 20 Trang</span>
              <span className="sm:hidden">20 Trang</span>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            </button>
          </div>
        </div>
      </header>

      {/* ==================== MAIN CONTENT VIEWPORT ==================== */}
      <main className="py-2 sm:py-6 flex justify-center">
        {deviceFrame ? (
          /* Smartphone Frame Mockup View (iPhone 16 Pro styling on Desktop) */
          <div className="relative w-full max-w-[420px] rounded-[52px] border-[10px] border-slate-900 bg-white shadow-2xl overflow-hidden ring-1 ring-black/10 my-2">
            {/* Dynamic Island & Status Bar */}
            <div className="h-10 bg-slate-900 text-white px-7 flex items-center justify-between text-xs font-semibold select-none">
              <span className="font-mono font-bold text-[11px]">
                {currentTime}
              </span>
              {/* Dynamic Island pill */}
              <div className="w-24 h-5 rounded-full bg-black flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[9px] font-mono text-gray-400">
                  EngMastery
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-300">
                <Wifi className="w-3.5 h-3.5" />
                <Battery className="w-4 h-4" />
              </div>
            </div>

            {/* Screen Content */}
            <div className="relative min-h-[780px] max-h-[820px] overflow-y-auto no-scrollbar bg-[var(--color-bg)]">
              {renderScreen()}
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="h-4 bg-slate-900 flex items-center justify-center">
              <div className="w-28 h-1 rounded-full bg-white/40" />
            </div>

            {/* Bottom Floating Navigation */}
            {showNavBar && (
              <NavBar
                tab={tab}
                setTab={setTab}
                onOpenShowcase={() => setShowShowcase(true)}
              />
            )}
          </div>
        ) : (
          /* Standard Mobile Responsive Viewport */
          <div className="w-full max-w-md relative min-h-screen">
            {renderScreen()}

            {/* Bottom Navigation */}
            {showNavBar && (
              <NavBar
                tab={tab}
                setTab={setTab}
                onOpenShowcase={() => setShowShowcase(true)}
              />
            )}
          </div>
        )}
      </main>

      {/* ==================== TEACHER 20 PAGES SHOWCASE MODAL ==================== */}
      <TeacherShowcaseModal
        isOpen={showShowcase}
        onClose={() => setShowShowcase(false)}
        currentTab={tab}
        onSelectTab={(newTab) => {
          setTab(newTab)
          if (["onboarding", "login", "register", "forgot_password"].includes(newTab)) {
            // allow testing auth screens freely
          }
        }}
      />
    </div>
  )
}
