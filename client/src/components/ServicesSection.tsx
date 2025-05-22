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
              src="https://pixabay.com/get/gb6ec6978156f2c370488c6ee6dbd16279a893b76c0150be87ff23b54208171ee981231caecb36c707e516ecd50b6da827c366d5f71f21f37fc2975eb0b0c1bca_1280.jpg" 
              alt="Residential roofing installation" 
              className="rounded-lg shadow-lg w-full h-auto"
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
              src="https://pixabay.com/get/gc559579da89f7055788592f17fb8b1166a0ba7add3cbf03419fcf0c33af24b820cf224dd2316271aaa46d2fc42b70ec66e113e4d77d8804fc6b3658da2fe169b_1280.jpg" 
              alt="Commercial roofing project" 
              className="rounded-lg shadow-lg w-full h-auto"
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
              src="https://pixabay.com/get/g001fca5ec131bba332f54004f3b9d633eb36318d6728232befddffe04c71537b067524fe47135920db4212b1ec096c81f0f4fc393712da5336610b4d180c325e_1280.jpg" 
              alt="Roof repair work" 
              className="rounded-lg shadow-lg w-full h-auto"
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
              src="https://pixabay.com/get/g6796bce29ce37f6e768e664bb0e123138fe19f4e67a7dfd9a900c92b78e535eb2e3371eb27ee4e8a797cdf6e37002306a64d64a97ac05453ce27effac41cae2b_1280.jpg" 
              alt="Roof inspection for insurance claim" 
              className="rounded-lg shadow-lg w-full h-auto"
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
