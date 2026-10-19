// Dữ liệu mở rộng cho các màn hình: Reading, Writing, Grammar Quiz, Leaderboard, Achievements, Quotes

export const dailyQuotes = [
  {
    quote: "The limits of my language mean the limits of my world.",
    author: "Ludwig Wittgenstein",
    meaning: "Giới hạn ngôn ngữ của tôi chính là giới hạn thế giới của tôi.",
  },
  {
    quote: "A different language is a different vision of life.",
    author: "Federico Fellini",
    meaning: "Một ngôn ngữ mới mở ra một lăng kính mới về cuộc sống.",
  },
  {
    quote: "Learning another language is not only learning different words for the same things, but learning another way to think about things.",
    author: "Flora Lewis",
    meaning: "Học ngoại ngữ không chỉ là học từ mới, mà là học cách tư duy mới về vạn vật.",
  },
  {
    quote: "Small daily improvements over time lead to stunning results.",
    author: "Robin Sharma",
    meaning: "Những tiến bộ nhỏ tích lũy mỗi ngày sẽ đem lại kết quả phi thường.",
  },
]

// ==================== 1. READING COMPREHENSION DATA ====================
export const readingArticles = [
  {
    id: 1,
    title: "How Artificial Intelligence is Transforming Language Education",
    titleVi: "Trí tuệ nhân tạo đang thay đổi giáo dục ngôn ngữ như thế nào",
    category: "Technology",
    readTime: "4 phút đọc",
    level: "Intermediate (B1-B2)",
    image: "🤖",
    summary:
      "Khám phá cách các mô hình AI lớn và công cụ nhận diện giọng nói giúp hàng triệu người học tiếng Anh cá nhân hóa lộ trình của mình.",
    paragraphs: [
      {
        en: "In recent years, artificial intelligence has emerged as a revolutionary force in education. Traditional language classrooms often suffer from a one-size-fits-all approach, where individual pacing is compromised.",
        vi: "Trong những năm gần đây, trí tuệ nhân tạo đã nổi lên như một sức mạnh mang tính cách mạng trong giáo dục. Lớp học ngôn ngữ truyền thống thường mắc phải hạn chế của phương pháp một khuôn mẫu cho tất cả, nơi tốc độ học của từng cá nhân khó được đáp ứng.",
        vocabularyHighlights: [
          { word: "emerged", meaning: "nổi lên, xuất hiện" },
          { word: "revolutionary", meaning: "mang tính cách mạng" },
          { word: "compromised", meaning: "bị ảnh hưởng, bị tổn hại" },
        ],
      },
      {
        en: "Modern AI-driven applications provide learners with instant feedback on pronunciation, syntactic accuracy, and conversational fluency. By analyzing acoustic patterns, these algorithms detect subtle accent variations and suggest immediate phonetic corrections.",
        vi: "Các ứng dụng điều khiển bởi AI hiện đại cung cấp cho người học phản hồi tức thì về phát âm, độ chuẩn xác cú pháp và độ lưu loát hội thoại. Bằng cách phân tích các mẫu âm học, thuật toán nhận diện các biến thể ngữ điệu tinh tế và đề xuất chỉnh sửa phiên âm ngay lập tức.",
        vocabularyHighlights: [
          { word: "syntactic", meaning: "thuộc về cú pháp" },
          { word: "fluency", meaning: "sự lưu loát, trôi chảy" },
          { word: "acoustic", meaning: "thuộc về âm học" },
        ],
      },
      {
        en: "Furthermore, intelligent chatbots simulate real-life interactions without judgmental pressure. Shy students who hesitate to speak in public can now practice dialogues repeatedly in a safe environment, substantially boosting their self-confidence.",
        vi: "Hơn nữa, các chatbot thông minh mô phỏng tương tác đời thực mà không tạo áp lực phán xét. Những học viên nhút nhát ngần ngại nói trước đám đông giờ đây có thể luyện tập hội thoại lặp đi lặp lại trong môi trường an toàn, gia tăng đáng kể sự tự tin.",
        vocabularyHighlights: [
          { word: "simulate", meaning: "mô phỏng" },
          { word: "hesitate", meaning: "do dự, ngập ngừng" },
          { word: "substantially", meaning: "đáng kể, thực chất" },
        ],
      },
    ],
    quiz: [
      {
        question: "What is a major limitation of traditional language classrooms mentioned in the text?",
        options: [
          "They are too expensive for most students",
          "They often use a one-size-fits-all approach",
          "They don't allow students to take notes",
          "They only teach listening without reading",
        ],
        correct: 1,
        explanation: "Đoạn 1 nêu: 'Traditional language classrooms often suffer from a one-size-fits-all approach...'",
      },
      {
        question: "How do AI chatbots specifically assist shy learners?",
        options: [
          "By giving them free certificates",
          "By providing a non-judgmental environment to practice speaking",
          "By doing their grammar homework for them",
          "By replacing all human examinations completely",
        ],
        correct: 1,
        explanation: "Đoạn 3 chỉ ra: 'chatbots simulate real-life interactions without judgmental pressure... boost self-confidence.'",
      },
    ],
  },
  {
    id: 2,
    title: "The Sustainable Travel Revolution: Exploring Responsibly",
    titleVi: "Cuộc cách mạng du lịch bền vững: Khám phá có trách nhiệm",
    category: "Travel & Ecology",
    readTime: "5 phút đọc",
    level: "Upper-Intermediate (B2)",
    image: "🌿",
    summary:
      "Cách du khách hiện đại lựa chọn phương thức di chuyển xanh, ủng hộ kinh tế địa phương và bảo tồn cảnh quan thiên nhiên.",
    paragraphs: [
      {
        en: "As global tourism rebounds to unprecedented heights, questions regarding its environmental footprint have sparked urgent debates. Overcrowded destinations face severe ecosystem degradation and escalating living costs for local residents.",
        vi: "Khi du lịch toàn cầu phục hồi đến những tầm cao chưa từng có, các câu hỏi liên quan đến dấu chân môi trường đã khơi mào các cuộc tranh luận cấp bách. Các điểm đến quá tải đối mặt với sự suy thoái hệ sinh thái nghiêm trọng và chi phí sinh hoạt leo thang cho cư dân địa phương.",
        vocabularyHighlights: [
          { word: "unprecedented", meaning: "chưa từng có tiền lệ" },
          { word: "degradation", meaning: "sự suy thoái, xuống cấp" },
          { word: "escalating", meaning: "leo thang, gia tăng nhanh" },
        ],
      },
      {
        en: "In response, eco-conscious travelers are prioritizing green alternatives such as electrified rail networks over short-haul commercial flights. Choosing sustainable accommodation certified by international green standards has also gained considerable momentum.",
        vi: "Để hưởng ứng, những du khách có ý thức sinh thái đang ưu tiên các giải pháp xanh thay thế như mạng lưới đường sắt điện hóa thay vì các chuyến bay thương mại cự ly ngắn. Việc lựa chọn chỗ ở bền vững được chứng nhận bởi các tiêu chuẩn xanh quốc tế cũng đã tạo nên đà tăng trưởng đáng kể.",
        vocabularyHighlights: [
          { word: "eco-conscious", meaning: "có ý thức về môi trường" },
          { word: "short-haul", meaning: "cự ly ngắn" },
          { word: "momentum", meaning: "đà phát triển, xung lực" },
        ],
      },
    ],
    quiz: [
      {
        question: "What is mentioned as a greener alternative to short-haul domestic flights?",
        options: [
          "Private cruise ships",
          "Electrified rail networks",
          "Diesel buses",
          "Helicopter rides",
        ],
        correct: 1,
        explanation: "Đoạn 2 chỉ ra rõ: 'prioritizing green alternatives such as electrified rail networks over short-haul flights.'",
      },
    ],
  },
]

