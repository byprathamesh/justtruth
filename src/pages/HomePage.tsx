
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, ShoppingCart, Search, Quote, Star } from "lucide-react";
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
    image: "/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png",
    rating: 5,
    text: "Switching to JustTrue milk was the best decision. My kids love it and I can finally feel good about what they're drinking."
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Delhi",
    image: "/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png",
    rating: 5,
    text: "The product scanner is incredible! I was shocked to discover how many additives were in my regular groceries."
  },
  {
    id: 3,
    name: "Meena Patel",
    location: "Ahmedabad",
    image: "/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png",
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
        <section className="container mx-auto px-4 text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-12">
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
        </section>
        
        {/* Educate Yourself - Videos */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-2 text-center">Educate Yourself</h2>
            <p className="text-gray-600 mb-12 text-center">Watch these videos to learn more about nutrition and healthy choices</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <VideoCard 
                title="The Truth About Preservatives"
                thumbnail="/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png"
                videoUrl={videoPlaceholders["preservatives-decoded"]}
                description="Learn about different types of preservatives and their effects on health."
                className="animate-slide-in opacity-0"
                style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
              />
              
              <VideoCard 
                title="JustTrue vs Competitors"
                thumbnail="/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png"
                videoUrl={videoPlaceholders["hidden-sugar"]}
                description="See how JustTrue products compare to leading brands."
                className="animate-slide-in opacity-0"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              />
              
              <VideoCard 
                title="Healthy Recipes with JustTrue"
                thumbnail="/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png"
                videoUrl={videoPlaceholders["maltodextrin-explained"]}
                description="Quick and easy recipes using JustTrue products."
                className="animate-slide-in opacity-0"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              />
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
