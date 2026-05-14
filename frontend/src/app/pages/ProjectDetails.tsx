import {
  ArrowLeft, MapPin, Calendar, Users, Zap, CheckCircle,
  PhoneCall, Mail, ArrowUpRight, FileText, Shield, Settings
} from "lucide-react";
import { useParams, Link, Navigate } from "react-router";

type ProjectData = {
  id: string;
  label: string;
  labelColor: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  client: string;
  status: string;
  statusColor: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  keyMetrics: { value: string; label: string; icon: "zap" | "users" | "shield" | "settings" }[];
  scope: { title: string; items: string[] }[];
  challenges: { title: string; description: string }[];
  outcomes: string[];
  relatedProjectIds: string[];
};

const projectData: Record<string, ProjectData> = {
  "luoi-dien-quoc-gia": {
    id: "luoi-dien-quoc-gia",
    label: "TIỆN ÍCH QUY MÔ LỚN",
    labelColor: "bg-[#b71508]",
    title: "Mở rộng lưới điện quốc gia 500kV",
    subtitle: "Tích hợp đường dây truyền tải siêu cao áp 120km, cấp điện ổn định cho hơn 4 triệu dân cư khu vực phía Nam",
    location: "Các tỉnh khu vực phía Nam",
    duration: "Tháng 3/2022 – Tháng 12/2023",
    client: "Tập đoàn Điện lực Việt Nam (EVN)",
    status: "Đang hoạt động",
    statusColor: "text-green-600 bg-green-50",
    heroImage: "https://images.unsplash.com/photo-1652849962548-44d46f88d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdyaWQlMjBsaW5lc3xlbnwxfHx8fDE3Nzg2Njk5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    galleryImages: [
      "https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRyYW5zZm9ybWVyfGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=800",
      "https://images.unsplash.com/photo-1613072233238-4d290992404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMHBhbmVsJTIwc3dpdGNoZ2VhcnxlbnwxfHx8fDE3Nzg2Njk5MTV8MA&ixlib=rb-4.1.0&q=80&w=800",
      "https://images.unsplash.com/photo-1765375522929-994a71439c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3Vic3RhdGlvbiUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3ODY2OTg4Mnww&ixlib=rb-4.1.0&q=80&w=800",
    ],
    overview: "Dự án mở rộng lưới điện 500kV khu vực phía Nam là một trong những công trình hạ tầng điện lực trọng điểm quốc gia. Tuấn Lộc đảm nhận toàn bộ phần thi công cơ điện, bao gồm lắp đặt hệ thống truyền tải siêu cao áp 500kV trải dài 120km qua địa hình phức tạp, xây dựng 3 trạm biến áp 500/220kV và tích hợp hệ thống SCADA giám sát toàn tuyến theo thời gian thực. Dự án hoàn thành trước tiến độ 45 ngày và đưa vào vận hành ổn định từ tháng 1/2024.",
    keyMetrics: [
      { value: "120km", label: "CHIỀU DÀI ĐƯỜNG DÂY", icon: "zap" },
      { value: "4 triệu", label: "DÂN SỐ HƯỞNG LỢI", icon: "users" },
      { value: "3 trạm", label: "TRẠM BIẾN ÁP 500KV", icon: "settings" },
      { value: "45 ngày", label: "HOÀN THÀNH TRƯỚC HẠN", icon: "shield" },
    ],
    scope: [
      {
        title: "Thi công đường dây truyền tải",
        items: [
          "Thiết kế và thi công 120km đường dây 500kV trên không",
          "Lắp đặt 350 cột điện thép mạ kẽm nhúng nóng H400",
          "Căng dây dẫn ACSR 4×400mm² trên toàn tuyến",
          "Thi công qua 8 vị trí vượt sông, 12 vị trí vượt đường bộ",
        ],
      },
      {
        title: "Trạm biến áp 500/220kV",
        items: [
          "Xây dựng 3 trạm biến áp công suất 2×600MVA",
          "Lắp đặt máy biến áp AT 500/220/35kV, công suất 600MVA",
          "Hệ thống bù công suất phản kháng SVC ±300MVar",
          "Phòng điều khiển tập trung với hệ thống DCS/SCADA",
        ],
      },
      {
        title: "Hệ thống bảo vệ và SCADA",
        items: [
          "Triển khai hệ thống bảo vệ kỹ thuật số toàn tuyến IEC 61850",
          "Hệ thống SCADA giám sát 24/7 tích hợp AI dự báo sự cố",
          "Trung tâm điều độ từ xa tại TP.HCM và Cần Thơ",
          "Kết nối OPC-UA với hệ thống EMS quốc gia",
        ],
      },
    ],
    challenges: [
      {
        title: "Địa hình phức tạp – vùng ngập lũ Đồng bằng SCL",
        description: "22km tuyến đường dây đi qua vùng ngập lũ định kỳ Đồng bằng sông Cửu Long, yêu cầu thiết kế móng cọc khoan nhồi sâu 35m và xây dựng trong điều kiện mùa mưa. Tuấn Lộc áp dụng công nghệ thi công nhanh modular đặc biệt phát triển cho địa hình này.",
      },
      {
        title: "Vượt qua 8 sông lớn không gián đoạn điện",
        description: "Tám điểm vượt sông yêu cầu dây dẫn căng tầm cao với góc nghiêng đặc biệt và khoảng cách vượt tối thiểu 40m so với mực nước lũ. Phương án neo giữ 4-trụ đặc biệt được thiết kế riêng cho từng điểm vượt.",
      },
    ],
    outcomes: [
      "Tải điện ổn định 99.97% uptime trong 12 tháng đầu vận hành",
      "Giảm 18% tổn thất điện năng so với đường dây cũ 220kV",
      "Cấp điện cho 1.2 triệu hộ dân và 340 khu công nghiệp",
      "Tiết kiệm 45 ngày tiến độ tương đương 8.5 tỷ VNĐ chi phí",
    ],
    relatedProjectIds: ["nang-luong-mat-troi", "scada"],
  },

  "nang-luong-mat-troi": {
    id: "nang-luong-mat-troi",
    label: "NĂNG LƯỢNG TÁI TẠO",
    labelColor: "bg-orange-500",
    title: "Cánh đồng năng lượng mặt trời 400MW",
    subtitle: "Triển khai hệ thống giá đỡ quang điện tiên tiến và 8 trạm biến áp công suất lớn tại tỉnh Bình Thuận",
    location: "Tỉnh Bình Thuận",
    duration: "Tháng 6/2021 – Tháng 9/2022",
    client: "Công ty CP Năng lượng Bình Thuận (BTEnergy)",
    status: "Đang hoạt động",
    statusColor: "text-green-600 bg-green-50",
    heroImage: "https://images.unsplash.com/photo-1770936994282-8811fb7129ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjBhZXJpYWx8ZW58MXx8fHwxNzc4NjY5OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    galleryImages: [
      "https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRyYW5zZm9ybWVyfGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=800",
      "https://images.unsplash.com/photo-1564491300644-34f660c910da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdm9sdGFnZSUyMGNhYmxlJTIwY3Jvc3MlMjBzZWN0aW9ufGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=800",
      "https://images.unsplash.com/photo-1652849962548-44d46f88d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdyaWQlMjBsaW5lc3xlbnwxfHx8fDE3Nzg2Njk5OTF8MA&ixlib=rb-4.1.0&q=80&w=800",
    ],
    overview: "Dự án nhà máy điện mặt trời 400MW tại Bình Thuận là một trong những cánh đồng quang năng lớn nhất Việt Nam tính đến thời điểm hoàn thành. Tuấn Lộc chịu trách nhiệm toàn bộ phần hạ tầng điện, bao gồm lắp đặt 8 trạm biến áp nâng áp 35/110kV, hệ thống cáp ngầm trung thế nội bộ 35kV dài 85km, và đấu nối vào lưới điện quốc gia qua trạm 220kV Phan Rí. Dự án đạt tỷ lệ phát điện thực tế vượt 3% so với thiết kế ban đầu.",
    keyMetrics: [
      { value: "400MW", label: "CÔNG SUẤT LẮP ĐẶT", icon: "zap" },
      { value: "85km", label: "CÁP NGẦM NỘI BỘ", icon: "settings" },
      { value: "8 trạm", label: "TRẠM BIẾN ÁP 35KV", icon: "shield" },
      { value: "+3%", label: "VƯỢT CÔNG SUẤT THIẾT KẾ", icon: "users" },
    ],
    scope: [
      {
        title: "Hạ tầng điện nội bộ",
        items: [
          "Lắp đặt 85km cáp ngầm trung thế 35kV XLPE 3×240mm²",
          "Xây dựng 8 trạm biến áp nâng áp 35/110kV, 50MVA",
          "Hệ thống thanh cái GIS 35kV trong nhà tại mỗi trạm",
          "Lắp đặt 1,200 tủ inverter DC/AC công suất 3.3MW/tủ",
        ],
      },
      {
        title: "Đấu nối lưới quốc gia",
        items: [
          "Đường dây 110kV đấu nối dài 12km vào trạm 220kV Phan Rí",
          "Hệ thống bảo vệ kỹ thuật số theo tiêu chuẩn IEC 61850",
          "Hệ thống đo đếm điện năng điện tử 4 chiều",
          "Trạm điều hành trung tâm với SCADA năng lượng mặt trời",
        ],
      },
      {
        title: "Hệ thống giám sát thông minh",
        items: [
          "Cảm biến bức xạ mặt trời và nhiệt độ tấm pin phân tán",
          "Phần mềm SCADA dự báo sản lượng theo AI thời tiết",
          "Hệ thống camera nhiệt phát hiện tấm pin hỏng tự động",
          "Báo cáo hiệu suất thời gian thực theo IEC 61724",
        ],
      },
    ],
    challenges: [
      {
        title: "Bố trí cáp ngầm 35kV trong địa hình cát sa mạc",
        description: "85km cáp ngầm qua địa hình cát đặc trưng của Bình Thuận yêu cầu hào cáp đặc biệt sâu 1.2m với lớp cát đầm kỹ và ống bảo vệ HDPE. Nhiệt độ môi trường lên đến 42°C đòi hỏi phải tính toán lại khả năng tải nhiệt cáp và điều chỉnh khoảng cách tiết diện.",
      },
      {
        title: "Vận hành song song 8 trạm biến áp an toàn",
        description: "Việc cân chỉnh phân phối tải giữa 8 trạm 35/110kV vận hành song song đòi hỏi hệ thống bảo vệ phân tán phức tạp. Tuấn Lộc triển khai giải pháp rơ-le vi sai thanh cái kỹ thuật số đảm bảo cách ly chọn lọc khi xảy ra ngắn mạch tại bất kỳ điểm nào.",
      },
    ],
    outcomes: [
      "Sản lượng điện thực tế 720 GWh/năm, vượt 3% so với thiết kế",
      "Tránh phát thải 630,000 tấn CO₂ mỗi năm",
      "Hoàn thành toàn bộ công việc trong 15 tháng (tiến độ gốc 18 tháng)",
      "Không có tai nạn lao động trong suốt quá trình thi công (2,800 công nhân)",
    ],
    relatedProjectIds: ["dien-gio", "luoi-dien-quoc-gia"],
  },

  "scada": {
    id: "scada",
    label: "TỰ ĐỘNG HÓA",
    labelColor: "bg-[#3b4b8a]",
    title: "Hệ thống SCADA nhà máy thông minh",
    subtitle: "Tích hợp hệ thống giám sát và điều khiển tự động hóa toàn diện cho khu công nghiệp Đà Nẵng",
    location: "Khu công nghiệp Đà Nẵng",
    duration: "Tháng 9/2022 – Tháng 6/2023",
    client: "Ban Quản lý Khu Công nghệ cao và KCN Đà Nẵng",
    status: "Đang hoạt động",
    statusColor: "text-green-600 bg-green-50",
    heroImage: "https://images.unsplash.com/photo-1735494033199-cb0b52275d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3ODY2OTk5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    galleryImages: [
      "https://images.unsplash.com/photo-1613072233238-4d290992404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMHBhbmVsJTIwc3dpdGNoZ2VhcnxlbnwxfHx8fDE3Nzg2Njk5MTV8MA&ixlib=rb-4.1.0&q=80&w=800",
      "https://images.unsplash.com/photo-1765375522929-994a71439c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3Vic3RhdGlvbiUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3ODY2OTg4Mnww&ixlib=rb-4.1.0&q=80&w=800",
      "https://images.unsplash.com/photo-1652849962548-44d46f88d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdyaWQlMjBsaW5lc3xlbnwxfHx8fDE3Nzg2Njk5OTF8MA&ixlib=rb-4.1.0&q=80&w=800",
    ],
    overview: "Dự án SCADA nhà máy thông minh khu công nghiệp Đà Nẵng triển khai hệ thống giám sát và điều khiển tích hợp cho toàn bộ 45 nhà máy trong khu. Giải pháp bao gồm mạng cáp quang backbone 10Gbps, 1,200 điểm đo lường thông minh, và trung tâm điều hành thống nhất cung cấp khả năng quản lý năng lượng, an toàn và tự động hóa từ một giao diện duy nhất.",
    keyMetrics: [
      { value: "45 NMX", label: "NHÀ MÁY TÍCH HỢP", icon: "settings" },
      { value: "1,200", label: "ĐIỂM ĐO THÔNG MINH", icon: "zap" },
      { value: "10Gbps", label: "BACKBONE CÁP QUANG", icon: "shield" },
      { value: "18%", label: "GIẢM TIÊU THỤ ĐIỆN", icon: "users" },
    ],
    scope: [
      {
        title: "Hạ tầng truyền thông công nghiệp",
        items: [
          "Thi công 45km mạng cáp quang backbone 10Gbps vòng nhẫn",
          "Lắp đặt 120 switch công nghiệp Cisco IE3400 hỗ trợ TSN",
          "Hệ thống mạng không dây Wi-Fi 6 phủ sóng 100% diện tích KCN",
          "Hạ tầng bảo mật OT/IT tách biệt theo IEC 62443",
        ],
      },
      {
        title: "Hệ thống SCADA & EMS",
        items: [
          "Phần mềm SCADA Ignition 8.1 với 50,000 tag dữ liệu",
          "Hệ thống quản lý năng lượng (EMS) theo ISO 50001",
          "Tích hợp 1,200 đồng hồ điện thông minh IEC 62056",
          "Dashboard realtime trên web và ứng dụng di động",
        ],
      },
      {
        title: "Tự động hóa và an toàn",
        items: [
          "Hệ thống PLC phân tán Allen-Bradley ControlLogix tại 45 nhà máy",
          "Hệ thống an toàn SIS theo IEC 61511 (SIL 2) tại 8 nhà máy hóa chất",
          "Tích hợp camera AI phát hiện vi phạm an toàn lao động",
          "Hệ thống quản lý sự kiện tập trung SIEM cho an ninh mạng OT",
        ],
      },
    ],
    challenges: [
      {
        title: "Tích hợp hơn 20 giao thức truyền thông công nghiệp",
        description: "45 nhà máy sử dụng nhiều giao thức khác nhau: Modbus RTU, Profibus DP, DeviceNet, EtherNet/IP, DNP3... Tuấn Lộc triển khai lớp gateway giao thức thống nhất Kepware với hơn 150 driver tích hợp, đảm bảo dữ liệu từ mọi thiết bị đều hội tụ về SCADA trung tâm.",
      },
      {
        title: "Không gián đoạn sản xuất trong khi thi công",
        description: "45 nhà máy vận hành 24/7 không thể dừng trong quá trình tích hợp. Chiến lược \"live cutover\" từng nhà máy theo lịch trình chi tiết với thời gian cắt kết nối tối đa 2 giờ/nhà máy, thực hiện ngoài giờ cao điểm đảm bảo không ảnh hưởng đến sản xuất.",
      },
    ],
    outcomes: [
      "Giảm 18% tiêu thụ điện năng toàn khu nhờ quản lý phụ tải thông minh",
      "Thời gian phát hiện và xử lý sự cố điện giảm từ 45 phút xuống 3 phút",
      "Báo cáo năng lượng tự động thay thế hoàn toàn công tác thủ công (tiết kiệm 200 man-hours/tháng)",
      "Đạt chứng nhận ISO 50001:2018 cho 12 nhà máy lớn trong khu",
    ],
    relatedProjectIds: ["luoi-dien-quoc-gia", "nang-luong-mat-troi"],
  },

  "cau-vuot-song": {
    id: "cau-vuot-song",
    label: "CÔNG TRÌNH DÂN DỤNG",
    labelColor: "bg-gray-700",
    title: "Khung cầu vượt sông Cần Thơ",
    subtitle: "Thiết kế và thi công hệ thống điện chiếu sáng, cơ-điện-lạnh và hạ tầng kỹ thuật cho cầu dây văng hiện đại",
    location: "Thành phố Cần Thơ",
    duration: "Tháng 1/2021 – Tháng 8/2023",
    client: "Ban Quản lý Dự án Giao thông Cần Thơ (PMU)",
    status: "Hoàn thành",
    statusColor: "text-blue-600 bg-blue-50",
    heroImage: "https://images.unsplash.com/photo-1559843788-693858bf7338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZ2UlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzc4NjY5OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    galleryImages: [
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXB8ZW58MXx8fHwxNzc4NjY5OTk1fDA&ixlib=rb-4.1.0&q=80&w=800",
      "https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRyYW5zZm9ybWVyfGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=800",
      "https://images.unsplash.com/photo-1652849962548-44d46f88d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdyaWQlMjBsaW5lc3xlbnwxfHx8fDE3Nzg2Njk5OTF8MA&ixlib=rb-4.1.0&q=80&w=800",
    ],
    overview: "Tuấn Lộc đảm nhận toàn bộ gói thầu cơ-điện-lạnh (MEP) và hạ tầng kỹ thuật cho cầu dây văng vượt sông Hậu tại Cần Thơ. Phạm vi công việc bao gồm hệ thống chiếu sáng nghệ thuật LED 2,500 đèn, tủ điện ATS dự phòng diesel, hệ thống camera giám sát giao thông 80 điểm, và hạ tầng cáp ngầm xuyên trụ cầu chịu rung động động lực.",
    keyMetrics: [
      { value: "2,500", label: "ĐÈN LED CHIẾU SÁNG", icon: "zap" },
      { value: "80 cam", label: "CAMERA GIÁM SÁT", icon: "shield" },
      { value: "1.8km", label: "CHIỀU DÀI CẦU", icon: "settings" },
      { value: "30 năm", label: "TUỔI THỌ HỆ THỐNG", icon: "users" },
    ],
    scope: [
      {
        title: "Hệ thống chiếu sáng & nghệ thuật",
        items: [
          "Lắp đặt 2,500 đèn LED chiếu sáng đường và kiến trúc",
          "Hệ thống điều khiển chiếu sáng DALI thông minh",
          "Hiệu ứng ánh sáng RGB 16 triệu màu trên trụ dây văng",
          "Nguồn điện dự phòng UPS 30 phút + diesel 72 giờ",
        ],
      },
      {
        title: "Hạ tầng cáp và điện",
        items: [
          "Thi công 45km cáp điện và cáp tín hiệu trong ống bảo vệ chịu rung",
          "3 trạm điện tổng 6/0.4kV công suất tổng 4MVA",
          "Hệ thống chống sét và tiếp địa theo IEC 62305 cấp I",
          "Cáp chịu lửa FRC-XLPE cho mạch điện an toàn quan trọng",
        ],
      },
      {
        title: "Hệ thống thông minh giao thông",
        items: [
          "80 camera giám sát giao thông AI phân tích tốc độ, mật độ",
          "Hệ thống biển báo điện tử VMS điều hướng thời gian thực",
          "Cảm biến khí hậu đo gió, sương mù điều chỉnh tốc độ phép",
          "Trung tâm điều hành giao thông cầu kết nối với Sở GTVT Cần Thơ",
        ],
      },
    ],
    challenges: [
      {
        title: "Thi công cáp điện trong trụ cầu đang thi công song song",
        description: "Việc luồn cáp qua các ống bảo vệ trong trụ cầu 180m cần phối hợp chặt chẽ với nhà thầu kết cấu đang thi công song song. Tuấn Lộc áp dụng kế hoạch phối hợp 4D BIM, cài đặt sẵn ống bảo vệ trước khi đổ bê tông, giảm thiểu xung đột thi công.",
      },
      {
        title: "Độ rung động lực học ảnh hưởng đến hệ thống điện",
        description: "Cầu dây văng có biên độ dao động đến ±80mm ở tần số 0.3Hz do gió và tải trọng xe. Tất cả kết nối cáp và thiết bị điện phải được thiết kế với khả năng chịu rung liên tục 20 năm, sử dụng đầu nối chống rung chuyên dụng và vòng đệm mềm cách chấn.",
      },
    ],
    outcomes: [
      "Hệ thống chiếu sáng được báo chí và du lịch đánh giá là cầu đẹp nhất ĐBSCL",
      "Tiêu thụ điện chiếu sáng thấp hơn 35% so với thiết kế ban đầu nhờ điều khiển DALI",
      "Hệ thống camera AI giúp giảm 40% thời gian xử lý tai nạn giao thông",
      "Không có sự cố điện nào trong 18 tháng đầu vận hành",
    ],
    relatedProjectIds: ["luoi-dien-quoc-gia", "scada"],
  },

  "dien-gio": {
    id: "dien-gio",
    label: "BỀN VỮNG",
    labelColor: "bg-teal-600",
    title: "Trang trại điện gió ven biển Giai đoạn II",
    subtitle: "Mở rộng nhà máy điện gió ngoài khơi với 32 tua-bin 6MW và hệ thống cáp ngầm biển 22km",
    location: "Tỉnh Quảng Bình",
    duration: "Tháng 4/2023 – Tháng 3/2025",
    client: "Công ty TNHH Điện gió Quảng Bình (QBWIND)",
    status: "Đang hoạt động",
    statusColor: "text-green-600 bg-green-50",
    heroImage: "https://images.unsplash.com/photo-1656264416686-d9cfa9e99073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwZmFybSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Nzg2Njk5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    galleryImages: [
      "https://images.unsplash.com/photo-1770936994282-8811fb7129ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjBhZXJpYWx8ZW58MXx8fHwxNzc4NjY5OTkxfDA&ixlib=rb-4.1.0&q=80&w=800",
      "https://images.unsplash.com/photo-1652849962548-44d46f88d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdyaWQlMjBsaW5lc3xlbnwxfHx8fDE3Nzg2Njk5OTF8MA&ixlib=rb-4.1.0&q=80&w=800",
      "https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRyYW5zZm9ybWVyfGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=800",
    ],
    overview: "Giai đoạn II nhà máy điện gió ngoài khơi Quảng Bình bổ sung 32 tua-bin gió 6MW, nâng tổng công suất lên 320MW. Tuấn Lộc đảm nhận toàn bộ gói thầu hạ tầng điện biển, bao gồm 22km cáp ngầm biển 66kV, trạm biến áp nổi offshore 66/220kV, và đường dây đấu nối bờ 220kV vào lưới điện quốc gia tại trạm Đồng Hới.",
    keyMetrics: [
      { value: "192MW", label: "CÔNG SUẤT GIAI ĐOẠN II", icon: "zap" },
      { value: "22km", label: "CÁP NGẦM BIỂN 66KV", icon: "settings" },
      { value: "32 tua", label: "TUA-BIN GIÓ 6MW", icon: "shield" },
      { value: "650K tấn", label: "CO₂ TRÁNH MỖI NĂM", icon: "users" },
    ],
    scope: [
      {
        title: "Cáp ngầm biển cao thế",
        items: [
          "Cung cấp và lắp đặt 22km cáp ngầm biển 66kV 3×500mm² Cu",
          "Lắp đặt J-tube, bend stiffener tại 32 chân cột tua-bin",
          "Thiết bị chống ăn mòn điện hóa (ICCP) dọc tuyến cáp",
          "Kiểm tra toàn tuyến bằng ROV và thử nghiệm điện áp AC",
        ],
      },
      {
        title: "Trạm biến áp offshore",
        items: [
          "Lắp đặt trạm biến áp nổi trên jacket thép 66/220kV 200MVA",
          "Hệ thống GIS 66kV và 220kV trong nhà tiêu chuẩn IEC 62271",
          "Diesel generator dự phòng 2×1000kVA cho tải tự dùng",
          "Hệ thống phòng cháy chữa cháy tự động FM200",
        ],
      },
      {
        title: "Đấu nối và vận hành",
        items: [
          "Đường dây 220kV bờ dài 8km vào trạm Đồng Hới",
          "Hệ thống bảo vệ kỹ thuật số IEC 61850 toàn nhà máy",
          "Hệ thống quản lý điện gió SCADA/EMS Vestas WPM",
          "Đào tạo vận hành và bàn giao tài liệu AS-BUILT đầy đủ",
        ],
      },
    ],
    challenges: [
      {
        title: "Thi công cáp ngầm biển trong mùa gió Quảng Bình",
        description: "Vùng biển Quảng Bình nổi tiếng với gió mùa mạnh từ tháng 9-12 và sóng cao 4-6m, rút ngắn cửa sổ thi công xuống chỉ còn 5-6 tháng/năm. Tuấn Lộc phối hợp với tàu chuyên dụng HLV Tuấn Lộc 01 có khả năng hoạt động trong sóng 3.5m, đảm bảo tiến độ kế hoạch.",
      },
      {
        title: "Đấu nối song song với giai đoạn I đang vận hành",
        description: "Giai đoạn I (128MW) vẫn vận hành trong khi giai đoạn II được xây dựng trên cùng thanh cái 66kV. Chiến lược đấu nối \"hot tie-in\" được thực hiện trong cửa sổ dừng máy 4 giờ theo kế hoạch, không ảnh hưởng đến doanh thu phát điện của Giai đoạn I.",
      },
    ],
    outcomes: [
      "Sản lượng phát điện 650 GWh/năm, cao hơn 5% so với dự báo gió",
      "Tránh phát thải 650,000 tấn CO₂/năm, tương đương trồng 30 triệu cây xanh",
      "Hoàn thành trong 23 tháng, đúng tiến độ hợp đồng",
      "Được trao giải 'Dự án Năng lượng Tái tạo Tiêu biểu 2025' của Bộ Công Thương",
    ],
    relatedProjectIds: ["nang-luong-mat-troi", "luoi-dien-quoc-gia"],
  },
};

