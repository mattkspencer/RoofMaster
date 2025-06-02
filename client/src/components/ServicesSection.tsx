import { Link } from 'wouter';
import { trackEvent } from '@/lib/analytics';

const ServicesSection = () => {
  const handleCTAClick = (service: string) => {
    trackEvent('service_cta_click', 'services_section', service);
  };

  return (
    <section id="services" className="section-spacing-lg bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6">Our Comprehensive Services</h2>
          <p className="lead max-w-3xl mx-auto">
            We provide end-to-end roofing solutions for residential and commercial properties throughout the Denver metropolitan area.
          </p>
        </div>
        
        {/* Residential Roofing */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="/images/colburnbuild.jpg?v=1" 
              alt="Residential roofing installation" 
              className="rounded-lg shadow-lg w-full h-auto object-cover max-w-full"
              loading="eager"
              width="600"
              height="400"
              onLoad={() => console.log('Successfully loaded colburnbuild.jpg on mobile')}
              onError={(e) => {
                console.error('Failed to load colburnbuild.jpg:', e);
                console.log('Image failed to load on mobile device');
              }}
            />
          </div>
          <div className="order-1 md:order-2 space-y-professional">
            <h3>Residential Roofing</h3>
            <p className="text-professional">
              From asphalt shingles to metal roofing, we provide expert installation, repair, and replacement services for homes across the Denver area.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-check text-accent mt-1.5 mr-3 text-sm"></i>
                <span className="text-professional">Asphalt shingle, metal, tile, and flat roof systems</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-accent mt-1.5 mr-3 text-sm"></i>
                <span className="text-professional">Complete roof replacements and new installations</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-accent mt-1.5 mr-3 text-sm"></i>
                <span className="text-professional">Roof inspections and maintenance plans</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-accent mt-1.5 mr-3 text-sm"></i>
                <span className="text-professional">Energy-efficient and sustainable roofing options</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Commercial Roofing */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="md:order-2">
            <img 
              src="https://picsum.photos/600/400?random=91" 
              alt="Commercial roofing project" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:order-1">
            <h3 className="text-2xl font-bold font-sans mb-4">Commercial Roofing</h3>
            <p className="text-lg mb-4">
              Protect your business investment with our durable, high-performance commercial roofing solutions designed for Denver's unique climate.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                <span>TPO, EPDM, modified bitumen, and metal systems</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                <span>Built-up roofing (BUR) and single-ply systems</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                <span>Commercial roof maintenance programs</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                <span>Minimal business disruption during installation</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Roof Repairs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://picsum.photos/600/400?random=92" 
              alt="Roof repair work" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-bold font-sans mb-4">Roof Repairs</h3>
            <p className="text-lg mb-4">
              Fast, reliable repairs for all types of roof damage including leaks, missing shingles, and storm damage throughout the Denver metro area.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                <span>Emergency leak repairs</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                <span>Shingle, tile, and metal roof repairs</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                <span>Storm damage assessment and repair</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-blue-500 mt-1 mr-2"></i>
                <span>Flashing and vent pipe repairs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
