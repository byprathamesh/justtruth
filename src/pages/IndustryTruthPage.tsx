
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const IndustryTruthPage = () => {
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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-black to-orange-500 bg-clip-text text-transparent">Industry Truth</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The food industry often hides uncomfortable truths behind flashy packaging and clever marketing. 
            We're here to bring transparency and help you understand what's really in your food.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="flex items-center mb-6">
              <AlertTriangle size={24} className="text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold">The Hidden Truth</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Many leading food brands use potentially harmful additives and preservatives that have been linked to various health issues. 
              These additives help extend shelf life, enhance flavor or appearance, but may come at the cost of your health.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Hidden Sugars</h3>
                <p className="text-gray-700 mb-2">
                  Sugar can be listed under more than 60 different names on ingredient labels.
                </p>
                <p className="text-sm text-orange-600">Found in: Seemingly healthy cereals, yogurts, sauces</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Artificial Colors</h3>
                <p className="text-gray-700 mb-2">
                  Synthetic food dyes have been linked to behavioral issues in children.
                </p>
                <p className="text-sm text-orange-600">Found in: Candies, snacks, beverages, even pickles</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Flavor Enhancers</h3>
                <p className="text-gray-700 mb-2">
                  MSG and other flavor enhancers can cause adverse reactions in sensitive individuals.
                </p>
                <p className="text-sm text-orange-600">Found in: Chips, soups, processed meats</p>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="dairy" className="w-full">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Industry Spotlight</h2>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <TabsTrigger value="dairy" className="data-[state=active]:bg-black data-[state=active]:text-white">Dairy</TabsTrigger>
                <TabsTrigger value="snacks" className="data-[state=active]:bg-black data-[state=active]:text-white">Snacks</TabsTrigger>
                <TabsTrigger value="personal" className="data-[state=active]:bg-black data-[state=active]:text-white">Personal Care</TabsTrigger>
                <TabsTrigger value="produce" className="data-[state=active]:bg-black data-[state=active]:text-white">Fresh Produce</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dairy" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src="/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png" 
                      alt="Dairy Products" 
                      className="w-full h-64 object-cover rounded-lg shadow-sm mb-4"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">The Dairy Dilemma</h3>
                    <p className="text-gray-700 mb-4">
                      Many commercial dairy products contain antibiotics, growth hormones, and unnecessary additives.
                      Some even add thickeners and emulsifiers to make low-quality milk appear creamier.
                    </p>
                    <div className="flex items-center mb-2">
                      <AlertCircle size={18} className="text-red-500 mr-2" />
                      <span className="text-gray-700">Carrageenan - linked to inflammation and digestive problems</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <AlertCircle size={18} className="text-red-500 mr-2" />
                      <span className="text-gray-700">Added sugar - even in plain milk products</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={18} className="text-green-500 mr-2" />
                      <span className="text-gray-700">JustTrue dairy products - just milk, nothing else</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="snacks" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src="/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png" 
                      alt="Snack Products" 
                      className="w-full h-64 object-cover rounded-lg shadow-sm mb-4"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Snack Food Secrets</h3>
                    <p className="text-gray-700 mb-4">
                      Most commercial snacks contain artificial flavors, colors, and preservatives designed to maximize cravings 
                      and extend shelf life, not to nourish your body.
                    </p>
                    <div className="flex items-center mb-2">
                      <AlertCircle size={18} className="text-red-500 mr-2" />
                      <span className="text-gray-700">MSG and flavor enhancers - designed to make you crave more</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <AlertCircle size={18} className="text-red-500 mr-2" />
                      <span className="text-gray-700">Artificial colors - linked to hyperactivity in children</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={18} className="text-green-500 mr-2" />
                      <span className="text-gray-700">JustTrue snacks - made with real ingredients you can pronounce</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="personal" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src="/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png" 
                      alt="Personal Care Products" 
                      className="w-full h-64 object-cover rounded-lg shadow-sm mb-4"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Personal Care Concerns</h3>
                    <p className="text-gray-700 mb-4">
                      Your skin absorbs what you put on it. Many personal care products contain parabens, sulfates, and other 
                      harmful ingredients that can disrupt hormones and cause irritation.
                    </p>
                    <div className="flex items-center mb-2">
                      <AlertCircle size={18} className="text-red-500 mr-2" />
                      <span className="text-gray-700">Sodium Lauryl Sulfate - harsh detergent that can irritate skin</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <AlertCircle size={18} className="text-red-500 mr-2" />
                      <span className="text-gray-700">Parabens - linked to hormone disruption</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={18} className="text-green-500 mr-2" />
                      <span className="text-gray-700">JustTrue personal care - gentle, natural ingredients</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="produce" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src="/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png" 
                      alt="Fresh Produce" 
                      className="w-full h-64 object-cover rounded-lg shadow-sm mb-4"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Produce Problems</h3>
                    <p className="text-gray-700 mb-4">
                      Even "fresh" produce can be sprayed with pesticides, waxes, and ripening agents. Many fruits are picked 
                      unripe and artificially ripened, losing nutrients in the process.
                    </p>
                    <div className="flex items-center mb-2">
                      <AlertCircle size={18} className="text-red-500 mr-2" />
                      <span className="text-gray-700">Pesticide residues - even after washing</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <AlertCircle size={18} className="text-red-500 mr-2" />
                      <span className="text-gray-700">Artificial waxes - to make produce look fresher</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={18} className="text-green-500 mr-2" />
                      <span className="text-gray-700">JustTrue produce - pesticide-free and naturally ripened</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4">Are all preservatives bad for you?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Not all preservatives are created equal. Some natural preservatives like salt, vinegar, and citric acid are generally
                  safe. However, many synthetic preservatives like BHA, BHT, and sodium nitrite have been linked to various health concerns.
                  At JustTrue, we focus on using minimal, natural preservation methods.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4">How can products stay fresh without preservatives?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  JustTrue products use a combination of careful packaging, cold-chain management, and natural antimicrobials
                  like essential oils or fermentation. We also educate customers on proper storage and encourage consuming products
                  within a reasonable timeframe. Sometimes, a slightly shorter shelf life is the price of true health.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4">Why do big brands use so many additives?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  Large food companies prioritize longer shelf life, lower production costs, and consistent appearance over health benefits.
                  Additives help products survive long supply chains, look appetizing after months on the shelf, and have the same color
                  and texture in every batch. Unfortunately, these conveniences often come at the expense of your health.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4">How can I identify hidden additives in products?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700">
                  The best way is to use our JustTrue scanning app, which identifies problematic ingredients instantly. Generally,
                  be wary of ingredients you can't pronounce, numbers (E-numbers), or chemical-sounding names. Also be skeptical of
                  claims like "natural flavors," which can still contain synthetic components.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="text-center bg-black text-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Ready to Make the Switch?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of health-conscious consumers who've switched to JustTrue products and experienced the difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/marketplace">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
                Shop JustTrue Products
              </Button>
            </Link>
            <Link to="/scan">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black w-full sm:w-auto">
                Scan Your Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default IndustryTruthPage;
