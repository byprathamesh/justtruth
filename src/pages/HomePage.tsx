import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, ShoppingCart, Search, Quote, Star, AlertTriangle, CheckCircle2, Leaf, Heart, Shield, Users, TrendingUp } from "lucide-react";
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

const trendingComparisons = [
  {
    id: 1,
    product1: "Popular Milk Brand A",
    product2: "JustTrue Milk",
    differences: ["Added preservatives vs Natural", "Artificial vitamins vs Natural nutrients", "45-day shelf life vs Fresh daily"]
  },
  {
    id: 2,
    product1: "Common Bread Brand",
    product2: "JustTrue Bread",
    differences: ["Added sugar vs No added sugar", "Artificial softeners vs Natural ingredients", "Preservatives vs Fresh daily"]
  },
  {
    id: 3,
    product1: "Market Yogurt Brand",
    product2: "JustTrue Yogurt",
    differences: ["Artificial flavors vs Natural fruits", "Added thickeners vs Pure milk", "High sugar vs Probiotic rich"]
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
      <Header />
      <ChatBot />
      
      <main className="pt-8 pb-16">
        {/* Hero Section - Full Screen */}
        <section className="min-h-[100vh] flex items-center justify-center px-4 pt-16 md:pt-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-7xl md:text-8xl font-bold mb-16">
              <span className="text-black">Know What</span>{" "}
              <span className="text-orange-500">You Eat</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/scan" className="group">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                    <Camera size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Scan Product</h3>
                  <p className="text-gray-600">Scan any product to get detailed nutrition information</p>
                  <img 
                    src="/images/scan-product.svg" 
                    alt="Scan Product" 
                    className="w-32 h-32 mx-auto mt-4"
                  />
                </div>
              </Link>
              
              <Link to="/marketplace" className="group">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                    <ShoppingCart size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">JustTrue Products</h3>
                  <p className="text-gray-600">Explore our range of preservative-free products</p>
                  <div className="flex justify-center gap-2 mt-4">
                    <img 
                      src="/images/product-milk.svg" 
                      alt="Milk" 
                      className="w-16 h-16"
                    />
                    <img 
                      src="/images/product-bread.svg" 
                      alt="Bread" 
                      className="w-16 h-16"
                    />
                    <img 
                      src="/images/product-yogurt.svg" 
                      alt="Yogurt" 
                      className="w-16 h-16"
                    />
                  </div>
                </div>
              </Link>
              
              <Link to="/compare" className="group">
                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                    <Search size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-medium mb-4">Compare Products</h3>
                  <p className="text-gray-600">Compare different products side by side</p>
                  <img 
                    src="/images/compare-products.svg" 
                    alt="Compare Products" 
                    className="w-32 h-32 mx-auto mt-4"
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Trending Comparisons Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center text-orange-500 mb-4">
                <TrendingUp className="mr-2" />
                <h2 className="text-3xl font-bold">Trending Comparisons</h2>
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how JustTrue products compare to popular market alternatives
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trendingComparisons.map((comparison) => (
                <div key={comparison.id} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                  <div className="flex justify-between items-center mb-4 text-lg font-semibold">
                    <span className="text-gray-600">{comparison.product1}</span>
                    <span className="text-orange-500">vs</span>
                    <span className="text-green-600">{comparison.product2}</span>
                  </div>
                  <ul className="space-y-2">
                    {comparison.differences.map((diff, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="text-green-500 mr-2 h-4 w-4" />
                        {diff}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="py-20 bg-orange-50/30">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="/images/vision.svg" 
                  alt="Our Vision" 
                  className="rounded-lg shadow-lg w-full h-[400px] object-contain bg-white"
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
              </div>
            </div>
          </div>
        </section>

        {/* JustTrue Products Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-orange-50/30 rounded-lg p-6 text-center">
                <img 
                  src="/images/product-milk.svg" 
                  alt="Pure Milk" 
                  className="w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Pure Milk</h3>
                <p className="text-gray-600">Fresh, natural milk without any preservatives</p>
              </div>
              <div className="bg-orange-50/30 rounded-lg p-6 text-center">
                <img 
                  src="/images/product-bread.svg" 
                  alt="Whole Grain Bread" 
                  className="w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Whole Grain Bread</h3>
                <p className="text-gray-600">Fresh-baked with natural ingredients</p>
              </div>
              <div className="bg-orange-50/30 rounded-lg p-6 text-center">
                <img 
                  src="/images/product-yogurt.svg" 
                  alt="Natural Yogurt" 
                  className="w-32 h-32 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Natural Yogurt</h3>
                <p className="text-gray-600">Probiotic-rich with no artificial additives</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-orange-50/30">
          <div className="container mx-auto max-w-5xl px-4">
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
                  src="/images/our-story.svg" 
                  alt="Our Story" 
                  className="rounded-lg shadow-lg w-full h-[400px] object-contain bg-white"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Customer Testimonials */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-2 text-center">Customer Testimonials</h2>
            <p className="text-gray-600 mb-12 text-center">Hear what our customers have to say about JustTrue products</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-orange-50/30 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="mb-4 relative">
                    <Quote size={40} className="text-orange-200 absolute -left-2 -top-2" />
                    <p className="text-gray-700 italic relative z-10">{testimonial.text}</p>
                  </div>
                  
                  <div className="flex items-center mt-6">
                    <div className="mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover"
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
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
