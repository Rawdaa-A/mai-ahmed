import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const envelopeBase64 = '{base64_str}';

export default function EnvelopeCard({ onOpen }: { onOpen: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f8f6] px-4">
      <motion.div 
        className="text-center mb-8"
        initial={ opacity: 0, y: -20 }
        animate={ opacity: 1, y: 0 }
      >
        <p className="text-[#6b6b6b] text-lg tracking-widest uppercase">You are invited to</p>
      </motion.div>

      <motion.div 
        className="relative w-full max-w-md cursor-pointer"
        onClick={onOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={ opacity: 0, scale: 0.9 }
        animate={ opacity: 1, scale: 1 }
        transition={ duration: 0.5 }
      >
        <img
          src={envelopeBase64}
          alt="Wedding Invitation Envelope"
          className="w-full h-auto shadow-2xl rounded-sm"
          style={ display: 'block' }
        />
        
        <motion.div 
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-[#d4af37]"
          animate={ opacity: isHovered ? 1 : 0.6, y: isHovered ? 0 : 5 }
        >
          <Mail size={16} />
          <span className="text-sm font-medium">Click to open</span>
        </motion.div>
      </motion.div>
    </div>
  );
}