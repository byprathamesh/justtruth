
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Camera, Search, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, getJustBrandProducts, getProductsByCategory } from "@/data/products";
import { categoryImages } from "@/utils/imageUtils";
import ProductCard from "@/components/ProductCard";

const MarketplacePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Get all JustBrand products
  const justBrandProducts = getJustBrandProducts();
  
  const getFreshProducts = () => {
    return justBrandProducts.filter(p => 
      p.category === "fresh-produce" || 
      p.category === "dairy" || 
      p.category === "beverages"
    );
  };
  
  const getHouseholdProducts = () => {
    return justBrandProducts.filter(p => 
      p.category === "personal-care" || 
      p.category === "household"
    );
  };
  
  const freshProducts = getFreshProducts();
  const householdProducts = getHouseholdProducts();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">JustTrue Marketplace</h1>
          <p className="text-gray-600 mb-6">
            Discover our range of preservative-free, additive-free products
          </p>
          
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="fresh">Fresh Items</TabsTrigger>
              <TabsTrigger value="household">Household</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="animate-fade-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {justBrandProducts.map((product, idx) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    className="animate-slide-in opacity-0"
                    style={{ animationDelay: `${idx * 0.05}s`, animationFillMode: 'forwards' }}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="fresh" className="animate-fade-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {freshProducts.map((product, idx) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    className="animate-slide-in opacity-0"
                    style={{ animationDelay: `${idx * 0.05}s`, animationFillMode: 'forwards' }}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="household" className="animate-fade-in">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {householdProducts.map((product, idx) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                    className="animate-slide-in opacity-0"
                    style={{ animationDelay: `${idx * 0.05}s`, animationFillMode: 'forwards' }}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <section className="bg-gray-50 p-8 rounded-lg my-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-3">Why Choose JustTrue Products?</h2>
              <p className="text-gray-600 mb-4">
                At JustTrue, we believe in transparency and quality. Our products are:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Free from harmful preservatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>No artificial flavors or colors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Sourced from trusted local farms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Sustainable packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <span>Supporting local communities</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="JustTrue Products" 
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>
        
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Shop By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default MarketplacePage;
