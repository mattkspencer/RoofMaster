import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold">
                <span className="text-white">Spencer</span>
                <span className="text-blue-400">Roofing</span>
              </span>
            </div>
            <p className="mb-6 text-gray-300">
              Your trusted roofing project manager for the Denver metropolitan area, specializing in residential, commercial, and insurance claim assistance.
            </p>
            <div className="flex space-x-4" role="navigation" aria-label="Social media links">
              <a 
                href="https://www.facebook.com/spencerroofingsolutions" 
                className="text-white hover:text-blue-400 transition-colors" 
                aria-label="Visit Spencer Roofing Solutions on Facebook"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f text-xl" aria-hidden="true"></i>
              </a>
              <a 
                href="https://www.instagram.com/spencerroofingsolutions" 
                className="text-white hover:text-blue-400 transition-colors" 
                aria-label="Visit Spencer Roofing Solutions on Instagram"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl" aria-hidden="true"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/spencer-roofing-solutions" 
                className="text-white hover:text-blue-400 transition-colors" 
                aria-label="Visit Spencer Roofing Solutions on LinkedIn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in text-xl" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          
          <nav aria-labelledby="services-heading">
            <h3 id="services-heading" className="text-xl font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-gray-300" role="list">
              <li>
                <Link href="/services/residential-roofing" className="hover:text-blue-400 transition-colors">
                  Residential Roofing
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-roofing" className="hover:text-blue-400 transition-colors">
                  Commercial Roofing
                </Link>
              </li>
              <li>
                <Link href="/services/roof-repair" className="hover:text-blue-400 transition-colors">
                  Roof Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/insurance-claims" className="hover:text-blue-400 transition-colors">
                  Insurance Claims
                </Link>
              </li>
              <li>
                <Link href="/services/gutter-services" className="hover:text-blue-400 transition-colors">
                  Gutter Installation
                </Link>
              </li>
            </ul>
          </nav>
          
          <nav aria-labelledby="resources-heading">
            <h3 id="resources-heading" className="text-xl font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3 text-gray-300" role="list">
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog/roofing-materials" className="hover:text-blue-400 transition-colors">
                  Roofing Materials
                </Link>
              </li>
              <li>
                <Link href="/services/insurance-claims" className="hover:text-blue-400 transition-colors">
                  Insurance Process
                </Link>
              </li>
              <li>
                <Link href="/blog/maintenance-tips" className="hover:text-blue-400 transition-colors">
                  Maintenance Tips
                </Link>
              </li>
            </ul>
          </nav>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <i className="fas fa-phone mr-3 text-blue-400"></i>
                <a href="tel:720-360-8546" className="hover:text-blue-400 transition-colors">720-360-8546</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-400"></i>
                <a href="mailto:mattkspencer@gmail.com" className="hover:text-blue-400 transition-colors">mattkspencer@gmail.com</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3 text-blue-400"></i>
                <span>Englewood, Colorado</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-blue-400"></i>
                <span>Mon-Fri: 8am-6pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Spencer Roofing Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
