import { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

const DenverRoofing = () => {
  useEffect(() => {
    document.title = "Denver Roofing Contractor | Licensed Roofer | Spencer Roofing Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional Denver roofing contractor providing roof repair, replacement & storm damage services. Licensed Colorado roofer serving Denver metro. Call (720) 360-8546!");
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: 'Denver Roofing', path: '/denver-roofing-contractor', active: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Denver Roofing Contractor - Licensed & Insured
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Premier Denver roofing contractor specializing in residential and commercial roofing services. Protecting Denver homes and businesses from Colorado's extreme weather since 2012.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Denver Roofing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Roof Repair Denver</h3>
              <p className="text-gray-600">Expert roof repair services for Denver homes damaged by hail, wind, snow, and Colorado's intense weather patterns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Denver Roof Replacement</h3>
              <p className="text-gray-600">Complete roof replacement using premium materials engineered for Denver's climate and altitude challenges.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Roofing Denver</h3>
              <p className="text-gray-600">Professional commercial roofing services for Denver businesses, including flat roofs, maintenance, and emergency repairs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Storm Damage Restoration</h3>
              <p className="text-gray-600">24/7 emergency storm damage response for Denver properties. Insurance claim assistance and rapid restoration services.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gutter Services Denver</h3>
              <p className="text-gray-600">Professional gutter installation, repair, and cleaning services to protect Denver homes from water damage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Roof Inspections</h3>
              <p className="text-gray-600">Comprehensive roof inspections for Denver properties, including pre-purchase evaluations and insurance documentation.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Denver Roofing Company?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Denver Roofing Expertise</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Licensed Colorado Roofing Contractor
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  12+ Years Serving Denver Metro Area
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Thousands of Satisfied Denver Customers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Emergency Response Throughout Denver
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Insurance Claim Specialists
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Denver Climate Challenges</h3>
              <p className="text-gray-600 mb-4">
                Denver's unique Front Range location creates specific roofing challenges that require expert knowledge:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Severe hailstorms with golf ball-sized hail</li>
                <li>• Heavy snow loads from mountain weather systems</li>
                <li>• Chinook winds exceeding 100 mph</li>
                <li>• Extreme UV exposure at 5,280 feet elevation</li>
                <li>• Rapid freeze-thaw cycles damaging roofing materials</li>
                <li>• Sudden temperature drops of 40+ degrees</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Denver Neighborhoods We Serve</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Our Denver roofing contractors provide professional services throughout the Mile High City:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-700">
              <div>• Capitol Hill</div>
              <div>• Cherry Creek</div>
              <div>• Highland</div>
              <div>• Park Hill</div>
              <div>• Washington Park</div>
              <div>• LoDo (Lower Downtown)</div>
              <div>• Stapleton</div>
              <div>• Green Valley Ranch</div>
              <div>• Glendale</div>
              <div>• Rose Medical District</div>
              <div>• Montclair</div>
              <div>• Congress Park</div>
            </div>
            <p className="text-gray-600 mt-6">
              <strong>Service Area:</strong> We serve all of Denver and the greater Denver metro area within a 30-mile radius, including surrounding counties.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Denver Roofing Materials We Install</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Asphalt Shingles</h4>
              <p className="text-gray-600">Premium asphalt shingles designed for Denver's climate, offering excellent hail resistance and wind protection.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Metal Roofing</h4>
              <p className="text-gray-600">Durable metal roofing systems perfect for Denver homes, providing superior longevity and energy efficiency.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Tile Roofing</h4>
              <p className="text-gray-600">Clay and concrete tile roofing options that complement Denver's architectural styles and weather requirements.</p>
            </div>
          </div>
        </section>
      </div>

      <CTASection 
        title="Ready for Your Denver Roofing Project?"
        text="Contact Denver's most trusted roofing contractor for a free estimate. Licensed, insured, and committed to protecting your Denver property."
        buttonText="Get Free Estimate"
        buttonLink="#contact"
      />

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default DenverRoofing;