import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Upload, Search, Quote, Star, Calendar, User, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ComparisonCard from "@/components/ComparisonCard";
import VideoCard from "@/components/VideoCard";
import ChatBot from "@/components/ChatBot";
import { 
  products, 
  featuredComparisons, 
  getProductById, 
  getJustBrandProducts, 
  categories,
  educationalContent
} from "@/data/products";
import { 
  productImages, 
  categoryImages, 
  educationImages, 
  videoPlaceholders 
} from "@/utils/imageUtils";

const Index = () => {
  const [currentComparisonIndex, setCurrentComparisonIndex] = useState(0);
  
  // Auto-rotate comparisons
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentComparisonIndex((prevIndex) => 
        (prevIndex + 1) % featuredComparisons.length
      );
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  const currentComparison = featuredComparisons[currentComparisonIndex];
  const comparisonProducts = currentComparison.products.map(id => getProductById(id)!);
  
  const justBrandProducts = getJustBrandProducts();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ChatBot />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8 animate-slide-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Know What You Eat</h1>
              <p className="text-lg text-gray-600 mb-8">
                Scan products, compare nutrition facts, and find healthier alternatives
                with simple and transparent information.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <Link to="/scan">
                  <Button size="lg" className="w-full sm:w-auto bg-black hover:bg-gray-800 group">
                    <Camera className="mr-2 group-hover:animate-pulse" />
                    Scan Product
                  </Button>
                </Link>
                <Link to="/search">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-black text-black hover:bg-gray-100 group">
                    <Search className="mr-2 group-hover:animate-pulse" />
                    Search Products
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <div className="relative">
                <img 
                  src="/placeholder.svg" 
                  alt="Healthy food choices" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-4 -left-4 bg-black text-white px-4 py-2 rounded-lg animate-bounce-light">
                  <span className="font-medium">Just ingredients you can trust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trending Comparisons */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Trending Comparisons</h2>
          <p className="text-gray-600 mb-8">See how JustBrand products compare to other brands</p>
          
          <div className="relative">
            <div className="flex overflow-hidden">
              {featuredComparisons.map((comparison, idx) => {
                const comparisonProds = comparison.products.map(id => getProductById(id)!);
                
                return (
                  <div 
                    key={comparison.id} 
                    className={`w-full flex-shrink-0 transition-transform duration-500 ease-in-out transform ${
                      idx === currentComparisonIndex ? "translate-x-0" : "translate-x-full absolute opacity-0"
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-xl font-semibold mb-6">{comparison.title}</h3>
                      
                      <div className="grid grid-cols-2 gap-8">
                        {comparisonProds.map(product => (
                          <div key={product.id} className="flex flex-col items-center">
                            <div className="mb-4 w-40 h-40 relative">
                              <img 
                                src={productImages[product.id] || "/placeholder.svg"} 
                                alt={product.name}
                                className="w-full h-full object-contain"
                              />
                              {product.isJustBrand && (
                                <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 rounded">
                                  JustBrand
                                </div>
                              )}
                            </div>
                            <h4 className="font-medium text-lg mb-1">{product.name}</h4>
                            <p className="text-sm text-gray-500 mb-3">{product.brand}</p>
                            
                            <div className="w-full space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Nutrition Rating:</span>
                                <span className="font-medium">{product.nutritionRating.toFixed(1)}/5</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Preservatives:</span>
                                <span className={
                                  product.preservativesLevel === "green" ? "text-green-500" : 
                                  product.preservativesLevel === "yellow" ? "text-yellow-500" : "text-red-500"
                                }>
                                  {product.preservativesLevel === "green" ? "None" : 
                                   product.preservativesLevel === "yellow" ? "Some" : "High"}
                                </span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Price:</span>
                                <span>₹{product.price}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2">Why {comparisonProds[1].name} is better:</h4>
                            <ul className="space-y-1">
                              {comparison.highlights.map((highlight, index) => (
                                <li key={index} className="text-sm flex items-start">
                                  <span className="text-green-500 mr-2">✓</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex items-center justify-center">
                            <Link to={`/product/${comparisonProds[1].id}`}>
                              <Button className="bg-black hover:bg-gray-800 animate-pulse-slow">
                                Switch to JustBrand
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {featuredComparisons.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentComparisonIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentComparisonIndex ? "bg-black scale-125" : "bg-gray-300"
                  }`}
                  aria-label={`Go to comparison ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* JustBrand Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">JustBrand Products</h2>
          <p className="text-gray-600 mb-8">Clean ingredients. No preservatives. Just honest food.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {justBrandProducts.map((product, idx) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                featured={true}
                className={`animate-slide-in opacity-0`}
                style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }} 
              />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/products">
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Nutrition Transparency */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Nutrition Transparency Matters</h2>
          <p className="text-gray-600 mb-8">Understanding what's in your food empowers healthier choices</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-in opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">1</div>
              <h3 className="font-medium text-lg mb-2">Know What's Inside</h3>
              <p className="text-gray-600">
                Many products contain hidden additives, preservatives, and artificial ingredients that can affect your health.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">2</div>
              <h3 className="font-medium text-lg mb-2">Make Better Choices</h3>
              <p className="text-gray-600">
                Compare products side by side to find healthier alternatives that match your dietary preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm animate-slide-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white mb-4">3</div>
              <h3 className="font-medium text-lg mb-2">Support Honest Brands</h3>
              <p className="text-gray-600">
                Choose brands that are transparent about their ingredients and committed to quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Explore Categories</h2>
          <p className="text-gray-600 mb-8">Discover products across different categories</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, idx) => (
              <Link 
                key={category.id}
                to={`/category/${category.id}`}
                className="group relative overflow-hidden rounded-lg animate-slide-in opacity-0"
                style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="aspect-square bg-gray-100">
                  <img 
                    src={categoryImages[category.id] || "/placeholder.svg"} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity group-hover:bg-opacity-50">
                  <h3 className="text-white font-medium text-lg text-center px-2">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Educate Yourself */}
      <section className="py-16 px-4 bg-gray-50 mt-16" id="education">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Educate Yourself</h2>
          <p className="text-gray-600 mb-8">Learn about ingredients, additives, and make informed choices</p>
          
          {/* Our Mission */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-8">Transparency Above All</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Pure Ingredients" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  At JustTrue, our mission is simple yet revolutionary: to bring complete transparency to food products. 
                  We believe you deserve to know exactly what you're eating, without hidden ingredients or misleading labels.
                </p>
                <p className="text-gray-700">
                  We're committed to providing you with food products that contain only the ingredients you can pronounce, 
                  understand, and trust - nothing more, nothing less.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg transform transition hover:scale-105">
                <h3 className="font-bold text-lg mb-2">Honesty</h3>
                <p className="text-gray-700">
                  We are completely transparent about what's in our products, where they come from, and how they're made.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg transform transition hover:scale-105">
                <h3 className="font-bold text-lg mb-2">Purity</h3>
                <p className="text-gray-700">
                  We never use artificial preservatives, flavors, or colors in any of our products.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg transform transition hover:scale-105">
                <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                <p className="text-gray-700">
                  We source locally whenever possible and ensure our packaging is environmentally friendly.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationalContent.map((content, idx) => (
              <VideoCard 
                key={content.id}
                title={content.title}
                thumbnail="/placeholder.svg"
                videoUrl={content.videoUrl}
                description={content.description}
                className="animate-slide-in opacity-0"
                style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white" id="testimonials">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Customer Testimonials</h2>
          <p className="text-gray-600 mb-8">Hear from our customers who have made the switch to preservative-free living</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md animate-slide-in opacity-0 hover:shadow-xl transition-all duration-300">
                <div className="mb-4 relative">
                  <Quote size={40} className="text-gray-200 absolute -left-2 -top-2" />
                  <p className="text-gray-700 italic relative z-10">{testimonial.text}</p>
                </div>
                
                <div className="flex items-center mt-6">
                  <div className="mr-4">
                    <img 
                      src="/placeholder.svg" 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={12} className="fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Truth */}
      <section className="py-16 px-4 bg-gray-50" id="industry-truth">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Industry Truth</h2>
          <p className="text-gray-600 mb-8">The food industry often hides uncomfortable truths behind flashy packaging</p>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle size={24} className="text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold">The Hidden Truth</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Many leading food brands use potentially harmful additives and preservatives that have been linked to various health issues. 
              These additives help extend shelf life, enhance flavor or appearance, but may come at the cost of your health.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Hidden Sugars</h3>
                <p className="text-gray-700 mb-2">
                  Sugar can be listed under more than 60 different names on ingredient labels.
                </p>
                <p className="text-sm text-orange-600">Found in: Seemingly healthy cereals, yogurts, sauces</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Artificial Colors</h3>
                <p className="text-gray-700 mb-2">
                  Synthetic food dyes have been linked to behavioral issues in children.
                </p>
                <p className="text-sm text-orange-600">Found in: Candies, snacks, beverages, even pickles</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Preservatives</h3>
                <p className="text-gray-700 mb-2">
                  Many preservatives are used to extend shelf life at the expense of your health.
                </p>
                <p className="text-sm text-orange-600">Found in: Most packaged and processed foods</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 px-4 bg-white" id="blog">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">JustTrue Blog</h2>
          <p className="text-gray-600 mb-8">Insights on nutrition, transparency, and healthy living</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src="/placeholder.svg" 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar size={14} className="mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <User size={14} className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-500">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
