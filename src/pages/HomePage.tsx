import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, ShoppingCart, Search, Quote, Star, AlertTriangle, CheckCircle2, Leaf, Heart, Shield, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import VideoCard from "@/components/VideoCard";
import { videoPlaceholders } from "@/utils/imageUtils";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    image: "/images/testimonial1.svg",
    rating: 5,
    text: "Switching to JustTrue milk was the best decision. My kids love it and I can finally feel good about what they're drinking."
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi",
    image: "/images/testimonial2.svg",
    rating: 5,
    text: "The product scanner is incredible! I was shocked to discover how many additives were in my regular groceries."
  },
  {
    id: 3,
    name: "Meena Patel",
    location: "Ahmedabad",
    image: "/images/testimonial3.svg",
    rating: 4,
    text: "My skin has improved dramatically since switching to JustTrue personal care products. No more irritation!"
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
      <Header />
      <ChatBot />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 text-center mb-40 min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/logo.svg" 
              alt="JustTrue Logo" 
              className="w-32 h-32 mb-8 animate-bounce"
            />
            <h1 className="text-6xl md:text-7xl font-bold mb-12">
              <span className="text-black">Know What</span>{" "}
              <span className="text-orange-500">You Eat</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Link to="/scan" className="group">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                    <Camera size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Scan Product</h3>
                  <p className="text-gray-600">Scan any product to get detailed nutrition information</p>
                </div>
              </Link>
              
              <Link to="/marketplace" className="group">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                    <ShoppingCart size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">JustTrue Products</h3>
                  <p className="text-gray-600">Explore our range of preservative-free products</p>
                </div>
              </Link>
              
              <Link to="/compare" className="group">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                    <Search size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Compare Products</h3>
                  <p className="text-gray-600">Compare different products side by side</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="/images/vision.svg" 
                  alt="Our Vision" 
                  className="rounded-lg shadow-lg w-full h-[400px] object-contain"
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
                  <div className="p-6 bg-orange-50/30 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold mb-2">Transparency</h3>
                    <p className="text-gray-600">Clear, honest information about what's in your food</p>
                  </div>
                  <div className="p-6 bg-orange-50/30 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-semibold mb-2">Education</h3>
                    <p className="text-gray-600">Empowering consumers with knowledge</p>
                  </div>
                  <div className="p-6 bg-orange-50/30 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
        <section className="py-20 bg-orange-50/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center text-orange-500 mb-4">
                <AlertTriangle className="mr-2" />
                <h2 className="text-3xl font-bold">Industry Truths</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the hidden truths about common food industry practices
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500">
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
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500">
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
              <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500">
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
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-orange-50/30 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="text-orange-500 mr-3" />
                  <h3 className="font-semibold">Transparent Information</h3>
                </div>
                <p className="text-gray-600">
                  We provide clear, honest information about food products, helping you make informed decisions about what you eat.
                </p>
              </div>
              <div className="p-6 bg-orange-50/30 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Shield className="text-orange-500 mr-3" />
                  <h3 className="font-semibold">Trusted Source</h3>
                </div>
                <p className="text-gray-600">
                  Our data is verified by nutrition experts and updated regularly to ensure accuracy and reliability.
                </p>
              </div>
              <div className="p-6 bg-orange-50/30 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Users className="text-orange-500 mr-3" />
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
        <section className="py-20 bg-orange-50/30">
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
        <section className="py-20 bg-white">
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

        {/* Customer Testimonials */}
        <section className="py-16 px-4 bg-orange-50/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-2 text-center">Customer Testimonials</h2>
            <p className="text-gray-600 mb-12 text-center">Hear what our customers have to say about JustTrue products</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md animate-slide-in opacity-0 hover:shadow-xl transition-all duration-300" style={{ animationDelay: `${testimonial.id * 0.1}s`, animationFillMode: 'forwards' }}>
                  <div className="mb-4 relative">
                    <Quote size={40} className="text-gray-200 absolute -left-2 -top-2" />
                    <p className="text-gray-700 italic relative z-10">{testimonial.text}</p>
                  </div>
                  
                  <div className="flex items-center mt-6">
                    <div className="mr-4">
                      <img 
                        src={testimonial.image} 
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
            
            <div className="text-center mt-8">
              <Link to="/testimonials">
                <Button variant="outline" className="border-black text-black hover:bg-gray-100">
                  View All Testimonials
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
