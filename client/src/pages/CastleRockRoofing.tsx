import { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

const CastleRockRoofing = () => {
  useEffect(() => {
    document.title = "Castle Rock Roofing Services | Licensed Roofer | Spencer Roofing Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional Castle Rock roofing services including repair, replacement & storm damage restoration. Licensed Colorado roofer serving Castle Rock CO. Call (720) 360-8546!");
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: 'Castle Rock Roofing', path: '/castle-rock-roofing-services', active: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Castle Rock Roofing Services - Licensed & Insured
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Expert Castle Rock roofing services for Colorado's growing community. Professional roof repair, replacement, and storm damage restoration since 2012.
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
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 text-center"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Castle Rock Roofing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Castle Rock Roof Repair</h3>
              <p className="text-gray-600">Expert roof repair services for Castle Rock homes damaged by Colorado's severe weather, including hail, wind, and snow.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Roof Replacement</h3>
              <p className="text-gray-600">Full roof replacement services for Castle Rock properties using premium materials designed for Colorado's climate challenges.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Storm Damage Restoration</h3>
              <p className="text-gray-600">24/7 emergency response for Castle Rock storm damage. Professional insurance claim assistance and rapid restoration services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Roofing</h3>
              <p className="text-gray-600">Professional commercial roofing services for Castle Rock businesses, including flat roof systems and preventive maintenance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gutter Installation & Repair</h3>
              <p className="text-gray-600">Complete gutter services to protect Castle Rock homes from Colorado's intense rainfall and snowmelt conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Roof Inspections</h3>
              <p className="text-gray-600">Comprehensive roof inspections for Castle Rock properties, including insurance documentation and preventive assessments.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Spencer Roofing in Castle Rock?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Castle Rock Roofing Expertise</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Licensed & Insured Colorado Contractor
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  12+ Years Serving Castle Rock & South Metro
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Local Castle Rock References Available
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Emergency Storm Response Team
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Insurance Claim Specialists
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Castle Rock Weather Challenges</h3>
              <p className="text-gray-600 mb-4">
                Castle Rock's location along the Palmer Divide creates unique weather patterns that require specialized roofing solutions:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Severe hailstorms from Palmer Divide convergence</li>
                <li>• Heavy snow accumulation from upslope conditions</li>
                <li>• High winds from exposed ridge location</li>
                <li>• Intense UV exposure at high elevation</li>
                <li>• Rapid weather changes and temperature swings</li>
                <li>• Ice dam formation in winter months</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Castle Rock Neighborhoods We Serve</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Spencer Roofing provides professional roofing services throughout Castle Rock and surrounding communities:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
              <div>• The Meadows</div>
              <div>• Crystal Valley</div>
              <div>• Founders Village</div>
              <div>• Castle Pines North</div>
              <div>• Happy Canyon</div>
              <div>• Castle Oaks</div>
              <div>• Plum Creek</div>
              <div>• Miller's Landing</div>
              <div>• Lagae Ranch</div>
            </div>
            <p className="text-gray-600 mt-6">
              <strong>Service Area:</strong> We serve Castle Rock and surrounding areas within 25 miles, including parts of Douglas, Jefferson, and Arapahoe counties.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Castle Rock Roofing Materials & Systems</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Premium Roofing Materials</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Class 4 impact-resistant shingles</li>
                <li>• Metal roofing systems</li>
                <li>• Luxury architectural shingles</li>
                <li>• Synthetic slate and cedar alternatives</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Energy-Efficient Solutions</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Cool roof technology</li>
                <li>• Solar-ready installations</li>
                <li>• Enhanced ventilation systems</li>
                <li>• Reflective roofing materials</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <CTASection 
        title="Ready for Your Castle Rock Roofing Project?"
        text="Contact Castle Rock's trusted roofing contractor for a free estimate. Licensed, insured, and committed to protecting your Castle Rock property."
        buttonText="Get Free Estimate"
        buttonLink="#contact"
      />

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default CastleRockRoofing;