// ==================== 2. WRITING PRACTICE DATA ====================
export const writingPrompts = [
  {
    id: 1,
    category: "TOEIC & Business Email",
    title: "Writing a Formal Meeting Reschedule Email",
    titleVi: "Viết email trang trọng xin dời lịch họp khách hàng",
    difficulty: "Medium",
    minWords: 60,
    targetWords: 100,
    prompt:
      "You are a project manager. Write an email to Mr. Harrison apologizing for needing to postpone tomorrow's project review meeting due to an unexpected client emergency. Propose two alternative times later this week.",
    keywords: ["apologize for the inconvenience", "unforeseen circumstance", "reschedule", "availability", "look forward to"],
    sampleAnswer:
      "Dear Mr. Harrison,\n\nI am writing to sincerely apologize for the short notice, but I need to request a postponement of our project review meeting scheduled for tomorrow at 10:00 AM due to an unforeseen client emergency.\n\nCould we reschedule our meeting to either Thursday at 2:00 PM or Friday morning at 10:30 AM? Please let me know which time suits your schedule best.\n\nThank you for your understanding, and I look forward to speaking with you soon.\n\nBest regards,\nAlex Nguyen",
  },
  {
    id: 2,
    category: "IELTS Task 2 Opinion",
    title: "Technology and Social Connections",
    titleVi: "Công nghệ và sự kết nối giữa các mối quan hệ xã hội",
    difficulty: "Advanced",
    minWords: 80,
    targetWords: 150,
    prompt:
      "Some people believe that modern communication technologies have brought people closer together, while others argue that they lead to isolation. Discuss your point of view and give specific examples.",
    keywords: ["on the one hand", "nevertheless", "meaningful interactions", "geographic barriers", "in conclusion"],
    sampleAnswer:
      "Advances in communication technology have radically changed how humans interact. On the one hand, platforms like video calls allow families separated by vast geographic distances to stay closely connected in real time. Nevertheless, excessive screen time can diminish the depth of face-to-face relationships and foster emotional isolation. In conclusion, while digital devices bridge spatial gaps, maintaining genuine personal bonds requires intentional, mindful engagement in the physical world.",
  },
]

