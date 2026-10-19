// Bộ câu hỏi kiểm tra chia tách rõ ràng: KIỂM TRA TỪ VỰNG và KIỂM TRA NGỮ PHÁP

export const vocabularyTests = [
  // ==================== ĐỀ TỪ VỰNG 1 ====================
  {
    id: "vocab-1",
    title: "Từ vựng Giao tiếp Cơ bản & Đời sống",
    level: "Cơ bản (A2 - B1)",
    durationMinutes: 10,
    icon: "🗣️",
    description:
      "Kiểm tra các từ vựng thiết yếu trong sinh hoạt hàng ngày, hỏi đường và giao tiếp cơ bản.",
    questions: [
      {
        id: 1,
        question:
          "Living near a subway station is extremely _______ for city commuters.",
        options: ["convenient", "hesitant", "reluctant", "awkward"],
        answer: 0,
        explanation:
          '"Convenient" nghĩa là thuận tiện, tiện lợi. "Living near a subway station is extremely convenient..." (Sống gần ga tàu điện ngầm rất thuận tiện...).',
      },
      {
        id: 2,
        question:
          "I really _______ your kind assistance during my exam preparation.",
        options: ["ignore", "appreciate", "hesitate", "complain"],
        answer: 1,
        explanation:
          '"Appreciate" nghĩa là cảm kích, biết ơn, đánh giá cao. "I really appreciate your kind assistance" (Tôi rất biết ơn sự giúp đỡ nhiệt tình của bạn).',
      },
      {
        id: 3,
        question:
          "She was so _______ that she made everyone in the room laugh with her stories.",
        options: ["gloomy", "hilarious", "monotonous", "tedious"],
        answer: 1,
        explanation:
          '"Hilarious" nghĩa là hài hước, vui nhộn làm mọi người cười sảng khoái.',
      },
      {
        id: 4,
        question:
          "Do not _______ to contact me if you encounter any difficulties.",
        options: ["appreciate", "hesitate", "celebrate", "flourish"],
        answer: 1,
        explanation:
          'Cụm từ "do not hesitate to do something" nghĩa là đừng ngần ngại làm việc gì.',
      },
      {
        id: 5,
        question:
          "The flight _______ has been postponed until tomorrow morning due to fog.",
        options: ["departure", "destination", "itinerary", "baggage"],
        answer: 0,
        explanation:
          '"Departure" là sự khởi hành / chuyến bay cất cánh. "The flight departure has been postponed" (Chuyến bay cất cánh đã bị hoãn).',
      },
      {
        id: 6,
        question:
          "Can you please give me the _______ for baking this chocolate cake?",
        options: ["prescription", "receipt", "recipe", "invoice"],
        answer: 2,
        explanation:
          '"Recipe" là công thức nấu ăn/làm bánh. "Prescription" là đơn thuốc, "receipt" là biên lai.',
      },
      {
        id: 7,
        question: "He is very _______ about his new English learning routine.",
        options: ["enthusiastic", "tedious", "clumsy", "reluctant"],
        answer: 0,
        explanation:
          'Cấu trúc: "enthusiastic about something" nghĩa là nhiệt tình, hào hứng về điều gì.',
      },
      {
        id: 8,
        question:
          "We walked along the beach to enjoy the beautiful ocean _______.",
        options: ["scenery", "ingredient", "appetizer", "algorithm"],
        answer: 0,
        explanation:
          '"Scenery" là phong cảnh, cảnh quan thiên nhiên tuyệt đẹp.',
      },
      {
        id: 9,
        question: "Hot green tea is a very popular _______ in Asian culture.",
        options: ["beverage", "itinerary", "prescription", "nutrient"],
        answer: 0,
        explanation:
          '"Beverage" nghĩa là đồ uống, thức uống (thường dùng trang trọng).',
      },
      {
        id: 10,
        question:
          "The manual was quite _______, so I needed someone to explain it step by step.",
        options: ["complicated", "eloquent", "ubiquitous", "resilient"],
        answer: 0,
        explanation: '"Complicated" nghĩa là phức tạp, rắc rối, khó hiểu.',
      },
    ],
  },

  // ==================== ĐỀ TỪ VỰNG 2 ====================
  {
    id: "vocab-2",
    title: "Từ vựng TOEIC Văn phòng & Doanh nghiệp",
    level: "Trung cấp (TOEIC 650+)",
    durationMinutes: 10,
    icon: "💼",
    description:
      "Kiểm tra từ vựng chuyên ngành thương mại, hợp đồng, đàm phán và nhân sự công ty.",
    questions: [
      {
        id: 11,
        question:
          "Both companies agreed to _______ a mutually beneficial supply contract.",
        options: ["negotiate", "hesitate", "deteriorate", "stumble"],
        answer: 0,
        explanation:
          '"Negotiate a contract" là đàm phán, thương lượng hợp đồng.',
      },
      {
        id: 12,
        question:
          "The company reported a 15% increase in total annual _______ this fiscal year.",
        options: ["revenue", "complaint", "symptom", "itinerary"],
        answer: 0,
        explanation:
          '"Revenue" nghĩa là doanh thu. "Annual revenue" là doanh thu hàng năm.',
      },
      {
        id: 13,
        question:
          "All employees must adhere to safety rules to maintain strict regulatory _______.",
        options: ["compliance", "appetizer", "excursion", "fragility"],
        answer: 0,
        explanation:
          '"Compliance" nghĩa là sự tuân thủ (quy định, quy chuẩn pháp lý).',
      },
      {
        id: 14,
        question:
          "Our logistics team is conducting a monthly _______ check in the central warehouse.",
        options: ["inventory", "biodiversity", "prescription", "monopoly"],
        answer: 0,
        explanation: '"Inventory check" là việc kiểm kê hàng tồn kho.',
      },
      {
        id: 15,
        question:
          "Marketing and engineering teams need to _______ closely on the product launch.",
        options: ["collaborate", "confiscate", "deteriorate", "extinguish"],
        answer: 0,
        explanation:
          '"Collaborate with / on" là hợp tác, cộng tác cùng làm việc.',
      },
      {
        id: 16,
        question:
          "The board praised Sarah for submitting an innovative business _______.",
        options: ["proposal", "symptom", "ailment", "culinary"],
        answer: 0,
        explanation:
          '"Business proposal" nghĩa là bản đề xuất, đề án kinh doanh.',
      },
      {
        id: 17,
        question:
          "Flexible remote work policies noticeably elevated overall office _______.",
        options: ["productivity", "fatigue", "obesity", "deficiency"],
        answer: 0,
        explanation: '"Productivity" nghĩa là năng suất, hiệu suất làm việc.',
      },
      {
        id: 18,
        question:
          "We need to submit the quarterly financial report before the strict _______ tomorrow.",
        options: ["deadline", "destination", "beverage", "departure"],
        answer: 0,
        explanation: '"Deadline" là hạn chót hoàn thành công việc.',
      },
      {
        id: 19,
        question:
          "The company offers attractive _______ packages to retain talented senior engineers.",
        options: ["compensation", "deforestation", "allergy", "micro-fragment"],
        answer: 0,
        explanation:
          '"Compensation package" là chế độ đãi ngộ, lương thưởng bồi hoàn cho nhân viên.',
      },
      {
        id: 20,
        question:
          "Customer feedback indicates high _______ with the newly updated mobile interface.",
        options: ["satisfaction", "contamination", "hesitation", "discrepancy"],
        answer: 0,
        explanation:
          '"Customer satisfaction" nghĩa là sự hài lòng, thỏa mãn của khách hàng.',
      },
    ],
  },

  // ==================== ĐỀ TỪ VỰNG 3 ====================
  {
    id: "vocab-3",
    title: "Từ vựng IELTS Học thuật Nâng cao",
    level: "Nâng cao (IELTS 7.0+)",
    durationMinutes: 12,
    icon: "🎓",
    description:
      "Kiểm tra vốn từ vựng C1/C2 học thuật thường xuất hiện trong bài đọc và viết IELTS.",
    questions: [
      {
        id: 21,
        question:
          "Her remarkable _______ allowed her to bounce back quickly after the financial crisis.",
        options: ["resilience", "negligence", "hesitation", "brevity"],
        answer: 0,
        explanation:
          '"Resilience" là khả năng phục hồi nhanh chóng, tính kiên cường sau khó khăn.',
      },
      {
        id: 22,
        question:
          "The keynote speaker delivered an exceptionally _______ address on human rights.",
        options: ["eloquent", "clumsy", "vague", "blunt"],
        answer: 0,
        explanation: '"Eloquent" là hùng hồn, lưu loát, giàu sức thuyết phục.',
      },
      {
        id: 23,
        question:
          "The instructions provided by the committee were notoriously _______ and confusing.",
        options: ["ambiguous", "lucid", "transparent", "punctual"],
        answer: 0,
        explanation:
          '"Ambiguous" là mơ hồ, không rõ ràng, có nhiều cách hiểu gây hiểu lầm.',
      },
      {
        id: 24,
        question:
          "The scientist was _______ in recording every minute temperature variation in the lab.",
        options: ["meticulous", "careless", "reckless", "superficial"],
        answer: 0,
        explanation: '"Meticulous" là tỉ mỉ, cẩn thận từng chi tiết nhỏ nhất.',
      },
      {
        id: 25,
        question:
          "Smartphones have become so _______ that almost every teenager owns one.",
        options: ["ubiquitous", "scarce", "obsolete", "ephemeral"],
        answer: 0,
        explanation: '"Ubiquitous" là có mặt ở khắp mọi nơi, cực kỳ phổ biến.',
      },
      {
        id: 26,
        question:
          "The government needs to adopt a more _______ policy rather than relying on theory.",
        options: ["pragmatic", "dogmatic", "fictional", "utopian"],
        answer: 0,
        explanation:
          '"Pragmatic" là mang tính thực tế, giải quyết vấn đề dựa trên thực tiễn thay vì lý thuyết suông.',
      },
      {
        id: 27,
        question:
          "Einstein’s theory of relativity triggered a fundamental _______ shift in modern physics.",
        options: ["paradigm", "itinerary", "prescription", "monotony"],
        answer: 0,
        explanation:
          '"Paradigm shift" là sự chuyển biến kiểu mẫu / mô hình tư duy nền tảng.',
      },
      {
        id: 28,
        question:
          "Due to inflation, there has been a _______ decline in consumer purchasing power.",
        options: ["substantial", "trivial", "negligible", "nominal"],
        answer: 0,
        explanation: '"Substantial" nghĩa là đáng kể, lớn, có tầm quan trọng.',
      },
      {
        id: 29,
        question:
          "The beauty of cherry blossoms is notoriously _______, lasting only a few short weeks.",
        options: ["ephemeral", "permanent", "perpetual", "eternal"],
        answer: 0,
        explanation: '"Ephemeral" nghĩa là ngắn ngủi, sớm nở tối tàn, phù du.',
      },
      {
        id: 30,
        question:
          "The new environmental treaty received _______ support from all member nations.",
        options: ["unanimous", "ambiguous", "dubious", "reluctant"],
        answer: 0,
        explanation:
          '"Unanimous" nghĩa là nhất trí tuyệt đối, 100% đồng thuận.',
      },
    ],
  },

  // ==================== ĐỀ TỪ VỰNG 4 ====================
  {
    id: "vocab-4",
    title: "Thành ngữ & Cụm từ Cố định (Idioms & Collocations)",
    level: "Trung cấp - Nâng cao",
    durationMinutes: 10,
    icon: "🧩",
    description:
      "Kiểm tra khả năng sử dụng các cụm từ đi liền (collocations) và thành ngữ tự nhiên.",
    questions: [
      {
        id: 31,
        question:
          "I am feeling a bit under the _______ today, so I will take a sick day from work.",
        options: ["weather", "cloud", "storm", "rain"],
        answer: 0,
        explanation:
          'Thành ngữ "under the weather" nghĩa là cảm thấy mệt mỏi, không khỏe, ốm nhẹ.',
      },
      {
        id: 32,
        question:
          "She worked day and night to make _______ meet after moving to London.",
        options: ["ends", "edges", "sides", "corners"],
        answer: 0,
        explanation:
          'Thành ngữ "make ends meet" nghĩa là xoay xở đủ tiền để trang trải cuộc sống.',
      },
      {
        id: 33,
        question:
          "Please bear in _______ that this software is still in its beta testing stage.",
        options: ["mind", "heart", "head", "brain"],
        answer: 0,
        explanation:
          'Cụm từ "bear in mind" nghĩa là hãy ghi nhớ, lưu tâm điều gì.',
      },
      {
        id: 34,
        question:
          "The CEO gave the green _______ for our team to launch the new advertising campaign.",
        options: ["light", "card", "flag", "sign"],
        answer: 0,
        explanation:
          'Thành ngữ "give the green light" nghĩa là bật đèn xanh, cấp phép cho phép triển khai dự án.',
      },
      {
        id: 35,
        question:
          "We need to think outside the _______ to find a creative solution to this problem.",
        options: ["box", "room", "circle", "wall"],
        answer: 0,
        explanation:
          'Thành ngữ "think outside the box" nghĩa là tư duy sáng tạo, đột phá ngoài khuôn mẫu.',
      },
      {
        id: 36,
        question:
          "Learning English requires patience; success won’t happen _______ night.",
        options: ["over", "under", "through", "past"],
        answer: 0,
        explanation:
          'Cụm từ "overnight" nghĩa là trong một sớm một chiều, nhanh chóng tức thì.',
      },
      {
        id: 37,
        question:
          "He hit the _______ on the head when he pointed out the core flaw of the design.",
        options: ["nail", "hammer", "target", "bullet"],
        answer: 0,
        explanation:
          'Thành ngữ "hit the nail on the head" nghĩa là nói trúng phóc, chỉ ra chính xác vấn đề.',
      },
      {
        id: 38,
        question: "They managed to pull off the victory against all _______.",
        options: ["odds", "bets", "chances", "risks"],
        answer: 0,
        explanation:
          'Cụm "against all odds" nghĩa là bất chấp mọi khó khăn, nghịch cảnh.',
      },
      {
        id: 39,
        question:
          "Could you please keep an _______ on my backpack while I buy a coffee?",
        options: ["eye", "ear", "arm", "hand"],
        answer: 0,
        explanation:
          'Thành ngữ "keep an eye on" nghĩa là để mắt trông chừng, trông coi giúp.',
      },
      {
        id: 40,
        question:
          "The project was postponed at the eleventh _______ due to budget cuts.",
        options: ["hour", "day", "minute", "month"],
        answer: 0,
        explanation:
          'Thành ngữ "at the eleventh hour" nghĩa là vào phút chót, ngay trước hạn chót.',
      },
    ],
  },

  // ==================== ĐỀ TỪ VỰNG 5 ====================
  {
    id: "vocab-5",
    title: "Từ đồng nghĩa & Trái nghĩa (Synonyms & Antonyms)",
    level: "Trung cấp (B2)",
    durationMinutes: 10,
    icon: "🔄",
    description:
      "Kiểm tra vốn từ đồng nghĩa (synonyms) và từ trái nghĩa (antonyms) chuẩn xác.",
    questions: [
      {
        id: 41,
        question:
          'Choose the SYNONYM of "ABUNDANT": The valley is known for its abundant harvest.',
        options: ["Plentiful", "Scarce", "Insufficient", "Meager"],
        answer: 0,
        explanation:
          '"Abundant" nghĩa là dồi dào, phong phú; đồng nghĩa với "Plentiful". Các từ còn lại đều là trái nghĩa (khan hiếm).',
      },
      {
        id: 42,
        question:
          'Choose the ANTONYM of "AUTHENTIC": They confirmed that the antique painting was authentic.',
        options: ["Fake", "Genuine", "Real", "Original"],
        answer: 0,
        explanation:
          '"Authentic" nghĩa là thật, nguyên bản. Trái nghĩa là "Fake" (giả mạo).',
      },
      {
        id: 43,
        question:
          'Choose the SYNONYM of "HAZARDOUS": Transporting these chemicals is highly hazardous.',
        options: ["Dangerous", "Secure", "Harmless", "Beneficial"],
        answer: 0,
        explanation:
          '"Hazardous" nghĩa là độc hại, nguy hiểm, đồng nghĩa với "Dangerous".',
      },
      {
        id: 44,
        question:
          'Choose the ANTONYM of "OBSOLETE": Vinyl records were once considered obsolete technology.',
        options: ["Modern", "Outdated", "Antiquated", "Archaic"],
        answer: 0,
        explanation:
          '"Obsolete" là lỗi thời, lạc hậu. Trái nghĩa là "Modern" (hiện đại).',
      },
      {
        id: 45,
        question:
          'Choose the SYNONYM of "PROMPT": Thank you for your prompt reply to our email.',
        options: ["Quick", "Delayed", "Slow", "Hesitant"],
        answer: 0,
        explanation:
          '"Prompt" nghĩa là nhanh chóng, kịp thời, đồng nghĩa với "Quick".',
      },
      {
        id: 46,
        question:
          'Choose the ANTONYM of "HOSTILE": The villagers were very hostile towards the visitors.',
        options: ["Friendly", "Aggressive", "Fierce", "Antagonistic"],
        answer: 0,
        explanation:
          '"Hostile" là thù địch, chống đối. Trái nghĩa là "Friendly" (thân thiện).',
      },
      {
        id: 47,
        question:
          'Choose the SYNONYM of "RELIABLE": We need a reliable partner for this overseas venture.',
        options: ["Dependable", "Unstable", "Unpredictable", "Deceptive"],
        answer: 0,
        explanation:
          '"Reliable" nghĩa là đáng tin cậy, đồng nghĩa với "Dependable".',
      },
      {
        id: 48,
        question:
          'Choose the ANTONYM of "CONCEAL": He tried to conceal the evidence from the police.',
        options: ["Reveal", "Hide", "Cover", "Disguise"],
        answer: 0,
        explanation:
          '"Conceal" là che giấu. Trái nghĩa là "Reveal" (tiết lộ, làm lộ ra).',
      },
      {
        id: 49,
        question:
          'Choose the SYNONYM of "FEASIBLE": The architect proposed a highly feasible building design.',
        options: ["Workable", "Impossible", "Impractical", "Unreasonable"],
        answer: 0,
        explanation:
          '"Feasible" nghĩa là khả thi, có thể thực hiện được, đồng nghĩa với "Workable".',
      },
      {
        id: 50,
        question:
          'Choose the ANTONYM of "EXPAND": The business decided to expand into European markets.',
        options: ["Shrink", "Enlarge", "Broaden", "Extend"],
        answer: 0,
        explanation:
          '"Expand" là mở rộng, gia tăng quy mô. Trái nghĩa là "Shrink" (thu hẹp lại).',
      },
    ],
  },
]

