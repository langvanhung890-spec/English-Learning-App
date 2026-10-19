import { useState, useRef } from "react"
import {
  Camera,
  Image as ImageIcon,
  CheckCircle2,
  Clock,
  ArrowLeft,
  Sparkles,
  UploadCloud,
  Trash2,
  FileText,
} from "lucide-react"

export default function HomeworkScannerScreen({ onBack }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageMeta, setImageMeta] = useState(null)
  const [assignmentTitle, setAssignmentTitle] = useState("Bài tập 12 thì tiếng Anh & Viết đoạn văn tuần 4")
  const [notes, setNotes] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionHistory, setSubmissionHistory] = useState([
    {
      id: 1,
      title: "Bài tập dịch thuật Unit 3: Technology Trends",
      date: "Hôm qua lúc 19:30",
      grade: "9.5 / 10",
      teacherComment: "Chữ viết tay rất đẹp, chia thì quá khứ hoàn thành chính xác!",
      status: "Đã chấm điểm",
    },
    {
      id: 2,
      title: "Viết luận ngắn: Advantages of Online Learning",
      date: "3 ngày trước",
      grade: "9.0 / 10",
      teacherComment: "Ý tứ mạch lạc, áp dụng từ vựng nâng cao rất tốt.",
      status: "Đã chấm điểm",
    },
  ])

  const fileInputRef = useRef(null)
  const cameraInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const url = URL.createObjectURL(file)
    setSelectedImage(url)
    setIsSubmitted(false)

    const img = new Image()
    img.onload = () => {
      setImageMeta({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + " KB",
        dimensions: `${img.width} × ${img.height} px`,
      })
    }
    img.src = url
  }

  // Quick demo sample photo for teacher grading
  const handleUseDemoSample = () => {
    setSelectedImage(
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&auto=format&fit=crop&q=80",
    )
    setImageMeta({
      name: "homework_assignment_unit4.jpg",
      size: "420.5 KB",
      dimensions: "1920 × 1080 px",
    })
    setIsSubmitted(false)
  }

  const handleRemove = () => {
    setSelectedImage(null)
    setImageMeta(null)
    setIsSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedImage) {
      alert("Vui lòng chụp hoặc tải ảnh bài tập trước khi nộp.")
      return
    }

    setIsSubmitted(true)
    const newRecord = {
      id: Date.now(),
      title: assignmentTitle,
      date: "Vừa xong",
      grade: "Đang chờ chấm",
      teacherComment: "Giáo viên sẽ gửi phản hồi trong vòng 24h.",
      status: "Đã nộp thành công",
    }
    setSubmissionHistory((prev) => [newRecord, ...prev])
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
            <span className="text-[10px] font-black uppercase tracking-wider text-cyan-600 flex items-center gap-1">
              <Camera className="w-3 h-3" /> Camera OCR & Quét bài tập
            </span>
            <h1 className="text-xl font-black text-gray-900 font-display">
              Nộp Bài Tập Bằng Ảnh
            </h1>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-cyan-600" />
          <span>+25 XP</span>
        </span>
      </div>

      {/* Hidden File Inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Scanner Upload Card */}
      <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm mb-5">
        <label className="block text-xs font-bold text-gray-700 mb-1.5">
          Tên bài tập cần nộp:
        </label>
        <input
          type="text"
          value={assignmentTitle}
          onChange={(e) => setAssignmentTitle(e.target.value)}
          className="w-full p-2.5 rounded-xl border border-gray-200 text-xs font-semibold focus:border-cyan-500 outline-none mb-4"
        />

        {!selectedImage ? (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-4 rounded-2xl border-2 border-dashed border-cyan-300 bg-cyan-50/50 hover:bg-cyan-50 flex flex-col items-center justify-center transition-all cursor-pointer group"
              >
                <ImageIcon className="w-7 h-7 text-cyan-600 mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-cyan-900">
                  Chọn từ Thư viện
                </span>
                <span className="text-[10px] text-gray-400">Ảnh có sẵn</span>
              </button>

              <button
                type="button"
                onClick={() => cameraInputRef.current?.click()}
                className="p-4 rounded-2xl border-2 border-dashed border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50 flex flex-col items-center justify-center transition-all cursor-pointer group"
              >
                <Camera className="w-7 h-7 text-emerald-600 mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-emerald-900">
                  Chụp bằng Camera
                </span>
                <span className="text-[10px] text-gray-400">Chụp vở bài tập</span>
              </button>
            </div>

            {/* Quick Demo Photo Button for Examiner */}
            <button
              type="button"
              onClick={handleUseDemoSample}
              className="w-full py-2 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-colors cursor-pointer text-center"
            >
              ⚡ Tải nhanh ảnh bài làm mẫu (Dành cho Giảng viên thử nghiệm)
            </button>
          </div>
        ) : (
          <div>
            {/* Image Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-900 mb-3 max-h-56">
              <img
                src={selectedImage}
                alt="Bài tập đã chọn"
                className="w-full h-56 object-cover"
              />
              <button
                type="button"
                onClick={handleRemove}
                className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-black/70 text-white hover:bg-red-600 transition-colors cursor-pointer"
                title="Xóa ảnh này"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {imageMeta && (
              <div className="flex items-center justify-between text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded-xl border border-gray-100 mb-3">
                <span>📐 {imageMeta.dimensions}</span>
                <span>💾 {imageMeta.size}</span>
                <span className="text-emerald-600 font-bold">✓ Đã quét OCR</span>
              </div>
            )}

            {/* Notes textarea */}
            <div className="mb-3">
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Ghi chú gửi giáo viên (Tùy chọn):
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ví dụ: Em có thắc mắc câu số 4 phần thì quá khứ hoàn thành ạ..."
                className="w-full p-2.5 rounded-xl border border-gray-200 text-xs outline-none focus:border-cyan-500"
              />
            </div>

            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                className="w-full py-3 px-4 rounded-2xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs shadow-md shadow-cyan-200 transition-transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Nộp bài tập ngay (+25 XP)</span>
              </button>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
                <span className="text-sm font-bold text-emerald-800 flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Nộp bài thành công!
                </span>
                <p className="text-xs text-emerald-700 mt-1">
                  Bài làm của bạn đã được tải lên hệ thống để giáo viên chấm điểm.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Submission History Section */}
      <h3 className="text-xs font-black text-gray-900 uppercase tracking-wider font-display mb-3">
        Lịch sử bài tập đã nộp
      </h3>

      <div className="space-y-3">
        {submissionHistory.map((sub) => (
          <div
            key={sub.id}
            className="p-4 rounded-2xl bg-white border border-gray-200 shadow-xs"
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div>
                <h4 className="text-xs font-black text-gray-900 font-display">
                  {sub.title}
                </h4>
                <p className="text-[10px] text-gray-400 mt-0.5">{sub.date}</p>
              </div>
              <span className="text-xs font-black px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 shrink-0">
                {sub.grade}
              </span>
            </div>

            <p className="text-xs text-gray-600 bg-gray-50 p-2.5 rounded-xl border border-gray-100 mt-2 font-medium">
              💬 <strong>Nhận xét:</strong> {sub.teacherComment}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
