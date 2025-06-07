import { useState } from 'react';
import { Link } from 'wouter';
import { trackEvent } from '@/lib/analytics';

interface PortfolioItem {
  image: string;
  title: string;
  location: string;
  description: string;
  category: string;
}

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems: PortfolioItem[] = [
    {
      image: "https://picsum.photos/600/400?random=50",
      title: "Asphalt Shingle Roof Replacement",
      location: "Highlands Ranch, CO",
      description: "Complete replacement of storm-damaged roof with architectural shingles and upgraded ventilation system.",
      category: "residential"
    },
    {
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "TPO Commercial Roof Installation",
      location: "Denver, CO",
      description: "Installation of 20,000 sq. ft. TPO roofing system for a local business complex with improved drainage.",
      category: "commercial"
    },
    {
      image: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Hail Damage Insurance Claim",
      location: "Aurora, CO",
      description: "Successfully processed insurance claim and replaced severely hail-damaged roof and gutters.",
      category: "insurance"
    }
  ];

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    trackEvent('portfolio_filter', 'user_interaction', filter);
  };

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-sans mb-4">Our Recent Projects</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Browse through our portfolio of completed roofing projects across the Denver metropolitan area.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            className={`filter-btn px-4 py-2 rounded-md transition-colors ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-neutral-light hover:bg-primary hover:text-white'}`}
            onClick={() => handleFilterChange('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn px-4 py-2 rounded-md transition-colors ${activeFilter === 'residential' ? 'bg-primary text-white' : 'bg-neutral-light hover:bg-primary hover:text-white'}`}
            onClick={() => handleFilterChange('residential')}
          >
            Residential
          </button>
          <button 
            className={`filter-btn px-4 py-2 rounded-md transition-colors ${activeFilter === 'commercial' ? 'bg-primary text-white' : 'bg-neutral-light hover:bg-primary hover:text-white'}`}
            onClick={() => handleFilterChange('commercial')}
          >
            Commercial
          </button>
          <button 
            className={`filter-btn px-4 py-2 rounded-md transition-colors ${activeFilter === 'repair' ? 'bg-primary text-white' : 'bg-neutral-light hover:bg-primary hover:text-white'}`}
            onClick={() => handleFilterChange('repair')}
          >
            Repairs
          </button>
          <button 
            className={`filter-btn px-4 py-2 rounded-md transition-colors ${activeFilter === 'insurance' ? 'bg-primary text-white' : 'bg-neutral-light hover:bg-primary hover:text-white'}`}
            onClick={() => handleFilterChange('insurance')}
          >
            Insurance Claims
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="portfolio-item bg-neutral-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.location}</p>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <Link href={`/portfolio/${index}`} className="text-primary hover:text-primary-dark font-semibold">
                  View Project Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
