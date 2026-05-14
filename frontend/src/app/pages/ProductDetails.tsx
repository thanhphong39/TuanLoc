import { Download, FileText, CheckCircle, Shield, PhoneCall, Mail, Settings, Zap, Layers, ArrowLeft } from "lucide-react";
import { useParams, Link, Navigate } from "react-router";

const productData: Record<string, {
  id: string;
  category: string;
  badge: string;
  badgeColor: string;
  name: string;
  description: string;
  heroImage: string;
  thumbImages: string[];
  features: string[];
  specs: { param: string; standard: string; enterprise: string }[];
  stats: { value: string; label: string }[];
  featureCards: { icon: "settings" | "zap" | "shield" | "layers"; title: string; body: string; dark: boolean }[];
  detailCard: { icon: "settings" | "zap" | "shield" | "layers"; title: string; body: string; metrics: { value: string; label: string }[] };
  ctaEmail: string;
}> = {
  "tx-500": {
    id: "tx-500",
    category: "MÁY BIẾN ÁP",
    badge: "HÀNG SẴN KHO",
    badgeColor: "bg-[#b71508]",
    name: "TX-500 Máy biến áp dầu cao thế",
    description: "Được chế tạo từ lõi silicon M4 đạt chuẩn IEC 60076, TX-500 đảm bảo hiệu suất truyền tải vượt trội cho các trạm biến áp trung áp 35kV. Thiết kế làm mát dầu tự nhiên kết hợp vỏ thép chống gỉ mang lại độ bền tối ưu trong môi trường công nghiệp khắc nghiệt.",
    heroImage: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRyYW5zZm9ybWVyfGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    thumbImages: [
      "https://images.unsplash.com/photo-1613072233238-4d290992404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMHBhbmVsJTIwc3dpdGNoZ2VhcnxlbnwxfHx8fDE3Nzg2Njk5MTV8MA&ixlib=rb-4.1.0&q=80&w=500",
      "https://images.unsplash.com/photo-1564491300644-34f660c910da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdm9sdGFnZSUyMGNhYmxlJTIwY3Jvc3MlMjBzZWN0aW9ufGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=500",
      "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMG5pZ2h0fGVufDF8fHx8MTc3ODY2OTg4Mnww&ixlib=rb-4.1.0&q=80&w=500",
      "https://images.unsplash.com/photo-1765375522929-994a71439c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3Vic3RhdGlvbiUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3ODY2OTg4Mnww&ixlib=rb-4.1.0&q=80&w=500",
    ],
    features: [
      "Đạt chứng nhận IEC 60076 & TCVN 6306",
      "Lõi thép silicon M4 tổn hao thấp (<0.9 W/kg)",
      "Hệ thống làm mát ONAN – bảo trì không dầu 5 năm",
    ],
    specs: [
      { param: "Công suất định mức", standard: "250 – 2500 kVA", enterprise: "Lên đến 5000 kVA (Tùy chỉnh)" },
      { param: "Điện áp sơ cấp", standard: "22 kV / 35 kV", enterprise: "Đa đầu ra cấu hình linh hoạt" },
      { param: "Điện áp thứ cấp", standard: "0.4 kV / 6.3 kV", enterprise: "Theo yêu cầu thiết kế" },
      { param: "Hiệu suất (%)", standard: "98.8% @ Toàn tải", enterprise: "99.1% @ Tối ưu tiết kiệm" },
      { param: "Phương pháp làm mát", standard: "ONAN (Dầu tự nhiên)", enterprise: "ONAF (Dầu tự nhiên + Cưỡng bức)" },
      { param: "Chỉ số bảo vệ", standard: "IP44 / NEMA 2", enterprise: "IP55 / IP67 (Tùy chọn)" },
    ],
    stats: [
      { value: "98.8%", label: "HIỆU SUẤT" },
      { value: "30 NĂM", label: "TUỔI THỌ THIẾT KẾ" },
    ],
    featureCards: [
      { icon: "zap", title: "Giám sát nhiệt thông minh", body: "Cảm biến Pt100 nhúng trực tiếp trong cuộn dây cung cấp dữ liệu nhiệt độ thời gian thực, tự động cắt khi vượt ngưỡng an toàn.", dark: true },
      { icon: "shield", title: "Bảo vệ quá áp tích hợp", body: "Thiết bị chống sét lan truyền cấp D+E tích hợp sẵn, không cần thiết bị bảo vệ bổ sung cho cấu hình tiêu chuẩn.", dark: false },
    ],
    detailCard: {
      icon: "settings",
      title: "Kỹ thuật lõi thép chính xác",
      body: "Lõi silicon M4 được cắt nghiêng 45° bằng máy cắt CNC đảm bảo khớp tuyệt đối các tấm thép, giảm tiếng ồn xuống dưới 50dB và tổn hao không tải <0.9 W/kg – thấp hơn 22% so với tiêu chuẩn ngành.",
      metrics: [
        { value: "50dB", label: "MỨC ỒN THIẾT KẾ" },
        { value: "22%", label: "GIẢM TỔN HAO" },
      ],
    },
    ctaEmail: "tx500@tuanloc.vn",
  },

  "armor-shield": {
    id: "armor-shield",
    category: "DÂY VÀ CÁP ĐIỆN",
    badge: "XUẤT KHẨU",
    badgeColor: "bg-[#3b4b8a]",
    name: "Cáp ArmorShield Cao Thế 3 lõi",
    description: "Cáp ArmorShield được chế tạo với lõi đồng 99.9% tinh khiết, cách điện XLPE chịu nhiệt 90°C và lớp giáp thép dải bảo vệ cơ học cấp cao. Phù hợp cho đường cáp ngầm khu công nghiệp, truyền tải điện đường dài và các dự án điện gió ngoài khơi.",
    heroImage: "https://images.unsplash.com/photo-1564491300644-34f660c910da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdm9sdGFnZSUyMGNhYmxlJTIwY3Jvc3MlMjBzZWN0aW9ufGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    thumbImages: [
      "https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRyYW5zZm9ybWVyfGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=500",
      "https://images.unsplash.com/photo-1613072233238-4d290992404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMHBhbmVsJTIwc3dpdGNoZ2VhcnxlbnwxfHx8fDE3Nzg2Njk5MTV8MA&ixlib=rb-4.1.0&q=80&w=500",
      "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMG5pZ2h0fGVufDF8fHx8MTc3ODY2OTg4Mnww&ixlib=rb-4.1.0&q=80&w=500",
      "https://images.unsplash.com/photo-1765375522929-994a71439c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3Vic3RhdGlvbiUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3ODY2OTg4Mnww&ixlib=rb-4.1.0&q=80&w=500",
    ],
    features: [
      "Lõi đồng 99.9% – dẫn điện Class 2 IEC 60228",
      "Cách điện XLPE chịu nhiệt 90°C liên tục, 250°C ngắn mạch",
      "Giáp thép dải kép (SWA) chống hư hại cơ học cấp cao",
    ],
    specs: [
      { param: "Tiết diện dây dẫn", standard: "35 – 240 mm²", enterprise: "300 – 630 mm² (Tùy đặt hàng)" },
      { param: "Điện áp danh định (Uo/U)", standard: "6/10 kV", enterprise: "8.7/15 kV – 12/20 kV" },
      { param: "Vật liệu lõi", standard: "Đồng 99.9% (Cu Class 2)", enterprise: "Đồng mạ bạc (tùy chọn)" },
      { param: "Cách điện", standard: "XLPE (Cross-linked PE)", enterprise: "HEPR (Chịu nhiệt độ cao)" },
      { param: "Lớp giáp bảo vệ", standard: "SWA – dải thép tráng kẽm", enterprise: "STA – dải thép không gỉ" },
      { param: "Nhiệt độ vận hành", standard: "–30°C đến +90°C", enterprise: "–40°C đến +105°C" },
    ],
    stats: [
      { value: "99.9%", label: "ĐỘ TINH KHIẾT ĐỒNG" },
      { value: "250°C", label: "CHỊU NGẮN MẠCH" },
    ],
    featureCards: [
      { icon: "layers", title: "Cấu trúc đa lớp chống thấm", body: "Lớp bán dẫn ngoài kết hợp băng chống thấm hydroscopic ngăn chặn thấm nước dọc trục dài hơn 1m trong môi trường ngầm ngập nước.", dark: true },
      { icon: "shield", title: "Kiểm tra xuất xưởng 100%", body: "Mỗi cuộn cáp đều trải qua kiểm tra điện áp DC 4U0 và kiểm tra cách điện Megger 1000V trước khi xuất kho theo IEC 60502-2.", dark: false },
    ],
    detailCard: {
      icon: "zap",
      title: "Công nghệ đùn 3 lớp đồng thời",
      body: "Dây chuyền đùn CCV (Catenary Continuous Vulcanization) tạo ra 3 lớp – bán dẫn lõi, XLPE cách điện và bán dẫn ngoài – trong một lần chạy liên tục, đảm bảo ranh giới điện trường hoàn hảo và loại bỏ tạp chất giữa các lớp.",
      metrics: [
        { value: "3 LỚP", label: "ĐÙN ĐỒNG THỜI" },
        { value: "0 SỰ CỐ", label: "TỶ LỆ TẠP CHẤT" },
      ],
    },
    ctaEmail: "cable@tuanloc.vn",
  },

  "sg-prime": {
    id: "sg-prime",
    category: "TỦ ĐIỆN",
    badge: "DÀNH CHO DOANH NGHIỆP",
    badgeColor: "bg-[#3b4b8a]",
    name: "Trung tâm điều khiển SG-Prime 12-24kV",
    description: "SG-Prime là hệ thống tủ điện phân phối trung thế kiểu kín (GIS) thế hệ mới, tích hợp công nghệ chống hồ quang quang điện cấp 4. Thiết kế module linh hoạt cho phép mở rộng không cần dừng vận hành, lý tưởng cho các trung tâm dữ liệu, khu công nghiệp và hạ tầng điện lực quan trọng.",
    heroImage: "https://images.unsplash.com/photo-1613072233238-4d290992404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMHBhbmVsJTIwc3dpdGNoZ2VhcnxlbnwxfHx8fDE3Nzg2Njk5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    thumbImages: [
      "https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRyYW5zZm9ybWVyfGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=500",
      "https://images.unsplash.com/photo-1564491300644-34f660c910da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdm9sdGFnZSUyMGNhYmxlJTIwY3Jvc3MlMjBzZWN0aW9ufGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=500",
      "https://images.unsplash.com/photo-1765375522929-994a71439c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwc3Vic3RhdGlvbiUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3ODY2OTg4Mnww&ixlib=rb-4.1.0&q=80&w=500",
      "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMG5pZ2h0fGVufDF8fHx8MTc3ODY2OTg4Mnww&ixlib=rb-4.1.0&q=80&w=500",
    ],
    features: [
      "Chống hồ quang quang điện – IEC 62271-200 Arc Class B",
      "Công nghệ GIS – cách điện khí SF₆ hoặc không khí sạch",
      "Module mở rộng không dừng điện (Live Extension)",
    ],
    specs: [
      { param: "Cấp điện áp danh định", standard: "12 kV", enterprise: "24 kV (Tùy chọn 36 kV)" },
      { param: "Dòng điện thanh cái", standard: "630 – 1250 A", enterprise: "1600 – 2500 A" },
      { param: "Dòng cắt ngắn mạch", standard: "20 kA / 1s", enterprise: "31.5 kA / 3s" },
      { param: "Cấp bảo vệ vỏ tủ", standard: "IP54 / IK08", enterprise: "IP67 / IK10 (Ngoài trời)" },
      { param: "Chống hồ quang", standard: "Quang điện Cấp 4 – 12kA", enterprise: "Quang điện Cấp 4 – 20kA" },
      { param: "Truyền thông SCADA", standard: "IEC 61850 / Modbus RTU", enterprise: "IEC 61850-9-2LE / DNP3" },
    ],
    stats: [
      { value: "12kA", label: "CHỐNG HỒ QUANG" },
      { value: "IP54", label: "CẤP BẢO VỆ" },
    ],
    featureCards: [
      { icon: "settings", title: "Điều khiển SCADA tích hợp", body: "Rơ-le bảo vệ kỹ thuật số IED hỗ trợ IEC 61850 cho phép tích hợp trực tiếp vào hệ thống SCADA nhà máy, không cần bộ chuyển đổi giao thức.", dark: true },
      { icon: "shield", title: "Ngăn chặn hồ quang tức thì", body: "Cảm biến quang điện tốc độ nhanh <1ms phát hiện hồ quang và kích hoạt ngắt cách ly, giảm thiệt hại xuống mức tối thiểu trong các sự cố ngắn mạch.", dark: false },
    ],
    detailCard: {
      icon: "layers",
      title: "Kiến trúc module linh hoạt",
      body: "Hệ thống SG-Prime được thiết kế theo chuẩn module IEC 62271-202, cho phép bổ sung ngăn lộ mới trong khi toàn bộ hệ thống vẫn đang vận hành. Thời gian lắp đặt mở rộng trung bình chỉ 4 giờ/ngăn.",
      metrics: [
        { value: "4 GIỜ", label: "LẮP NGĂN MỚI" },
        { value: "0 DOWNTIME", label: "KHI MỞ RỘNG" },
      ],
    },
    ctaEmail: "sgprime@tuanloc.vn",
  },
};