const allProjectsPreview: Record<string, { title: string; label: string; image: string }> = {
  "luoi-dien-quoc-gia": {
    title: "Mở rộng lưới điện quốc gia 500kV",
    label: "TIỆN ÍCH QUY MÔ LỚN",
    image: "https://images.unsplash.com/photo-1652849962548-44d46f88d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdyaWQlMjBsaW5lc3xlbnwxfHx8fDE3Nzg2Njk5OTF8MA&ixlib=rb-4.1.0&q=80&w=600",
  },
  "nang-luong-mat-troi": {
    title: "Cánh đồng năng lượng mặt trời 400MW",
    label: "NĂNG LƯỢNG TÁI TẠO",
    image: "https://images.unsplash.com/photo-1770936994282-8811fb7129ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjBhZXJpYWx8ZW58MXx8fHwxNzc4NjY5OTkxfDA&ixlib=rb-4.1.0&q=80&w=600",
  },
  "scada": {
    title: "Hệ thống SCADA nhà máy thông minh",
    label: "TỰ ĐỘNG HÓA",
    image: "https://images.unsplash.com/photo-1735494033199-cb0b52275d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3ODY2OTk5MXww&ixlib=rb-4.1.0&q=80&w=600",
  },
  "cau-vuot-song": {
    title: "Khung cầu vượt sông Cần Thơ",
    label: "CÔNG TRÌNH DÂN DỤNG",
    image: "https://images.unsplash.com/photo-1559843788-693858bf7338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZ2UlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzc4NjY5OTk1fDA&ixlib=rb-4.1.0&q=80&w=600",
  },
  "dien-gio": {
    title: "Trang trại điện gió ven biển Giai đoạn II",
    label: "BỀN VỮNG",
    image: "https://images.unsplash.com/photo-1656264416686-d9cfa9e99073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwZmFybSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Nzg2Njk5OTV8MA&ixlib=rb-4.1.0&q=80&w=600",
  },
};

