
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Truth About Preservatives in Everyday Foods",
    excerpt: "Learn about the hidden preservatives in your daily meals and how they affect your health over time.",
    image: "/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png",
    date: "April 22, 2025",
    author: "Dr. Anita Desai",
    category: "Nutrition",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "How to Read Food Labels Like a Pro",
    excerpt: "Decode confusing food labels and discover what those ingredient lists really mean for your health.",
    image: "/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png",
    date: "April 18, 2025",
    author: "Nikhil Mehta",
    category: "Food Literacy",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Breaking Down the Clean Label Movement",
    excerpt: "What does 'clean label' really mean, and is it always better for you? We investigate the trend.",
    image: "/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png",
    date: "April 15, 2025",
    author: "Meera Chakraborty",
    category: "Industry Insights",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "The Environmental Impact of Food Choices",
    excerpt: "How your grocery shopping habits affect the planet, and simple switches for a more sustainable pantry.",
    image: "/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png",
    date: "April 10, 2025",
    author: "Arjun Sharma",
    category: "Sustainability",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Natural vs. Artificial: The Flavor Debate",
    excerpt: "Are natural flavors really any better than artificial ones? The answer might surprise you.",
    image: "/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png",
    date: "April 5, 2025",
    author: "Dr. Priya Kapoor",
    category: "Food Science",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Farm to Table: The Journey of JustTrue Products",
    excerpt: "Follow our ingredients from local farms to your kitchen table, and meet the farmers behind your food.",
    image: "/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png",
    date: "April 1, 2025",
    author: "Vikram Singh",
    category: "Behind the Scenes",
    readTime: "5 min read"
  }
];

const categories = [
  "All", "Nutrition", "Food Literacy", "Industry Insights", "Sustainability", "Food Science", "Behind the Scenes"
];

const BlogPage = () => {
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
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">JustTrue Blog</h1>
            <p className="text-lg text-gray-700">Insights on nutrition, transparency, and healthy living</p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full md:w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="absolute right-3 top-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mb-8 flex overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  category === "All" ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-orange-500 font-medium">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button variant="outline" className="border-black text-black hover:bg-gray-100">
            Load More Articles
          </Button>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-700 mb-6">
              Get the latest articles, product updates, and nutrition tips delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Button className="bg-black hover:bg-gray-800 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
