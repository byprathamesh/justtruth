
import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png" alt="JustTrue Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold">
              <span className="text-black">Just</span>
              <span className="text-orange-500">True</span>
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative">
              <div className="absolute left-3">
                <Search size={18} className="text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>
            <Button variant="outline" className="border-black text-black hover:bg-gray-100">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
