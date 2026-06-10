"use client";
import React from "react";
import { motion } from "motion/react";
import { education, certifications } from "@/Data";

const Education = () => {
  return (
    <section className="w-full py-20" id="education">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 w-full"
        >
          <h1 className="heading text-4xl font-bold text-white">
            Education & <span className="text-purple-400">Certifications</span>
          </h1>
        </motion.div>

        {/* Education Section */}
        <div className="w-full mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <span className="text-3xl">🎓</span>
            Education
          </motion.h2>

          <div className="grid gap-6">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-purple-300 font-semibold mb-4">{edu.institution}</p>
                    <div className="flex gap-8 mb-4">
                      <div>
                        <p className="text-white/60 text-sm">Graduation</p>
                        <p className="text-white font-bold">{edu.graduationYear}</p>
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">CGPA</p>
                        <p className="text-white font-bold">{edu.cgpa}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Coursework */}
                  <div>
                    <p className="text-white/70 text-sm font-semibold mb-3 uppercase tracking-wider">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <motion.span
                          key={course}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-400/30 text-purple-200 text-sm hover:border-purple-400 transition-colors"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <span className="text-3xl">📜</span>
            Certifications
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                    <p className="text-purple-300 text-sm font-semibold">{cert.provider}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-lg bg-purple-500/20 text-purple-300 font-semibold">
                    {cert.date}
                  </span>
                </div>

                {/* Skills Gained */}
                <div className="mt-4">
                  <p className="text-white/60 text-xs font-semibold mb-2 uppercase tracking-wider">Skills Gained</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsGained.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 text-xs hover:text-purple-300 hover:border-purple-400/50 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
