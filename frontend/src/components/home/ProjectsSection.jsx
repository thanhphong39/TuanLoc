import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { fadeInUp, staggerContainer } from '../../animations/variants';

const projects = [
  {
    name: 'Trạm biến áp 2500kVA - KCN VSIP II',
    category: 'Trạm biến áp',
    image: 'https://images.unsplash.com/photo-1610411800053-90d54030612c?auto=format&fit=crop&q=80&w=800',
    slug: 'tram-bien-ap-2500kva-kcn-vsip-ii',
    location: 'Bình Dương',
    year: '2023'
  },
  {
    name: 'Hệ thống điện nhà máy Lego Group',
    category: 'Thi công điện',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    slug: 'he-thong-dien-nha-may-lego-group',
    location: 'Bình Dương',
    year: '2024'
  },
  {
    name: 'Tủ điện điều khiển PLC Siemens - VinFast',
    category: 'Tủ điện',
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800',
    slug: 'tu-dien-dieu-khien-vinfast',
    location: 'Hải Phòng',
    year: '2023'
  },
  {
    name: 'Hệ thống HVAC tòa nhà văn phòng Landmark 81',
    category: 'Hệ thống M&E',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    slug: 'he-thong-hvac-landmark-81',
    location: 'TP. HCM',
    year: '2022'
  }
];

const ProjectsSection = () => {
  return (
    <section className="section-py bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <SectionTitle
            label="Dự án tiêu biểu"
            title="Công Trình Đã Thực Hiện"
            align="left"
            className="mb-0"
          />
          <Link to="/du-an" className="btn-outline mb-4 group">
            Xem tất cả dự án
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={fadeInUp}
              className="group relative rounded-[3rem] overflow-hidden bg-[#0a1128] aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-1000"
            >
              {/* Image with Parallax-like Zoom */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-125 opacity-60 group-hover:opacity-40"
              />

              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-[#0a1128] via-[#0a1128]/40 to-transparent">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 bg-[#f04e23] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg">
                      {project.category}
                    </span>
                    <div className="h-px w-8 bg-white/30" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight tracking-tighter">
                    {project.name}
                  </h3>

                  <div className="flex flex-wrap items-center gap-8 text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-[#f04e23]" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar size={16} className="text-[#f04e23]" />
                      {project.year}
                    </div>
                  </div>

                  <Link
                    to={`/du-an/${project.slug}`}
                    className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white hover:text-[#f04e23] transition-all group/btn"
                  >
                    Xem chi tiết công trình
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#f04e23] group-hover/btn:border-[#f04e23] transition-all duration-500">
                      <ArrowRight size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
