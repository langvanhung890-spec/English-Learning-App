export const vocabularyCategories = [
  { id: "all", name: "Tất cả", emoji: "🌟" },
  { id: "ielts", name: "IELTS Academic", emoji: "🎓" },
  { id: "toeic", name: "TOEIC & Công sở", emoji: "💼" },
  { id: "daily", name: "Giao tiếp hàng ngày", emoji: "🗣️" },
  { id: "travel", name: "Du lịch & Khách sạn", emoji: "✈️" },
  { id: "tech", name: "Công nghệ & AI", emoji: "💻" },
  { id: "env", name: "Môi trường", emoji: "🌿" },
  { id: "health", name: "Sức khỏe & Y tế", emoji: "🩺" },
  { id: "food", name: "Ẩm thực & Đời sống", emoji: "🍔" },
]

export const vocabularyList = [
  // ==================== 1. IELTS ACADEMIC ====================
  {
    id: 1,
    word: "Resilience",
    phonetic: "/rɪˈzɪliəns/",
    partOfSpeech: "noun",
    meaning: "Khả năng phục hồi, sự kiên cường",
    example:
      "Courage and resilience are essential to overcome major life challenges.",
    exampleVi:
      "Lòng can đảm và sự kiên cường là cần thiết để vượt qua những thử thách lớn trong cuộc sống.",
    category: "ielts",
    categoryName: "IELTS Academic",
    level: "C1",
  },
  {
    id: 2,
    word: "Eloquent",
    phonetic: "/ˈeləkwənt/",
    partOfSpeech: "adjective",
    meaning: "Hùng hồn, lưu loát, truyền cảm",
    example: "The professor gave an eloquent lecture on modern literature.",
    exampleVi:
      "Giáo sư đã có một bài giảng rất hùng hồn và truyền cảm về văn học hiện đại.",
    category: "ielts",
    categoryName: "IELTS Academic",
    level: "C1",
  },
  {
    id: 3,
    word: "Perseverance",
    phonetic: "/ˌpɜːsɪˈvɪərəns/",
    partOfSpeech: "noun",
    meaning: "Sự kiên trì, bền bỉ",
    example:
      "Through hard work and perseverance, she finally earned her PhD degree.",
    exampleVi:
      "Nhờ nỗ lực và sự kiên trì, cô ấy cuối cùng đã nhận được bằng tiến sĩ.",
    category: "ielts",
    categoryName: "IELTS Academic",
    level: "B2",
  },
  {
    id: 4,
    word: "Meticulous",
    phonetic: "/məˈtɪkjʊləs/",
    partOfSpeech: "adjective",
    meaning: "Tỉ mỉ, cẩn thận từng chi tiết",
    example:
      "He conducted a meticulous investigation into the cause of the system error.",
    exampleVi:
      "Anh ấy đã tiến hành một cuộc điều tra tỉ mỉ về nguyên nhân gây ra lỗi hệ thống.",
    category: "ielts",
    categoryName: "IELTS Academic",
    level: "C1",
  },
  {
    id: 5,
    word: "Ambiguous",
    phonetic: "/æmˈbɪɡjuəs/",
    partOfSpeech: "adjective",
    meaning: "Mơ hồ, nước đôi, khó hiểu",
    example:
      "The legal clause was ambiguous and open to multiple interpretations.",
    exampleVi:
      "Điều khoản pháp lý quá mơ hồ và có thể được hiểu theo nhiều nghĩa khác nhau.",
    category: "ielts",
    categoryName: "IELTS Academic",
    level: "B2",
  },
  {
    id: 6,
    word: "Ubiquitous",
    phonetic: "/juːˈbɪkwɪtəs/",
    partOfSpeech: "adjective",
    meaning: "Phổ biến khắp nơi, đâu đâu cũng có",
    example: "Smartphones have become ubiquitous in today’s modern society.",
    exampleVi:
      "Điện thoại thông minh đã trở nên phổ biến khắp mọi nơi trong xã hội hiện đại ngày nay.",
    category: "ielts",
    categoryName: "IELTS Academic",
    level: "C1",
  },
  {
    id: 7,
    word: "Pragmatic",
    phonetic: "/præɡˈmætɪk/",
    partOfSpeech: "adjective",
    meaning: "Thực tế, thực dụng",
    example:
      "We need to take a pragmatic approach to solving housing shortages.",
    exampleVi:
      "Chúng ta cần áp dụng một phương pháp tiếp cận thực tế để giải quyết tình trạng thiếu nhà ở.",
    category: "ielts",
    categoryName: "IELTS Academic",
    level: "C1",
  },
  {
    id: 8,
    word: "Paradigm",
    phonetic: "/ˈpærədaɪm/",
    partOfSpeech: "noun",
    meaning: "Mô hình, kiểu mẫu tư duy",
    example:
      "The discovery triggered a profound paradigm shift in scientific research.",
    exampleVi:
      "Phát hiện này đã tạo ra một bước chuyển đổi mô hình tư duy sâu sắc trong nghiên cứu khoa học.",
    category: "ielts",
    categoryName: "IELTS Academic",
    level: "C1",
  },
  {
    id: 9,
    word: "Substantial",
    phonetic: "/səbˈstænʃl/",
    partOfSpeech: "adjective",
    meaning: "Đáng kể, quan trọng",
    example:
      "The company reported a substantial increase in quarterly export earnings.",
    exampleVi:
      "Công ty đã báo cáo mức tăng đáng kể về doanh thu xuất khẩu hàng quý.",
    category: "ielts",
    categoryName: "IELTS Academic",
    level: "B2",
  },

  // ==================== 2. TOEIC & CÔNG SỞ ====================
  {
    id: 10,
    word: "Negotiate",
    phonetic: "/nɪˈɡəʊʃieɪt/",
    partOfSpeech: "verb",
    meaning: "Đàm phán, thương lượng",
    example:
      "The manager is currently negotiating a long-term supply contract.",
    exampleVi:
      "Người quản lý hiện đang đàm phán một hợp đồng cung ứng dài hạn.",
    category: "toeic",
    categoryName: "TOEIC & Công sở",
    level: "B2",
  },
  {
    id: 11,
    word: "Collaborate",
    phonetic: "/kəˈlæbəreɪt/",
    partOfSpeech: "verb",
    meaning: "Hợp tác, cộng tác",
    example:
      "Both departments must collaborate closely to meet project milestones.",
    exampleVi:
      "Cả hai phòng ban phải hợp tác chặt chẽ với nhau để đạt được các mốc tiến độ dự án.",
    category: "toeic",
    categoryName: "TOEIC & Công sở",
    level: "B2",
  },
  {
    id: 12,
    word: "Revenue",
    phonetic: "/ˈrevənjuː/",
    partOfSpeech: "noun",
    meaning: "Doanh thu, thu nhập",
    example:
      "Online sales generated more than 40% of the company total revenue.",
    exampleVi:
      "Doanh số bán hàng trực tuyến đã tạo ra hơn 40% tổng doanh thu của công ty.",
    category: "toeic",
    categoryName: "TOEIC & Công sở",
    level: "B1",
  },
  {
    id: 13,
    word: "Compliance",
    phonetic: "/kəmˈplaɪəns/",
    partOfSpeech: "noun",
    meaning: "Sự tuân thủ (quy định, pháp luật)",
    example:
      "All employees are trained to ensure compliance with safety standards.",
    exampleVi:
      "Tất cả nhân viên đều được đào tạo để đảm bảo sự tuân thủ các tiêu chuẩn an toàn.",
    category: "toeic",
    categoryName: "TOEIC & Công sở",
    level: "B2",
  },
  {
    id: 14,
    word: "Inventory",
    phonetic: "/ˈɪnvəntri/",
    partOfSpeech: "noun",
    meaning: "Hàng tồn kho, bảng kiểm kê",
    example: "Warehouse staff conduct a monthly inventory check every Friday.",
    exampleVi:
      "Nhân viên kho tiến hành kiểm tra hàng tồn kho định kỳ mỗi thứ Sáu hàng tháng.",
    category: "toeic",
    categoryName: "TOEIC & Công sở",
    level: "B1",
  },
  {
    id: 15,
    word: "Proposal",
    phonetic: "/prəˈpəʊzl/",
    partOfSpeech: "noun",
    meaning: "Bản đề xuất, đề án",
    example:
      "The board of directors approved our marketing proposal yesterday.",
    exampleVi:
      "Hội đồng quản trị đã phê duyệt bản đề xuất tiếp thị của chúng tôi ngày hôm qua.",
    category: "toeic",
    categoryName: "TOEIC & Công sở",
    level: "B1",
  },
  {
    id: 16,
    word: "Productivity",
    phonetic: "/ˌprɒdʌkˈtɪvəti/",
    partOfSpeech: "noun",
    meaning: "Năng suất, hiệu suất làm việc",
    example:
      "Flexible working hours have noticeably boosted employee productivity.",
    exampleVi:
      "Giờ làm việc linh hoạt đã nâng cao đáng kể năng suất làm việc của nhân viên.",
    category: "toeic",
    categoryName: "TOEIC & Công sở",
    level: "B2",
  },
  {
    id: 17,
    word: "Restructure",
    phonetic: "/ˌriːˈstrʌktʃə(r)/",
    partOfSpeech: "verb",
    meaning: "Tái cơ cấu, cải tổ lại",
    example:
      "The corporation plans to restructure its European operations next month.",
    exampleVi:
      "Tập đoàn có kế hoạch tái cơ cấu lại hoạt động kinh doanh tại châu Âu vào tháng tới.",
    category: "toeic",
    categoryName: "TOEIC & Công sở",
    level: "B2",
  },

  // ==================== 3. GIAO TIẾP HÀNG NGÀY ====================
  {
    id: 18,
    word: "Enthusiastic",
    phonetic: "/ɪnˌθjuːziˈæstɪk/",
    partOfSpeech: "adjective",
    meaning: "Nhiệt tình, hăng hái",
    example:
      "She was enthusiastic about joining the English conversation club.",
    exampleVi:
      "Cô ấy rất hào hứng và nhiệt tình khi tham gia câu lạc bộ giao tiếp tiếng Anh.",
    category: "daily",
    categoryName: "Giao tiếp hàng ngày",
    level: "B1",
  },
  {
    id: 19,
    word: "Appreciate",
    phonetic: "/əˈpriːʃieɪt/",
    partOfSpeech: "verb",
    meaning: "Đánh giá cao, biết ơn, trân trọng",
    example: "I truly appreciate your timely help with my homework yesterday.",
    exampleVi:
      "Tôi thật sự trân trọng và biết ơn sự giúp đỡ kịp thời của bạn với bài tập ngày hôm qua.",
    category: "daily",
    categoryName: "Giao tiếp hàng ngày",
    level: "A2",
  },
  {
    id: 20,
    word: "Hesitate",
    phonetic: "/ˈhezɪteɪt/",
    partOfSpeech: "verb",
    meaning: "Do dự, ngập ngừng",
    example: "Please do not hesitate to ask if you have any questions.",
    exampleVi: "Xin vui lòng đừng ngần ngại hỏi nếu bạn có bất kỳ câu hỏi nào.",
    category: "daily",
    categoryName: "Giao tiếp hàng ngày",
    level: "B1",
  },
  {
    id: 21,
    word: "Convenient",
    phonetic: "/kənˈviːniənt/",
    partOfSpeech: "adjective",
    meaning: "Thuận tiện, tiện lợi",
    example:
      "Living near the subway station is exceptionally convenient for commuters.",
    exampleVi: "Sống gần ga tàu điện ngầm rất tiện lợi cho những người đi làm.",
    category: "daily",
    categoryName: "Giao tiếp hàng ngày",
    level: "A2",
  },
  {
    id: 22,
    word: "Hilarious",
    phonetic: "/hɪˈleəriəs/",
    partOfSpeech: "adjective",
    meaning: "Vui nhộn, cười đau cả bụng",
    example:
      "He told a hilarious joke that made everyone in the room laugh aloud.",
    exampleVi:
      "Anh ấy kể một câu chuyện cười vui nhộn khiến mọi người trong phòng đều bật cười lớn.",
    category: "daily",
    categoryName: "Giao tiếp hàng ngày",
    level: "B1",
  },
  {
    id: 23,
    word: "Complicated",
    phonetic: "/ˈkɒmplɪkeɪtɪd/",
    partOfSpeech: "adjective",
    meaning: "Phức tạp, rắc rối",
    example:
      "The recipe sounded complicated, but it turned out to be quite simple.",
    exampleVi:
      "Công thức nấu ăn nghe có vẻ phức tạp, nhưng thực tế lại khá đơn giản.",
    category: "daily",
    categoryName: "Giao tiếp hàng ngày",
    level: "A2",
  },

  // ==================== 4. DU LỊCH & KHÁCH SẠN ====================
  {
    id: 24,
    word: "Itinerary",
    phonetic: "/aɪˈtɪnərəri/",
    partOfSpeech: "noun",
    meaning: "Lịch trình, lộ trình chuyến đi",
    example:
      "Our travel agency sent us a detailed seven-day itinerary for Japan.",
    exampleVi:
      "Công ty du lịch đã gửi cho chúng tôi một lịch trình chi tiết 7 ngày đi Nhật Bản.",
    category: "travel",
    categoryName: "Du lịch & Khách sạn",
    level: "B2",
  },
  {
    id: 25,
    word: "Accommodation",
    phonetic: "/əˌkɒməˈdeɪʃn/",
    partOfSpeech: "noun",
    meaning: "Chỗ ở, nơi lưu trú",
    example:
      "Hotel accommodation should be booked well in advance during peak season.",
    exampleVi:
      "Chỗ ở khách sạn nên được đặt trước thật sớm trong mùa cao điểm du lịch.",
    category: "travel",
    categoryName: "Du lịch & Khách sạn",
    level: "B1",
  },
  {
    id: 26,
    word: "Destination",
    phonetic: "/ˌdestɪˈneɪʃn/",
    partOfSpeech: "noun",
    meaning: "Điểm đến",
    example:
      "Da Nang has emerged as a top coastal destination for foreign tourists.",
    exampleVi:
      "Đà Nẵng đã trở thành điểm đến ven biển hàng đầu cho du khách quốc tế.",
    category: "travel",
    categoryName: "Du lịch & Khách sạn",
    level: "A2",
  },
  {
    id: 27,
    word: "Departure",
    phonetic: "/dɪˈpɑːtʃə(r)/",
    partOfSpeech: "noun",
    meaning: "Sự khởi hành, giờ cất cánh",
    example:
      "Passengers are advised to arrive three hours before international departures.",
    exampleVi:
      "Hành khách được khuyến cáo đến trước 3 tiếng trước giờ khởi hành quốc tế.",
    category: "travel",
    categoryName: "Du lịch & Khách sạn",
    level: "A2",
  },
  {
    id: 28,
    word: "Sightseeing",
    phonetic: "/ˈsaɪtsiːɪŋ/",
    partOfSpeech: "noun",
    meaning: "Tham quan, ngắm cảnh",
    example:
      "We spent the whole afternoon sightseeing around the ancient citadel.",
    exampleVi:
      "Chúng tôi dành cả buổi chiều để đi ngắm cảnh quanh khu thành cổ.",
    category: "travel",
    categoryName: "Du lịch & Khách sạn",
    level: "A2",
  },
  {
    id: 29,
    word: "Excursion",
    phonetic: "/ɪkˈskɜːʃn/",
    partOfSpeech: "noun",
    meaning: "Chuyến dã ngoại, chuyến du ngoạn ngắn",
    example: "The resort organizes weekend boat excursions to nearby islands.",
    exampleVi:
      "Khu nghỉ dưỡng tổ chức các chuyến du ngoạn bằng thuyền cuối tuần tới các đảo lân cận.",
    category: "travel",
    categoryName: "Du lịch & Khách sạn",
    level: "B2",
  },

  // ==================== 5. CÔNG NGHỆ & AI ====================
  {
    id: 30,
    word: "Algorithm",
    phonetic: "/ˈælɡərɪðəm/",
    partOfSpeech: "noun",
    meaning: "Thuật toán",
    example:
      "Social media apps use recommendation algorithms to suggest relevant posts.",
    exampleVi:
      "Các ứng dụng mạng xã hội sử dụng thuật toán gợi ý để đề xuất bài viết phù hợp.",
    category: "tech",
    categoryName: "Công nghệ & AI",
    level: "B2",
  },
  {
    id: 31,
    word: "Cybersecurity",
    phonetic: "/ˌsaɪbəsɪˈkjʊərəti/",
    partOfSpeech: "noun",
    meaning: "An ninh mạng",
    example:
      "Investing in robust cybersecurity protects customer credentials from breaches.",
    exampleVi:
      "Đầu tư vào an ninh mạng vững chắc giúp bảo vệ thông tin khách hàng khỏi các vụ rò rỉ.",
    category: "tech",
    categoryName: "Công nghệ & AI",
    level: "B2",
  },
  {
    id: 32,
    word: "Automation",
    phonetic: "/ˌɔːtəˈmeɪʃn/",
    partOfSpeech: "noun",
    meaning: "Tự động hóa",
    example:
      "Warehouse automation significantly accelerated package fulfillment times.",
    exampleVi:
      "Tự động hóa kho bãi đã giúp tăng tốc đáng kể thời gian đóng gói và xử lý đơn hàng.",
    category: "tech",
    categoryName: "Công nghệ & AI",
    level: "B1",
  },
  {
    id: 33,
    word: "Interface",
    phonetic: "/ˈɪntəfeɪs/",
    partOfSpeech: "noun",
    meaning: "Giao diện người dùng",
    example:
      "The new mobile application features an intuitive and clean user interface.",
    exampleVi:
      "Ứng dụng di động mới sở hữu giao diện người dùng trực quan và gọn gàng.",
    category: "tech",
    categoryName: "Công nghệ & AI",
    level: "B1",
  },
  {
    id: 34,
    word: "Optimization",
    phonetic: "/ˌɒptɪmaɪˈzeɪʃn/",
    partOfSpeech: "noun",
    meaning: "Sự tối ưu hóa",
    example: "Code optimization reduced the application loading time by half.",
    exampleVi:
      "Việc tối ưu hóa mã nguồn đã giúp giảm một nửa thời gian tải ứng dụng.",
    category: "tech",
    categoryName: "Công nghệ & AI",
    level: "B2",
  },
  {
    id: 35,
    word: "Infrastructure",
    phonetic: "/ˈɪnfrəstrʌktʃə(r)/",
    partOfSpeech: "noun",
    meaning: "Cơ sở hạ tầng",
    example:
      "Cloud infrastructure enables companies to scale digital services effortlessly.",
    exampleVi:
      "Cơ sở hạ tầng đám mây cho phép các công ty mở rộng dịch vụ số một cách dễ dàng.",
    category: "tech",
    categoryName: "Công nghệ & AI",
    level: "B2",
  },

  // ==================== 6. MÔI TRƯỜNG & TỰ NHIÊN ====================
  {
    id: 36,
    word: "Ecosystem",
    phonetic: "/ˈiːkəʊsɪstəm/",
    partOfSpeech: "noun",
    meaning: "Hệ sinh thái",
    example:
      "Plastic pollution poses severe threats to marine ecosystems across the globe.",
    exampleVi:
      "Ô nhiễm rác thải nhựa gây ra mối đe dọa nghiêm trọng đến các hệ sinh thái biển trên toàn cầu.",
    category: "env",
    categoryName: "Môi trường",
    level: "B1",
  },
  {
    id: 37,
    word: "Biodiversity",
    phonetic: "/ˌbaɪəʊdaɪˈvɜːsəti/",
    partOfSpeech: "noun",
    meaning: "Đa dạng sinh học",
    example:
      "Tropical rainforests house over half of the world’s terrestrial biodiversity.",
    exampleVi:
      "Rừng mưa nhiệt đới là nơi sinh sống của hơn một nửa sự đa dạng sinh học trên cạn của thế giới.",
    category: "env",
    categoryName: "Môi trường",
    level: "B2",
  },
  {
    id: 38,
    word: "Sustainability",
    phonetic: "/səˌsteɪnəˈbɪləti/",
    partOfSpeech: "noun",
    meaning: "Sự bền vững, tính bền vững",
    example:
      "Environmental sustainability requires reducing single-use plastic waste.",
    exampleVi:
      "Sự bền vững về môi trường đòi hỏi phải cắt giảm rác thải nhựa dùng một lần.",
    category: "env",
    categoryName: "Môi trường",
    level: "B2",
  },
  {
    id: 39,
    word: "Deforestation",
    phonetic: "/diːˌfɒrɪˈsteɪʃn/",
    partOfSpeech: "noun",
    meaning: "Nạn chặt phá rừng, phá rừng",
    example:
      "Deforestation causes severe soil erosion and destroys native animal habitats.",
    exampleVi:
      "Nạn phá rừng gây ra xói mòn đất nghiêm trọng và phá hủy môi trường sống của động vật bản địa.",
    category: "env",
    categoryName: "Môi trường",
    level: "B2",
  },
  {
    id: 40,
    word: "Renewable",
    phonetic: "/rɪˈnjuːəbl/",
    partOfSpeech: "adjective",
    meaning: "Tái tạo được (năng lượng)",
    example:
      "Solar and wind energy are leading renewable alternatives to fossil fuels.",
    exampleVi:
      "Năng lượng mặt trời và gió là những nguồn thay thế tái tạo hàng đầu cho nhiên liệu hóa thạch.",
    category: "env",
    categoryName: "Môi trường",
    level: "B1",
  },
  {
    id: 41,
    word: "Conservation",
    phonetic: "/ˌkɒnsəˈveɪʃn/",
    partOfSpeech: "noun",
    meaning: "Sự bảo tồn",
    example:
      "Wildlife conservation organizations work tirelessly to protect endangered species.",
    exampleVi:
      "Các tổ chức bảo tồn động vật hoang dã làm việc không mệt mỏi để bảo vệ các loài có nguy cơ tuyệt chủng.",
    category: "env",
    categoryName: "Môi trường",
    level: "B1",
  },

  // ==================== 7. SỨC KHỎE & Y TẾ ====================
  {
    id: 42,
    word: "Prescription",
    phonetic: "/prɪˈskrɪpʃn/",
    partOfSpeech: "noun",
    meaning: "Đơn thuốc, toa thuốc",
    example:
      "The doctor wrote a prescription for antibiotics to treat the throat infection.",
    exampleVi:
      "Bác sĩ đã kê một đơn thuốc kháng sinh để điều trị nhiễm trùng cổ họng.",
    category: "health",
    categoryName: "Sức khỏe & Y tế",
    level: "B1",
  },
  {
    id: 43,
    word: "Symptom",
    phonetic: "/ˈsɪmptəm/",
    partOfSpeech: "noun",
    meaning: "Triệu chứng (bệnh)",
    example:
      "Common symptoms of the seasonal flu include high fever and fatigue.",
    exampleVi:
      "Các triệu chứng thông thường của cảm cúm theo mùa bao gồm sốt cao và mệt mỏi.",
    category: "health",
    categoryName: "Sức khỏe & Y tế",
    level: "B1",
  },
  {
    id: 44,
    word: "Immunity",
    phonetic: "/ɪˈmjuːnəti/",
    partOfSpeech: "noun",
    meaning: "Khả năng miễn dịch, hệ miễn dịch",
    example:
      "Regular exercise and wholesome nutrition build robust natural immunity.",
    exampleVi:
      "Tập thể dục thường xuyên và dinh dưỡng lành mạnh giúp xây dựng hệ miễn dịch tự nhiên vững chắc.",
    category: "health",
    categoryName: "Sức khỏe & Y tế",
    level: "B2",
  },
  {
    id: 45,
    word: "Therapy",
    phonetic: "/ˈθerəpi/",
    partOfSpeech: "noun",
    meaning: "Liệu pháp, phương pháp trị liệu",
    example:
      "Physical therapy helped the injured athlete regain full mobility.",
    exampleVi:
      "Vật lý trị liệu đã giúp vận động viên bị chấn thương lấy lại hoàn toàn khả năng vận động.",
    category: "health",
    categoryName: "Sức khỏe & Y tế",
    level: "B1",
  },
  {
    id: 46,
    word: "Diagnosis",
    phonetic: "/ˌdaɪəɡˈnəʊsɪs/",
    partOfSpeech: "noun",
    meaning: "Sự chẩn đoán bệnh",
    example:
      "Early diagnosis of diabetes greatly improves long-term patient outcomes.",
    exampleVi:
      "Chẩn đoán sớm bệnh tiểu đường giúp cải thiện đáng kể kết quả điều trị lâu dài của bệnh nhân.",
    category: "health",
    categoryName: "Sức khỏe & Y tế",
    level: "B2",
  },
  {
    id: 47,
    word: "Nutritious",
    phonetic: "/njuːˈtrɪʃəs/",
    partOfSpeech: "adjective",
    meaning: "Giàu dinh dưỡng, bổ dưỡng",
    example:
      "Fresh fruits, vegetables, and nuts provide a nutritious breakfast.",
    exampleVi:
      "Trái cây tươi, rau củ và các loại hạt mang lại một bữa sáng giàu dinh dưỡng.",
    category: "health",
    categoryName: "Sức khỏe & Y tế",
    level: "B1",
  },

  // ==================== 8. ẨM THỰC & ĐỜI SỐNG ====================
  {
    id: 48,
    word: "Ingredient",
    phonetic: "/ɪnˈɡriːdiənt/",
    partOfSpeech: "noun",
    meaning: "Nguyên liệu, thành phần món ăn",
    example:
      "Fresh herbs and garlic are the key ingredients in traditional Vietnamese pho.",
    exampleVi:
      "Rau thơm tươi và tỏi là những nguyên liệu chính trong món phở truyền thống Việt Nam.",
    category: "food",
    categoryName: "Ẩm thực & Đời sống",
    level: "A2",
  },
  {
    id: 49,
    word: "Appetizer",
    phonetic: "/ˈæpɪtaɪzə(r)/",
    partOfSpeech: "noun",
    meaning: "Món khai vị",
    example:
      "We ordered crispy spring rolls as an appetizer before the main course.",
    exampleVi:
      "Chúng tôi gọi món nem rán giòn làm món khai vị trước khi vào món chính.",
    category: "food",
    categoryName: "Ẩm thực & Đời sống",
    level: "A2",
  },
  {
    id: 50,
    word: "Culinary",
    phonetic: "/ˈkʌlɪnəri/",
    partOfSpeech: "adjective",
    meaning: "Thuộc về ẩm thực, nấu nướng",
    example:
      "Hanoi is renowned for its diverse street food and rich culinary traditions.",
    exampleVi:
      "Hà Nội nổi tiếng với ẩm thực đường phố đa dạng và những truyền thống ẩm thực phong phú.",
    category: "food",
    categoryName: "Ẩm thực & Đời sống",
    level: "B2",
  },
  {
    id: 51,
    word: "Flavour",
    phonetic: "/ˈfleɪvə(r)/",
    partOfSpeech: "noun",
    meaning: "Hương vị, mùi vị đặc trưng",
    example:
      "Spices like cinnamon and star anise impart a rich flavour to the soup broth.",
    exampleVi:
      "Các loại gia vị như quế và hoa hồi tạo nên hương vị đậm đà cho nước dùng.",
    category: "food",
    categoryName: "Ẩm thực & Đời sống",
    level: "A2",
  },
  {
    id: 52,
    word: "Beverage",
    phonetic: "/ˈbevərɪdʒ/",
    partOfSpeech: "noun",
    meaning: "Đồ uống, thức uống",
    example:
      "Hot tea and iced coffee are popular everyday beverages in Vietnam.",
    exampleVi:
      "Trà nóng và cà phê sữa đá là những thức uống phổ biến hàng ngày tại Việt Nam.",
    category: "food",
    categoryName: "Ẩm thực & Đời sống",
    level: "B1",
  },
]
