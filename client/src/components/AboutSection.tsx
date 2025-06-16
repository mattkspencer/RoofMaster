import { Link } from 'wouter';
import { trackEvent } from '@/lib/analytics';

const AboutSection = () => {
  const handleContactClick = () => {
    trackEvent('cta_click', 'about_section', 'schedule_consultation');
  };

  return (
    <section id="about" className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            {/* Spencer from Spencer Roofing */}
            <img 
              src="/images/aboutspencerroofingsolutionswebsitephoto.webp" 
              alt="Spencer from Spencer Roofing Solutions giving thumbs up in front of residential home" 
              width="600"
              height="400"
              loading="lazy"
              className="rounded-lg shadow-lg w-full h-auto"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold font-sans mb-6">About Spencer Roofing</h2>
            <h3 className="text-xl font-semibold mb-4 text-primary">Your Trusted Roofing Project Manager</h3>
            <p className="text-lg mb-4">
              At Spencer Roofing, we specialize in managing and executing roofing projects with precision and professionalism. As an independent contractor affiliated with Interstate Roofing, we leverage their extensive resources and industry expertise to deliver top-tier roofing solutions. Our focus is on guiding homeowners through the complexities of roofing projects, particularly those involving insurance claims for hail and wind damage.
            </p>
            <p className="text-lg mb-6">
              With years of experience in the roofing industry, Spencer Roofing is committed to providing expert project management and sales services. We collaborate closely with homeowners and insurance providers to ensure a seamless and efficient roofing experience. Trust Spencer Roofing to protect your home with quality and integrity.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">24/7</p>
                <p className="text-gray-600">Emergency Service</p>
              </div>
            </div>
            
            <Link 
              href="/contact"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors"
              onClick={handleContactClick}
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
