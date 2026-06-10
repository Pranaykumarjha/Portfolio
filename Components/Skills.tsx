"use client";
import React from "react";
import { motion } from "motion/react";
import { skills } from "@/Data";

interface SkillCategory {
  [key: string]: Array<{ name: string; proficiency: number }>;
}

const skillCategories = [
  { key: "frontend", label: "Frontend", icon: "🎨", color: "from-blue-500 to-cyan-500" },
  { key: "backend", label: "Backend", icon: "⚙️", color: "from-purple-500 to-pink-500" },
  { key: "database", label: "Database", icon: "🗄️", color: "from-green-500 to-emerald-500" },
  { key: "coreCS", label: "Core CS", icon: "🧠", color: "from-yellow-500 to-orange-500" },
  { key: "tools", label: "Tools & DevOps", icon: "🛠️", color: "from-red-500 to-pink-500" },
];

const Skills = () => {
  return (
    <section className="w-full py-20" id="skills">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="heading text-4xl font-bold text-white">
            Technical <span className="text-purple-400">Skills</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Proficiency across full-stack development with modern frameworks, databases, and DevOps tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Category Card */}
              <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg">{category.label}</h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {(skills[category.key as keyof typeof skills] as any[]).map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white/80 text-sm font-medium">{skill.name}</span>
                        <span className="text-purple-300 text-xs">{skill.proficiency}%</span>
                      </div>
                      {/* Proficiency Bar */}
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Technologies Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 w-full"
        >
          <div className="rounded-2xl border border-purple-400/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 backdrop-blur-sm">
            <p className="text-white/70 text-sm font-semibold mb-4 uppercase tracking-wider">Featured Stack</p>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Express.js", "AWS"].map(
                (tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-purple-400/30 hover:border-purple-400 text-purple-300 text-sm font-medium transition-all hover:bg-purple-500/10 cursor-default"
                  >
                    {tech}
                  </motion.div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
