import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Web Development Instructor",
    company: "ISchool",
    period: "07/2025 – Present",
    location: "Cairo, Egypt",
    type: "Current",
    description: [
      "Delivering interactive sessions on HTML, CSS, JavaScript, for beginners",
      "Designing hands-on projects to simplify complex technical concepts",
      "Supporting students through mentorship and problem-solving guidance"
    ]
  },
  {
    title: "Front-End Developer Intern",
    company: "Web Masters Company",
    period: "02/2025 – 07/2025",
    location: "Cairo, Egypt",
    type: "Internship",
    description: [
      "Took training in this company and worked on more than one project",
      "Developed Amazon E-Commerce website using React.js",
      "Created Admin Dashboard with modern UI/UX design"
    ]
  }
];

export const ExperienceSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className={`text-4xl font-bold text-center mb-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`p-8 bg-gradient-card border-glass-border backdrop-blur-sm hover:shadow-elegant transition-all duration-300 ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-lg font-medium mb-2">
                    <Building size={18} />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <Badge 
                    variant={exp.type === "Current" ? "default" : "secondary"}
                    className={exp.type === "Current" ? "bg-primary" : "bg-secondary"}
                  >
                    {exp.type}
                  </Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};