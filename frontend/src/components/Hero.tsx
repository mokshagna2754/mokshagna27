import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        color: { value: "#D4A373" },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none" as const,
          random: true,
          straight: false,
          outModes: { default: "out" as const },
        },
        number: { value: 80, density: { enable: true, area: 800 } },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: { enable: true, speed: 0.5, minimumValue: 0.1 },
        },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 150,
          color: "#D4A373",
          opacity: 0.1,
          width: 1,
        },
      },
      detectRetina: true,
    }),
    []
  );

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/mokshagna-bingi-a299a6229", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/mokshagna2754", label: "GitHub" },
    { icon: Mail, href: "mailto:mokshagnabingi2754@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={particlesOptions}
        />
      )}

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Rotating Cube outline */}
        <motion.div
          className="absolute top-[20%] left-[10%] w-32 h-32"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 6, repeat: Infinity } }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="10" y="10" width="60" height="60" fill="none" stroke="#D4A373" strokeWidth="1" opacity="0.15" />
            <rect x="30" y="30" width="60" height="60" fill="none" stroke="#D4A373" strokeWidth="1" opacity="0.1" />
            <line x1="10" y1="10" x2="30" y2="30" stroke="#D4A373" strokeWidth="1" opacity="0.1" />
            <line x1="70" y1="10" x2="90" y2="30" stroke="#D4A373" strokeWidth="1" opacity="0.1" />
            <line x1="70" y1="70" x2="90" y2="90" stroke="#D4A373" strokeWidth="1" opacity="0.1" />
            <line x1="10" y1="70" x2="30" y2="90" stroke="#D4A373" strokeWidth="1" opacity="0.1" />
          </svg>
        </motion.div>

        {/* Pyramid */}
        <motion.div
          className="absolute top-[60%] right-[15%] w-24 h-24"
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 90,90 10,90" fill="none" stroke="#D4A373" strokeWidth="1" opacity="0.15" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="#D4A373" strokeWidth="1" opacity="0.1" />
          </svg>
        </motion.div>

        {/* Intersecting Rings */}
        <motion.div
          className="absolute top-[30%] right-[25%] w-40 h-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#D4A373" strokeWidth="1" opacity="0.1" />
            <ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="#D4A373" strokeWidth="1" opacity="0.15" />
            <ellipse cx="50" cy="50" rx="20" ry="40" fill="none" stroke="#D4A373" strokeWidth="1" opacity="0.1" />
          </svg>
        </motion.div>

        {/* Hexagon */}
        <motion.div
          className="absolute bottom-[20%] left-[20%] w-28 h-28"
          animate={{ y: [0, -30, 0], rotate: [0, 60, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#D4A373" strokeWidth="1" opacity="0.12" />
          </svg>
        </motion.div>

        {/* Diamond */}
        <motion.div
          className="absolute top-[70%] left-[60%] w-20 h-20"
          animate={{ rotate: 45, y: [0, -15, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ y: { duration: 5, repeat: Infinity }, opacity: { duration: 3, repeat: Infinity } }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="#D4A373" strokeWidth="1" opacity="0.15" transform="rotate(45 50 50)" />
          </svg>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#D4A373] font-semibold mb-6"
        >
          AI/ML Developer & Full-Stack Engineer
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-6"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          <span className="text-[#F8FAFC]">Mokshagna</span>
          <br />
          <span className="text-gold-gradient">Bingi</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting intelligent solutions using code and creativity.
          <br />
          <span className="text-[#D4A373]">30+ Projects</span> · <span className="text-[#D4A373]">15+ Certifications</span> · <span className="text-[#D4A373]">95% Accuracy</span>
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-4 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`hero-social-${social.label.toLowerCase()}`}
              className="group relative p-4 glass-card rounded-full"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <social.icon className="w-5 h-5 text-[#94A3B8] group-hover:text-[#D4A373] transition-colors duration-300" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#94A3B8] opacity-0 group-hover:opacity-100 transition-opacity">
                {social.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            href="#projects"
            data-testid="hero-view-projects-btn"
            className="btn-gold px-8 py-4 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore My Work
            <ExternalLink className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#contact"
            data-testid="hero-contact-btn"
            className="btn-outline-gold px-8 py-4 rounded-full text-sm font-semibold inline-flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          data-testid="scroll-indicator"
        >
          <span className="text-xs uppercase tracking-widest text-[#94A3B8]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#D4A373] to-transparent" />
          <ChevronDown className="w-4 h-4 text-[#D4A373]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
