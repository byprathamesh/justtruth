import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-orange-50/30">
      <Header />
      
      <div className="container mx-auto max-w-4xl px-4 pt-32 pb-16">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">Our Mission</h1>
        
        <div className="prose max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Pure Ingredients" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Transparency Above All</h2>
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
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Core Values</h2>
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
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Helped over 100,000 families make better food choices</li>
              <li>Collaborated with 50+ local farmers for sustainable sourcing</li>
              <li>Reduced preservative consumption by 30% among our regular customers</li>
              <li>Saved an estimated 2 tons of plastic through eco-friendly packaging</li>
              <li>Built a community of 200,000+ health-conscious consumers</li>
            </ul>
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-6">Join the JustTrue Movement</h2>
            <div className="flex justify-center space-x-4">
              <Link to="/marketplace">
                <Button className="bg-black hover:bg-gray-800">
                  Shop JustTrue Products
                </Button>
              </Link>
              <Link to="/education">
                <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MissionPage;
