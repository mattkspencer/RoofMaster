import { useEffect } from 'react';
import { Link } from 'wouter';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { trackEvent } from '@/lib/analytics';

const ResidentialRoofing = () => {
  useEffect(() => {
    document.title = "Residential Roofing Services | Spencer Roofing Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert residential roofing services in Denver including installation, repair, and replacement for all types of homes. Free estimates and insurance claim assistance.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const handleCTAClick = () => {
    trackEvent('service_page_cta_click', 'residential_roofing', 'contact');
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Services", path: "/#services" },
            { label: "Residential Roofing", path: "/services/residential-roofing", active: true }
          ]} 
        />
        
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Residential Roofing Services</h1>
          
          {/* Hero Section */}
          <div className="mb-16 relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/1200/400?random=10" 
              alt="Residential roof installation in Denver" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 flex items-center justify-center">
              <div className="text-center max-w-3xl px-6">
                <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 drop-shadow-lg">
                  Quality Residential Roofing for Denver Homes
                </h2>
                <p className="text-lg text-white mb-8 drop-shadow-md opacity-95">
                  Expert installation, repair, and replacement services for all types of residential roofs
                </p>
                <Link href="/contact">
                  <div 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-md transition-colors shadow-lg cursor-pointer"
                    onClick={handleCTAClick}
                  >
                    Get a Free Estimate
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Residential Roofing Services</h2>
            <p className="text-lg text-center max-w-4xl mx-auto mb-10">
              From new installations to repairs and replacements, we provide comprehensive solutions for homeowners throughout the Denver metropolitan area.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://picsum.photos/600/300?random=1" 
                  alt="New roof installation" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">New Roof Installation</h3>
                  <p className="text-gray-600 mb-4">
                    Complete roof installation services for new construction and home additions, using quality materials and expert craftsmanship.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Premium material options</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Precision installation</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Extended warranties</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/images/woodshakebuild.JPG" 
                  alt="Roof replacement service" 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  onError={(e) => console.error('Failed to load woodshakebuild.JPG:', e)}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Roof Replacement</h3>
                  <p className="text-gray-600 mb-4">
                    Complete tear-off and replacement services when repairs are no longer sufficient to protect your home.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Full tear-off and disposal</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Inspection of decking</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Material upgrades available</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://picsum.photos/600/300?random=3" 
                  alt="Roof repair work" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Roof Repairs</h3>
                  <p className="text-gray-600 mb-4">
                    Quick and effective repair services for damaged or leaking roofs to extend their lifespan and prevent water damage.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Leak detection & repair</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Shingle replacement</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Emergency services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Roofing Materials */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Roofing Materials We Offer</h2>
            <p className="text-lg mb-8">
              We work with a wide variety of high-quality roofing materials to suit your home's style, your budget, and Denver's unique climate challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Asphalt Shingles</h3>
                <p className="mb-3">Our most popular option for residential roofs, offering excellent value and durability.</p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">3-Tab Shingles:</span>
                      <span className="block text-gray-600">Economical option with a clean, uniform look</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Architectural/Dimensional Shingles:</span>
                      <span className="block text-gray-600">Multi-layered for added dimension and durability</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Premium/Designer Shingles:</span>
                      <span className="block text-gray-600">Mimic the look of slate or wood with superior performance</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Impact-Resistant Shingles:</span>
                      <span className="block text-gray-600">Class 4 rated for superior hail protection</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Metal Roofing</h3>
                <p className="mb-3">Long-lasting, energy-efficient option with excellent performance in Colorado's climate.</p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Standing Seam:</span>
                      <span className="block text-gray-600">Clean, modern look with concealed fasteners</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Metal Shingles:</span>
                      <span className="block text-gray-600">The durability of metal with a traditional appearance</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Stone-Coated Steel:</span>
                      <span className="block text-gray-600">Combines metal durability with textured, dimensional look</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-4">Tile & Slate</h3>
                <p className="mb-3">Premium options that provide distinctive looks and exceptional longevity.</p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Clay Tile:</span>
                      <span className="block text-gray-600">Traditional southwest look with excellent durability</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Concrete Tile:</span>
                      <span className="block text-gray-600">Versatile styling with strong performance</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Natural Slate:</span>
                      <span className="block text-gray-600">Elegant, distinctive appearance with century-plus lifespan</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Specialty Roofing</h3>
                <p className="mb-3">Additional options for specific needs or architectural styles.</p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Wood Shakes:</span>
                      <span className="block text-gray-600">Natural beauty with rustic appeal</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Synthetic/Composite:</span>
                      <span className="block text-gray-600">Mimics natural materials with enhanced durability</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Low-Slope Systems:</span>
                      <span className="block text-gray-600">Modified bitumen or single-ply for portions with minimal pitch</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Our Process */}
          <div className="bg-neutral-light p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Residential Roofing Process</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-10">
              We follow a detailed, transparent process to ensure your roofing project is completed efficiently and to the highest standards.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">1</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Free Consultation & Inspection</h3>
                  <p className="text-gray-600">
                    We begin with a thorough inspection of your roof and discuss your needs, preferences, and budget. Our detailed assessment identifies any existing issues and helps determine the best solution for your home.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">2</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Detailed Proposal</h3>
                  <p className="text-gray-600">
                    We provide a comprehensive, easy-to-understand proposal that outlines the scope of work, materials to be used, timeline, and costs. We take the time to explain all aspects of the proposal and answer any questions.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">3</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Material Selection</h3>
                  <p className="text-gray-600">
                    We help you select the ideal roofing materials for your home, considering factors like architectural style, climate resistance, energy efficiency, and budget. We offer samples and visualizations to help with your decision.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">4</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Project Preparation</h3>
                  <p className="text-gray-600">
                    Before work begins, we handle all necessary permits and coordinate material delivery. We also take steps to protect your property, including landscaping, during the construction process.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">5</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Installation</h3>
                  <p className="text-gray-600">
                    Our experienced crews work efficiently and professionally to install your new roof according to manufacturer specifications and building codes. As your project manager, I personally oversee the installation to ensure quality work.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">6</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Final Inspection & Cleanup</h3>
                  <p className="text-gray-600">
                    Upon completion, we conduct a thorough inspection to verify all work meets our high standards. We also ensure complete cleanup of your property, including magnetic sweeping for nails, and provide you with warranty information and maintenance recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Spencer Roofing Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-certificate text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Quality Craftsmanship</h3>
                <p className="text-gray-600 text-center">
                  We partner with the best installation crews in Denver, ensuring expert installation according to manufacturer specifications.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-shield-alt text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Premium Materials</h3>
                <p className="text-gray-600 text-center">
                  We use only high-quality, warrantied materials from trusted manufacturers designed specifically for Colorado's climate.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-user-tie text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Dedicated Project Management</h3>
                <p className="text-gray-600 text-center">
                  As your project manager, I personally oversee every aspect of your roofing project from start to finish.
                </p>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How long will my new roof last?</h3>
                <p className="text-gray-600">
                  The lifespan of your roof depends on the material chosen. Standard asphalt shingles typically last 20-30 years, architectural shingles 30-50 years, metal roofing 40-70 years, and tile or slate can last 50+ years. Proper installation and maintenance are key factors in maximizing roof lifespan.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Do I need to replace my entire roof if it's leaking?</h3>
                <p className="text-gray-600">
                  Not necessarily. If your roof is relatively new and the damage is isolated, repairs may be sufficient. However, if your roof is approaching the end of its lifespan or has widespread issues, replacement is often more cost-effective. We provide honest assessments to help you make the best decision.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Can you work with my insurance company?</h3>
                <p className="text-gray-600">
                  Absolutely! We specialize in insurance claim assistance and have extensive experience working with insurance adjusters for storm damage claims. We document all damage thoroughly, meet with your adjuster, and ensure you receive the coverage you're entitled to under your policy.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How long does a typical roof replacement take?</h3>
                <p className="text-gray-600">
                  Most residential roof replacements can be completed in 1-3 days, depending on the size and complexity of your roof, the material being installed, and weather conditions. We work efficiently to minimize disruption to your household.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer warranties?</h3>
                <p className="text-gray-600">
                  Yes, we provide manufacturer warranties on all materials used, many of which are transferable to new owners if you sell your home. Additionally, we stand behind our workmanship with a 5-year labor warranty on all new installations and replacements.
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-primary/5 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-6">
              Contact us today to schedule your free roof inspection and consultation. We'll help you find the perfect roofing solution for your home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <a className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors">
                  Request a Free Estimate
                </a>
              </Link>
              <a href="tel:720-360-8546" className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors">
                Call 720-360-8546
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};

export default ResidentialRoofing;
