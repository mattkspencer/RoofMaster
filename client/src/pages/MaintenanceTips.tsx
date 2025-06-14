import { Link } from 'wouter';
import Breadcrumb from '@/components/Breadcrumb';

const MaintenanceTips = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Resources', path: '/blog' },
    { label: 'Maintenance Tips', path: '/maintenance-tips', active: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbItems} />
      
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              30 Essential Roof Maintenance Tips for Denver Homeowners
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Keep your Denver home safe year-round with smart roof care—from snow removal and gutter cleaning to hail prep.
            </p>
            <Link href="/contact">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Professional Help Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Denver's unique climate—from intense hailstorms to heavy snow loads—demands proactive roof maintenance. 
              These essential tips will help you protect your investment and know when to call the professionals.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <div className="flex">
                <i className="fas fa-exclamation-triangle text-yellow-400 mt-1 mr-3"></i>
                <div>
                  <p className="font-semibold text-yellow-800">Safety First</p>
                  <p className="text-yellow-700">Many maintenance tasks can be done from the ground. Never attempt roof work in wet, icy, or windy conditions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <i className="fas fa-calendar-alt text-3xl text-primary mr-4"></i>
              <h2 className="text-3xl font-bold text-gray-800">Seasonal & Safety Essentials</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Spring & Fall Inspections</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Schedule professional roof inspections twice yearly
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Check for loose, missing, or damaged shingles
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Inspect flashing around chimneys and vents
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Look for granule accumulation in gutters
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Post-Storm & Hail Checks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Inspect immediately after severe weather
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Document damage with photos for insurance
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Check gutters, downspouts, and siding
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Look for dented vents and damaged skylights
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                  Need Help With Today's Roof Issue?
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <i className="fas fa-snowflake text-3xl text-blue-500 mr-4"></i>
              <h2 className="text-3xl font-bold text-gray-800">Winter Protection</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Ice Dam Prevention</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Ensure proper attic insulation (R-38 to R-60)
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Maintain attic ventilation systems
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Keep attic temperature consistent with outside
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Install heat cables on problem areas if needed
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Snow Load Management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-snowflake text-blue-500 mt-1 mr-2"></i>
                    Know your roof's snow-load capacity (typically 20-30 lbs per sq ft)
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-snowflake text-blue-500 mt-1 mr-2"></i>
                    Use a roof rake to remove snow from ground level
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-snowflake text-blue-500 mt-1 mr-2"></i>
                    Never climb on a snow-covered roof
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-snowflake text-blue-500 mt-1 mr-2"></i>
                    Clear snow from overhanging eaves first
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Prepare for Denver Winter—Ask Us How
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <i className="fas fa-tools text-3xl text-green-600 mr-4"></i>
              <h2 className="text-3xl font-bold text-gray-800">Year-Round Maintenance</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Gutter & Drainage Care</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Clean gutters and downspouts twice yearly
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Check for proper water flow and drainage
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Inspect gutter attachments and brackets
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Consider gutter guards for leaf protection
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Vegetation Management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Trim tree branches 6+ feet from roof
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Remove moss and algae growth promptly
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Clear debris from roof valleys
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                    Check for animal nesting in eaves
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Schedule a Pro Roof Check
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg p-8 mb-8">
            <div className="text-center mb-6">
              <i className="fas fa-hard-hat text-4xl mb-4"></i>
              <h2 className="text-3xl font-bold mb-4">When to Call the Professionals</h2>
              <p className="text-xl opacity-90 mb-6">
                Some tasks require expert knowledge and specialized equipment
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Call Us Immediately For:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-exclamation-triangle text-yellow-300 mt-1 mr-2"></i>
                    Storm damage assessment
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-exclamation-triangle text-yellow-300 mt-1 mr-2"></i>
                    Active leaks or water damage
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-exclamation-triangle text-yellow-300 mt-1 mr-2"></i>
                    Structural damage or sagging
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-exclamation-triangle text-yellow-300 mt-1 mr-2"></i>
                    Insurance claim assistance
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Services:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-300 mt-1 mr-2"></i>
                    Comprehensive roof inspections
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-300 mt-1 mr-2"></i>
                    Preventive maintenance programs
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-300 mt-1 mr-2"></i>
                    Emergency repair services
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-green-300 mt-1 mr-2"></i>
                    Roof replacement planning
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                  Get Expert Help Now - Call (720) 360-8546
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">How often should I inspect my roof in Denver?</h3>
                <p className="text-gray-700">
                  Denver homeowners should inspect their roofs twice yearly (spring and fall) and after any major storm event. 
                  Professional inspections are recommended annually due to our severe weather conditions.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">What maintenance tasks can I safely do myself?</h3>
                <p className="text-gray-700">
                  Safe DIY tasks include ground-level gutter cleaning, visual inspections with binoculars, clearing debris from 
                  gutters, and trimming nearby vegetation. Always avoid walking on the roof or working in dangerous conditions.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">How do I prevent ice dams on my Denver home?</h3>
                <p className="text-gray-700">
                  Prevent ice dams by ensuring proper attic insulation (R-38 to R-60), maintaining adequate ventilation, 
                  sealing air leaks, and keeping your attic temperature consistent with outside temperatures.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">When should I replace my roof instead of repairing it?</h3>
                <p className="text-gray-700">
                  Consider replacement if your roof is over 20 years old, has widespread damage affecting more than 30% of the surface, 
                  or if repair costs exceed 50% of replacement cost. Our experts can help you make this important decision.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-primary text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Extend Your Roof's Life?</h2>
            <p className="text-xl mb-6 opacity-90">
              Let our Denver roofing experts create a custom maintenance plan for your home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Free Inspection
                </button>
              </Link>
              <a href="tel:720-360-8546" className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-dark transition-colors">
                Call (720) 360-8546
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceTips;