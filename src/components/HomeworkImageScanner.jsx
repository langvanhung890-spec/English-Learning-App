import { useState, useRef } from "react"

/**
 * Component Nộp bài tập / Quét tài liệu mô phỏng expo-image-picker
 * (launchImageLibraryAsync, launchCameraAsync)
 */
export default function HomeworkImageScanner({ lessonTitle = "" }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageMeta, setImageMeta] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const fileInputRef = useRef(null)
  const cameraInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const url = URL.createObjectURL(file)
    setSelectedImage(url)
    setIsSubmitted(false)

    // Lấy kích thước và dung lượng ảnh
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

  const handleRemove = () => {
    setSelectedImage(null)
    setImageMeta(null)
    setIsSubmitted(false)
  }

  const handleSubmitHomework = () => {
    setIsSubmitted(true)
  }

  return (
    <div className="rounded-2xl p-4 bg-white border border-gray-200 shadow-xs mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
          📷 NỘP BÀI TẬP BẰNG ẢNH (EXPO IMAGE PICKER)
        </span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
          Scan / Camera
        </span>
      </div>

      <p className="text-xs text-gray-500 mb-3">
        Chụp ảnh vở bài tập viết tay hoặc tải ảnh bài làm từ điện thoại của bạn
        để giáo viên chấm điểm.
      </p>

      {/* Ẩn các native file inputs */}
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

      {/* Các nút chọn ảnh & Chụp ảnh */}
      {!selectedImage ? (
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-dashed border-blue-300 bg-blue-50/50 hover:bg-blue-50 transition-all cursor-pointer group"
          >
            <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">
              📁
            </span>
            <span className="text-xs font-bold text-blue-700">
              Chọn từ Thư viện
            </span>
            <span className="text-[10px] text-gray-400">
              launchImageLibraryAsync
            </span>
          </button>

          <button
            onClick={() => cameraInputRef.current?.click()}
            className="flex flex-col items-center justify-center p-3.5 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50 transition-all cursor-pointer group"
          >
            <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">
              📷
            </span>
            <span className="text-xs font-bold text-emerald-700">
              Chụp ảnh Camera
            </span>
            <span className="text-[10px] text-gray-400">launchCameraAsync</span>
          </button>
        </div>
      ) : (
        <div>
          {/* Xem trước ảnh (Image Preview) */}
          <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-900 mb-3">
            <img
              src={selectedImage}
              alt="Bài tập đã chụp"
              className="w-full h-48 object-contain"
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/70 text-white flex items-center justify-center text-xs font-bold hover:bg-red-600 transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Metadata thông tin ảnh */}
          {imageMeta && (
            <div className="flex items-center justify-between text-[11px] text-gray-500 bg-gray-50 p-2 rounded-lg mb-3">
              <span>📐 {imageMeta.dimensions}</span>
              <span>💾 {imageMeta.size}</span>
              <span className="text-emerald-600 font-bold">✓ Đã tối ưu</span>
            </div>
          )}

          {/* Nút gửi bài */}
          {!isSubmitted ? (
            <button
              onClick={handleSubmitHomework}
              className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-transform active:scale-98 shadow-xs cursor-pointer"
            >
              📤 Nộp bài tập {lessonTitle} ngay
            </button>
          ) : (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
              <span className="text-sm font-bold text-emerald-700 block">
                🎉 Nộp bài thành công!
              </span>
              <span className="text-xs text-emerald-600">
                Bài làm của bạn đã được tải lên hệ thống để chấm điểm (+25 XP).
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
