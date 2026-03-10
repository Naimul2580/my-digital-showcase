import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-card px-6 py-24" id="about">
      <div className="max-w-content mx-auto relative" ref={ref}>
        <div className="section-heading">Ab</div>

        <h2 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-12 relative z-10">
          About
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Profile image */}
          <div className="w-full aspect-[3/4] overflow-hidden border border-border">
            <img
              src="/hero.jpg"
              alt="Naimul Islam"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-2 space-y-6">
            <p className="text-foreground font-body text-base leading-relaxed">
              I'm a Full Stack Developer based in Dhaka, Bangladesh, with a B.Sc. in Computer Science & Engineering 
              from the University of Asia Pacific — graduating with a CGPA of 3.62/4.00, along with the Vice Chancellor's 
              Award & Dean's Award.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              My focus is on building robust MERN stack applications, designing clean RESTful APIs, 
              and implementing secure authentication systems. I care about architecture, 
              scalability, and writing code that's built to last.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              During my internship at Wolast Technologies Ltd., I worked on backend development — 
              building and testing API endpoints, collaborating with frontend teams, and 
              participating in team-based development workflows using Git.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
