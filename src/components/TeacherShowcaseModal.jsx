import { useState } from "react"
import {
  Sparkles,
  Layers,
  CheckCircle2,
  X,
  Search,
  ExternalLink,
  GraduationCap,
  Award,
} from "lucide-react"

export const ALL_PAGES_MANIFEST = [
  // Nhóm 1: Xác thực & Khởi động
  {
    num: "01",
    id: "onboarding",
    title: "Onboarding & Chọn Mục Tiêu",
    group: "Khởi động & Xác thực",
    desc: "Giới thiệu 3 bước, chọn trình độ (A1-C1) & mục tiêu học mỗi ngày",
    icon: "🚀",
    color: "#6366F1",
    bg: "#EEF2FF",
  },
  {
    num: "02",
    id: "login",
    title: "Đăng Nhập Học Viên",
    group: "Khởi động & Xác thực",
    desc: "Đăng nhập email/pass, ghi nhớ tài khoản, 1-click Demo cho Giảng viên",
    icon: "🔑",
    color: "#3B82F6",
    bg: "#EFF6FF",
  },
  {
    num: "03",
    id: "register",
    title: "Đăng Ký Tài Khoản",
    group: "Khởi động & Xác thực",
    desc: "Tạo tài khoản mới, chọn avatar emoji/ảnh, chọn mục tiêu học tập",
    icon: "📝",
    color: "#10B981",
    bg: "#D1FAE5",
  },
  {
    num: "04",
    id: "forgot_password",
    title: "Quên Mật Khẩu & OTP",
    group: "Khởi động & Xác thực",
    desc: "Nhập email -> mã xác thực 6 số OTP -> đặt lại mật khẩu mới",
    icon: "🔐",
    color: "#F59E0B",
    bg: "#FEF3C7",
  },

  // Nhóm 2: Trang chủ & Từ vựng
  {
    num: "05",
    id: "home",
    title: "Trang Chủ Dashboard",
    group: "Trung tâm Học tập",
    desc: "Streak lửa, tiến độ XP, danh ngôn hàng ngày, 12 cổng truy cập nhanh",
    icon: "🏠",
    color: "#6366F1",
    bg: "#EEF2FF",
  },
  {
    num: "06",
    id: "flashcards",
    title: "Từ Vựng Flashcards 3D",
    group: "Trung tâm Học tập",
    desc: "Lật thẻ 3D mượt mà, phát âm bản xứ Web Speech, phiên âm IPA, ví dụ",
    icon: "🃏",
    color: "#8B5CF6",
    bg: "#EDE9FE",
  },
  {
    num: "07",
    id: "word_bank",
    title: "Sổ Tay Từ Vựng & Tra Từ",
    group: "Trung tâm Học tập",
    desc: "70+ từ vựng theo chủ đề, bộ lọc CEFR A1-C1, tra từ điển, yêu thích",
    icon: "📖",
    color: "#0284C7",
    bg: "#E0F2FE",
  },

  // Nhóm 3: Kỹ năng Nghe & Nói AI
  {
    num: "08",
    id: "listening",
    title: "Luyện Nghe Hội Thoại & Podcast",
    group: "Kỹ năng Nghe & Nói",
    desc: "Trình phát audio sóng âm, transcript song ngữ karaoke, trắc nghiệm nghe hiểu",
    icon: "🎧",
    color: "#0284C7",
    bg: "#E0F2FE",
  },
  {
    num: "09",
    id: "speaking",
    title: "Luyện Nói & Chấm Điểm AI",
    group: "Kỹ năng Nghe & Nói",
    desc: "Micro thu âm thật, AI chấm điểm phát âm %, ngữ điệu và trọng âm",
    icon: "🎙️",
    color: "#059669",
    bg: "#D1FAE5",
  },

  // Nhóm 4: Ngữ pháp chuyên sâu
  {
    num: "10",
    id: "grammar",
    title: "Cẩm Nang 12 Thì Ngữ Pháp",
    group: "Ngữ pháp Chuyên sâu",
    desc: "Lý thuyết 12 thì, công thức (+)(-)(?), dấu hiệu nhận biết, ví dụ trực quan",
    icon: "📚",
    color: "#7C3AED",
    bg: "#EDE9FE",
  },
  {
    num: "11",
    id: "grammar_quiz",
    title: "Bài Tập Ngữ Pháp & Điền Từ",
    group: "Ngữ pháp Chuyên sâu",
    desc: "Trắc nghiệm ngữ pháp tương tác, kiểm tra tức thì có lời giải thích",
    icon: "✍️",
    color: "#9333EA",
    bg: "#F3E8FF",
  },

  // Nhóm 5: Đọc & Viết AI
  {
    num: "12",
    id: "reading",
    title: "Đọc Báo Song Ngữ",
    group: "Đọc & Viết AI",
    desc: "Báo chí quốc tế song ngữ Anh - Việt, chạm từ tra nghĩa tức thì, quiz đọc",
    icon: "📰",
    color: "#0D9488",
    bg: "#CCFBF1",
  },
  {
    num: "13",
    id: "writing",
    title: "Luyện Viết Đoạn Văn AI",
    group: "Đọc & Viết AI",
    desc: "Đếm từ, bài viết mẫu Band 8.0, gợi ý từ nối, AI chấm điểm Task/Grammar",
    icon: "✒️",
    color: "#D97706",
    bg: "#FEF3C7",
  },

  // Nhóm 6: Kiểm tra & Thi thử
  {
    num: "14",
    id: "mocktest",
    title: "Phòng Thi Thử Trắc Nghiệm",
    group: "Thi thử & Đánh giá",
    desc: "Đồng hồ đếm ngược, danh sách 20 câu hỏi nhảy nhanh, gắn cờ xem lại",
    icon: "⏱️",
    color: "#E11D48",
    bg: "#FFE4E6",
  },
  {
    num: "15",
    id: "test_results",
    title: "Bảng Điểm & Phân Tích Thi",
    group: "Thi thử & Đánh giá",
    desc: "Xếp hạng Band điểm, phân tích kỹ năng, xem lại toàn bộ câu hỏi và giải thích",
    icon: "📊",
    color: "#BE123C",
    bg: "#FFE4E6",
  },

  // Nhóm 7: Multimedia & Nộp bài
  {
    num: "16",
    id: "video_lessons",
    title: "Video Bài Giảng Bản Xứ",
    group: "Đa phương tiện & Nộp bài",
    desc: "Video player tua ±10s, phụ đề song ngữ, Picture-in-Picture, ghi chú",
    icon: "🎬",
    color: "#DC2626",
    bg: "#FEE2E2",
  },
  {
    num: "17",
    id: "homework_scanner",
    title: "Quét Vở & Nộp Bài Camera",
    group: "Đa phương tiện & Nộp bài",
    desc: "Chụp ảnh camera, tải ảnh từ thư viện, thông số ảnh, gửi giáo viên chấm",
    icon: "📷",
    color: "#0891B2",
    bg: "#CFFAFE",
  },

  // Nhóm 8: Xếp hạng & Cá nhân hóa
  {
    num: "18",
    id: "leaderboard",
    title: "Đấu Trường & Xếp Hạng",
    group: "Cộng đồng & Hồ sơ",
    desc: "Bục vinh danh Top 1-2-3 cúp vàng, các giải đấu Kim Cương/Vàng, đếm ngược",
    icon: "🏆",
    color: "#CA8A04",
    bg: "#FEF9C3",
  },
  {
    num: "19",
    id: "achievements",
    title: "Kho Huy Hiệu & Thành Tích",
    group: "Cộng đồng & Hồ sơ",
    desc: "14+ huy hiệu vinh danh độc quyền, thanh tiến độ, nút nhận thưởng XP",
    icon: "🎖️",
    color: "#EA580C",
    bg: "#FFEDD5",
  },
  {
    num: "20",
    id: "profile",
    title: "Hồ Sơ & Thống Kê Học Viên",
    group: "Cộng đồng & Hồ sơ",
    desc: "Thông tin cá nhân, biểu đồ heatmap 7 ngày, tổng số giờ học, đổi avatar",
    icon: "👤",
    color: "#4F46E5",
    bg: "#EEF2FF",
  },

  // Trang 21 (Bonus)
  {
    num: "21",
    id: "settings",
    title: "Cài Đặt & Giao Diện Ứng Dụng",
    group: "Cộng đồng & Hồ sơ",
    desc: "Chế độ tối Dark Mode, chọn giọng US/UK, giờ nhắc nhở, thông tin LTDD2",
    icon: "⚙️",
    color: "#475569",
    bg: "#F1F5F9",
  },
]

