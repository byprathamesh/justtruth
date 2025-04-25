import React from "react";
import { Link } from "react-router-dom";
import { Star, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    id: 1,
    name: "JustMilk",
    brand: "JustBrand",
    price: 60,
    rating: 4.8,
    image: "/images/product-milk.svg",
    category: "Fresh Items"
  },
  {
    id: 2,
    name: "JustCheese",
    brand: "JustBrand",
    price: 180,
    rating: 4.7,
    image: "/images/just-cheese.svg",
    category: "Fresh Items"
  },
  {
    id: 3,
    name: "JustButter",
    brand: "JustBrand",
    price: 120,
    rating: 4.9,
    image: "/images/just-butter.svg",
    category: "Fresh Items"
  },
  {
    id: 4,
    name: "JustChips",
    brand: "JustBrand",
    price: 40,
    rating: 4.2,
    image: "/images/just-chips.svg",
    category: "Snacks"
  }
];

const categories = [
  {
    id: 1,
    name: "Dairy Products",
    image: "/images/product-milk.svg",
    count: 12
  },
  {
    id: 2,
    name: "Snacks",
    image: "/images/just-chips.svg",
    count: 8
  },
  {
    id: 3,
    name: "Beverages",
    image: "/images/product-milk.svg",
    count: 6
  },
  {
    id: 4,
    name: "Bread & Bakery",
    image: "/images/product-bread.svg",
    count: 4
  }
];

const features = [
  "Free from harmful preservatives",
  "No artificial flavors or colors",
  "Sourced from trusted local farms",
  "Sustainable packaging",
  "Supporting local communities"
];

const Marketplace: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          <Header />
        </div>
      </div>
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">JustTrue Marketplace</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of preservative-free, additive-free products crafted with care and transparency
          </p>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Shop By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/category/${category.name.toLowerCase().replace(" & ", "-").replace(" ", "-")}`}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <img 
                    src={category.image}
                    alt={category.name}
                    className="w-24 h-24 mx-auto mb-4 transform group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-lg font-semibold text-center mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500 text-center">{category.count} items</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">All Products</h2>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-lg bg-orange-500 text-white">Fresh Items</button>
              <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">Household</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 mx-auto mb-4"
                />
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                  <p className="text-2xl font-bold mb-2">₹{product.price}</p>
                  <p className="text-sm text-green-600 mb-2">No Preservatives</p>
                  <div className="flex items-center justify-center gap-1 mb-4">
                    <span className="text-sm text-gray-600">Nutrition:</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-orange-50/50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose JustTrue Products?</h2>
          <p className="text-center text-gray-600 mb-8">At JustTrue, we believe in transparency and quality. Our products are:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Check className="text-green-500 w-5 h-5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace; 