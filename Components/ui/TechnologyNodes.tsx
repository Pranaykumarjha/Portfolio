import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { technologyCatalog } from "@/Data";
import TechnologyNode from "./TechnologyNode";

interface TechnologyNodesProps {
  hoveredTech: string | null;
  onHover: (id: string | null) => void;
  onSelect: (tech: any) => void;
}

const TechnologyNodes: React.FC<TechnologyNodesProps> = ({
  hoveredTech,
  onHover,
  onSelect,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // Create orbits for different categories
  const getOrbitConfig = (index: number, category: string) => {
    const categoryIndex = ["Frontend", "Backend", "Database", "Core CS"].indexOf(
      category
    );
    const baseRadius = 2 + categoryIndex * 0.8;
    const angle = (index / technologyCatalog.length) * Math.PI * 2;
    const yOffset = (categoryIndex - 1.5) * 0.3;

    return {
      x: Math.cos(angle) * baseRadius,
      y: yOffset,
      z: Math.sin(angle) * baseRadius,
      radius: baseRadius,
    };
  };

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.0001;
    }
  });

  return (
    <group ref={groupRef}>
      {technologyCatalog.map((tech, index) => {
        const orbit = getOrbitConfig(index, tech.category);

        return (
          <TechnologyNode
            key={tech.id}
            tech={tech}
            position={[orbit.x, orbit.y, orbit.z]}
            isHovered={hoveredTech === tech.id}
            onHover={() => onHover(tech.id)}
            onUnhover={() => onHover(null)}
            onSelect={() => onSelect(tech)}
          />
        );
      })}
    </group>
  );
};

export default TechnologyNodes;
