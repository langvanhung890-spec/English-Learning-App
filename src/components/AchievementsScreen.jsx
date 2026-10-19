import { useState } from "react"
import { achievementsList } from "../data/extraAppContent"
import {
  Award,
  Lock,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  Trophy,
  Gift,
} from "lucide-react"

export default function AchievementsScreen({ onBack }) {
  const [filter, setFilter] = useState("all") // 'all' | 'unlocked' | 'locked'
  const [claimedIds, setClaimedIds] = useState(new Set(["streak_7"]))

  const unlockedCount = achievementsList.filter((a) => a.unlocked).length
  const total = achievementsList.length

  const handleClaim = (id) => {
    setClaimedIds((prev) => new Set(prev).add(id))
    alert("🎉 Bạn đã nhận thành công phần thưởng XP vào tài khoản!")
  }

  const filteredBadges = achievementsList.filter((a) => {
    if (filter === "unlocked") return a.unlocked
    if (filter === "locked") return !a.unlocked
    return true
  })

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
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-600 flex items-center gap-1">
              <Award className="w-3 h-3" /> Vinh danh người học
            </span>
            <h1 className="text-xl font-black text-gray-900 font-display">
              Bộ Sưu Tập Huy Hiệu
            </h1>
          </div>
        </div>

        <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold flex items-center gap-1">
          <Trophy className="w-3 h-3 text-amber-600" />
          <span>
            {unlockedCount}/{total} Đã mở
          </span>
        </div>
      </div>

      {/* Hero Badge Trophy Card */}
      <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 text-white shadow-xl shadow-amber-500/20 mb-5 relative overflow-hidden text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center text-3xl mb-3 shadow-inner animate-float">
          🎖️
        </div>
        <h2 className="text-lg font-black font-display leading-tight mb-1">
          Đẳng Cấp Thần Tốc
        </h2>
        <p className="text-xs text-amber-100 font-medium mb-3">
          Mở khóa toàn bộ huy hiệu để nhận danh hiệu Vinh Dự Trọn Đời
        </p>

        {/* Progress bar */}
        <div className="w-full h-2.5 rounded-full bg-black/20 p-0.5 overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-700"
            style={{ width: `${(unlockedCount / total) * 100}%` }}
          />
        </div>
        <p className="text-[11px] text-amber-100 font-bold mt-1.5">
          Tiến độ: {Math.round((unlockedCount / total) * 100)}% hoàn thành
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-4">
        {[
          { id: "all", label: `Tất cả (${total})` },
          { id: "unlocked", label: `Đã mở (${unlockedCount})` },
          { id: "locked", label: `Đang khóa (${total - unlockedCount})` },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setFilter(t.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === t.id
                ? "bg-amber-600 text-white shadow-xs"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Badge List */}
      <div className="space-y-3">
        {filteredBadges.map((badge) => {
          const isClaimed = claimedIds.has(badge.id)
          const pct = Math.min(
            100,
            Math.round((badge.progress / badge.target) * 100),
          )
          return (
            <div
              key={badge.id}
              className={`p-4 rounded-3xl border transition-all ${
                badge.unlocked
                  ? "bg-white border-amber-200 shadow-sm hover:border-amber-300"
                  : "bg-gray-50/70 border-gray-200 opacity-75"
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-sm ${
                    badge.unlocked
                      ? "bg-amber-50 border border-amber-200"
                      : "bg-gray-200 grayscale"
                  }`}
                >
                  {badge.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-black text-gray-900 font-display truncate">
                      {badge.title}
                    </h3>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 shrink-0">
                      +{badge.rewardXp} XP
                    </span>
                  </div>

                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-2">
                    {badge.desc}
                  </p>

                  {/* Progress & Target */}
                  <div className="flex items-center justify-between text-[10px] text-gray-400 font-bold mb-1">
                    <span>Tiến độ</span>
                    <span>
                      {badge.progress} / {badge.target}
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden mb-2">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        badge.unlocked ? "bg-amber-500" : "bg-gray-400"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  {/* Claim Button */}
                  {badge.unlocked ? (
                    <button
                      onClick={() => !isClaimed && handleClaim(badge.id)}
                      disabled={isClaimed}
                      className={`w-full py-1.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                        isClaimed
                          ? "bg-gray-100 text-gray-400 cursor-default"
                          : "bg-amber-500 hover:bg-amber-600 text-white shadow-xs"
                      }`}
                    >
                      <Gift className="w-3.5 h-3.5" />
                      <span>{isClaimed ? "✓ Đã nhận thưởng" : "Nhận thưởng +XP"}</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-1 text-[11px] text-gray-400 font-semibold">
                      <Lock className="w-3 h-3" />
                      <span>Chưa đạt điều kiện mở khóa</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
