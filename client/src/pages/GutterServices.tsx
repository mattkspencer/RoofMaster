import { useEffect } from 'react';
import { Link } from 'wouter';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { trackEvent } from '@/lib/analytics';

const GutterServices = () => {
  useEffect(() => {
    document.title = "Gutter Installation & Repair | Spencer Roofing Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Professional gutter installation and repair services in Denver. Protect your home with seamless gutters, gutter guards, and downspout systems designed for Colorado's climate.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const handleCTAClick = () => {
    trackEvent('service_page_cta_click', 'gutter_services', 'contact');
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Services", path: "/#services" },
            { label: "Gutter Services", path: "/services/gutter-services", active: true }
          ]} 
        />
        
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Gutter Installation & Repair Services</h1>
          
          {/* Hero Section */}
          <div className="mb-16 relative rounded-lg overflow-hidden">
            <img 
              src="https://picsum.photos/800/400?random=80" 
              alt="Gutter installation on a home" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center max-w-3xl px-4">
                <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
                  Protect Your Home with Quality Gutter Systems
                </h2>
                <p className="text-lg text-white mb-6">
                  Expert gutter installation and repair services designed for Colorado's unique climate
                </p>
                <Link href="/contact">
                  <a 
                    className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors"
                    onClick={handleCTAClick}
                  >
                    Get a Free Estimate
                  </a>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Introduction Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Why Your Gutters Matter</h2>
              <p className="text-lg mb-8">
                In Colorado's climate of heavy snow, sudden rainstorms, and freeze-thaw cycles, a properly functioning gutter system is essential for protecting your home from water damage. Quality gutters direct water away from your foundation, prevent soil erosion, protect landscaping, and help prevent basement flooding and ice dams.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-home text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Foundation Protection</h3>
                <p className="text-gray-600">
                  Properly functioning gutters direct water away from your foundation, preventing expensive structural damage, settling, and cracks.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-tint-slash text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Prevents Water Damage</h3>
                <p className="text-gray-600">
                  Quality gutters protect your siding, windows, doors, and landscaping from water damage and premature deterioration.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-snowflake text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Reduces Ice Dams</h3>
                <p className="text-gray-600">
                  Properly installed gutters with adequate drainage help prevent ice dams, a common problem in Colorado winters that can damage your roof.
                </p>
              </div>
            </div>
          </div>
          
          {/* Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Gutter Services</h2>
            <p className="text-lg text-center max-w-4xl mx-auto mb-10">
              We provide comprehensive gutter solutions to meet the specific needs of your home and Colorado's unique climate challenges.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <i className="fas fa-ruler-combined text-6xl text-primary"></i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Seamless Gutter Installation</h3>
                  <p className="text-gray-600 mb-4">
                    Custom fabricated on-site to fit your home perfectly, seamless gutters eliminate most joints where leaks typically occur.
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Custom measured and cut for your home</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Variety of materials including aluminum, steel, and copper</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Multiple color options to complement your home</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Proper sizing for Colorado's heavy rain and snowmelt</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <i className="fas fa-tools text-6xl text-primary"></i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Gutter Repair & Maintenance</h3>
                  <p className="text-gray-600 mb-4">
                    Expert repair services to address leaks, sagging, and other gutter issues before they lead to expensive water damage.
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Leak detection and sealing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Sagging gutter correction</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Downspout repair and unclogging</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Hardware replacement and tightening</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <i className="fas fa-shield-alt text-6xl text-primary"></i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Gutter Guards</h3>
                  <p className="text-gray-600 mb-4">
                    Protect your gutters from debris and reduce maintenance with high-quality gutter guard systems designed for Colorado's pine needles and fall leaves.
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Multiple guard styles for different needs</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Micro-mesh options for fine debris protection</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Durable designs that stand up to snow loads</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Professional installation for optimal performance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <i className="fas fa-water text-6xl text-primary"></i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Downspout & Drainage Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Complete drainage solutions to effectively channel water away from your foundation and prevent erosion and flooding.
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Downspout installation and replacement</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Underground drainage systems</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Rain barrel integration for water conservation</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Decorative downspout options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Gutter Materials */}
          <div className="bg-neutral-light p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Gutter Material Options</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-10">
              We offer various gutter materials to suit your home's style, your budget, and Colorado's climate requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Aluminum</h3>
                <div className="h-40 bg-primary/5 rounded-md flex items-center justify-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1605118936262-0797bc7a82a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Aluminum gutters"
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Durability:</span>
                    <div className="flex">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="far fa-star text-primary"></i>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Cost:</span>
                    <div className="flex">
                      <i className="fas fa-dollar-sign text-primary"></i>
                      <i className="fas fa-dollar-sign text-primary"></i>
                      <i className="far fa-dollar-sign text-gray-300"></i>
                      <i className="far fa-dollar-sign text-gray-300"></i>
                      <i className="far fa-dollar-sign text-gray-300"></i>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Lifespan:</span>
                    <span>20+ years</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  The most popular choice for residential gutters, aluminum is lightweight, rust-resistant, and available in many colors. It performs well in Colorado's climate and offers excellent value.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Steel</h3>
                <div className="h-40 bg-primary/5 rounded-md flex items-center justify-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1575652567736-2eaf8336be07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Steel gutters"
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Durability:</span>
                    <div className="flex">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star-half-alt text-primary"></i>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Cost:</span>
                    <div className="flex">
                      <i className="fas fa-dollar-sign text-primary"></i>
                      <i className="fas fa-dollar-sign text-primary"></i>
                      <i className="fas fa-dollar-sign text-primary"></i>
                      <i className="far fa-dollar-sign text-gray-300"></i>
                      <i className="far fa-dollar-sign text-gray-300"></i>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Lifespan:</span>
                    <span>20-30 years</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Stronger than aluminum, steel gutters stand up extremely well to Colorado's heavy snow loads and can withstand impact from falling branches. Available in galvanized or coated options for rust resistance.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Copper</h3>
                <div className="h-40 bg-primary/5 rounded-md flex items-center justify-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1550614733-15b14e8c23d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Copper gutters"
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Durability:</span>
                    <div className="flex">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Cost:</span>
                    <div className="flex">
                      <i className="fas fa-dollar-sign text-primary"></i>
                      <i className="fas fa-dollar-sign text-primary"></i>
                      <i className="fas fa-dollar-sign text-primary"></i>
                      <i className="fas fa-dollar-sign text-primary"></i>
                      <i className="fas fa-dollar-sign text-primary"></i>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Lifespan:</span>
                    <span>50+ years</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  The premium choice for high-end homes, copper gutters offer unmatched longevity and develop a beautiful patina over time. They're extremely durable and add significant value and curb appeal to your home.
                </p>
              </div>
            </div>
            
            <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Gutter Sizes and Styles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Gutter Sizes</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-ruler-horizontal text-primary mt-1 mr-2"></i>
                      <div>
                        <span className="font-medium">5-inch K-style:</span>
                        <span className="text-gray-600 ml-2">Standard for most homes</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-ruler-horizontal text-primary mt-1 mr-2"></i>
                      <div>
                        <span className="font-medium">6-inch K-style:</span>
                        <span className="text-gray-600 ml-2">For larger roofs or high rainfall areas</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-ruler-horizontal text-primary mt-1 mr-2"></i>
                      <div>
                        <span className="font-medium">7-inch K-style or Box:</span>
                        <span className="text-gray-600 ml-2">For commercial buildings or extreme conditions</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Gutter Styles</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-home text-primary mt-1 mr-2"></i>
                      <div>
                        <span className="font-medium">K-Style:</span>
                        <span className="text-gray-600 ml-2">Decorative front resembling crown molding</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-home text-primary mt-1 mr-2"></i>
                      <div>
                        <span className="font-medium">Half-Round:</span>
                        <span className="text-gray-600 ml-2">Traditional look, often used with historic homes</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-home text-primary mt-1 mr-2"></i>
                      <div>
                        <span className="font-medium">Box/Square:</span>
                        <span className="text-gray-600 ml-2">Modern look with maximum water capacity</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Gutter Installation Process</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-10">
              We follow a meticulous process to ensure your new gutters perform perfectly for years to come.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">1</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Thorough Assessment</h3>
                  <p className="text-gray-600">
                    We begin with a comprehensive evaluation of your home's needs, considering roof size, pitch, water runoff patterns, and environmental factors specific to your property. This allows us to recommend the ideal gutter system for your situation.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">2</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Custom Measurements</h3>
                  <p className="text-gray-600">
                    We take precise measurements of your home to ensure perfect fitment. For seamless gutters, we note the exact dimensions needed for on-site fabrication, as well as determining the optimal placement for downspouts.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">3</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Material Selection</h3>
                  <p className="text-gray-600">
                    Based on your home's architecture, your preferences, and your budget, we help you select the ideal gutter material, style, and color. We bring samples so you can visualize how different options will look with your home's exterior.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">4</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Custom Fabrication</h3>
                  <p className="text-gray-600">
                    For seamless gutters, we fabricate them on-site using specialized equipment to ensure a perfect fit for your home. This eliminates unnecessary seams that can lead to leaks and ensures your gutters are precisely sized for your home's dimensions.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">5</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Professional Installation</h3>
                  <p className="text-gray-600">
                    Our experienced installers attach your new gutters with heavy-duty hangers spaced appropriately for Colorado's snow loads. We ensure proper slope for effective drainage and securely connect downspouts with sealed joints for leak-free performance.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">6</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Final Inspection & Cleanup</h3>
                  <p className="text-gray-600">
                    We thoroughly inspect the completed system, checking all slopes, joints, and connections. We test water flow and ensure proper drainage away from your foundation. Finally, we clean up completely, leaving your property spotless with a beautiful, functional new gutter system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Signs You Need New Gutters */}
          <div className="bg-primary/5 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Signs You Need New Gutters</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-10">
              If you're experiencing any of these issues, it may be time to replace your gutter system:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-md">
                <div className="flex items-start">
                  <i className="fas fa-water text-secondary text-xl mt-1 mr-3"></i>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Visible Cracks or Splits</h3>
                    <p className="text-gray-600">
                      Small cracks will eventually grow into large ones that can allow water to damage your fascia boards and foundation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md">
                <div className="flex items-start">
                  <i className="fas fa-level-down-alt text-secondary text-xl mt-1 mr-3"></i>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Sagging or Pulling Away</h3>
                    <p className="text-gray-600">
                      Gutters that sag or pull away from the house can't properly channel water and may eventually collapse.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md">
                <div className="flex items-start">
                  <i className="fas fa-tint text-secondary text-xl mt-1 mr-3"></i>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Water Marks or Peeling Paint</h3>
                    <p className="text-gray-600">
                      Water marks beneath gutters or peeling paint on your home's exterior indicate leaking or overflowing gutters.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md">
                <div className="flex items-start">
                  <i className="fas fa-seedling text-secondary text-xl mt-1 mr-3"></i>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Landscape Erosion</h3>
                    <p className="text-gray-600">
                      Eroded soil or damaged plants beneath your gutter line suggest improper drainage or overflow issues.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md">
                <div className="flex items-start">
                  <i className="fas fa-house-damage text-secondary text-xl mt-1 mr-3"></i>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Basement Water Issues</h3>
                    <p className="text-gray-600">
                      Water in your basement or crawl space may indicate that gutters aren't properly directing water away from your foundation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-md">
                <div className="flex items-start">
                  <i className="fas fa-wrench text-secondary text-xl mt-1 mr-3"></i>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Frequent Clogging</h3>
                    <p className="text-gray-600">
                      Gutters that clog constantly despite regular cleaning may be improperly sized or designed for your roof and local conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/contact">
                <a 
                  className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors"
                  onClick={handleCTAClick}
                >
                  Schedule a Free Gutter Inspection
                </a>
              </Link>
            </div>
          </div>
          
          {/* Benefits of Gutter Guards */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1560170412-0f7df0eb0fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Gutter guard installation" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Benefits of Gutter Guards</h2>
                <p className="text-lg mb-6">
                  Gutter guards are a valuable addition to any gutter system, especially in Colorado where pine needles, leaves, and debris can quickly clog conventional gutters.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Reduced Maintenance</h3>
                      <p className="text-gray-600">Significantly reduces the frequency and difficulty of gutter cleaning, a particularly dangerous task in Colorado's winter months.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Prevent Clogs</h3>
                      <p className="text-gray-600">Keeps leaves, pine needles, asphalt granules, and other debris from blocking gutters and downspouts.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Extended Gutter Life</h3>
                      <p className="text-gray-600">Prevents premature rust and deterioration by keeping gutters clean and reducing the weight of accumulated debris.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Fire Protection</h3>
                      <p className="text-gray-600">Helps protect your home from wildfires by preventing dry leaves and debris from collecting in gutters where embers could ignite them.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold mr-3">
                      <i className="fas fa-check"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Pest Prevention</h3>
                      <p className="text-gray-600">Keeps birds, squirrels, mice, and insects from nesting in your gutters and potentially entering your home.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Gutter FAQs</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How much do new gutters cost?</h3>
                <p className="text-gray-600">
                  Gutter costs vary depending on material, home size, and gutter style. Aluminum seamless gutters typically range from $8-12 per linear foot installed, while copper can cost $25-40 per linear foot. We provide detailed, transparent quotes after measuring your home, with most residential installations ranging from $1,500-3,500 for a complete system.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How long does gutter installation take?</h3>
                <p className="text-gray-600">
                  Most residential gutter installations can be completed in a single day. Larger homes or more complex installations may take 1-2 days. Factors affecting installation time include home size, accessibility, gutter material, and weather conditions. We'll provide a specific timeframe when we prepare your quote.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How often should gutters be cleaned?</h3>
                <p className="text-gray-600">
                  In Colorado, we recommend cleaning gutters at least twice yearly: in late spring after the cottonwood season and in late fall after leaves have dropped. Homes with many surrounding trees may require more frequent cleaning. Installing gutter guards can significantly reduce cleaning frequency.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Can gutters be installed in winter?</h3>
                <p className="text-gray-600">
                  Yes, we can install gutters year-round in Colorado, though we may need to schedule around snowstorms and extreme cold. Winter installations are often easier to schedule and may have shorter wait times. We take extra safety precautions for winter installations to ensure quality work regardless of season.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer warranties on gutter installations?</h3>
                <p className="text-gray-600">
                  Yes, we provide a 5-year workmanship warranty on all gutter installations, covering any issues related to installation quality. Additionally, the gutter materials themselves carry manufacturer warranties ranging from 20 years for aluminum to lifetime for some copper systems. We provide detailed warranty information with every quote.
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-primary/5 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Home with Quality Gutters</h2>
            <p className="text-lg max-w-2xl mx-auto mb-6">
              Contact us today to schedule a free consultation and estimate for your gutter installation or repair project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <a 
                  className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors"
                  onClick={handleCTAClick}
                >
                  Get a Free Estimate
                </a>
              </Link>
              <a href="tel:720-360-8546" className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors">
                Call 720-360-8546
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
    </div>
  );
};

export default GutterServices;
