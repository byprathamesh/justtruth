import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Search, AlertTriangle, CheckCircle2, Leaf, Heart, Shield, Users } from "lucide-react";
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

      {/* Our Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/vision-image.svg" 
                alt="Our Vision" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-8">
                We believe in a world where food transparency is the norm, not the exception.
                Our mission is to empower consumers with the knowledge they need to make
                informed decisions about their food choices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">Transparency</h3>
                  <p className="text-gray-600">Clear, honest information about what's in your food</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-gray-600">Empowering consumers with knowledge</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">Using technology to drive positive change</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button className="bg-black hover:bg-gray-800">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Truth Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center text-yellow-600 mb-4">
              <AlertTriangle className="mr-2" />
              <h2 className="text-3xl font-bold">Industry Truths</h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the hidden truths about common food industry practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-yellow-500">
              <h3 className="font-semibold mb-2">Hidden Sugars</h3>
              <p className="text-gray-600 mb-4">
                Many products contain more sugar than you might think, often under different names.
              </p>
              <ul className="text-sm text-gray-500">
                <li>• High fructose corn syrup</li>
                <li>• Dextrose</li>
                <li>• Maltose</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-yellow-500">
              <h3 className="font-semibold mb-2">Artificial Colors</h3>
              <p className="text-gray-600 mb-4">
                Synthetic dyes are commonly used to make food more appealing.
              </p>
              <ul className="text-sm text-gray-500">
                <li>• Red 40</li>
                <li>• Yellow 5</li>
                <li>• Blue 1</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-yellow-500">
              <h3 className="font-semibold mb-2">Preservatives</h3>
              <p className="text-gray-600 mb-4">
                Chemical preservatives extend shelf life but may have health implications.
              </p>
              <ul className="text-sm text-gray-500">
                <li>• BHA/BHT</li>
                <li>• Sodium benzoate</li>
                <li>• Potassium sorbate</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/industry-practices">
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                Learn More About Industry Practices
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Natural Ingredients</h3>
                    <p className="text-gray-600">
                      We use only natural, recognizable ingredients in our products.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Complete Transparency</h3>
                    <p className="text-gray-600">
                      Every ingredient is clearly listed with its purpose.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Health-First Approach</h3>
                    <p className="text-gray-600">
                      Your health and well-being are our top priorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-1 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Shield className="text-black mr-3" />
                    <h3 className="font-semibold">Quality Assurance</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Rigorous testing and quality control ensure the highest standards.
                  </p>
                  <Link to="/quality" className="text-black hover:underline">
                    Learn more →
                  </Link>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Leaf className="text-black mr-3" />
                    <h3 className="font-semibold">Sustainability</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Environmentally responsible practices throughout our supply chain.
                  </p>
                  <Link to="/sustainability" className="text-black hover:underline">
                    Learn more →
                  </Link>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <Users className="text-black mr-3" />
                    <h3 className="font-semibold">Community Impact</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Supporting local communities and promoting food education.
                  </p>
                  <Link to="/community" className="text-black hover:underline">
                    Learn more →
                  </Link>
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