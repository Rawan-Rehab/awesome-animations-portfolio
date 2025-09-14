import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Amazon E-Commerce Website",
    period: "02/2025 – 03/2025",
    description: "This app was created by React Framework, provides users with view product details. The website is fully responsive, designed with Bootstrap, ensuring smooth performance across all devices, allowing them to Create an account & sign in, Explore a variety of products.",
    technologies: ["React.js", "Bootstrap", "JavaScript", "CSS"],
    features: [
      "User authentication system",
      "Product catalog with detailed views",
      "Responsive design for all devices",
      "Shopping cart functionality"
    ],
    demoUrl: "https://rawan-rehab.github.io/amazon_ecommerce/",
    githubUrl: "https://github.com/Rawan-Rehab/amazon_ecommerce.git"
  },
  {
    title: "Design Project",
    period: "02/2025 – 03/2025",
    description: "A creative design project showcasing modern web design principles with interactive elements and beautiful visual components. Built with focus on user experience and aesthetic appeal.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Design"],
    features: [
      "Modern design aesthetics",
      "Interactive user interface",
      "Creative visual elements",
      "Responsive layout"
    ],
    demoUrl: "https://rawan-rehab.github.io/design/",
    githubUrl: "https://github.com/Rawan-Rehab/design.git"
  },
  {
    title: "Create Selector",
    period: "02/2025 – 03/2025",
    description: "An interactive element selector tool that demonstrates advanced DOM manipulation and user interface interactions. Built with modern web technologies for seamless user experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    features: [
      "Interactive element selection",
      "Dynamic DOM manipulation",
      "Modern user interface",
      "Responsive design"
    ],
    demoUrl: "https://rawan-rehab.github.io/Create-Selector/",
    githubUrl: "https://github.com/Rawan-Rehab/Create-Selector.git"
  },
  {
    title: "Landing Page",
    period: "02/2025 – 03/2025",
    description: "It was created by using HTML, CSS, JavaScript, Bootstrap. A beautiful and interactive landing page with smooth animations and modern design.",
    technologies: ["HTML5", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Smooth animations",
      "Interactive elements",
      "Mobile responsive",
      "SEO optimized"
    ],
    demoUrl: "https://rawan-rehab.github.io/LANDING_PAGE/",
    githubUrl: "https://github.com/Rawan-Rehab/LANDING_PAGE.git"
  }
];

export const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-4xl font-bold text-center mb-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`p-6 bg-gradient-card border-glass-border backdrop-blur-sm hover:shadow-elegant transition-all duration-500 hover:scale-105 group ${inView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-primary-glow transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={14} />
                  {project.period}
                </div>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="text-xs bg-primary/5 border-primary/20 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start">
                      <span className="text-primary mr-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-2">
                {project.demoUrl ? (
                  <Button 
                    asChild
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary-glow transition-all duration-300"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-1" />
                      Live Demo
                    </a>
                  </Button>
                ) : (
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary/40 text-primary-foreground/70"
                    disabled
                  >
                    Live Demo (Coming Soon)
                  </Button>
                )}
                <Button 
                  asChild
                  size="sm" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={14} />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};