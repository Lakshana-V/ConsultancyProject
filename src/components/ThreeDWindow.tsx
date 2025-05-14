import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, PresentationControls, Float, ContactShadows } from '@react-three/drei';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Window Component
const Window = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const frameRef = useRef<THREE.Mesh>(null);
  const glassRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
    if (glassRef.current) {
      glassRef.current.material.opacity = THREE.MathUtils.lerp(
        glassRef.current.material.opacity,
        0.5 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1,
        0.05
      );
    }
  });

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh ref={meshRef}>
        {/* Frame */}
        <mesh ref={frameRef} position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 2.2, 0.08]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Window Panes */}
        <mesh position={[0, 0, 0.01]}>
          <boxGeometry args={[1.6, 2, 0.02]} />
          <meshStandardMaterial color="#222d44" />
        </mesh>

        {/* Glass */}
        <mesh ref={glassRef} position={[0, 0, 0.02]}>
          <boxGeometry args={[1.55, 1.95, 0.01]} />
          <meshPhysicalMaterial 
            color="#2172c7" 
            transparent 
            opacity={0.6}
            metalness={0.1}
            roughness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Window Divider Horizontal */}
        <mesh position={[0, 0, 0.03]}>
          <boxGeometry args={[1.6, 0.05, 0.02]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Window Divider Vertical */}
        <mesh position={[0, 0, 0.03]}>
          <boxGeometry args={[0.05, 2, 0.02]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Handle */}
        <mesh position={[0.7, 0, 0.06]}>
          <boxGeometry args={[0.08, 0.3, 0.04]} />
          <meshStandardMaterial color="#696969" metalness={0.8} roughness={0.2} />
        </mesh>
      </mesh>
    </group>
  );
};

// Door Component
const Door = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const handleRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
    if (handleRef.current) {
      handleRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh ref={meshRef}>
        {/* Frame */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 3.5, 0.1]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Door Panel */}
        <mesh position={[0, 0, 0.01]}>
          <boxGeometry args={[1.8, 3.3, 0.05]} />
          <meshStandardMaterial color="#0e4a86" />
        </mesh>

        {/* Handle */}
        <mesh ref={handleRef} position={[0.8, 0, 0.06]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
      </mesh>
    </group>
  );
};

interface ThreeDWindowProps {
  type?: 'window' | 'door';
  showControls?: boolean;
}

const ThreeDWindow: React.FC<ThreeDWindowProps> = ({ 
  type = 'window',
  showControls = true
}) => {
  return (
    <div className="w-full h-96 bg-gradient-to-b from-blue-50 to-white rounded-lg">
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {showControls ? (
          <PresentationControls
            global
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 300 }}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
          >
            <Float 
              speed={2} 
              rotationIntensity={0.4} 
              floatIntensity={0.4}
            >
              {type === 'window' ? <Window /> : <Door />}
            </Float>
          </PresentationControls>
        ) : (
          type === 'window' ? <Window /> : <Door />
        )}
        
        <ContactShadows 
          position={[0, -1.5, 0]} 
          opacity={0.4} 
          scale={5} 
          blur={1.5} 
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeDWindow;

