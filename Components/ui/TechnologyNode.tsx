import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface TechnologyNodeProps {
  tech: any;
  position: [number, number, number];
  isHovered: boolean;
  onHover: () => void;
  onUnhover: () => void;
  onSelect: () => void;
}

const TechnologyNode: React.FC<TechnologyNodeProps> = ({
  tech,
  position,
  isHovered,
  onHover,
  onUnhover,
  onSelect,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState(1);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.001;

      // Rotation
      groupRef.current.rotation.z += 0.01;

      // Hover scale animation
      if (isHovered) {
        setScale(Math.min(scale + 0.05, 1.3));
        if (glowRef.current) {
          glowRef.current.scale.multiplyScalar(1.05);
        }
      } else {
        setScale(Math.max(scale - 0.05, 1));
        if (glowRef.current) {
          glowRef.current.scale.set(1, 1, 1);
        }
      }

      if (meshRef.current) {
        meshRef.current.scale.set(scale, scale, scale);
      }
    }
  });

  const handlePointerEnter = () => {
    onHover();
  };

  const handlePointerLeave = () => {
    onUnhover();
  };

  const handleClick = () => {
    onSelect();
  };

  return (
    <group
      ref={groupRef}
      position={position}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
    >
      {/* Glow aura */}
      <mesh ref={glowRef} scale={isHovered ? 1.5 : 1}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshBasicMaterial
          color={tech.color || "#a855f7"}
          transparent
          opacity={isHovered ? 0.4 : 0.1}
          wireframe={false}
        />
      </mesh>

      {/* Main node */}
      <mesh ref={meshRef} scale={1} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshStandardMaterial
          color={tech.color || "#a855f7"}
          emissive={tech.color || "#a855f7"}
          emissiveIntensity={isHovered ? 0.8 : 0.4}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Orbit ring indicator */}
      {isHovered && (
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[0.5, 0.02, 16, 64]} />
          <meshBasicMaterial
            color={tech.color || "#a855f7"}
            transparent
            opacity={0.5}
            wireframe={false}
          />
        </mesh>
      )}
    </group>
  );
};

export default TechnologyNode;
