import { Link } from 'wouter';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[550px] py-20 flex items-center">
      {/* Denver skyline with mountains in background */}
      <div className="absolute inset-0 z-0">
        {/* A panoramic view of Denver skyline with mountains - the beautiful image you liked */}
        <img 
          src="https://images.unsplash.com/photo-1546156929-a4c0ac411f47?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Denver skyline with mountains" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container-custom relative z-20">
        <div className="max-w-3xl text-white">
          <h1 className="text-white mb-8">
            Your Trusted Roofing <br className="hidden md:block" />
            Partner in the <br className="hidden md:block" />
            Denver Metro Area
          </h1>
          <p className="lead text-gray-100 mb-10 max-w-2xl">
            Expert roofing solutions for residential and commercial properties, 
            specializing in storm damage repair and insurance claim assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/contact">
              <div className="btn-primary cursor-pointer text-center inline-block">
                Get a Free Inspection
              </div>
            </Link>
            <Link href="/services/residential-roofing">
              <div className="btn-secondary cursor-pointer text-center inline-block">
                Explore Services
              </div>
            </Link>
          </div>
        </div>
        
        <div className="absolute right-4 bottom-0 transform translate-y-1/2 bg-white rounded-lg shadow-xl p-4 hidden md:block">
          <p className="font-bold text-lg mb-1">Emergency Roof Repairs?</p>
          <p className="text-sm mb-2">Call us now:</p>
          <a href="tel:720-360-8546" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
            720-360-8546
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
