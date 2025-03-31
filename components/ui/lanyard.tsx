'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LanyardProps {
  className?: string;
}

export function Lanyard({ className = '' }: LanyardProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative w-32 h-32">
        <Image
          src="/assets/lanyard.png"
          alt="Lanyard"
          fill
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  );
} 