export const grammarTests = [
  // ==================== ĐỀ NGỮ PHÁP 1 ====================
  {
    id: "gram-1",
    title: "12 Thì trong tiếng Anh (Verb Tenses Mastery)",
    level: "Toàn diện (A2 - B2)",
    durationMinutes: 10,
    icon: "⏰",
    description:
      "Kiểm tra quy tắc chia động từ trong các thì Hiện tại, Quá khứ và Tương lai.",
    questions: [
      {
        id: 101,
        question:
          "By the time the fire brigade arrived, the neighbors _______ the fire.",
        options: [
          "put out",
          "had already put out",
          "are putting out",
          "will put out",
        ],
        answer: 1,
        explanation:
          'Hành động dập lửa xảy ra trước một thời điểm trong quá khứ ("By the time the fire brigade arrived") nên dùng thì Quá khứ hoàn thành (had + V3/ed).',
      },
      {
        id: 102,
        question:
          "She _______ in London for five years before moving to Paris in 2022.",
        options: ["has lived", "had lived", "lives", "will live"],
        answer: 1,
        explanation:
          "Việc sống ở London diễn ra và hoàn tất trước hành động chuyển đến Paris vào năm 2022 (quá khứ) nên dùng Quá khứ hoàn thành (had lived).",
      },
      {
        id: 103,
        question: "Look at those dark clouds! It _______ rain very soon.",
        options: ["is going to", "will", "is raining", "rains"],
        answer: 0,
        explanation:
          'Dự đoán tương lai dựa trên bằng chứng rõ ràng trước mắt ("dark clouds") dùng cấu trúc "be going to + V".',
      },
      {
        id: 104,
        question: "I _______ English every morning since I started my new job.",
        options: [
          "practiced",
          "have been practicing",
          "am practicing",
          "was practicing",
        ],
        answer: 1,
        explanation:
          'Dấu hiệu "since I started" chỉ hành động bắt đầu trong quá khứ và vẫn đang tiếp diễn liên tục đến hiện tại, dùng Hiện tại hoàn thành tiếp diễn (have been practicing).',
      },
      {
        id: 105,
        question:
          "At 8 PM yesterday, when you called me, I _______ dinner with my family.",
        options: ["have", "had", "was having", "am having"],
        answer: 2,
        explanation:
          'Một thời điểm xác định cụ thể trong quá khứ ("At 8 PM yesterday") dùng thì Quá khứ tiếp diễn (was/were + V-ing).',
      },
      {
        id: 106,
        question:
          "Water _______ at 100 degrees Celsius under standard atmospheric pressure.",
        options: ["boil", "boils", "is boiling", "has boiled"],
        answer: 1,
        explanation:
          "Diễn tả một chân lý, sự thật khoa học hiển nhiên luôn dùng thì Hiện tại đơn (boils).",
      },
      {
        id: 107,
        question: "This time next week, we _______ on a beach in Hawaii.",
        options: ["will sit", "will be sitting", "are sitting", "sat"],
        answer: 1,
        explanation:
          'Dấu hiệu "This time next week" (vào thời điểm này tuần tới) chỉ hành động đang diễn ra tại một thời điểm xác định trong tương lai: Tương lai tiếp diễn (will be + V-ing).',
      },
      {
        id: 108,
        question:
          "He _______ his keys; he cannot open the front door right now.",
        options: ["lost", "has lost", "had lost", "was losing"],
        answer: 1,
        explanation:
          "Hành động làm mất chìa khóa xảy ra không rõ thời gian nhưng để lại kết quả ở hiện tại (bây giờ không mở được cửa), dùng Hiện tại hoàn thành (has lost).",
      },
      {
        id: 109,
        question:
          "As soon as he _______ home tonight, he will give you a call.",
        options: ["gets", "will get", "got", "has gotten"],
        answer: 0,
        explanation:
          "Trong mệnh đề trạng ngữ chỉ thời gian (As soon as, When, After...), ta dùng Hiện tại đơn thay cho Tương lai đơn.",
      },
      {
        id: 110,
        question:
          "By the end of this year, Linda _______ at this university for a decade.",
        options: ["will work", "will have worked", "works", "worked"],
        answer: 1,
        explanation:
          'Dấu hiệu "By the end of this year" (Trước cuối năm nay) dùng thì Tương lai hoàn thành (will have + V3/ed) để diễn tả hành động hoàn thành trước một mốc trong tương lai.',
      },
    ],
  },

  // ==================== ĐỀ NGỮ PHÁP 2 ====================
  {
    id: "gram-2",
    title: "Câu điều kiện & Câu ước (Conditionals & Wish)",
    level: "Trung cấp (B1 - B2)",
    durationMinutes: 10,
    icon: "⚡",
    description:
      "Kiểm tra câu điều kiện loại 0, 1, 2, 3, hỗn hợp và cấu trúc câu ước Wish.",
    questions: [
      {
        id: 111,
        question:
          "If I _______ you, I would accept the job offer in Singapore.",
        options: ["am", "was", "were", "have been"],
        answer: 2,
        explanation:
          'Câu điều kiện loại 2 giả định trái ngược với hiện tại: If + S + were/V-ed, S + would/could + V. Trong văn phong chuẩn, "were" dùng cho mọi ngôi.',
      },
      {
        id: 112,
        question:
          "If she had studied harder for the final exam, she _______ the scholarship.",
        options: ["would win", "would have won", "will win", "wins"],
        answer: 1,
        explanation:
          "Câu điều kiện loại 3 giả định trái với quá khứ: If + had + V3/ed, S + would have + V3/ed.",
      },
      {
        id: 113,
        question:
          "Unless it _______ heavily tomorrow, we will go on our scheduled hike.",
        options: ["rains", "will rain", "rained", "is raining"],
        answer: 0,
        explanation:
          '"Unless" = "If ... not". Mệnh đề sau Unless tuân thủ thì hiện tại đơn trong câu điều kiện loại 1.',
      },
      {
        id: 114,
        question:
          "I wish I _______ more time to travel around Southeast Asia right now.",
        options: ["have", "had", "will have", "have had"],
        answer: 1,
        explanation:
          'Ước một điều trái ngược với hiện tại ("right now") lùi về thì Quá khứ đơn: S + wish + S + V-ed/had.',
      },
      {
        id: 115,
        question:
          "If you heat ice to above zero degrees, it _______ into liquid water.",
        options: ["melts", "will melt", "melted", "would melt"],
        answer: 0,
        explanation:
          "Câu điều kiện loại 0 diễn tả chân lý, quy luật vật lý tự nhiên: If + S + V(hiện tại), S + V(hiện tại).",
      },
      {
        id: 116,
        question:
          "If they _______ the warning signs yesterday, they wouldn’t be lost in the forest now.",
        options: ["heeded", "had heeded", "heed", "have heeded"],
        answer: 1,
        explanation:
          'Câu điều kiện hỗn hợp (Mixed conditional): Giả định quá khứ ("yesterday" -> had heeded), kết quả ảnh hưởng hiện tại ("now" -> wouldn\'t be).',
      },
      {
        id: 117,
        question:
          "I wish you _______ interrupting me while I am trying to explain the solution.",
        options: ["will stop", "would stop", "stop", "have stopped"],
        answer: 1,
        explanation:
          'Cấu trúc "S + wish + S + would + V" dùng để phàn nàn và mong muốn ai đó thay đổi hành vi gây khó chịu.',
      },
      {
        id: 118,
        question:
          "Provided that you _______ the terms of use, you may access the library.",
        options: ["respect", "respected", "will respect", "had respected"],
        answer: 0,
        explanation:
          '"Provided that / As long as" mang nghĩa "miễn là / với điều kiện là", đóng vai trò như mệnh đề If trong điều kiện loại 1.',
      },
      {
        id: 119,
        question: "Tom regrets selling his motorbike. He wishes he _______ it.",
        options: ["didn’t sell", "hadn’t sold", "doesn’t sell", "won’t sell"],
        answer: 1,
        explanation:
          'Ước trái ngược với một hành động đã xảy ra trong quá khứ ("regrets selling") lùi về Quá khứ hoàn thành: S + wish + had + V3/ed.',
      },
      {
        id: 120,
        question: "If water is heated to 100 degrees Celsius, it _______.",
        options: [
          "evaporates",
          "would evaporate",
          "evaporated",
          "had evaporated",
        ],
        answer: 0,
        explanation:
          "Sự thật khoa học hiển nhiên (Zero conditional) dùng thì hiện tại đơn cho cả 2 mệnh đề: evaporates.",
      },
    ],
  },

  // ==================== ĐỀ NGỮ PHÁP 3 ====================
  {
    id: "gram-3",
    title: "Câu Bị Động & Cấu Trúc Nhờ Vả (Passive & Causatives)",
    level: "Trung cấp (B1 - B2)",
    durationMinutes: 10,
    icon: "🏗️",
    description:
      "Kiểm tra các dạng bị động theo thì, bị động đặc biệt và cấu trúc thể sai khiến (have/get).",
    questions: [
      {
        id: 121,
        question:
          "The historic bridge _______ by international architects right now.",
        options: [
          "is restored",
          "is being restored",
          "has restored",
          "was restored",
        ],
        answer: 1,
        explanation:
          'Dấu hiệu "right now" chỉ hành động đang diễn ra, bị động của thì Hiện tại tiếp diễn: am/is/are + being + V3/ed.',
      },
      {
        id: 122,
        question:
          "She had her computer _______ by a certified IT technician yesterday.",
        options: ["repair", "repaired", "repairing", "to repair"],
        answer: 1,
        explanation:
          'Cấu trúc thể sai khiến bị động: "have + something + V3/ed" (nhờ ai làm gì cho món đồ đó).',
      },
      {
        id: 123,
        question:
          "It is reported that the missing painting _______ in an abandoned warehouse.",
        options: ["has found", "has been found", "was finding", "finds"],
        answer: 1,
        explanation: "Bức tranh được tìm thấy (bị động): has been found.",
      },
      {
        id: 124,
        question: "He got his brother _______ his homework last night.",
        options: ["help", "to help", "helped", "helping"],
        answer: 1,
        explanation:
          'Cấu trúc nhờ vả chủ động với "get": "get + someone + TO V" (thuyết phục ai làm gì). Khác với "have + someone + V nguyên thể".',
      },
      {
        id: 125,
        question:
          "The famous novel _______ into more than forty languages worldwide so far.",
        options: [
          "has been translated",
          "was translated",
          "translated",
          "is translating",
        ],
        answer: 0,
        explanation:
          'Dấu hiệu "so far" chỉ Hiện tại hoàn thành, kết hợp dạng bị động: has been + V3/ed.',
      },
      {
        id: 126,
        question:
          "All safety gear must _______ before entering the construction site.",
        options: ["wear", "be worn", "to wear", "worn"],
        answer: 1,
        explanation:
          'Bị động với động từ khuyết thiếu (modal verbs): modal + BE + V3/ed ("must be worn").',
      },
      {
        id: 127,
        question:
          "The manager had the assistant _______ copies of the quarterly agenda.",
        options: ["make", "to make", "made", "making"],
        answer: 0,
        explanation:
          'Cấu trúc thể sai khiến chủ động với "have": "have + someone + V nguyên thể" (giao nhiệm vụ cho ai làm gì).',
      },
      {
        id: 128,
        question: "The parcels are said _______ delivered before noon today.",
        options: ["to be", "be", "being", "having been"],
        answer: 0,
        explanation:
          'Cấu trúc bị động khách quan: "S + be said + to be + V3/ed".',
      },
      {
        id: 129,
        question:
          "The car broke down on the highway, so we had to have it _______ away.",
        options: ["tow", "towed", "to tow", "towing"],
        answer: 1,
        explanation:
          "Thể sai khiến bị động: have + something (it = chiếc xe) + V3/ed (towed).",
      },
      {
        id: 130,
        question:
          "Neither of the suspects was seen _______ the building last night.",
        options: ["enter", "to enter", "entered", "enters"],
        answer: 1,
        explanation:
          'Động từ giác quan (see/hear/watch) khi chuyển sang câu bị động phải dùng "be seen + TO V".',
      },
    ],
  },

  // ==================== ĐỀ NGỮ PHÁP 4 ====================
  {
    id: "gram-4",
    title: "Mệnh đề quan hệ & Rút gọn (Relative Clauses)",
    level: "Trung cấp - Nâng cao (B2)",
    durationMinutes: 10,
    icon: "🔗",
    description:
      "Kiểm tra đại từ quan hệ (who, whom, which, whose, that) và các cách rút gọn mệnh đề quan hệ.",
    questions: [
      {
        id: 131,
        question:
          "The woman _______ daughter won the national chess championship is my neighbor.",
        options: ["who", "whom", "whose", "which"],
        answer: 2,
        explanation:
          '"Whose" là đại từ quan hệ chỉ sở hữu ("whose daughter" = con gái của người phụ nữ đó).',
      },
      {
        id: 132,
        question:
          "The students _______ in the front row are taking detailed notes.",
        options: ["sit", "sitting", "sat", "are sat"],
        answer: 1,
        explanation:
          "Rút gọn mệnh đề quan hệ dạng chủ động (who are sitting -> sitting).",
      },
      {
        id: 133,
        question:
          "The luxury apartment, _______ overlooks West Lake, was sold for two million dollars.",
        options: ["which", "that", "where", "whose"],
        answer: 0,
        explanation:
          'Trong mệnh đề quan hệ không xác định (có dấu phẩy), không được dùng "that", phải dùng "which" để chỉ đồ vật.',
      },
      {
        id: 134,
        question:
          "The laptop _______ on that desk belongs to our new team leader.",
        options: ["placing", "placed", "is placed", "which placed"],
        answer: 1,
        explanation:
          "Rút gọn mệnh đề quan hệ dạng bị động (which is placed -> placed).",
      },
      {
        id: 135,
        question:
          "Neil Armstrong was the first person _______ on the surface of the Moon.",
        options: ["walking", "to walk", "walked", "walk"],
        answer: 1,
        explanation:
          'Sau các từ số thứ tự (the first, the second...), the only, so sánh nhất... ta rút gọn mệnh đề quan hệ bằng "TO V" (to walk).',
      },
      {
        id: 136,
        question:
          "The candidate with _______ you spoke this morning has confirmed the interview.",
        options: ["who", "whom", "that", "which"],
        answer: 1,
        explanation:
          'Sau giới từ ("with"), đại từ quan hệ chỉ người bắt buộc phải là "whom".',
      },
      {
        id: 137,
        question:
          "Do you remember the peaceful coastal town _______ we stayed three years ago?",
        options: ["which", "that", "where", "when"],
        answer: 2,
        explanation:
          '"Where" thay thế cho trạng ngữ chỉ nơi chốn (ở thị trấn đó chúng ta đã lưu trú).',
      },
      {
        id: 138,
        question:
          "All applications _______ after the 5 PM deadline will be automatically rejected.",
        options: [
          "submitting",
          "submitted",
          "are submitted",
          "which submitted",
        ],
        answer: 1,
        explanation:
          'Rút gọn mệnh đề quan hệ bị động: "applications (which are) submitted".',
      },
      {
        id: 139,
        question:
          "She showed me the beautiful gold ring, _______ was gifted by her grandmother.",
        options: ["that", "which", "what", "whose"],
        answer: 1,
        explanation:
          'Có dấu phẩy (mệnh đề không xác định) bổ nghĩa cho danh từ vật "gold ring", dùng "which".',
      },
      {
        id: 140,
        question:
          "He is the only doctor in our hospital _______ perform this complex surgery.",
        options: ["who can", "to can", "whom can", "whose"],
        answer: 0,
        explanation:
          'Đại từ quan hệ "who" làm chủ ngữ cho mệnh đề tiếp theo "can perform".',
      },
    ],
  },

  // ==================== ĐỀ NGỮ PHÁP 5 ====================
  {
    id: "gram-5",
    title:
      "Modals, Gerunds & To-Infinitive (Động từ khiếm khuyết & Danh động từ)",
    level: "Trung cấp (B1 - B2)",
    durationMinutes: 10,
    icon: "🎯",
    description:
      "Kiểm tra quy tắc dùng V-ing, To-V, và các động từ khuyết thiếu (Must, Should, Could, May).",
    questions: [
      {
        id: 141,
        question:
          "She decided _______ to another city to pursue her master’s degree.",
        options: ["move", "moving", "to move", "moved"],
        answer: 2,
        explanation:
          'Động từ "decide" luôn đi với "to-infinitive": decide to do something.',
      },
      {
        id: 142,
        question: "He admitted _______ money from the office safe last Friday.",
        options: ["steal", "stealing", "to steal", "stole"],
        answer: 1,
        explanation:
          'Động từ "admit" đi kèm V-ing: admit doing something (thừa nhận đã làm gì).',
      },
      {
        id: 143,
        question:
          "The lights are off and no one answers the door. They _______ be asleep.",
        options: ["must", "can’t", "should", "need"],
        answer: 0,
        explanation:
          'Suy đoán logic chắc chắn ở hiện tại dựa trên căn cứ rõ ràng dùng "must + V" (chắc hẳn là).',
      },
      {
        id: 144,
        question:
          "I vividly remember _______ off the stove before locking the front door.",
        options: ["turn", "to turn", "turning", "turned"],
        answer: 2,
        explanation:
          '"Remember + V-ing" nghĩa là nhớ đã làm việc gì trong quá khứ. Khác với "remember to do" là nhớ phải làm việc gì.',
      },
      {
        id: 145,
        question:
          "You _______ bring an umbrella; the weather forecast predicts sunshine all day.",
        options: ["must not", "needn’t", "should", "ought to"],
        answer: 1,
        explanation:
          '"Needn’t" nghĩa là không cần thiết phải làm gì (vì trời nắng cả ngày). "Must not" là cấm đoán.',
      },
      {
        id: 146,
        question:
          "They look forward to _______ their grandparents in the countryside this weekend.",
        options: ["visit", "visiting", "visited", "to visit"],
        answer: 1,
        explanation:
          'Cấu trúc "look forward to + V-ing" (trong đó to là giới từ).',
      },
      {
        id: 147,
        question:
          "The doctor advised him _______ down on sugary drinks to improve his blood pressure.",
        options: ["cut", "cutting", "to cut", "cuts"],
        answer: 2,
        explanation: 'Cấu trúc "advise someone + TO V" (khuyên ai làm gì).',
      },
      {
        id: 148,
        question:
          "He failed the exam because he didn’t study. He _______ harder.",
        options: [
          "should study",
          "should have studied",
          "must have studied",
          "can study",
        ],
        answer: 1,
        explanation:
          '"Should have + V3/ed" diễn tả sự tiếc nuối hoặc trách móc một việc lẽ ra nên làm trong quá khứ nhưng đã không làm.',
      },
      {
        id: 149,
        question: "It is no use _______ over spilled milk.",
        options: ["cry", "crying", "to cry", "cried"],
        answer: 1,
        explanation:
          'Cấu trúc thành ngữ cố định "It is no use + V-ing" (chẳng ích gì khi...).',
      },
      {
        id: 150,
        question:
          "We stopped on the highway _______ some petrol at the service station.",
        options: ["buy", "buying", "to buy", "bought"],
        answer: 2,
        explanation:
          '"Stop to do something" là dừng lại để làm việc gì (mục đích). Khác với "stop doing something" là ngừng hẳn một thói quen/hành động.',
      },
    ],
  },
]
