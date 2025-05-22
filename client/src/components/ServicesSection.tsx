import { Link } from 'wouter';
import { trackEvent } from '@/lib/analytics';

const ServicesSection = () => {
  const handleCTAClick = (service: string) => {
    trackEvent('service_cta_click', 'services_section', service);
  };

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-sans mb-4">Our Comprehensive Services</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            We provide end-to-end roofing solutions for residential and commercial properties throughout the Denver metropolitan area.
          </p>
        </div>
        
        {/* Residential Roofing */}
        <div id="residential" className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            {/* A high-quality residential roof installation */}
            <img 
              src="https://images.unsplash.com/photo-1632759145351-1099f3252110?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Residential roofing installation" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold font-sans mb-4">Residential Roofing</h3>
            <p className="text-lg mb-4">
              From asphalt shingles to metal roofing, we provide expert installation, repair, and replacement services for homes across the Denver area.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Asphalt shingle, metal, tile, and flat roof systems</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Complete roof replacements and new installations</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Roof inspections and maintenance plans</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Energy-efficient and sustainable roofing options</span>
              </li>
            </ul>
            <Link href="/contact">
              <a 
                className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-5 rounded-md transition-colors"
                onClick={() => handleCTAClick('residential')}
              >
                Get a Free Quote
              </a>
            </Link>
          </div>
        </div>
        
        {/* Commercial Roofing */}
        <div id="commercial" className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
          <div className="md:w-1/2">
            {/* A commercial roofing project */}
            <img 
              src="https://images.unsplash.com/photo-1635424710928-0605ac366db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Commercial roofing project" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold font-sans mb-4">Commercial Roofing</h3>
            <p className="text-lg mb-4">
              Protect your business investment with our durable, high-performance commercial roofing solutions designed for Denver's unique climate.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>TPO, EPDM, modified bitumen, and metal systems</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Built-up roofing (BUR) and single-ply systems</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Commercial roof maintenance programs</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Minimal business disruption during installation</span>
              </li>
            </ul>
            <Link href="/contact">
              <a 
                className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-5 rounded-md transition-colors"
                onClick={() => handleCTAClick('commercial')}
              >
                Get a Free Quote
              </a>
            </Link>
          </div>
        </div>
        
        {/* Roof Repairs */}
        <div id="repairs" className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            {/* Roof repair work in progress */}
            <img 
              src="https://images.unsplash.com/photo-1605118936239-e04a8a10b31f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Roof repair work" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold font-sans mb-4">Roof Repairs</h3>
            <p className="text-lg mb-4">
              Fast, reliable repairs for all types of roof damage including leaks, missing shingles, and storm damage throughout the Denver metro area.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Emergency leak repairs</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Shingle, tile, and metal roof repairs</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Storm damage assessment and repair</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Flashing and vent pipe repairs</span>
              </li>
            </ul>
            <Link href="/contact">
              <a 
                className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-5 rounded-md transition-colors"
                onClick={() => handleCTAClick('repairs')}
              >
                Schedule a Repair
              </a>
            </Link>
          </div>
        </div>
        
        {/* Insurance Claims */}
        <div id="insurance" className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2">
            {/* Hail damaged roof inspection */}
            <img 
              src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Roof inspection for insurance claim" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold font-sans mb-4">Insurance Claims Assistance</h3>
            <p className="text-lg mb-4">
              Specializing in hail and wind damage claims, we help you navigate the entire insurance claim process from documentation to completion.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Free storm damage inspections</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Complete documentation of damage</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Direct communication with insurance adjusters</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-primary mt-1 mr-2"></i>
                <span>Expert guidance throughout the claims process</span>
              </li>
            </ul>
            <Link href="/contact">
              <a 
                className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-5 rounded-md transition-colors"
                onClick={() => handleCTAClick('insurance')}
              >
                Start Your Claim
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
