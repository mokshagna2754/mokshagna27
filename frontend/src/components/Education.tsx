import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  const education = [
    {
      period: "2021 – 2025",
      degree: "B.Tech – AI/ML",
      institution: "CMR College of Engineering and Technology",
      grade: "CGPA: 7.82/10",
      description: "Specialized in Artificial Intelligence and Machine Learning with focus on deep learning, computer vision, and data analytics.",
      type: "Undergraduate",
      icon: GraduationCap,
    },
    {
      period: "2019 – 2021",
      degree: "Class XII",
      institution: "Sri Gayatri Junior College",
      grade: "97.2%",
      description: "TSBIE Board with exceptional performance in Mathematics, Physics, and Chemistry.",
      type: "Intermediate",
      icon: BookOpen,
    },
    {
      period: "2018 – 2019",
      degree: "Class X",
      institution: "Tejaswi High School",
      grade: "9.2/10",
      description: "SSC Board with strong foundation in core subjects and extracurricular activities.",
      type: "Secondary",
      icon: Award,
    },
  ];

  const highlights = [
    { value: "97.2%", label: "Highest Score in Intermediate" },
    { value: "7.82", label: "Current CGPA in B.Tech" },
    { value: "4+", label: "Years of Technical Education" },
  ];

  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden bg-[#0A141F]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4A373 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#D4A373] font-semibold mb-4">
            Academic Journey
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="text-gold-gradient">Education</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
            A strong academic foundation in technology and sciences, building the pathway to innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Glowing vertical line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-[#132336]">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#D4A373] via-[#D4A373] to-transparent"
              style={{ height: lineHeight }}
            />
            <motion.div
              className="absolute top-0 left-0 right-0 blur-sm bg-[#D4A373]"
              style={{ height: lineHeight, opacity: 0.5 }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`education-item-${index}`}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-[#0D1B2A] border-2 border-[#D4A373] z-10"
                  whileInView={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                >
                  <div className="absolute inset-0 rounded-full bg-[#D4A373] animate-pulse-glow opacity-50" />
                </motion.div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    className="glass-card rounded-2xl p-6 relative overflow-hidden group"
                    whileHover={{ y: -4 }}
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4A373]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Period badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs px-3 py-1 rounded-full bg-[#D4A373]/10 text-[#D4A373] font-medium">
                        {item.period}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-[#132336] text-[#94A3B8]">
                        {item.type}
                      </span>
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-12 h-12 rounded-xl bg-[#D4A373]/10 flex items-center justify-center flex-shrink-0"
                      >
                        <item.icon className="w-6 h-6 text-[#D4A373]" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-[#F8FAFC] mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          {item.degree}
                        </h3>
                        <p className="text-[#D4A373] text-sm mb-1">{item.institution}</p>
                        <p className="text-[#F8FAFC] font-semibold text-lg">{item.grade}</p>
                      </div>
                    </div>

                    <p className="text-sm text-[#94A3B8] mt-4 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 glass-card rounded-3xl p-8"
          data-testid="education-highlights"
        >
          <h3 className="text-xl font-medium text-[#F8FAFC] text-center mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Academic Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-light text-gold-gradient mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {highlight.value}
                </p>
                <p className="text-sm text-[#94A3B8]">{highlight.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
