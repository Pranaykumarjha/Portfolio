import React from "react";
import { motion } from "motion/react";
import { FaTimes, FaStar } from "react-icons/fa";

interface TechnologyCardProps {
  tech: {
    id: string;
    name: string;
    category: string;
    icon: string;
    color: string;
    experience: string;
    projects: string[];
    description: string;
    details: string;
  };
  onClose: () => void;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech, onClose }) => {
  const getExperienceColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "text-green-400";
      case "Intermediate":
        return "text-yellow-400";
      default:
        return "text-blue-400";
    }
  };

  const getExperienceStars = (level: string) => {
    switch (level) {
      case "Advanced":
        return 3;
      case "Intermediate":
        return 2;
      default:
        return 1;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 backdrop-blur-sm flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{tech.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-white">{tech.name}</h3>
            <p className="text-purple-300 text-sm font-semibold">{tech.category}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white transition-colors"
        >
          <FaTimes size={20} />
        </button>
      </div>

      {/* Description */}
      <p className="text-white/80 text-sm leading-relaxed mb-4">{tech.description}</p>

      {/* Experience Level */}
      <div className="mb-4 pb-4 border-b border-white/10">
        <p className="text-white/70 text-xs font-semibold mb-2 uppercase tracking-wider">
          Experience Level
        </p>
        <div className="flex items-center gap-2">
          <span className={`font-bold ${getExperienceColor(tech.experience)}`}>
            {tech.experience}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <FaStar
                key={i}
                size={12}
                className={
                  i < getExperienceStars(tech.experience)
                    ? "text-yellow-400"
                    : "text-white/20"
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-4 pb-4 border-b border-white/10">
        <p className="text-white/70 text-xs font-semibold mb-2 uppercase tracking-wider">
          Projects
        </p>
        <div className="flex flex-wrap gap-2">
          {tech.projects.map((project) => (
            <span
              key={project}
              className="px-2 py-1 rounded-md text-xs bg-purple-500/20 text-purple-300 border border-purple-400/30"
            >
              {project}
            </span>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="flex-grow">
        <p className="text-white/70 text-xs font-semibold mb-2 uppercase tracking-wider">
          Details
        </p>
        <p className="text-white/70 text-sm leading-relaxed">{tech.details}</p>
      </div>

      {/* Color Indicator */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <div
          className="h-2 rounded-full w-full"
          style={{
            background: `linear-gradient(to right, ${tech.color}, ${tech.color}aa)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default TechnologyCard;
