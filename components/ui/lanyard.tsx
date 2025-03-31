'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LanyardProps {
  className?: string;
}

export function Lanyard({ className = '' }: LanyardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? -45 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full"
        animate={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
} 