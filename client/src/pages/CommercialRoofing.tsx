import { useEffect } from 'react';
import { Link } from 'wouter';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { trackEvent } from '@/lib/analytics';

const CommercialRoofing = () => {
  useEffect(() => {
    document.title = "Commercial Roofing Services | Spencer Roofing Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Comprehensive commercial roofing solutions in Denver including TPO, EPDM, modified bitumen, and metal systems. Minimal business disruption and expert project management.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const handleCTAClick = () => {
    trackEvent('service_page_cta_click', 'commercial_roofing', 'contact');
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Services", path: "/#services" },
            { label: "Commercial Roofing", path: "/services/commercial-roofing", active: true }
          ]} 
        />
        
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Commercial Roofing Services</h1>
          
          {/* Hero Section */}
          <div className="mb-16 relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/1200/400?random=20" 
              alt="Commercial roofing project in Denver" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 flex items-center justify-center">
              <div className="text-center max-w-3xl px-6">
                <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 drop-shadow-lg">
                  Protect Your Business Investment
                </h2>
                <p className="text-lg text-white mb-8 drop-shadow-md opacity-95">
                  Durable, high-performance commercial roofing solutions designed specifically for Denver's unique climate
                </p>
                <Link href="/contact">
                  <div 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-md transition-colors shadow-lg cursor-pointer"
                    onClick={handleCTAClick}
                  >
                    Request a Consultation
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Commercial Roofing Services</h2>
            <p className="text-lg text-center max-w-4xl mx-auto mb-10">
              We provide comprehensive commercial roofing solutions for businesses of all sizes, from small retail spaces to large industrial complexes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://picsum.photos/600/300?random=21" 
                  alt="New commercial roof installation" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">New Roof Installation</h3>
                  <p className="text-gray-600 mb-4">
                    Expert installation of new commercial roofing systems for new construction or complete replacements.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Multiple material options</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Customized solutions</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Energy-efficient systems</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://picsum.photos/600/300?random=22" 
                  alt="Commercial roof repairs and maintenance" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Roof Repairs & Maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Prompt, effective repair services to address leaks, damage, and wear on commercial roofing systems.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Leak detection & repair</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Preventative maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Emergency services</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://picsum.photos/600/300?random=23" 
                  alt="Commercial roof inspections and surveys" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Roof Inspections & Surveys</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive inspections to assess your roof's condition and identify potential issues before they become major problems.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Detailed condition reports</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Infrared moisture detection</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Preventative recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Commercial Roofing Systems */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Commercial Roofing Systems</h2>
            <p className="text-lg mb-8">
              We offer a variety of high-performance commercial roofing systems, each with specific advantages for different building types and requirements.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary/10 p-6 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-primary text-center">TPO Roofing Systems</h3>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <p className="text-gray-600 mb-4">
                      Thermoplastic Polyolefin (TPO) single-ply roofing membranes are among the fastest-growing commercial roofing systems on the market.
                    </p>
                    <h4 className="font-semibold mb-2">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Energy-efficient white reflective surface</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Excellent resistance to UV, ozone, and chemical exposure</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Hot-air welded seams for superior strength</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Typically lower cost than EPDM or PVC systems</span>
                      </li>
                    </ul>
                    <p className="text-gray-600">
                      Ideal for: Retail centers, warehouses, manufacturing facilities, and buildings in hot climates seeking energy efficiency.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary/10 p-6 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-primary text-center">EPDM Roofing Systems</h3>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <p className="text-gray-600 mb-4">
                      Ethylene Propylene Diene Monomer (EPDM) is a durable synthetic rubber roofing membrane widely used in low-slope building applications.
                    </p>
                    <h4 className="font-semibold mb-2">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Exceptional durability and flexibility</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Excellent resistance to weathering</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Performs well in extreme temperatures</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Long service life (20+ years)</span>
                      </li>
                    </ul>
                    <p className="text-gray-600">
                      Ideal for: Office buildings, schools, hospitals, and facilities in regions with extreme temperature variations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary/10 p-6 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-primary text-center">Modified Bitumen</h3>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <p className="text-gray-600 mb-4">
                      Modified Bitumen roofing combines the reliability of traditional built-up roofing with added durability from polymer modifiers.
                    </p>
                    <h4 className="font-semibold mb-2">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Multi-ply system provides redundant protection</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Excellent durability and puncture resistance</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Good cold-weather performance</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Available with reflective coatings for energy efficiency</span>
                      </li>
                    </ul>
                    <p className="text-gray-600">
                      Ideal for: Buildings requiring robust protection, high traffic roofs, and structures in areas with severe weather.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-primary/10 p-6 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-primary text-center">Metal Roofing Systems</h3>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <p className="text-gray-600 mb-4">
                      Commercial metal roofing offers exceptional longevity and durability for various building types.
                    </p>
                    <h4 className="font-semibold mb-2">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Superior longevity (40-60+ years)</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Excellent fire resistance</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Energy efficient with reflective coatings</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Low maintenance requirements</span>
                      </li>
                    </ul>
                    <p className="text-gray-600">
                      Ideal for: Warehouses, manufacturing facilities, retail buildings, and architectural designs looking for durability and aesthetics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Approach */}
          <div className="bg-neutral-light p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Commercial Roofing Approach</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-10">
              We understand that commercial roofing projects require careful planning and execution to minimize disruption to your business operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Project Planning & Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Comprehensive site evaluation and needs assessment</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Detailed project timeline with minimal business disruption</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Material staging and logistics planning</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Regular progress updates and communication</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Coordination with other trades when necessary</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Quality & Safety Focus</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Strict adherence to manufacturer specifications</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Compliance with all building codes and regulations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Comprehensive safety protocols for all crew members</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Property protection measures during installation</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Thorough quality inspections throughout the project</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Value-Added Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Energy efficiency evaluation and recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Assistance with utility rebate programs</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Preventative maintenance programs</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Documentation for tax incentives when applicable</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Warranty registration and management</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Post-Installation Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Comprehensive final inspection with client walkthrough</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Detailed maintenance recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Emergency repair service availability</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Scheduled inspection programs</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span>Long-term relationship with dedicated account manager</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Commercial Roofing FAQs</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">What factors should I consider when choosing a commercial roofing system?</h3>
                <p className="text-gray-600">
                  Key considerations include your building's structure, local climate conditions, energy efficiency goals, budget (both initial and lifecycle costs), anticipated roof traffic, and maintenance requirements. We provide detailed consultations to help you evaluate these factors for your specific situation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How will a commercial roofing project impact my business operations?</h3>
                <p className="text-gray-600">
                  We understand that business disruption is a concern. Our team works with you to develop a project plan that minimizes impact on your operations, potentially including after-hours work, sectional completion, or coordinating around your business schedule. We maintain clear communication throughout the project so you always know what to expect.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">What roof maintenance is recommended for commercial buildings?</h3>
                <p className="text-gray-600">
                  Commercial roofs should be inspected at least twice yearly (typically spring and fall) and after major weather events. Regular maintenance includes clearing debris, checking drainage systems, examining seams and penetrations, and addressing minor issues before they become major problems. We offer maintenance programs tailored to your specific roofing system.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How energy-efficient are modern commercial roofing systems?</h3>
                <p className="text-gray-600">
                  Today's commercial roofing systems offer significant energy efficiency benefits. Cool roofing options like white TPO or coated metal can reflect up to 80% of solar heat, potentially reducing cooling costs by 10-30%. Additional insulation during roof installation can further improve energy performance. We can provide specific energy saving projections for your building during consultation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">What warranties are available for commercial roofing?</h3>
                <p className="text-gray-600">
                  Commercial roofing warranties typically include manufacturer's material warranties (10-30 years depending on the system) and workmanship warranties for the installation. We offer enhanced warranty options for many systems, and as a certified installer for major manufacturers, we can provide some of the strongest warranty protections available in the industry.
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-primary/5 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Commercial Property</h2>
            <p className="text-lg max-w-2xl mx-auto mb-6">
              Contact us today to schedule a consultation and learn how our commercial roofing solutions can protect your business investment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <a className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors">
                  Request a Consultation
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

export default CommercialRoofing;
