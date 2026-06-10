"use client";
import React from "react";
import { motion } from "motion/react";
import { currentlyLearning } from "@/Data";

const CurrentlyLearning = () => {
  return (
    <section className="w-full py-20" id="learning">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="heading text-4xl font-bold text-white">
            Currently <span className="text-purple-400">Learning</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Continuously expanding my skillset and staying updated with the latest technologies and methodologies
          </p>
        </motion.div>

        {/* Learning Topics Grid */}
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          {currentlyLearning.map((topic, idx) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm">
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 text-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  📚
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{topic.description}</p>

                {/* Progress indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl border border-purple-400/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5 backdrop-blur-sm text-center max-w-2xl"
        >
          <p className="text-white/80 text-sm">
            <span className="text-purple-300 font-semibold">Commitment to Growth:</span> I believe in lifelong learning and stay current with industry trends. I regularly explore new technologies, contribute to open source, and engage with the developer community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
