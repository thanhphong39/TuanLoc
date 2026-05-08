import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, Calendar, Briefcase, User, 
  ArrowLeft, ExternalLink, ChevronRight, CheckCircle2,
  Maximize2
} from 'lucide-react';
import { pageTransition, fadeInUp, staggerContainer } from '../animations/variants';
import { projectService } from '../services';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const res = await projectService.getById(slug); // backend route dùng slug hoặc id
        setProject(res.data.data);
      } catch (err) {
        console.error('Fetch project error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [slug]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="spinner" />
      <p className="text-gray-400 font-bold animate-pulse">Đang tải chi tiết dự án...</p>
    </div>
  );

  if (!project) return (
    <div className="pt-40 pb-20 container-custom text-center">
      <h1 className="text-2xl font-bold mb-4">Không tìm thấy dự án</h1>
      <Link to="/du-an" className="text-[#c1121f] font-bold">Quay lại danh sách</Link>
    </div>
  );

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-32 pb-20 bg-white overflow-hidden"
    >
      <div className="container-custom">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-3xl">
            <Link to="/du-an" className="flex items-center gap-2 text-gray-400 hover:text-[#c1121f] transition-colors font-bold text-sm mb-6">
              <ArrowLeft size={18} />
              Quay lại dự án
            </Link>
            <div className="mb-4">
               <span className="px-4 py-1.5 bg-[#c1121f] text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">{project.title}</h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 pb-2">
            <div className="text-right">
               <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Thời gian thi công</div>
               <div className="text-xl font-black text-gray-900">{project.projectInfo?.duration || '12 Tháng'}</div>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div className="text-right">
               <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Trạng thái</div>
               <div className="text-xl font-black text-[#c1121f] uppercase">{project.projectInfo?.status || 'Hoàn thành'}</div>
            </div>
          </div>
        </div>

        {/* Hero Gallery */}
        <div className="relative rounded-[3rem] overflow-hidden aspect-[16/9] mb-16 shadow-2xl">
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="prose prose-red max-w-none mb-16">
               <h3 className="text-2xl font-black text-gray-900 mb-6">Mô tả dự án</h3>
               <div className="text-gray-500 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>

            <div className="mb-16">
               <h3 className="text-2xl font-black text-gray-900 mb-8">Phạm vi công việc</h3>
               <div className="grid sm:grid-cols-2 gap-4">
                 {project.features?.map((feature, i) => (
                   <div key={i} className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#c1121f] shadow-sm">
                       <CheckCircle2 size={20} />
                     </div>
                     <span className="font-bold text-gray-800">{feature}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Gallery Grid */}
            <div className="mb-16">
               <h3 className="text-2xl font-black text-gray-900 mb-8">Thư viện hình ảnh công trình</h3>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                 {project.gallery?.map((img, i) => (
                   <motion.div 
                    key={i} 
                    className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                   >
                     <img src={img} alt={`project-${i}`} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Maximize2 className="text-white" size={24} />
                     </div>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
                <h4 className="text-xl font-black text-gray-900 mb-8">Thông tin chi tiết</h4>
                <div className="space-y-8">
                  {[
                    { icon: User, label: 'Khách hàng', value: project.client?.name },
                    { icon: MapPin, label: 'Vị trí', value: project.client?.location },
                    { icon: Calendar, label: 'Thời gian', value: project.projectInfo?.duration },
                    { icon: Briefcase, label: 'Lĩnh vực', value: project.category },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#c1121f] shadow-sm">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.label}</div>
                        <div className="text-gray-900 font-bold">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 bg-[#111] rounded-[3rem] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c1121f] rounded-full blur-[80px] opacity-20" />
                <h4 className="text-xl font-black mb-6">Bạn đang quan tâm dự án này?</h4>
                <p className="text-gray-400 text-sm mb-10 leading-relaxed">Để nhận được tư vấn giải pháp tương tự cho doanh nghiệp của bạn, vui lòng liên hệ ngay với chúng tôi.</p>
                <Link to="/lien-he" className="btn-primary w-full justify-center">Liên hệ tư vấn</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailPage;
