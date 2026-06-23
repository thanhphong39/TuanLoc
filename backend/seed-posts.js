const mongoose = require("mongoose");
require("dotenv").config();
const Post = require("./src/models/Post");

const MONGODB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/tuanloc";

const posts = [
  {
    title: "Giải Pháp Tủ Điện Công Nghiệp An Toàn, Đạt Chuẩn Cho Nhà Máy Tự Động Hóa",
    content: "Tủ điện công nghiệp là thành phần cốt lõi đảm bảo sự ổn định và an toàn cho hệ thống sản xuất. Tuấn Lộc mang đến giải pháp thiết kế tủ điện tối ưu, sử dụng thiết bị chính hãng từ Schneider, Siemens, đáp ứng mọi tiêu chuẩn khắt khe nhất của các khu công nghiệp công nghệ cao.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    date: new Date("2024-03-15"),
    badge: "CÔNG NGHỆ",
  },
  {
    title: "Ứng Dụng Công Nghệ Smart Grid (Lưới Điện Thông Minh) Vào Thi Công Điện",
    content: "Lưới điện thông minh (Smart Grid) đang là xu hướng tất yếu trong thi công hạ tầng điện hiện đại. Nhờ hệ thống cảm biến và phần mềm giám sát tự động, giải pháp này giúp doanh nghiệp tối ưu năng lượng tiêu thụ, giảm thiểu rủi ro sự cố và dễ dàng bảo trì từ xa.",
    image: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?q=80&w=800&auto=format&fit=crop",
    date: new Date("2024-03-10"),
    badge: "DỰ ÁN MỚI",
  },
  {
    title: "Bảo Trì, Bảo Dưỡng Hệ Thống Tủ Điện Định Kỳ: Bí Quyết Kéo Dài Tuổi Thọ Thiết Bị",
    content: "Nhiều doanh nghiệp thường bỏ qua việc bảo dưỡng định kỳ tủ điện, dẫn đến nguy cơ cháy nổ và hỏng hóc thiết bị. Bài viết này chia sẻ quy trình bảo trì chuẩn hóa, từ việc đo đạc cách điện, kiểm tra thanh cái, đến việc vệ sinh bụi bẩn nhằm đảm bảo hệ thống vận hành trơn tru.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    date: new Date("2024-03-05"),
    badge: "NỘI BỘ",
  },
  {
    title: "Tiêu Chuẩn ISO 9001:2015 Trong Quản Lý Chất Lượng Thi Công Điện",
    content: "Việc tuân thủ các tiêu chuẩn quốc tế không chỉ là một yêu cầu bắt buộc mà còn là lời cam kết về chất lượng của Tuấn Lộc. Cùng tìm hiểu cách chúng tôi áp dụng ISO 9001:2015 vào từng công đoạn thiết kế, lắp ráp và thi công hệ thống điện.",
    image: "https://images.unsplash.com/photo-1580983218765-f663cbab6283?q=80&w=800&auto=format&fit=crop",
    date: new Date("2024-02-28"),
    badge: "ISO",
  },
  {
    title: "Lựa Chọn MCB, MCCB Phù Hợp Cho Tủ Điện Động Lực: Những Lưu Ý Quan Trọng",
    content: "Lựa chọn Aptomat (MCB, MCCB) đúng dòng cắt và tải định mức là yếu tố quyết định sự an toàn của toàn bộ phân xưởng. Bài viết hướng dẫn chi tiết cách tính toán công suất tải và chọn thiết bị đóng cắt phù hợp nhất để tránh các hiện tượng sụt áp, quá tải.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800&auto=format&fit=crop",
    date: new Date("2024-02-20"),
    badge: "CÔNG NGHỆ",
  },
  {
    title: "Hoàn Thành Thi Công Trạm Biến Áp 22kV Cho Khu Công Nghiệp Cầu Tràm",
    content: "Tháng vừa qua, Tuấn Lộc đã bàn giao và đóng điện thành công trạm biến áp trung thế 22kV tại KCN Cầu Tràm. Dự án được thi công vượt tiến độ, đảm bảo các tiêu chuẩn an toàn ngành điện, cung cấp nguồn năng lượng ổn định cho hơn 15 dây chuyền sản xuất.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
    date: new Date("2024-02-12"),
    badge: "DỰ ÁN MỚI",
  },
  {
    title: "Biến Tần (Inverter) Trong Tự Động Hóa: Cách Giúp Doanh Nghiệp Tiết Kiệm Tới 30% Điện Năng",
    content: "Sử dụng biến tần điều khiển tốc độ động cơ máy bơm, quạt gió không chỉ giúp hệ thống khởi động êm ái mà còn tiết kiệm lượng điện khổng lồ. Tuấn Lộc hiện đang là nhà phân phối và tích hợp biến tần Mitsubishi, Yaskawa hàng đầu khu vực phía Nam.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    date: new Date("2024-02-05"),
    badge: "CÔNG NGHỆ",
  },
  {
    title: "Tầm Quan Trọng Của Hệ Thống Nối Đất, Chống Sét Trong Các Công Trình Điện Công Nghiệp",
    content: "Đừng để một tia sét làm gián đoạn hệ thống trị giá hàng tỷ đồng. Thiết kế và thi công hệ thống tiếp địa (nối đất) đạt chuẩn điện trở dưới 4 Ohm là bước bắt buộc. Cùng khám phá công nghệ hàn hóa nhiệt và cách bố trí cọc tiếp địa hiệu quả.",
    image: "https://images.unsplash.com/photo-1566455113945-8120fa26e254?q=80&w=800&auto=format&fit=crop",
    date: new Date("2024-01-25"),
    badge: "ISO",
  },
  {
    title: "Tuấn Lộc Tổ Chức Buổi Tập Huấn An Toàn Vệ Sinh Lao Động (HSE) Cho Đội Ngũ Kỹ Sư",
    content: "An toàn là trên hết. Vừa qua, công ty đã tổ chức thành công đợt huấn luyện an toàn lao động định kỳ, cấp chứng chỉ nhóm 3 cho các kỹ sư và công nhân trực tiếp thi công. Khóa học giúp nâng cao ý thức tuân thủ quy tắc làm việc trên cao và an toàn điện.",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800&auto=format&fit=crop",
    date: new Date("2024-01-18"),
    badge: "NỘI BỘ",
  },
  {
    title: "Thiết Kế Tủ Tụ Bù Công Suất Phản Kháng: Giải Pháp Xóa Bỏ Tiền Phạt Công Suất Ảo",
    content: "Hóa đơn tiền điện hàng tháng luôn đi kèm các khoản phạt hệ số cos phi thấp? Hệ thống tủ tụ bù tự động của Tuấn Lộc sẽ tự động phân tích và đóng cắt các cấp tụ, giữ hệ số cos phi luôn ở mức 0.95 trở lên, giúp doanh nghiệp tiết kiệm hàng chục triệu đồng mỗi tháng.",
    image: "https://images.unsplash.com/photo-1580983584852-5a2a7e780dc9?q=80&w=800&auto=format&fit=crop",
    date: new Date("2024-01-10"),
    badge: "CÔNG NGHỆ",
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    await Post.deleteMany({});
    console.log("Deleted old posts");

    await Post.insertMany(posts);
    console.log(`Inserted ${posts.length} new posts`);

    mongoose.connection.close();
    console.log("Database connection closed");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding DB:", err);
    process.exit(1);
  }
};

seedDB();
