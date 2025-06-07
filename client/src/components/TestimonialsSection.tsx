import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';

interface Testimonial {
  rating: number;
  content: string;
  author: string;
  location: string;
}

const TestimonialsSection = () => {
  const testimonialContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials: Testimonial[] = [
    {
      rating: 5.0,
      content: "Spencer was excellent throughout our entire insurance claim process. After a major hailstorm, he helped us document everything, dealt with our insurance adjuster, and made sure we got a beautiful new roof. Highly recommend!",
      author: "Robert Johnson",
      location: "Centennial, CO"
    },
    {
      rating: 5.0,
      content: "Professional, responsive and extremely knowledgeable. Our commercial property needed a complete roof replacement, and Spencer managed the entire project with minimal disruption to our business. Outstanding service!",
      author: "Sarah Williams",
      location: "Denver, CO"
    },
    {
      rating: 4.5,
      content: "We had a leak during a major storm and Spencer was out to our house within hours. The repair was done quickly and professionally. He also helped us understand what maintenance we needed to prevent future issues.",
      author: "Michael & Lisa Thompson",
      location: "Lakewood, CO"
    },
    {
      rating: 5.0,
      content: "The level of expertise and attention to detail was impressive. Spencer helped us select the perfect roofing material for our home and oversaw the installation process from start to finish. Very satisfied with the results!",
      author: "David Martinez",
      location: "Aurora, CO"
    }
  ];

  const handlePrev = () => {
    if (testimonialContainerRef.current) {
      testimonialContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (testimonialContainerRef.current) {
      testimonialContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const checkScrollability = () => {
    if (testimonialContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = testimonialContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  useEffect(() => {
    const container = testimonialContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      // Initial check
      checkScrollability();
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScrollability);
      }
    };
  }, []);

  // Render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    // Return star components
    return (
      <div className="text-yellow-400 flex">
        {stars}
      </div>
    );
  };

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-sans mb-4">What Our Clients Say</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Hear from homeowners and businesses across the Denver metro area who have trusted Spencer Roofing Solutions.
          </p>
        </div>
        
        <div className="relative">
          <button 
            id="prev-testimonial" 
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg focus:outline-none hidden md:block ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePrev}
            disabled={!canScrollLeft}
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left text-primary text-xl"></i>
          </button>
          
          <div 
            ref={testimonialContainerRef}
            className="testimonial-container flex overflow-x-auto space-x-6 py-4 px-2 -mx-2"
            onScroll={checkScrollability}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card bg-white rounded-lg shadow-md p-6 flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
              >
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                  <p className="ml-2 text-gray-600">{testimonial.rating.toFixed(1)}</p>
                </div>
                <p className="text-gray-600 mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center text-primary">
                    <i className="fas fa-user"></i>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            id="next-testimonial" 
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:shadow-lg focus:outline-none hidden md:block ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNext}
            disabled={!canScrollRight}
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right text-primary text-xl"></i>
          </button>
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
