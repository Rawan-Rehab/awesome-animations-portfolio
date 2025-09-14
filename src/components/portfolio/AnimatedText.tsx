import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className = "", delay = 0 }: AnimatedTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typeText = () => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
          setTimeout(typeText, 50);
        } else {
          setIsTyping(false);
        }
      };
      
      typeText();
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <div className={`${className} ${isTyping ? 'animate-typing' : ''}`}>
      {displayText}
      {isTyping && <span className="animate-blink">|</span>}
    </div>
  );
};