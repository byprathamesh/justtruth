
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white/80 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png" 
              alt="JustTrue Logo" 
              className="h-16 w-auto transition-transform duration-300 hover:scale-105"
            />
            <span className="text-3xl font-bold">
              <span className="text-black">Just</span>
              <span className="text-orange-500">True</span>
            </span>
          </Link>

          <Button variant="outline" className="border-black text-black hover:bg-gray-100">
            Sign in
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

