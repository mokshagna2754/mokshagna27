import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { Code, Database, Cloud, Cpu, Palette, Smartphone } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills", icon: Code },
    { id: "programming", label: "Programming", icon: Code },
    { id: "aiml", label: "AI/ML", icon: Cpu },
    { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
    { id: "database", label: "Data & Analytics", icon: Database },
    { id: "design", label: "UI/UX", icon: Palette },
    { id: "mobile", label: "Mobile", icon: Smartphone },
  ];

  const skills = [
    // Programming
    { name: "Python", category: "programming", level: 90 },
    { name: "JavaScript", category: "programming", level: 78 },
    { name: "TypeScript", category: "programming", level: 75 },
    { name: "HTML5", category: "programming", level: 85 },
    { name: "CSS3", category: "programming", level: 83 },
    // AI/ML
    { name: "Machine Learning", category: "aiml", level: 88 },
    { name: "TensorFlow", category: "aiml", level: 85 },
    { name: "Computer Vision", category: "aiml", level: 82 },
    { name: "NLP", category: "aiml", level: 78 },
    { name: "Deep Learning", category: "aiml", level: 80 },
    { name: "Gen AI", category: "aiml", level: 85 },
    { name: "Prompt Engineering", category: "aiml", level: 88 },
    // Cloud
    { name: "AWS", category: "cloud", level: 80 },
    { name: "Docker", category: "cloud", level: 75 },
    { name: "Vertex AI", category: "cloud", level: 78 },
    { name: "Firebase", category: "cloud", level: 75 },
    // Database
    { name: "SQL", category: "database", level: 85 },
    { name: "MongoDB", category: "database", level: 78 },
    { name: "Data Analytics", category: "database", level: 82 },
    // Design
    { name: "Figma", category: "design", level: 85 },
    { name: "Adobe XD", category: "design", level: 75 },
    { name: "Wireframing", category: "design", level: 88 },
    { name: "Prototyping", category: "design", level: 82 },
    // Mobile & Web
    { name: "React", category: "mobile", level: 78 },
    { name: "Flutter", category: "mobile", level: 75 },
    { name: "React Native", category: "mobile", level: 72 },
    { name: "Flask/FastAPI", category: "programming", level: 82 },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  const marqueeSkills = [
    "Python", "TensorFlow", "AWS", "React", "Flutter", "Figma", 
    "Machine Learning", "Computer Vision", "Docker", "SQL", "JavaScript",
    "Gen AI", "Vertex AI", "MongoDB", "TypeScript", "FastAPI"
  ];

  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-[#0A141F]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#D4A373] font-semibold mb-4">
            Technical Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Skills & <span className="text-gold-gradient">Expertise</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable solutions
          </p>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 skill-marquee"
        >
          <Marquee gradient={false} speed={40} pauseOnHover>
            {marqueeSkills.map((skill, index) => (
              <motion.span
                key={`${skill}-${index}`}
                whileHover={{ scale: 1.1, color: '#D4A373' }}
                className="mx-8 text-2xl md:text-3xl font-light text-[#94A3B8]/50 cursor-default transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {skill}
              </motion.span>
            ))}
          </Marquee>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-testid={`skill-filter-${cat.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#D4A373] text-[#0D1B2A]"
                  : "bg-[#132336] text-[#94A3B8] hover:bg-[#D4A373]/10 hover:text-[#D4A373]"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              data-testid={`skill-item-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="glass-card rounded-xl p-4 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#F8FAFC] font-medium">{skill.name}</span>
                <span className="text-sm text-[#D4A373]">{skill.level}%</span>
              </div>
              <div className="h-2 bg-[#132336] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                  className="h-full rounded-full relative"
                  style={{
                    background: 'linear-gradient(90deg, #D4A373 0%, #E8C299 100%)',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "35+", label: "Technical Skills" },
            { value: "5+", label: "Programming Languages" },
            { value: "20+", label: "Frameworks & Tools" },
            { value: "3+", label: "Cloud Platforms" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="text-center glass-card rounded-2xl p-6"
            >
              <p className="text-3xl font-light text-gold-gradient mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {stat.value}
              </p>
              <p className="text-xs text-[#94A3B8]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
