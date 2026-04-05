import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/mokshagna2754", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mokshagna-bingi-a299a6229", label: "LinkedIn" },
    { icon: Mail, href: "mailto:mokshagnabingi2754@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const profiles = [
    { label: "Linktree", href: "https://linktr.ee/mokshagnabing" },
    { label: "Credly", href: "https://www.credly.com/users/mokshagna-bingi" },
    { label: "MS Learn", href: "https://learn.microsoft.com/en-us/users/mokshagnabingi-7423/" },
    { label: "Trailhead", href: "https://www.salesforce.com/trailblazer/h51a7328bingimokshagnabtechaim202125" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#0A141F]">
      {/* Top border glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D4A373]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.a
              href="#home"
              className="text-2xl font-semibold text-gold-gradient inline-block mb-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              data-testid="footer-logo"
            >
              MB
            </motion.a>
            <p className="text-sm text-[#94A3B8] mb-4">
              AI/ML Developer & Full-Stack Engineer crafting intelligent solutions with code and creativity.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                  className="w-9 h-9 rounded-lg bg-[#132336] flex items-center justify-center text-[#94A3B8] hover:text-[#D4A373] hover:bg-[#D4A373]/10 transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F8FAFC] font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                    className="text-sm text-[#94A3B8] hover:text-[#D4A373] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Profiles */}
          <div>
            <h4 className="text-[#F8FAFC] font-medium mb-4">Profiles</h4>
            <ul className="space-y-2">
              {profiles.map((profile) => (
                <li key={profile.label}>
                  <a
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`footer-profile-${profile.label.toLowerCase()}`}
                    className="text-sm text-[#94A3B8] hover:text-[#D4A373] transition-colors inline-flex items-center gap-1"
                  >
                    {profile.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F8FAFC] font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:mokshagnabingi2754@gmail.com"
                  className="text-sm text-[#94A3B8] hover:text-[#D4A373] transition-colors"
                >
                  mokshagnabingi2754@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918008291411"
                  className="text-sm text-[#94A3B8] hover:text-[#D4A373] transition-colors"
                >
                  +91-8008291411
                </a>
              </li>
              <li className="text-sm text-[#94A3B8]">
                Hyderabad, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#D4A373]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#94A3B8]">
              © {currentYear} Mokshagna Bingi. All rights reserved.
            </p>
            <p className="text-sm text-[#94A3B8] flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-[#D4A373] fill-[#D4A373]" /> using React & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
