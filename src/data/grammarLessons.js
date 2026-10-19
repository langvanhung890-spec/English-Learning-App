export const grammarLessons = [
  // ==================== NHÓM THÌ HIỆN TẠI (PRESENT TENSES) ====================
  {
    id: 1,
    category: "present",
    categoryName: "Hiện tại",
    title: "Present Simple (Thì hiện tại đơn)",
    shortTitle: "Present Simple",
    subtitle:
      "Thì hiện tại đơn - Diễn tả sự thật hiển nhiên, thói quen lặp đi lặp lại",
    emoji: "☀️",
    color: "#3B82F6",
    bg: "#EFF6FF",
    completed: true,
    rule: "S + V(s/es) hoặc S + am/is/are",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Động từ thường",
            formula: "S + V(s/es) + O",
            note: "Chủ ngữ số ít (He/She/It/Danh từ số ít) thì động từ thêm -s hoặc -es (với từ tận cùng là -o, -s, -ch, -x, -sh, -z). Chủ ngữ số nhiều (I/You/We/They) giữ nguyên động từ thể nguyên mẫu.",
            example: "He speaks English fluently every day.",
            translation: "Anh ấy nói tiếng Anh lưu loát mỗi ngày.",
          },
          {
            tag: "Động từ To Be",
            formula: "S + am/is/are + N/Adj",
            note: "I + am; He/She/It/Danh từ số ít + is; You/We/They/Danh từ số nhiều + are.",
            example: "They are very passionate students.",
            translation: "Họ là những học sinh rất nhiệt huyết.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Động từ thường",
            formula: "S + do/does + not + V(nguyên thể) + O",
            note: "Mượn trợ động từ do/does + not (viết tắt: don't / doesn't). Khi đã mượn trợ động từ, động từ chính luôn trở về dạng NGUYÊN MẪU (không chia s/es).",
            example: "She doesn't drink coffee in the evening.",
            translation: "Cô ấy không uống cà phê vào buổi tối.",
          },
          {
            tag: "Động từ To Be",
            formula: "S + am/is/are + not + N/Adj",
            note: "Thêm not trực tiếp sau To Be (is not = isn't; are not = aren't; am not giữ nguyên).",
            example: "He isn't ready for the presentation.",
            translation: "Anh ấy chưa sẵn sàng cho buổi thuyết trình.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Động từ thường",
            formula:
              "Do/Does + S + V(nguyên thể) + O?  |  Wh- + do/does + S + V(nguyên thể)?",
            note: "Đảo trợ động từ Do/Does lên trước chủ ngữ. Động từ chính giữ nguyên mẫu không chia.",
            example:
              "Do you play tennis on weekends? - Yes, I do. / No, I don't.",
            translation:
              "Bạn có chơi quần vợt vào cuối tuần không? - Có, tôi có. / Không, tôi không.",
          },
          {
            tag: "Động từ To Be",
            formula: "Am/Is/Are + S + N/Adj?  |  Wh- + am/is/are + S + N/Adj?",
            note: "Đảo To Be lên trước chủ ngữ.",
            example: "Is she a doctor? - Yes, she is. / No, she isn't.",
            translation:
              "Cô ấy có phải là bác sĩ không? - Đúng vậy. / Không phải.",
          },
        ],
      },
    ],
    usage: [
      "Diễn tả sự thật hiển nhiên, quy luật tự nhiên hoặc chân lý khoa học (Ví dụ: The sun rises in the east).",
      "Diễn tả một thói quen, phong tục hoặc hành động lặp đi lặp lại ở hiện tại (Ví dụ: I wake up at 6 AM).",
      "Diễn tả lịch trình cố định của tàu xe, máy bay, lịch chiếu phim, thời khóa biểu (Ví dụ: The train departs at 7 PM).",
    ],
    signals: [
      "always",
      "usually",
      "often",
      "sometimes",
      "rarely",
      "never",
      "every day",
      "every week",
      "once a month",
      "in the morning",
    ],
    quiz: [
      {
        q: "Water ___ at 100 degrees Celsius.",
        opts: ["boil", "boils", "is boiling", "boiled"],
        ans: 1,
        explain:
          'Sự thật hiển nhiên, chủ ngữ không đếm được "Water" đi với động từ số ít "boils".',
      },
      {
        q: "My brother ___ like spicy food.",
        opts: ["don't", "doesn't", "isn't", "not"],
        ans: 1,
        explain:
          'Chủ ngữ số ít "My brother" trong câu phủ định dùng trợ động từ "doesn\'t".',
      },
    ],
  },
  {
    id: 2,
    category: "present",
    categoryName: "Hiện tại",
    title: "Present Continuous (Thì hiện tại tiếp diễn)",
    shortTitle: "Present Continuous",
    subtitle:
      "Thì hiện tại tiếp diễn - Diễn tả hành động đang diễn ra tại thời điểm nói hoặc kế hoạch tương lai",
    emoji: "⚡",
    color: "#0284C7",
    bg: "#E0F2FE",
    completed: true,
    rule: "S + am/is/are + V-ing",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + am/is/are + V-ing + O",
            note: "Chủ ngữ I đi với am; He/She/It/Danh từ số ít đi với is; You/We/They/Danh từ số nhiều đi với are. Động từ thêm đuôi -ing (V-ing).",
            example:
              "They are discussing the new marketing strategy right now.",
            translation:
              "Họ đang thảo luận về chiến lược tiếp thị mới ngay lúc này.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + am/is/are + not + V-ing + O",
            note: "Thêm trực tiếp \"not\" vào sau động từ To Be (am not, isn't, aren't).",
            example: "She isn't studying; she is taking a short break.",
            translation:
              "Cô ấy không đang học bài; cô ấy đang nghỉ giải lao một chút.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Công thức chung",
            formula:
              "Am/Is/Are + S + V-ing + O?  |  Wh- + am/is/are + S + V-ing?",
            note: "Đảo To Be (Am/Is/Are) lên đầu câu trước chủ ngữ.",
            example:
              "Are you listening to the teacher carefully? - Yes, I am. / No, I'm not.",
            translation:
              "Bạn có đang chăm chú nghe giáo viên giảng không? - Có, tôi đang nghe.",
          },
        ],
      },
    ],
    usage: [
      "Diễn tả hành động đang xảy ra ngay tại thời điểm nói (Ví dụ: Please be quiet! The baby is sleeping).",
      "Diễn tả một tình trạng tạm thời xung quanh thời điểm nói (Ví dụ: I am living with my friends until I find an apartment).",
      "Diễn tả một kế hoạch chắc chắn sẽ xảy ra trong tương lai gần (Ví dụ: We are flying to Da Nang this Friday).",
      'Dùng với "always" để diễn tả lời phàn nàn về một thói quen gây khó chịu (Ví dụ: He is always losing his keys!).',
    ],
    signals: [
      "now",
      "right now",
      "at the moment",
      "at present",
      "Look!",
      "Listen!",
      "Be quiet!",
      "currently",
    ],
    quiz: [
      {
        q: "Look! The bus ___ over there.",
        opts: ["comes", "is coming", "has come", "came"],
        ans: 1,
        explain:
          'Có dấu hiệu mệnh lệnh "Look!" chỉ hành động đang diễn ra -> dùng thì hiện tại tiếp diễn "is coming".',
      },
      {
        q: "Why ___ you ___ on your computer now?",
        opts: ["are / playing", "do / play", "did / play", "have / played"],
        ans: 0,
        explain:
          'Có từ chỉ thời gian "now" và câu hỏi Wh- -> cấu trúc "Why are you playing...".',
      },
    ],
  },
  {
    id: 3,
    category: "present",
    categoryName: "Hiện tại",
    title: "Present Perfect (Thì hiện tại hoàn thành)",
    shortTitle: "Present Perfect",
    subtitle:
      "Thì hiện tại hoàn thành - Hành động xảy ra trong quá khứ kéo dài hoặc để lại kết quả ở hiện tại",
    emoji: "⏰",
    color: "#7C3AED",
    bg: "#EDE9FE",
    completed: true,
    rule: "S + have/has + V3/V-ed",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + have/has + V3 (Past Participle) + O",
            note: "I/You/We/They + have; He/She/It + has. Động từ ở dạng Quá khứ phân từ (cột 3 trong bảng động từ bất quy tắc hoặc thêm -ed).",
            example: "I have already finished my homework.",
            translation: "Tôi đã hoàn thành xong bài tập về nhà của mình rồi.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + have/has + not + V3/V-ed + O",
            note: "Thêm not sau have/has (viết tắt: haven't / hasn't). Cuối câu thường có từ \"yet\" (chưa).",
            example: "She hasn't decided which university to attend yet.",
            translation: "Cô ấy vẫn chưa quyết định sẽ học trường đại học nào.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Công thức chung",
            formula:
              "Have/Has + S + V3/V-ed + O?  |  Wh- + have/has + S + V3/V-ed?",
            note: 'Đưa Have/Has lên trước chủ ngữ. Thường dùng từ "ever" trong câu hỏi trải nghiệm.',
            example:
              "Have you ever eaten sushi? - Yes, I have. / No, I haven't.",
            translation:
              "Bạn đã từng ăn sushi bao giờ chưa? - Có, tôi đã từng. / Chưa, tôi chưa từng.",
          },
        ],
      },
    ],
    usage: [
      "Diễn tả hành động đã xảy ra trong quá khứ nhưng không rõ thời gian xác định (Ví dụ: I have seen that film).",
      "Diễn tả hành động bắt đầu ở quá khứ và vẫn tiếp diễn đến hiện tại (Dùng với for + khoảng thời gian, since + mốc thời gian).",
      "Diễn tả trải nghiệm, kinh nghiệm sống tính tới thời điểm hiện tại (Dùng với ever, never).",
      "Diễn tả hành động vừa mới diễn ra và để lại kết quả ở hiện tại (Dùng với just, already).",
    ],
    signals: [
      "already",
      "yet",
      "just",
      "ever",
      "never",
      "since (2010)",
      "for (3 years)",
      "recently",
      "so far",
      "up to now",
    ],
    quiz: [
      {
        q: "She ___ (live) in London since 2018.",
        opts: ["lived", "has lived", "is living", "lives"],
        ans: 1,
        explain:
          'Có mốc thời gian "since 2018" và chủ ngữ số ít "She" -> dùng "has lived".',
      },
      {
        q: "They haven't received the package ___.",
        opts: ["already", "just", "yet", "since"],
        ans: 2,
        explain:
          'Trong câu phủ định của thì hiện tại hoàn thành, "yet" được đặt ở cuối câu mang nghĩa "chưa".',
      },
    ],
  },
  {
    id: 4,
    category: "present",
    categoryName: "Hiện tại",
    title: "Present Perfect Continuous (Thì hiện tại hoàn thành tiếp diễn)",
    shortTitle: "Present Perfect Cont.",
    subtitle:
      "Thì hiện tại hoàn thành tiếp diễn - Nhấn mạnh tính liên tục của hành động kéo dài đến hiện tại",
    emoji: "⏳",
    color: "#6366F1",
    bg: "#EEF2FF",
    completed: false,
    rule: "S + have/has + been + V-ing",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + have/has + been + V-ing + O",
            note: "Chủ ngữ + have/has + been + Động từ thêm đuôi -ing. Khác với hiện tại hoàn thành đơn, thì này nhấn mạnh quá trình liên tục không gián đoạn.",
            example: "It has been raining continuously for 3 hours.",
            translation: "Trời đã và đang mưa liên tục suốt 3 tiếng đồng hồ.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + have/has + not + been + V-ing + O",
            note: "Viết tắt: haven't been / hasn't been + V-ing.",
            example: "I haven't been feeling well recently.",
            translation: "Dạo gần đây tôi cảm thấy sức khỏe không được tốt.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Công thức chung",
            formula:
              "Have/Has + S + been + V-ing + O?  |  How long + have/has + S + been + V-ing?",
            note: 'Rất hay dùng với câu hỏi "How long" để hỏi về độ dài thời gian của hành động.',
            example: "How long have you been learning English?",
            translation: "Bạn đã học tiếng Anh được bao lâu rồi?",
          },
        ],
      },
    ],
    usage: [
      "Nhấn mạnh khoảng thời gian kéo dài liên tục của hành động bắt đầu ở quá khứ và vẫn đang tiếp diễn ở hiện tại.",
      "Hành động vừa mới kết thúc nhưng để lại dấu hiệu hoặc hậu quả rõ ràng ở hiện tại (Ví dụ: He is out of breath because he has been running).",
    ],
    signals: [
      "all day",
      "all morning",
      "all week",
      "how long",
      "since",
      "for",
      "lately",
      "recently",
    ],
    quiz: [
      {
        q: "Why are your hands dirty? - I ___ in the garden.",
        opts: ["have worked", "have been working", "worked", "am working"],
        ans: 1,
        explain:
          'Nhấn mạnh hành động vừa diễn ra liên tục để lại dấu vết ở hiện tại (tay lấm bẩn) -> "have been working".',
      },
      {
        q: "How long ___ she ___ for the interview?",
        opts: [
          "has / been waiting",
          "did / wait",
          "is / waiting",
          "has / waited",
        ],
        ans: 0,
        explain:
          'Hỏi khoảng thời gian kéo dài liên tục với "How long" và chủ ngữ "she" -> "has she been waiting".',
      },
    ],
  },

  // ==================== NHÓM THÌ QUÁ KHỨ (PAST TENSES) ====================
  {
    id: 5,
    category: "past",
    categoryName: "Quá khứ",
    title: "Past Simple (Thì quá khứ đơn)",
    shortTitle: "Past Simple",
    subtitle:
      "Thì quá khứ đơn - Diễn tả hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ",
    emoji: "📜",
    color: "#059669",
    bg: "#ECFDF5",
    completed: true,
    rule: "S + V2/V-ed hoặc S + was/were",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Động từ thường",
            formula: "S + V2/V-ed + O",
            note: "Động từ có quy tắc thêm đuôi -ed (play -> played). Động từ bất quy tắc dùng cột 2 trong bảng động từ bất quy tắc (go -> went, see -> saw). Áp dụng như nhau cho mọi ngôi!",
            example: "We visited our grandparents last Sunday.",
            translation:
              "Chúng tôi đã đến thăm ông bà vào Chủ nhật tuần trước.",
          },
          {
            tag: "Động từ To Be",
            formula: "S + was/were + N/Adj",
            note: "I / He / She / It / Danh từ số ít đi với WAS; You / We / They / Danh từ số nhiều đi với WERE.",
            example: "She was very happy with the exam results.",
            translation: "Cô ấy đã rất vui với kết quả kỳ thi.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Động từ thường",
            formula: "S + did not (didn't) + V(nguyên thể) + O",
            note: 'Mượn trợ động từ "didn\'t" cho tất cả các ngôi. Khi đó động từ chính PHẢI đưa về dạng NGUYÊN MẪU.',
            example: "I didn't see him at the conference yesterday.",
            translation:
              "Tôi đã không nhìn thấy anh ấy ở hội thảo ngày hôm qua.",
          },
          {
            tag: "Động từ To Be",
            formula: "S + was/were + not + N/Adj",
            note: "Viết tắt: wasn't / weren't.",
            example: "They weren't at home when I called.",
            translation: "Họ đã không có ở nhà khi tôi gọi điện.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Động từ thường",
            formula:
              "Did + S + V(nguyên thể) + O?  |  Wh- + did + S + V(nguyên thể)?",
            note: 'Đảo trợ động từ "Did" lên đầu câu. Động từ chính giữ nguyên mẫu.',
            example:
              "Did you buy that laptop last month? - Yes, I did. / No, I didn't.",
            translation:
              "Bạn đã mua chiếc máy tính xách tay đó tháng trước à? - Đúng rồi. / Không phải.",
          },
          {
            tag: "Động từ To Be",
            formula: "Was/Were + S + N/Adj?  |  Wh- + was/were + S + N/Adj?",
            note: "Đảo Was/Were lên đầu câu.",
            example: "Were you tired after the long flight?",
            translation: "Bạn có mệt sau chuyến bay dài không?",
          },
        ],
      },
    ],
    usage: [
      "Diễn tả hành động đã xảy ra và chấm dứt dứt điểm trong quá khứ, có thời gian xác định rõ ràng.",
      "Diễn tả một chuỗi các hành động liên tiếp xảy ra trong quá khứ (Ví dụ: She opened the door, smiled at me, and walked in).",
      "Diễn tả một thói quen hoặc hành vi trong quá khứ đã không còn ở hiện tại (có thể dùng used to).",
    ],
    signals: [
      "yesterday",
      "last night",
      "last week",
      "last year",
      "2 days ago",
      "in 2015",
      "the other day",
      "when I was young",
    ],
    quiz: [
      {
        q: "Yesterday, John ___ his keys and had to wait outside.",
        opts: ["lose", "lost", "losing", "has lost"],
        ans: 1,
        explain:
          'Có trạng từ "Yesterday" chỉ quá khứ đơn, động từ bất quy tắc của lose là "lost".',
      },
      {
        q: "___ you watch the football match last night?",
        opts: ["Do", "Did", "Were", "Have"],
        ans: 1,
        explain:
          'Câu hỏi ở quá khứ đơn với động từ thường "watch" mượn trợ động từ "Did".',
      },
    ],
  },
  {
    id: 6,
    category: "past",
    categoryName: "Quá khứ",
    title: "Past Continuous (Thì quá khứ tiếp diễn)",
    shortTitle: "Past Continuous",
    subtitle:
      "Thì quá khứ tiếp diễn - Diễn tả hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ",
    emoji: "🎬",
    color: "#0D9488",
    bg: "#CCFBF1",
    completed: false,
    rule: "S + was/were + V-ing",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + was/were + V-ing + O",
            note: "I / He / She / It đi với was; You / We / They đi với were + Động từ đuôi -ing.",
            example: "At 8 PM yesterday, I was watching the football match.",
            translation: "Vào lúc 8 giờ tối qua, tôi đang xem trận bóng đá.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + was/were + not + V-ing + O",
            note: "Thêm not sau was/were (wasn't / weren't).",
            example: "She wasn't sleeping when the earthquake happened.",
            translation: "Cô ấy đã không ngủ khi trận động đất xảy ra.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Công thức chung",
            formula:
              "Was/Were + S + V-ing + O?  |  Wh- + was/were + S + V-ing?",
            note: "Đảo Was/Were lên trước chủ ngữ.",
            example: "What were you doing when the phone rang?",
            translation: "Bạn đang làm gì khi chuông điện thoại reo?",
          },
        ],
      },
    ],
    usage: [
      "Diễn tả hành động đang xảy ra tại một thời điểm cụ thể trong quá khứ (Ví dụ: At 10 AM yesterday, she was driving to work).",
      "Diễn tả một hành động đang diễn ra trong quá khứ thì có một hành động khác xen vào (Hành động đang diễn ra chia quá khứ tiếp diễn, hành động xen vào chia quá khứ đơn: When I was cooking, the bell rang).",
      "Diễn tả hai hành động diễn ra song song cùng một lúc trong quá khứ (Dùng với While: While I was studying, my brother was playing games).",
    ],
    signals: [
      "at 7 PM yesterday",
      "at this time last year",
      "when (+ quá khứ đơn)",
      "while (+ quá khứ tiếp diễn)",
      "all night yesterday",
    ],
    quiz: [
      {
        q: "While my mother was cooking, my father ___ the garden.",
        opts: ["is watering", "was watering", "watered", "has watered"],
        ans: 1,
        explain:
          'Hai hành động diễn ra song song cùng lúc trong quá khứ (nối bởi While) -> "was watering".',
      },
      {
        q: "I ___ when you called me last night.",
        opts: ["slept", "was sleeping", "sleep", "had slept"],
        ans: 1,
        explain:
          'Hành động đang diễn ra (đang ngủ) thì hành động khác xen vào (gọi điện) -> "was sleeping".',
      },
    ],
  },
  {
    id: 7,
    category: "past",
    categoryName: "Quá khứ",
    title: "Past Perfect (Thì quá khứ hoàn thành)",
    shortTitle: "Past Perfect",
    subtitle:
      "Thì quá khứ hoàn thành - Diễn tả hành động xảy ra trước một hành động khác trong quá khứ",
    emoji: "⏮️",
    color: "#15803D",
    bg: "#DCFCE7",
    completed: false,
    rule: "S + had + V3/V-ed",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + had + V3/V-ed + O",
            note: "Dùng \"had\" cho tất cả các ngôi + Động từ phân từ 2 (cột 3 hoặc thêm -ed). Viết tắt: 'd (I'd, they'd).",
            example:
              "By the time we arrived at the cinema, the film had already started.",
            translation:
              "Khi chúng tôi đến rạp chiếu phim thì bộ phim đã bắt đầu chiếu rồi.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + had not (hadn't) + V3/V-ed + O",
            note: "Thêm not sau had (viết tắt: hadn't).",
            example:
              "He hadn't finished the report before his manager asked for it.",
            translation:
              "Anh ấy vẫn chưa hoàn thành xong báo cáo trước khi sếp hỏi tới.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Công thức chung",
            formula: "Had + S + V3/V-ed + O?  |  Wh- + had + S + V3/V-ed?",
            note: 'Đảo "Had" lên trước chủ ngữ.',
            example: "Had they left the office before the rain started?",
            translation: "Họ đã rời khỏi văn phòng trước khi trời mưa à?",
          },
        ],
      },
    ],
    usage: [
      "Diễn tả hành động xảy ra và hoàn tất trước một hành động khác trong quá khứ (Hành động xảy ra trước chia Quá khứ hoàn thành, hành động xảy ra sau chia Quá khứ đơn).",
      "Diễn tả hành động xảy ra trước một mốc thời gian cụ thể trong quá khứ (Ví dụ: By 2010, he had published two famous novels).",
    ],
    signals: [
      "by the time",
      "before",
      "after",
      "as soon as",
      "until",
      "when",
      "by + mốc thời gian quá khứ (by 9 PM yesterday)",
    ],
    quiz: [
      {
        q: "After they ___ dinner, they went for a walk.",
        opts: ["have finished", "had finished", "finished", "were finishing"],
        ans: 1,
        explain:
          'Hành động ăn tối xảy ra trước hành động đi dạo (quá khứ đơn) -> "had finished".',
      },
      {
        q: "When I got to the station, the train ___ already left.",
        opts: ["has", "was", "had", "did"],
        ans: 2,
        explain:
          'Tàu đã rời đi trước thời điểm tôi đến ga -> dùng quá khứ hoàn thành với "had".',
      },
    ],
  },
  {
    id: 8,
    category: "past",
    categoryName: "Quá khứ",
    title: "Past Perfect Continuous (Thì quá khứ hoàn thành tiếp diễn)",
    shortTitle: "Past Perfect Cont.",
    subtitle:
      "Thì quá khứ hoàn thành tiếp diễn - Nhấn mạnh thời lượng kéo dài liên tục trước một sự việc quá khứ khác",
    emoji: "🕰️",
    color: "#047857",
    bg: "#D1FAE5",
    completed: false,
    rule: "S + had + been + V-ing",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + had + been + V-ing + O",
            note: "had been + V-ing cho tất cả các ngôi. Nhấn mạnh tính liên tục và độ dài thời gian.",
            example:
              "They had been driving for 6 hours before they reached the hotel.",
            translation:
              "Họ đã lái xe liên tục suốt 6 tiếng trước khi đến được khách sạn.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + had not (hadn't) + been + V-ing + O",
            note: "Viết tắt: hadn't been + V-ing.",
            example: "He hadn't been feeling well before he collapsed.",
            translation:
              "Anh ấy đã không được khỏe liên tục trước khi bị kiệt sức ngất đi.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Công thức chung",
            formula:
              "Had + S + been + V-ing + O?  |  How long + had + S + been + V-ing?",
            note: "Đảo Had lên trước chủ ngữ.",
            example:
              "How long had you been waiting before the doctor called your name?",
            translation:
              "Bạn đã phải chờ đợi liên tục bao lâu trước khi bác sĩ gọi tên?",
          },
        ],
      },
    ],
    usage: [
      "Diễn tả hành động diễn ra liên tục trước một hành động khác trong quá khứ, nhấn mạnh tính liên tục và thời lượng.",
      "Diễn tả hành động kéo dài liên tục dẫn đến một kết quả hoặc hậu quả cụ thể trong quá khứ (Ví dụ: The ground was wet because it had been raining all night).",
    ],
    signals: [
      "until then",
      "by the time",
      "before",
      "for (+ thời gian) + before",
      "all day",
    ],
    quiz: [
      {
        q: "Her eyes were red because she ___ all night.",
        opts: ["had been crying", "cried", "has cried", "is crying"],
        ans: 0,
        explain:
          'Mắt đỏ là kết quả trong quá khứ do hành động khóc liên tục suốt đêm gây ra -> "had been crying".',
      },
    ],
  },

  // ==================== NHÓM THÌ TƯƠNG LAI (FUTURE TENSES) ====================
  {
    id: 9,
    category: "future",
    categoryName: "Tương lai",
    title: "Future Simple (Thì tương lai đơn)",
    shortTitle: "Future Simple",
    subtitle:
      "Thì tương lai đơn - Diễn tả quyết định tức thì, lời hứa, dự đoán không có căn cứ",
    emoji: "🚀",
    color: "#EA580C",
    bg: "#FFEDD5",
    completed: false,
    rule: "S + will + V(nguyên thể)",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + will + V(nguyên thể) + O",
            note: "will đi cùng động từ nguyên mẫu không chia cho mọi ngôi. Viết tắt: 'll (I'll, you'll, they'll).",
            example: "I will help you carry those heavy boxes.",
            translation: "Tôi sẽ giúp bạn mang những chiếc thùng nặng đó.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + will not (won't) + V(nguyên thể) + O",
            note: "will not thường được viết tắt là won't.",
            example:
              "I promise I won't disclose this confidential information.",
            translation: "Tôi hứa sẽ không tiết lộ thông tin mật này.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Công thức chung",
            formula:
              "Will + S + V(nguyên thể) + O?  |  Wh- + will + S + V(nguyên thể)?",
            note: "Đưa Will lên đầu câu trước chủ ngữ.",
            example:
              "Will you attend the workshop tomorrow? - Yes, I will. / No, I won't.",
            translation:
              "Bạn sẽ tham dự buổi hội thảo ngày mai chứ? - Có, tôi sẽ tham dự.",
          },
        ],
      },
    ],
    usage: [
      "Diễn tả quyết định được đưa ra ngay tại thời điểm nói (Ví dụ: It is hot here. I will open the window).",
      "Diễn tả lời hứa, lời đe dọa, lời đề nghị hoặc cảnh báo (Ví dụ: I will never lie to you again).",
      "Diễn tả dự đoán về tương lai dựa trên quan điểm cá nhân, không có bằng chứng cụ thể (thường đi với think, hope, believe).",
    ],
    signals: [
      "tomorrow",
      "next week",
      "next month",
      "in 2 days",
      "soon",
      "I think",
      "I promise",
      "probably",
    ],
    quiz: [
      {
        q: "I think it ___ rain later this afternoon.",
        opts: ["will", "is going to", "was", "has"],
        ans: 0,
        explain:
          'Dự đoán dựa trên cảm tính cá nhân đi với "I think" -> dùng tương lai đơn "will".',
      },
      {
        q: "Don't worry, I ___ tell anyone your secret.",
        opts: ["will", "won't", "am not", "don't"],
        ans: 1,
        explain: 'Lời hứa phủ định (tôi sẽ không nói) -> dùng "won\'t".',
      },
    ],
  },
  {
    id: 10,
    category: "future",
    categoryName: "Tương lai",
    title: "Future Continuous (Thì tương lai tiếp diễn)",
    shortTitle: "Future Continuous",
    subtitle:
      "Thì tương lai tiếp diễn - Diễn tả hành động sẽ đang diễn ra tại một thời điểm xác định trong tương lai",
    emoji: "🛰️",
    color: "#D97706",
    bg: "#FEF3C7",
    completed: false,
    rule: "S + will be + V-ing",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + will be + V-ing + O",
            note: "will be + Động từ thêm đuôi -ing cho tất cả các ngôi.",
            example: "This time tomorrow, we will be flying to Tokyo.",
            translation:
              "Vào giờ này ngày mai, chúng tôi sẽ đang bay đến Tokyo.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + will not be (won't be) + V-ing + O",
            note: "Viết tắt: won't be + V-ing.",
            example:
              "She won't be using the meeting room between 2 PM and 4 PM.",
            translation:
              "Cô ấy sẽ không sử dụng phòng họp trong khoảng từ 2h đến 4h chiều.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Công thức chung",
            formula:
              "Will + S + be + V-ing + O?  |  Wh- + will + S + be + V-ing?",
            note: "Đảo Will lên trước chủ ngữ.",
            example: "Will you be having dinner with us at 7 PM tonight?",
            translation:
              "Bạn sẽ đang ăn tối cùng chúng tôi vào lúc 7 giờ tối nay chứ?",
          },
        ],
      },
    ],
    usage: [
      "Diễn tả hành động đang diễn ra tại một thời điểm hoặc khoảng thời gian xác định trong tương lai.",
      "Diễn tả hành động đang xảy ra trong tương lai thì một hành động khác xen vào (Hành động xen vào chia Hiện tại đơn: I will be waiting when you arrive).",
    ],
    signals: [
      "at this time tomorrow",
      "at 8 AM next Monday",
      "during this time next week",
    ],
    quiz: [
      {
        q: "At 10 AM tomorrow, they ___ an important test.",
        opts: ["take", "will take", "will be taking", "are taking"],
        ans: 2,
        explain:
          'Có mốc thời gian cụ thể trong tương lai "At 10 AM tomorrow" -> dùng thì tương lai tiếp diễn "will be taking".',
      },
    ],
  },
  {
    id: 11,
    category: "future",
    categoryName: "Tương lai",
    title: "Future Perfect (Thì tương lai hoàn thành)",
    shortTitle: "Future Perfect",
    subtitle:
      "Thì tương lai hoàn thành - Diễn tả hành động sẽ hoàn tất trước một thời điểm hoặc hành động khác trong tương lai",
    emoji: "🏁",
    color: "#C026D3",
    bg: "#FAE8FF",
    completed: false,
    rule: "S + will have + V3/V-ed",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + will have + V3/V-ed + O",
            note: "will have + Động từ phân từ 2 (cột 3 hoặc thêm -ed) cho mọi ngôi.",
            example:
              "By next year, she will have completed her Master's degree.",
            translation:
              "Trước năm sau, cô ấy sẽ hoàn thành xong chương trình thạc sĩ.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + will not have (won't have) + V3/V-ed + O",
            note: "Viết tắt: won't have + V3/V-ed.",
            example:
              "They won't have finished the bridge before the rainy season starts.",
            translation:
              "Họ sẽ chưa thể hoàn thành cây cầu trước khi mùa mưa bắt đầu.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Công thức chung",
            formula:
              "Will + S + have + V3/V-ed + O?  |  Wh- + will + S + have + V3/V-ed?",
            note: "Đảo Will lên trước chủ ngữ.",
            example: "Will you have written the report by 5 PM?",
            translation: "Bạn sẽ viết xong bản báo cáo trước 5 giờ chiều chứ?",
          },
        ],
      },
    ],
    usage: [
      "Diễn tả hành động sẽ hoàn thành trước một thời điểm trong tương lai (Dùng với By + mốc thời gian: By 2030, by next month).",
      "Diễn tả hành động sẽ hoàn thành trước một hành động khác trong tương lai (Hành động xảy ra sau chia thì Hiện tại đơn: By the time you arrive, I will have left).",
    ],
    signals: [
      "by + mốc thời gian tương lai (by tomorrow, by next week, by 2030)",
      "by the time + hiện tại đơn",
      "before + thời gian tương lai",
    ],
    quiz: [
      {
        q: "By the end of this month, I ___ all my debt.",
        opts: ["will pay", "will have paid", "pay", "have paid"],
        ans: 1,
        explain:
          'Có cụm "By the end of this month" chỉ hành động hoàn tất trước mốc tương lai -> "will have paid".',
      },
    ],
  },
  {
    id: 12,
    category: "future",
    categoryName: "Tương lai",
    title: "Future Perfect Continuous (Thì tương lai hoàn thành tiếp diễn)",
    shortTitle: "Future Perfect Cont.",
    subtitle:
      "Thì tương lai hoàn thành tiếp diễn - Nhấn mạnh thời lượng kéo dài liên tục đến một mốc trong tương lai",
    emoji: "🏆",
    color: "#9333EA",
    bg: "#F3E8FF",
    completed: false,
    rule: "S + will have been + V-ing",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + will have been + V-ing + O",
            note: "will have been + V-ing cho mọi ngôi. Nhấn mạnh quá trình tích lũy thời gian liên tục.",
            example:
              "By next November, I will have been working at this company for 10 years.",
            translation:
              "Tính đến tháng 11 tới, tôi sẽ làm việc liên tục tại công ty này tròn 10 năm.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + won't have been + V-ing + O",
            note: "Viết tắt: won't have been + V-ing.",
            example:
              "She won't have been teaching long enough to get the tenure.",
            translation:
              "Cô ấy sẽ chưa giảng dạy đủ thời gian để được xét biên chế chính thức.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Công thức chung",
            formula:
              "Will + S + have been + V-ing + O?  |  How long + will + S + have been + V-ing?",
            note: "Đảo Will lên trước chủ ngữ.",
            example:
              "How long will you have been living here by the end of this year?",
            translation:
              "Tính đến cuối năm nay thì bạn sẽ sống ở đây được bao lâu rồi?",
          },
        ],
      },
    ],
    usage: [
      "Nhấn mạnh khoảng thời gian kéo dài liên tục của một hành động tính tới một thời điểm cụ thể trong tương lai.",
    ],
    signals: [
      "by the time...",
      "by then",
      "for + khoảng thời gian + by + mốc tương lai",
    ],
    quiz: [
      {
        q: "By next month, she ___ English for two years.",
        opts: [
          "will study",
          "will have been studying",
          "has studied",
          "is studying",
        ],
        ans: 1,
        explain:
          'Có "By next month" kết hợp với khoảng thời gian "for two years" nhấn mạnh độ dài hành động -> "will have been studying".',
      },
    ],
  },

  // ==================== CẤU TRÚC NGỮ PHÁP QUAN TRỌNG KHÁC ====================
  {
    id: 13,
    category: "other",
    categoryName: "Cấu trúc khác",
    title: "Passive Voice (Câu bị động)",
    shortTitle: "Passive Voice",
    subtitle:
      "Câu bị động - Nhấn mạnh đối tượng chịu tác động của hành động thay vì người thực hiện",
    emoji: "🔄",
    color: "#2563EB",
    bg: "#DBEAFE",
    completed: true,
    rule: "S + be (chia theo thì) + V3/V-ed (+ by O)",
    forms: [
      {
        type: "affirmative",
        label: "Khẳng định (+)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + be (chia theo thì của câu gốc) + V3/V-ed (+ by O)",
            note: "Tân ngữ (O) của câu chủ động biến thành Chủ ngữ (S) của câu bị động. Động từ To Be biến đổi theo đúng thì của câu ban đầu.",
            example: "English is spoken by millions of people worldwide.",
            translation:
              "Tiếng Anh được nói bởi hàng triệu người trên toàn thế giới.",
          },
        ],
      },
      {
        type: "negative",
        label: "Phủ định (-)",
        badgeColor: "#EF4444",
        badgeBg: "#FEE2E2",
        parts: [
          {
            tag: "Công thức chung",
            formula: "S + be + not + V3/V-ed (+ by O)",
            note: "Thêm not trực tiếp sau động từ To Be hoặc trợ động từ đầu tiên.",
            example: "The documents were not signed yesterday.",
            translation: "Các tài liệu đã không được ký kết vào ngày hôm qua.",
          },
        ],
      },
      {
        type: "interrogative",
        label: "Nghi vấn (? / Câu hỏi)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Công thức chung",
            formula: "Be + S + V3/V-ed (+ by O)?  |  Wh- + be + S + V3/V-ed?",
            note: "Đảo To Be hoặc trợ động từ lên trước chủ ngữ mới.",
            example: "Was this novel written by Victor Hugo?",
            translation:
              "Cuốn tiểu thuyết này có phải được viết bởi Victor Hugo không?",
          },
        ],
      },
    ],
    usage: [
      "Dùng khi không biết hoặc không quan trọng ai là người thực hiện hành động.",
      "Dùng khi muốn nhấn mạnh vào bản thân hành động hoặc người/vật tiếp nhận hành động.",
    ],
    signals: [
      "by + tác nhân (by Mary, by the author)",
      "động từ To Be + V3 (is made, was built, has been done)",
    ],
    quiz: [
      {
        q: "The new hospital ___ built next year.",
        opts: ["will", "will be", "is", "was"],
        ans: 1,
        explain: 'Bị động ở tương lai đơn: "will be + V3" -> "will be built".',
      },
      {
        q: "The cake ___ eaten by my little brother.",
        opts: ["was", "were", "did", "had"],
        ans: 0,
        explain:
          '"The cake" là danh từ số ít ở thể bị động quá khứ -> dùng "was eaten".',
      },
    ],
  },
  {
    id: 14,
    category: "other",
    categoryName: "Cấu trúc khác",
    title: "Conditional Sentences (Câu điều kiện)",
    shortTitle: "Conditional Sentences",
    subtitle:
      "Câu điều kiện - Diễn tả giả định và kết quả (Loại 0, Loại 1, Loại 2, Loại 3)",
    emoji: "💭",
    color: "#059669",
    bg: "#D1FAE5",
    completed: false,
    rule: "If + [Mệnh đề điều kiện], [Mệnh đề kết quả]",
    forms: [
      {
        type: "type01",
        label: "Loại 0 & Loại 1 (Có thật)",
        badgeColor: "#10B981",
        badgeBg: "#D1FAE5",
        parts: [
          {
            tag: "Loại 0 (Chân lý, sự thật)",
            formula: "If + S + V(hiện tại đơn), S + V(hiện tại đơn)",
            note: "Diễn tả chân lý, thói quen hiển nhiên luôn luôn đúng.",
            example: "If you heat ice, it melts into water.",
            translation: "Nếu bạn đun nóng đá, nó sẽ tan thành nước.",
          },
          {
            tag: "Loại 1 (Có thể xảy ra ở hiện tại / tương lai)",
            formula: "If + S + V(hiện tại đơn), S + will + V(nguyên thể)",
            note: "Điều kiện có thật hoặc rất dễ xảy ra ở hiện tại hoặc tương lai.",
            example: "If it rains tomorrow, we will stay at home.",
            translation: "Nếu ngày mai trời mưa, chúng tôi sẽ ở nhà.",
          },
        ],
      },
      {
        type: "type23",
        label: "Loại 2 & Loại 3 (Giả định không có thật)",
        badgeColor: "#8B5CF6",
        badgeBg: "#EDE9FE",
        parts: [
          {
            tag: "Loại 2 (Không có thật ở hiện tại)",
            formula:
              "If + S + V2/ed (To be dùng were cho mọi ngôi), S + would + V(nguyên thể)",
            note: "Giả định điều trái ngược hoàn toàn với thực tế ở hiện tại.",
            example: "If I were rich, I would travel around the world.",
            translation:
              "Nếu tôi giàu (thực tế hiện tại tôi không giàu), tôi sẽ đi du lịch vòng quanh thế giới.",
          },
          {
            tag: "Loại 3 (Không có thật trong quá khứ)",
            formula: "If + S + had + V3/ed, S + would have + V3/ed",
            note: "Tiếc nuối hoặc giả định điều trái ngược với sự thật đã xảy ra trong quá khứ.",
            example:
              "If she had studied harder, she would have passed the exam.",
            translation:
              "Nếu cô ấy đã học chăm hơn (thực tế quá khứ cô ấy không chăm), cô ấy đã vượt qua kỳ thi.",
          },
        ],
      },
    ],
    usage: [
      "Type 0: Diễn tả sự thật khoa học, quy luật tự nhiên.",
      "Type 1: Diễn tả hành động có thể xảy ra trong tương lai nếu điều kiện được đáp ứng.",
      "Type 2: Giả định không thể xảy ra ở hiện tại (hoặc lời khuyên: If I were you...).",
      "Type 3: Diễn tả điều kiện không xảy ra trong quá khứ, thường mang tính tiếc nuối.",
    ],
    signals: [
      "If",
      "Unless (= If not)",
      "As long as",
      "Provided that",
      "In case",
    ],
    quiz: [
      {
        q: "If it ___ sunny tomorrow, we will go camping.",
        opts: ["is", "will be", "were", "was"],
        ans: 0,
        explain: 'Câu điều kiện loại 1: Mệnh đề If dùng hiện tại đơn "is".',
      },
      {
        q: "If I ___ you, I would accept that job offer.",
        opts: ["am", "was", "were", "had been"],
        ans: 2,
        explain:
          'Câu điều kiện loại 2 giả định ở hiện tại, động từ To Be dùng "were" cho mọi ngôi (If I were you).',
      },
    ],
  },
]