export default function TeacherShowcaseModal({ isOpen, onClose, currentTab, onSelectTab }) {
  const [search, setSearch] = useState("")
  const [selectedGroup, setSelectedGroup] = useState("all")

  if (!isOpen) return null

  const groups = [
    "all",
    "Khởi động & Xác thực",
    "Trung tâm Học tập",
    "Kỹ năng Nghe & Nói",
    "Ngữ pháp Chuyên sâu",
    "Đọc & Viết AI",
    "Thi thử & Đánh giá",
    "Đa phương tiện & Nộp bài",
    "Cộng đồng & Hồ sơ",
  ]

  const filtered = ALL_PAGES_MANIFEST.filter((p) => {
    const matchGroup = selectedGroup === "all" || p.group === selectedGroup
    const q = search.toLowerCase()
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.num.includes(q)
    return matchGroup && matchSearch
  })

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col max-h-[88vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400" />
                DÀNH CHO GIẢNG VIÊN CHẤM ĐIỂM
              </span>
              <h2 className="text-base font-black text-gray-900 font-display">
                Sơ Đồ Đầy Đủ 20 Trang Ứng Dụng
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white text-gray-400 hover:text-gray-700 flex items-center justify-center shadow-xs cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-3 border-b border-gray-100 bg-gray-50/50 shrink-0 space-y-2">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm trang theo tên, số thứ tự (01 - 20) hoặc chức năng..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 bg-white text-xs outline-none focus:border-indigo-600 font-medium"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {groups.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGroup(g)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedGroup === g
                    ? "bg-indigo-600 text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {g === "all" ? "Tất cả 20+ Trang" : g}
              </button>
            ))}
          </div>
        </div>

        {/* Pages Grid / List */}
        <div className="p-3 sm:p-4 overflow-y-auto space-y-2 flex-1">
          {filtered.map((item) => {
            const isActive = currentTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id)
                  onClose()
                }}
                className={`w-full p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                  isActive
                    ? "border-indigo-600 bg-indigo-50/80 shadow-sm ring-2 ring-indigo-200"
                    : "border-gray-200 bg-white hover:border-indigo-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center font-mono font-black text-xs shrink-0 shadow-xs"
                    style={{ background: item.bg, color: item.color }}
                  >
                    {item.num}
                  </span>

                  <span className="text-xl shrink-0">{item.icon}</span>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-black text-gray-900 font-display truncate">
                        {item.title}
                      </p>
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-gray-100 text-gray-500 shrink-0">
                        {item.group}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 font-medium truncate mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1 text-xs font-bold">
                  {isActive ? (
                    <span className="text-indigo-600 flex items-center gap-1 font-black">
                      <CheckCircle2 className="w-4 h-4" /> Đang xem
                    </span>
                  ) : (
                    <span className="text-gray-400 hover:text-indigo-600">
                      Mở →
                    </span>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-xs text-gray-500 shrink-0">
          <span>
            Tổng số: <strong>{ALL_PAGES_MANIFEST.length} Màn hình</strong> đạt chuẩn LTDD2
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-gray-900 hover:bg-black text-white font-bold text-xs cursor-pointer shadow-xs"
          >
            Đóng bảng sơ đồ
          </button>
        </div>
      </div>
    </div>
  )
}
