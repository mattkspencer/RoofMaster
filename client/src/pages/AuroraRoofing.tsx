import { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

const AuroraRoofing = () => {
  useEffect(() => {
    document.title = "Aurora Roofing Company | Licensed Roofer | Spencer Roofing Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional Aurora roofing company providing roof replacement, repair & storm damage restoration. Licensed Colorado roofer serving Aurora CO. Free estimates!");
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: 'Aurora Roofing', path: '/aurora-roofing-company', active: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aurora Roofing Company - Licensed & Insured
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Trusted Aurora roofing company serving Colorado's third-largest city. Expert roof replacement, repair, and storm damage restoration for Aurora homes and businesses.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Aurora Roofing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Roof Replacement Aurora CO</h3>
              <p className="text-gray-600">Complete roof replacement services for Aurora homes using premium materials designed for Colorado's challenging climate.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Aurora Roof Repair</h3>
              <p className="text-gray-600">Expert roof repair services for Aurora properties damaged by hail, wind, snow loads, and other weather-related issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Storm Damage Restoration</h3>
              <p className="text-gray-600">24/7 emergency response for Aurora storm damage. We work directly with insurance companies for seamless claim processing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Roofing Aurora</h3>
              <p className="text-gray-600">Professional commercial roofing services for Aurora businesses, including flat roof systems and preventive maintenance programs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gutter Installation & Repair</h3>
              <p className="text-gray-600">Complete gutter services to protect Aurora homes from Colorado's intense rainfall and rapid snowmelt conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Roof Inspections</h3>
              <p className="text-gray-600">Thorough roof inspections for Aurora properties, including insurance claim documentation and preventive assessments.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Spencer Roofing in Aurora?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Aurora Roofing Expertise</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Licensed & Insured Colorado Contractor
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  12+ Years Serving Aurora & Denver Metro
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Local Aurora References Available
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Emergency Storm Response Team
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Insurance Claim Assistance
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Aurora Weather Challenges</h3>
              <p className="text-gray-600 mb-4">
                Aurora's eastern Denver metro location exposes properties to unique weather patterns requiring specialized roofing solutions:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Severe hailstorms from plains weather systems</li>
                <li>• Heavy snow accumulation and ice dam formation</li>
                <li>• High winds from open plains exposure</li>
                <li>• Intense UV radiation at high altitude</li>
                <li>• Rapid temperature fluctuations</li>
                <li>• Spring storm season damage</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Aurora Neighborhoods We Serve</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Spencer Roofing provides comprehensive roofing services throughout Aurora and surrounding communities:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
              <div>• Fitzsimons</div>
              <div>• Saddle Rock</div>
              <div>• Heather Gardens</div>
              <div>• Sable Ridge</div>
              <div>• Stapleton (Aurora portion)</div>
              <div>• Southshore</div>
              <div>• Aurora Hills</div>
              <div>• Meadowood</div>
              <div>• Village East</div>
            </div>
            <p className="text-gray-600 mt-6">
              <strong>Service Area:</strong> We serve Aurora and surrounding areas within 25 miles, including parts of Arapahoe, Adams, and Douglas counties.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Aurora Roofing Materials & Systems</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Residential Roofing Systems</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Impact-resistant asphalt shingles</li>
                <li>• Metal roofing systems</li>
                <li>• Tile roofing options</li>
                <li>• Synthetic roofing materials</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Commercial Roofing Systems</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• TPO membrane systems</li>
                <li>• EPDM rubber roofing</li>
                <li>• Modified bitumen systems</li>
                <li>• Built-up roofing (BUR)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <CTASection 
        title="Ready for Your Aurora Roofing Project?"
        text="Contact Aurora's trusted roofing company for a free estimate. Licensed, insured, and committed to protecting your Aurora property."
        buttonText="Get Free Estimate"
        buttonLink="#contact"
      />

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default AuroraRoofing;