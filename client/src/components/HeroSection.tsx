import { Link } from 'wouter';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32">
      {/* Denver skyline with mountains in background */}
      <div className="absolute inset-0 z-0 bg-neutral-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark/80 to-primary-dark/60 z-10"></div>
        {/* A panoramic view of Denver skyline with mountains in background */}
        <img 
          src="https://images.unsplash.com/photo-1546156929-a4c0ac411f47?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Denver skyline with mountains" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
            Your Trusted Roofing Project Manager for the Denver Metro Area
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Expert roofing solutions for residential and commercial properties, 
            specializing in storm damage repair and insurance claim assistance.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <div className="bg-secondary hover:bg-secondary-dark text-white text-center font-semibold py-3 px-6 rounded-md transition-colors cursor-pointer shadow-lg">
                Get a Free Inspection
              </div>
            </Link>
            <Link href="/services/residential-roofing">
              <div className="bg-primary-dark hover:bg-primary border-2 border-white text-white text-center font-semibold py-3 px-6 rounded-md transition-colors cursor-pointer shadow-lg">
                Explore Services
              </div>
            </Link>
          </div>
        </div>
        
        <div className="absolute right-4 bottom-0 transform translate-y-1/2 bg-white rounded-lg shadow-xl p-4 hidden md:block">
          <p className="font-bold text-lg mb-1">Emergency Roof Repairs?</p>
          <p className="text-lg mb-2">Call us now:</p>
          <a href="tel:720-360-8546" className="text-2xl font-bold text-secondary hover:text-secondary-dark transition-colors">
            720-360-8546
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
