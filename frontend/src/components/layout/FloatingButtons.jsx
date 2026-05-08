import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

const FloatingButtons = () => {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-6 z-[90] flex flex-col items-end gap-3 pointer-events-none">
      {/* Zalo */}
      <motion.a
        href="https://zalo.me/0313728397"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-xs pointer-events-auto bg-[#0068ff]"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        title="Chat Zalo"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <span className="font-extrabold text-xs">Za</span>
      </motion.a>

      {/* Messenger */}
      <motion.a
        href="https://m.me/fixera"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg pointer-events-auto bg-gradient-to-br from-[#0099ff] to-[#a033ff]"
        whileHover={{ scale: 1.15, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        title="Chat Messenger"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <MessageCircle size={20} className="text-white" />
      </motion.a>

      {/* Phone */}
      <motion.a
        href="tel:0313728397"
        className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg pointer-events-auto bg-[#22c55e]"
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.9 }}
        title="Gọi điện"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        <Phone size={18} className="text-white" />
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg text-white pointer-events-auto bg-[#0a1128]"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            title="Lên đầu trang"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;
