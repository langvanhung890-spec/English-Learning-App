export const listeningCategories = [
  { id: "all", name: "Tất cả bài nghe" },
  { id: "daily", name: "Hội thoại đời sống" },
  { id: "toeic", name: "TOEIC Doanh nghiệp" },
  { id: "ielts", name: "IELTS Học thuật" },
  { id: "podcast", name: "Podcast Khoa học & Xã hội" },
]

export const longListeningExercises = [
  // ==================== BÀI 1: HỘI THOẠI ĐỜI SỐNG DÀI ====================
  {
    id: 1,
    category: "daily",
    title: "Planning a Summer Vacation across Europe",
    level: "Cơ bản - Trung cấp",
    duration: "3:45",
    topic: "Travel & Vacation Planning",
    icon: "✈️",
    levelColor: "#10B981",
    levelBg: "#D1FAE5",
    summary:
      "Cuộc trò chuyện giữa Emily và David khi họ cùng nhau lên kế hoạch cho chuyến đi du lịch châu Âu vào mùa hè này.",
    keyVocabulary: [
      {
        word: "Itinerary",
        phonetic: "/aɪˈtɪnərəri/",
        meaning: "Lịch trình du lịch",
      },
      { word: "Scenic", phonetic: "/ˈsiːnɪk/", meaning: "Cảnh quan tuyệt đẹp" },
      { word: "Budget", phonetic: "/ˈbʌdʒɪt/", meaning: "Ngân sách tài chính" },
    ],
    transcript: `Emily: Hey David, have you finalized any details for our upcoming European holiday yet? July is right around the corner!
David: Yes, Emily! I spent the entire weekend researching flight deals and train passes. If we purchase the Eurail Pass by Friday, we can save nearly twenty percent on all cross-border travel between France, Switzerland, and Italy.
Emily: That sounds fantastic! Which city should be our initial destination?
David: I recommend starting in Paris for three days to see the museums and historical landmarks. From there, we can take a high-speed train directly into the Swiss Alps for hiking and scenic lake tours.
Emily: I love that idea. But what about our accommodation? Summer is peak travel season, so hotels might be completely booked.
David: Don't worry, I found charming guest houses near the central train stations. They are affordable, highly rated, and include complimentary breakfast every morning. Let's confirm the bookings tonight!`,
    transcriptVi: `Emily: Này David, bạn đã chốt chi tiết nào cho kỳ nghỉ châu Âu sắp tới chưa? Tháng Bảy đã cận kề rồi đấy!
David: Rồi chứ Emily! Mình đã dành cả cuối tuần để tìm kiếm vé máy bay giá tốt và vé tàu. Nếu chúng ta mua thẻ Eurail Pass trước thứ Sáu, chúng ta có thể tiết kiệm gần 20% cho toàn bộ việc di chuyển qua lại giữa Pháp, Thụy Sĩ và Ý.
Emily: Nghe tuyệt quá! Thành phố nào sẽ là điểm đến đầu tiên của chúng ta?
David: Mình khuyên nên bắt đầu ở Paris trong 3 ngày để tham quan các bảo tàng và di tích lịch sử. Từ đó, chúng ta có thể đi tàu cao tốc thẳng đến dãy Alps của Thụy Sĩ để đi bộ đường dài và ngắm cảnh hồ.
Emily: Mình thích ý tưởng đó. Nhưng còn chỗ ở thì sao? Mùa hè là mùa cao điểm du lịch nên các khách sạn có thể đã kín phòng.
David: Đừng lo, mình đã tìm thấy những nhà nghỉ ấm cúng gần các ga xe lửa trung tâm. Giá cả phải chăng, được đánh giá cao và có cả bữa sáng miễn phí mỗi sáng. Tối nay chúng mình hãy chốt đặt phòng luôn nhé!`,
    questions: [
      {
        id: 101,
        question:
          "How can David and Emily save approximately 20% on transportation?",
        options: [
          "By reserving plane tickets two months earlier",
          "By purchasing the Eurail Pass before Friday",
          "By renting a private car in Switzerland",
          "By traveling during late autumn instead of July",
        ],
        correct: 1,
        explanation:
          'David nói: "If we purchase the Eurail Pass by Friday, we can save nearly twenty percent on all cross-border travel."',
      },
      {
        id: 102,
        question: "What activity do they plan to do in the Swiss Alps?",
        options: [
          "Attend an international film festival",
          "Shop at luxury designer boutiques",
          "Go hiking and take scenic lake tours",
          "Learn how to bake traditional pastries",
        ],
        correct: 2,
        explanation:
          'David đề xuất: "take a high-speed train directly into the Swiss Alps for hiking and scenic lake tours."',
      },
      {
        id: 103,
        question: "What advantage do the selected guest houses offer?",
        options: [
          "Free airport shuttle and gym access",
          "Affordable rates, high ratings, and free breakfast",
          "Private swimming pools in every room",
          "Free tickets to the Louvre museum",
        ],
        correct: 1,
        explanation:
          'David nói: "They are affordable, highly rated, and include complimentary breakfast every morning."',
      },
    ],
  },

  // ==================== BÀI 2: TOEIC DOANH NGHIỆP ====================
  {
    id: 2,
    category: "toeic",
    title: "Quarterly Corporate Sales Review & Strategy",
    level: "TOEIC 750+",
    duration: "4:20",
    topic: "Business Meeting & Revenue Analysis",
    icon: "💼",
    levelColor: "#3B82F6",
    levelBg: "#DBEAFE",
    summary:
      "Báo cáo tổng kết tình hình kinh doanh quý 2 của Giám đốc điều hành trước ban quản trị công ty.",
    keyVocabulary: [
      { word: "Revenue", phonetic: "/ˈrevənjuː/", meaning: "Doanh thu" },
      {
        word: "Overhaul",
        phonetic: "/ˈəʊvəhɔːl/",
        meaning: "Cải tổ toàn diện",
      },
      {
        word: "Customer retention",
        phonetic: "/rɪˈtenʃn/",
        meaning: "Giữ chân khách hàng",
      },
    ],
    transcript: `Good morning, members of the executive committee. Today, I am proud to report that our second-quarter financial performance surpassed our initial projections. Total corporate revenue reached twelve point eight million dollars, representing a fourteen percent year-over-year increase.
This impressive growth was primarily propelled by our newly redesigned mobile application, which registered over two hundred thousand downloads within its first sixty days. Furthermore, our subscription renewals climbed by eighteen percent, reflecting notable enhancements in customer retention.
However, we must address the rising operational expenditures in our logistics department. Due to fuel surcharges and overseas warehouse rent, international shipping costs increased by nearly twelve percent.
To mitigate these pressures in the third quarter, management proposes partnering with domestic fulfillment centers across Southeast Asia. This transition will lower transport expenses and accelerate delivery timelines by thirty percent.`,
    transcriptVi: `Kính chào quý vị thành viên ban điều hành. Hôm nay, tôi tự hào thông báo rằng kết quả tài chính quý 2 của chúng ta đã vượt qua dự báo ban đầu. Tổng doanh thu doanh nghiệp đạt 12,8 triệu đô la, tương đương mức tăng trưởng 14% so với cùng kỳ năm ngoái.
Sự tăng trưởng ấn tượng này chủ yếu được thúc đẩy bởi ứng dụng di động mới được tái thiết kế của chúng ta, ghi nhận hơn 200.000 lượt tải chỉ trong vòng 60 ngày đầu tiên. Hơn nữa, lượng gia hạn gói đăng ký đã tăng 18%, phản ánh sự cải thiện rõ rệt trong việc giữ chân khách hàng.
Tuy nhiên, chúng ta cần giải quyết chi phí vận hành ngày càng tăng ở bộ phận hậu cần. Do phụ phí nhiên liệu và giá thuê kho bãi ở nước ngoài, chi phí vận chuyển quốc tế đã tăng gần 12%.
Để giảm thiểu những áp lực này trong quý 3, ban quản lý đề xuất hợp tác với các trung tâm kho vận nội địa trên khắp Đông Nam Á. Sự chuyển dịch này sẽ giúp hạ thấp chi phí vận chuyển và rút ngắn thời gian giao hàng 30%.`,
    questions: [
      {
        id: 201,
        question:
          "What was the primary driver of the company revenue growth in Q2?",
        options: [
          "A massive reduction in staff salaries",
          "The newly redesigned mobile application",
          "Opening twenty physical retail stores",
          "Increasing the price of all existing items",
        ],
        correct: 1,
        explanation:
          'Bài nói nêu rõ: "This impressive growth was primarily propelled by our newly redesigned mobile application."',
      },
      {
        id: 202,
        question: "Which department experienced an increase in expenditures?",
        options: [
          "Marketing department",
          "Human resources department",
          "Logistics department",
          "Legal affairs department",
        ],
        correct: 2,
        explanation:
          'Diễn giả nhắc đến: "we must address the rising operational expenditures in our logistics department."',
      },
      {
        id: 203,
        question:
          "What solution does management propose for the third quarter?",
        options: [
          "Cancelling all overseas customer orders",
          "Partnering with domestic fulfillment centers in Southeast Asia",
          "Raising delivery fees charged to consumers",
          "Shutting down international distribution completely",
        ],
        correct: 1,
        explanation:
          'Ban quản lý đề xuất: "partnering with domestic fulfillment centers across Southeast Asia."',
      },
      {
        id: 204,
        question:
          "How much faster will delivery timelines become with the proposed strategy?",
        options: ["By 15%", "By 20%", "By 30%", "By 50%"],
        correct: 2,
        explanation:
          'Đoạn cuối khẳng định: "accelerate delivery timelines by thirty percent."',
      },
    ],
  },

  // ==================== BÀI 3: IELTS HỌC THUẬT DÀI ====================
  {
    id: 3,
    category: "ielts",
    title: "Marine Biology: Coral Reef Conservation",
    level: "IELTS 6.5+",
    duration: "5:10",
    topic: "Environmental Science & Ocean Conservation",
    icon: "🌊",
    levelColor: "#7C3AED",
    levelBg: "#EDE9FE",
    summary:
      "Bài giảng học thuật của Giáo sư Martin về hiện tượng tẩy trắng san hô và các giải pháp phục hồi hệ sinh thái biển.",
    keyVocabulary: [
      {
        word: "Bleaching",
        phonetic: "/ˈbliːtʃɪŋ/",
        meaning: "Hiện tượng tẩy trắng",
      },
      { word: "Symbiotic", phonetic: "/ˌsɪmbaɪˈɒtɪk/", meaning: "Cộng sinh" },
      {
        word: "Micro-fragmentation",
        phonetic: "/ˌmaɪkrəʊˌfræɡmənˈteɪʃn/",
        meaning: "Kỹ thuật vi phân đoạn san hô",
      },
    ],
    transcript: `Welcome everyone to our marine ecology lecture. Today, we delve into one of the most pressing ecological crises: coral reef bleaching. Coral reefs support roughly twenty-five percent of all marine species, despite covering less than point one percent of the ocean floor.
The mechanism behind bleaching involves microscopic algae called zooxanthellae. These algae live symbiotically within coral tissues, providing corals with oxygen, nutrients, and their characteristic vibrant colours. However, when ocean temperatures rise by merely one to two degrees Celsius above historical averages, corals experience acute thermal stress. In response, they expel these algae, turning completely white and starving.
Fortunately, marine biologists have pioneered an innovative restoration technique known as micro-fragmentation. By breaking coral colonies into tiny fragments of one to three centimeters, researchers trigger an accelerated healing mechanism that stimulates growth up to forty times faster than natural reproduction. When planted onto artificial limestone reefs, these resilient fragments regenerate flourishing marine habitats within a few years.`,
    transcriptVi: `Chào mừng tất cả các em đến với bài giảng sinh thái biển hôm nay. Chúng ta sẽ cùng tìm hiểu về một trong những cuộc khủng hoảng sinh thái cấp bách nhất: hiện tượng tẩy trắng rạn san hô. Các rạn san hô nuôi dưỡng khoảng 25% các loài sinh vật biển, mặc dù chúng chỉ bao phủ chưa đầy 0,1% đáy đại dương.
Cơ chế đằng sau việc tẩy trắng liên quan đến một loại tảo vi mô có tên là zooxanthellae. Loại tảo này sống cộng sinh trong các mô san hô, cung cấp cho san hô oxy, chất dinh dưỡng và màu sắc rực rỡ đặc trưng. Tuy nhiên, khi nhiệt độ đại dương chỉ tăng từ 1 đến 2 độ C so với mức trung bình lịch sử, san hô sẽ bị căng thẳng nhiệt nghiêm trọng. Để đối phó, chúng trục xuất các loài tảo này ra ngoài, trở nên trắng bệch hoàn toàn và bị đói.
May mắn thay, các nhà sinh học biển đã đi tiên phong trong một kỹ thuật phục hồi cải tiến được gọi là vi phân đoạn (micro-fragmentation). Bằng cách bẻ các tập đoàn san hô thành những mảnh nhỏ từ 1 đến 3 cm, các nhà nghiên cứu kích hoạt một cơ chế chữa lành cấp tốc giúp kích thích tốc độ sinh trưởng nhanh gấp 40 lần so với sinh sản tự nhiên. Khi được cấy lên các rạn đá vôi nhân tạo, những mảnh san hô kiên cường này tái tạo các môi trường sống biển trù phú chỉ trong vài năm.`,
    questions: [
      {
        id: 301,
        question: "What percentage of marine species do coral reefs support?",
        options: [
          "Less than 1%",
          "Approximately 10%",
          "Roughly 25%",
          "Over 50%",
        ],
        correct: 2,
        explanation:
          'Giáo sư Martin khẳng định: "Coral reefs support roughly twenty-five percent of all marine species."',
      },
      {
        id: 302,
        question:
          "What happens when ocean temperatures increase by 1 to 2 degrees Celsius?",
        options: [
          "Corals grow twice as fast",
          "Corals expel their symbiotic algae and turn white",
          "Fish migrate away from the ocean entirely",
          "Sea levels immediately drop",
        ],
        correct: 1,
        explanation:
          'Bài giảng giải thích: "when ocean temperatures rise by merely one to two degrees Celsius... they expel these algae, turning completely white."',
      },
      {
        id: 303,
        question:
          "How fast do coral fragments grow when using micro-fragmentation?",
        options: [
          "Five times slower than normal",
          "At the exact same speed as wild corals",
          "Up to forty times faster than natural reproduction",
          "One hundred times faster",
        ],
        correct: 2,
        explanation:
          'Giáo sư nêu: "stimulates growth up to forty times faster than natural reproduction."',
      },
    ],
  },

  // ==================== BÀI 4: PODCAST CÔNG NGHỆ ====================
  {
    id: 4,
    category: "podcast",
    title: "The Future of AI and Everyday Productivity",
    level: "Nâng cao",
    duration: "4:45",
    topic: "Artificial Intelligence & Career Evolution",
    icon: "🎙️",
    levelColor: "#F59E0B",
    levelBg: "#FEF3C7",
    summary:
      "Cuộc trò chuyện podcast thảo luận về vai trò của Trí tuệ nhân tạo đối với năng suất làm việc và thị trường lao động tương lai.",
    keyVocabulary: [
      {
        word: "Automation",
        phonetic: "/ˌɔːtəˈmeɪʃn/",
        meaning: "Sự tự động hóa",
      },
      { word: "Augment", phonetic: "/ɔːɡˈment/", meaning: "Gia tăng, bổ trợ" },
      {
        word: "Critical thinking",
        phonetic: "/ˈkrɪtɪkl/",
        meaning: "Tư duy phản biện",
      },
    ],
    transcript: `Host: Welcome back to Tech Horizons Podcast. Today, Dr. Elena Ramos joins us to discuss generative artificial intelligence and the changing workplace. Dr. Ramos, will AI displace millions of jobs, or should professionals view it differently?
Dr. Ramos: That is the pivotal question of this decade. Historically, every major technological leap — from the steam engine to personal computers — provoked fears of mass unemployment. However, empirical data suggests that rather than replacing human workers outright, AI serves primarily as an intellectual augment.
Routine and repetitive tasks such as drafting standard correspondence, scheduling appointments, and analyzing large datasets can now be executed within seconds. This frees knowledge workers to focus on higher-level creative strategy, emotional intelligence, and cross-disciplinary critical thinking — areas where synthetic models consistently fall short.
The workers who will thrive in the next decade are not those who resist artificial intelligence, but those who master collaborating with these tools as dependable cognitive assistants.`,
    transcriptVi: `Người dẫn chương trình: Chào mừng quý vị quay trở lại với Tech Horizons Podcast. Hôm nay, Tiến sĩ Elena Ramos tham gia cùng chúng ta để thảo luận về trí tuệ nhân tạo tạo sinh và nơi làm việc đang thay đổi. Thưa Tiến sĩ Ramos, liệu AI có thay thế hàng triệu việc làm hay các chuyên gia nên nhìn nhận vấn đề này theo cách khác?
Tiến sĩ Ramos: Đó chính là câu hỏi then chốt của thập kỷ này. Trong lịch sử, mọi bước nhảy vọt công nghệ lớn — từ động cơ hơi nước đến máy tính cá nhân — đều làm dấy lên nỗi sợ hãi về nạn thất nghiệp hàng loạt. Tuy nhiên, các dữ liệu thực nghiệm cho thấy thay vì thay thế hoàn toàn người lao động, AI chủ yếu đóng vai trò như một công cụ hỗ trợ và gia tăng trí tuệ.
Những công việc thông thường và mang tính lặp đi lặp lại như soạn thư tín tiêu chuẩn, lên lịch hẹn và phân tích các tập dữ liệu lớn giờ đây có thể được thực hiện chỉ trong vài giây. Điều này giải phóng những người làm việc trí óc để tập trung vào chiến lược sáng tạo cấp cao hơn, trí tuệ cảm xúc và tư duy phản biện liên ngành — những lĩnh vực mà các mô hình nhân tạo luôn thiếu sót.
Những người lao động sẽ phát triển vượt bậc trong thập kỷ tới không phải là những người bài trừ trí tuệ nhân tạo, mà là những người thành thạo trong việc hợp tác với các công cụ này như những trợ lý nhận thức đáng tin cậy.`,
    questions: [
      {
        id: 401,
        question:
          "According to Dr. Ramos, what role does AI primarily serve in the modern workplace?",
        options: [
          "An outright replacement for all creative jobs",
          "An intellectual augment to support human workers",
          "A recreational entertainment gaming device",
          "A tool exclusively designed for hardware engineers",
        ],
        correct: 1,
        explanation:
          'Tiến sĩ Ramos khẳng định: "AI serves primarily as an intellectual augment."',
      },
      {
        id: 402,
        question:
          "Which of the following tasks is AI described as being able to do within seconds?",
        options: [
          "Perform physical surgery without supervision",
          "Draft standard letters and analyze large datasets",
          "Negotiate international peace treaties",
          "Build physical residential homes",
        ],
        correct: 1,
        explanation:
          'Tiến sĩ nêu ví dụ: "Routine and repetitive tasks such as drafting standard correspondence... and analyzing large datasets can now be executed within seconds."',
      },
      {
        id: 403,
        question:
          "Which skills remain areas where synthetic AI models consistently fall short?",
        options: [
          "Calculating math equations rapidly",
          "Storing millions of gigabytes of text",
          "Emotional intelligence and creative critical thinking",
          "Converting audio speech to text format",
        ],
        correct: 2,
        explanation:
          'Tiến sĩ giải thích: "emotional intelligence, and cross-disciplinary critical thinking — areas where synthetic models consistently fall short."',
      },
      {
        id: 404,
        question:
          "Who will thrive the most in the upcoming decade according to the speaker?",
        options: [
          "Those who strictly prohibit AI in their companies",
          "Those who master collaborating with AI tools",
          "Only individuals with doctoral degrees in computer science",
          "Workers who avoid using digital computers",
        ],
        correct: 1,
        explanation:
          'Đoạn kết nhấn mạnh: "The workers who will thrive... are those who master collaborating with these tools as dependable cognitive assistants."',
      },
    ],
  },

  // ==================== BÀI 5: KHOA HỌC SỨC KHỎE ====================
  {
    id: 5,
    category: "daily",
    title: "Sleep Science and Mental Productivity",
    level: "Trung cấp",
    duration: "3:50",
    topic: "Health & Brain Optimization",
    icon: "🧠",
    levelColor: "#10B981",
    levelBg: "#D1FAE5",
    summary:
      "Bài chia sẻ về cơ chế sinh học của giấc ngủ sâu và cách cải thiện sự tập trung cho học sinh, sinh viên.",
    keyVocabulary: [
      {
        word: "Circadian rhythm",
        phonetic: "/sɜːˈkeɪdiən/",
        meaning: "Nhịp sinh học",
      },
      {
        word: "Cognitive",
        phonetic: "/ˈkɒɡnətɪv/",
        meaning: "Thuộc về nhận thức",
      },
      {
        word: "Melatonin",
        phonetic: "/ˌmeləˈtəʊnɪn/",
        meaning: "Hormone điều hòa giấc ngủ",
      },
    ],
    transcript: `Good evening listeners. Many learners mistakenly believe that staying up late into the early morning hours to cram vocabulary is the fastest way to master a foreign language. However, neuroscience indicates that sleep is the exact phase when short-term memories are consolidated into long-term retention.
During deep REM sleep, the human brain replays newly acquired information, organizing vocabulary and grammatical patterns into neural networks. When individuals suffer from chronic sleep deprivation — sleeping less than seven hours per night — cognitive reaction time declines by as much as thirty percent, and memory recall weakens significantly.
Health experts advise maintaining a consistent circadian rhythm: go to bed and wake up at the exact same hour daily. In addition, avoiding blue light from mobile phone screens at least forty-five minutes before bedtime stimulates the natural release of melatonin, ensuring restorative, high-quality sleep.`,
    transcriptVi: `Chào buổi tối các thính giả. Nhiều người học lầm tưởng rằng thức khuya đến tận sáng sớm để nhồi nhét từ vựng là cách nhanh nhất để làm chủ một ngoại ngữ. Tuy nhiên, khoa học thần kinh chỉ ra rằng giấc ngủ chính là giai đoạn các ký ức ngắn hạn được củng cố thành khả năng ghi nhớ dài hạn.
Trong giấc ngủ sâu REM, bộ não con người phát lại các thông tin mới tiếp thu, sắp xếp từ vựng và cấu trúc ngữ pháp vào các mạng lưới thần kinh. Khi con người bị thiếu ngủ kinh niên — ngủ ít hơn 7 tiếng mỗi đêm — thời gian phản xạ nhận thức sẽ giảm tới 30%, và khả năng ghi nhớ bị suy giảm đáng kể.
Các chuyên gia sức khỏe khuyên nên duy trì nhịp sinh học nhất quán: đi ngủ và thức dậy vào cùng một khung giờ mỗi ngày. Thêm vào đó, việc tránh ánh sáng xanh từ màn hình điện thoại ít nhất 45 phút trước khi đi ngủ sẽ kích thích cơ thể tiết ra hormone melatonin tự nhiên, đảm bảo giấc ngủ phục hồi và chất lượng cao.`,
    questions: [
      {
        id: 501,
        question:
          "When are short-term memories converted into long-term retention?",
        options: [
          "While drinking caffeinated tea",
          "During deep REM sleep at night",
          "Immediately after finishing breakfast",
          "While jogging around the park",
        ],
        correct: 1,
        explanation:
          'Bài nghe giải thích: "sleep is the exact phase when short-term memories are consolidated into long-term retention."',
      },
      {
        id: 502,
        question:
          "How much does cognitive reaction time drop when suffering chronic sleep deprivation?",
        options: ["By 5%", "By 10%", "By up to 30%", "By over 75%"],
        correct: 2,
        explanation:
          'Tác giả nói: "cognitive reaction time declines by as much as thirty percent."',
      },
      {
        id: 503,
        question: "What habit is recommended 45 minutes prior to bedtime?",
        options: [
          "Avoid blue light from mobile phone screens",
          "Eat a large heavy dinner meal",
          "Complete an intensive 100-question exam",
          "Drink iced sugary beverages",
        ],
        correct: 0,
        explanation:
          'Khuyến nghị: "avoiding blue light from mobile phone screens at least forty-five minutes before bedtime."',
      },
    ],
  },

  // ==================== BÀI 6: SÂN BAY & DỊCH VỤ KHÁCH HÀNG ====================
  {
    id: 6,
    category: "daily",
    title: "Airport Flight Rescheduling & Travel Assistance",
    level: "Trung cấp",
    duration: "4:00",
    topic: "Airport Communication & Customer Care",
    icon: "🛫",
    levelColor: "#3B82F6",
    levelBg: "#DBEAFE",
    summary:
      "Tình huống xử lý đổi vé và sắp xếp khách sạn tại quầy dịch vụ hàng không do chuyến bay bị hủy vì thời tiết xấu.",
    keyVocabulary: [
      {
        word: "Compensation",
        phonetic: "/ˌkɒmpenˈseɪʃn/",
        meaning: "Sự bồi thường",
      },
      {
        word: "Connecting flight",
        phonetic: "/kəˈnektɪŋ/",
        meaning: "Chuyến bay nối chuyến",
      },
      {
        word: "Voucher",
        phonetic: "/ˈvaʊtʃə(r)/",
        meaning: "Phiếu ưu đãi, phiếu đổi dịch vụ",
      },
    ],
    transcript: `Passenger: Excuse me, officer. My flight, Pacific Air 204 to Tokyo, was just listed as cancelled on the departure board. I have a critical connecting flight to San Francisco tomorrow morning!
Agent: I sincerely apologize for the inconvenience, sir. Severe thunderstorm activity over the northern corridor grounded several outbound flights for safety reasons. Let me inspect your booking confirmation right now.
Passenger: Is there any possibility of placing me on another partner airline this evening?
Agent: Fortunately, yes. There is an available seat on Star Airways Flight 88 leaving at nine thirty tonight. If I transfer your ticket now, you will reach Tokyo by midnight, allowing ample time for your morning flight to San Francisco.
Passenger: That is a tremendous relief! What happens with my checked luggage?
Agent: Our ground crew will automatically reroute your baggage onto the Star Airways aircraft. In addition, here is a twenty-dollar airport meal voucher for dinner while you wait at Gate B12.`,
    transcriptVi: `Hành khách: Xin lỗi cô nhân viên. Chuyến bay của tôi, Pacific Air 204 đi Tokyo, vừa bị thông báo hủy trên bảng khởi hành. Tôi có một chuyến bay nối chuyến vô cùng quan trọng đi San Francisco vào sáng mai!
Nhân viên: Tôi thành thật xin lỗi vì sự bất tiện này thưa ông. Giông bão dữ dội trên hành lang phía bắc đã khiến nhiều chuyến bay xuất phát phải hoãn lại vì lý do an toàn. Để tôi kiểm tra mã đặt chỗ của ông ngay bây giờ.
Hành khách: Liệu có khả năng chuyển tôi sang một hãng hàng không đối tác khác vào tối nay không?
Nhân viên: Thật may mắn là có, thưa ông. Có một ghế trống trên chuyến bay Star Airways 88 khởi hành lúc 9 giờ 30 tối nay. Nếu tôi chuyển vé cho ông ngay bây giờ, ông sẽ đến Tokyo vào nửa đêm, có nhiều thời gian cho chuyến bay sáng mai đi San Francisco.
Hành khách: Thật là nhẹ nhõm quá! Vậy còn hành lý ký gửi của tôi thì xử lý thế nào?
Nhân viên: Đội ngũ mặt đất của chúng tôi sẽ tự động chuyển hướng hành lý của ông sang máy bay của Star Airways. Ngoài ra, đây là phiếu ăn uống sân bay trị giá 20 đô la cho bữa tối trong khi ông đợi tại Cổng B12.`,
    questions: [
      {
        id: 601,
        question: "Why was Pacific Air Flight 204 cancelled?",
        options: [
          "Engine mechanical breakdown",
          "Severe thunderstorm weather conditions",
          "Staff strike at the airport",
          "Lack of passenger reservations",
        ],
        correct: 1,
        explanation:
          'Nhân viên giải thích: "Severe thunderstorm activity over the northern corridor grounded several outbound flights."',
      },
      {
        id: 602,
        question: "What alternative solution does the agent offer?",
        options: [
          "A train ticket to Tokyo next week",
          "A seat on Star Airways Flight 88 departing at 9:30 tonight",
          "A full refund with no replacement flight",
          "Waiting three days at the terminal",
        ],
        correct: 1,
        explanation:
          'Nhân viên thông báo: "There is an available seat on Star Airways Flight 88 leaving at nine thirty tonight."',
      },
      {
        id: 603,
        question:
          "What extra benefit does the customer receive while waiting at Gate B12?",
        options: [
          "A free overnight hotel suite",
          "A complimentary first-class upgrade",
          "A twenty-dollar airport meal voucher",
          "A discount coupon for luggage bags",
        ],
        correct: 2,
        explanation:
          'Nhân viên trao: "here is a twenty-dollar airport meal voucher for dinner while you wait at Gate B12."',
      },
    ],
  },
]
