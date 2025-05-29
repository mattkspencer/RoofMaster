import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";

// Components
import Layout from "./components/Layout";
import EmergencyBanner from "./components/EmergencyBanner";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ResidentialRoofing from "./pages/ResidentialRoofing";
import CommercialRoofing from "./pages/CommercialRoofing";
import RoofRepair from "./pages/RoofRepair";
import InsuranceClaims from "./pages/InsuranceClaims";
import GutterServices from "./pages/GutterServices";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "@/pages/not-found";

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <EmergencyBanner />
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services/residential-roofing" component={ResidentialRoofing} />
            <Route path="/services/commercial-roofing" component={CommercialRoofing} />
            <Route path="/services/roof-repair" component={RoofRepair} />
            <Route path="/services/insurance-claims" component={InsuranceClaims} />
            <Route path="/services/gutter-services" component={GutterServices} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:id" component={BlogPost} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
