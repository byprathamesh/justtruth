
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! I'm your nutrition assistant. Ask me anything about food ingredients or healthy choices!", isUser: false }
  ]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      // Add user message
      setMessages([...messages, { text: userInput, isUser: true }]);
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            text: getAIResponse(userInput), 
            isUser: false 
          }
        ]);
      }, 1000);
      
      // Clear input
      setUserInput("");
    }
  };

  const getAIResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.includes("preservative") || lowercaseInput.includes("additive")) {
      return "Preservatives are substances added to foods to prevent spoilage. At JustTrue, we avoid artificial preservatives and focus on natural preservation methods.";
    } else if (lowercaseInput.includes("sugar") || lowercaseInput.includes("sweetener")) {
      return "Many processed foods contain hidden sugars under different names. JustTrue products have no added refined sugars or artificial sweeteners.";
    } else if (lowercaseInput.includes("organic")) {
      return "Organic foods are grown without synthetic pesticides or fertilizers. JustTrue sources ingredients from organic farms whenever possible.";
    } else if (lowercaseInput.includes("product") || lowercaseInput.includes("recommend")) {
      return "Based on your interest in healthy foods, I'd recommend trying our JustMilk or JustFruits products - they have no preservatives and are sourced from local farms!";
    } else {
      return "That's a great question about nutrition! For more specific information, you can scan any product using our app or browse our educational content.";
    }
  };

  return (
    <>
      <div 
        className={`fixed bottom-24 right-4 z-50 transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        } bg-white rounded-lg shadow-lg border border-gray-200 w-80 md:w-96`}
      >
        <div className="p-3 border-b border-gray-200 bg-black text-white rounded-t-lg flex justify-between items-center">
          <h3 className="font-medium">Nutrition Assistant</h3>
          <button onClick={toggleChat} className="text-white hover:text-gray-200">
            &times;
          </button>
        </div>
        
        <div className="h-80 overflow-y-auto p-3 flex flex-col space-y-2">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`max-w-3/4 p-3 rounded-lg ${
                msg.isUser 
                  ? 'bg-orange-500 text-white ml-auto' 
                  : 'bg-gray-100 text-gray-800 mr-auto'
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex">
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask about ingredients or nutrition..."
            className="flex-1 rounded-r-none"
          />
          <Button type="submit" className="rounded-l-none bg-orange-500 hover:bg-orange-600">
            <ArrowRight size={18} />
          </Button>
        </form>
      </div>
      
      <button 
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </>
  );
};

export default ChatBot;
