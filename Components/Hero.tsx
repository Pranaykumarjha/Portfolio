import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/utils/cn'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

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
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      
    </div>
      <div className='relative z-10 flex justify-center my-20' >
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
          <h2 className='text-white uppercase tracking-widest text-xs text-center max-w-80'>Dynamic Web Magic with Next.js</h2>
          <TextGenerateEffect
          className="text-white text-center text-[40px] md:text-[50px] lg:text-[60px]"
          words="Transforming Ideas into Stunning Web Experiences with Next.js "
          />
          <p className='text-center text-white md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi i am Pranay Kumar Jha a coding enthusiast based in Bangalore,India .

          </p>
          <a href="#About">
            <MagicButton
            title='Show my portfolio'
            icon={<FaLocationArrow />}
            position='right'
            />
          </a>

        </div> 

      </div>
    </div>
  )
}

export default Hero
