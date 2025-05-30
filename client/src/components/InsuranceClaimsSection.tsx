import { Link } from 'wouter';

const InsuranceClaimsSection = () => {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            {/* An image showing hail damaged roof */}
            <img 
              src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Storm damaged roof inspection" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold font-sans mb-6">Expert Insurance Claim Assistance</h2>
            <p className="text-lg mb-4">
              Denver's weather can be brutal on your roof. When storm damage hits, navigating insurance claims can be overwhelming. We specialize in guiding you through every step of the process.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Free Inspection</h3>
                  <p className="text-gray-600">We thoroughly document all storm damage with photos and detailed reports.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Claim Filing Assistance</h3>
                  <p className="text-gray-600">We help you initiate and file your insurance claim with proper documentation.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Adjuster Meeting</h3>
                  <p className="text-gray-600">We meet with your insurance adjuster to ensure all damage is properly identified.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">Project Management</h3>
                  <p className="text-gray-600">Once approved, we coordinate and oversee the entire repair or replacement process.</p>
                </div>
              </div>
            </div>
            
            <Link href="/contact">
              <a className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors">
                Schedule a Free Inspection
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceClaimsSection;
