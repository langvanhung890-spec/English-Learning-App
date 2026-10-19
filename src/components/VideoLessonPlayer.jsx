import { useState, useRef, useEffect } from "react"

/**
 * Component trình phát video mô phỏng expo-video (VideoView & VideoPlayer)
 * Hỗ trợ các tính năng: Play/Pause, Seek ±10s, Speed rate, PiP, Subtitles song ngữ
 */
export default function VideoLessonPlayer({
  videoSrc = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  title = "Video bài giảng minh họa",
  subtitle = "Xem và lắng nghe ngữ cảnh thực tế",
  lessonTitle = "",
}) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [showSubtitles, setShowSubtitles] = useState(true)
  const [isPiP, setIsPiP] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onTimeUpdate = () => setCurrentTime(video.currentTime)
    const onLoadedMetadata = () => setDuration(video.duration)
    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    video.addEventListener("timeupdate", onTimeUpdate)
    video.addEventListener("loadedmetadata", onLoadedMetadata)
    video.addEventListener("play", onPlay)
    video.addEventListener("pause", onPause)

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate)
      video.removeEventListener("loadedmetadata", onLoadedMetadata)
      video.removeEventListener("play", onPlay)
      video.removeEventListener("pause", onPause)
    }
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  const seekBy = (seconds) => {
    if (!videoRef.current) return
    videoRef.current.currentTime = Math.max(
      0,
      Math.min(duration, videoRef.current.currentTime + seconds),
    )
  }

  const handleSeekChange = (e) => {
    const newTime = parseFloat(e.target.value)
    setCurrentTime(newTime)
    if (videoRef.current) {
      videoRef.current.currentTime = newTime
    }
  }

  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed)
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed
    }
  }

  const togglePiP = async () => {
    if (!videoRef.current) return
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture()
        setIsPiP(false)
      } else if (videoRef.current.requestPictureInPicture) {
        await videoRef.current.requestPictureInPicture()
        setIsPiP(true)
      }
    } catch (err) {
      console.warn("PiP error:", err)
    }
  }

  const formatTime = (timeInSeconds) => {
    const mins = Math.floor(timeInSeconds / 60)
    const secs = Math.floor(timeInSeconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div className="rounded-2xl overflow-hidden bg-black text-white shadow-md mb-4 border border-gray-800">
      {/* Khung hiển thị Video (VideoView) */}
      <div className="relative aspect-video bg-black flex items-center justify-center group">
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-contain"
          playsInline
        />

        {/* Nút Play to ở giữa khi đang dừng */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-purple-600/90 text-white flex items-center justify-center text-2xl shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            ▶
          </button>
        )}

        {/* Tag mô phỏng Expo Video */}
        <div className="absolute top-2.5 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-bold text-gray-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Expo Video Player</span>
        </div>

        {/* Nút PiP */}
        <button
          onClick={togglePiP}
          title="Hình trong hình (Picture-in-Picture)"
          className="absolute top-2.5 right-3 px-2 py-1 rounded-md bg-black/60 hover:bg-black/80 backdrop-blur-xs text-[11px] font-bold text-gray-200 cursor-pointer"
        >
          {isPiP ? "Exit PiP" : "⧉ PiP"}
        </button>

        {/* Phụ đề song ngữ nổi bật (Subtitles) */}
        {showSubtitles && isPlaying && (
          <div className="absolute bottom-3 inset-x-3 text-center pointer-events-none">
            <span className="inline-block bg-black/80 text-yellow-300 font-bold text-xs px-3 py-1 rounded-lg backdrop-blur-xs shadow-md">
              💬 Listening in practice: {lessonTitle || "Grammar in Context"}
            </span>
          </div>
        )}
      </div>

      {/* Thanh điều khiển video (Controls) */}
      <div className="p-3 bg-gray-900 border-t border-gray-800">
        {/* Thanh tua thời gian (Slider) */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-mono text-gray-400 w-10">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 100}
            step={0.1}
            value={currentTime}
            onChange={handleSeekChange}
            className="flex-1 h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <span className="text-[11px] font-mono text-gray-400 w-10 text-right">
            {formatTime(duration)}
          </span>
        </div>

        {/* Các nút bấm điều khiển */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => seekBy(-10)}
              className="px-2 py-1 rounded bg-gray-800 hover:bg-gray-700 text-xs font-bold cursor-pointer text-gray-300"
            >
              -10s
            </button>
            <button
              onClick={togglePlay}
              className="px-3.5 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs font-bold cursor-pointer shadow-xs"
            >
              {isPlaying ? "⏸ Dừng" : "▶ Phát"}
            </button>
            <button
              onClick={() => seekBy(10)}
              className="px-2 py-1 rounded bg-gray-800 hover:bg-gray-700 text-xs font-bold cursor-pointer text-gray-300"
            >
              +10s
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Nút bật/tắt phụ đề */}
            <button
              onClick={() => setShowSubtitles((s) => !s)}
              className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-colors ${
                showSubtitles
                  ? "bg-amber-500 text-black"
                  : "bg-gray-800 text-gray-400"
              }`}
            >
              CC
            </button>

            {/* Chọn tốc độ đọc */}
            <div className="flex items-center bg-gray-800 rounded-md p-0.5">
              {[0.75, 1, 1.25].map((s) => (
                <button
                  key={s}
                  onClick={() => changeSpeed(s)}
                  className={`px-1.5 py-0.5 text-[10px] font-bold rounded cursor-pointer ${
                    speed === s
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
