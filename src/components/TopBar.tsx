import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed top-0 right-0 z-50 p-6"
    >
      <a
        href="#contact"
        className="font-heading text-xs tracking-widest uppercase border border-border px-4 py-2 bg-background/80 backdrop-blur-sm hover:border-primary hover:text-primary transition-colors duration-300"
      >
        Contact
      </a>
    </motion.header>
  );
};

export default TopBar;
