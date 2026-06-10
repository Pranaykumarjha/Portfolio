import React, { useRef, useEffect } from "react";
import { useFrame, extend } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const GlobeComponent = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <group>
      {/* Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhongMaterial
          color="#0a0e27"
          wireframe={false}
          emissive="#1a1a3e"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Glow/Atmosphere */}
      <mesh ref={atmosphereRef} scale={1.15}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Animated Rings */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[1.3, 0.02, 32, 200]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.3}
          wireframe={false}
        />
      </mesh>

      <mesh rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[1.25, 0.015, 32, 200]} />
        <meshBasicMaterial
          color="#ec4899"
          transparent
          opacity={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Subtle Grid Lines (Latitude/Longitude) */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh key={`lat-${i}`} rotation={[0, (i / 12) * Math.PI * 2, 0]}>
          <torusGeometry args={[1, 0.002, 32, 64]} />
          <meshBasicMaterial
            color="#a855f7"
            transparent
            opacity={0.15}
            wireframe={false}
          />
        </mesh>
      ))}

      {Array.from({ length: 6 }).map((_, i) => (
        <mesh
          key={`lon-${i}`}
          rotation={[(i / 6) * Math.PI - Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[1, 0.002, 32, 64]} />
          <meshBasicMaterial
            color="#ec4899"
            transparent
            opacity={0.1}
            wireframe={false}
          />
        </mesh>
      ))}

      {/* Core Glow Point */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.2}
          wireframe={false}
        />
      </mesh>
    </group>
  );
};

export default GlobeComponent;
