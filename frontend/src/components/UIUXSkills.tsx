import { Palette, Figma, Smartphone, Monitor, Users, Lightbulb } from 'lucide-react';

const UIUXSkills = () => {
  const uiuxSkills = {
    design: {
      title: "Design Tools",
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { name: "Figma", level: 85, category: "Interface Design" },
        { name: "Adobe XD", level: 75, category: "Prototyping" },
        { name: "Canva", level: 80, category: "Graphics" },
        { name: "InVision", level: 70, category: "Collaboration" }
      ]
    },
    prototyping: {
      title: "Prototyping & UX",
      icon: <Smartphone className="w-5 h-5" />,
      skills: [
        { name: "Wireframing", level: 88, category: "UX Design" },
        { name: "User Flows", level: 85, category: "UX Research" },
        { name: "Mockups", level: 82, category: "Visual Design" },
        { name: "Usability Testing", level: 78, category: "User Research" }
      ]
    },
    development: {
      title: "UI Development",
      icon: <Monitor className="w-5 h-5" />,
      skills: [
        { name: "HTML5", level: 85, category: "Frontend" },
        { name: "CSS3", level: 83, category: "Styling" },
        { name: "Flutter UI", level: 80, category: "Mobile" },
        { name: "Responsive Design", level: 88, category: "Web Design" }
      ]
    }
  };

  const uiuxProjects = [
    {
      title: "Mobile Banking App UI",
      description: "Sleek, user-friendly interface for financial tasks with modern dark-mode theme",
      features: ["Fund Transfers", "Spending Analytics", "Card Management", "Dark Mode"],
      color: "primary"
    },
    {
      title: "Touch-Based Learning LMS",
      description: "Interactive learning system with gesture-based UI and voice assistance for kids",
      features: ["Gesture Control", "Voice Assistant", "Kid-Friendly UI", "Interactive Learning"],
      color: "accent"
    },
    {
      title: "Brain Stroke Detection UI",
      description: "Intuitive frontend for ML-based medical application with accessibility focus",
      features: ["Medical Dashboard", "Accessibility", "Data Visualization", "User-Friendly"],
      color: "primary"
    }
  ];

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-4 text-gradient">
            UI/UX Design Expertise
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Creating intuitive, user-centered designs that bridge technology and human experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Object.entries(uiuxSkills).map(([key, category]) => (
            <div key={key} className="card-elegant p-6 rounded-xl hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground">{category.title}</h4>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-foreground">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">{skill.category}</p>
                      </div>
                      <span className="text-sm font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2">
                      <div
                        className="skill-progress h-full rounded-full"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1 + 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* UI/UX Projects */}
        <div>
          <h4 className="text-xl font-bold text-center mb-8 text-foreground">Featured UI/UX Projects</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {uiuxProjects.map((project, index) => (
              <div
                key={index}
                className="card-elegant p-6 rounded-xl hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-full ${
                    project.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                  }`}>
                    <Figma size={20} />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-foreground mb-2">{project.title}</h5>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIUXSkills;