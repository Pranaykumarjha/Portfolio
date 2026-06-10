import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const positionArrayRef = useRef<Float32Array | null>(null);

  const particlesCount = 50;

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }

    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    positionArrayRef.current = positions;
    return geom;
  }, []);

  useFrame(() => {
    if (
      particlesRef.current &&
      particlesRef.current.geometry.attributes.position
    ) {
      const positions = positionArrayRef.current;
      if (!positions) return;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += (Math.random() - 0.5) * 0.01;
        positions[i + 1] += (Math.random() - 0.5) * 0.01;
        positions[i + 2] += (Math.random() - 0.5) * 0.01;

        // Wrap around edges
        if (Math.abs(positions[i]) > 4) positions[i] *= -1;
        if (Math.abs(positions[i + 1]) > 4) positions[i + 1] *= -1;
        if (Math.abs(positions[i + 2]) > 4) positions[i + 2] *= -1;
      }

      (
        particlesRef.current.geometry.attributes.position as THREE.BufferAttribute
      ).needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        color="#a855f7"
        size={0.08}
        sizeAttenuation
        transparent
        opacity={0.3}
      />
    </points>
  );
};

export default ParticleField;
