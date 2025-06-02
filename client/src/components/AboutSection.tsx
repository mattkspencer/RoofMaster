import { Link } from 'wouter';
import { trackEvent } from '@/lib/analytics';

const AboutSection = () => {
  const handleContactClick = () => {
    trackEvent('cta_click', 'about_section', 'schedule_consultation');
  };

  return (
    <section id="about" className="section-spacing bg-neutral-light">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Professional roofing consultation" 
              className="card-professional w-full h-auto"
            />
          </div>
          
          <div className="lg:w-1/2 space-y-professional">
            <h2>About Spencer Roofing Solutions</h2>
            <p className="text-professional">
              As your dedicated roofing project manager in the Denver metropolitan area, I provide expert guidance throughout your entire roofing project.
            </p>
            <p className="text-professional">
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
            
            <Link href="/contact">
              <a 
                className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors"
                onClick={handleContactClick}
              >
                Schedule a Consultation
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
