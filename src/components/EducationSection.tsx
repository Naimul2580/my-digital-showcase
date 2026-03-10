import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "University of Asia Pacific, Dhaka",
    result: "CGPA: 3.62 / 4.00",
    year: "2025",
    awards: "Vice Chancellor's Award & Dean's Award",
  },
  {
    degree: "HSC",
    institution: "BAF Shaheen College Dhaka",
    result: "GPA: 5.00",
    year: "2021",
  },
  {
    degree: "SSC",
    institution: "BAF Shaheen College Dhaka",
    result: "GPA: 5.00",
    year: "2018",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-card px-6 py-24" id="education">
      <div className="max-w-content mx-auto relative" ref={ref}>
        <div className="section-heading">Ed</div>

        <h2 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-12 relative z-10">
          Education
        </h2>

        <div className="relative z-10 space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-l-2 border-primary/30 pl-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-heading text-base font-semibold">{edu.degree}</h3>
                <span className="text-muted-foreground text-xs font-body">{edu.year}</span>
              </div>
              <p className="text-muted-foreground text-sm font-body mt-1">{edu.institution}</p>
              <p className="text-foreground text-sm font-body mt-1">{edu.result}</p>
              {edu.awards && (
                <p className="text-primary text-xs font-body mt-1">{edu.awards}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