// ==================== 3. GRAMMAR QUIZ QUESTIONS ====================
export const grammarQuizQuestions = [
  {
    id: 1,
    question: "By the time the manager arrived at the office, the conference call ______.",
    options: ["has already ended", "had already ended", "was already ending", "already ended"],
    correct: 1,
    rule: "Past Perfect (Quá khứ hoàn thành)",
    explanation:
      "Cấu trúc 'By the time + S + V(quá khứ đơn), S + had + V3/ed'. Hành động cuộc gọi kết thúc xảy ra và hoàn tất TRƯỚC khi người quản lý đến.",
  },
  {
    id: 2,
    question: "If she ______ more meticulously yesterday, she would not have made that calculation error.",
    options: ["checked", "had checked", "has checked", "would check"],
    correct: 1,
    rule: "Conditional Type 3 (Câu điều kiện loại 3)",
    explanation:
      "Mệnh đề If loại 3 diễn tả điều kiện trái ngược thực tế trong quá khứ: If + S + had + V3/ed, S + would have + V3/ed.",
  },
  {
    id: 3,
    question: "Neither the supervisor nor the team members ______ willing to postpone the deadline.",
    options: ["is", "are", "was", "has been"],
    correct: 1,
    rule: "Subject-Verb Agreement (Sự hòa hợp chủ ngữ - vị ngữ)",
    explanation:
      "Cấu trúc 'Neither A nor B + V chia theo B'. B ở đây là 'the team members' (danh từ số nhiều) nên động từ to be ở hiện tại phải là 'are'.",
  },
  {
    id: 4,
    question: "The newly launched software is reported ______ by over one million active users worldwide.",
    options: ["to download", "to have been downloaded", "downloading", "being downloaded"],
    correct: 1,
    rule: "Passive Infinitive (Động từ nguyên mẫu bị động hoàn thành)",
    explanation:
      "Cấu trúc bị động tường thuật: 'S + is reported + to have been + V3/ed' khi hành động được tải về xảy ra trước hoặc kéo dài tới hiện tại.",
  },
  {
    id: 5,
    question: "I remember ______ the documents into the safe, but now they are nowhere to be found.",
    options: ["to put", "putting", "put", "having been put"],
    correct: 1,
    rule: "Gerund vs Infinitive (Remember + V-ing / To V)",
    explanation:
      "'Remember + V-ing' nghĩa là nhớ đã làm điều gì trong quá khứ. Còn 'Remember + to V' là nhớ phải làm một bổn phận.",
  },
  {
    id: 6,
    question: "Hardly ______ the presentation when the fire alarm began to ring loudly.",
    options: ["he had started", "had he started", "did he start", "he was starting"],
    correct: 1,
    rule: "Inversion (Đảo ngữ với Hardly... when)",
    explanation:
      "Cấu trúc đảo ngữ: 'Hardly + had + S + V3/ed + when + S + V(quá khứ đơn)'.",
  },
  {
    id: 7,
    question: "The environmental project, ______ was funded by the United Nations, achieved remarkable results.",
    options: ["that", "which", "whose", "where"],
    correct: 1,
    rule: "Relative Clauses (Mệnh đề quan hệ không xác định)",
    explanation:
      "Trong mệnh đề quan hệ không xác định (nằm giữa hai dấu phẩy) chỉ vật, KHÔNG dùng 'that' mà bắt buộc phải dùng 'which'.",
  },
  {
    id: 8,
    question: "The director insisted that all employees ______ present at the annual general assembly.",
    options: ["are", "be", "were", "to be"],
    correct: 1,
    rule: "Subjunctive Mood (Thể giả định)",
    explanation:
      "Sau các động từ yêu cầu/đề nghị như insist, suggest, demand, require: 'S + insist + that + S + (should) + V-nguyên thể không chia'. Ở đây là 'be'.",
  },
]

// ==================== 4. LEADERBOARD DATA ====================
export const leagues = [
  { id: "diamond", name: "Hạng Kim Cương", icon: "💎", minXp: 1500, color: "#3B82F6", bg: "#EFF6FF" },
  { id: "gold", name: "Hạng Vàng", icon: "👑", minXp: 800, color: "#F59E0B", bg: "#FEF3C7" },
  { id: "silver", name: "Hạng Bạc", icon: "🥈", minXp: 400, color: "#64748B", bg: "#F1F5F9" },
  { id: "bronze", name: "Hạng Đồng", icon: "🥉", minXp: 0, color: "#B45309", bg: "#FFFBEB" },
]

