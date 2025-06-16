import HeroSection from "@/components/HeroSection";
import EmergencyCallMobile from "@/components/EmergencyCallMobile";
import FeaturedServices from "@/components/FeaturedServices";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PortfolioSection from "@/components/PortfolioSection";
import InsuranceClaimsSection from "@/components/InsuranceClaimsSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Spencer Roofing | Your Trusted Roofing Project Manager for the Denver Metro Area";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Spencer Roofing provides professional roofing services including residential, commercial, repairs, and insurance claim assistance in the Denver metropolitan area.");
    }
  }, []);

  return (
    <>
      <HeroSection />
      <EmergencyCallMobile />
      <FeaturedServices />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioSection />
      <InsuranceClaimsSection />
      <BlogSection />
      <CTASection />
      <ContactSection />
    </>
  );
};

export default Home;
