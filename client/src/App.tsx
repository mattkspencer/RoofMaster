import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, Suspense, lazy } from "react";
import { initGA } from "./lib/analytics";

// Components
import Layout from "./components/Layout";
import EmergencyBanner from "./components/EmergencyBanner";

// Critical page loaded immediately
import Home from "./pages/Home";

// Lazy load non-critical pages for better performance
const About = lazy(() => import("./pages/About"));
const ResidentialRoofing = lazy(() => import("./pages/ResidentialRoofing"));
const CommercialRoofing = lazy(() => import("./pages/CommercialRoofing"));
const RoofRepair = lazy(() => import("./pages/RoofRepair"));
const InsuranceClaims = lazy(() => import("./pages/InsuranceClaims"));
const GutterServices = lazy(() => import("./pages/GutterServices"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("@/pages/not-found"));
const EnglewoodRoofing = lazy(() => import("./pages/EnglewoodRoofing"));
const DenverRoofing = lazy(() => import("./pages/DenverRoofing"));
const AuroraRoofing = lazy(() => import("./pages/AuroraRoofing"));
const LittletonRoofing = lazy(() => import("./pages/LittletonRoofing"));
const ArvadaRoofing = lazy(() => import("./pages/ArvadaRoofing"));
const CastleRockRoofing = lazy(() => import("./pages/CastleRockRoofing"));

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

  // Loading component for lazy-loaded pages
  const PageLoader = () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <EmergencyBanner />
        <Layout>
          <Suspense fallback={<PageLoader />}>
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
              <Route path="/faq" component={FAQ} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/terms-of-service" component={TermsOfService} />
              {/* Service Area Pages */}
              <Route path="/englewood-roofing-services" component={EnglewoodRoofing} />
              <Route path="/denver-roofing-contractor" component={DenverRoofing} />
              <Route path="/aurora-roofing-company" component={AuroraRoofing} />
              <Route path="/littleton-roof-replacement" component={LittletonRoofing} />
              <Route path="/arvada-roof-repair" component={ArvadaRoofing} />
              <Route path="/castle-rock-roofing-services" component={CastleRockRoofing} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