export const leaderboardUsers = [
  {
    rank: 1,
    name: "Minh Anh IELTS 8.5",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    xp: 2450,
    streak: 42,
    badge: "Top 1 Diamond",
    isCurrentUser: false,
  },
  {
    rank: 2,
    name: "Hoàng Nam TOEIC",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    xp: 2180,
    streak: 28,
    badge: "Master Solver",
    isCurrentUser: false,
  },
  {
    rank: 3,
    name: "Thùy Linh Oxford",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    xp: 1940,
    streak: 35,
    badge: "Grammar Prodigy",
    isCurrentUser: false,
  },
  {
    rank: 4,
    name: "Bạn (Học viên)",
    avatar: null,
    xp: 1420,
    streak: 7,
    badge: "Rising Star",
    isCurrentUser: true,
  },
  {
    rank: 5,
    name: "Tuấn Kiệt Cambridge",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    xp: 1390,
    streak: 14,
    badge: "Listener Pro",
    isCurrentUser: false,
  },
  {
    rank: 6,
    name: "Phương Thảo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    xp: 1250,
    streak: 11,
    badge: "Diligent Reader",
    isCurrentUser: false,
  },
  {
    rank: 7,
    name: "Gia Huy Tech",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    xp: 1120,
    streak: 9,
    badge: "Vocab Warrior",
    isCurrentUser: false,
  },
]

// ==================== 5. ACHIEVEMENTS & BADGES DATA ====================
export const achievementsList = [
  {
    id: "streak_7",
    title: "Ngọn Lửa Bền Bỉ",
    titleEn: "7-Day Streak Master",
    desc: "Hoàn thành bài học liên tiếp trong 7 ngày không gián đoạn.",
    icon: "🔥",
    progress: 7,
    target: 7,
    unlocked: true,
    rewardXp: 100,
    tier: "Gold",
    color: "#F59E0B",
  },
  {
    id: "vocab_50",
    title: "Kho Báu Từ Vựng",
    titleEn: "Lexicon Collector",
    desc: "Nạp và thuộc làu 50 thẻ từ vựng với Flashcards 3D.",
    icon: "💎",
    progress: 42,
    target: 50,
    unlocked: false,
    rewardXp: 150,
    tier: "Silver",
    color: "#3B82F6",
  },
  {
    id: "grammar_master",
    title: "Bậc Thầy 12 Thì",
    titleEn: "Grammar Guru",
    desc: "Hoàn thành toàn bộ lý thuyết và đạt 100% điểm bài tập ngữ pháp.",
    icon: "📖",
    progress: 8,
    target: 12,
    unlocked: false,
    rewardXp: 200,
    tier: "Purple",
    color: "#7C3AED",
  },
  {
    id: "speaking_ninja",
    title: "Giọng Điệu Bản Xứ",
    titleEn: "Native Pronunciation",
    desc: "Đạt điểm phát âm AI từ 90% trở lên trong 10 bài luyện nói.",
    icon: "🎙️",
    progress: 10,
    target: 10,
    unlocked: true,
    rewardXp: 180,
    tier: "Emerald",
    color: "#10B981",
  },
  {
    id: "night_owl",
    title: "Cú Đêm Tri Thức",
    titleEn: "Night Owl Learner",
    desc: "Hoàn thành 3 bài học chất lượng sau 22:00 đêm.",
    icon: "🦉",
    progress: 3,
    target: 3,
    unlocked: true,
    rewardXp: 80,
    tier: "Indigo",
    color: "#6366F1",
  },
  {
    id: "mock_champion",
    title: "Thủ Khoa Đề Thi",
    titleEn: "Test Conqueror",
    desc: "Đạt trên 90 điểm trong bài thi thử trắc nghiệm tính giờ.",
    icon: "🏆",
    progress: 95,
    target: 100,
    unlocked: true,
    rewardXp: 250,
    tier: "Diamond",
    color: "#EC4899",
  },
  {
    id: "scanner_scout",
    title: "Thám Tử Tài Liệu",
    titleEn: "Camera Scanner Scout",
    desc: "Quét và nộp thành công 5 trang bài tập viết tay bằng camera.",
    icon: "📷",
    progress: 3,
    target: 5,
    unlocked: false,
    rewardXp: 120,
    tier: "Cyan",
    color: "#06B6D4",
  },
  {
    id: "essay_artisan",
    title: "Ngòi Bút Sắc Bén",
    titleEn: "Essay Artisan",
    desc: "Viết bài luận đạt trên 150 từ và được AI đánh giá Band 7.0+.",
    icon: "✍️",
    progress: 1,
    target: 1,
    unlocked: true,
    rewardXp: 160,
    tier: "Amber",
    color: "#D97706",
  },
]
