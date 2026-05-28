import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import Tools from "./pages/Tools";
import Framework from "./pages/Framework";
import Resources from "./pages/Resources";
import Impact from "./pages/Impact";
import About from "./pages/About";
import Founder from "./pages/Founder";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Store from "./pages/Store";
import Speaking from "./pages/Speaking";
import Insights from "./pages/Insights";
import InsightPost from "./pages/InsightPost";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const InsightsSlugRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/blog/${slug}`} replace />;
};

const EsPerspectivasSlugRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={`/es/blog/${slug}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/services" element={<Services />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/framework" element={<Framework />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/about" element={<About />} />
              <Route path="/founder" element={<Founder />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<Book />} />
              <Route path="/store" element={<Store />} />
              <Route path="/tienda" element={<Store />} />
              <Route path="/speaking" element={<Speaking />} />
              <Route path="/es/conferencias" element={<Speaking />} />
              <Route path="/blog" element={<Insights />} />
              <Route path="/blog/:slug" element={<InsightPost />} />
              <Route path="/es/blog" element={<Insights />} />
              <Route path="/es/blog/:slug" element={<InsightPost />} />
              <Route path="/insights" element={<Navigate to="/blog" replace />} />
              <Route path="/insights/:slug" element={<InsightsSlugRedirect />} />
              <Route path="/es/perspectivas" element={<Navigate to="/es/blog" replace />} />
              <Route path="/es/perspectivas/:slug" element={<EsPerspectivasSlugRedirect />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
