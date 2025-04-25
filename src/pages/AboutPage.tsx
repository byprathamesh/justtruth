
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto max-w-4xl px-4 pt-24 pb-16">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-3xl font-bold mb-6">About JustBrand</h1>
        
        <div className="prose max-w-none">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At JustBrand, we believe that everyone deserves to know exactly what they're eating. Our mission is to bring complete transparency to food products and empower consumers to make healthier choices.
            </p>
            <p className="text-gray-600 mb-4">
              We're committed to creating food products with simple, clean ingredients that you can trust. No hidden additives, no mysterious preservatives - just honest food that's good for you and your family.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              JustBrand began when our founder discovered how difficult it was to find food products without preservatives and additives. After realizing how many people shared similar concerns, JustBrand was born with a simple philosophy: food should be transparent.
            </p>
            <p className="text-gray-600 mb-4">
              We started with a single product - JustMilk - and have since expanded our range to include a variety of daily essentials, all made with the same commitment to quality and transparency.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Transparency</h3>
                <p className="text-gray-600">
                  We believe in complete honesty about what's in our products, where they come from, and how they're made.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on the quality of ingredients or manufacturing processes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We source locally whenever possible and ensure our packaging and processes are environmentally responsible.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-4">
              JustBrand is committed to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Never using artificial preservatives, flavors, or colors</li>
              <li>Sourcing ingredients from trusted, often local suppliers</li>
              <li>Maintaining complete transparency about our products</li>
              <li>Making nutrition information easy to understand</li>
              <li>Continuous improvement based on customer feedback</li>
            </ul>
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-6">Ready to experience the difference?</h2>
            <div className="flex justify-center space-x-4">
              <Link to="/products">
                <Button className="bg-black hover:bg-gray-800">
                  Explore Our Products
                </Button>
              </Link>
              <Link to="/scan">
                <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                  Scan & Compare
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

export default AboutPage;
