'use client';
import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import LogoSVG from '../assets/Logos/WEBZIO_logo_clean.svg';

const Logo3DModel: React.FC = () => {
  const shapes = useMemo(() => {
    const loader = new SVGLoader();
    const svgData = loader.parse(LogoSVG);
    return svgData.paths.flatMap((path) =>
      path.toShapes(true)
    );
  }, []);

  return (
    <group rotation={[0, Math.PI, 0]}>
      {shapes.map((shape, i) => (
        <mesh key={i}>
          <extrudeGeometry args={[shape, { depth: 0.2, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02 }]} />
          <meshStandardMaterial color="#fff" />
        </mesh>
      ))}
    </group>
  );
};

const Logo3D: React.FC = () => {
  return (
    <div className="h-[500px] w-full bg-[#034866] rounded-2xl">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Logo3DModel />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Logo3D;
