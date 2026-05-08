import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Phone, MapPin, Mail, 
  Facebook, Instagram, Twitter, Linkedin,
  ChevronRight
} from 'lucide-react';

const navItems = [
  { name: 'Trang chủ', path: '/' },
  { name: 'Sản phẩm', path: '/san-pham' },
  { name: 'Dịch vụ', path: '/dich-vu' },
  { name: 'Dự án', path: '/du-an' },
  { name: 'Tin tức', path: '/blog' },
  { name: 'Liên hệ', path: '/lien-he' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* Topbar - Professional Mona Style */}
      <div className={`bg-[#0a1128] text-white/80 transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0' : 'h-11'}`}>
        <div className="container-custom h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
              <MapPin size={12} className="text-[#f04e23]" />
              1073/23 CMT8, P.7, Q.Tân Bình, TP.HCM
            </div>
            <div className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
              <Mail size={12} className="text-[#f04e23]" />
              info@fixera.vn
            </div>
          </div>
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-[#f04e23] transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-2xl' 
          : 'bg-white py-6'
      }`}>
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-[#f04e23] flex items-center justify-center text-white shadow-xl shadow-red-500/20 group-hover:rotate-12 transition-all duration-500">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                 <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#0a1128] tracking-tighter leading-none">FIXERA</span>
              <span className="text-[8px] font-black text-[#f04e23] uppercase tracking-[0.4em] mt-1">Electric Solution</span>
            </div>
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-[#f04e23] ${
                  location.pathname === item.path ? 'text-[#f04e23]' : 'text-[#0a1128]'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="navLine"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#f04e23] rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Hotline & Mobile Actions */}
          <div className="flex items-center gap-6">
            <div className="hidden xl:flex items-center gap-4 bg-slate-50 pl-2 pr-6 py-2 rounded-full border border-slate-100 group cursor-pointer hover:bg-white hover:border-[#f04e23] transition-all">
              <div className="w-10 h-10 rounded-full bg-[#f04e23] flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5 leading-none">Hotline 24/7</div>
                <div className="text-sm font-black text-[#0a1128] leading-none">0313 728 397</div>
              </div>
            </div>

            <button 
              className="lg:hidden w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0a1128] hover:bg-[#f04e23] hover:text-white transition-all shadow-sm"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-50 overflow-hidden shadow-inner"
            >
              <div className="container-custom py-10 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center justify-between p-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                      location.pathname === item.path 
                        ? 'bg-red-50 text-[#f04e23]' 
                        : 'text-[#0a1128] hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                    <ChevronRight size={16} className={location.pathname === item.path ? 'opacity-100' : 'opacity-0'} />
                  </Link>
                ))}
                <div className="mt-6 p-8 bg-[#0a1128] rounded-[2.5rem] text-white relative overflow-hidden">
                   <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#f04e23] rounded-full blur-3xl opacity-20" />
                   <div className="relative z-10">
                      <div className="text-[10px] font-black text-[#f04e23] uppercase tracking-[0.3em] mb-4">Liên hệ ngay</div>
                      <div className="text-2xl font-black mb-8 leading-tight">Cần tư vấn giải pháp kỹ thuật?</div>
                      <a href="tel:0313728397" className="flex items-center gap-4 mb-8 group">
                         <div className="w-14 h-14 rounded-2xl bg-[#f04e23] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <Phone size={24} />
                         </div>
                         <div className="text-2xl font-black">0313 728 397</div>
                      </a>
                      <Link to="/lien-he" className="btn-primary w-full justify-center">Gửi yêu cầu báo giá</Link>
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
