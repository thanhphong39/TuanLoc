import { Settings, Wrench, ShieldCheck, Zap, ArrowRight, Lightbulb } from "lucide-react";

export function Services() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative w-full h-[400px] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMG5pZ2h0fGVufDF8fHx8MTc3ODY2OTg4Mnww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Hero" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-white">
          <div className="bg-[#b71508] px-3 py-1 rounded-sm mb-6 inline-block text-[10px] font-bold uppercase tracking-widest">
            CHUYÊN MÔN CỦA CHÚNG TÔI
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Kỹ thuật xuất sắc<br />trong hạ tầng
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Tuấn Lộc mang đến các giải pháp xây lắp điện và tư vấn tích hợp cho những dự án hạ tầng công nghiệp tham vọng nhất khu vực.
          </p>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-24 px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Năng lực cốt lõi</h2>
            <p className="text-gray-600 text-lg">
              Các dịch vụ kỹ thuật chính xác được thiết kế để đáp ứng nhu cầu khắt khe của công nghiệp nặng và phát triển đô thị hiện đại.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-[#f8fafc] px-6 py-4 rounded-lg border-l-4 border-[#b71508]">
            <div className="text-4xl font-bold text-[#b71508]">25+</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">NĂM KINH NGHIỆM<br/>CHUYÊN NGÀNH</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="col-span-1 md:col-span-2 bg-[#fdf2f2] rounded-xl p-10 border border-red-100 flex flex-col justify-between">
             <div>
               <div className="text-[#b71508] mb-6"><Settings size={32} /></div>
               <h3 className="text-2xl font-bold text-[#111827] mb-4">Thi công & Lắp đặt điện</h3>
               <p className="text-gray-700 leading-relaxed mb-8 max-w-xl">
                 Giải pháp chìa khóa trao tay toàn diện cho trạm biến áp cao thế, đường dây truyền tải và hệ thống phân phối điện công nghiệp. Chúng tôi quản lý toàn bộ vòng đời từ bản vẽ thiết kế đến khi vận hành chính thức.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                 <div className="flex items-center gap-3 text-sm font-medium text-[#111827]">
                   <span className="text-[#b71508]">✔</span> Xây dựng trạm biến áp 110kV/500kV
                 </div>
                 <div className="flex items-center gap-3 text-sm font-medium text-[#111827]">
                   <span className="text-[#b71508]">✔</span> Tích hợp nhà máy điện công nghiệp
                 </div>
                 <div className="flex items-center gap-3 text-sm font-medium text-[#111827]">
                   <span className="text-[#b71508]">✔</span> Hạ tầng nhà máy điện
                 </div>
                 <div className="flex items-center gap-3 text-sm font-medium text-[#111827]">
                   <span className="text-[#b71508]">✔</span> Hệ thống mạng lưới cáp quy mô lớn
                 </div>
               </div>
             </div>
             <button className="text-[#b71508] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:underline">
               KHÁM PHÁ DỊCH VỤ LẮP ĐẶT <ArrowRight size={16} />
             </button>
           </div>

           <div className="bg-[#3b4b8a] rounded-xl p-10 text-white flex flex-col justify-between">
             <div>
               <div className="text-yellow-400 mb-6"><Wrench size={32} /></div>
               <h3 className="text-xl font-bold mb-4">Bảo trì & Cải tạo</h3>
               <p className="text-blue-100 text-sm leading-relaxed mb-6">
                 Đảm bảo hiệu suất liên tục trong vận hành thông qua bảo trì phòng ngừa định kỳ và sửa chữa khẩn cấp phản ứng nhanh cho các cơ sở hạ tầng quan trọng.
               </p>
             </div>
             <div className="bg-blue-900/50 p-4 rounded text-xs font-bold text-blue-200 uppercase tracking-widest">
               CAM KẾT 99.9% THỜI GIAN HOẠT ĐỘNG HẠ TẦNG
             </div>
           </div>

           <div className="bg-[#f0f4f8] rounded-xl p-8 border border-gray-100">
             <div className="text-[#b71508] mb-4"><Lightbulb size={24} /></div>
             <h3 className="text-lg font-bold text-[#111827] mb-2">Tư vấn kỹ thuật</h3>
             <p className="text-gray-600 text-sm leading-relaxed">Nghiên cứu tiền khả thi, dự toán chi phí năng cho các cụm công nghiệp lớn.</p>
           </div>
           
           <div className="bg-[#f0f4f8] rounded-xl p-8 border border-gray-100">
             <div className="text-[#b71508] mb-4"><ShieldCheck size={24} /></div>
             <h3 className="text-lg font-bold text-[#111827] mb-2">An toàn & Tuân thủ</h3>
             <p className="text-gray-600 text-sm leading-relaxed">Kiểm định an toàn, chứng nhận ISO độc lập và giám sát tuân thủ quy định khu vực cho dự án.</p>
           </div>
           
           <div className="bg-[#f0f4f8] rounded-xl p-8 border border-gray-100">
             <div className="text-[#b71508] mb-4"><Zap size={24} /></div>
             <h3 className="text-lg font-bold text-[#111827] mb-2">Giải pháp lưới điện thông minh</h3>
             <p className="text-gray-600 text-sm leading-relaxed">Triển khai cảm biến IoT và hệ thống điều khiển tự động cho quản lý năng lượng hiện đại.</p>
           </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#1f2937] py-24 px-8 text-white w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Quy trình nghiêm ngặt của chúng tôi</h2>
            <p className="text-gray-400">Cách chúng tôi mang lại kết quả chính xác theo bản vẽ cho mỗi đối tác doanh nghiệp.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
               <div className="w-10 h-10 bg-[#b71508] rounded-full flex items-center justify-center font-bold text-sm mb-6">01</div>
               <h4 className="text-lg font-bold mb-3">Khám phá</h4>
               <p className="text-sm text-gray-400 leading-relaxed">Phân tích chi tiết các yêu cầu kỹ thuật và điều kiện hiện trường để xác định các hạn chế tiềm ẩn.</p>
            </div>
            <div className="relative">
               <div className="w-10 h-10 bg-[#b71508] rounded-full flex items-center justify-center font-bold text-sm mb-6">02</div>
               <h4 className="text-lg font-bold mb-3">Thiết kế chính xác</h4>
               <p className="text-sm text-gray-400 leading-relaxed">Mô hình 3D cho dự toán chi tiết và mô hình BIM với sự tham gia quy trình 100%.</p>
            </div>
            <div className="relative">
               <div className="w-10 h-10 bg-[#b71508] rounded-full flex items-center justify-center font-bold text-sm mb-6">03</div>
               <h4 className="text-lg font-bold mb-3">Thi công</h4>
               <p className="text-sm text-gray-400 leading-relaxed">Thi công theo từng giai đoạn được quản lý bởi các kỹ sư trưởng nhạy bén cao, tối ưu hóa giảm rủi ro.</p>
            </div>
            <div className="relative">
               <div className="w-10 h-10 bg-[#b71508] rounded-full flex items-center justify-center font-bold text-sm mb-6">04</div>
               <h4 className="text-lg font-bold mb-3">Chứng nhận</h4>
               <p className="text-sm text-gray-400 leading-relaxed">Thử nghiệm công suất nghiêm ngặt và nghiệm thu lần cuối trước khi bàn giao một hạ tầng hoàn thiện.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Specs */}
      <section className="py-24 px-8 max-w-7xl mx-auto w-full">
         <div className="mb-10">
           <h2 className="text-3xl font-bold text-[#111827] mb-2">Thông số dịch vụ</h2>
           <p className="text-gray-600">Các thông số kỹ thuật và tiêu chuẩn cho các phân cấp dịch vụ chính của chúng tôi.</p>
         </div>

         <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-20">
           <table className="w-full text-left">
             <thead className="bg-[#3b4b8a] text-white text-xs uppercase tracking-widest">
               <tr>
                 <th className="py-4 px-6">CẤP DỊCH VỤ</th>
                 <th className="py-4 px-6">DẢI ĐIỆN ÁP</th>
                 <th className="py-4 px-6">THỜI GIAN THỰC HIỆN THÔNG THƯỜNG</th>
                 <th className="py-4 px-6">ỨNG DỤNG CÔNG NGHIỆP</th>
               </tr>
             </thead>
             <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
               <tr>
                 <td className="py-4 px-6 font-bold text-[#111827]">Hạ tầng Cấp 1</td>
                 <td className="py-4 px-6">110kV - 500kV</td>
                 <td className="py-4 px-6">12 - 24 Tháng</td>
                 <td className="py-4 px-6">Lưới điện quốc gia, Nhà máy điện</td>
               </tr>
               <tr className="bg-gray-50">
                 <td className="py-4 px-6 font-bold text-[#111827]">Hệ thống điện công nghiệp</td>
                 <td className="py-4 px-6">22kV - 110kV</td>
                 <td className="py-4 px-6">6 - 12 Tháng</td>
                 <td className="py-4 px-6">Sản xuất, Trung tâm dữ liệu</td>
               </tr>
               <tr>
                 <td className="py-4 px-6 font-bold text-[#111827]">Phân phối thương mại</td>
                 <td className="py-4 px-6">0.4kV - 22kV</td>
                 <td className="py-4 px-6">3 - 6 Tháng</td>
                 <td className="py-4 px-6">Khu phức hợp đô thị, Khu công nghệ</td>
               </tr>
               <tr className="bg-gray-50">
                 <td className="py-4 px-6 font-bold text-[#111827]">Hợp đồng bảo trì</td>
                 <td className="py-4 px-6">Mọi cấp độ</td>
                 <td className="py-4 px-6">Liên tục (24/7)</td>
                 <td className="py-4 px-6">Quản lý cơ sở hạ tầng, Vận hành tiện ích</td>
               </tr>
             </tbody>
           </table>
         </div>

         {/* CTA */}
         <div className="bg-[#fdf2f2] border border-red-100 rounded-2xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#111827] mb-4">Sẵn sàng tư vấn kỹ thuật?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Hợp tác với Tuấn Lộc cho các giải pháp hạ tầng điện hạng nặng. Đội ngũ kỹ sư của chúng tôi luôn sẵn sàng thảo luận về các yêu cầu cụ thể của bạn.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-[#b71508] text-white font-bold py-3 px-6 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-colors">
                YÊU CẦU ĐỀ XUẤT
              </button>
              <button className="bg-transparent border border-[#b71508] text-[#b71508] font-bold py-3 px-6 rounded text-sm uppercase tracking-wider hover:bg-red-50 transition-colors">
                LIÊN HỆ CHUYÊN GIA
              </button>
            </div>
         </div>
      </section>
    </div>
  );
}
