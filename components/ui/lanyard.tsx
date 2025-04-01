'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

interface LanyardProps {
  className?: string;
}

function Model() {
  const { scene } = useGLTF('/assets/card.glb');
  return <primitive object={scene} scale={0.5} />;
}

export function Lanyard({ className = '' }: LanyardProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="w-32 h-32">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
    </motion.div>
  );
} 