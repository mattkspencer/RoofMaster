import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Breadcrumb from '@/components/Breadcrumb';
import { trackPageView } from '@/lib/analytics';
import { PortfolioProject as PortfolioProjectType } from '@/../../shared/schema';

interface ProjectDetailsProps {
  project: PortfolioProjectType;
}

// Project-specific content data
const getProjectContent = (project: PortfolioProjectType) => {
  if (project.title === "Asphalt Shingle Roof Replacement") {
    return {
      squareFootage: "5,000 sq ft",
      completionTime: "2 days",
      materials: "Premium Architectural Shingles - \"Weathered Wood\" Color",
      windRating: "Up to 130 mph",
      warranty: "Limited Lifetime + 5-Year Labor",
      specialFeatures: "Enhanced wind resistance, balanced ventilation system",
      challenges: "Severe hail damage had compromised the existing roof structure at this elevated Highlands Ranch location, requiring careful assessment of decking integrity while working within insurance claim parameters and Colorado's challenging weather conditions.",
      solutions: "Our team conducted thorough documentation for insurance purposes and implemented a systematic approach to ensure quality while meeting deadlines. We used specialized installation techniques for high-altitude conditions and premium fasteners exceeding local building codes.",
      scopeOfWork: [
        {
          title: "Complete Tear-Off & Removal",
          icon: "🔨",
          items: [
            "Safe removal of existing 20-year-old damaged shingles",
            "Thorough inspection and replacement of damaged roof decking",
            "Professional disposal of all old roofing materials",
            "Preparation of clean work surface for new installation"
          ]
        },
        {
          title: "Premium Underlayment Installation",
          icon: "🛡️",
          items: [
            "High-quality synthetic underlayment across entire 5,000 sq ft",
            "Enhanced water protection barrier system",
            "Proper overlap and sealing techniques for Colorado weather",
            "Code-compliant installation exceeding local requirements"
          ]
        },
        {
          title: "Architectural Shingle Installation",
          icon: "🏘️",
          items: [
            "Premium \"Weathered Wood\" dimensional architectural shingles",
            "Precision nail placement using specialized high-altitude techniques",
            "Exact alignment and spacing for optimal performance",
            "Wind-resistant installation methods for 130 mph rating"
          ]
        },
        {
          title: "Ventilation System Upgrade",
          icon: "💨",
          items: [
            "Balanced intake and exhaust ventilation design",
            "Professional ridge vent installation along entire peak",
            "Soffit vent optimization for energy efficiency",
            "Climate-specific ventilation for Highlands Ranch elevation"
          ]
        }
      ]
    };
  } else if (project.title === "TPO Commercial Roof Installation") {
    return {
      squareFootage: "20,000 sq ft",
      completionTime: "5 days",
      materials: "Premium TPO Roofing System",
      windRating: "Up to 110 mph",
      warranty: "20-Year Material + 10-Year Labor",
      specialFeatures: "Improved drainage system, energy-efficient design",
      challenges: "The existing commercial roof had significant ponding issues and outdated drainage that was causing structural concerns for this Denver business complex.",
      solutions: "We redesigned the drainage system with additional drains and proper slope adjustments, while upgrading to a high-performance TPO system that eliminated ponding and improved energy efficiency.",
      scopeOfWork: [
        {
          title: "Existing Roof Assessment",
          icon: "🔍",
          items: [
            "Comprehensive structural evaluation of 20,000 sq ft surface",
            "Drainage system analysis and redesign planning",
            "Insulation assessment and upgrade recommendations",
            "Building code compliance review for commercial standards"
          ]
        },
        {
          title: "TPO System Installation",
          icon: "🏢",
          items: [
            "Premium white TPO membrane for energy efficiency",
            "Mechanically fastened system for wind resistance",
            "Seamless welded seams for complete waterproofing",
            "Enhanced insulation for improved building performance"
          ]
        },
        {
          title: "Drainage System Upgrade",
          icon: "🌊",
          items: [
            "Strategic placement of additional roof drains",
            "Proper slope adjustments to eliminate ponding",
            "High-capacity gutters and downspout system",
            "Emergency overflow protection systems"
          ]
        },
        {
          title: "Quality Assurance",
          icon: "✅",
          items: [
            "Electronic leak detection testing across entire surface",
            "Seam strength testing for long-term performance",
            "Final inspection and documentation for warranty",
            "Comprehensive maintenance plan and training"
          ]
        }
      ]
    };
  } else if (project.title === "Hail Damage Insurance Claim") {
    return {
      squareFootage: "3,200 sq ft",
      completionTime: "3 days",
      materials: "Impact-Resistant Architectural Shingles",
      windRating: "Up to 120 mph",
      warranty: "Limited Lifetime + 5-Year Labor",
      specialFeatures: "Class 4 impact resistance, insurance claim coordination",
      challenges: "After a major hailstorm damaged this Aurora roof, the insurance company initially wanted to approve only partial repairs rather than complete replacement, despite extensive damage throughout the roof system.",
      solutions: "Spencer provided comprehensive damage documentation with detailed photos and measurements, demonstrating that partial repairs would be inadequate. His expertise convinced the insurance company to approve a complete replacement with impact-resistant materials.",
      scopeOfWork: [
        {
          title: "Insurance Claim Documentation",
          icon: "📋",
          items: [
            "Comprehensive damage assessment and photo documentation",
            "Detailed measurements and impact analysis report",
            "Insurance adjuster coordination and advocacy",
            "Supplemental claim preparation for complete replacement"
          ]
        },
        {
          title: "Complete Roof System Replacement",
          icon: "🏠",
          items: [
            "Full tear-off of hail-damaged roofing materials",
            "Class 4 impact-resistant architectural shingle installation",
            "Upgraded underlayment for enhanced protection",
            "Professional installation exceeding manufacturer specifications"
          ]
        },
        {
          title: "Gutter System Restoration",
          icon: "🌧️",
          items: [
            "Complete replacement of hail-damaged gutters",
            "Seamless aluminum gutter installation",
            "Proper slope and drainage optimization",
            "Durable downspout and extension system"
          ]
        },
        {
          title: "Final Protection Measures",
          icon: "🛡️",
          items: [
            "Impact-resistant materials throughout entire system",
            "Enhanced wind resistance for future storm protection",
            "Comprehensive warranty coverage documentation",
            "Preventive maintenance plan and recommendations"
          ]
        }
      ]
    };
  }
  
  // Default fallback
  return {
    squareFootage: "N/A",
    completionTime: "N/A",
    materials: "Professional Grade Materials",
    windRating: "Code Compliant",
    warranty: "Professional Warranty",
    specialFeatures: "Quality craftsmanship",
    challenges: "This project presented unique challenges that required professional expertise and attention to detail.",
    solutions: "Our team implemented proven solutions to deliver exceptional results for our client.",
    scopeOfWork: []
  };
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const content = getProjectContent(project);
  
  // Update document title and meta tags
  useEffect(() => {
    document.title = `${project.title} - ${project.location} | Spencer Roofing Solutions`;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `Professional ${project.title.toLowerCase()} in ${project.location}. ${project.description} Expert Denver roofing contractor.`);
    }
  }, [project]);

  return (

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100">
                {project.location}
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-lg">
                <div className="flex items-center">
                  <span className="text-blue-200">📅</span>
                  <span className="ml-2">Completed: {project.completionDate ? new Date(project.completionDate).toLocaleDateString() : 'Recently'}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-200">🏠</span>
                  <span className="ml-2">{content.squareFootage}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-200">⏱️</span>
                  <span className="ml-2">{content.completionTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Materials</h3>
                      <p className="text-gray-600">{content.materials}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Warranty</h3>
                      <p className="text-gray-600">{content.warranty}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Wind Rating</h3>
                      <p className="text-gray-600">{content.windRating}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Category</h3>
                      <p className="text-gray-600 capitalize">{project.category} Project</p>
                    </div>
                  </div>
                </div>
                <div>
                  {project.afterImageUrl && (
                    <img 
                      src={project.afterImageUrl} 
                      alt={`Completed ${project.title} project in ${project.location}`}
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scope of Work */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Detailed Scope of Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.scopeOfWork.map((workItem, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <span className="text-2xl mr-3">{workItem.icon}</span>
                      {workItem.title}
                    </h3>
                    <ul className="text-gray-600 space-y-2">
                      {workItem.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before & After */}
        {project.beforeImageUrl && project.afterImageUrl && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Before & After</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-center">Before: Storm Damage</h3>
                    <img 
                      src={project.beforeImageUrl} 
                      alt={`Before: Storm-damaged roof in ${project.location}`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-center">After: Beautiful Restoration</h3>
                    <img 
                      src={project.afterImageUrl} 
                      alt={`After: Completed roof replacement in ${project.location}`}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Challenges & Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Challenges & Solutions</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-600">Challenge</h3>
                    <p className="text-gray-600 mb-4">
                      Severe hail damage had compromised the existing roof structure, requiring careful assessment 
                      of decking integrity while working within insurance claim parameters.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Extensive granule loss from hail impact</li>
                      <li>• Multiple leak points during storms</li>
                      <li>• Insurance claim coordination needed</li>
                      <li>• Tight timeline for completion</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-600">Solution</h3>
                    <p className="text-gray-600 mb-4">
                      Our team conducted thorough documentation for insurance purposes and implemented a 
                      systematic approach to ensure quality while meeting deadlines.
                    </p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Comprehensive damage documentation</li>
                      <li>• Strategic material ordering and delivery</li>
                      <li>• Efficient two-day installation schedule</li>
                      <li>• Enhanced ventilation system upgrade</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonial */}
        {project.testimonial && (
          <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Customer Satisfaction</h2>
                <blockquote className="text-xl italic mb-6">
                  "{project.testimonial}"
                </blockquote>
                {project.client && (
                  <cite className="text-lg text-blue-200">— {project.client}</cite>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Project Statistics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Project Statistics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5,000</div>
                  <div className="text-gray-600">Square Feet</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-gray-600">Days to Complete</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">130</div>
                  <div className="text-gray-600">MPH Wind Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Lifetime</div>
                  <div className="text-gray-600">Material Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Roofing Project?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Get the same quality craftsmanship and professional service for your Denver area property.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
                <a 
                  href="/contact" 
                  className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors text-center w-full sm:w-auto"
                >
                  Get Free Estimate
                </a>
                <a 
                  href="tel:720-360-8546" 
                  className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors text-center w-full sm:w-auto"
                >
                  Call (720) 360-8546
                </a>
              </div>
              <div className="mt-8">
                <a 
                  href="/portfolio" 
                  className="text-primary hover:text-primary/80 font-semibold underline"
                >
                  ← Back to Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* JSON-LD Schema */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Project",
              "name": project.title,
              "description": project.description,
              "location": {
                "@type": "Place",
                "name": project.location
              },
              "provider": {
                "@type": "LocalBusiness",
                "name": "Spencer Roofing Solutions",
                "@id": "https://roof-master-mattspen.replit.app",
                "url": "https://roof-master-mattspen.replit.app",
                "telephone": "720-360-8546",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Denver",
                  "addressRegion": "CO",
                  "addressCountry": "US"
                }
              },
              "image": project.afterImageUrl || project.imageUrl,
              "dateCompleted": project.completionDate
            })
          }}
        />
      </div>
    </>
  );
};

export default function PortfolioProject() {
  const { id } = useParams();
  
  const { data: project, isLoading, error } = useQuery({
    queryKey: ['/api/portfolio', id],
    queryFn: async () => {
      const response = await fetch(`/api/portfolio/${id}`);
      if (!response.ok) {
        throw new Error('Project not found');
      }
      return response.json();
    },
    enabled: !!id
  });

  useEffect(() => {
    if (project) {
      trackPageView(`/portfolio/${id}`);
    }
  }, [project, id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Breadcrumb 
          items={[
            { label: 'Portfolio', path: '/portfolio' },
            { label: 'Loading...', path: '#' }
          ]} 
        />
        <div className="flex items-center justify-center min-h-96">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Breadcrumb 
          items={[
            { label: 'Portfolio', path: '/portfolio' },
            { label: 'Not Found', path: '#' }
          ]} 
        />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <a 
            href="/portfolio" 
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors"
          >
            Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb 
        items={[
          { label: 'Portfolio', path: '/portfolio' },
          { label: project.title, path: `/portfolio/${id}`, active: true }
        ]} 
      />
      <ProjectDetails project={project} />
    </div>
  );
}