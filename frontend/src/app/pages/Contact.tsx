import { useState } from "react";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import { createContact } from "../../lib/api";

export function Contact() {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", projectDescription: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.projectDescription) return;
    setSubmitting(true);
    try {
      await createContact(form);
      setForm({ fullName: "", email: "", phone: "", projectDescription: "" });
      alert("Yêu cầu đã được gửi! Chúng tôi sẽ phản hồi trong vòng 24 giờ.");
    } catch {
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative w-full h-[350px] flex items-center bg-[#3b4b8a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/33706868/pexels-photo-33706868.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-65 mix-blend-multiply"
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

            <a href="tel:0985352345" className="border border-gray-200 rounded-lg p-6 flex gap-6 hover:border-[#b71508] transition-colors bg-[#fdfdfd]">
              <div className="bg-red-50 text-[#b71508] p-4 rounded-full h-fit"><PhoneCall size={24} /></div>
              <div>
                <h4 className="text-lg font-bold text-[#111827] mb-2">Hotline hỗ trợ</h4>
                <p className="text-gray-600 text-sm mb-1">Di động: 098-535-2345</p>
                <p className="text-gray-600 text-sm">Phục vụ 24/7</p>
              </div>
            </a>

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
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">HỌ VÀ TÊN</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  className="w-full bg-white border border-gray-200 rounded p-4 text-sm text-[#111827] outline-none focus:border-[#b71508]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">ĐỊA CHỈ EMAIL</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@congty.com"
                  className="w-full bg-white border border-gray-200 rounded p-4 text-sm text-[#111827] outline-none focus:border-[#b71508]"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">SỐ ĐIỆN THOẠI</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+84 ..."
                  className="w-full bg-white border border-gray-200 rounded p-4 text-sm text-[#111827] outline-none focus:border-[#b71508]"
                />
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
              <textarea
                rows={5}
                name="projectDescription"
                value={form.projectDescription}
                onChange={handleChange}
                placeholder="Cho chúng tôi biết về yêu cầu dự án của bạn..."
                className="w-full bg-white border border-gray-200 rounded p-4 text-sm text-[#111827] outline-none focus:border-[#b71508] resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#b71508] text-white font-bold py-4 rounded text-sm uppercase tracking-wider hover:bg-red-800 transition-colors w-full mb-4 disabled:opacity-60"
              >
                {submitting ? "ĐANG GỬI..." : "GỬI YÊU CẦU"}
              </button>
              <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest">
                Các quản lý dự án của chúng tôi thường phản hồi trong vòng 24 giờ làm việc.
              </p>
            </div>
          </form>
        </div>
      </div>

      <section className="w-full h-[500px] relative overflow-hidden bg-gray-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1861.993074723241!2d106.7729299!3d10.8999528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8f42fae2977%3A0x16451abb270f4419!2zMjM1LzZlLCAyMzUgVsO1IFRo4buLIFPDoXUsIMSQw7RuZyBIw7JhLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e1!3m2!1sen!2s!4v1778847319930!5m2!1sen!2s"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Tuan Loc Electrical Engineering Location"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4 z-10">
            <div className="bg-[#b71508] text-white p-2 rounded"><MapPin size={20} /></div>
            <div>
              <div className="font-bold text-[#111827] text-lg leading-tight">Công ty Tuấn Lộc</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">Trụ sở chính</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
