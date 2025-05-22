import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed w-full bg-white z-50 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <div className="text-2xl font-bold cursor-pointer">
              <span className="text-primary">Spencer</span>
              <span className="text-secondary">Roofing</span>
            </div>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          id="mobile-menu-button" 
          className="lg:hidden text-neutral-dark"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/">
            <div className={`nav-link ${isActive('/') ? 'active text-primary font-semibold' : 'hover:text-primary'} transition-colors cursor-pointer`}>
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className={`nav-link ${isActive('/about') ? 'active text-primary font-semibold' : 'hover:text-primary'} transition-colors cursor-pointer`}>
              About
            </div>
          </Link>
          <div className="relative group">
            <div className={`nav-link cursor-pointer hover:text-primary transition-colors flex items-center`}>
              Services <i className="fas fa-chevron-down ml-1 text-xs"></i>
            </div>
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-20 hidden group-hover:block">
              <Link href="/services/residential-roofing">
                <div className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors cursor-pointer">Residential Roofing</div>
              </Link>
              <Link href="/services/commercial-roofing">
                <div className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors cursor-pointer">Commercial Roofing</div>
              </Link>
              <Link href="/services/roof-repair">
                <div className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors cursor-pointer">Roof Repairs</div>
              </Link>
              <Link href="/services/insurance-claims">
                <div className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors cursor-pointer">Insurance Claims</div>
              </Link>
              <Link href="/services/gutter-services">
                <div className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors cursor-pointer">Gutter Services</div>
              </Link>
            </div>
          </div>
          <Link href="/portfolio">
            <div className={`nav-link ${isActive('/portfolio') ? 'active text-primary font-semibold' : 'hover:text-primary'} transition-colors cursor-pointer`}>
              Portfolio
            </div>
          </Link>
          <Link href="/blog">
            <div className={`nav-link ${isActive('/blog') ? 'active text-primary font-semibold' : 'hover:text-primary'} transition-colors cursor-pointer`}>
              Blog
            </div>
          </Link>
          <Link href="/contact">
            <div className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-2 px-4 rounded-md transition-colors cursor-pointer">
              Get a Free Quote
            </div>
          </Link>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      <div id="mobile-menu" className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white shadow-md`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <Link href="/">
            <div className={`nav-link ${isActive('/') ? 'active text-primary font-semibold' : ''} hover:text-primary transition-colors cursor-pointer`}>
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className={`nav-link ${isActive('/about') ? 'active text-primary font-semibold' : ''} hover:text-primary transition-colors cursor-pointer`}>
              About
            </div>
          </Link>
          <div className="py-1 border-b border-gray-100">
            <span className="text-gray-500 font-semibold">Services</span>
            <div className="ml-4 mt-2 space-y-2">
              <Link href="/services/residential-roofing">
                <div className="block hover:text-primary transition-colors cursor-pointer">Residential Roofing</div>
              </Link>
              <Link href="/services/commercial-roofing">
                <div className="block hover:text-primary transition-colors cursor-pointer">Commercial Roofing</div>
              </Link>
              <Link href="/services/roof-repair">
                <div className="block hover:text-primary transition-colors cursor-pointer">Roof Repairs</div>
              </Link>
              <Link href="/services/insurance-claims">
                <div className="block hover:text-primary transition-colors cursor-pointer">Insurance Claims</div>
              </Link>
              <Link href="/services/gutter-services">
                <div className="block hover:text-primary transition-colors cursor-pointer">Gutter Services</div>
              </Link>
            </div>
          </div>
          <Link href="/portfolio">
            <div className={`nav-link ${isActive('/portfolio') ? 'active text-primary font-semibold' : ''} hover:text-primary transition-colors cursor-pointer`}>
              Portfolio
            </div>
          </Link>
          <Link href="/blog">
            <div className={`nav-link ${isActive('/blog') ? 'active text-primary font-semibold' : ''} hover:text-primary transition-colors cursor-pointer`}>
              Blog
            </div>
          </Link>
          <Link href="/contact">
            <div className="bg-secondary hover:bg-secondary-dark text-white text-center font-semibold py-2 px-4 rounded-md transition-colors cursor-pointer">
              Get a Free Quote
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
