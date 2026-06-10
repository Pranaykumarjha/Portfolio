"use client";
import React, { useState, useRef, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, OrbitControls } from "@react-three/drei";
import { technologyCatalog, technologyConnections } from "@/Data";
import GlobeComponent from "./ui/GlobeComponent";
import TechnologyNodes from "./ui/TechnologyNodes";
import TechnologyCard from "./ui/TechnologyCard";
import TechnologyConnections from "./ui/TechnologyConnections";
import ParticleField from "./ui/ParticleField";

interface SelectedTech {
  id: string;
  name: string;
  category: string;
  icon: string;
  color: string;
  experience: string;
  projects: string[];
  description: string;
  details: string;
}

const Technology3DGlobe = () => {
  const [selectedTech, setSelectedTech] = useState<SelectedTech | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="w-full py-20" id="technology-globe">
      <div className="flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="heading text-4xl font-bold text-white">
            Technology <span className="text-purple-400">Universe</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Explore the technologies, tools, and concepts that power my full-stack development journey.
          </p>
        </motion.div>

        {/* 3D Canvas and Info Card Container */}
        <div className="w-full grid lg:grid-cols-3 gap-8 items-start">
          {/* 3D Globe Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            ref={canvasRef}
            className="lg:col-span-2 h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden backdrop-blur-sm relative group"
          >
            {/* Canvas */}
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white/50">Loading 3D experience...</div>
                </div>
              }
            >
              <Canvas
                camera={{ position: [0, 0, isMobile ? 4 : 3], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
                style={{ width: "100%", height: "100%" }}
              >
                <color attach="background" args={["#000000"]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
                <pointLight position={[-10, -10, 10]} intensity={0.5} color="#ec4899" />

                {/* Particle Field */}
                <ParticleField />

                {/* Globe */}
                <GlobeComponent />

                {/* Technology Nodes */}
                <TechnologyNodes
                  hoveredTech={hoveredTech}
                  onHover={setHoveredTech}
                  onSelect={setSelectedTech}
                />

                {/* Connection Lines */}
                <TechnologyConnections
                  hoveredTech={hoveredTech}
                  connections={technologyConnections}
                  technologies={technologyCatalog}
                />

                {isMobile ? null : <OrbitControls autoRotate autoRotateSpeed={2} />}
                <Preload all />
              </Canvas>
            </Suspense>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-30" />
          </motion.div>

          {/* Information Card */}
          <AnimatePresence mode="wait">
            {selectedTech ? (
              <TechnologyCard
                key={selectedTech.id}
                tech={selectedTech}
                onClose={() => setSelectedTech(null)}
              />
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm"
              >
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Explore Technologies
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Hover over the nodes in the 3D globe to see connections between technologies.
                  </p>
                  <p className="text-white/60 text-xs">
                    Click on any technology to view detailed information.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Technology Categories Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Frontend", "Backend", "Database", "Core CS"].map((category) => (
              <div
                key={category}
                className="rounded-lg border border-white/10 bg-white/5 p-4 text-center hover:border-purple-400/50 transition-colors"
              >
                <p className="text-purple-300 font-semibold text-sm">{category}</p>
                <p className="text-white/60 text-xs mt-1">
                  {
                    technologyCatalog.filter((t) => t.category === category)
                      .length
                  }{" "}
                  technologies
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology3DGlobe;
