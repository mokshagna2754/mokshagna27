import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Award, Clock, CheckCircle } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "aiml", label: "AI/ML" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "mobile", label: "Mobile" },
    { id: "uiux", label: "UI/UX" },
  ];

  const projects = [
    {
      title: "Bikemate",
      category: "mobile",
      status: "In Progress",
      year: "2025",
      description: "Mobile application for cyclists — ride tracking, bike maintenance, and cycling community features",
      technologies: ["React Native", "Mobile Development", "Ride Tracking", "Community"],
      image: "/bikemate splash.png",
      hasAward: false,
    },
    {
      title: "Cook Pilot",
      category: "fullstack",
      status: "Completed",
      year: "2025",
      description: "Recipe and cooking companion app with meal planning and step-by-step guidance",
      technologies: ["TypeScript", "React", "Recipe App", "Meal Planning"],
      image: "/cook pilot splash.png",
      hasAward: false,
    },
    {
      title: "Effective Data Hiding Scheme",
      category: "aiml",
      status: "Completed",
      year: "2025",
      description: "Advanced LSB-based image steganography system with encryption for secure data hiding using ML",
      technologies: ["Python", "OpenCV", "Machine Learning", "Cryptography"],
      image: "/data hiding1.png",
      hasAward: false,
    },
    {
      title: "FlavourFlow",
      category: "fullstack",
      status: "Completed",
      year: "2025",
      description: "Modern food ordering and management system built with TypeScript and advanced frontend technologies",
      technologies: ["TypeScript", "React", "Food Ordering", "Full-Stack"],
      image: "/flavourflow1.jpeg",
      hasAward: false,
    },
    {
      title: "Aura Calendar",
      category: "uiux",
      status: "Completed",
      year: "2025",
      description: "Beautiful and functional calendar application with modern design principles",
      technologies: ["TypeScript", "React", "Calendar UI", "Design"],
      image: "/aura calender.png",
      hasAward: false,
    },
    {
      title: "Skin Gleam AI",
      category: "aiml",
      status: "Completed",
      year: "2025",
      description: "AI-powered skincare analysis and recommendation system using computer vision",
      technologies: ["TypeScript", "AI", "Computer Vision", "Healthcare"],
      image: "/derma lens1.jpeg",
      hasAward: false,
    },
    {
      title: "Malpractice Detection in Exams",
      category: "aiml",
      status: "Completed",
      year: "2024",
      description: "Advanced AI system analyzing exam hall footage and multi-modal data to detect cheating behaviors",
      technologies: ["Computer Vision", "Multi-modal AI", "Real-time Processing", "Python"],
      image: null,
      hasAward: false,
    },
    {
      title: "Brain Stroke Detection System",
      category: "aiml",
      status: "Completed",
      year: "2025",
      description: "ML-based diagnosis system using SVM, Decision Tree, AdaBoost, and Passive-Aggressive algorithms",
      technologies: ["Python", "SVM", "Decision Trees", "Healthcare AI"],
      image: null,
      hasAward: false,
    },
    {
      title: "CRAM - Alcohol Monitoring",
      category: "aiml",
      status: "Completed",
      year: "2024",
      description: "Best Project Award winner - IoT-based system for continuous remote alcohol monitoring",
      technologies: ["IoT", "Sensors", "Real-time Monitoring", "Python"],
      image: null,
      hasAward: true,
    },
    {
      title: "Inventory Optimization System",
      category: "aiml",
      status: "Completed",
      year: "2025",
      description: "Python-based system for optimizing inventory management using machine learning algorithms",
      technologies: ["Python", "Machine Learning", "Data Science", "Optimization"],
      image: null,
      hasAward: false,
    },
    {
      title: "AI Assistant",
      category: "aiml",
      status: "In Progress",
      year: "2025",
      description: "Intelligent AI assistant built with JavaScript and modern NLP technologies",
      technologies: ["JavaScript", "AI", "NLP", "Chatbots"],
      image: null,
      hasAward: false,
    },
    {
      title: "Balloon Insight",
      category: "fullstack",
      status: "In Progress",
      year: "2025",
      description: "Advanced data insight and visualization platform built with TypeScript",
      technologies: ["TypeScript", "Data Analytics", "Visualization", "Dashboard"],
      image: null,
      hasAward: false,
    },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 -left-32 w-64 h-64 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #D4A373 0%, transparent 70%)' }}
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#D4A373] font-semibold mb-4">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Featured <span className="text-gold-gradient">Projects</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
            Innovative solutions showcasing expertise in AI/ML, cybersecurity, and healthcare technology
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              data-testid={`project-filter-${filter.id}`}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-[#D4A373] text-[#0D1B2A]"
                  : "bg-[#132336] text-[#94A3B8] hover:bg-[#D4A373]/10 hover:text-[#D4A373]"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Masonry Style */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              data-testid={`project-card-${index}`}
              className={`project-card glass-card rounded-2xl overflow-hidden group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Image */}
              {project.image && (
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredProject === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent" />
                  
                  {/* Award Badge */}
                  {project.hasAward && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#D4A373] flex items-center justify-center"
                    >
                      <Award className="w-5 h-5 text-[#0D1B2A]" />
                    </motion.div>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Status & Year */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                    project.status === "Completed" 
                      ? "bg-green-500/10 text-green-400"
                      : "bg-[#D4A373]/10 text-[#D4A373]"
                  }`}>
                    {project.status === "Completed" ? (
                      <CheckCircle className="w-3 h-3" />
                    ) : (
                      <Clock className="w-3 h-3" />
                    )}
                    {project.status}
                  </span>
                  <span className="text-xs text-[#94A3B8]">{project.year}</span>
                  {project.hasAward && !project.image && (
                    <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[#D4A373]/20 text-[#D4A373]">
                      <Award className="w-3 h-3" />
                      Award Winner
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[#F8FAFC] mb-2 group-hover:text-[#D4A373] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#94A3B8] mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-[#132336] text-[#94A3B8]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-[#132336] text-[#D4A373]">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm text-[#D4A373] font-medium"
                >
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Hover Glow Border */}
              <motion.div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                animate={{
                  boxShadow: hoveredProject === index 
                    ? "inset 0 0 0 1px rgba(212, 163, 115, 0.4), 0 0 30px rgba(212, 163, 115, 0.1)"
                    : "inset 0 0 0 1px rgba(212, 163, 115, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: "30+", label: "Total Projects" },
            { value: "1", label: "Award Winner" },
            { value: "5+", label: "Team Members Led" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-light text-gold-gradient mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {stat.value}
              </p>
              <p className="text-sm text-[#94A3B8]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
