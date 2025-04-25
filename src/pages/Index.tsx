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
      <section className="min-h-screen flex items-center bg-white">
        <div className="container mx-auto max-w-6xl px-4 pt-16">
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
                  src="/images/just-placeholder.svg" 
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

      {/* Hide other sections initially */}
      <div className="hidden">
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

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Health Enthusiast</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "This app has completely changed how I shop for groceries. I can finally understand what's in my food!"
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h3 className="font-semibold">Michael Chen</h3>
                    <p className="text-sm text-gray-500">Nutritionist</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As a nutritionist, I recommend this app to all my clients. It's an essential tool for making informed choices."
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h3 className="font-semibold">Emma Rodriguez</h3>
                    <p className="text-sm text-gray-500">Busy Mom</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Finally, a simple way to make healthier choices for my family. The scanning feature is a game-changer!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="text-green-500 mr-3" />
                  <h3 className="font-semibold">Transparent Information</h3>
                </div>
                <p className="text-gray-600">
                  We provide clear, honest information about food products, helping you make informed decisions about what you eat.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Shield className="text-green-500 mr-3" />
                  <h3 className="font-semibold">Trusted Source</h3>
                </div>
                <p className="text-gray-600">
                  Our data is verified by nutrition experts and updated regularly to ensure accuracy and reliability.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Users className="text-green-500 mr-3" />
                  <h3 className="font-semibold">Community Driven</h3>
                </div>
                <p className="text-gray-600">
                  Join a community of health-conscious individuals sharing knowledge and experiences about food choices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Other Brands Fool You Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How Other Brands Fool You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-4">Misleading Labels</h3>
                <p className="text-gray-600 mb-4">
                  Many brands use terms like "natural," "healthy," or "organic" in ways that can be misleading. We help you understand what these terms really mean.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• "Natural" doesn't always mean healthy</li>
                  <li>• "Low-fat" often means high in sugar</li>
                  <li>• "Made with real fruit" can contain minimal actual fruit</li>
                </ul>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-4">Hidden Ingredients</h3>
                <p className="text-gray-600 mb-4">
                  Food manufacturers often hide unhealthy ingredients under different names or in small quantities to avoid detection.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Multiple names for sugar</li>
                  <li>• Artificial preservatives</li>
                  <li>• Unnecessary additives</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded by a team of nutritionists, food scientists, and tech enthusiasts, our journey began with a simple question: Why is it so hard to know what's in our food?
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We realized that food transparency shouldn't be a luxury. Everyone deserves to know exactly what they're putting into their bodies.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we're on a mission to make food transparency accessible to everyone, one scan at a time.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/our-story.svg" 
                  alt="Our Story" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Index; 