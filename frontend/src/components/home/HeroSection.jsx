import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920',
    badge: 'THE MONA',
    title: 'DỊCH VỤ THIẾT KẾ & THI CÔNG UY TÍN',
    description: 'Gọi ngay Fixera để được hỗ trợ mọi nhu cầu: thiết kế, lắp đặt, sửa chữa, hoàn thiện nội thất...',
    cta: 'Liên Hệ Tư Vấn',
    link: '/lien-he'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1920',
    badge: 'CHUYÊN NGHIỆP',
    title: 'HỆ THỐNG ĐIỆN CÔNG NGHIỆP HIỆN ĐẠI',
    description: 'Giải pháp tối ưu cho nhà xưởng, tòa nhà và các công trình dân dụng với đội ngũ kỹ sư 15 năm kinh nghiệm.',
    cta: 'Xem Dự Án',
    link: '/du-an'
  }
];

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-gray-900">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="h-full w-full object-cover"
              />
              {/* Overlay - Navy blue tinted */}
              <div className="absolute inset-0 bg-[#0a1128]/60 backdrop-blur-[2px]" />
            </div>

            {/* Content Container */}
            <div className="container-custom relative h-full flex flex-col justify-center z-10 pt-20">
              <div className="max-w-3xl">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block px-5 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mb-8"
                >
                  <span className="text-white text-sm font-black tracking-[0.2em] uppercase">
                    {slide.badge}
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tighter"
                >
                  {slide.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-medium"
                >
                  {slide.description}
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link 
                    to={slide.link} 
                    className="group relative inline-flex items-center gap-4 bg-[#f04e23] text-white px-10 py-5 rounded-2xl font-black text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/40 hover:-translate-y-1"
                  >
                    <span className="relative z-10">{slide.cta}</span>
                    <div className="relative z-10 w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#f04e23] transition-transform duration-500 group-hover:rotate-12">
                       <CheckCircle size={18} fill="currentColor" stroke="white" />
                    </div>
                    {/* Glossy shine effect */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="absolute bottom-10 right-[10%] z-20 flex items-center gap-4">
          <button className="swiper-button-prev-custom w-14 h-14 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#f04e23] hover:border-[#f04e23] transition-all duration-300">
            <ChevronLeft size={28} />
          </button>
          <button className="swiper-button-next-custom w-14 h-14 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-[#f04e23] hover:border-[#f04e23] transition-all duration-300">
            <ChevronRight size={28} />
          </button>
        </div>
      </Swiper>

      {/* Decorative lines / grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-[5] opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-bullet {
          width: 12px !important;
          height: 12px !important;
          background: rgba(255,255,255,0.3) !important;
          opacity: 1 !important;
          margin: 0 8px !important;
          transition: all 0.3s ease !important;
          border-radius: 4px !important;
        }
        .custom-bullet.swiper-pagination-bullet-active {
          background: #f04e23 !important;
          width: 30px !important;
        }
        .swiper-pagination {
          bottom: 40px !important;
          left: 10% !important;
          text-align: left !important;
          width: auto !important;
        }
      `}} />
    </section>
  );
};

export default HeroSection;
