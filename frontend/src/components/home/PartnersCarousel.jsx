import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../animations/variants';

const partners = [
  { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png' },
  { name: 'ABB', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/2560px-ABB_logo.svg.png' },
  { name: 'Schneider', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Schneider_Electric_2007.svg/2560px-Schneider_Electric_2007.svg.png' },
  { name: 'Mitsubishi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mitsubishi-logo.png/1200px-Mitsubishi-logo.png' },
  { name: 'LS Electric', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/LS_Electric_logo.svg/2560px-LS_Electric_logo.svg.png' },
  { name: 'Panasonic', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Panasonic_logo.svg/2560px-Panasonic_logo.svg.png' },
];

const PartnersCarousel = () => {
  return (
    <section className="py-16 bg-[#fcfcfc] border-y border-gray-100">
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">Đối tác chiến lược</span>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="flex items-center"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.name}>
              <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 py-4 opacity-50 hover:opacity-100">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersCarousel;
