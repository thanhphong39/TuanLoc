import { ChevronDown, FileText, Settings, Download } from "lucide-react";
import { Link } from "react-router";

export function Products() {
  const products = [
    {
      id: "tx-500",
      category: "Máy biến áp",
      name: "TX-500 Máy biến áp dầu",
      badge: "HÀNG SẴN KHO",
      image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRyYW5zZm9ybWVyfGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      specs: [
        { label: "Điện áp định mức", value: "35 kV" },
        { label: "Công suất", value: "2500 kVA" },
        { label: "Tiêu chuẩn", value: "IEC 60076" },
      ],
      action: "Liên hệ",
      actionIcon: <FileText size={16} />
    },
    {
      id: "armor-shield",
      category: "Dây và Cáp điện",
      name: "Cáp ArmorShield Cao Thế",
      badge: "",
      image: "https://images.unsplash.com/photo-1564491300644-34f660c910da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdm9sdGFnZSUyMGNhYmxlJTIwY3Jvc3MlMjBzZWN0aW9ufGVufDF8fHx8MTc3ODY2OTkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
      specs: [
        { label: "Dây dẫn", value: "99.9% Cu" },
        { label: "Cách điện", value: "XLPE" },
        { label: "Số lõi", value: "3 Lõi" },
      ],
      action: "Liên hệ",
      actionIcon: <FileText size={16} />
    },
    {
      id: "sg-prime",
      category: "Tủ điện",
      name: "Trung tâm điều khiển SG-Prime",
      badge: "DÀNH CHO DOANH NGHIỆP",
      image: "https://images.unsplash.com/photo-1613072233238-4d290992404d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMHBhbmVsJTIwc3dpdGNoZ2VhcnxlbnwxfHx8fDE3Nzg2Njk5MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      specs: [
        { label: "Cấp điện áp", value: "12-24 kV" },
        { label: "Chống hồ quang", value: "Cấp 4" },
        { label: "Cấp bảo vệ", value: "IP54" },
      ],
      action: "Liên hệ",
      actionIcon: <Settings size={16} />,
      primary: true
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc]">
      {/* Hero */}
      <div className="bg-[#f0f4f8] py-16 px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#111827] mb-4">
            Thiết bị <span className="text-[#b71508]">điện công nghiệp</span>
          </h1>
          <p className="text-gray-600 max-w-2xl text-lg">
            Giải pháp hạ tầng hiệu suất cao cho công nghiệp nặng, tiện ích công cộng và các dự án xây dựng thương mại. Được thiết kế với độ chính xác và tin cậy tuyệt đối.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12 flex gap-12 w-full">
        {/* Sidebar */}
        <div className="w-64 shrink-0 flex flex-col gap-10">
          <div>
            <h3 className="text-xs font-bold text-[#b71508] uppercase tracking-widest mb-6">Danh mục</h3>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 text-[#b71508] focus:ring-[#b71508]" />
                <span className="text-sm font-semibold text-[#111827]">Tất cả thiết bị</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#b71508] focus:ring-[#b71508]" />
                <span className="text-sm font-medium text-gray-600">Máy biến áp</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#b71508] focus:ring-[#b71508]" />
                <span className="text-sm font-medium text-gray-600">Cáp điện cao thế</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#b71508] focus:ring-[#b71508]" />
                <span className="text-sm font-medium text-gray-600">Hệ thống tủ điện</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#b71508] focus:ring-[#b71508]" />
                <span className="text-sm font-medium text-gray-600">Máy cắt chân không</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#b71508] uppercase tracking-widest mb-6">Thông số kỹ thuật</h3>
            <div className="bg-white border border-gray-200 rounded p-3 flex justify-between items-center cursor-pointer">
              <span className="text-sm text-gray-600">Dải điện áp (kV)</span>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>

          <div className="bg-[#111827] text-white p-6 rounded-lg mt-4">
            <h3 className="text-xl font-bold mb-4">Cần giải pháp tùy chỉnh?</h3>
            <p className="text-sm text-gray-400 mb-6">Đội ngũ kỹ sư của chúng tôi cung cấp thiết kế hạ tầng điện theo yêu cầu riêng biệt.</p>
            <button className="bg-[#b71508] text-white font-bold py-3 px-4 rounded w-full text-xs uppercase tracking-wider hover:bg-red-800 transition-colors">
              Tham khảo chuyên gia
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-gray-600 font-medium">Hiển thị 24 sản phẩm công nghiệp</p>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-500">Sắp xếp:</span>
              <div className="font-bold text-[#b71508] flex items-center gap-1 cursor-pointer">
                Mới nhất <ChevronDown size={16} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {products.map(product => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <Link to={`/products/${product.id}`} className="block relative h-56 bg-gray-100 p-6 flex items-center justify-center group overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  {product.badge && (
                    <div className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm text-white z-10 ${
                      product.badge === 'HÀNG SẴN KHO' ? 'bg-[#b71508]' : 'bg-[#3b4b8a]'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-xs font-bold text-[#3b4b8a] uppercase tracking-widest mb-2">{product.category}</div>
                  <Link to={`/products/${product.id}`} className="text-xl font-bold text-[#111827] mb-6 hover:text-[#b71508] transition-colors line-clamp-2 min-h-[56px]">
                    {product.name}
                  </Link>
                  
                  <div className="space-y-3 mb-8 mt-auto">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center pb-2 border-b border-gray-100 last:border-0 last:pb-0 text-sm">
                        <span className="text-gray-500">{spec.label}</span>
                        <span className="font-bold text-[#111827]">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 px-4 rounded font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${
                    product.primary 
                      ? "bg-[#b71508] text-white hover:bg-red-800" 
                      : "bg-white text-[#b71508] border border-[#b71508] hover:bg-red-50"
                  }`}>
                    {product.action} {product.actionIcon}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2">
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
              &lt;
            </button>
            <button className="w-10 h-10 flex items-center justify-center bg-[#b71508] text-white rounded font-bold">1</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-[#111827] font-medium hover:bg-gray-50">2</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-[#111827] font-medium hover:bg-gray-50">3</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded text-[#111827] font-medium hover:bg-gray-50">
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#2d3748] text-white py-16 px-8 relative overflow-hidden mt-12">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 flex items-center justify-center">
          <Settings size={300} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-6 max-w-2xl text-white">Thông số kỹ thuật dự án phức tạp?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            Đội ngũ kỹ sư của chúng tôi hỗ trợ lựa chọn các thông số kỹ thuật chính xác cho các dự án hạ tầng điện quy mô lớn. Chúng tôi đảm bảo tuân thủ mọi tiêu chuẩn khu vực và quốc tế.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#b71508] text-white font-bold py-3 px-6 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-colors flex items-center gap-2">
              <Download size={18} /> Tải Catalogue tổng
            </button>
            <button className="bg-transparent border border-gray-500 text-white font-bold py-3 px-6 rounded text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
              Liên hệ kỹ thuật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
