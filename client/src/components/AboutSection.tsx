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
            {/* Spencer from Spencer Roofing Solutions */}
            <img 
              src="/images/aboutspencerroofingsolutionswebsitephoto.jpg" 
              alt="Spencer from Spencer Roofing Solutions giving thumbs up in front of residential home" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold font-sans mb-6">About Spencer Roofing Solutions</h2>
            <p className="text-lg mb-4">
              As your dedicated roofing project manager in the Denver metropolitan area, I provide expert guidance throughout your entire roofing project.
            </p>
            <p className="text-lg mb-6">
              I partner with established roofing companies as an independent 1099 project manager and salesperson, bringing years of experience in navigating complex roofing projects, particularly those involving insurance claims for hail and wind damage.
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
