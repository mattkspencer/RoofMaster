import { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

const EnglewoodRoofing = () => {
  useEffect(() => {
    document.title = "Englewood Roofing Services | Licensed Roofer | Spencer Roofing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional Englewood roofing services including repair, replacement & storm damage restoration. Licensed Colorado roofer serving Englewood CO. Free estimates!");
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: 'Englewood Roofing', path: '/englewood-roofing-services', active: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Englewood Roofing Services - Licensed & Insured Contractor
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Professional roofing services in Englewood, Colorado. From hail damage repairs to complete roof replacements, we've served Englewood homeowners and businesses since 2012.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Englewood Roofing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Roof Repair & Maintenance</h3>
              <p className="text-gray-600">Expert repair services for Englewood homes dealing with Colorado's harsh weather conditions including hail, wind, and snow damage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Roof Replacement</h3>
              <p className="text-gray-600">Full roof replacement services using premium materials designed to withstand Englewood's climate challenges.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Storm Damage Restoration</h3>
              <p className="text-gray-600">24/7 emergency response for storm damage. We work directly with insurance companies to restore your Englewood property.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gutter Installation & Repair</h3>
              <p className="text-gray-600">Professional gutter services to protect your Englewood home from Colorado's intense rainfall and snowmelt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Roofing Inspections</h3>
              <p className="text-gray-600">Comprehensive roof inspections for Englewood properties, including insurance claim documentation and preventive assessments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Roofing</h3>
              <p className="text-gray-600">Professional commercial roofing services for Englewood businesses, including flat roof systems and maintenance programs.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Spencer Roofing in Englewood?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Local Englewood Expertise</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Licensed & Insured Colorado Contractor (#12345)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  12+ Years Serving Denver Metro Area
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Local Englewood References Available
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Emergency Storm Damage Response
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Specialized in Colorado Weather Challenges
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Englewood Weather Considerations</h3>
              <p className="text-gray-600 mb-4">
                Englewood's location in the Denver metro area exposes homes to unique roofing challenges including:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Frequent hailstorms during spring and summer months</li>
                <li>• Heavy snow loads requiring proper structural support</li>
                <li>• High wind conditions from Front Range weather patterns</li>
                <li>• UV exposure from Colorado's high altitude and 300+ sunny days</li>
                <li>• Rapid temperature fluctuations causing material expansion/contraction</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Englewood Neighborhoods We Serve</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Spencer Roofing provides professional roofing services throughout Englewood and surrounding areas:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
              <div>• Belleview Farms</div>
              <div>• CherryKnolls</div>
              <div>• Englewood Village</div>
              <div>• Historic Downtown Englewood</div>
              <div>• Malley Drive Area</div>
              <div>• West Englewood</div>
            </div>
            <p className="text-gray-600 mt-6">
              <strong>Service Area:</strong> We serve Englewood and surrounding areas within 25 miles, including nearby communities in Arapahoe County.
            </p>
          </div>
        </section>
      </div>

      <CTASection 
        title="Ready for Your Englewood Roofing Project?"
        text="Get a free estimate from Englewood's trusted roofing contractor. Licensed, insured, and ready to protect your home."
        buttonText="Get Free Estimate"
        buttonLink="#contact"
      />

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default EnglewoodRoofing;