import { useState } from 'react';
import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { trackEvent } from '@/lib/analytics';
import { PortfolioProject } from '@/../../shared/schema';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const { data: portfolioItems = [], isLoading } = useQuery({
    queryKey: ['/api/portfolio'],
    queryFn: async () => {
      const response = await fetch('/api/portfolio');
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio projects');
      }
      return response.json();
    }
  });

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    trackEvent('portfolio_filter', 'user_interaction', filter);
  };

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter((item: PortfolioProject) => item.category === activeFilter);

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
            className={`filter-btn px-4 py-2 rounded-md transition-colors ${activeFilter === 'insurance' ? 'bg-primary text-white' : 'bg-neutral-light hover:bg-primary hover:text-white'}`}
            onClick={() => handleFilterChange('insurance')}
          >
            Insurance Claims
          </button>
        </div>
        
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item: PortfolioProject) => (
              <div 
                key={item.id}
                className="portfolio-item bg-neutral-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                {item.imageUrl && item.imageUrl.startsWith('/images/portfolio/') ? (
                  <picture>
                    <source 
                      media="(max-width: 768px)" 
                      srcSet={`${item.imageUrl.replace('.jpg', '-thumbnail.webp')}`} 
                      type="image/webp"
                    />
                    <source 
                      media="(max-width: 768px)" 
                      srcSet={`${item.imageUrl.replace('.jpg', '-thumbnail.jpg')}`} 
                      type="image/jpeg"
                    />
                    <source 
                      srcSet={`${item.imageUrl.replace('.jpg', '-medium.webp')}`} 
                      type="image/webp"
                    />
                    <source 
                      srcSet={`${item.imageUrl.replace('.jpg', '-medium.jpg')}`} 
                      type="image/jpeg"
                    />
                    <img 
                      src={item.imageUrl}
                      alt={item.title === 'Asphalt Shingle Roof Replacement' ? 
                        'Professional asphalt shingle roof replacement project showcase' : 
                        `${item.title} roofing project in ${item.location}`}
                      className="w-full h-60 object-cover"
                      width="600"
                      height="400"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                ) : (
                  <img 
                    src={item.imageUrl} 
                    alt={`${item.title} roofing project in ${item.location}`}
                    className="w-full h-60 object-cover"
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-500 mb-2">{item.location}</p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link href={`/portfolio/${item.id}`} className="text-blue-800 hover:text-blue-900 font-semibold underline">
                    View Project Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
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