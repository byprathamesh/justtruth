
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { educationalContent } from "@/data/products";
import { educationImages } from "@/utils/imageUtils";
import VideoCard from "@/components/VideoCard";

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 pt-24 pb-16">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-3xl font-bold mb-2">Educational Content</h1>
          <p className="text-gray-600 mb-8">
            Learn about ingredients, additives, and how to make better food choices
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {educationalContent.map((content, idx) => (
              <VideoCard 
                key={content.id}
                title={content.title}
                thumbnail={educationImages[content.id] || "/placeholder.svg"}
                videoUrl={content.videoUrl}
                description={content.description}
                className="animate-slide-in opacity-0"
                style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
              />
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 mt-12 rounded-lg animate-fade-in">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Why Food Education Matters</h2>
              <p className="text-gray-600 mb-6">
                Understanding what's in your food is the first step toward making healthier choices. 
                Our educational content helps you decode food labels, identify harmful ingredients, 
                and find better alternatives for you and your family.
              </p>
              <Link to="/scan">
                <Button className="bg-black hover:bg-gray-800">
                  Scan a Product Now
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

export default EducationPage;
