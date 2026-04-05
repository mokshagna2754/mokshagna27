import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "AI Intern",
      company: "SimplyBiz Pvt Ltd",
      period: "Nov 2025 – Present",
      location: "Remote",
      type: "Current Position",
      achievements: [
        "Built SimplyTrnsct, a legal SaaS platform for managing contracts, deals, and business workflows",
        "Contributed to product planning, workflow structuring, automation, and coordination between business and technical teams",
        "Learned end-to-end application design and SaaS product development",
        "Gained practical experience in Gen AI, prompting, and startup execution",
      ],
      technologies: ["SaaS", "Automation", "Gen AI", "Prompting", "Web Stack", "Product Planning"],
    },
    {
      title: "Founder's Office Intern",
      company: "Flow Launch",
      period: "Sept – Oct 2025",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Designed and implemented automation workflows to optimize internal processes",
        "Reduced manual effort through intelligent automation solutions",
        "Strengthened skills in workflow automation and process optimization",
        "Gained exposure to start-up operations and AI-driven business solutions",
      ],
      technologies: ["Automation", "Workflow Optimization", "AI Integration", "Process Improvement"],
    },
    {
      title: "UI/UX & App Development Intern",
      company: "Centle",
      period: "May – Sept 2025",
      location: "Remote/Hyderabad",
      type: "Internship",
      achievements: [
        "Developed and integrated Python-based ML models for ride-sharing application",
        "Focused on demand prediction and route optimization using machine learning",
        "Developed holistic skill set integrating backend AI/ML deployment with frontend UI/UX design",
        "Mastered full-stack process from algorithm implementation to final user interface",
      ],
      technologies: ["Python", "UI/UX Design", "Flutter", "ML Algorithms", "Figma", "Route Optimization"],
    },
    {
      title: "AI/ML Virtual Intern",
      company: "AICTE – Google",
      period: "Apr – Jun 2024",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Improved object detection accuracy to 95%",
        "Reduced latency in image retrieval by 30%",
        "Hands-on experience with Vertex AI and prompt design",
        "Implemented real-time AI solutions",
      ],
      technologies: ["Vertex AI", "TensorFlow", "Computer Vision", "Prompt Engineering"],
    },
    {
      title: "AI/ML Virtual Intern",
      company: "AICTE – AWS",
      period: "Jan – Mar 2024",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Achieved 92%+ image classification accuracy using CNNs",
        "Implemented EC2 auto-scaling and S3 optimization strategies",
        "Enhanced system availability and performance",
        "Gained proficiency in AWS automation and large-scale deployment",
      ],
      technologies: ["AWS EC2", "S3", "TensorFlow", "CNNs", "Auto-scaling", "Cloud Architecture"],
    },
  ];

  const stats = [
    { value: "12+", label: "Months of Experience" },
    { value: "5", label: "Major Internships" },
    { value: "95%", label: "Highest Accuracy Achieved" },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -right-20 top-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #D4A373 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
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
            Professional Journey
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="text-gold-gradient">Experience</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
            Professional journey in AI/ML development and cloud technologies
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`experience-card-${index}`}
              className="relative"
            >
              <motion.div
                className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden"
                animate={{
                  borderColor: hoveredIndex === index ? 'rgba(212, 163, 115, 0.4)' : 'rgba(212, 163, 115, 0.1)',
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{
                  rotateX: 2,
                  rotateY: -2,
                  y: -4,
                }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(212, 163, 115, 0.1) 0%, transparent 70%)',
                  }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-14 h-14 rounded-2xl bg-[#D4A373]/10 flex items-center justify-center flex-shrink-0"
                      >
                        <Briefcase className="w-7 h-7 text-[#D4A373]" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-medium text-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                          {exp.title}
                        </h3>
                        <p className="text-[#D4A373] font-medium">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1 text-sm text-[#94A3B8]">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-[#94A3B8]">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        exp.type === "Current Position" 
                          ? "bg-[#D4A373]/20 text-[#D4A373]" 
                          : "bg-[#132336] text-[#94A3B8]"
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#F8FAFC] mb-3 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-[#D4A373]" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                          className="text-sm text-[#94A3B8] flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] mt-2 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 163, 115, 0.2)' }}
                        className="text-xs px-3 py-1.5 rounded-full bg-[#132336] text-[#94A3B8] border border-[#D4A373]/10 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass-card rounded-3xl p-8"
          data-testid="experience-stats"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-light text-gold-gradient mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {stat.value}
                </p>
                <p className="text-sm text-[#94A3B8]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
