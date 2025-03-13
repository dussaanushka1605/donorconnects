
import { cn } from "@/lib/utils";
import React from "react";

interface BlurCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "heavy";
  hoverEffect?: boolean;
}

const BlurCard: React.FC<BlurCardProps> = ({
  children,
  className,
  intensity = "medium",
  hoverEffect = false,
}) => {
  const intensityMap = {
    light: "bg-white/50 backdrop-blur-sm",
    medium: "bg-white/30 backdrop-blur-md",
    heavy: "bg-white/20 backdrop-blur-lg",
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-white/20 shadow-lg",
        intensityMap[intensity],
        hoverEffect && "transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BlurCard;
