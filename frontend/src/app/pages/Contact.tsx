import { MapPin, PhoneCall, Mail, Navigation } from "lucide-react";

export function Contact() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative w-full h-[350px] flex items-center bg-[#3b4b8a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1655936072893-921e69ae9038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGJ1aWxkaW5nJTIwZnJhbWUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzc4NjcwMDk3fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-multiply"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-white">
          <h1 className="text-5xl font-bold mb-4 text-white">Liên hệ với chúng tôi</h1>
          <p className="text-lg text-blue-100 max-w-xl">
            Kết nối với các chuyên gia hạ tầng của chúng tôi để thảo luận về dự án kỹ thuật hoặc xây dựng quy mô lớn tiếp theo của bạn.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <div className="text-[10px] font-bold text-[#b71508] uppercase tracking-widest mb-4">
            SỰ CHÍNH XÁC ĐÃ ĐƯỢC KHẲNG ĐỊNH
          </div>
          <h2 className="text-4xl font-bold text-[#111827] mb-6">Đối tác với đơn vị<br/>dẫn đầu ngành.</h2>
          <p className="text-gray-600 mb-10 leading-relaxed max-w-md">
            Đội ngũ điều hành của chúng tôi sẵn sàng tư vấn kỹ thuật cho các yêu cầu về hạ tầng điện và xây dựng hạng nặng trên toàn quốc.
          </p>

          <div className="flex flex-col gap-6">
            <div className="border border-gray-200 rounded-lg p-6 flex gap-6 hover:border-[#b71508] transition-colors bg-[#fdfdfd]">
              <div className="bg-red-50 text-[#b71508] p-4 rounded-full h-fit"><MapPin size={24} /></div>
              <div>
                <h4 className="text-lg font-bold text-[#111827] mb-2">Trụ sở chính</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  123 Đại lộ Công nghiệp, Quận Công nghệ cao<br />
                  TP. Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 flex gap-6 hover:border-[#b71508] transition-colors bg-[#fdfdfd]">
              <div className="bg-red-50 text-[#b71508] p-4 rounded-full h-fit"><PhoneCall size={24} /></div>
              <div>
                <h4 className="text-lg font-bold text-[#111827] mb-2">Hotline hỗ trợ</h4>
                <p className="text-gray-600 text-sm mb-1">Trong nước: 0900-TUAN-LOC</p>
                <p className="text-gray-600 text-sm">Quốc tế: +84 900 8826 562</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 flex gap-6 hover:border-[#b71508] transition-colors bg-[#fdfdfd]">
              <div className="bg-red-50 text-[#b71508] p-4 rounded-full h-fit"><Mail size={24} /></div>
              <div>
                <h4 className="text-lg font-bold text-[#111827] mb-2">Email doanh nghiệp</h4>
                <p className="text-gray-600 text-sm mb-1">contact@tuanloc.com.vn</p>
                <p className="text-gray-600 text-sm">projects@tuanloc.com.vn</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-10 h-fit">
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">HỌ VÀ TÊN</label>
                <input type="text" placeholder="Nguyễn Văn A" className="w-full bg-white border border-gray-200 rounded p-4 text-sm text-[#111827] outline-none focus:border-[#b71508]" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">ĐỊA CHỈ EMAIL</label>
                <input type="email" placeholder="email@congty.com" className="w-full bg-white border border-gray-200 rounded p-4 text-sm text-[#111827] outline-none focus:border-[#b71508]" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">SỐ ĐIỆN THOẠI</label>
                <input type="text" placeholder="+84 ..." className="w-full bg-white border border-gray-200 rounded p-4 text-sm text-[#111827] outline-none focus:border-[#b71508]" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">DỊCH VỤ QUAN TÂM</label>
                <select className="w-full bg-white border border-gray-200 rounded p-4 text-sm text-[#111827] outline-none focus:border-[#b71508] appearance-none">
                  <option>Hạ tầng điện</option>
                  <option>Tư vấn kỹ thuật</option>
                  <option>Xây lắp công nghiệp</option>
                  <option>Bảo trì thiết bị</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">MÔ TẢ DỰ ÁN</label>
              <textarea rows={5} placeholder="Cho chúng tôi biết về yêu cầu dự án của bạn..." className="w-full bg-white border border-gray-200 rounded p-4 text-sm text-[#111827] outline-none focus:border-[#b71508] resize-none"></textarea>
            </div>
            
            <div className="pt-4">
              <button type="submit" className="bg-[#b71508] text-white font-bold py-4 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-colors w-full mb-4">
                GỬI YÊU CẦU
              </button>
              <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest">
                Các quản lý dự án của chúng tôi thường phản hồi trong vòng 24 giờ làm việc.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[500px] relative overflow-hidden bg-gray-900 group">
         <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXB8ZW58MXx8fHwxNzc4NjY5OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Map Location" className="w-full h-full object-cover mix-blend-luminosity opacity-40 transition-transform duration-1000 group-hover:scale-105" />
         
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="bg-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4 mb-2 z-10 animate-bounce">
               <div className="bg-[#b71508] text-white p-2 rounded"><MapPin size={20} /></div>
               <div>
                 <div className="font-bold text-[#111827] text-lg leading-tight">Tập đoàn Tuấn Lộc</div>
                 <div className="text-[10px] text-gray-500 uppercase tracking-widest">Trụ sở chính toàn cầu</div>
               </div>
            </div>
            <div className="text-[#b71508]"><Navigation size={48} className="fill-[#b71508] rotate-180" /></div>
         </div>
      </div>
    </div>
  );
}
