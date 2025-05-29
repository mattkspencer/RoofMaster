import { useState, useEffect } from 'react';
import { X, Phone } from 'lucide-react';

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isStormSeason, setIsStormSeason] = useState(false);

  useEffect(() => {
    // Check if it's storm season (March-August in Colorado)
    const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11
    const stormSeason = currentMonth >= 3 && currentMonth <= 8;
    setIsStormSeason(stormSeason);

    // Check if banner was previously dismissed today
    const dismissedToday = localStorage.getItem('emergencyBannerDismissed');
    const today = new Date().toDateString();
    
    if (dismissedToday === today) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Remember dismissal for today only
    localStorage.setItem('emergencyBannerDismissed', new Date().toDateString());
  };

  if (!isVisible) return null;

  return (
    <div className={`relative overflow-hidden ${
      isStormSeason 
        ? 'bg-gradient-to-r from-red-600 to-orange-600' 
        : 'bg-gradient-to-r from-orange-600 to-red-600'
    } text-white`}>
      {/* Pulsing animation overlay */}
      <div className="absolute inset-0 bg-white opacity-10 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 animate-bounce" />
              <span className="font-bold text-sm md:text-base">
                {isStormSeason ? '⚡ STORM DAMAGE?' : '🚨 EMERGENCY ROOF REPAIRS'}
              </span>
            </div>
            
            <div className="hidden sm:block">
              <span className="text-sm md:text-base">
                {isStormSeason 
                  ? 'Storm Season Emergency Repairs Available 24/7'
                  : 'Emergency Roof Repairs Available 24/7'
                }
              </span>
            </div>
            
            <a 
              href="tel:720-360-8546"
              className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold text-sm md:text-base hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2 shadow-lg"
            >
              <Phone className="h-4 w-4" />
              <span>CALL NOW: 720-360-8546</span>
            </a>
          </div>
          
          <button
            onClick={handleDismiss}
            className="ml-4 p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-200"
            aria-label="Close emergency banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Mobile-optimized layout */}
        <div className="sm:hidden mt-2 text-center">
          <span className="text-sm">
            {isStormSeason 
              ? 'Storm Season - 24/7 Emergency Response'
              : '24/7 Emergency Roof Repair Response'
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;