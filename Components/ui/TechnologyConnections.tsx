import React, { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import { technologyCatalog } from "@/Data";

interface TechnologyConnectionsProps {
  hoveredTech: string | null;
  connections: Array<{ from: string; to: string }>;
  technologies: any[];
}

const TechnologyConnections: React.FC<TechnologyConnectionsProps> = ({
  hoveredTech,
  connections,
  technologies,
}) => {
  const getTechPosition = (techId: string) => {
    const tech = technologies.find((t) => t.id === techId);
    if (!tech) return [0, 0, 0];

    const index = technologies.indexOf(tech);
    const categoryIndex = ["Frontend", "Backend", "Database", "Core CS"].indexOf(
      tech.category
    );
    const baseRadius = 2 + categoryIndex * 0.8;
    const angle = (index / technologies.length) * Math.PI * 2;
    const yOffset = (categoryIndex - 1.5) * 0.3;

    return [
      Math.cos(angle) * baseRadius,
      yOffset,
      Math.sin(angle) * baseRadius,
    ];
  };

  const activeConnections = useMemo(() => {
    if (!hoveredTech) return [];

    return connections.filter(
      (conn) => conn.from === hoveredTech || conn.to === hoveredTech
    );
  }, [hoveredTech, connections]);

  return (
    <group>
      {activeConnections.map((conn, idx) => {
        const fromPos = getTechPosition(conn.from) as [number, number, number];
        const toPos = getTechPosition(conn.to) as [number, number, number];

        return (
          <Line
            key={idx}
            points={[fromPos, toPos]}
            color="#a855f7"
            lineWidth={2}
            transparent
            opacity={0.6}
            dashed={false}
          />
        );
      })}
    </group>
  );
};

export default TechnologyConnections;
