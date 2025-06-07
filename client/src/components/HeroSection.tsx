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
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight mb-6">
            Your Trusted Roofing <br className="hidden md:block" />
            Partner in the <br className="hidden md:block" />
            Denver Metro Area
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Expert roofing solutions for residential and commercial properties, 
            specializing in storm damage repair and insurance claim assistance.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white text-center font-semibold py-3 px-8 rounded-md transition-colors cursor-pointer shadow-lg inline-block">
              Get a Free Inspection
            </Link>
            <Link href="/services/residential-roofing" className="bg-white hover:bg-gray-100 text-blue-800 text-center font-semibold py-3 px-8 rounded-md transition-colors cursor-pointer shadow-lg inline-block">
              Explore Services
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
