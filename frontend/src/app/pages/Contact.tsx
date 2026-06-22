import { useState } from "react";
import { MapPin, PhoneCall, Mail } from "lucide-react";
import { motion } from "motion/react";
import { createContact } from "../../lib/api";

export function Contact() {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", service: "Hạ tầng điện", projectDescription: "" });
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
      setForm({ fullName: "", email: "", phone: "", service: "Hạ tầng điện", projectDescription: "" });
      alert("Yêu cầu đã được gửi! Chúng tôi sẽ phản hồi trong vòng 24 giờ.");
    } catch {
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setSubmitting(false);
    }
  };

  const slideLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideRightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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

        <motion.div 
          initial="hidden" animate="visible" variants={fadeUpVariant}
          className="relative z-10 max-w-7xl mx-auto px-8 w-full text-white"
        >
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Liên hệ với chúng tôi</h1>
          <p className="text-lg text-blue-50 max-w-xl drop-shadow-md">
            Kết nối với các chuyên gia hạ tầng của chúng tôi để thảo luận về dự án kỹ thuật hoặc xây dựng quy mô lớn tiếp theo của bạn.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideLeftVariant}>
          <div className="text-[10px] font-bold text-[#b71508] uppercase tracking-widest mb-4">
            SỰ CHÍNH XÁC ĐÃ ĐƯỢC KHẲNG ĐỊNH
          </div>
          <h2 className="text-4xl font-bold text-[#111827] mb-6">Đối tác với đơn vị<br/>dẫn đầu ngành.</h2>
          <p className="text-gray-600 mb-10 leading-relaxed max-w-md">
            Đội ngũ điều hành của chúng tôi sẵn sàng tư vấn kỹ thuật cho các yêu cầu về hạ tầng điện và xây dựng hạng nặng trên toàn quốc.
          </p>

          <motion.div variants={staggerContainer} className="flex flex-col gap-6">
            <motion.div variants={fadeUpVariant} className="border border-gray-200 rounded-lg p-6 flex gap-6 hover:border-[#b71508] hover:shadow-lg transition-all duration-300 bg-[#fdfdfd] hover:-translate-y-1">
              <div className="bg-red-50 text-[#b71508] p-4 rounded-full h-fit"><MapPin size={24} /></div>
              <div>
                <h4 className="text-lg font-bold text-[#111827] mb-2">Trụ sở chính</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  123 Đại lộ Công nghiệp, Quận Công nghệ cao<br />
                  TP. Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </motion.div>

            <motion.a variants={fadeUpVariant} href="https://zalo.me/0985352345" target="_blank" rel="noopener noreferrer" className="border border-gray-200 rounded-lg p-6 flex gap-6 hover:border-[#b71508] hover:shadow-lg transition-all duration-300 bg-[#fdfdfd] hover:-translate-y-1">
              <div className="bg-red-50 text-[#b71508] p-4 rounded-full h-fit"><PhoneCall size={24} /></div>
              <div>
                <h4 className="text-lg font-bold text-[#111827] mb-2">Hotline hỗ trợ</h4>
                <p className="text-gray-600 text-sm mb-1">Di động: 098-535-2345</p>
                <p className="text-gray-600 text-sm">Phục vụ 24/7</p>
              </div>
            </motion.a>

            <motion.div variants={fadeUpVariant} className="border border-gray-200 rounded-lg p-6 flex gap-6 hover:border-[#b71508] hover:shadow-lg transition-all duration-300 bg-[#fdfdfd] hover:-translate-y-1">
              <div className="bg-red-50 text-[#b71508] p-4 rounded-full h-fit"><Mail size={24} /></div>
              <div>
                <h4 className="text-lg font-bold text-[#111827] mb-2">Email doanh nghiệp</h4>
                <p className="text-gray-600 text-sm mb-1">contact@tuanloc.com.vn</p>
                <p className="text-gray-600 text-sm">projects@tuanloc.com.vn</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideRightVariant}
          className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-10 h-fit shadow-lg"
        >
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
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg p-4 text-sm text-[#111827] outline-none focus:border-[#b71508] focus:ring-4 focus:ring-red-50 transition-all"
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
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg p-4 text-sm text-[#111827] outline-none focus:border-[#b71508] focus:ring-4 focus:ring-red-50 transition-all"
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
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg p-4 text-sm text-[#111827] outline-none focus:border-[#b71508] focus:ring-4 focus:ring-red-50 transition-all"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">DỊCH VỤ QUAN TÂM</label>
                <select name="service" value={form.service} onChange={handleChange} className="w-full bg-white border border-gray-200 rounded-lg p-4 text-sm text-[#111827] outline-none focus:border-[#b71508] focus:ring-4 focus:ring-red-50 transition-all appearance-none cursor-pointer">
                  <option value="Hạ tầng điện">Hạ tầng điện</option>
                  <option value="Tư vấn kỹ thuật">Tư vấn kỹ thuật</option>
                  <option value="Xây lắp công nghiệp">Xây lắp công nghiệp</option>
                  <option value="Bảo trì thiết bị">Bảo trì thiết bị</option>
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
                required
                className="w-full bg-white border border-gray-200 rounded-lg p-4 text-sm text-[#111827] outline-none focus:border-[#b71508] focus:ring-4 focus:ring-red-50 transition-all resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#b71508] text-white font-bold py-4 rounded-lg text-sm uppercase tracking-wider hover:bg-red-800 transition-colors w-full mb-4 disabled:opacity-60 hover:shadow-lg hover:-translate-y-1"
              >
                {submitting ? "ĐANG GỬI..." : "GỬI YÊU CẦU"}
              </button>
              <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest">
                Các quản lý dự án của chúng tôi thường phản hồi trong vòng 24 giờ làm việc.
              </p>
            </div>
          </form>
        </motion.div>
      </div>

      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
        className="w-full h-[500px] relative overflow-hidden bg-gray-100"
      >
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

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none"
        >
          <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 z-10 border border-white/50">
            <div className="bg-[#b71508] text-white p-2.5 rounded-lg"><MapPin size={22} /></div>
            <div>
              <div className="font-bold text-[#111827] text-lg leading-tight">Công ty Tuấn Lộc</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Trụ sở chính</div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
