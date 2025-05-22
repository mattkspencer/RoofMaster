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
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-sans mb-6">{title}</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
          {text}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href={buttonLink}>
            <a 
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-colors"
              onClick={handleContactClick}
            >
              {buttonText}
            </a>
          </Link>
          {showPhoneButton && (
            <a 
              href="tel:720-360-8546" 
              className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors"
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
