import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const EducationSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className={`text-4xl font-bold text-center mb-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Education
        </h2>
        
        <Card className={`p-8 bg-gradient-card border-glass-border backdrop-blur-sm hover:shadow-elegant transition-all duration-300 ${inView ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary">Bachelor's Degree</h3>
                <p className="text-lg text-muted-foreground">Faculty of Computer Science and Information</p>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end gap-2">
              <Badge variant="default" className="bg-primary w-fit">
                Very Good with Honors
              </Badge>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} />
                10/2020 – 06/2024
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                Menoufia, Egypt
              </div>
            </div>
          </div>
          
          <div className="border-t border-glass-border pt-6">
            <div className="flex items-center gap-3 mb-3">
              <Award className="text-primary" size={20} />
              <h4 className="text-lg font-semibold text-primary">Graduation Project</h4>
            </div>
            <div className="pl-8">
              <p className="text-muted-foreground mb-2">
                <span className="font-medium">"Wafed"</span> - A comprehensive web application project
              </p>
              <Badge variant="outline" className="bg-green-500/10 border-green-500/20 text-green-400">
                Grade: Excellent
              </Badge>
            </div>
          </div>
          
          <div className="border-t border-glass-border pt-6 mt-6">
            <h4 className="text-lg font-semibold text-primary mb-4">Soft Skills Developed</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Effective Communication",
                "Adaptability", 
                "Time Management",
                "Committed and Innovative",
                "Problem-solver",
                "Empathy",
                "Teamworker",
                "Negotiation"
              ].map((skill, index) => (
                <div 
                  key={skill} 
                  className={`flex items-center gap-2 text-muted-foreground ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-primary">•</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};