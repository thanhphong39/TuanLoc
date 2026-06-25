import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { MapPin, Mail, Facebook, Instagram, Twitter, Linkedin, Github, Phone, PhoneCall, Menu, X } from "lucide-react";

const ZaloIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M21.5 12c0-4.694-4.253-8.5-9.5-8.5s-9.5 3.806-9.5 8.5c0 1.942.74 3.733 2.004 5.176l-1.004 3.324c-.06.196.012.41.176.533.088.066.192.1.3.1a.488.488 0 0 0 .216-.051l3.528-1.764c1.314.773 2.822 1.182 4.28 1.182 5.247 0 9.5-3.806 9.5-8.5z" />
    <text x="12" y="15.5" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#b71508" style={{ fontFamily: 'Arial' }}>Z</text>
  </svg>
);

export function RootLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", path: "/products" },
    { name: "Dự án", path: "/projects" },
    { name: "Dịch vụ", path: "/services" },
    { name: "Tin tức", path: "/news" },
    { name: "Liên hệ", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Topbar */}
      <div className="bg-[#111827] text-[#9ca3af] text-xs py-2 px-4 md:px-8 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#b71508]" />
            <span>235/10 Đường Võ Thị Sáu, KP Tây A, P.Đông Hòa, TP. Hồ Chí Minh, VN</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#b71508]" />
            <span>Tuanlocco.hcm@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white">
          <a href="https://www.facebook.com/tuannguyen163" target="_blank" rel="noopener noreferrer" className="hover:text-[#b71508]"><Facebook size={14} /></a>
          <a href="#" className="hover:text-[#b71508]"><Instagram size={14} /></a>
          <a href="#" className="hover:text-[#b71508]"><Twitter size={14} /></a>
          <a href="#" className="hover:text-[#b71508]"><Linkedin size={14} /></a>
          <a href="#" className="hover:text-[#b71508]"><Github size={14} /></a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-3 md:py-4 px-4 md:px-8 flex justify-between items-center sticky top-0 z-50 shadow-sm relative">
        <Link to="/" className="flex items-center gap-3">
          <img src="/Logo.png" alt="Tuấn Lộc Logo" className="h-12 w-auto object-contain" />
          <div>
            <div className="text-lg md:text-xl font-bold text-[#b71508] tracking-tight leading-none uppercase">TUẤN LỘC</div>
            <div className="text-[8px] md:text-[9px] font-semibold text-[#111827] tracking-widest uppercase mt-1"> BUÔN BÁN & THI CÔNG ĐIỆN</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                (location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)))
                  ? "text-[#b71508] border-b-2 border-[#b71508] pb-1"
                  : "text-[#4b5563] hover:text-[#b71508]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:0967789159" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
            <div className="bg-[#b71508] text-white p-2 rounded-full">
              <PhoneCall size={16} className="md:w-[18px] md:h-[18px]" />
            </div>
            <div className="hidden sm:block">
              <div className="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider">HOTLINE 24/7</div>
              <div className="text-[#111827] font-bold text-base md:text-lg">0967 789 159</div>
            </div>
          </a>

          <button 
            className="md:hidden text-[#111827] p-1"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/60 z-[60] md:hidden transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Drawer */}
        <div 
          className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[70] shadow-2xl md:hidden flex flex-col transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex justify-between items-center border-b border-gray-100">
            <span className="font-bold text-[#b71508] tracking-tight uppercase text-lg">Menu</span>
            <button 
              className="text-[#111827] p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col py-2 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-4 text-sm font-semibold uppercase tracking-wide transition-colors border-b border-gray-50 ${
                  (location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)))
                    ? "text-[#b71508] bg-red-50/50 border-l-4 border-l-[#b71508] px-5"
                    : "text-[#4b5563] hover:text-[#b71508] hover:bg-gray-50 border-l-4 border-l-transparent px-5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#e0e7ff] text-[#4b5563] pt-12 md:pt-16 pb-8 border-t border-[#c7d2fe]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/Logo.png" alt="Tuấn Lộc Logo" className="h-12 w-auto object-contain" />
              <div className="text-xl font-bold text-[#b71508] tracking-tight leading-none uppercase">Tuấn Lộc</div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Dẫn đầu trong lĩnh vực hạ tầng điện và xây dựng công nghiệp nặng. Độ tin cậy thông qua sự xuất sắc về kỹ thuật.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#4b5563] hover:text-[#b71508] transition-colors cursor-pointer border border-[#c7d2fe]">
                <Linkedin size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#4b5563] hover:text-[#b71508] transition-colors cursor-pointer border border-[#c7d2fe]">
                <Mail size={14} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#111827] mb-6 uppercase text-sm tracking-widest">LĨNH VỰC</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#b71508]">Truyền tải điện</a></li>
              <li><a href="#" className="hover:text-[#b71508]">Kỹ thuật trạm biến áp</a></li>
              <li><a href="#" className="hover:text-[#b71508]">Hệ thống điện công nghiệp</a></li>
              <li><a href="#" className="hover:text-[#b71508]">Giải pháp lưới điện thông minh</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111827] mb-6 uppercase text-sm tracking-widest">TÀI NGUYÊN</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#b71508]">Chứng nhận ISO</a></li>
              <li><a href="#" className="hover:text-[#b71508]">Quy trình an toàn</a></li>
              <li><a href="#" className="hover:text-[#b71508]">Thư viện dự án</a></li>
              <li><a href="#" className="hover:text-[#b71508]">Tuyển dụng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#111827] mb-6 uppercase text-sm tracking-widest">HỖ TRỢ</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#b71508]">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-[#b71508]">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:text-[#b71508]">Hỗ trợ kỹ thuật</a></li>
              <li><a href="#" className="hover:text-[#b71508]">Liên hệ với chúng tôi</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-[#c7d2fe] flex flex-col md:flex-row justify-between items-center text-xs text-center md:text-left gap-4">
          <p>© 2024 Hạ tầng điện & Xây dựng Tuấn Lộc. Bảo lưu mọi quyền.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span>ISO 9001:2015</span>
            <span>ISO 45001:2018</span>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-[9999] flex flex-col gap-3 md:gap-4">
        {/* Zalo Button */}
        <a 
          href="https://zalo.me/0967789159" 
          target="_blank" 
          rel="noreferrer"
          className="pulsing-button w-12 h-12 md:w-14 md:h-14 bg-[#b71508] rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 animate-ring"
          title="Chat Zalo"
        >
          <ZaloIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </a>

        {/* Facebook Button */}
        <a 
          href="https://www.facebook.com/tuannguyen163" 
          target="_blank" 
          rel="noreferrer"
          className="pulsing-button w-12 h-12 md:w-14 md:h-14 bg-[#b71508] rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 animate-ring"
          title="Facebook"
        >
          <Facebook className="w-6 h-6 md:w-[28px] md:h-[28px] text-white" />
        </a>
      </div>
    </div>
  );
}
