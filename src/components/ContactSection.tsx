import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-card px-6 py-24" id="contact">
      <div className="max-w-content mx-auto relative" ref={ref}>
        <div className="section-heading">Co</div>

        <h2 className="font-heading text-sm tracking-widest uppercase text-muted-foreground mb-12 relative z-10">
          Contact
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative z-10 space-y-6"
        >
          <p className="text-foreground font-body text-base leading-relaxed max-w-md">
            I'm currently open to new opportunities. Let's build something meaningful together.
          </p>

          <div className="space-y-3">
            <a
              href="mailto:inayeemislam701@gmail.com"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 font-body text-sm"
            >
              <Mail size={16} className="text-primary" />
              inayeemislam701@gmail.com
            </a>
            <a
              href="tel:+8801779420714"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 font-body text-sm"
            >
              <Phone size={16} className="text-primary" />
              +880 1779 420714
            </a>
            <a
              href="https://github.com/Naimul2580"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 font-body text-sm"
            >
              <Github size={16} className="text-primary" />
              github.com/Naimul2580
            </a>
            <a
              href="https://www.linkedin.com/in/naimul-islam-b24933368/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300 font-body text-sm"
            >
              <Linkedin size={16} className="text-primary" />
              LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
