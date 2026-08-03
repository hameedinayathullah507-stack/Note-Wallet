import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useMousePosition } from '../hooks/useMousePosition';

// Background Floating Particles Mesh
function ParticleField({ count = 200 }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sc[i] = Math.random() * 0.05 + 0.01;
    }
    return [pos, sc];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#E8B84A"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Hero Central Floating Glass Mesh
function FloatingCentralOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const mouse = useMousePosition();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smooth interpolation towards mouse position
      const targetX = mouse.normalizedX * 1.2;
      const targetY = mouse.normalizedY * 1.2;
      
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;

      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, -2]}>
        <icosahedronGeometry args={[1.6, 4]} />
        <MeshDistortMaterial
          color="#E8B84A"
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={2}
          wireframe={false}
          emissive="#2A1E07"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

// Interactive Point Light following Mouse
function MouseReactiveLight() {
  const lightRef = useRef<THREE.PointLight>(null!);
  const mouse = useMousePosition();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = mouse.normalizedX * 8;
      lightRef.current.position.y = mouse.normalizedY * 8;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 4]}
      intensity={8}
      distance={15}
      color="#E8B84A"
    />
  );
}

export const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFFFFF" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#E8B84A" />
        <MouseReactiveLight />
        <FloatingCentralOrb />
        <ParticleField count={250} />
      </Canvas>
    </div>
  );
};
