
import React, { useState, useRef } from "react";
import { Camera, Upload, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products, getProductById } from "@/data/products";
import { productImages } from "@/utils/imageUtils";
import PreservativeBadge from "@/components/PreservativeBadge";
import NutritionGauge from "@/components/NutritionGauge";
import ProductCard from "@/components/ProductCard";

const ScanPage = () => {
  const [step, setStep] = useState<'initial' | 'scanning' | 'results'>('initial');
  const [scanImage, setScanImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // For demo purposes, we'll use the JustMilk product as the scanned product
  const scannedProductId = "amul-milk";
  const scannedProduct = getProductById(scannedProductId);
  
  // For demo purposes, show similar products
  const similarProducts = products
    .filter(p => p.category === scannedProduct?.category && p.id !== scannedProductId)
    .slice(0, 3);
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setScanImage(e.target?.result as string);
      setStep('scanning');
      simulateScan();
    };
    
    reader.readAsDataURL(file);
  };
  
  const handleCameraCapture = () => {
    // In a real app, this would activate the device camera
    // For demo, we'll use a placeholder image
    setScanImage('/placeholder.svg');
    setStep('scanning');
    simulateScan();
  };
  
  const simulateScan = () => {
    setIsAnalyzing(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsAnalyzing(false);
      setStep('results');
    }, 2000);
  };
  
  const resetScan = () => {
    setStep('initial');
    setScanImage(null);
  };
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto max-w-4xl px-4 pt-24 pb-16">
        <div className="mb-8">
          <Button variant="ghost" onClick={resetScan} className="mb-4" disabled={step === 'initial'}>
            <ArrowLeft className="mr-2" size={18} />
            Back
          </Button>
          <h1 className="text-3xl font-bold mb-2">Scan Products</h1>
          <p className="text-gray-600">
            Scan product labels or upload images to get nutrition information and compare with alternatives
          </p>
        </div>
        
        {step === 'initial' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="text-center">
              <img 
                src="/placeholder.svg" 
                alt="Scan Illustration" 
                className="w-40 h-40 mx-auto mb-6"
              />
              <h2 className="text-xl font-medium mb-4">Choose Scan Method</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Point your camera at a product label or upload an image to get detailed nutrition information
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-black hover:bg-gray-800 flex-1"
                  onClick={handleCameraCapture}
                >
                  <Camera className="mr-2" />
                  Open Camera
                </Button>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-black text-black hover:bg-gray-100 flex-1"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="mr-2" />
                  Upload Image
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {step === 'scanning' && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative">
              {scanImage && (
                <img 
                  src={scanImage} 
                  alt="Scanned product" 
                  className="w-full h-64 object-cover"
                />
              )}
              
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-center text-white">
                  <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin-slow mx-auto mb-4"></div>
                  <p className="font-medium">{isAnalyzing ? "Analyzing product..." : "Getting results..."}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {step === 'results' && scannedProduct && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
              <div className="p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-6 md:mb-0">
                    <img 
                      src={productImages[scannedProduct.id] || "/placeholder.svg"} 
                      alt={scannedProduct.name} 
                      className="w-40 h-40 object-contain mx-auto"
                    />
                  </div>
                  
                  <div className="md:w-3/4 md:pl-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h2 className="text-2xl font-bold">{scannedProduct.name}</h2>
                        <p className="text-gray-600">{scannedProduct.brand}</p>
                      </div>
                      <PreservativeBadge level={scannedProduct.preservativesLevel} />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 mt-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">Calories</p>
                        <p className="font-bold text-xl">{scannedProduct.calories}</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">Sugar</p>
                        <p className="font-bold text-xl">{scannedProduct.sugar}g</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">Protein</p>
                        <p className="font-bold text-xl">{scannedProduct.protein}g</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-500">Fat</p>
                        <p className="font-bold text-xl">{scannedProduct.fat}g</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Nutrition Score</h3>
                        <div className="flex items-center">
                          <span className="text-xl font-bold mr-1">{scannedProduct.nutritionRating.toFixed(1)}</span>
                          <span className="text-sm text-gray-500">/5</span>
                        </div>
                      </div>
                      <NutritionGauge 
                        value={scannedProduct.nutritionRating} 
                        max={5} 
                        label=""
                        colorClass={
                          scannedProduct.nutritionRating >= 4 ? "bg-green-500" : 
                          scannedProduct.nutritionRating >= 3 ? "bg-yellow-500" : 
                          "bg-red-500"
                        }
                      />
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Ingredients:</h3>
                      <p className="text-sm text-gray-600">
                        {scannedProduct.ingredients.join(", ")}
                      </p>
                    </div>
                    
                    {scannedProduct.additives.length > 0 && (
                      <div className="mt-4">
                        <h3 className="font-medium mb-2 text-red-600">Additives:</h3>
                        <p className="text-sm text-red-600">
                          {scannedProduct.additives.join(", ")}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Better Alternatives</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {similarProducts.map((product, idx) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    className="animate-slide-in opacity-0"
                    style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button onClick={resetScan} className="bg-black hover:bg-gray-800">
                Scan Another Product
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ScanPage;
