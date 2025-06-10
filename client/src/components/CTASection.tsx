import { Link } from 'wouter';
import { trackEvent } from '@/lib/analytics';

interface CTASectionProps {
  title?: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  showPhoneButton?: boolean;
}

const CTASection = ({
  title = "Ready to Discuss Your Roofing Project?",
  text = "Whether you need a roof repair, replacement, or help with an insurance claim, we're here to provide professional service throughout the Denver metro area.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  showPhoneButton = true
}: CTASectionProps) => {
  const handleContactClick = () => {
    trackEvent('cta_click', 'cta_section', 'contact_us');
  };

  const handleCallClick = () => {
    trackEvent('call_click', 'cta_section', 'phone_number');
  };

  return (
    <section className="py-20 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1598811629267-fafb1de2abd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Roofing background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600/90"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6">{title}</h2>
        <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
          {text}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <Link 
            href={buttonLink}
            className="bg-white text-blue-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors cursor-pointer min-w-[180px] shadow-md inline-block text-center border-2 border-blue-900"
            onClick={handleContactClick}
          >
            {buttonText}
          </Link>
          {showPhoneButton && (
            <a 
              href="tel:720-360-8546" 
              className="border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-md transition-colors min-w-[180px] shadow-md"
              onClick={handleCallClick}
            >
              Call 720-360-8546
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
