import { useEffect } from 'react';
import { Link } from 'wouter';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { trackEvent } from '@/lib/analytics';

const RoofRepair = () => {
  useEffect(() => {
    document.title = "Roof Repair Services | Spencer Roofing Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Fast, reliable roof repair services in Denver for all types of roof damage including leaks, missing shingles, and storm damage. 24/7 emergency service available.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const handleCTAClick = () => {
    trackEvent('service_page_cta_click', 'roof_repair', 'contact');
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Services", path: "/#services" },
            { label: "Roof Repairs", path: "/services/roof-repair", active: true }
          ]} 
        />
        
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Roof Repair Services</h1>
          
          {/* Hero Section */}
          <div className="mb-16 relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/images/roof-repair-hero.jpg" 
              alt="Professional roof repair work showing damaged roof section being repaired by Spencer Roofing Solutions in Denver" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 flex items-center justify-center">
              <div className="text-center max-w-3xl px-6">
                <h2 className="text-3xl md:text-4xl text-white font-bold mb-4 drop-shadow-lg">
                  Fast, Reliable Roof Repairs
                </h2>
                <p className="text-lg text-white mb-8 drop-shadow-md opacity-95">
                  Expert repair services for all types of roof damage throughout the Denver metro area
                </p>
                <Link href="/contact">
                  <div 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-md transition-colors shadow-lg cursor-pointer"
                    onClick={handleCTAClick}
                  >
                    Schedule a Repair
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Repair Services Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Roof Repair Services</h2>
            <p className="text-lg text-center max-w-4xl mx-auto mb-10">
              From emergency leak repairs to storm damage restoration, we provide comprehensive repair solutions to extend the life of your roof and protect your property.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <i className="fas fa-tint text-6xl text-primary"></i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Leak Detection & Repair</h3>
                  <p className="text-gray-600 mb-4">
                    Precise identification and repair of roof leaks to prevent water damage to your home or business.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Advanced leak detection techniques</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Targeted repairs</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Interior damage assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <i className="fas fa-cloud-showers-heavy text-6xl text-primary"></i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Storm Damage Repair</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive repair solutions for roofs damaged by hail, wind, fallen debris, and other weather events.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Hail damage assessment</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Wind damage repair</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Insurance claim assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <i className="fas fa-bolt text-6xl text-primary"></i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Emergency Repairs</h3>
                  <p className="text-gray-600 mb-4">
                    Rapid response service to address urgent roof problems and prevent additional damage to your property.
                  </p>
                  <ul className="mb-4 space-y-1">
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>24/7 availability</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Temporary solutions when needed</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-primary mt-1 mr-2"></i>
                      <span>Fast response times</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Common Repair Issues */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Common Roof Problems We Fix</h2>
            <p className="text-lg mb-8">
              Our experienced team can address a wide range of roofing issues for both residential and commercial properties.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-puzzle-piece text-2xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Missing or Damaged Shingles</h3>
                    <p className="text-gray-600">
                      Wind, hail, and general aging can cause shingles to crack, curl, or blow off entirely. We provide precise matching and replacement of damaged shingles to restore your roof's integrity and appearance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-tint text-2xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Roof Leaks</h3>
                    <p className="text-gray-600">
                      Leaks can occur around chimneys, vents, skylights, or due to damaged flashing. Our team uses advanced techniques to pinpoint the exact source of leaks and make targeted repairs to prevent water damage.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-mountain text-2xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ice Dam Damage</h3>
                    <p className="text-gray-600">
                      Colorado's winters can create ice dams that damage your roof's edge and allow water to seep underneath shingles. We repair the damage and can recommend preventative measures to avoid future issues.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-wind text-2xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Storm Damage</h3>
                    <p className="text-gray-600">
                      Hail, high winds, and falling debris can cause significant roof damage. We provide comprehensive assessment and repair of all types of storm damage, along with assistance navigating insurance claims.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-water text-2xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Flashing Issues</h3>
                    <p className="text-gray-600">
                      Damaged, deteriorated, or improperly installed flashing around roof transitions, chimneys, and vents is a common source of leaks. We repair or replace flashing to ensure proper water diversion.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-cloud-rain text-2xl text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Gutter & Drainage Problems</h3>
                    <p className="text-gray-600">
                      Clogged, damaged, or improperly installed gutters can lead to roof and foundation damage. We repair and optimize gutter systems to ensure proper water drainage away from your property.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Repair Process */}
          <div className="bg-neutral-light p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Roof Repair Process</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-10">
              We follow a systematic approach to ensure each repair is performed correctly and efficiently.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">1</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Thorough Inspection</h3>
                  <p className="text-gray-600">
                    We begin with a comprehensive inspection of your roof, identifying not just obvious damage but also potential problem areas that could lead to future issues. For complex leaks, we may use moisture detection equipment to locate hidden water intrusion.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">2</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Detailed Assessment</h3>
                  <p className="text-gray-600">
                    After the inspection, we provide a clear explanation of the issues found, along with repair recommendations and a transparent cost estimate. We discuss options and help you make informed decisions about your roof repair.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">3</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Proper Preparation</h3>
                  <p className="text-gray-600">
                    Before repairs begin, we ensure all necessary materials are on hand and take steps to protect your property. For roof leaks, we may address any immediate water intrusion before permanent repairs are made.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-8">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">4</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Expert Repair</h3>
                  <p className="text-gray-600">
                    Our experienced roofing technicians perform repairs according to manufacturer specifications and industry best practices. We address not just the symptoms but the underlying causes of roof problems to provide lasting solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">5</div>
                </div>
                <div className="md:border-l md:pl-8 pt-4 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Final Inspection & Documentation</h3>
                  <p className="text-gray-600">
                    Upon completion, we conduct a final inspection to verify the quality of repairs. We provide documentation of all work performed, along with recommendations for ongoing maintenance to extend the life of your roof.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Emergency Repair Section */}
          <div className="bg-primary/5 p-8 rounded-lg mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Emergency Roof Repair Service</h2>
                <p className="text-lg mb-4">
                  When you have a serious roof leak or damage that can't wait, our emergency repair team is ready to help.
                </p>
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span className="text-gray-700">24/7 availability for urgent situations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span className="text-gray-700">Rapid response to minimize water damage</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span className="text-gray-700">Temporary repairs when immediate permanent solutions aren't possible</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                    <span className="text-gray-700">Coordination with water mitigation services when needed</span>
                  </li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:720-360-8546" className="bg-secondary hover:bg-secondary-dark text-white text-center font-semibold py-3 px-6 rounded-md transition-colors">
                    <i className="fas fa-phone-alt mr-2"></i> Emergency Repair Hotline
                  </a>
                  <Link href="/contact">
                    <a className="bg-primary hover:bg-primary-dark text-white text-center font-semibold py-3 px-6 rounded-md transition-colors">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-1/2 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-center">What to Do Until Help Arrives</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <div>
                      <p className="font-semibold">Safety First</p>
                      <p className="text-gray-600">
                        Avoid going on the roof yourself. Place buckets under active leaks and move valuable items away from damaged areas.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <div>
                      <p className="font-semibold">Document the Damage</p>
                      <p className="text-gray-600">
                        Take photos of visible damage, both interior and exterior, for insurance purposes.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <div>
                      <p className="font-semibold">Contain Water Intrusion</p>
                      <p className="text-gray-600">
                        Use tarps, buckets, and towels to minimize water damage to your interior.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <div>
                      <p className="font-semibold">Call Us Immediately</p>
                      <p className="text-gray-600">
                        Our emergency team will guide you through immediate steps and dispatch help quickly.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          {/* Repair or Replace Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Repair or Replace?</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-10">
              Sometimes it's difficult to know whether to repair your existing roof or invest in a replacement. Here are some guidelines to help you decide:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
                  <i className="fas fa-tools mr-3"></i> When to Repair
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-gray-700">The damage is isolated to a small area (less than 30% of the roof)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-gray-700">Your roof is relatively new (less than 15 years old for asphalt shingles)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-gray-700">The underlying decking is in good condition</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-gray-700">Most of the shingles are in good condition with no widespread curling or cracking</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-gray-700">You have matching replacement materials available</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-primary mt-1 mr-2"></i>
                    <span className="text-gray-700">Budget constraints make replacement difficult at this time</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center text-secondary">
                  <i className="fas fa-house-damage mr-3"></i> When to Replace
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    <span className="text-gray-700">Your roof is approaching or beyond its expected lifespan</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    <span className="text-gray-700">Damage is widespread across multiple areas</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    <span className="text-gray-700">You've had multiple repairs in recent years</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    <span className="text-gray-700">The underlying decking has water damage or rot</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    <span className="text-gray-700">Shingles are curling, cracking, or losing granules throughout the roof</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-secondary mt-1 mr-2"></i>
                    <span className="text-gray-700">Your insurance is covering replacement due to storm damage</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-neutral-light rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-center">Our Honest Assessment Promise</h3>
              <p className="text-center text-gray-700">
                We provide straightforward, honest recommendations based on the actual condition of your roof—never suggesting replacements when repairs will suffice. During your free inspection, we'll thoroughly evaluate your roof's condition and discuss all available options.
              </p>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Roof Repair FAQs</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How quickly can you respond to a roof leak?</h3>
                <p className="text-gray-600">
                  For emergency situations, we typically respond within 24 hours, often the same day. For non-emergency repairs, we schedule appointments within 2-3 business days. Our goal is to address your roofing issues promptly to prevent further damage.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How much does a typical roof repair cost?</h3>
                <p className="text-gray-600">
                  Repair costs vary widely depending on the extent of damage, roof type, and accessibility. Minor repairs may cost between $300-$500, while more extensive repairs can range from $1,000-$3,000. We provide detailed, transparent estimates after a thorough inspection.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Will my insurance cover roof repairs?</h3>
                <p className="text-gray-600">
                  Most homeowner's insurance policies cover roof damage caused by sudden events like storms, fallen trees, or hail, but typically not damage due to wear and tear or lack of maintenance. We have extensive experience working with insurance companies and can help you navigate the claims process.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How long do roof repairs take to complete?</h3>
                <p className="text-gray-600">
                  Most residential roof repairs can be completed in a single day. More extensive repairs may take 2-3 days. Factors affecting completion time include weather conditions, the extent of damage, and material availability. We always provide estimated timeframes before beginning work.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer warranties on roof repairs?</h3>
                <p className="text-gray-600">
                  Yes, we stand behind our work with a 1-year workmanship warranty on all repairs. This covers any issues arising from the repair work itself. Material warranties vary depending on the products used. We provide detailed warranty information for all repair projects.
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-primary/5 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Need Roof Repairs?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-6">
              Don't wait until a small problem becomes a major expense. Contact us today for a free roof inspection and repair estimate.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <a 
                  className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors"
                  onClick={handleCTAClick}
                >
                  Schedule a Repair
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

export default RoofRepair;
