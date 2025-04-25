import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from '@/lib/useAuth';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      navigate('/login');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-bold">
              <span className="text-black">Just</span>
              <span className="text-orange-500">Truth</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-orange-500">Shop</Link>
            <Link to="/compare" className="text-gray-700 hover:text-orange-500">Compare</Link>
            <Link to="/education" className="text-gray-700 hover:text-orange-500">Learn</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500">About</Link>
            <Button 
              variant="default" 
              className="bg-black text-white hover:bg-gray-800"
              onClick={handleAuthClick}
            >
              {user ? 'Sign Out' : 'Sign In'}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
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
          <div className="md:hidden py-4 bg-white animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-orange-500 px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/marketplace" 
                className="text-gray-700 hover:text-orange-500 px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/compare" 
                className="text-gray-700 hover:text-orange-500 px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Compare
              </Link>
              <Link 
                to="/education" 
                className="text-gray-700 hover:text-orange-500 px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Learn
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-orange-500 px-4 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-4 py-2">
                <Button 
                  variant="default" 
                  className="w-full bg-black text-white hover:bg-gray-800"
                  onClick={() => {
                    handleAuthClick();
                    setIsMenuOpen(false);
                  }}
                >
                  {user ? 'Sign Out' : 'Sign In'}
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
