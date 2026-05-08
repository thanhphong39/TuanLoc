import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Box, Briefcase, Settings, 
  FileText, MessageSquare, ListTree, LogOut, Zap, ChevronRight 
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Sản phẩm', icon: Box, path: '/products' },
    { name: 'Dịch vụ', icon: Settings, path: '/services' },
    { name: 'Dự án', icon: Briefcase, path: '/projects' },
    { name: 'Tin tức', icon: FileText, path: '/blogs' },
    { name: 'Liên hệ', icon: MessageSquare, path: '/contacts' },
    { name: 'Danh mục', icon: ListTree, path: '/categories' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/login');
  };

  return (
    <aside className="w-72 bg-[#111] text-gray-400 flex flex-col h-screen sticky top-0 border-r border-white/5">
      {/* Brand */}
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#c1121f] flex items-center justify-center shadow-lg shadow-red-900/20">
            <Zap className="text-white" size={22} />
          </div>
          <div>
            <div className="font-black text-white tracking-tight leading-none">TUANLOC</div>
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#c1121f]">Electric Admin</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center justify-between px-4 py-3.5 rounded-xl transition-all group ${
                isActive 
                  ? 'bg-[#c1121f] text-white shadow-lg shadow-red-900/30' 
                  : 'hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} />
              <span className="text-sm font-bold tracking-tight">{item.name}</span>
            </div>
            <ChevronRight size={14} className="opacity-0 group-hover:opacity-40 transition-opacity" />
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/5">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-red-500/10 hover:text-red-500 transition-all font-bold text-sm"
        >
          <LogOut size={20} />
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