const iconMap = { zap: Zap, users: Users, shield: Shield, settings: Settings };

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <div className="relative w-full h-[520px] flex items-end bg-gray-900 overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16 w-full">
          {/* Breadcrumb */}
          <div className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
            <Link to="/projects" className="hover:text-white flex items-center gap-1 transition-colors">
              <ArrowLeft size={12} /> Dự án
            </Link>
            <span>/</span>
            <span className="text-gray-300 truncate max-w-sm">{project.title}</span>
          </div>
          <div className={`inline-block text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm mb-4 ${project.labelColor}`}>
            {project.label}
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight max-w-3xl">{project.title}</h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">{project.subtitle}</p>
        </div>
      </div>

      {/* Meta bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-wrap gap-8 items-center">
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={16} className="text-[#b71508]" />
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">VỊ TRÍ</div>
              <div className="font-bold text-[#111827]">{project.location}</div>
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="flex items-center gap-2 text-sm">
            <Calendar size={16} className="text-[#b71508]" />
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">THỜI GIAN</div>
              <div className="font-bold text-[#111827]">{project.duration}</div>
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="flex items-center gap-2 text-sm">
            <Users size={16} className="text-[#b71508]" />
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">CHỦ ĐẦU TƯ</div>
              <div className="font-bold text-[#111827]">{project.client}</div>
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">TRẠNG THÁI</div>
            <span className={`text-sm font-bold px-3 py-1 rounded-full ${project.statusColor}`}>
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-8 py-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main */}
        <div className="lg:col-span-2 flex flex-col gap-14">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-5">Tổng quan dự án</h2>
            <p className="text-gray-600 leading-relaxed text-base">{project.overview}</p>
          </div>

          {/* Gallery */}
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-5">Hình ảnh thực tế</h2>
            <div className="grid grid-cols-3 gap-4">
              {project.galleryImages.map((src, i) => (
                <div key={i} className={`rounded-lg overflow-hidden ${i === 0 ? "col-span-2 row-span-1" : ""} aspect-video`}>
                  <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Scope */}
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-6">Phạm vi công việc</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.scope.map((section, i) => (
                <div key={i} className="bg-[#f8fafc] border border-gray-100 rounded-lg p-7">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1 h-5 bg-[#b71508] rounded-full" />
                    <h3 className="font-bold text-[#111827] text-sm uppercase tracking-wider">{section.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <CheckCircle size={15} className="text-[#b71508] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h2 className="text-2xl font-bold text-[#111827] mb-6">Thách thức kỹ thuật & Giải pháp</h2>
            <div className="space-y-6">
              {project.challenges.map((c, i) => (
                <div key={i} className="border-l-4 border-[#b71508] pl-6 py-2">
                  <h3 className="font-bold text-[#111827] mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="bg-[#111827] rounded-xl p-8 text-white">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Shield size={20} className="text-[#b71508]" /> Kết quả đạt được
            </h2>
            <ul className="space-y-4">
              {project.outcomes.map((o, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#b71508] shrink-0 mt-1.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-8">
          {/* Key Metrics */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">CHỈ SỐ CHÍNH</h3>
            <div className="grid grid-cols-2 gap-3">
              {project.keyMetrics.map((m, i) => {
                const MetricIcon = iconMap[m.icon];
                return (
                  <div key={i} className="bg-[#f8fafc] border border-gray-100 rounded-lg p-5 flex flex-col">
                    <MetricIcon size={18} className="text-[#b71508] mb-3" />
                    <div className="text-2xl font-bold text-[#111827] leading-none mb-1">{m.value}</div>
                    <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-tight">{m.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-[#f0f4ff] border border-[#c7d2fe] rounded-lg p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#3b4b8a] mb-4">CHỨNG NHẬN ÁP DỤNG</h3>
            <div className="space-y-2">
              {["ISO 9001:2015", "OHSAS 18001", "IEC 61850", "IEC 60076"].map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm font-bold text-[#3b4b8a]">
                  <CheckCircle size={14} className="text-[#3b4b8a]" /> {cert}
                </div>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-[#b71508] text-white rounded-xl p-7">
            <h3 className="font-bold text-lg mb-3">Tư vấn dự án tương tự</h3>
            <p className="text-red-100 text-sm mb-5 leading-relaxed">
              Liên hệ đội ngũ kỹ sư để được tư vấn giải pháp phù hợp với quy mô và yêu cầu kỹ thuật của dự án bạn.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <PhoneCall size={16} className="text-red-200" />
                <span className="font-bold">0900.555.888</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-red-200" />
                <span className="font-bold">projects@tuanloc.vn</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-5 block bg-white text-[#b71508] font-bold py-3 rounded text-xs uppercase tracking-wider text-center hover:bg-red-50 transition-colors"
            >
              Liên hệ ngay
            </Link>
          </div>

          {/* Download */}
          <button className="border border-[#3b4b8a] text-[#3b4b8a] font-bold py-3 px-4 rounded text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#f0f4ff] transition-colors">
            <FileText size={16} /> Tải hồ sơ năng lực dự án
          </button>
        </div>
      </div>

      {/* Related Projects */}
      <div className="bg-[#f8fafc] border-t border-gray-100 py-16 w-full">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-[#111827] mb-8">Dự án liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.relatedProjectIds.map((rid) => {
              const rel = allProjectsPreview[rid];
              if (!rel) return null;
              return (
                <Link
                  key={rid}
                  to={`/projects/${rid}`}
                  className="group flex gap-5 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="w-28 h-20 rounded-lg overflow-hidden shrink-0">
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-[#b71508] uppercase tracking-widest mb-1">{rel.label}</div>
                    <div className="font-bold text-[#111827] text-sm group-hover:text-[#b71508] transition-colors leading-snug">{rel.title}</div>
                    <div className="mt-2 flex items-center gap-1 text-[#b71508] text-xs font-bold uppercase tracking-wider">
                      Xem chi tiết <ArrowUpRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
