
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { featuredComparisons, products, getProductById } from "@/data/products";
import { productImages } from "@/utils/imageUtils";
import PreservativeBadge from "@/components/PreservativeBadge";
import NutritionGauge from "@/components/NutritionGauge";

const ComparePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComparison, setSelectedComparison] = useState(featuredComparisons[0].id);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredComparisons = featuredComparisons.filter(comparison => 
    comparison.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const currentComparison = featuredComparisons.find(comp => comp.id === selectedComparison) || featuredComparisons[0];
  const comparisonProducts = currentComparison.products.map(id => getProductById(id)!);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 pt-24 pb-16">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-3xl font-bold mb-2">Compare Products</h1>
          <p className="text-gray-600 mb-8">
            Compare JustTrue products with other brands to make informed decisions
          </p>
          
          <div className="flex items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <Search size={18} className="text-gray-400" />
              </div>
              <Input 
                type="text" 
                placeholder="Search comparisons..." 
                className="pl-10"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-medium mb-4">Popular Comparisons</h3>
                <ul className="space-y-2">
                  {filteredComparisons.map(comparison => (
                    <li key={comparison.id}>
                      <button
                        onClick={() => setSelectedComparison(comparison.id)}
                        className={`w-full text-left px-4 py-2 rounded-md transition-all ${
                          selectedComparison === comparison.id 
                            ? "bg-orange-100 text-orange-800" 
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {comparison.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold mb-6">{currentComparison.title}</h2>
                
                <div className="grid grid-cols-2 gap-8">
                  {comparisonProducts.map(product => (
                    <div key={product.id} className="flex flex-col">
                      <div className="flex justify-center mb-4 relative">
                        <img 
                          src={productImages[product.id] || "/placeholder.svg"} 
                          alt={product.name}
                          className="w-40 h-40 object-contain"
                        />
                        {product.isJustBrand && (
                          <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 rounded-lg">
                            JustTrue
                          </div>
                        )}
                      </div>
                      
                      <div className="text-center mb-4">
                        <h3 className="font-medium text-lg">{product.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                        <PreservativeBadge level={product.preservativesLevel} />
                      </div>
                      
                      <div className="space-y-4 flex-1">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Price:</span>
                            <span className="font-medium">₹{product.price}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Calories:</span>
                            <span className="font-medium">{product.calories}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Sugar:</span>
                            <span className="font-medium">{product.sugar}g</span>
                          </div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Protein:</span>
                            <span className="font-medium">{product.protein}g</span>
                          </div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Fat:</span>
                            <span className="font-medium">{product.fat}g</span>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium mb-1">Nutrition Rating</p>
                          <NutritionGauge 
                            value={product.nutritionRating} 
                            max={5} 
                            label=""
                            colorClass={product.isJustBrand ? "bg-orange-500" : "bg-gray-500"}
                          />
                        </div>
                        
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-sm font-medium mb-1">Ingredients</p>
                          <p className="text-xs text-gray-600">{product.ingredients.join(", ")}</p>
                        </div>
                        
                        {product.additives.length > 0 && (
                          <div className="pt-2">
                            <p className="text-sm font-medium text-red-600 mb-1">Additives</p>
                            <p className="text-xs text-red-500">{product.additives.join(", ")}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link to={`/product/${product.id}`}>
                          <Button 
                            variant={product.isJustBrand ? "default" : "outline"} 
                            className={product.isJustBrand ? "bg-orange-500 hover:bg-orange-600 w-full" : "w-full"}
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                
                {comparisonProducts[1].isJustBrand && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="font-medium mb-4">Why {comparisonProducts[1].name} is better:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        {currentComparison.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-2">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-center">
                        <Link to={`/product/${comparisonProducts[1].id}`}>
                          <Button className="bg-orange-500 hover:bg-orange-600 animate-pulse-slow">
                            Switch to JustTrue
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ComparePage;
