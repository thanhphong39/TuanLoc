import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ExternalLink, Calendar } from 'lucide-react';
import { pageTransition, fadeInUp, staggerContainer } from '../animations/variants';
import SectionTitle from '../components/common/SectionTitle';
import { projectService } from '../services';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await projectService.getAll({ category: filter !== 'all' ? filter : '' });
        setProjects(res.data.data);
      } catch (error) {
        console.error('Fetch projects error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [filter]);

  const categories = [
    { name: 'Tất cả dự án', slug: 'all' },
    { name: 'Điện công nghiệp', slug: 'Điện công nghiệp' },
    { name: 'Trạm biến áp', slug: 'Trạm biến áp' },
    { name: 'Smart Factory', slug: 'Smart Factory' },
  ];

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-white"
    >
      {/* Hero Header */}
      <section className="bg-[#0a1128] py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/60 to-[#0a1128]" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.div variants={fadeInUp}>
            <span className="text-[#f04e23] font-black uppercase tracking-[0.4em] text-[11px] mb-6 block">Hành trình khẳng định</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter">Công Trình Tiêu Biểu</h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Minh chứng cho năng lực kỹ thuật vượt trội và cam kết chất lượng bền vững của Fixera trên mọi miền Tổ quốc.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 border-b border-slate-100 sticky top-[76px] bg-white/90 backdrop-blur-md z-30">
        <div className="container-custom flex justify-center">
          <div className="flex flex-wrap justify-center gap-3 p-2 bg-slate-50 rounded-[2rem] border border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setFilter(cat.slug)}
                className={`px-8 py-3 rounded-2xl text-sm font-black transition-all duration-300 ${
                  filter === cat.slug 
                    ? 'bg-white text-[#f04e23] shadow-xl shadow-red-500/10 border border-red-50' 
                    : 'text-slate-500 hover:text-[#0a1128]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="container-custom">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-6">
              <div className="w-12 h-12 border-4 border-slate-100 border-t-[#f04e23] rounded-full animate-spin" />
              <p className="text-slate-400 font-bold tracking-widest uppercase text-xs animate-pulse">Đang tải danh sách...</p>
            </div>
          ) : projects.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {projects.map((project) => (
                <motion.div 
                  key={project._id}
                  variants={fadeInUp}
                  className="group relative h-[500px] rounded-[3rem] overflow-hidden bg-[#0a1128] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700"
                >
                  <img 
                    src={project.thumbnail || 'https://images.unsplash.com/photo-1590483734724-383b85ad0590?auto=format&fit=crop&q=80&w=800'} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-[#0a1128] via-[#0a1128]/20 to-transparent">
                    <div className="mb-6 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="px-4 py-1.5 bg-[#f04e23] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-white mb-6 group-hover:text-[#f04e23] transition-colors leading-tight tracking-tight">
                      <Link to={`/du-an/${project.slug}`}>{project.title}</Link>
                    </h3>
                    
                    <div className="space-y-3 mb-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                      <div className="flex items-center gap-3 text-white/60 text-xs font-bold uppercase tracking-widest">
                        <MapPin size={14} className="text-[#f04e23]" />
                        {project.client?.location || 'Việt Nam'}
                      </div>
                      <div className="flex items-center gap-3 text-white/60 text-xs font-bold uppercase tracking-widest">
                        <Calendar size={14} className="text-[#f04e23]" />
                        {project.projectInfo?.duration || 'Bàn giao 2024'}
                      </div>
                    </div>

                    <Link 
                      to={`/du-an/${project.slug}`}
                      className="inline-flex items-center gap-4 text-white font-black text-sm group/btn group-hover:text-[#f04e23] transition-colors"
                    >
                      Chi tiết dự án
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#f04e23] group-hover/btn:border-[#f04e23] group-hover/btn:text-white transition-all duration-500">
                        <ArrowRight size={18} />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-32 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
              <h3 className="text-2xl font-black text-[#0a1128] mb-4">Chưa có dự án nào</h3>
              <p className="text-slate-500 font-medium">Chúng tôi đang cập nhật các công trình mới nhất. Vui lòng quay lại sau.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0a1128] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f04e23 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-custom text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Kiến Tạo Giá Trị Bền Vững</h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 font-medium">Chúng tôi luôn sẵn sàng đồng hành cùng doanh nghiệp trong những dự án thách thức nhất.</p>
            <Link to="/lien-he" className="btn-primary py-5 px-12">Bắt đầu dự án ngay</Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};


export default ProjectsPage;
