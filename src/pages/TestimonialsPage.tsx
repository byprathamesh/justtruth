import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    image: "/placeholder.svg",
    rating: 5,
    text: "I've been using JustTrue products for the past 6 months and the difference is noticeable. My family loves the natural taste and I love that I don't have to worry about harmful additives.",
    productUsed: "JustMilk, JustCheese"
  },
  {
    id: 2,
    name: "Rakesh Patel",
    location: "Ahmedabad",
    image: "/placeholder.svg",
    rating: 5,
    text: "As someone with food sensitivities, finding JustTrue has been life-changing. Their transparent ingredient lists give me confidence about what I'm eating.",
    productUsed: "JustButter, JustVegetables"
  },
  {
    id: 3,
    name: "Aisha Khan",
    location: "Delhi",
    image: "/placeholder.svg",
    rating: 4,
    text: "The scan feature is incredible! I was shocked to discover how many additives were in my regular grocery items. JustTrue products are now a staple in our household.",
    productUsed: "JustFruits"
  },
  {
    id: 4,
    name: "Vivek Reddy",
    location: "Bangalore",
    image: "/placeholder.svg",
    rating: 5,
    text: "As a fitness trainer, I always emphasize the importance of clean eating. JustTrue makes it easy for my clients to follow through with truly clean products.",
    productUsed: "JustChips, JustShampoo"
  },
  {
    id: 5,
    name: "Meena Iyer",
    location: "Chennai",
    image: "/placeholder.svg",
    rating: 5,
    text: "I was skeptical at first about how preservative-free products would taste or last, but JustTrue has proven that natural can be both delicious and practical!",
    productUsed: "JustSoap, JustDetergent"
  },
  {
    id: 6,
    name: "Rahul Verma",
    location: "Hyderabad",
    image: "/placeholder.svg",
    rating: 4,
    text: "The educational content JustTrue provides has made me much more aware of what I'm putting in and on my body. Their products back up their mission 100%.",
    productUsed: "JustMilk, JustVegetables"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-orange-50/30">
      <Header />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Button>
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">Customer Testimonials</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hear from our customers who have made the switch to preservative-free living with JustTrue products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote size={24} className="text-gray-300 absolute -left-2 -top-2" />
                <p className="text-gray-700 mb-4 pl-4">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Products used:</span> {testimonial.productUsed}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Share Your JustTrue Story</h2>
          <form className="max-w-2xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
            </div>
            <div>
              <label htmlFor="products" className="block text-sm font-medium text-gray-700 mb-1">Products Used</label>
              <input type="text" id="products" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">Your Testimonial</label>
              <textarea id="testimonial" rows={4} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <div className="text-center">
              <Button className="bg-black hover:bg-gray-800">
                Submit Your Story
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
