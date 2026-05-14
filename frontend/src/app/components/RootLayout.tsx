import { Outlet, Link, useLocation } from "react-router";
import { MapPin, Mail, Facebook, Instagram, Twitter, Linkedin, Github, Phone, PhoneCall } from "lucide-react";

export function RootLayout() {
  const location = useLocation();

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
      <div className="bg-[#111827] text-[#9ca3af] text-xs py-2 px-8 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#b71508]" />
            <span>235/10 Vo Thi Sau, Dong Hoa, Binh Duong</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#b71508]" />
            <span>tuanlocco@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-white">
          <a href="#" className="hover:text-[#b71508]"><Facebook size={14} /></a>
          <a href="#" className="hover:text-[#b71508]"><Instagram size={14} /></a>
          <a href="#" className="hover:text-[#b71508]"><Twitter size={14} /></a>
          <a href="#" className="hover:text-[#b71508]"><Linkedin size={14} /></a>
          <a href="#" className="hover:text-[#b71508]"><Github size={14} /></a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4 px-8 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <Link to="/" className="flex items-center gap-3">
          <img src="/Logo.png" alt="Tuấn Lộc Logo" className="h-12 w-auto object-contain" />
          <div>
            <div className="text-xl font-bold text-[#b71508] tracking-tight leading-none uppercase">TUẤN LỘC</div>
            <div className="text-[9px] font-semibold text-[#111827] tracking-widest uppercase margin-top-4"> BUÔN BÁN & THI CÔNG ĐIỆN CÔNG NGHIỆP</div>
          </div>
        </Link>

        <nav className="flex items-center gap-8">
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

        <div className="flex items-center gap-3">
          <div className="bg-[#b71508] text-white p-2 rounded-full">
            <PhoneCall size={18} />
          </div>
          <div>
            <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">HOTLINE 24/7</div>
            <div className="text-[#111827] font-bold text-lg">098-535-2345</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#e0e7ff] text-[#4b5563] pt-16 pb-8 border-t border-[#c7d2fe]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
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

        <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-[#c7d2fe] flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Hạ tầng điện & Xây dựng Tuấn Lộc. Bảo lưu mọi quyền.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span>ISO 9001:2015</span>
            <span>ISO 45001:2018</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
