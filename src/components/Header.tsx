import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Dialog,
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const Header: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }

    // This would normally connect to an auth service
    toast({
      title: "Sign in successful",
      description: "Welcome to JustTrue!",
    });
  };

  return (
    <header className="w-full bg-white/80 shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/6b0b7d75-b20e-4267-bff6-334e221b062f.png" 
              alt="JustTrue Logo" 
              className="h-20 w-auto transition-transform duration-300 hover:scale-105"
            />
            <span className="text-3xl font-bold">
              <span className="text-black">Just</span>
              <span className="text-orange-500">True</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#mission" className="text-gray-800 hover:text-orange-500 transition-colors">Our Mission</a>
            <a href="#testimonials" className="text-gray-800 hover:text-orange-500 transition-colors">Testimonials</a>
            <a href="#industry-truth" className="text-gray-800 hover:text-orange-500 transition-colors">Industry Truth</a>
            <a href="#blog" className="text-gray-800 hover:text-orange-500 transition-colors">Blog</a>
          </div>

          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild className="block md:hidden mr-4">
                <Button variant="outline" size="sm">Menu</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#mission" className="text-gray-800 hover:text-orange-500 transition-colors">Our Mission</a>
                  <a href="#testimonials" className="text-gray-800 hover:text-orange-500 transition-colors">Testimonials</a>
                  <a href="#industry-truth" className="text-gray-800 hover:text-orange-500 transition-colors">Industry Truth</a>
                  <a href="#blog" className="text-gray-800 hover:text-orange-500 transition-colors">Blog</a>
                </div>
              </SheetContent>
            </Sheet>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-black text-black hover:bg-gray-100 flex items-center space-x-2">
                  <User size={18} />
                  <span>Sign in</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Sign in to JustTrue</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSignIn} className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      placeholder="Enter your password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="w-full bg-black hover:bg-gray-800">
                      Sign in
                    </Button>
                  </DialogFooter>
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-orange-500 hover:underline">
                      Sign up
                    </Link>
                  </p>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
