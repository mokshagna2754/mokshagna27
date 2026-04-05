import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Code2, BookOpen, Trophy, Users, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "30+", label: "Projects Completed", icon: Code2 },
    { value: "15+", label: "Certifications", icon: Award },
    { value: "2", label: "Leadership Roles", icon: Users },
    { value: "95%", label: "Accuracy Achieved", icon: Trophy },
  ];

  const highlights = [
    {
      icon: Sparkles,
      title: "AI/ML Innovation",
      description: "Passionate about cutting-edge artificial intelligence and machine learning technologies",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern web technologies and cloud platforms",
    },
    {
      icon: BookOpen,
      title: "Historical Curiosity",
      description: "Fascinated by history and how past innovations shape our technological future",
    },
    {
      icon: Trophy,
      title: "Competitive Spirit",
      description: "Active badminton player who brings the same competitive drive to coding challenges",
    },
  ];

  const leadership = [
    {
      title: "Student Coordinator – AIML Department",
      event: "Azura 2k24",
      description: "Led departmental coordination and organized technical events for 200+ teams during the tech fest",
    },
    {
      title: "Project Lead – Brain Stroke Detection",
      event: "Team of 5 Members",
      description: "Supervised 5-member team and ensured timely completion of model evaluation, leading from concept to implementation",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 opacity-5"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#D4A373" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#D4A373" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#D4A373" strokeWidth="0.5" />
          </svg>
        </motion.div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#D4A373] font-semibold mb-4">
            Get to Know Me
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            About <span className="text-gold-gradient">Me</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Bio Card - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 glass-card rounded-3xl p-8"
            data-testid="about-bio-card"
          >
            <h3 className="text-2xl font-medium text-[#F8FAFC] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Driven by Innovation and Creativity
            </h3>
            <p className="text-[#94A3B8] leading-relaxed mb-4">
              As a passionate AI/ML developer and data analyst, I'm on a mission to solve real-world problems through intelligent automation and innovative technology solutions. My journey in artificial intelligence is fueled by curiosity and a deep desire to create meaningful impact.
            </p>
            <p className="text-[#94A3B8] leading-relaxed">
              When I'm not coding or training models, you'll find me exploring historical narratives, competing on the badminton court, or diving deep into the latest advancements in generative AI. This diverse range of interests helps me approach technical challenges with creativity and a unique perspective.
            </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8"
            data-testid="about-stats-card"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 text-[#D4A373] mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-light text-gold-gradient" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#94A3B8] mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards */}
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass-card rounded-3xl p-6 group"
              data-testid={`about-highlight-${index}`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-2xl bg-[#D4A373]/10 flex items-center justify-center mb-4"
              >
                <highlight.icon className="w-6 h-6 text-[#D4A373]" />
              </motion.div>
              <h4 className="text-lg font-medium text-[#F8FAFC] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {highlight.title}
              </h4>
              <p className="text-sm text-[#94A3B8]">{highlight.description}</p>
            </motion.div>
          ))}

          {/* Leadership Card - Spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2 glass-card rounded-3xl p-8"
            data-testid="about-leadership-card"
          >
            <h3 className="text-xl font-medium text-[#F8FAFC] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Leadership & Responsibilities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {leadership.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-[#D4A373]/30"
                >
                  <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-[#D4A373]" />
                  <h4 className="text-[#F8FAFC] font-medium mb-1">{role.title}</h4>
                  <p className="text-[#D4A373] text-sm mb-2">{role.event}</p>
                  <p className="text-sm text-[#94A3B8]">{role.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
