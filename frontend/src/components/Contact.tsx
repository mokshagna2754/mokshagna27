import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Send, ExternalLink, CheckCircle, Loader2 } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mokshagnabingi2754@gmail.com",
      href: "mailto:mokshagnabingi2754@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8008291411",
      href: "tel:+918008291411",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Mokshagna Bingi",
      href: "https://linkedin.com/in/mokshagna-bingi-a299a6229",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "mokshagna2754",
      href: "https://github.com/mokshagna2754",
    },
  ];

  const professionalProfiles = [
    {
      name: "Microsoft Learn Profile",
      description: "38 Badges, 7 Trophies in Azure AI & Data",
      href: "https://learn.microsoft.com/en-us/users/mokshagnabingi-7423/",
    },
    {
      name: "Salesforce Trailhead",
      description: "87 Badges, 62,800 Points, 13 Trails · Expeditioner",
      href: "https://www.salesforce.com/trailblazer/h51a7328bingimokshagnabtechaim202125",
    },
    {
      name: "Linktree Profile",
      description: "All social links and portfolio",
      href: "https://linktr.ee/mokshagnabing",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate sending - opens email client with pre-filled message
    const mailtoLink = `mailto:mokshagnabingi2754@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
    
    setTimeout(() => {
      window.open(mailtoLink, '_blank');
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(ellipse, #D4A373 0%, transparent 70%)' }}
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
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#F8FAFC]" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Let's <span className="text-gold-gradient">Connect</span>
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
            Ready to collaborate on exciting AI/ML projects or discuss innovative tech solutions? Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium text-[#F8FAFC] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Get In Touch
            </h3>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? "_blank" : undefined}
                  rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  data-testid={`contact-${info.label.toLowerCase()}`}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 group"
                  whileHover={{ y: -2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-lg bg-[#D4A373]/10 flex items-center justify-center flex-shrink-0"
                  >
                    <info.icon className="w-5 h-5 text-[#D4A373]" />
                  </motion.div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-[#94A3B8]">{info.label}</p>
                    <p className="text-sm text-[#F8FAFC] group-hover:text-[#D4A373] transition-colors truncate">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Professional Profiles */}
            <h4 className="text-sm font-medium text-[#F8FAFC] mb-4">Professional Profiles</h4>
            <div className="space-y-3">
              {professionalProfiles.map((profile, index) => (
                <motion.a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  data-testid={`profile-${index}`}
                  className="glass-card rounded-xl p-4 flex items-center justify-between group"
                  whileHover={{ x: 4 }}
                >
                  <div>
                    <p className="text-sm text-[#F8FAFC] group-hover:text-[#D4A373] transition-colors">
                      {profile.name}
                    </p>
                    <p className="text-xs text-[#94A3B8]">{profile.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#D4A373] transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-medium text-[#F8FAFC] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Send a Message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-16 h-16 rounded-full bg-[#D4A373]/10 flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-[#D4A373]" />
                </motion.div>
                <h4 className="text-xl font-medium text-[#F8FAFC] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Message Sent!
                </h4>
                <p className="text-[#94A3B8]">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 btn-outline-gold px-6 py-2 rounded-full text-sm"
                  data-testid="send-another-btn"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8">
                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#94A3B8] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      data-testid="contact-name-input"
                      className="input-premium w-full"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#94A3B8] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      data-testid="contact-email-input"
                      className="input-premium w-full"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-[#94A3B8] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      data-testid="contact-message-input"
                      className="input-premium w-full resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <p className="text-sm text-red-400">{error}</p>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    data-testid="contact-submit-btn"
                    className="btn-gold w-full py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>

                <p className="text-xs text-[#94A3B8] text-center mt-4">
                  Usually responds within 24 hours
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
