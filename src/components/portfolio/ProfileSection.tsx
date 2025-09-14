import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from "react-intersection-observer";

export const ProfileSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className={`text-4xl font-bold text-center mb-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile card */}
          <Card className={`p-8 bg-gradient-card border-glass-border backdrop-blur-sm ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Profile</h3>
            <p className="text-muted-foreground leading-relaxed">
              Frontend developer committed to delivering amazing user experiences by merging innovative design with cutting-edge technology. Extensive experience in developing interactive and engaging user interfaces using advanced Frontend technologies such as React.js and Bootstrap.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Strong skills in optimizing website performance through enhancing user experience and ensuring compatibility across various browsers and devices. I have 1 year of experience in Front End Development.
            </p>
          </Card>
          
          {/* Skills card */}
          <Card className={`p-8 bg-gradient-card border-glass-border backdrop-blur-sm ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Skills</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS", "JavaScript", "Docker"].map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`bg-primary/10 text-primary border-primary/20 ${inView ? 'animate-scale-in' : 'opacity-0'}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Frameworks</h4>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Bootstrap", "Tailwind"].map((skill, index) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className={`bg-primary/10 text-primary border-primary/20 ${inView ? 'animate-scale-in' : 'opacity-0'}`}
                      style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Languages</h4>
                <div className="flex gap-4">
                  <span className="text-muted-foreground">Arabic: Native</span>
                  <span className="text-muted-foreground">English: Good</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};