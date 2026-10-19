import { useState } from "react"
import { leagues, leaderboardUsers } from "../data/extraAppContent"
import {
  Trophy,
  Crown,
  Flame,
  Clock,
  ArrowLeft,
  Sparkles,
  ChevronUp,
  Shield,
  Medal,
} from "lucide-react"

export default function LeaderboardScreen({ onBack, user }) {
  const [activeLeague, setActiveLeague] = useState("diamond")

  const top3 = leaderboardUsers.slice(0, 3)
  const restUsers = leaderboardUsers.slice(3)

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
            <span className="text-[10px] font-black uppercase tracking-wider text-yellow-600 flex items-center gap-1">
              <Trophy className="w-3 h-3" /> Đấu trường thi đua
            </span>
            <h1 className="text-xl font-black text-gray-900 font-display">
              Bảng Vàng Xếp Hạng
            </h1>
          </div>
        </div>

        <div className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-900 text-xs font-bold flex items-center gap-1">
          <Clock className="w-3 h-3 text-yellow-700" />
          <span>2 ngày 14h</span>
        </div>
      </div>

      {/* League Selection Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mb-5">
        {leagues.map((l) => (
          <button
            key={l.id}
            onClick={() => setActiveLeague(l.id)}
            className={`px-3 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeLeague === l.id
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-200"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>{l.icon}</span>
            <span>{l.name}</span>
          </button>
        ))}
      </div>

      {/* Top 3 Podium Card */}
      <div className="p-5 rounded-3xl bg-gradient-to-b from-indigo-900 via-indigo-950 to-gray-900 text-white shadow-xl mb-6 relative overflow-hidden">
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-indigo-200">
            🏆 TOP 3 CHIẾN BINH KIM CƯƠNG TUẦN
          </span>
        </div>

        {/* Podium Layout */}
        <div className="flex items-end justify-center gap-2 pt-2">
          {/* Rank 2 (Left) */}
          <div className="flex flex-col items-center flex-1">
            <div className="relative mb-2">
              <img
                src={top3[1]?.avatar}
                alt="Rank 2"
                className="w-12 h-12 rounded-2xl object-cover border-2 border-slate-300 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-300 text-slate-900 text-[10px] font-black flex items-center justify-center">
                2
              </span>
            </div>
            <p className="text-[11px] font-bold text-gray-200 truncate max-w-[80px]">
              {top3[1]?.name}
            </p>
            <p className="text-[10px] text-indigo-300 font-mono font-bold">
              {top3[1]?.xp} XP
            </p>
            <div className="w-full h-14 rounded-t-xl bg-slate-700/60 mt-2 flex items-center justify-center text-xs font-black text-slate-300">
              🥈 2nd
            </div>
          </div>

          {/* Rank 1 (Center - Tallest) */}
          <div className="flex flex-col items-center flex-1">
            <div className="relative mb-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xl animate-bounce">
                👑
              </div>
              <img
                src={top3[0]?.avatar}
                alt="Rank 1"
                className="w-16 h-16 rounded-2xl object-cover border-3 border-amber-400 shadow-lg shadow-amber-400/30"
              />
              <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-amber-950 text-xs font-black flex items-center justify-center">
                1
              </span>
            </div>
            <p className="text-xs font-black text-amber-300 truncate max-w-[90px]">
              {top3[0]?.name}
            </p>
            <p className="text-[11px] text-amber-200 font-mono font-black">
              {top3[0]?.xp} XP
            </p>
            <div className="w-full h-20 rounded-t-xl bg-gradient-to-t from-amber-600/80 to-amber-500/80 mt-2 flex items-center justify-center text-xs font-black text-white shadow-inner">
              🥇 Top 1
            </div>
          </div>

          {/* Rank 3 (Right) */}
          <div className="flex flex-col items-center flex-1">
            <div className="relative mb-2">
              <img
                src={top3[2]?.avatar}
                alt="Rank 3"
                className="w-12 h-12 rounded-2xl object-cover border-2 border-amber-700 shadow-md"
              />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-700 text-white text-[10px] font-black flex items-center justify-center">
                3
              </span>
            </div>
            <p className="text-[11px] font-bold text-gray-200 truncate max-w-[80px]">
              {top3[2]?.name}
            </p>
            <p className="text-[10px] text-indigo-300 font-mono font-bold">
              {top3[2]?.xp} XP
            </p>
            <div className="w-full h-10 rounded-t-xl bg-amber-900/60 mt-2 flex items-center justify-center text-xs font-black text-amber-300">
              🥉 3rd
            </div>
          </div>
        </div>
      </div>

      {/* Promotion Zone Notification */}
      <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium flex items-center justify-between mb-4">
        <span className="flex items-center gap-1.5 font-bold">
          <ChevronUp className="w-4 h-4 text-emerald-600" />
          Vùng thăng hạng: Top 10 học viên đầu bảng
        </span>
        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
          An toàn
        </span>
      </div>

      {/* Ranking List Table */}
      <div className="space-y-2">
        {restUsers.map((u) => {
          const isMe = u.isCurrentUser
          return (
            <div
              key={u.rank}
              className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                isMe
                  ? "border-indigo-600 bg-indigo-50/80 shadow-md ring-2 ring-indigo-200"
                  : "border-gray-100 bg-white shadow-xs"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-6 text-center text-xs font-black ${
                    isMe ? "text-indigo-700 font-display" : "text-gray-400"
                  }`}
                >
                  #{u.rank}
                </span>

                {u.avatar ? (
                  <img
                    src={u.avatar}
                    alt={u.name}
                    className="w-10 h-10 rounded-xl object-cover border border-gray-200"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center font-display">
                    {user?.emojiAvatar || "H"}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-1.5">
                    <p
                      className={`text-xs font-black ${
                        isMe ? "text-indigo-950 font-display" : "text-gray-900"
                      }`}
                    >
                      {isMe ? `${user?.name || "Bạn (Học viên)"} (Bạn)` : u.name}
                    </p>
                    {isMe && (
                      <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-indigo-200 text-indigo-800">
                        YOU
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-0.5">
                    <span className="flex items-center gap-0.5 text-amber-600 font-bold">
                      <Flame className="w-3 h-3 fill-amber-500" /> {u.streak} ngày
                    </span>
                    <span>· {u.badge}</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-black font-mono text-gray-900">
                  {u.xp} XP
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
