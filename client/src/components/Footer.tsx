import { Link } from 'wouter';
import TrustBadges from './TrustBadges';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold">
                <span className="text-white">Spencer</span>
                <span className="text-secondary">Roofing</span>
              </span>
            </div>
            <p className="mb-4 opacity-80">
              Your trusted roofing project manager for the Denver metropolitan area, specializing in residential, commercial, and insurance claim assistance.
            </p>
            
            {/* Trust Badges in Footer */}
            <div className="mb-6">
              <TrustBadges variant="dark" />
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/spencerroofingsolutions" 
                className="text-white hover:text-secondary transition-colors" 
                aria-label="Facebook"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a 
                href="https://www.instagram.com/spencerroofingsolutions" 
                className="text-white hover:text-secondary transition-colors" 
                aria-label="Instagram"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/spencer-roofing-solutions" 
                className="text-white hover:text-secondary transition-colors" 
                aria-label="LinkedIn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3 opacity-80">
              <li>
                <Link href="/services/residential-roofing">
                  <a className="hover:text-secondary transition-colors">Residential Roofing</a>
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-roofing">
                  <a className="hover:text-secondary transition-colors">Commercial Roofing</a>
                </Link>
              </li>
              <li>
                <Link href="/services/roof-repair">
                  <a className="hover:text-secondary transition-colors">Roof Repairs</a>
                </Link>
              </li>
              <li>
                <Link href="/services/insurance-claims">
                  <a className="hover:text-secondary transition-colors">Insurance Claims</a>
                </Link>
              </li>
              <li>
                <Link href="/services/gutter-services">
                  <a className="hover:text-secondary transition-colors">Gutter Installation</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 opacity-80">
              <li>
                <Link href="/blog">
                  <a className="hover:text-secondary transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="hover:text-secondary transition-colors">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/blog/roofing-materials">
                  <a className="hover:text-secondary transition-colors">Roofing Materials</a>
                </Link>
              </li>
              <li>
                <Link href="/services/insurance-claims">
                  <a className="hover:text-secondary transition-colors">Insurance Process</a>
                </Link>
              </li>
              <li>
                <Link href="/blog/maintenance-tips">
                  <a className="hover:text-secondary transition-colors">Maintenance Tips</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 opacity-80">
              <li className="flex items-center">
                <i className="fas fa-phone mr-3"></i>
                <a href="tel:720-360-8546" className="hover:text-secondary transition-colors">720-360-8546</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                <a href="mailto:mattkspencer@gmail.com" className="hover:text-secondary transition-colors">mattkspencer@gmail.com</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3"></i>
                <span>Englewood, Colorado</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3"></i>
                <span>Mon-Fri: 8am-6pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Spencer Roofing Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm opacity-80">
            <Link href="/privacy-policy">
              <a className="hover:text-secondary transition-colors">Privacy Policy</a>
            </Link>
            <Link href="/terms-of-service">
              <a className="hover:text-secondary transition-colors">Terms of Service</a>
            </Link>
            <Link href="/sitemap">
              <a className="hover:text-secondary transition-colors">Sitemap</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
