
import React, { useState, useEffect, useRef } from "react";
import { Activity, Heart, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * (end - startValue) + startValue);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, isInView]);

  const formattedCount = count.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={countRef} className="font-bold">
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  className?: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({
  icon,
  value,
  label,
  suffix = "+",
  prefix = "",
  className,
  delay = 0,
}) => {
  return (
    <FadeIn delay={delay} className={cn("flex flex-col items-center", className)}>
      <div className="bg-raktsetu-50 p-3 rounded-full mb-4 text-raktsetu-600">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
        <Counter end={value} suffix={suffix} prefix={prefix} />
      </h3>
      <p className="text-gray-600 text-center">{label}</p>
    </FadeIn>
  );
};

const StatsCounter: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="stats">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-raktsetu-600 font-medium mb-3">Our Impact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Making a Difference Together</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <StatItem
            icon={<Users size={24} />}
            value={5000}
            label="Registered Donors"
            delay={0.1}
          />
          <StatItem
            icon={<Heart size={24} />}
            value={10000}
            label="Lives Saved"
            delay={0.2}
          />
          <StatItem
            icon={<Activity size={24} />}
            value={8500}
            label="Successful Donations"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
