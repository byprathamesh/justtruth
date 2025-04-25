
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, categories } from "@/data/products";
import { categoryImages } from "@/utils/imageUtils";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const products = categoryId ? getProductsByCategory(categoryId) : [];
  const category = categories.find(c => c.id === categoryId);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto max-w-4xl px-4 pt-24 pb-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The category you are looking for doesn't exist.</p>
          <Link to="/">
            <Button className="bg-black hover:bg-gray-800">
              Return to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 pt-24 pb-16">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Button>
        </Link>
        
        <div className="relative h-64 rounded-lg overflow-hidden mb-8">
          <img 
            src={categoryImages[category.id] || "/placeholder.svg"} 
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{category.name}</h1>
          </div>
        </div>
        
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                className="animate-slide-in opacity-0"
                style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-2">No products found</h2>
            <p className="text-gray-600 mb-6">There are no products available in this category yet.</p>
            <Link to="/">
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                Explore Other Categories
              </Button>
            </Link>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
