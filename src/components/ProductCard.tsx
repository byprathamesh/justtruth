
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { productImages } from "@/utils/imageUtils";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  className?: string;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className, featured }) => {
  const image = productImages[product.id] || "/placeholder.svg";
  
  const preservativeColor = {
    green: "bg-green-100 text-green-800 border-green-200",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
    red: "bg-red-100 text-red-800 border-red-200"
  };
  
  return (
    <Link 
      to={`/product/${product.id}`}
      className={cn(
        "group block rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg",
        featured ? "transform hover:scale-[1.02]" : "",
        className
      )}
    >
      <div className="relative aspect-square bg-gray-100">
        <img 
          src={image}
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.isJustBrand && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-black text-white animate-pulse-slow">JustBrand</Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">₹{product.price}</span>
          <Badge variant="outline" className={cn("text-xs", preservativeColor[product.preservativesLevel])}>
            {product.preservativesLevel === "green" ? "No Preservatives" : 
             product.preservativesLevel === "yellow" ? "Some Preservatives" : 
             "High Preservatives"}
          </Badge>
        </div>
        
        <div className="mt-3">
          <div className="flex items-center mb-1">
            <span className="text-xs text-gray-600 mr-2">Nutrition:</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-black" 
                style={{ width: `${(product.nutritionRating / 5) * 100}%` }}
              ></div>
            </div>
            <span className="text-xs font-medium ml-2">{product.nutritionRating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
