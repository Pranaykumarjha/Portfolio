"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { developmentProcess } from "@/Data";

const DevelopmentProcess = () => {
  return (
    <section className='w-full py-20' id='process'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-center mb-12'
      >
        <h1 className="heading text-4xl font-bold text-white">
          My <span className="text-purple-400">Development Process</span>
        </h1>
        <p className='text-white/70 mt-4 max-w-2xl mx-auto'>
          A structured approach to building scalable, production-ready applications
        </p>
      </motion.div>

      <div className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-6">
        {developmentProcess.map((phase, idx) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
          >
            <Card
              title={phase.title}
              phase={phase.phase}
              icon={phase.icon}
              description={phase.description}
              points={phase.points}
            >
              {idx === 0 && (
                <CanvasRevealEffect
                  animationSpeed={5.1}
                  containerClassName="bg-emerald-900"
                />
              )}
              {idx === 1 && (
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-black"
                  colors={[
                    [236, 72, 153],
                    [232, 121, 249],
                  ]}
                  dotSize={2}
                />
              )}
              {idx === 2 && (
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-sky-600"
                  colors={[[125, 211, 252]]}
                />
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Timeline Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className='mt-16 hidden lg:block'
      >
        <div className='flex items-center justify-between px-8'>
          {[1, 2, 3].map((num, idx) => (
            <React.Fragment key={num}>
              <div className='flex flex-col items-center'>
                <div className='w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold'>
                  {num}
                </div>
              </div>
              {idx < 2 && (
                <div className='flex-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-4'></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Card = ({
  title,
  phase,
  icon,
  children,
  description,
  points,
}: {
  title: string;
  phase: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
  points: string[];
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 lg:h-[35rem] relative rounded-3xl hover:border-purple-400/50 transition-colors"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        {/* Collapsed View */}
        <div className="text-center group-hover/canvas-card:-translate-y-8 absolute top-[50%] left-[50%] translate-x-[-50%] 
        translate-y-[50%] group-hover/canvas-card:opacity-0 
        transition duration-200 w-full mx-auto flex flex-col items-center justify-center">
          <div className='text-4xl mb-2'>{icon}</div>
          <p className='text-purple-300 text-xs font-bold uppercase tracking-wider'>{phase}</p>
        </div>

        {/* Expanded View */}
        <div className='opacity-0 group-hover/canvas-card:opacity-100 transition duration-200 text-center px-4'>
          <h2 className="dark:text-white relative z-10 text-white font-bold text-2xl mb-3">
            {title}
          </h2>
          <h3 className='text-purple-300 text-xs font-bold uppercase tracking-wider mb-4'>
            {phase}
          </h3>
          <p className="dark:text-white text-sm text-white/80 mb-4 leading-relaxed" style={{ color: '#e4ecff' }}>
            {description}
          </p>
          
          {/* Points List */}
          <div className='text-left text-xs text-white/70 space-y-2'>
            {points.map((point, idx) => (
              <div key={idx} className='flex items-center gap-2'>
                <span className='text-purple-400 font-bold'>✓</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Icon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v7.5m0 0l-3-3m3 3l3-3M3 20.25a4.5 4.5 0 015.243.885.75.75 0 001.214-.882 6 6 0 018.06 0 .75.75 0 001.214.882A4.5 4.5 0 1021 20.25M3 3.75a.75.75 0 00.75.75H6a.75.75 0 000-1.5H3.75A.75.75 0 003 3.75M3 6a.75.75 0 00.75.75h2.25a.75.75 0 000-1.5H3.75A.75.75 0 003 6m10.5-6a.75.75 0 00-.75.75v2.25a.75.75 0 001.5 0V.75a.75.75 0 00-.75-.75z" />
    </svg>
  );
};

export default DevelopmentProcess;