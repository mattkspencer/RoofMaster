import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const isActive = (path: string) => {
    return location === path;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close services dropdown when main menu closes
    if (mobileMenuOpen) {
      setServicesDropdownOpen(false);
    }
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  // Handle keyboard navigation for mobile menu and dropdowns
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const handleEscapeKey = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
    }
  };

  // Mobile navigation handlers for each service page
  const navigateToResidential = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setTimeout(() => window.location.href = '/services/residential-roofing', 100);
  };

  const navigateToCommercial = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setTimeout(() => window.location.href = '/services/commercial-roofing', 100);
  };

  const navigateToRoofRepair = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setTimeout(() => window.location.href = '/services/roof-repair', 100);
  };

  const navigateToInsurance = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setTimeout(() => window.location.href = '/services/insurance-claims', 100);
  };

  const navigateToGutters = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setTimeout(() => window.location.href = '/services/gutter-services', 100);
  };

  const navigateToPortfolio = () => {
    setMobileMenuOpen(false);
    setTimeout(() => window.location.href = '/portfolio', 100);
  };

  const navigateToBlog = () => {
    setMobileMenuOpen(false);
    setTimeout(() => window.location.href = '/blog', 100);
  };

  const navigateToFAQ = () => {
    setMobileMenuOpen(false);
    setTimeout(() => window.location.href = '/faq', 100);
  };

  const navigateToContact = () => {
    setMobileMenuOpen(false);
    setTimeout(() => window.location.href = '/contact', 100);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`sticky top-0 w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-md bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-3xl font-bold cursor-pointer">
            <span className="text-blue-500">Spencer</span>
            <span className="text-gray-700">Roofing</span>
          </Link>
          
          {/* Trust Signals with Interactive Hover Animations */}
          <div className="hidden md:flex flex-col text-xs text-gray-600 space-y-1">
            <div className="flex items-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-green-50 px-2 py-1 rounded-md">
              <i className="fas fa-shield-alt text-green-600 mr-1 group-hover:text-green-700 group-hover:animate-pulse transition-colors duration-300"></i>
              <span className="font-semibold group-hover:text-green-800 transition-colors duration-300">Licensed & Insured</span>
            </div>
            <div className="flex items-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-blue-50 px-2 py-1 rounded-md">
              <i className="fas fa-calendar-alt text-blue-600 mr-1 group-hover:text-blue-700 group-hover:rotate-12 transition-all duration-300"></i>
              <span className="group-hover:text-blue-800 transition-colors duration-300">Serving Denver Since 2012</span>
            </div>
          </div>
        </div>
        
        {/* Mobile CTA and Menu */}
        <div className="lg:hidden flex items-center space-x-3">
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-md transition-colors text-sm cursor-pointer inline-block">
            Get Quote
          </Link>
          <button 
            id="mobile-menu-button" 
            className="text-neutral-dark"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} aria-hidden="true"></i>
          </button>
        </div>
        
        {/* Phone number - Desktop only */}
        <div className="hidden lg:flex items-center mr-4">
          <a 
            href="tel:720-360-8546" 
            className="flex items-center text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            <i className="fas fa-phone mr-2"></i>
            720-360-8546
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active text-primary font-semibold' : 'hover:text-primary'} transition-colors cursor-pointer`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active text-primary font-semibold' : 'hover:text-primary'} transition-colors cursor-pointer`}>
            About
          </Link>
          <div className="relative group">
            <div className={`nav-link cursor-pointer hover:text-primary transition-colors flex items-center py-2`}>
              Services <i className="fas fa-chevron-down ml-1 text-xs"></i>
            </div>
            <div className="absolute left-0 top-full w-64 bg-white shadow-lg rounded-md overflow-hidden z-20 hidden group-hover:block">
              <Link to="/services/residential-roofing" className="block px-4 py-3 hover:bg-primary hover:text-white transition-colors cursor-pointer border-b border-gray-100">
                Residential Roofing
              </Link>
              <Link to="/services/commercial-roofing" className="block px-4 py-3 hover:bg-primary hover:text-white transition-colors cursor-pointer border-b border-gray-100">
                Commercial Roofing
              </Link>
              <Link to="/services/roof-repair" className="block px-4 py-3 hover:bg-primary hover:text-white transition-colors cursor-pointer border-b border-gray-100">
                Roof Repairs
              </Link>
              <Link to="/services/insurance-claims" className="block px-4 py-3 hover:bg-primary hover:text-white transition-colors cursor-pointer border-b border-gray-100">
                Insurance Claims
              </Link>
              <Link to="/services/gutter-services" className="block px-4 py-3 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                Gutter Services
              </Link>
            </div>
          </div>
          <Link to="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active text-primary font-semibold' : 'hover:text-primary'} transition-colors cursor-pointer`}>
            Portfolio
          </Link>
          <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active text-primary font-semibold' : 'hover:text-primary'} transition-colors cursor-pointer`}>
            Blog
          </Link>
          <Link to="/faq" className={`nav-link ${isActive('/faq') ? 'active text-primary font-semibold' : 'hover:text-primary'} transition-colors cursor-pointer`}>
            FAQ
          </Link>
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors cursor-pointer inline-block">
            Get a Free Quote
          </Link>
        </nav>
      </div>
      
      {/* Enhanced Mobile navigation */}
      <div className={`${mobileMenuOpen ? 'fixed' : 'hidden'} inset-0 z-[60] lg:hidden`}>
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={toggleMobileMenu}
        ></div>
        
        {/* Mobile menu panel */}
        <div className={`fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`} style={{ backgroundColor: '#ffffff', backdropFilter: 'none', WebkitBackdropFilter: 'none', height: '100vh', minHeight: '100vh' }}>
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
            <div className="text-xl font-bold">
              <span className="text-blue-500">Spencer</span>
              <span className="text-gray-700">Roofing</span>
            </div>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 -mr-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <i className="fas fa-times text-xl text-gray-600"></i>
            </button>
          </div>
          
          {/* Mobile menu content */}
          <div className="flex flex-col h-full overflow-y-auto bg-white" style={{ height: 'calc(100vh - 80px)' }}>
            <nav id="mobile-navigation" className="flex-1 px-6 py-6 space-y-3" role="navigation" aria-label="Mobile navigation menu">
              <Link to="/" onClick={handleMobileNavClick} className={`mobile-nav-item ${isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'} hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-4 px-4 rounded-lg font-medium cursor-pointer block`}>
                <i className="fas fa-home w-5 mr-3"></i>
                Home
              </Link>
              
              <Link to="/about" onClick={handleMobileNavClick} className={`mobile-nav-item ${isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'} hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-4 px-4 rounded-lg font-medium cursor-pointer block`}>
                <i className="fas fa-info-circle w-5 mr-3"></i>
                About
              </Link>
              
              {/* Services dropdown */}
              <div className="space-y-0">
                <button 
                  onClick={toggleServicesDropdown}
                  className={`w-full flex items-center justify-between py-4 px-4 rounded-lg font-medium transition-all duration-200 ${
                    servicesDropdownOpen ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  aria-expanded={servicesDropdownOpen}
                  aria-controls="services-submenu"
                  aria-label="Services menu"
                  type="button"
                >
                  <div className="flex items-center">
                    <i className="fas fa-tools w-5 mr-3" aria-hidden="true"></i>
                    Services
                  </div>
                  <i className={`fas fa-chevron-down transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180' : ''
                  }`} aria-hidden="true"></i>
                </button>
                
                {/* Services submenu */}
                <div id="services-submenu" className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  servicesDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`} role="menu" aria-hidden={!servicesDropdownOpen}>
                  <div className="ml-8 mt-2 space-y-1 border-l-2 border-blue-100 pl-4">
                    <button onClick={navigateToResidential} className="mobile-nav-subitem py-3 px-3 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium cursor-pointer block w-full text-left" role="menuitem" type="button">
                      Residential Roofing
                    </button>
                    <button onClick={navigateToCommercial} className="mobile-nav-subitem py-3 px-3 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium cursor-pointer block w-full text-left" role="menuitem" type="button">
                      Commercial Roofing
                    </button>
                    <button onClick={navigateToRoofRepair} className="mobile-nav-subitem py-3 px-3 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium cursor-pointer block w-full text-left" role="menuitem" type="button">
                      Roof Repairs
                    </button>
                    <button onClick={navigateToInsurance} className="mobile-nav-subitem py-3 px-3 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium cursor-pointer block w-full text-left" role="menuitem" type="button">
                      Insurance Claims
                    </button>
                    <button onClick={navigateToGutters} className="mobile-nav-subitem py-3 px-3 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium cursor-pointer block w-full text-left" role="menuitem" type="button">
                      Gutter Services
                    </button>
                  </div>
                </div>
              </div>
              
              <button onClick={navigateToPortfolio} className={`mobile-nav-item ${isActive('/portfolio') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'} hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-4 px-4 rounded-lg font-medium cursor-pointer block w-full text-left`}>
                <i className="fas fa-images w-5 mr-3"></i>
                Portfolio
              </button>
              
              <button onClick={navigateToBlog} className={`mobile-nav-item ${isActive('/blog') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'} hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-4 px-4 rounded-lg font-medium cursor-pointer block w-full text-left`}>
                <i className="fas fa-blog w-5 mr-3"></i>
                Blog
              </button>
              
              <button onClick={navigateToFAQ} className={`mobile-nav-item ${isActive('/faq') ? 'text-blue-600 bg-blue-50' : 'text-gray-700'} hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-4 px-4 rounded-lg font-medium cursor-pointer block w-full text-left`}>
                <i className="fas fa-question-circle w-5 mr-3"></i>
                FAQ
              </button>
            </nav>
            
            {/* Mobile contact section */}
            <div className="mt-auto px-6 py-6 space-y-4 border-t border-gray-200 bg-white">
              <a 
                href="tel:720-360-8546" 
                onClick={handleMobileNavClick}
                className="flex items-center justify-center py-4 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md"
              >
                <i className="fas fa-phone mr-3"></i>
                Call Now: 720-360-8546
              </a>
              
              <button onClick={navigateToContact} className="flex items-center justify-center py-4 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md cursor-pointer w-full">
                <i className="fas fa-quote-left mr-3"></i>
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
