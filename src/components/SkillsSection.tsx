import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { label: "Languages", skills: "C · C++ · Python · JavaScript" },
  { label: "Frontend", skills: "React.js · HTML5 · CSS3" },
  { label: "Backend", skills: "Node.js · Express.js · RESTful APIs · JWT · Middleware" },
  { label: "Database", skills: "MongoDB" },
  { label: "Tools", skills: "Git · GitHub · Postman · Vercel" },
  { label: "Concepts", skills: "Data Structures · OOP · MVC · CRUD · Client-Server Architecture" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="px-6 py-24" id="skills">
      <div className="max-w-content mx-auto relative" ref={ref}>
        <div className="section-heading">Sk</div>

        <h2 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-12 relative z-10">
          Technical Skills
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative z-10 space-y-6"
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
            >
              <span className="font-heading text-xs tracking-widest uppercase text-primary w-24 shrink-0">
                {cat.label}
              </span>
              <span className="text-foreground font-body text-sm leading-relaxed">
                {cat.skills}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
