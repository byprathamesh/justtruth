
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById, Product } from "@/data/products";
import { productImages } from "@/utils/imageUtils";
import PreservativeBadge from "@/components/PreservativeBadge";
import NutritionGauge from "@/components/NutritionGauge";
import ProductCard from "@/components/ProductCard";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
  const product = productId ? getProductById(productId) : undefined;
  
  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto max-w-4xl px-4 pt-24 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you are looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate(-1)} className="bg-black hover:bg-gray-800">
            Go Back
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Get alternatives for this product
  const alternatives = product.alternatives?.map(id => getProductById(id)) || [];
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 pt-24 pb-16">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
            <ArrowLeft className="mr-2" size={18} />
            Back
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
              <img 
                src={productImages[product.id] || "/placeholder.svg"} 
                alt={product.name} 
                className="max-w-full max-h-80 object-contain animate-fade-in"
              />
            </div>
            
            <div className="animate-slide-in">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-3xl font-bold">{product.name}</h1>
                  <p className="text-gray-600">{product.brand}</p>
                </div>
                {product.isJustBrand && (
                  <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
                    JustBrand
                  </span>
                )}
              </div>
              
              <div className="flex items-center mt-4 mb-6">
                <PreservativeBadge level={product.preservativesLevel} size="lg" />
                <span className="mx-4 text-gray-300">|</span>
                <span className="text-gray-600">{product.budget}</span>
                <span className="mx-4 text-gray-300">|</span>
                <div className="flex items-center">
                  <span className="text-xl font-bold mr-1">{product.nutritionRating.toFixed(1)}</span>
                  <span className="text-sm text-gray-500">/5 nutrition score</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-lg font-medium text-gray-800 mb-1">₹{product.price}</p>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              {product.isJustBrand && product.benefits && (
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Why Choose JustBrand:</h3>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <Button className="bg-black hover:bg-gray-800 w-full sm:w-auto">
                <ShoppingCart className="mr-2" size={18} />
                Add to Cart
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="nutrition" className="mt-10">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="nutrition">Nutrition Facts</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="nutrition" className="animate-slide-in">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-lg font-medium mb-4">Nutrition Information</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Calories</p>
                    <p className="font-bold text-xl">{product.calories}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Sugar</p>
                    <p className="font-bold text-xl">{product.sugar}g</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Protein</p>
                    <p className="font-bold text-xl">{product.protein}g</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Fat</p>
                    <p className="font-bold text-xl">{product.fat}g</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Nutrition Rating</h3>
                    <NutritionGauge 
                      value={product.nutritionRating} 
                      max={5} 
                      label=""
                      colorClass={
                        product.nutritionRating >= 4 ? "bg-green-500" : 
                        product.nutritionRating >= 3 ? "bg-yellow-500" : 
                        "bg-red-500"
                      }
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Expert Rating</h3>
                    <NutritionGauge 
                      value={product.expertRating} 
                      max={5} 
                      label=""
                      colorClass={
                        product.expertRating >= 4 ? "bg-green-500" : 
                        product.expertRating >= 3 ? "bg-yellow-500" : 
                        "bg-red-500"
                      }
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="ingredients" className="animate-slide-in">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-lg font-medium mb-4">Ingredients & Source</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Ingredients</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                {product.additives.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-medium text-red-600 mb-2">Additives</h3>
                    <ul className="list-disc pl-5 space-y-1 text-red-600">
                      {product.additives.map((additive, index) => (
                        <li key={index}>{additive}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.source && (
                  <div>
                    <h3 className="font-medium mb-2">Source</h3>
                    <p className="text-gray-600">{product.source}</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="animate-slide-in">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-lg font-medium mb-4">Customer Reviews</h2>
                
                {product.testimonials && product.testimonials.length > 0 ? (
                  <div className="space-y-6">
                    {product.testimonials.map((testimonial, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">{testimonial.name}</h3>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? "text-yellow-400" : "text-gray-300"}`} 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="ml-2 text-sm text-gray-500">{testimonial.rating.toFixed(1)}</span>
                          </div>
                        </div>
                        <p className="text-gray-600">{testimonial.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">No reviews yet for this product.</p>
                )}
              </div>
            </TabsContent>
          </Tabs>
          
          {alternatives.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-bold mb-4">Compare With Alternatives</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {alternatives.map((alt, idx) => alt && (
                  <ProductCard 
                    key={alt.id} 
                    product={alt} 
                    className="animate-slide-in opacity-0"
                    style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductPage;
