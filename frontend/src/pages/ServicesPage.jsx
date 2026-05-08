import { motion } from 'framer-motion';
import { pageTransition } from '../animations/variants';

const ServicesPage = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-40 pb-20 container-custom min-h-screen"
    >
      <h1 className="text-4xl font-black mb-8">Dịch Vụ</h1>
      <p className="text-gray-500">Đang cập nhật nội dung...</p>
    </motion.div>
  );
};

export default ServicesPage;
