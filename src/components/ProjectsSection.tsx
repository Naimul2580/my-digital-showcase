import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  tech: string;
  role: string;
  github: string;
  description: string[];
}

const projects: Project[] = [
  {
    title: "Driver Hiring Platform",
    tech: "React.js · Node.js · Express.js · MongoDB · JWT",
    role: "Individual Project",
    github: "https://github.com/Naimul2580/Driver_Hiring",
    description: [
      "Developed a full-stack vehicle booking and driver hiring web application.",
      "Designed and implemented RESTful APIs with secure JWT-based authentication and protected routes.",
    ],
  },
  {
    title: "Car Rental System",
    tech: "Python · MongoDB",
    role: "Backend Contributor",
    github: "https://github.com/yeakiniqra/carrental",
    description: [
      "Contributed to backend logic and rental workflow implementation.",
      "Managed database operations and user request processing.",
      "Collaborated using Git for version control and feature integration.",
    ],
  },
  {
    title: "Safe Bee – Disaster Response",
    tech: "JavaScript · Web Technologies",
    role: "Backend Contributor",
    github: "https://github.com/yeakiniqra/SafeBee-UAP",
    description: [
      "Contributed to backend modules for disaster alert notifications.",
      "Assisted in integrating AI-based assistance features.",
      "Worked on location-based service functionality.",
    ],
  },
];

const ProjectsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24 relative" id="projects">
      <div className="max-w-content mx-auto relative">
        <div className="section-heading">Pr</div>

        <h2 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-12 relative z-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            const isHovered = hoveredIndex === index;
            const somethingHovered = hoveredIndex !== null;

            return (
              <motion.div
                key={project.title}
                layout
                className={`relative cursor-pointer border border-border p-6 transition-colors duration-300 ${
                  isExpanded ? "md:col-span-2 bg-card" : "bg-background hover:bg-card"
                }`}
                style={{
                  opacity: somethingHovered && !isHovered && !isExpanded ? 0.4 : 1,
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 ml-2 shrink-0"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <p className="text-muted-foreground text-xs font-body mb-1">{project.role}</p>
                <p className="text-muted-foreground text-xs font-body">{project.tech}</p>

                {/* Accent line — the obelisk shadow */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered || isExpanded ? "100%" : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-6 space-y-2">
                        {project.description.map((desc, i) => (
                          <li key={i} className="text-sm text-muted-foreground font-body leading-relaxed pl-4 border-l-2 border-primary/30">
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
