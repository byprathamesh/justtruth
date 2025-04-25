
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/button";
import { MessageSquare, X, Send } from "lucide-react";

interface Message {
  id: number;
  isBot: boolean;
  text: string;
  timestamp: Date;
}

interface ChatBotProps {
  className?: string;
}

const ChatBot: React.FC<ChatBotProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      isBot: true,
      text: "Hello! I'm your nutrition assistant. How can I help you today? You can ask me about ingredients, nutrition facts, or healthier alternatives.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);
  
  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      isBot: false,
      text: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I'd recommend checking products with fewer preservatives and artificial additives.",
        "Most processed foods contain additives like maltodextrin, which can affect blood sugar levels.",
        "JustBrand products are free from artificial preservatives and colors.",
        "Comparing nutrition labels is a great way to make healthier choices.",
        "Hidden sugars often appear under different names like dextrose or high-fructose corn syrup."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage = {
        id: messages.length + 2,
        isBot: true,
        text: randomResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-4 left-4 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all animate-bounce-light",
          isOpen && "hidden"
        )}
        aria-label="Open chat"
      >
        <MessageSquare size={24} />
      </button>
      
      {isOpen && (
        <div className={cn(
          "fixed bottom-4 left-4 z-50 bg-white rounded-lg shadow-xl border border-gray-200 w-80 max-w-[calc(100vw-2rem)] animate-scale-in",
          className
        )}>
          <div className="p-3 border-b border-gray-200 flex items-center justify-between bg-black text-white rounded-t-lg">
            <h3 className="font-medium">Nutrition Assistant</h3>
            <Button variant="ghost" size="sm" className="h-auto p-1 text-white hover:bg-white/20" onClick={() => setIsOpen(false)}>
              <X size={18} />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          
          <div className="max-h-80 overflow-y-auto p-3">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={cn(
                  "mb-3 p-3 rounded-lg max-w-[85%]",
                  message.isBot 
                    ? "bg-gray-100 text-gray-800 mr-auto animate-slide-from-left" 
                    : "bg-black text-white ml-auto animate-slide-from-right"
                )}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1 text-right">
                  {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </p>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          
          <div className="p-3 border-t border-gray-200 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about nutrition..."
              className="flex-1 text-sm border border-gray-200 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button
              onClick={handleSend}
              className="bg-black text-white px-3 py-2 rounded-r-md hover:bg-gray-800"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