const iconMap = {
  settings: Settings,
  zap: Zap,
  shield: Shield,
  layers: Layers,
};

export function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const product = id ? productData[id] : null;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const Icon = iconMap[product.detailCard.icon];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Breadcrumb */}
      <div className="py-4 px-8 border-b border-gray-100 text-xs font-medium uppercase tracking-widest text-gray-500">
        <div className="max-w-7xl mx-auto flex gap-2 items-center">
          <Link to="/products" className="hover:text-[#b71508] flex items-center gap-1">
            <ArrowLeft size={12} /> SẢN PHẨM
          </Link>
          <span>/</span>
          <span className="text-[#3b4b8a]">{product.category}</span>
          <span>/</span>
          <span className="text-[#111827] truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Gallery */}
        <div>
          <div className="bg-[#f0f4f8] rounded-lg mb-4 aspect-[4/3] flex items-center justify-center overflow-hidden relative">
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-full h-full object-cover rounded shadow-lg"
            />
            <div className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm text-white ${product.badgeColor}`}>
              {product.badge}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.thumbImages.map((src, i) => (
              <div
                key={i}
                className={`bg-[#f0f4f8] rounded aspect-square overflow-hidden ${i === 0 ? "border-2 border-[#b71508]" : "border border-gray-200"}`}
              >
                {i === 3 ? (
                  <div className="relative w-full h-full">
                    <img src={src} alt="More" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="text-white font-bold text-xs">+3 Xem thêm</span>
                    </div>
                  </div>
                ) : (
                  <img src={src} alt={`Detail ${i + 1}`} className="w-full h-full object-cover" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Info */}
        <div>
          <div className="bg-[#e0e7ff] text-[#3b4b8a] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm inline-block mb-6">
            {product.category}
          </div>
          <h1 className="text-4xl font-bold text-[#111827] mb-6 leading-tight">{product.name}</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

          <ul className="space-y-4 mb-10">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[#b71508] shrink-0 mt-0.5" />
                <span className="text-[#111827] font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mb-8">
            <button className="bg-[#b71508] text-white font-bold py-4 px-6 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-colors flex items-center justify-center gap-2 w-full">
              <Mail size={18} /> Yêu cầu báo giá doanh nghiệp
            </button>
            <button className="bg-white border border-[#b71508] text-[#b71508] font-bold py-4 px-6 rounded text-sm uppercase tracking-wider hover:bg-red-50 transition-colors flex items-center justify-center gap-2 w-full">
              <Download size={18} /> Tải Catalogue PDF đầy đủ
            </button>
          </div>

          <div className="bg-[#f8fafc] p-6 rounded-lg border border-gray-100 flex items-start gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm text-[#b71508]">
              <PhoneCall size={20} />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Hỗ trợ kỹ thuật</div>
              <div className="text-lg font-bold text-[#b71508] mb-1">1900.555.888</div>
              <div className="text-sm text-gray-600">Sẵn sàng 24/7 cho các hạ tầng quan trọng.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Specs Table */}
      <div className="bg-[#f8fafc] py-20 w-full border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#111827] mb-2">Thông số kỹ thuật</h2>
              <p className="text-gray-600">Dữ liệu độ chính xác cấp bản vẽ để tích hợp hệ thống.</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#e0e7ff] text-[#3b4b8a] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded">Hệ mét</button>
              <button className="bg-white border border-gray-200 text-gray-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded">Hệ Anh</button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#3b4b8a] text-white text-xs uppercase tracking-widest">
                  <th className="py-4 px-6 font-bold w-1/3">THÔNG SỐ</th>
                  <th className="py-4 px-6 font-bold w-1/3 border-l border-white/20">CẤU HÌNH TIÊU CHUẨN</th>
                  <th className="py-4 px-6 font-bold w-1/3 border-l border-white/20">PHIÊN BẢN CAO CẤP ENTERPRISE</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
                {product.specs.map((row, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="py-4 px-6 font-bold text-[#111827]">{row.param}</td>
                    <td className="py-4 px-6 border-l border-gray-100">{row.standard}</td>
                    <td className="py-4 px-6 font-bold text-[#b71508] border-l border-gray-100">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end">
            <button className="text-[#b71508] text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:underline">
              <FileText size={16} /> Xem sơ đồ kích thước chi tiết &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Features Info */}
      <div className="max-w-7xl mx-auto px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-10 flex flex-col justify-between">
          <div>
            <div className="text-[#b71508] mb-6">
              <Icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-4">{product.detailCard.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-8">{product.detailCard.body}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {product.detailCard.metrics.map((m, i) => (
              <div key={i} className="bg-[#f8fafc] border border-gray-100 rounded-lg p-6">
                <div className="text-2xl font-bold text-[#3b4b8a] mb-1">{m.value}</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {product.featureCards.map((card, i) => {
            const CardIcon = iconMap[card.icon];
            return (
              <div key={i} className={`rounded-lg p-8 ${card.dark ? "bg-[#3b4b8a] text-white" : "bg-[#b71508] text-white"}`}>
                <div className={`mb-4 ${card.dark ? "text-yellow-400" : "text-red-200"}`}>
                  <CardIcon size={24} />
                </div>
                <h4 className="font-bold text-lg mb-3">{card.title}</h4>
                <p className={`text-sm leading-relaxed ${card.dark ? "text-blue-100" : "text-red-100"}`}>{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Consult CTA */}
      <div className="bg-[#1f2937] text-white w-full py-20 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-6">Tư vấn Kỹ thuật</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Trao đổi trực tiếp với các kỹ sư điện cao cấp của chúng tôi về việc tích hợp {product.name} vào dự án hạ tầng tiếp theo của bạn.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-500/20 text-[#ef4444] p-3 rounded"><PhoneCall size={24} /></div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">HOTLINE TOÀN CẦU</div>
                  <div className="text-xl font-bold">0900.555.888</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 text-blue-400 p-3 rounded"><Mail size={24} /></div>
                <div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">YÊU CẦU DOANH NGHIỆP</div>
                  <div className="text-xl font-bold">{product.ctaEmail}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl">
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">HỌ VÀ TÊN</label>
                  <input type="text" placeholder="Tên kỹ sư / Kiến trúc sư" className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-sm text-[#111827] outline-none focus:border-[#b71508]" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">EMAIL DOANH NGHIỆP</label>
                  <input type="email" placeholder="ten@congty.com" className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-sm text-[#111827] outline-none focus:border-[#b71508]" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">CHI NHÁNH DỰ ÁN</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-sm text-[#111827] outline-none focus:border-[#b71508]">
                  <option>Tư vấn ban đầu</option>
                  <option>Báo giá chi tiết</option>
                  <option>Hỗ trợ kỹ thuật</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">MÔ TẢ NGẮN GỌN DỰ ÁN</label>
                <textarea rows={4} placeholder="Nêu rõ yêu cầu hạ tầng của bạn..." className="w-full bg-gray-50 border border-gray-200 rounded p-3 text-sm text-[#111827] outline-none focus:border-[#b71508] resize-none"></textarea>
              </div>
              <button type="submit" className="bg-[#b71508] text-white font-bold py-4 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-colors mt-2">
                GỬI YÊU CẦU KỸ THUẬT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
