import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-bold">
              <span className="text-white">Just</span>
              <span className="text-orange-500">Truth</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-orange-500">Home</Link>
            <Link to="/marketplace" className="text-white hover:text-orange-500">Shop</Link>
            <Link to="/compare" className="text-white hover:text-orange-500">Compare</Link>
            <Link to="/education" className="text-white hover:text-orange-500">Learn</Link>
            <Link to="/about" className="text-white hover:text-orange-500">About</Link>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Login
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-orange-500 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/marketplace" 
                className="text-white hover:text-orange-500 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/compare" 
                className="text-white hover:text-orange-500 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Compare
              </Link>
              <Link 
                to="/education" 
                className="text-white hover:text-orange-500 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-orange-500 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-4 py-2">
                <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-black">
                  Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
