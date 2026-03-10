import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="max-w-content w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-muted-foreground font-body text-sm tracking-widest uppercase mb-4">
            Full Stack Developer · Dhaka, Bangladesh
          </p>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
            Naimul
            <br />
            <span className="text-primary">Islam</span>
          </h1>

          <p className="text-muted-foreground font-body text-base md:text-lg max-w-lg leading-relaxed mb-10">
            Full Stack Developer with hands-on experience building MERN stack web applications. 
            Skilled in designing RESTful APIs, authentication systems, and scalable client-server architecture.
          </p>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-sm overflow-hidden border border-border mb-10"
          >
            <img
              src="/hero.jpg"
              alt="Naimul Islam"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Naimul2580"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/naimul-islam-b24933368/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:inayeemislam701@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+8801779420714"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
