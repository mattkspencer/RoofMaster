import { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

const LittletonRoofing = () => {
  useEffect(() => {
    document.title = "Littleton Roof Replacement | Licensed Roofer | Spencer Roofing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional Littleton roof replacement and repair services. Licensed Colorado roofer serving Littleton CO with storm damage restoration. Call (720) 360-8546!");
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: 'Littleton Roofing', path: '/littleton-roof-replacement', active: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Littleton Roof Replacement - Licensed Colorado Roofer
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Expert Littleton roof replacement and repair services. Protecting Littleton homes from Colorado's harsh weather with premium roofing solutions since 2012.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:720-360-8546"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 text-center"
              >
                Call (720) 360-8546
              </a>
              <a
                href="#contact"
                className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 text-center"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Littleton Roofing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Littleton Roof Replacement</h3>
              <p className="text-gray-600">Complete roof replacement services for Littleton homes using premium materials engineered for Colorado's Front Range climate.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Roof Repair Services</h3>
              <p className="text-gray-600">Expert roof repair for Littleton properties damaged by hail, wind, snow loads, and Colorado's extreme weather conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Storm Damage Restoration</h3>
              <p className="text-gray-600">Emergency storm damage response for Littleton homes. Professional insurance claim assistance and rapid restoration services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gutter Installation & Repair</h3>
              <p className="text-gray-600">Professional gutter services protecting Littleton homes from Colorado's intense rainfall and mountain snowmelt runoff.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Roof Inspections</h3>
              <p className="text-gray-600">Comprehensive roof inspections for Littleton properties, including pre-purchase evaluations and insurance documentation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Roofing</h3>
              <p className="text-gray-600">Commercial roofing services for Littleton businesses, including flat roof systems and preventive maintenance programs.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Littleton Roofing Company?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Local Littleton Expertise</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Licensed & Insured Colorado Contractor
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  12+ Years Serving Littleton & South Metro
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Local Littleton References Available
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  24/7 Emergency Storm Response
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Insurance Claim Specialists
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Littleton Climate Considerations</h3>
              <p className="text-gray-600 mb-4">
                Littleton's location in the South Denver metro creates specific roofing challenges that require expert knowledge:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Severe hailstorms from foothills weather patterns</li>
                <li>• Heavy snow loads from proximity to mountains</li>
                <li>• Chinook wind damage and pressure changes</li>
                <li>• High altitude UV exposure and material degradation</li>
                <li>• Rapid freeze-thaw cycles affecting roof structure</li>
                <li>• Palmer Divide weather system impacts</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Littleton Neighborhoods We Serve</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Spencer Roofing provides professional roofing services throughout Littleton and surrounding areas:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
              <div>• Highlands Ranch (Littleton portion)</div>
              <div>• Ken Caryl</div>
              <div>• Chatfield</div>
              <div>• Columbine</div>
              <div>• Bowles</div>
              <div>• Littleton Village</div>
              <div>• Centennial (portions)</div>
              <div>• Deer Creek</div>
              <div>• South Valley</div>
            </div>
            <p className="text-gray-600 mt-6">
              <strong>Service Area:</strong> We serve Littleton and surrounding areas within 25 miles, including parts of Jefferson, Arapahoe, and Douglas counties.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Littleton Roofing Materials We Install</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Impact-Resistant Shingles</h4>
              <p className="text-gray-600">Class 4 impact-resistant asphalt shingles designed to withstand Littleton's frequent hailstorms and severe weather.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Metal Roofing Systems</h4>
              <p className="text-gray-600">Durable metal roofing options perfect for Littleton homes, offering superior longevity and energy efficiency.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Tile & Slate Options</h4>
              <p className="text-gray-600">Premium tile and slate roofing systems that complement Littleton's architectural styles and weather requirements.</p>
            </div>
          </div>
        </section>
      </div>

      <CTASection 
        title="Ready for Your Littleton Roofing Project?"
        text="Contact Littleton's trusted roofing contractor for a free estimate. Licensed, insured, and committed to protecting your Littleton home."
        buttonText="Get Free Estimate"
        buttonLink="#contact"
      />

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default LittletonRoofing;