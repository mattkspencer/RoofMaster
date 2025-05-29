import { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

const ArvadaRoofing = () => {
  useEffect(() => {
    document.title = "Arvada Roof Repair | Licensed Roofer | Spencer Roofing Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional Arvada roof repair and roofing company serving Arvada CO. Licensed Colorado roofer with storm damage restoration. Call (720) 360-8546!");
    }
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: 'Arvada Roofing', path: '/arvada-roof-repair', active: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Arvada Roof Repair - Licensed Roofing Company
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl">
              Expert Arvada roof repair and roofing services. Protecting Arvada homes from Colorado's severe weather with professional roofing solutions since 2012.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Arvada Roofing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Arvada Roof Repair</h3>
              <p className="text-gray-600">Expert roof repair services for Arvada homes damaged by hail, wind, snow, and Colorado's challenging Front Range weather.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Complete Roof Replacement</h3>
              <p className="text-gray-600">Full roof replacement services for Arvada properties using premium materials engineered for Colorado's climate.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Storm Damage Restoration</h3>
              <p className="text-gray-600">24/7 emergency response for Arvada storm damage. Professional insurance claim assistance and rapid restoration.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Roofing Arvada</h3>
              <p className="text-gray-600">Professional commercial roofing services for Arvada businesses, including flat roof systems and maintenance programs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gutter Services</h3>
              <p className="text-gray-600">Complete gutter installation, repair, and cleaning services to protect Arvada homes from water damage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Roof Inspections</h3>
              <p className="text-gray-600">Thorough roof inspections for Arvada properties, including insurance documentation and preventive assessments.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Spencer Roofing in Arvada?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Arvada Roofing Expertise</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Licensed & Insured Colorado Contractor
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  12+ Years Serving Arvada & Northwest Metro
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Local Arvada References Available
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Arvada Weather Challenges</h3>
              <p className="text-gray-600 mb-4">
                Arvada's northwest Denver metro location creates unique roofing challenges that require specialized expertise:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Severe hailstorms from foothills convergence</li>
                <li>• Heavy snow loads from upslope weather patterns</li>
                <li>• Chinook winds causing pressure damage</li>
                <li>• High altitude UV degradation</li>
                <li>• Rapid temperature swings</li>
                <li>• Ice dam formation in winter months</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Arvada Neighborhoods We Serve</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Spencer Roofing provides professional roofing services throughout Arvada and surrounding communities:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
              <div>• Olde Town Arvada</div>
              <div>• Candelas</div>
              <div>• Leyden Rock</div>
              <div>• Berkeley</div>
              <div>• Wheat Ridge (portions)</div>
              <div>• Ralston Creek</div>
              <div>• Van Bibber Creek</div>
              <div>• Arvada Plaza</div>
              <div>• Two Creeks</div>
            </div>
            <p className="text-gray-600 mt-6">
              <strong>Service Area:</strong> We serve Arvada and surrounding areas within 25 miles, including parts of Jefferson and Adams counties.
            </p>
          </div>
        </section>
      </div>

      <CTASection 
        title="Ready for Your Arvada Roofing Project?"
        text="Contact Arvada's trusted roofing company for a free estimate. Licensed, insured, and committed to protecting your Arvada property."
        buttonText="Get Free Estimate"
        buttonLink="#contact"
      />

      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
};

export default ArvadaRoofing;