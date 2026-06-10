"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/utils/cn'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>
        <div className="absolute top-0 left-0 flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
    </div>
      <div className='relative z-10 flex justify-center my-20' >
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-4'
          >
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-400/30 bg-purple-400/10'>
              <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
              <span className='text-purple-300 text-xs md:text-sm font-semibold'>Open to Internships & Full-Time Roles</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <h2 className='text-white uppercase tracking-widest text-xs text-center max-w-80 mb-4'>
            Full Stack Developer & Problem Solver
          </h2>
          
          <TextGenerateEffect
          className="text-white text-center text-[40px] md:text-[50px] lg:text-[60px]"
          words="Crafting Scalable Web Applications & Real-Time Systems"
          />

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mt-8 text-center space-y-3'
          >
            <p className='text-white/90 md:tracking-wider text-sm md:text-lg'>
              Hi, I&apos;m Pranay Kumar Jha — a Computer Science student and full-stack developer specializing in modern web technologies.
            </p>
            
            {/* Skills Summary */}
            <div className='pt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center'>
              <div className='px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 transition-colors'>
                <p className='text-purple-300 text-xs font-bold'>Full-Stack</p>
                <p className='text-white/70 text-xs'>Development</p>
              </div>
              <div className='px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 transition-colors'>
                <p className='text-purple-300 text-xs font-bold'>Real-Time</p>
                <p className='text-white/70 text-xs'>Applications</p>
              </div>
              <div className='px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 transition-colors'>
                <p className='text-purple-300 text-xs font-bold'>Next.js &</p>
                <p className='text-white/70 text-xs'>TypeScript</p>
              </div>
              <div className='px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 transition-colors'>
                <p className='text-purple-300 text-xs font-bold'>Backend</p>
                <p className='text-white/70 text-xs'>Development</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10"
          >
          <a href="#skills">
            <MagicButton
            title='View my Skills'
            icon={<FaLocationArrow />}
            position='right'
            />
          </a>
          <a href="/Pranay_Resume.pdf" download="Pranay_Kumar_Jha_Resume.pdf">
            <MagicButton
            title='Download Resume'
            icon={<FaLocationArrow />}
            position='right'
            />
          </a>
          </motion.div>

        </div> 

      </div>
    </div>
  )
}

export default Hero
