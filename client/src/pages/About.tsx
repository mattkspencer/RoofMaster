import { useEffect } from "react";
import { Link } from "wouter";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";

const About = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "About Us | Spencer Roofing Solutions";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about Spencer Roofing Solutions, your dedicated roofing project manager in the Denver metropolitan area. Discover our approach to roofing projects and customer service.");
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "About", path: "/about", active: true }
          ]} 
        />
        
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">About Spencer Roofing Solutions</h1>
          
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-1/2">
              <img 
                src="/images/aboutspencerroofingsolutionswebsitephoto.jpg" 
                alt="Spencer from Spencer Roofing Solutions giving thumbs up in front of residential home" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Your Trusted Roofing Project Manager</h2>
              <p className="text-lg mb-4">
                As your dedicated roofing project manager in the Denver metropolitan area, I provide expert guidance throughout your entire roofing project.
              </p>
              <p className="text-lg mb-4">
                I partner with established roofing companies as an independent 1099 project manager and salesperson, bringing years of experience in navigating complex roofing projects, particularly those involving insurance claims for hail and wind damage.
              </p>
              <p className="text-lg mb-4">
                My approach focuses on transparent communication, meticulous attention to detail, and ensuring your complete satisfaction from initial consultation to project completion.
              </p>
            </div>
          </div>
          
          <div className="bg-neutral-light p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">My Professional Background</h2>
            
            <div className="space-y-6">
              <p className="text-lg">
                With over 15 years of experience in the roofing industry, I've developed extensive expertise in all aspects of residential and commercial roofing. My journey began working directly with installation crews, giving me hands-on knowledge of roofing systems and proper installation techniques.
              </p>
              
              <p className="text-lg">
                Over the years, I've specialized in hail and wind damage assessment and insurance claim management, successfully guiding hundreds of homeowners through the often complicated insurance claim process. This specialization has made me particularly effective at helping clients recover from storm damage.
              </p>
              
              <p className="text-lg">
                As an independent roofing project manager, I partner with established roofing companies to provide clients with exceptional service while ensuring quality work. This unique position allows me to advocate solely for your interests throughout the entire roofing process.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Approach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-comments text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Clear Communication</h3>
                <p className="text-gray-600">
                  I believe in keeping you informed at every stage of your project with straightforward, jargon-free explanations of your options and the work being performed.
                </p>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clipboard-check text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Meticulous Oversight</h3>
                <p className="text-gray-600">
                  I personally oversee every project to ensure that work is completed to the highest standards, with attention to detail that protects your property and investment.
                </p>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Client Advocacy</h3>
                <p className="text-gray-600">
                  As your project manager, I serve as your advocate throughout the process, especially when dealing with insurance companies to ensure you receive the coverage you're entitled to.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/5 p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Certifications & Credentials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fas fa-certificate text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Licensed Roofing Contractor</h3>
                  <p className="text-gray-600">
                    Fully licensed to operate throughout the Denver metropolitan area, ensuring all projects meet local building codes and regulations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fas fa-shield-alt text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
                  <p className="text-gray-600">
                    Comprehensive insurance coverage including general liability and workers' compensation to protect your property and ensure peace of mind.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fas fa-award text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Manufacturer Certifications</h3>
                  <p className="text-gray-600">
                    Certified installer for major roofing manufacturers, allowing me to offer enhanced warranty options on materials and workmanship.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <i className="fas fa-graduation-cap text-primary"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ongoing Education</h3>
                  <p className="text-gray-600">
                    Continuously updating my knowledge of roofing technologies, materials, and techniques through industry training and certification programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Start Your Roofing Project?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              I'm here to guide you through every step of your roofing project, from initial consultation to final inspection. Let's discuss your needs and how I can help.
            </p>
            <Link href="/contact">
              <a className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors">
                Schedule a Consultation
              </a>
            </Link>
          </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};

export default About;
