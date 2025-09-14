import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useInView } from "react-intersection-observer";

export const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className={`text-4xl font-bold text-center mb-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Let's Work Together
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className={`p-8 bg-gradient-card border-glass-border backdrop-blur-sm ${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:rawanrehab929@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    rawanrehab929@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:01202931726" className="text-muted-foreground hover:text-primary transition-colors">
                    01202931726
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Nasr City, Egypt</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-glass-border">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('https://github.com/rawanrehab', '_blank')}>
                  <Github size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('https://linkedin.com/in/rawanrehab', '_blank')}>
                  <Linkedin size={16} />
                </Button>
              </div>
            </div>
          </Card>
          
          {/* CTA Card */}
          <Card className={`p-8 bg-gradient-primary text-primary-foreground relative overflow-hidden ${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-hero opacity-20" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">Ready to start your project?</h3>
              <p className="mb-6 opacity-90">
                I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to bring your ideas to life.
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-sm"
                  onClick={() => window.open('mailto:rawanrehab929@gmail.com?subject=Work Opportunity&body=Hi Rawan, I would like to discuss a project with you.', '_blank')}
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
                
                <div className="text-sm opacity-75">
                  Available for freelance projects and full-time opportunities
                </div>
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" />
          </Card>
        </div>
      </div>
    </section>
  );
};