import { useState } from "react"
import VideoLessonPlayer from "./VideoLessonPlayer"
import {
  Video,
  Play,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowLeft,
  Sparkles,
  Layers,
} from "lucide-react"

export const VIDEO_PLAYLIST = [
  {
    id: 1,
    title: "Mastering English Negotiations & Business Meetings",
    titleVi: "Kỹ năng đàm phán thương mại & Họp doanh nghiệp quốc tế",
    instructor: "Sarah Jenkins (Oxford University)",
    duration: "4:15",
    level: "Intermediate",
    badge: "Business",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    notes: [
      "Sử dụng kỹ thuật 'Anchor price' để mở đầu đàm phán.",
      "Cụm từ lịch sự khi phản đối: 'I understand your perspective, however...'",
      "Chốt điều khoản: 'Can we agree on the following points?'",
    ],
    timestamps: [
      { time: "0:25", label: "Giới thiệu bối cảnh cuộc họp" },
      { time: "1:15", label: "Cách đưa ra đề xuất giá" },
      { time: "2:40", label: "Xử lý khi đối tác từ chối" },
    ],
  },
  {
    id: 2,
    title: "Secrets to Flawless British vs American Pronunciation",
    titleVi: "Bí quyết phân biệt phát âm chuẩn Anh - Anh và Anh - Mỹ",
    instructor: "Michael Davies (BBC English)",
    duration: "3:30",
    level: "All Levels",
    badge: "Pronunciation",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    notes: [
      "Âm Flap T trong tiếng Anh - Mỹ (water, butter).",
      "Âm Glottal Stop trong tiếng Anh - Anh hiện đại.",
      "Khác biệt trọng âm ở từ vựng có nguồn gốc từ tiếng Pháp.",
    ],
    timestamps: [
      { time: "0:15", label: "Tổng quan ngữ âm cơ bản" },
      { time: "1:20", label: "Ví dụ âm Flap T" },
      { time: "2:10", label: "Luyện tập theo cặp từ" },
    ],
  },
]

export default function VideoLessonsScreen({ onBack }) {
  const [activeVideoId, setActiveVideoId] = useState(1)
  const [completedVideos, setCompletedVideos] = useState(new Set([1]))

  const activeLesson =
    VIDEO_PLAYLIST.find((v) => v.id === activeVideoId) || VIDEO_PLAYLIST[0]
  const isCompleted = completedVideos.has(activeLesson.id)

  const toggleComplete = (id) => {
    setCompletedVideos((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
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
            <span className="text-[10px] font-black uppercase tracking-wider text-red-600 flex items-center gap-1">
              <Video className="w-3 h-3" /> Video bài giảng tương tác
            </span>
            <h1 className="text-xl font-black text-gray-900 font-display">
              Video Bài Giảng Bản Xứ
            </h1>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-red-600" />
          <span>+30 XP/Bài</span>
        </span>
      </div>

      {/* Embedded High-tech Video Player with Dual Subtitles and PiP */}
      <VideoLessonPlayer
        videoSrc={activeLesson.videoUrl}
        title={activeLesson.title}
        lessonTitle={activeLesson.titleVi}
      />

      {/* Lesson Details */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black px-2 py-0.5 rounded bg-red-100 text-red-700">
            {activeLesson.badge}
          </span>
          <span className="text-xs text-gray-400 font-medium">
            Giảng viên: {activeLesson.instructor}
          </span>
        </div>

        <h2 className="text-base font-black text-gray-900 font-display leading-snug mb-1">
          {activeLesson.title}
        </h2>
        <p className="text-xs text-gray-500 mb-3 italic">
          → {activeLesson.titleVi}
        </p>

        {/* Action: Mark as Completed */}
        <button
          onClick={() => toggleComplete(activeLesson.id)}
          className={`w-full py-2.5 px-4 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-transform active:scale-98 cursor-pointer ${
            isCompleted
              ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
              : "bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-200"
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>{isCompleted ? "✓ Đã hoàn thành bài học này" : "Đánh dấu đã hoàn thành (+30 XP)"}</span>
        </button>
      </div>

      {/* Timestamps & Key Takeaways */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-4">
        <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider font-display mb-3 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-red-600" />
          <span>Ghi chú bài học & Điểm mấu chốt</span>
        </h3>

        <ul className="space-y-2 mb-4">
          {activeLesson.notes.map((note, idx) => (
            <li
              key={idx}
              className="text-xs text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100 flex items-start gap-2"
            >
              <span className="text-red-500 font-bold">•</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>

        <span className="text-[11px] font-bold text-gray-500 block mb-2">
          Mốc thời gian nội dung:
        </span>
        <div className="grid grid-cols-1 gap-1.5">
          {activeLesson.timestamps.map((ts, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-xs p-2 rounded-xl bg-red-50/50 text-red-950 font-medium border border-red-100"
            >
              <span>{ts.label}</span>
              <span className="font-mono font-bold text-red-600">{ts.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Playlist Selector */}
      <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider font-display mb-3">
        Danh sách bài giảng khác
      </h3>

      <div className="space-y-2">
        {VIDEO_PLAYLIST.map((v) => (
          <button
            key={v.id}
            onClick={() => setActiveVideoId(v.id)}
            className={`w-full p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
              activeVideoId === v.id
                ? "border-red-500 bg-red-50/70 shadow-xs"
                : "border-gray-200 bg-white hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                  activeVideoId === v.id
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <Play className="w-4 h-4 fill-current" />
              </div>
              <div>
                <p className="text-xs font-black text-gray-900 font-display line-clamp-1">
                  {v.title}
                </p>
                <p className="text-[11px] text-gray-500 flex items-center gap-2 mt-0.5">
                  <span className="flex items-center gap-0.5">
                    <Clock className="w-3 h-3" /> {v.duration}
                  </span>
                  <span>· {v.instructor}</span>
                </p>
              </div>
            </div>

            {completedVideos.has(v.id) && (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
