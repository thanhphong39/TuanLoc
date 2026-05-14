import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export function Projects() {
  const projects = [
    {
      id: "luoi-dien-quoc-gia",
      title: "Mở rộng lưới điện quốc gia",
      label: "TIỆN ÍCH QUY MÔ LỚN",
      description: "Tích hợp các đường dây truyền tải điện siêu cao áp 500kV trải dài 120km, cung cấp điện ổn định cho hơn 4 triệu dân cư khu vực phía Nam.",
      location: "Các tỉnh khu vực phía Nam",
      status: "Đang hoạt động",
      image: "https://images.unsplash.com/photo-1652849962548-44d46f88d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdyaWQlMjBsaW5lc3xlbnwxfHx8fDE3Nzg2Njk5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      large: true
    },
    {
      id: "nang-luong-mat-troi",
      title: "Cánh đồng năng lượng mặt trời 400MW",
      label: "NĂNG LƯỢNG TÁI TẠO",
      description: "Triển khai hệ thống giá đỡ quang điện tiên tiến và các trạm biến áp công suất lớn.",
      location: "Tỉnh Bình Thuận",
      image: "https://images.unsplash.com/photo-1770936994282-8811fb7129ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjBhZXJpYWx8ZW58MXx8fHwxNzc4NjY5OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "scada",
      title: "Hệ thống SCADA nhà máy thông minh",
      label: "TỰ ĐỘNG HÓA",
      description: "Khu công nghiệp Đà Nẵng",
      image: "https://images.unsplash.com/photo-1735494033199-cb0b52275d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3ODY2OTk5MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "cau-vuot-song",
      title: "Khung cầu vượt sông",
      label: "CÔNG TRÌNH DÂN DỤNG",
      description: "Thành phố Cần Thơ",
      image: "https://images.unsplash.com/photo-1559843788-693858bf7338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZ2UlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzc4NjY5OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: "dien-gio",
      title: "Trang trại điện gió ven biển Giai đoạn II",
      label: "BỀN VỮNG",
      description: "Tỉnh Quảng Bình",
      image: "https://images.unsplash.com/photo-1656264416686-d9cfa9e99073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwZmFybSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Nzg2Njk5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#f8fafc]">
      {/* Hero */}
      <section className="relative w-full h-[500px] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559843788-693858bf7338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZ2UlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzc4NjY5OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex flex-col items-start text-white">
          <div className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-4">
            KỸ THUẬT XUẤT SẮC
          </div>
          
          <h1 className="text-5xl font-bold mb-6 leading-tight max-w-2xl text-white">
            Xây dựng tương lai<br />hạ tầng.
          </h1>
          
          <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
            Từ mạng lưới điện quốc gia đến các khu phức hợp công nghiệp phức tạp, Tuấn Lộc cung cấp các giải pháp kỹ thuật chính xác và xây dựng hạng nặng thúc đẩy sự tiến bộ.
          </p>
          
          <div className="flex items-center gap-4">
            <button className="bg-[#b71508] hover:bg-red-800 text-white font-bold py-3 px-6 rounded text-sm uppercase tracking-wider transition-colors">
              Khám phá công việc
            </button>
            <button className="border border-white/40 hover:bg-white/10 text-white font-bold py-3 px-6 rounded text-sm uppercase tracking-wider transition-colors">
              Tải hồ sơ năng lực
            </button>
          </div>
        </div>
      </section>

      {/* Filter and Stats */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <button className="bg-[#b71508] text-white font-bold text-xs uppercase tracking-widest px-4 py-2 rounded shrink-0">Tất cả dự án</button>
            <button className="bg-white border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded hover:bg-gray-50 shrink-0">Lưới điện</button>
            <button className="bg-white border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded hover:bg-gray-50 shrink-0">Hạ tầng dân dụng</button>
            <button className="bg-white border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded hover:bg-gray-50 shrink-0">Năng lượng tái tạo</button>
            <button className="bg-white border border-gray-200 text-gray-600 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded hover:bg-gray-50 shrink-0">Bảo trì</button>
          </div>

          <div className="flex items-center gap-8 shrink-0">
            <div className="flex flex-col items-center">
              <span className="text-[#b71508] font-bold text-xl">250+</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">DỰ ÁN HOÀN THÀNH</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#111827] font-bold text-xl">15 GW</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">KẾT NỐI LƯỚI ĐIỆN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className={`bg-[#f0f4f8] rounded-xl overflow-hidden group cursor-pointer border border-gray-100 flex flex-col ${
                project.large ? "md:col-span-2" : "col-span-1"
              }`}
            >
              <div className={`relative overflow-hidden ${project.large ? "h-80" : "h-56"}`}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-[#fee2e2] text-[#b71508] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
                    {project.label}
                  </div>
                  {project.large && <ArrowUpRight size={20} className="text-gray-400 group-hover:text-[#b71508] transition-colors" />}
                </div>
                
                <h3 className="text-2xl font-bold text-[#111827] mb-3 group-hover:text-[#b71508] transition-colors">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-1 text-sm">{project.description}</p>
                
                {(project.location || project.status) && (
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    {project.location && (
                      <div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">VỊ TRÍ</div>
                        <div className="text-sm font-bold text-[#111827]">{project.location}</div>
                      </div>
                    )}
                    {project.status && (
                      <div className="text-right">
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">TRẠNG THÁI</div>
                        <div className="text-sm font-bold text-blue-600 flex items-center gap-1.5 justify-end">
                          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                          {project.status}
                        </div>
                      </div>
                    )}
                    {!project.status && !project.large && (
                      <ArrowUpRight size={20} className="text-[#b71508] ml-auto" />
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="bg-[#b71508] text-white py-20 px-8 text-center relative overflow-hidden w-full">
         <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1735494033199-cb0b52275d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGZhY3RvcnklMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3ODY2OTk5MXww&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center mix-blend-overlay"></div>
         <div className="relative z-10 max-w-3xl mx-auto">
           <h2 className="text-4xl font-bold mb-6">Sẵn sàng xây dựng cột mốc tiếp theo?</h2>
           <p className="text-red-100 text-lg mb-10">
             Tham khảo ý kiến chuyên gia kỹ thuật của chúng tôi để đánh giá dự án ưu tiên tính khả thi, hiệu quả và năng suất cao trong công nghiệp.
           </p>
           <div className="flex justify-center gap-4">
             <button className="bg-white text-[#b71508] font-bold py-4 px-8 rounded text-sm uppercase tracking-wider hover:bg-gray-50 transition-colors">
               Liên hệ bộ phận kinh doanh
             </button>
             <button className="bg-transparent border border-white text-white font-bold py-4 px-8 rounded text-sm uppercase tracking-wider hover:bg-white/10 transition-colors">
               Yêu cầu dự án
             </button>
           </div>
         </div>
      </div>
      
      {/* Map Section Mockup */}
      <div className="py-24 px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16 items-center">
         <div className="max-w-md">
           <div className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Sự hiện diện toàn cầu</div>
           <p className="text-gray-600 mb-8 leading-relaxed">
             Cam kết của chúng tôi đối với an toàn và độ chính xác kỹ thuật đã giúp Tuấn Lộc đạt được các chứng nhận quốc tế và sự hoan nghênh của ngành trên khắp khu vực Châu Á - Thái Bình Dương.
           </p>
           <div className="flex gap-6 text-sm font-bold text-[#111827]">
             <span>ISO 9001</span>
             <span>OHSAS 18001</span>
             <span>LEED GOLD</span>
           </div>
         </div>
         <div className="flex-1 bg-gray-200 rounded-xl h-80 relative overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXB8ZW58MXx8fHwxNzc4NjY5OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover mix-blend-luminosity opacity-50" />
            <div className="absolute top-8 left-8 bg-white p-6 rounded shadow-lg max-w-sm">
               <h4 className="font-bold text-[#111827] mb-2">Dấu chân của chúng tôi</h4>
               <p className="text-xs text-gray-600">Các dự án của chúng tôi trải rộng trên 12 tỉnh thành ở Châu Á - Thái Bình Dương. Góp phần vào sự phát triển năng lượng bền vững và xây dựng.</p>
            </div>
         </div>
      </div>
    </div>
  );
}
