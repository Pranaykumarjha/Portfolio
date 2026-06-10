"use client";
import { workExperience } from '@/Data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import { motion } from 'motion/react'
import { FaCheck } from 'react-icons/fa'

const Experience = () => {
  // Enhanced experience data with more details
  const enhancedExperience = [
    {
      id: 1,
      role: "IT Intern",
      organization: "Nuvoco Vistas Corp. Ltd.",
      duration: "Jul 2025 – Aug 2025",
      thumbnail: "/exp1.svg",
      achievements: [
        "Assisted enterprise IT workflows and troubleshooting",
        "Managed system infrastructure and maintenance",
        "Collaborated on internal technical processes",
        "Gained exposure to enterprise-level operations",
      ],
      technologies: ["IT Infrastructure", "Troubleshooting", "System Maintenance"],
    },
    {
      id: 2,
      role: "Student Developer",
      organization: "Sir M. Visvesvaraya Institute of Technology",
      duration: "2023 – 2027",
      thumbnail: "/exp2.svg",
      achievements: [
        "Pursuing B.E. in Computer Science Engineering",
        "Maintaining CGPA of 8.61/10",
        "Strong foundation in DSA, DBMS, and OS",
        "Excelling in OOP and Computer Networks",
      ],
      technologies: ["DSA", "DBMS", "OS", "OOP", "Computer Networks"],
    },
    {
      id: 3,
      role: "Full Stack Developer",
      organization: "Personal Projects",
      duration: "Ongoing",
      thumbnail: "/exp3.svg",
      achievements: [
        "Built Converso — AI learning platform with real-time features",
        "Created CoinPulse — live cryptocurrency dashboard with 50+ coins",
        "Developed secure Password Manager with encryption",
        "Built Awwards — animated website with 10+ animations",
      ],
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"],
    },
    {
      id: 4,
      role: "Software Engineer",
      organization: "Seeking Opportunities",
      duration: "Available Now",
      thumbnail: "/exp4.svg",
      achievements: [
        "Seeking full-time or internship positions in full-stack development",
        "Ready to contribute to scalable real-time applications",
        "Available for relocation or remote work",
        "Based in Bangalore, India",
      ],
      technologies: ["Full-Stack", "Real-Time Systems", "Scalable Architecture"],
    },
  ];

  return (
    <div className='py-20' id='experience'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-center mb-12'
      >
        <h1 className='heading text-4xl font-bold text-white text-center'>
          My
          <span className='text-purple-300'> Experience</span>
        </h1>
        <p className='text-white/70 mt-4 max-w-2xl mx-auto'>
          A summary of my professional journey, education, and development projects
        </p>
      </motion.div>

      <div className='w-full mt-12 grid lg:grid-cols-2 gap-6'>
        {enhancedExperience.map((experience, idx) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              className='flex-1 text-white border-neutral-200 dark:border-slate-800 min-h-full'
            >
              <div className='flex flex-col p-6 md:p-8 lg:p-10 h-full'>
                {/* Header with Logo and Duration */}
                <div className='flex items-start justify-between mb-4'>
                  <img 
                    src={experience.thumbnail} 
                    alt={experience.thumbnail} 
                    className='lg:w-16 md:w-14 w-12'
                  />
                  <span className='text-xs px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 font-semibold whitespace-nowrap ml-4'>
                    {experience.duration}
                  </span>
                </div>

                {/* Role and Organization */}
                <div className='mb-4'>
                  <h1 className='text-start text-xl md:text-2xl font-bold text-white'>
                    {experience.role}
                  </h1>
                  <p className='text-start text-purple-300 font-semibold mt-1'>
                    {experience.organization}
                  </p>
                </div>

                {/* Achievements */}
                <div className='flex-grow mb-4'>
                  <p className='text-white/60 text-sm font-semibold mb-3 uppercase tracking-wider'>Key Achievements</p>
                  <ul className='space-y-2'>
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className='flex gap-3 text-white/80 text-sm'>
                        <FaCheck className='text-green-400 flex-shrink-0 mt-0.5' />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <p className='text-white/60 text-sm font-semibold mb-2 uppercase tracking-wider'>Technologies</p>
                  <div className='flex flex-wrap gap-2'>
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-2 py-1 rounded-md text-xs bg-purple-500/10 text-purple-300 border border-purple-400/30'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience
