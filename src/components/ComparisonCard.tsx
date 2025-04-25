
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { productImages } from "@/utils/imageUtils";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ComparisonCardProps {
  title: string;
  products: Product[];
  highlights: string[];
  id: string;
  className?: string;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({ 
  title, 
  products, 
  highlights, 
  id, 
  className 
}) => {
  return (
    <Link 
      to={`/compare/${id}`}
      className={cn(
        "block rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg bg-white",
        className
      )}
    >
      <div className="p-4">
        <h3 className="font-medium text-lg mb-3">{title}</h3>
        
        <div className="flex items-center space-x-4 mb-4">
          {products.slice(0, 2).map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-200 mb-2">
                <img 
                  src={productImages[product.id] || "/placeholder.svg"} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm text-center">{product.name}</span>
            </div>
          ))}
          
          <ArrowRight className="text-gray-400" size={24} />
        </div>
        
        <div className="space-y-1">
          {highlights.slice(0, 2).map((highlight, index) => (
            <div key={index} className="text-sm flex items-center">
              <span className="mr-2 text-green-500">✓</span>
              <span>{highlight}</span>
            </div>
          ))}
          {highlights.length > 2 && (
            <div className="text-sm text-gray-500">+ {highlights.length - 2} more benefits</div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ComparisonCard;
