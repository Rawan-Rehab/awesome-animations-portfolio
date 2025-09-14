import { Button } from "@/components/ui/button";
import { AnimatedText } from "./AnimatedText";
import { Mail, MapPin, Phone, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero bg-[size:400%_400%] animate-gradient-shift opacity-20" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-accent-blue rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile image with glow effect */}
          <div className="mb-8 animate-scale-in">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold">
                R
              </div>
            </div>
          </div>
          
          {/* Animated name */}
          <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-fade-in">
            <AnimatedText text="Rawan Mohamed Rehab" className="bg-gradient-primary bg-clip-text text-transparent" />
          </h1>
          
          {/* Animated title */}
          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <AnimatedText text="Frontend Developer" delay={2000} />
          </div>
          
          {/* Contact info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={18} />
              <span>rawanrehab929@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={18} />
              <span>01202931726</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} />
              <span>Nasr City, Egypt</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "1.5s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-elegant"
            >
              <Download className="mr-2" size={18} />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};