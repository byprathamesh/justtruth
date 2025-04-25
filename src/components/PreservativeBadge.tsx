
import React from "react";
import { cn } from "@/lib/utils";

interface PreservativeBadgeProps {
  level: 'green' | 'yellow' | 'red';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const PreservativeBadge: React.FC<PreservativeBadgeProps> = ({ 
  level, 
  size = 'md',
  className 
}) => {
  const baseClasses = "rounded-full flex items-center justify-center font-medium";
  
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5"
  };
  
  const colorClasses = {
    green: "bg-green-100 text-green-800 border border-green-200",
    yellow: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    red: "bg-red-100 text-red-800 border border-red-200"
  };
  
  const labels = {
    green: "No Preservatives",
    yellow: "Some Preservatives",
    red: "High Preservatives"
  };
  
  return (
    <span className={cn(baseClasses, sizeClasses[size], colorClasses[level], className)}>
      {labels[level]}
    </span>
  );
};

export default PreservativeBadge;
