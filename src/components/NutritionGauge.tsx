
import React from "react";
import { cn } from "@/lib/utils";

interface NutritionGaugeProps {
  value: number;
  max: number;
  label: string;
  className?: string;
  colorClass?: string;
}

const NutritionGauge: React.FC<NutritionGaugeProps> = ({ 
  value, 
  max, 
  label, 
  className,
  colorClass = "bg-orange-500" 
}) => {
  const percentage = (value / max) * 100;
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium">{label}</span>
        <span className="text-xs text-gray-500">{value} / {max}</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={cn("h-full rounded-full transition-all duration-500", colorClass)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default NutritionGauge;
