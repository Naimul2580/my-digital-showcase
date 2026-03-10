import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="px-6 py-24" id="experience">
      <div className="max-w-content mx-auto relative" ref={ref}>
        <div className="section-heading">Ex</div>

        <h2 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-12 relative z-10">
          Experience
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative z-10 border-l-2 border-primary/30 pl-6"
        >
          <h3 className="font-heading text-base font-semibold">Backend Developer Intern</h3>
          <p className="text-primary text-sm font-body mt-1">Wolast Technologies Ltd.</p>

          <ul className="mt-4 space-y-3">
            {[
              "Developed and tested RESTful API endpoints using Node.js and Express.js.",
              "Performed API debugging and validation using Postman.",
              "Collaborated with frontend developers for API integration and authentication handling.",
              "Used Git for version control and participated in team-based development workflows.",
            ].map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground font-body leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
