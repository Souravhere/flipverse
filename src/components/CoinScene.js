// src/components/CoinScene.js

"use client"; // Add this line at the top of the file

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { OrbitControls } from '@react-three/drei';

const Coin = ({ shouldFlip }) => {
  const coinRef = useRef();
  useFrame(() => {
    if (shouldFlip) {
      coinRef.current.rotation.y += 0.1; // Example flipping logic
    }
  });
  return (
    <mesh ref={coinRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="gold" />
    </mesh>
  );
};

const CoinScene = ({ shouldFlip }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Coin shouldFlip={shouldFlip} />
      <OrbitControls />
    </Canvas>
  );
};

export default CoinScene;
