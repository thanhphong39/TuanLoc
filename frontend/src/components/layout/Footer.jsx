import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Facebook, Instagram, 
  Twitter, Linkedin, ArrowRight, ChevronRight 
} from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1128] text-gray-400">
      {/* Newsletter / CTA Section above footer */}
      <div className="border-b border-white/5">
        <div className="container-custom py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
           <div className="text-center lg:text-left">
              <h3 className="text-2xl font-black text-white mb-2">Đăng ký nhận bản tin kỹ thuật</h3>
              <p className="text-sm">Nhận các cập nhật mới nhất về giải pháp điện công nghiệp và dự án của Fixera.</p>
           </div>
            <div className="flex w-full max-w-md gap-3 bg-white/5 p-1.5 rounded-2xl border border-white/10 focus-within:border-[#f04e23] transition-all">
               <input 
                 type="email" 
                 placeholder="Email của bạn..." 
                 className="flex-1 bg-transparent border-none px-5 py-2 text-white outline-none font-bold placeholder:text-gray-500"
               />
               <button className="bg-[#f04e23] text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#d63d1a] hover:shadow-xl hover:shadow-red-500/20 transition-all flex-shrink-0">Gửi ngay</button>
            </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 rounded-xl bg-[#f04e23] flex items-center justify-center text-white shadow-lg shadow-red-200 group-hover:rotate-12 transition-transform duration-500">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                   <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
                </svg>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">FIXERA</span>
            </Link>
            <p className="text-sm leading-relaxed mb-8">
              Tập đoàn Fixera là đơn vị đi đầu trong lĩnh vực thiết kế và thi công hệ thống điện công nghiệp, dân dụng và trạm biến áp tại Việt Nam với hơn 15 năm kinh nghiệm.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#f04e23] hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black text-white mb-8 uppercase tracking-wider">Khám phá</h4>
            <ul className="space-y-4">
              {[
                { name: 'Về chúng tôi', path: '/gioi-thieu' },
                { name: 'Dịch vụ thi công', path: '/dich-vu' },
                { name: 'Dự án tiêu biểu', path: '/du-an' },
                { name: 'Sản phẩm thiết bị', path: '/san-pham' },
                { name: 'Tin tức chuyên ngành', path: '/blog' },
                { name: 'Liên hệ tư vấn', path: '/lien-he' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="flex items-center gap-2 hover:text-[#f04e23] transition-colors group">
                    <ChevronRight size={14} className="text-[#f04e23] opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-black text-white mb-8 uppercase tracking-wider">Dịch vụ chính</h4>
            <ul className="space-y-4">
              {[
                'Thi công trạm biến áp',
                'Hệ thống M&E',
                'Gia công tủ điện MCC',
                'Bảo trì điện nhà máy',
                'Smart Factory Solutions',
                'Hệ thống Automation',
              ].map((service) => (
                <li key={service}>
                  <Link to="/dich-vu" className="hover:text-[#f04e23] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#f04e23] transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-black text-white mb-8 uppercase tracking-wider">Thông tin liên hệ</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#f04e23] flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <p className="text-sm leading-relaxed">
                  1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#f04e23] flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Hotline tư vấn</div>
                  <a href="tel:0313728397" className="text-lg font-black text-white hover:text-[#f04e23] transition-colors">(+84) 0313-728-397</a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#f04e23] flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email hỗ trợ</div>
                  <a href="mailto:info@fixera.vn" className="text-white hover:text-[#f04e23] transition-colors font-medium">info@fixera.vn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/5 py-8">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest">
           <p>© {year} FIXERA ELECTRIC. All Rights Reserved.</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
              <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
           </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
