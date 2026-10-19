import { useState } from "react"
import { Sparkles, ArrowRight, CheckCircle2, Target, Award, Clock } from "lucide-react"

export const ONBOARDING_SLIDES = [
  {
    badge: "Bước 1/3 · Trải nghiệm học thế hệ mới",
    title: "Chinh phục tiếng Anh theo phương pháp Spaced Repetition",
    desc: "Ghi nhớ từ vựng vĩnh viễn với thẻ Flashcards 3D, bài tập nghe bản xứ và ngữ pháp 12 thì trực quan.",
    emoji: "🚀",
    color: "#6366F1",
    bg: "#EEF2FF",
  },
  {
    badge: "Bước 2/3 · Công nghệ AI thông minh",
    title: "Luyện phát âm & Chấm điểm Speaking tức thì",
    desc: "Ghi âm giọng nói thực tế, nhận diện ngữ điệu và trọng âm chuẩn xác như gia sư bản xứ 1-kèm-1.",
    emoji: "🎙️",
    color: "#10B981",
    bg: "#D1FAE5",
  },
  {
    badge: "Bước 3/3 · Đo lường tiến độ khoa học",
    title: "Thi thử TOEIC / IELTS & Đua top Bảng xếp hạng",
    desc: "Đo lường năng lực với đề thi bấm giờ chuẩn quốc tế, nhận huy hiệu danh giá và leo bảng vàng thành tích.",
    emoji: "🏆",
    color: "#F59E0B",
    bg: "#FEF3C7",
  },
]

export default function OnboardingScreen({ onFinish, onGoToLogin }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedLevel, setSelectedLevel] = useState("intermediate")
  const [selectedGoal, setSelectedGoal] = useState("20")

  const levels = [
    { id: "beginner", name: "Mới bắt đầu / Mất gốc", desc: "A1 - A2 · Xây dựng nền tảng từ vựng cơ bản", icon: "🌱" },
    { id: "intermediate", name: "Trung cấp", desc: "B1 - B2 · Tự tin giao tiếp và chuẩn bị thi cử", icon: "⚡" },
    { id: "advanced", name: "Nâng cao / IELTS 7.0+", desc: "C1 · Thành thạo học thuật & từ vựng chuyên sâu", icon: "🎓" },
  ]

  const goals = [
    { id: "10", time: "10 phút", desc: "Học nhẹ nhàng" },
    { id: "20", time: "20 phút", desc: "Tiêu chuẩn (Khuyên dùng)" },
    { id: "30", time: "30 phút", desc: "Tăng tốc thần tốc" },
  ]

  const slide = ONBOARDING_SLIDES[currentSlide]

  const handleNextSlide = () => {
    if (currentSlide < ONBOARDING_SLIDES.length - 1) {
      setCurrentSlide((prev) => prev + 1)
    } else {
      // Save onboarding preference
      try {
        localStorage.setItem("english_app_onboarding", JSON.stringify({ level: selectedLevel, goal: selectedGoal }))
      } catch (e) {
        console.error(e)
      }
      onFinish()
    }
  }

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col justify-between max-w-md mx-auto">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-base tracking-tight text-gray-900 font-display">
            EngMastery <span className="text-indigo-600">AI</span>
          </span>
        </div>
        <button
          onClick={onGoToLogin}
          className="text-xs font-bold text-gray-500 hover:text-indigo-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
        >
          Bỏ qua (Đăng nhập)
        </button>
      </div>

      {/* Main Slide Card */}
      <div className="my-6">
        <div
          className="p-6 rounded-3xl border border-gray-100 shadow-xl transition-all duration-500"
          style={{ background: slide.bg }}
        >
          <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center text-4xl mb-5 mx-auto animate-float">
            {slide.emoji}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-indigo-700 bg-white/80 shadow-xs mb-3">
            <Sparkles className="w-3 h-3 text-indigo-500" />
            {slide.badge}
          </div>

          <h2 className="text-xl font-black text-gray-900 leading-snug font-display mb-2.5">
            {slide.title}
          </h2>
          <p className="text-xs text-gray-600 leading-relaxed font-medium">
            {slide.desc}
          </p>
        </div>

        {/* Level & Goal Selection on the last step */}
        {currentSlide === 2 && (
          <div className="mt-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm animate-fadeIn">
            <p className="text-xs font-bold text-gray-800 mb-2 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-indigo-600" /> Chọn trình độ hiện tại của bạn:
            </p>
            <div className="grid grid-cols-1 gap-2 mb-3">
              {levels.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedLevel === lvl.id
                      ? "border-indigo-600 bg-indigo-50/70 shadow-xs"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{lvl.icon}</span>
                    <div>
                      <p className="text-xs font-bold text-gray-900">{lvl.name}</p>
                      <p className="text-[10px] text-gray-500">{lvl.desc}</p>
                    </div>
                  </div>
                  {selectedLevel === lvl.id && (
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  )}
                </button>
              ))}
            </div>

            <p className="text-xs font-bold text-gray-800 mb-2 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-500" /> Mục tiêu học tập mỗi ngày:
            </p>
            <div className="grid grid-cols-3 gap-2">
              {goals.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setSelectedGoal(g.id)}
                  className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                    selectedGoal === g.id
                      ? "border-amber-500 bg-amber-50 shadow-xs text-amber-900"
                      : "border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <p className="text-xs font-black">{g.time}</p>
                  <p className="text-[9px] opacity-75">{g.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Stepper Dots */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {ONBOARDING_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? "w-8 bg-indigo-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="space-y-3">
        <button
          onClick={handleNextSlide}
          className="w-full py-3.5 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-200 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
        >
          <span>{currentSlide === 2 ? "Bắt đầu học ngay hôm nay" : "Tiếp tục khám phá"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="text-center">
          <span className="text-xs text-gray-500">Đã có tài khoản học viên? </span>
          <button
            onClick={onGoToLogin}
            className="text-xs font-extrabold text-indigo-600 hover:underline cursor-pointer"
          >
            Đăng nhập ngay
          </button>
        </div>
      </div>
    </div>
  )
}
