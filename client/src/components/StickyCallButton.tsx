import { trackEvent } from '@/lib/analytics';

const StickyCallButton = () => {
  const handleCallClick = () => {
    trackEvent('sticky_call_button_click', 'lead_generation', 'phone_call');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="tel:720-360-8546"
        onClick={handleCallClick}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
        style={{
          animation: 'gentle-pulse 3s ease-in-out infinite'
        }}
        aria-label="Call Spencer Roofing Now"
      >
        <i className="fas fa-phone text-xl"></i>
        <span className="hidden sm:inline font-semibold">Call Now</span>
      </a>
    </div>
  );
};

export default StickyCallButton;