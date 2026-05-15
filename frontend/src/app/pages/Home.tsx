import { useState, useEffect } from "react";
import { ArrowRight, Settings, Radio, CheckCircle, ChevronRight, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const BANNERS = [
  "/Banner.jpg",
  "/banner2.jpg",
  "/banner3.jpg"
];


export function Home() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentIndex = ((page % BANNERS.length) + BANNERS.length) % BANNERS.length;

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [page]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 0.5
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0
    })
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative w-full h-[600px] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img 
              key={page}
              src={BANNERS[currentIndex]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {BANNERS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setPage([index, newDirection]);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-[#b71508] w-8" : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex flex-col items-start text-white">
          <div className="bg-[#b71508] px-4 py-1.5 rounded-sm mb-6 inline-block text-xs font-bold uppercase tracking-widest">
            Dẫn đầu thị trường
          </div>
          
          <h1 className="text-6xl font-bold mb-4 leading-tight tracking-tight max-w-3xl">
            Kiến tạo hạ tầng điện<br />
            <span className="text-gray-300">toàn cầu.</span>
          </h1>
          
          <p className="text-lg text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Cung cấp các giải pháp điện chính xác cho các khu công nghiệp nặng, mạng lưới năng lượng tái tạo và các dự án phát triển đô thị quy mô lớn trên toàn thế giới.
          </p>
          
          <div className="flex items-center gap-4">
            <button className="bg-[#b71508] hover:bg-red-800 text-white font-bold py-4 px-8 rounded text-sm uppercase tracking-wider transition-colors shadow-lg">
              XEM CÁC DỰ ÁN TRỌNG ĐIỂM
            </button>
            <button className="border border-white/40 hover:bg-white/10 text-white font-bold py-4 px-8 rounded text-sm uppercase tracking-wider transition-colors">
              THAM VẤN KỸ SƯ CỦA CHÚNG TÔI
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-[#111827] mb-4">Dịch vụ kỹ thuật chính xác</h2>
            <p className="text-gray-600 text-lg">
              Năng lực kỹ thuật của chúng tôi bao quát toàn bộ vòng đời hạ tầng điện, từ thiết kế bản vẽ đến triển khai cao áp.
            </p>
          </div>
          <button className="text-[#b71508] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:underline">
            KHÁM PHÁ TẤT CẢ DỊCH VỤ <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#f8fafc] rounded-lg p-8 border border-gray-100 col-span-1 md:col-span-2 relative overflow-hidden flex flex-col md:flex-row">
             <div className="relative z-10 flex-1 pr-8">
              <div className="text-[#b71508] mb-6"><Settings size={32} /></div>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">Xây lắp Công nghiệp Nặng</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                Lắp đặt hệ thống điện chuyên dụng cho nhà máy sản xuất, nhà máy lọc dầu và các cảng đang/nằm yêu cầu độ tin cậy vận hành 24/7.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                  <CheckCircle size={16} className="text-yellow-500" /> Hệ thống điện Cao Thế / Trung Thế
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                  <CheckCircle size={16} className="text-yellow-500" /> Hệ thống điều khiển quy trình
                </li>
              </ul>
             </div>
             <div className="flex-1 bg-gray-200 rounded-lg opacity-40 hidden md:block"></div>
          </div>

          <div className="bg-[#3b4b8a] text-white rounded-lg p-8 flex flex-col relative overflow-hidden">
            <div className="text-yellow-400 mb-6"><Settings size={32} /></div>
            <h3 className="text-xl font-bold mb-4">Hạ tầng lưới điện</h3>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed flex-1">
              Phát triển hệ thống phân phối điện và trạm biến áp quy mô quốc gia cho nhu cầu điện năng cao.
            </p>
            <button className="bg-white text-[#3b4b8a] font-bold py-3 px-6 rounded text-xs uppercase tracking-wider mt-auto w-full">
              TÌM HIỂU THÊM
            </button>
          </div>

          <div className="bg-[#eff2f9] rounded-lg p-8 flex items-center justify-between col-span-1 md:col-span-3">
             <div className="flex items-start gap-6 max-w-2xl">
               <div className="text-[#b71508]"><Settings size={32} /></div>
               <div>
                 <h3 className="text-xl font-bold text-[#111827] mb-2">Vận hành hiện trường</h3>
                 <p className="text-gray-600 text-sm">Bảo trì và hỗ trợ vận hành cho các dự án lớn.</p>
               </div>
             </div>
             <div className="bg-[#1e293b] text-white rounded-lg p-6 flex items-center gap-6 w-full max-w-md">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Giải pháp SCADA Thông minh</h3>
                  <p className="text-gray-400 text-xs">Tích hợp IoT để giám sát thông minh và tối ưu hóa điện năng.</p>
                </div>
                <div className="text-blue-400 bg-blue-900/50 p-4 rounded-lg"><Radio size={24} /></div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1f2937] py-16 text-white w-full">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-700">
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-5xl font-bold mb-2">25+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">NĂM KINH NGHIỆM</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-5xl font-bold mb-2">500+</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">DỰ ÁN LỚN</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-5xl font-bold mb-2">12</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">QUỐC GIA</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="text-5xl font-bold mb-2">ISO</div>
            <div className="text-xs uppercase tracking-widest text-gray-400 font-bold">CHỨNG NHẬN CHẤT LƯỢNG</div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-8 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-[#111827] mb-4">Dự án tiêu biểu</h2>
          <p className="text-gray-600 text-lg">Đỉnh cao của sự sáng tạo kỹ thuật và quản lý vận hành.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-6 h-80">
              <img 
                src="https://images.unsplash.com/photo-1626251376234-8bc112f0bcd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGZpZWxkfGVufDF8fHx8MTc3ODY2OTg4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Solar Project" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#b71508] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">NĂNG LƯỢNG</div>
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#b71508] transition-colors">Mở rộng lưới điện mặt trời phía Bắc</h3>
            <p className="text-gray-600">Hệ thống điện mặt trời 400MW và xây dựng trạm biến áp cực lớn.</p>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-6 h-80">
              <img 
                src="https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMG5pZ2h0fGVufDF8fHx8MTc3ODY2OTg4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Refinery Project" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-[#b71508] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">CÔNG NGHIỆP</div>
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#b71508] transition-colors">Tổ hợp Hóa dầu Miền Trung</h3>
            <p className="text-gray-600">Hệ thống phân phối điện toàn diện vùng đồng bằng và phòng chống lụt.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fee2e2] py-20 px-8 w-full flex justify-center mb-20">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-12 bg-white/50 backdrop-blur rounded-2xl p-12 border border-red-100">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-[#111827] mb-4">Sẵn sàng cho dự án hạ tầng tiếp theo của bạn?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Hợp tác với đội ngũ kỹ sư điện tinh nhuệ nhất khu vực Châu Á cho các dự án xây dựng hạng nặng của bạn.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#b71508] text-white font-bold py-4 px-8 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-colors">
                YÊU CẦU BÁO GIÁ
              </button>
              <button className="bg-white border border-gray-300 text-[#111827] font-bold py-4 px-8 rounded text-sm uppercase tracking-wider hover:bg-gray-50 transition-colors">
                LIÊN HỆ PHÒNG KINH DOANH
              </button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
             <div className="flex items-center gap-4 mb-4">
               <div className="bg-red-100 text-[#b71508] p-3 rounded-full"><PhoneCall size={24} /></div>
               <div>
                 <div className="text-sm font-bold text-gray-500 uppercase">Hotline kỹ thuật</div>
                 <div className="text-2xl font-bold text-[#111827]">098-535-2345</div>
               </div>
             </div>
             <p className="text-sm text-gray-600">Phục vụ 24/7 cho các yêu cầu hỗ trợ công nghiệp khẩn cấp và/hoặc vận hành trọng yếu.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
