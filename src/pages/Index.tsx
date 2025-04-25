import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
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

      <Footer />
    </div>
  );
};

export default Index; 