import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star, Badge, Target, Zap } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      title: "Best Project Award",
      project: "Continuous Remote Alcohol Monitoring (CRAM)",
      issuer: "Academic Institution",
      year: "2024",
      description: "Recognized for innovative IoT-based alcohol monitoring system",
    },
    {
      title: "2nd Prize – MPSTAR Contest",
      project: "Azura 2k24",
      issuer: "Competition",
      year: "2024",
      description: "Technical competition achievement in emerging technologies",
    },
  ];

  const certifications = [
    {
      platform: "Microsoft Learn",
      icon: Target,
      stats: "38 Badges, 7 Trophies",
      highlights: ["Azure AI Fundamentals", "Data Fundamentals", "Cloud Computing"],
      color: "#00A4EF",
    },
    {
      platform: "Salesforce Trailhead",
      icon: Zap,
      stats: "87 Badges · 62,800 Points · 13 Trails",
      highlights: ["Expeditioner Rank", "Agentblazer Innovator '26", "Agentforce & Agentic AI"],
      color: "#00A1E0",
    },
    {
      platform: "AWS & Google Cloud",
      icon: Badge,
      stats: "5+ Certifications",
      highlights: ["CCops 2025", "Vertex AI Prompt Design", "Cloud Architecture"],
      color: "#FF9900",
    },
    {
      platform: "Other Specializations",
      icon: Star,
      stats: "3+ Certifications",
      highlights: ["Broadcom Virtualization", "DevOps", "Data Analytics"],
      color: "#D4A373",
    },
  ];

  const stats = [
    { value: "87", label: "Trailhead Badges" },
    { value: "62,800", label: "Trailhead Points" },
    { value: "2", label: "Major Awards" },
    { value: "13", label: "Trails Completed" },
  ];

  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden bg-[#0A141F]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#D4A373] font-semibold mb-4">
            Recognition
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Certifications & <span className="text-gold-gradient">Awards</span>
          </h2>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-xl font-medium text-[#F8FAFC] mb-6 flex items-center gap-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <Trophy className="w-6 h-6 text-[#D4A373]" />
            Awards & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                data-testid={`award-card-${index}`}
                className="glass-card rounded-2xl p-6 relative overflow-hidden group"
              >
                {/* Gold accent line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4A373] to-transparent" />
                
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-[#D4A373]/10 flex items-center justify-center mb-4"
                >
                  <Award className="w-6 h-6 text-[#D4A373]" />
                </motion.div>
                
                <h4 className="text-lg font-medium text-[#F8FAFC] mb-1">{award.title}</h4>
                <p className="text-[#D4A373] text-sm mb-1">{award.project}</p>
                <p className="text-[#94A3B8] text-xs mb-3">{award.issuer} · {award.year}</p>
                <p className="text-sm text-[#94A3B8]">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-xl font-medium text-[#F8FAFC] mb-6 flex items-center gap-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <Badge className="w-6 h-6 text-[#D4A373]" />
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.platform}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                data-testid={`cert-card-${index}`}
                className="glass-card rounded-xl p-5 group hover:border-[#D4A373]/40 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${cert.color}15` }}
                >
                  <cert.icon className="w-5 h-5" style={{ color: cert.color }} />
                </motion.div>
                
                <h4 className="text-[#F8FAFC] font-medium mb-1 text-sm">{cert.platform}</h4>
                <p className="text-[#D4A373] text-xs mb-3">{cert.stats}</p>
                
                <div className="space-y-1">
                  {cert.highlights.map((highlight) => (
                    <p key={highlight} className="text-xs text-[#94A3B8] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#D4A373]" />
                      {highlight}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card rounded-3xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-light text-gold-gradient mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {stat.value}
                </p>
                <p className="text-xs text-[#94A3B8]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-[#94A3B8]">
            Continuous Learning Journey · Always exploring new technologies and earning certifications
          </p>
          <p className="text-xs text-[#D4A373] mt-2">
            Next: Ranger rank (13 badges to go) · Agentblazer Innovator '26
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
