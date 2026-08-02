import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/content';

export default function WhatsAppButton() {
  return (
    <motion.a
      // [EDIT ME] Replace with your WhatsApp number
      href={`https://wa.me/${contactInfo.whatsapp}?text=Hi! I'm interested in learning more about admissions at Jijau English Medium School.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', damping: 12 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat with us on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl flex items-center justify-center text-white transition-all">
        <MessageCircle size={26} />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-white rounded-xl shadow-lg text-sm font-medium text-warm-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us!
      </div>
    </motion.a>
  );
}
