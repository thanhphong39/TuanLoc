import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, ShoppingBag, Briefcase, MessageSquare, 
  TrendingUp, Calendar, ArrowUpRight, ArrowDownRight 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import axios from 'axios';

const DashboardPage = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const res = await axios.get('/api/dashboard/stats', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStats(res.data.data);
      } catch (err) {
        console.error('Fetch stats error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const data = [
    { name: 'T1', value: 400 },
    { name: 'T2', value: 300 },
    { name: 'T3', value: 600 },
    { name: 'T4', value: 800 },
    { name: 'T5', value: 500 },
    { name: 'T6', value: 900 },
    { name: 'T7', value: 1000 },
  ];

  const cards = [
    { label: 'Sản phẩm', value: stats?.products || 0, icon: ShoppingBag, color: 'blue', trend: '+12%' },
    { label: 'Dự án', value: stats?.projects || 0, icon: Briefcase, color: 'purple', trend: '+5%' },
    { label: 'Tin tức', value: stats?.blogs || 0, icon: TrendingUp, color: 'orange', trend: '+3%' },
    { label: 'Liên hệ mới', value: stats?.contacts || 0, icon: MessageSquare, color: 'red', trend: '+18%' },
  ];

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="spinner" />
      <p className="text-gray-400 font-bold animate-pulse">Đang tải số liệu thống kê...</p>
    </div>
  );

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Tổng Quan</h1>
          <p className="text-gray-400 font-medium">Chào mừng trở lại hệ quản trị TuanLoc Electric.</p>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-2xl shadow-sm border border-gray-100">
          <Calendar size={18} className="text-[#c1121f]" />
          <span className="text-sm font-bold text-gray-700">{new Date().toLocaleDateString('vi-VN')}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <motion.div 
            key={card.label}
            className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-50 text-gray-900 group-hover:bg-[#c1121f] group-hover:text-white transition-all`}>
                <card.icon size={28} />
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-green-50 text-green-600 rounded-lg text-xs font-bold">
                <ArrowUpRight size={14} />
                {card.trend}
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{card.label}</div>
              <div className="text-3xl font-black text-gray-900 tracking-tight">{card.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-gray-900">Lưu lượng truy cập</h3>
            <select className="bg-gray-50 border-none outline-none text-sm font-bold text-gray-500 rounded-lg px-3 py-1">
              <option>7 ngày qua</option>
              <option>30 ngày qua</option>
            </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c1121f" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#c1121f" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600, fill: '#999'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600, fill: '#999'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  itemStyle={{ fontWeight: 800, color: '#c1121f' }}
                />
                <Area type="monotone" dataKey="value" stroke="#c1121f" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#111] p-8 rounded-[2.5rem] text-white shadow-xl">
          <h3 className="text-xl font-bold mb-8">Tin nhắn mới nhất</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#c1121f] group-hover:bg-[#c1121f] group-hover:text-white transition-all">
                  <Users size={20} />
                </div>
                <div className="flex-1 border-b border-white/5 pb-4">
                  <div className="flex justify-between items-center mb-1">
                    <div className="font-bold text-sm">Khách hàng #{i+1}</div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold">Vừa xong</div>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-1">Tôi muốn yêu cầu báo giá dự án điện nhà máy...</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-sm font-bold text-[#c1121f]">
            Xem tất cả liên hệ
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
