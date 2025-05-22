import { useEffect } from 'react';
import { Link } from 'wouter';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';
import { trackEvent } from '@/lib/analytics';

const InsuranceClaims = () => {
  useEffect(() => {
    document.title = "Insurance Claim Assistance | Spencer Roofing Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert insurance claim assistance for roof damage in Denver. We help you navigate the entire insurance claim process from documentation to completion for hail and wind damage.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const handleCTAClick = () => {
    trackEvent('service_page_cta_click', 'insurance_claims', 'contact');
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Services", path: "/#services" },
            { label: "Insurance Claims", path: "/services/insurance-claims", active: true }
          ]} 
        />
        
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Insurance Claim Assistance</h1>
          
          {/* Hero Section */}
          <div className="mb-16 relative rounded-lg overflow-hidden">
            <img 
              src="https://pixabay.com/get/g6796bce29ce37f6e768e664bb0e123138fe19f4e67a7dfd9a900c92b78e535eb2e3371eb27ee4e8a797cdf6e37002306a64d64a97ac05453ce27effac41cae2b_1280.jpg" 
              alt="Roof inspection for insurance claim" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center max-w-3xl px-4">
                <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
                  Expert Insurance Claim Assistance
                </h2>
                <p className="text-lg text-white mb-6">
                  We help you navigate the entire insurance claim process from documentation to completion
                </p>
                <Link href="/contact">
                  <a 
                    className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors"
                    onClick={handleCTAClick}
                  >
                    Get Started With Your Claim
                  </a>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Insurance Claim Process Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Insurance Claim Process</h2>
            <p className="text-lg text-center max-w-4xl mx-auto mb-10">
              Dealing with insurance claims can be overwhelming. Our step-by-step process simplifies the experience and ensures you receive the coverage you deserve.
            </p>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-24 bg-primary flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">1</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Free Inspection</h3>
                    <p className="text-gray-600 mb-4">
                      We thoroughly document all storm damage with photos and detailed reports to ensure nothing is missed.
                    </p>
                    <ul className="mb-4 space-y-1">
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Comprehensive roof assessment</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Detailed photo documentation</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Professional damage report</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-24 bg-primary flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">2</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Claim Filing Assistance</h3>
                    <p className="text-gray-600 mb-4">
                      We help you initiate and file your insurance claim with proper documentation to maximize your chances of approval.
                    </p>
                    <ul className="mb-4 space-y-1">
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Guidance on when to file</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Assistance with claim forms</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Proper documentation submission</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-24 bg-primary flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">3</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Adjuster Meeting</h3>
                    <p className="text-gray-600 mb-4">
                      We meet with your insurance adjuster to ensure all damage is properly identified during their inspection.
                    </p>
                    <ul className="mb-4 space-y-1">
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>On-site representation</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Expert damage identification</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Professional advocacy</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-24 bg-primary flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">4</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Claim Review</h3>
                    <p className="text-gray-600 mb-4">
                      We carefully analyze the insurance company's estimate to ensure it covers all necessary repairs and replacements.
                    </p>
                    <ul className="mb-4 space-y-1">
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Detailed estimate review</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Identification of omissions</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Supplemental claim filing if needed</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-24 bg-primary flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">5</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Quality Repairs</h3>
                    <p className="text-gray-600 mb-4">
                      Once the claim is approved, we coordinate and oversee the entire repair or replacement process to ensure high-quality work.
                    </p>
                    <ul className="mb-4 space-y-1">
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Premium materials</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Expert installation</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Project management</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-24 bg-primary flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">6</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-center">Final Inspection</h3>
                    <p className="text-gray-600 mb-4">
                      We conduct a thorough inspection to ensure all work meets our high standards and your insurance requirements.
                    </p>
                    <ul className="mb-4 space-y-1">
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Quality assurance check</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Documentation of completion</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check text-primary mt-1 mr-2"></i>
                        <span>Warranty information provided</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Types of Damage Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Common Types of Insurable Roof Damage</h2>
            <p className="text-lg mb-8">
              Most homeowners insurance policies cover damage caused by sudden, unexpected events. Here are the most common types of insurable roof damage in the Denver area:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://pixabay.com/get/gad3ca8c95a6679cdd1043ec8600a842d346afb92be6d7e6f6abbacfbf5f314603cb235510bc26d7bc3bdd4be3f799568c4e34ff877db60a35cad90a8cf003fc3_1280.jpg" 
                  alt="Hail damage on roof" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Hail Damage</h3>
                  <p className="text-gray-600 mb-4">
                    Colorado's frequent hailstorms can cause significant damage to roofing materials. Signs of hail damage include:
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Random dents or impact marks on shingles</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Granule loss exposing the asphalt layer</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Bruising or soft spots in shingles</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Cracked or broken shingles</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Dented metal flashing, vents or gutters</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1622623222795-2bc927d7a28e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Wind damage on roof" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Wind Damage</h3>
                  <p className="text-gray-600 mb-4">
                    High winds can lift, crack, or completely remove roofing materials. Common signs of wind damage include:
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Missing or torn shingles</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Lifting or curling shingles</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Damaged or missing flashing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Creased or rippled appearance</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Leaks in the attic after storms</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517490232338-06b912a786b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Fallen tree damage on roof" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Falling Objects</h3>
                  <p className="text-gray-600 mb-4">
                    Damage from falling trees, branches, or debris during storms is typically covered by insurance. Signs include:
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Obvious punctures or holes in the roof</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Cracked or broken structural components</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Dented or crushed roofing materials</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Damaged gutters or flashing</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Ceiling damage or water intrusion</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Snow and ice damage on roof" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Snow and Ice Damage</h3>
                  <p className="text-gray-600 mb-4">
                    Heavy snow accumulation and ice dam formation can cause significant damage to Colorado roofs:
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Collapsed or sagging roof sections</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Ice dam damage at roof edges</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Water stains on ceilings or interior walls</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Damaged gutters and downspouts</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-xs text-primary mt-1.5 mr-2"></i>
                      <span>Roof leaks during snow melt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="bg-neutral-light p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">What's Not Typically Covered</h3>
                <p className="mb-4">
                  It's important to understand what most insurance policies exclude:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <i className="fas fa-times text-secondary mt-1 mr-2"></i>
                    <span>Normal wear and tear from aging</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-times text-secondary mt-1 mr-2"></i>
                    <span>Damage due to lack of maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-times text-secondary mt-1 mr-2"></i>
                    <span>Pre-existing damage prior to policy start</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-times text-secondary mt-1 mr-2"></i>
                    <span>Cosmetic damage that doesn't affect function</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-times text-secondary mt-1 mr-2"></i>
                    <span>Improper installation or manufacturer defects</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-times text-secondary mt-1 mr-2"></i>
                    <span>Damage from floods or earthquakes (requires separate policies)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Insurance Policies Explained */}
          <div className="bg-neutral-light p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Understanding Your Insurance Policy</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-10">
              Insurance policies can be confusing. Here are some key terms and concepts to understand about your roof coverage:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">ACV vs. RCV Coverage</h3>
                <p className="mb-4 text-gray-700">
                  The type of coverage in your policy dramatically affects your out-of-pocket costs:
                </p>
                <div className="space-y-4">
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Actual Cash Value (ACV)</h4>
                    <p className="text-gray-600">
                      Pays the depreciated value of your roof at the time of damage. For older roofs, this may be significantly less than replacement cost, leaving you to pay the difference.
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Replacement Cost Value (RCV)</h4>
                    <p className="text-gray-600">
                      Pays the full cost to replace your damaged roof with the same kind and quality of materials, regardless of age or depreciation. This is the preferred coverage type.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Understanding Deductibles</h3>
                <p className="mb-4 text-gray-700">
                  Your deductible is the amount you pay out-of-pocket before insurance coverage begins:
                </p>
                <div className="space-y-4">
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Fixed Amount Deductibles</h4>
                    <p className="text-gray-600">
                      A specific dollar amount (e.g., $1,000 or $2,500) that you pay regardless of the claim amount.
                    </p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Percentage Deductibles</h4>
                    <p className="text-gray-600">
                      Common for wind and hail damage in Colorado, these deductibles are calculated as a percentage of your home's insured value (typically 1-5%), which can result in higher out-of-pocket costs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Time Limitations</h3>
                <p className="mb-4 text-gray-700">
                  Be aware of important time constraints in your policy:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-exclamation-circle text-secondary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Claim Filing Deadline:</span>
                      <p className="text-gray-600">Most policies require claims to be filed within 365 days of damage, but some have shorter windows.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-exclamation-circle text-secondary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Supplemental Claim Deadlines:</span>
                      <p className="text-gray-600">Additional damage discovered during repairs may have limited time windows for filing supplemental claims.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-exclamation-circle text-secondary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Completion Requirements:</span>
                      <p className="text-gray-600">Once approved, many policies require work to be completed within a specific timeframe.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Coverage Exclusions</h3>
                <p className="mb-4 text-gray-700">
                  Important exclusions to be aware of in most policies:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-exclamation-circle text-secondary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Code Upgrade Limitations:</span>
                      <p className="text-gray-600">Standard policies may not cover additional costs to bring your roof up to current building codes unless you have ordinance or law coverage.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-exclamation-circle text-secondary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Matching Limitations:</span>
                      <p className="text-gray-600">Some policies only cover the damaged area rather than ensuring matching materials for the entire roof.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-exclamation-circle text-secondary mt-1 mr-2"></i>
                    <div>
                      <span className="font-semibold">Maintenance-Related Exclusions:</span>
                      <p className="text-gray-600">Damage exacerbated by poor maintenance may be partially or fully denied.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold mb-4">Not sure what your policy covers?</p>
              <Link href="/contact">
                <a className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors">
                  Let Us Help You Understand Your Coverage
                </a>
              </Link>
            </div>
          </div>
          
          {/* Our Expertise */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us For Your Insurance Claim</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-chart-line text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Experience with Insurance Companies</h3>
                <p className="text-gray-600">
                  We've successfully handled hundreds of insurance claims and understand exactly what documentation is needed and how to effectively communicate with adjusters to maximize your claim.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-search text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Thorough Damage Documentation</h3>
                <p className="text-gray-600">
                  Our detailed inspection process identifies all damage, including less obvious issues that insurance adjusters might miss, ensuring you receive full compensation for all covered damage.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-handshake text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Client Advocacy</h3>
                <p className="text-gray-600">
                  We serve as your advocate throughout the entire claims process, ensuring your interests are represented and fighting for fair treatment from your insurance company.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-file-signature text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Paperwork Assistance</h3>
                <p className="text-gray-600">
                  We help you navigate the complex paperwork required for insurance claims, ensuring all documents are properly completed and submitted on time to avoid delays or denials.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-clipboard-check text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Estimate Review</h3>
                <p className="text-gray-600">
                  We thoroughly review insurance adjusters' estimates to identify any omissions or undervalued items, and prepare detailed supplemental claims when necessary to ensure fair compensation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-tools text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Repairs & Replacement</h3>
                <p className="text-gray-600">
                  Once your claim is approved, we ensure all work is completed to the highest standards, using quality materials that meet or exceed insurance specifications and building code requirements.
                </p>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="bg-primary/5 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Success Stories</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-10">
              Here's what our clients say about our insurance claim assistance:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="ml-2 text-gray-600">5.0</p>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "After being initially denied by my insurance company, Spencer stepped in and completely turned things around. His documentation and expertise convinced them to approve a full roof replacement. The process was seamless, and I didn't have to deal with the insurance company directly."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                    <i className="fas fa-user"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Michael Thompson</p>
                    <p className="text-sm text-gray-600">Lakewood, CO</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="ml-2 text-gray-600">5.0</p>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The hailstorm damaged not just my roof but also gutters and siding. Spencer's thorough documentation ensured everything was included in my claim. He found damage that the insurance adjuster missed and got it added to the claim. I ended up with a beautiful new roof and gutters with minimal out-of-pocket costs."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                    <i className="fas fa-user"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Jennifer Adams</p>
                    <p className="text-sm text-gray-600">Centennial, CO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Insurance Claim FAQs</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Will filing a claim increase my insurance premiums?</h3>
                <p className="text-gray-600">
                  Not necessarily. In Colorado, insurance companies cannot raise your rates for a single weather-related claim. Rate increases typically occur when there are multiple claims within a short period or across a geographic area due to widespread storm damage. We can discuss the specifics of your situation during consultation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">What if my claim is denied?</h3>
                <p className="text-gray-600">
                  We have extensive experience with denied claims and can help you navigate the appeals process. Often, denials occur due to insufficient documentation or misclassification of damage. We'll thoroughly reassess your roof, gather additional evidence if needed, and work with you to file a well-documented appeal.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">How long does the insurance claim process take?</h3>
                <p className="text-gray-600">
                  The timeline varies depending on several factors, but typically:
                  <br /><br />
                  • Initial inspection and documentation: 1-2 days
                  <br />
                  • Insurance company review: 1-3 weeks
                  <br />
                  • Adjuster inspection: 1-2 weeks after claim filing
                  <br />
                  • Claim approval and check issuance: 1-3 weeks
                  <br />
                  • Roof replacement/repair: 1-5 days once materials are delivered
                  <br /><br />
                  The entire process typically takes 4-8 weeks from start to finish.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Do I have to pay out of pocket for a new roof?</h3>
                <p className="text-gray-600">
                  With an approved insurance claim, you typically only pay your deductible. Some policies may include depreciation holdbacks (especially with ACV policies) that require additional out-of-pocket expenses. We'll review your policy details and explain exactly what to expect regarding costs before any work begins.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Can I choose better materials than what I had before?</h3>
                <p className="text-gray-600">
                  Yes! Insurance typically covers "like kind and quality" replacement, but you can upgrade to better materials by paying the difference. Many homeowners choose to upgrade to impact-resistant shingles or other premium options during insurance claim repairs. We can help you understand the upgrade costs and potential insurance discounts for certain materials.
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-primary/5 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help With Your Insurance Claim?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-6">
              Don't navigate the complex insurance claim process alone. Our expertise can make the difference between a denied claim and a full roof replacement.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <a 
                  className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-md transition-colors"
                  onClick={handleCTAClick}
                >
                  Schedule a Free Inspection
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

export default InsuranceClaims;
