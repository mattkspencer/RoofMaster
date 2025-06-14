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
              <span 
                className="text-white hover:text-blue-400 transition-colors cursor-default" 
                aria-label="Spencer Roofing Solutions Facebook (link coming soon)"
              >
                <i className="fab fa-facebook-f text-xl" aria-hidden="true"></i>
              </span>
              <span 
                className="text-white hover:text-blue-400 transition-colors cursor-default" 
                aria-label="Spencer Roofing Solutions Instagram (link coming soon)"
              >
                <i className="fab fa-instagram text-xl" aria-hidden="true"></i>
              </span>
              <span 
                className="text-white hover:text-blue-400 transition-colors cursor-default" 
                aria-label="Spencer Roofing Solutions LinkedIn (link coming soon)"
              >
                <i className="fab fa-linkedin-in text-xl" aria-hidden="true"></i>
              </span>
            </div>
          </div>
          
          <nav aria-labelledby="footer-services-heading">
            <h3 id="footer-services-heading" className="text-xl font-semibold mb-6 text-white">Services</h3>
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
                <Link href="/portfolio" className="hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services/insurance-claims" className="hover:text-blue-400 transition-colors">
                  Insurance Process
                </Link>
              </li>
              <li>
                <Link href="/maintenance-tips" className="hover:text-blue-400 transition-colors">
                  Maintenance Tips
                </Link>
              </li>
            </ul>
          </nav>
          
          <section aria-labelledby="contact-heading">
            <h3 id="contact-heading" className="text-xl font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-3 text-gray-300" role="list">
              <li className="flex items-center">
                <i className="fas fa-phone mr-3 text-blue-400" aria-hidden="true"></i>
                <a href="tel:720-360-8546" className="hover:text-blue-400 transition-colors" aria-label="Call Spencer Roofing at 720-360-8546">720-360-8546</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-400" aria-hidden="true"></i>
                <a href="mailto:mattkspencer@gmail.com" className="hover:text-blue-400 transition-colors" aria-label="Email Spencer Roofing at mattkspencer@gmail.com">mattkspencer@gmail.com</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3 text-blue-400" aria-hidden="true"></i>
                <span>Englewood, Colorado</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3 text-blue-400" aria-hidden="true"></i>
                <span>Mon-Fri: 8am-6pm</span>
              </li>
            </ul>
          </section>
        </div>
        
        <hr className="border-gray-700 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Spencer Roofing Solutions. All rights reserved.</p>
          </div>
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