"use client";
import { projects } from '@/Data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { div } from 'motion/react-client'
import { FaLocationArrow, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'motion/react'

const RecentProjects = () => {
    return (
        <div className='py-20' id='projects'>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
            >
            <h1 className='heading text-4xl font-bold text-white text-center'>
                Featured <span className='text-purple-300'>Projects</span>
            </h1>
            <p className='text-white/70 mt-4 max-w-2xl mx-auto'>
              Production-ready applications showcasing full-stack development expertise with real-world impact
            </p>
            </motion.div>

            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 text-white'>
                {projects.map(({ id, title, des, impact, technologies, img, iconLists, link, liveDemo }, idx) =>
                (
                    <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className='lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'
                    >
                        <PinContainer title={link} href={link}>
                            <div className='relative flex justify-center items-center sm:h-[40vh] sm:w-[570px] w-[80vw] overflow-hidden h-[30vh]  mb-10'>

                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    <img src="/bg.png" alt="bg-img" />
                                </div>

                                <img
                                    src={img}
                                    alt={title}
                                    className={img.endsWith('.png') ? 'absolute z-10 inset-0 w-full h-full object-cover object-top' : 'absolute z-10 bottom-0'}
                                />

                            </div>

                            <h1 className='lg:text-2xl md:text-xl text-base font-bold line-clamp-1 text-white'>
                                {title}
                            </h1>

                            <p className='text-white/80 lg:text-sm lg:font-normal font-light text-xs line-clamp-2 mt-2'>
                                {des}
                            </p>

                            {/* Impact Section */}
                            <div className='mt-3 p-3 rounded-lg bg-purple-500/5 border border-purple-400/20'>
                                <p className='text-purple-300 text-xs font-semibold mb-1'>Impact:</p>
                                <p className='text-white/70 text-xs leading-relaxed'>{impact}</p>
                            </div>

                            {/* Technologies */}
                            <div className='mt-4'>
                                <p className='text-white/60 text-xs font-semibold mb-2'>Tech Stack:</p>
                                <div className='flex flex-wrap gap-2'>
                                    {technologies?.map((tech) => (
                                        <span
                                            key={tech}
                                            className='px-2 py-1 rounded text-xs bg-white/10 text-white/80 border border-white/20'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className='flex justify-between items-center mt-7 mb-3'>
                                <div className="flex items-center">
                                    {iconLists.map((icon,index) => (
                                        <div
                                            key={icon}
                                            className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{transform:`translateX(-${5 * index * 2}px)`}}
                                        >
                                            <img
                                                src={icon}
                                                alt={icon}
                                                className="p-2"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className='flex gap-3'>
                                    <a
                                        href={liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity gap-1 text-purple-300 hover:text-purple-200'
                                    >
                                        <p className="text-xs md:text-sm">Live Demo</p>
                                        <FaExternalLinkAlt className="text-xs" />
                                    </a>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity gap-1 text-purple-300 hover:text-purple-200'
                                    >
                                        <p className="text-xs md:text-sm">GitHub</p>
                                        <FaLocationArrow className="text-xs" />
                                    </a>
                                </div>

                            </div>
                        </PinContainer>
                    </motion.div>
                ))}

            </div>

        </div>
    )
}

export default RecentProjects
