
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, ShoppingCart, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import VideoCard from "@/components/VideoCard";
import { videoPlaceholders } from "@/utils/imageUtils";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ChatBot />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Know What You Eat</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link to="/scan" className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-all">
                  <Camera size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Scan Product</h3>
                <p className="text-gray-600 text-sm">Scan any product to get detailed nutrition information</p>
              </Link>
              
              <Link to="/marketplace" className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-all">
                  <ShoppingCart size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">JustTrue Products</h3>
                <p className="text-gray-600 text-sm">Explore our range of preservative-free products</p>
              </Link>
              
              <Link to="/compare" className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-all">
                  <Search size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-medium mb-2">Compare Products</h3>
                <p className="text-gray-600 text-sm">Compare different products side by side</p>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Comparison */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Popular Comparisons</h2>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <img 
                      src="/placeholder.svg" 
                      alt="Amul Milk"
                      className="w-48 h-48 object-contain"
                    />
                    <span className="absolute bottom-0 right-0 bg-gray-200 py-1 px-2 rounded-lg text-xs font-semibold">
                      ₹50
                    </span>
                  </div>
                  <h3 className="text-lg font-medium mb-1">Amul Milk</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Some Preservatives</span>
                    <span className="text-sm">3.8/5</span>
                  </div>
                  <ul className="space-y-1 w-full">
                    <li className="flex items-center">
                      <span className="w-32 text-sm text-gray-500">Sugar:</span>
                      <span className="text-sm font-medium">5.1g</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-32 text-sm text-gray-500">Additives:</span>
                      <span className="text-sm font-medium text-red-500">2</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-32 text-sm text-gray-500">Calories:</span>
                      <span className="text-sm font-medium">65</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <img 
                      src="/placeholder.svg" 
                      alt="JustTrue Milk"
                      className="w-48 h-48 object-contain"
                    />
                    <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 rounded-lg">
                      JustTrue
                    </div>
                    <span className="absolute bottom-0 right-0 bg-gray-200 py-1 px-2 rounded-lg text-xs font-semibold">
                      ₹60
                    </span>
                  </div>
                  <h3 className="text-lg font-medium mb-1">JustMilk</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">No Preservatives</span>
                    <span className="text-sm">4.8/5</span>
                  </div>
                  <ul className="space-y-1 w-full">
                    <li className="flex items-center">
                      <span className="w-32 text-sm text-gray-500">Sugar:</span>
                      <span className="text-sm font-medium">4.8g</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-32 text-sm text-gray-500">Additives:</span>
                      <span className="text-sm font-medium text-green-500">0</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-32 text-sm text-gray-500">Calories:</span>
                      <span className="text-sm font-medium">60</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium mb-4">Why JustMilk is better:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>60% fewer preservatives</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>No artificial additives</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Higher protein content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Fresher taste</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <Link to="/product/just-milk">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      Learn More About JustMilk
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/compare">
                <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                  See All Comparisons
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Educate Yourself - Videos */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Educate Yourself</h2>
            <p className="text-gray-600 mb-8 text-center">Watch these videos to learn more about nutrition and healthy choices</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <VideoCard 
                title="The Truth About Preservatives"
                thumbnail="/placeholder.svg"
                videoUrl={videoPlaceholders["preservatives-decoded"]}
                description="Learn about the different types of preservatives used in food products and their potential impacts on health."
                className="animate-slide-in opacity-0"
                style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
              />
              
              <VideoCard 
                title="JustTrue vs Competitors"
                thumbnail="/placeholder.svg"
                videoUrl={videoPlaceholders["hidden-sugar"]}
                description="See how JustTrue products compare to leading brands and why they're a healthier choice for you and your family."
                className="animate-slide-in opacity-0"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              />
              
              <VideoCard 
                title="Healthy Recipes with JustTrue"
                thumbnail="/placeholder.svg"
                videoUrl={videoPlaceholders["maltodextrin-explained"]}
                description="Quick and easy recipes using JustTrue products for a healthier lifestyle."
                className="animate-slide-in opacity-0"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              />
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/education">
                <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                  View All Videos
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
