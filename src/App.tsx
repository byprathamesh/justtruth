
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ScanPage from "./pages/ScanPage";
import ProductPage from "./pages/ProductPage";
import ComparisonPage from "./pages/ComparisonPage";
import EducationPage from "./pages/EducationPage";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import MarketplacePage from "./pages/MarketplacePage";
import ComparePage from "./pages/ComparePage";
import MissionPage from "./pages/MissionPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import IndustryTruthPage from "./pages/IndustryTruthPage";
import BlogPage from "./pages/BlogPage";
import SignUpPage from "./pages/SignUpPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/original" element={<Index />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/compare/:comparisonId" element={<ComparisonPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/industry-truth" element={<IndustryTruthPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
