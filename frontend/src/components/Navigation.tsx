import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Github, Mail } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/mokshagna-bingi-a299a6229", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/mokshagna2754", label: "GitHub" },
    { icon: Mail, href: "mailto:mokshagnabingi2754@gmail.com", label: "Email" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section detection
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navLinks[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? "w-[95%] max-w-5xl" : "w-[90%] max-w-4xl"
        }`}
      >
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            data-testid="nav-logo"
            className="text-xl font-semibold text-gold-gradient"
            style={{ fontFamily: 'Outfit, sans-serif' }}
            whileHover={{ scale: 1.05 }}
          >
            MB
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                data-testid={`nav-${link.id}`}
                className={`nav-link text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id ? "text-[#D4A373]" : "text-[#94A3B8] hover:text-[#F8FAFC]"
                }`}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`nav-social-${social.label.toLowerCase()}`}
                className="p-2 text-[#94A3B8] hover:text-[#D4A373] transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-[#94A3B8] hover:text-[#D4A373]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-40 glass rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  data-testid={`mobile-nav-${link.id}`}
                  className={`text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "bg-[#D4A373]/10 text-[#D4A373]"
                      : "text-[#94A3B8] hover:bg-[#132336] hover:text-[#F8FAFC]"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#D4A373]/10">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`mobile-social-${social.label.toLowerCase()}`}
                    className="p-3 text-[#94A3B8] hover:text-[#D4A373] transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
