
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { getComparisonById, getComparisonProducts, Product } from "@/data/products";
import { productImages } from "@/utils/imageUtils";
import PreservativeBadge from "@/components/PreservativeBadge";
import NutritionGauge from "@/components/NutritionGauge";

const ComparisonPage = () => {
  const { comparisonId } = useParams<{ comparisonId: string }>();
  const navigate = useNavigate();
  
  const comparison = comparisonId ? getComparisonById(comparisonId) : undefined;
  const products = comparisonId ? getComparisonProducts(comparisonId) : [];
  
  if (!comparison || products.length < 2) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto max-w-4xl px-4 pt-24 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Comparison Not Found</h1>
          <p className="text-gray-600 mb-8">The comparison you are looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate(-1)} className="bg-black hover:bg-gray-800">
            Go Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Identify the JustBrand product (if any)
  const justBrandProduct = products.find(p => p.isJustBrand);
  const otherProducts = products.filter(p => !p.isJustBrand);
  
  // Put JustBrand product first if it exists
  const orderedProducts = justBrandProduct 
    ? [justBrandProduct, ...otherProducts] 
    : products;
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 pt-24 pb-16">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="mr-2" size={18} />
            Back
          </Button>
          
          <h1 className="text-3xl font-bold mb-2">{comparison.title}</h1>
          <p className="text-gray-600 mb-6">Compare nutrition, ingredients, and value</p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 hidden md:block">
                <div className="h-40"></div>
                <div className="space-y-6 mt-8">
                  <div className="h-8 flex items-center font-medium">Price</div>
                  <div className="h-8 flex items-center font-medium">Nutrition Rating</div>
                  <div className="h-8 flex items-center font-medium">Preservatives</div>
                  <div className="h-8 flex items-center font-medium">Calories</div>
                  <div className="h-8 flex items-center font-medium">Sugar</div>
                  <div className="h-8 flex items-center font-medium">Protein</div>
                  <div className="h-8 flex items-center font-medium">Fat</div>
                </div>
              </div>
              
              {orderedProducts.map((product, index) => (
                <div key={product.id} className="md:col-span-1 animate-slide-in opacity-0" style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}>
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="h-40 w-40 flex items-center justify-center">
                        <img 
                          src={productImages[product.id] || "/placeholder.svg"} 
                          alt={product.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      {product.isJustBrand && (
                        <div className="absolute -top-4 -right-4">
                          <div className="bg-black text-white text-xs px-3 py-1 rounded-full">
                            JustBrand
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <h2 className="text-xl font-medium mt-4">{product.name}</h2>
                    <p className="text-gray-600">{product.brand}</p>
                    
                    <Link to={`/product/${product.id}`} className="mt-2">
                      <Button variant="outline" size="sm" className="text-xs">
                        View Details
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Mobile comparison rows */}
                  <div className="mt-6 space-y-4 md:hidden">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="font-medium">Price</span>
                      <span>₹{product.price}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="font-medium">Nutrition Rating</span>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">{product.nutritionRating.toFixed(1)}</span>
                        <span className="text-xs text-gray-500">/5</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="font-medium">Preservatives</span>
                      <PreservativeBadge level={product.preservativesLevel} size="sm" />
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="font-medium">Calories</span>
                      <span>{product.calories}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="font-medium">Sugar</span>
                      <span>{product.sugar}g</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="font-medium">Protein</span>
                      <span>{product.protein}g</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="font-medium">Fat</span>
                      <span>{product.fat}g</span>
                    </div>
                  </div>
                  
                  {/* Desktop comparison rows */}
                  <div className="hidden md:block space-y-6 mt-8">
                    <div className="h-8 flex items-center justify-center font-medium">₹{product.price}</div>
                    <div className="h-8 flex items-center justify-center">
                      <div className="flex items-center">
                        <span className="font-medium mr-1">{product.nutritionRating.toFixed(1)}</span>
                        <span className="text-xs text-gray-500">/5</span>
                      </div>
                    </div>
                    <div className="h-8 flex items-center justify-center">
                      <PreservativeBadge level={product.preservativesLevel} size="sm" />
                    </div>
                    <div className="h-8 flex items-center justify-center">{product.calories}</div>
                    <div className="h-8 flex items-center justify-center">{product.sugar}g</div>
                    <div className="h-8 flex items-center justify-center">{product.protein}g</div>
                    <div className="h-8 flex items-center justify-center">{product.fat}g</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {justBrandProduct && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 animate-slide-in">
              <h2 className="text-xl font-bold mb-4">Why Choose {justBrandProduct.name}?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    {comparison.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mt-1 mr-3">
                          <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                            <Check className="text-white" size={14} />
                          </div>
                        </div>
                        <span className="text-gray-800">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col items-center justify-center">
                  <p className="text-center text-gray-600 mb-4">
                    Try {justBrandProduct.name} today for a healthier alternative without compromising on taste.
                  </p>
                  <Button className="bg-black hover:bg-gray-800">
                    Switch to {justBrandProduct.name}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ComparisonPage;
