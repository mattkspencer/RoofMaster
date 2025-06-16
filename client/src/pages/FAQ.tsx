import { useState, useEffect, useMemo } from 'react';
import { ChevronDown, ChevronUp, Search, ArrowUp, Home, HelpCircle, Shield, Cloud, DollarSign, Wrench, Users, Zap, AlertTriangle, Building } from 'lucide-react';
import { Link } from 'wouter';
import Breadcrumb from '../components/Breadcrumb';
import CTASection from '../components/CTASection';
import { useAnalytics } from '../hooks/use-analytics';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  keywords: string[];
}

interface FAQCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  count: number;
}

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    document.title = "Frequently Asked Questions | Spencer Roofing - Denver Roofing FAQ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get answers to common roofing questions from Denver's trusted roofing contractors. Learn about hail damage, insurance claims, costs, materials, and more from Spencer Roofing Solutions.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqData: FAQItem[] = [
    // General Roofing Questions
    {
      id: 'general-1',
      category: 'general',
      question: 'How often should I have my roof inspected by Denver roofing contractors?',
      answer: 'We recommend having your roof professionally inspected at least twice a year - once in spring and once in fall. In Colorado\'s harsh climate with frequent hail storms, additional inspections after severe weather events are crucial. Regular roof inspections help identify small issues before they become costly roof repairs or full roof replacement projects.',
      keywords: ['inspection', 'maintenance', 'schedule', 'frequency', 'denver', 'colorado', 'hail', 'storms']
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'What are the signs that I need a new roof in Denver Colorado?',
      answer: 'Key warning signs include: missing or damaged shingles, granules in gutters, water stains on ceilings or walls, sagging roof deck, daylight visible through roof boards, and roofing materials that are 20+ years old. In Colorado, hail damage is also a major indicator that roof replacement may be necessary. Denver roofing experts can assess whether you need roof repair or complete roof replacement.',
      keywords: ['replacement', 'signs', 'damage', 'shingles', 'granules', 'water stains', 'sagging', 'age', 'hail damage']
    },
    {
      id: 'general-3',
      category: 'general',
      question: 'How long does roof installation take with Denver roofing companies?',
      answer: 'Most residential roof replacements take 1-3 days, depending on the size and complexity of your home, weather conditions, and roofing material choices. Factors like multiple stories, complex architectural features, or material availability can extend the timeline. Professional roofing contractors in Denver work efficiently to minimize disruption.',
      keywords: ['installation', 'timeline', 'duration', 'replacement', 'weather', 'materials', 'complexity']
    },
    {
      id: 'general-4',
      category: 'general',
      question: 'What roofing materials work best for Denver Colorado roofing projects?',
      answer: 'Impact-resistant shingles are highly recommended for Denver roofing due to frequent hail storms. Asphalt shingles with Class 4 impact ratings, metal roofing, and tile roofing perform well in Colorado\'s climate. These materials can also qualify Denver homeowners for insurance discounts and are preferred by local roofing contractors.',
      keywords: ['materials', 'impact-resistant', 'shingles', 'asphalt', 'metal', 'tile', 'class 4', 'insurance discounts', 'hail']
    },

    // Hail Damage & Insurance
    {
      id: 'insurance-1',
      category: 'insurance',
      question: 'How common is hail damage for Denver metro roofing?',
      answer: 'Denver experiences some of the highest hail activity in the United States. The Front Range sees an average of 7-9 hail days per year, with peak season running from April through August. This makes hail damage one of the most common roofing issues requiring Denver roofing contractors and emergency roof repair services.',
      keywords: ['hail damage', 'denver metro', 'front range', 'frequency', 'april', 'august', 'emergency repair']
    },
    {
      id: 'insurance-2',
      category: 'insurance',
      question: 'Will homeowners insurance cover hail damage to my Denver roof?',
      answer: 'Most homeowner\'s insurance policies in Colorado cover hail damage, but coverage varies by policy. Check your policy for weather-related damage coverage, deductible amounts, and coverage limits. Many insurers will pay 100% of replacement costs minus your deductible for hail-damaged roofs when working with licensed Denver roofing companies.',
      keywords: ['homeowners insurance', 'hail damage', 'coverage', 'deductible', 'replacement costs', 'policy']
    },
    {
      id: 'insurance-3',
      category: 'insurance',
      question: 'How do I file a roofing insurance claim in Denver Colorado?',
      answer: '1) Document the damage with photos, 2) Contact your insurance company immediately to report the claim, 3) Schedule an adjuster inspection, 4) Get a professional roofing inspection from Denver roofing contractors, 5) Obtain repair estimates from licensed roofing companies near me, 6) Work with your chosen roofing contractor and insurance adjuster to finalize the claim.',
      keywords: ['insurance claim', 'filing', 'documentation', 'photos', 'adjuster', 'inspection', 'estimates']
    },
    {
      id: 'insurance-4',
      category: 'insurance',
      question: 'Can insurance companies require me to use specific Denver roofers?',
      answer: 'No, you have the right to choose your own roofing contractor. Insurance companies may recommend contractors, but you\'re not obligated to use them. Choose licensed, insured Denver roofing contractors with good local references and experience with insurance roofing claims.',
      keywords: ['contractor choice', 'insurance requirements', 'licensed', 'insured', 'references', 'claims experience']
    },
    {
      id: 'insurance-5',
      category: 'insurance',
      question: 'What if my insurance company denies my Denver roof damage claim?',
      answer: 'You have options including: requesting a re-inspection, hiring a public adjuster, getting a second opinion from another Denver roofing professional, or filing a complaint with the Colorado Division of Insurance. Document all roof damage thoroughly and consider getting multiple professional roofing assessments.',
      keywords: ['denied claim', 're-inspection', 'public adjuster', 'second opinion', 'colorado division of insurance', 'documentation']
    },
    {
      id: 'insurance-6',
      category: 'insurance',
      question: 'Are there insurance discounts for impact-resistant roofing in Denver?',
      answer: 'Yes! Many insurance companies offer premium discounts or deductible reductions for Denver homes with Class 4 impact-resistant roofing materials. These discounts can range from 10-30% and may help offset the higher upfront costs of impact-resistant materials installed by professional roofing contractors.',
      keywords: ['insurance discounts', 'impact-resistant', 'class 4', 'premium discounts', 'deductible reduction', '10-30%']
    },

    // Seasonal & Weather
    {
      id: 'seasonal-1',
      category: 'seasonal',
      question: 'What\'s the best time of year for roof replacement in Denver Colorado?',
      answer: 'Late spring through early fall (May-September) offers the best weather conditions for Denver roofing projects. However, emergency roof repairs should be done immediately regardless of season. Winter roofing is possible but may take longer and cost more due to Colorado weather conditions.',
      keywords: ['best time', 'roof replacement', 'may-september', 'weather conditions', 'emergency repairs', 'winter roofing']
    },
    {
      id: 'seasonal-2',
      category: 'seasonal',
      question: 'How does Colorado\'s altitude affect Denver roofing installations?',
      answer: 'Higher altitude means increased UV exposure, which can accelerate roofing material degradation. Temperature fluctuations are also more extreme, causing materials to expand and contract more frequently. This makes quality roofing materials and proper installation by experienced Denver roofing contractors even more critical.',
      keywords: ['altitude', 'uv exposure', 'material degradation', 'temperature fluctuations', 'expansion', 'contraction', 'quality materials']
    },
    {
      id: 'seasonal-3',
      category: 'seasonal',
      question: 'Should Denver homeowners remove snow from their roof?',
      answer: 'Generally, no. Most roofs are designed to handle normal snow loads. However, if you notice ice dams, excessive accumulation (over 2 feet), or signs of structural stress, contact professional Denver roofers immediately. Improper snow removal can damage roofing materials and void warranties.',
      keywords: ['snow removal', 'snow loads', 'ice dams', 'excessive accumulation', 'structural stress', 'warranties']
    },
    {
      id: 'seasonal-4',
      category: 'seasonal',
      question: 'What are ice dams and how do Denver roofing companies prevent them?',
      answer: 'Ice dams form when warm air melts snow on the roof, which then refreezes at the gutters. Prevention includes proper attic insulation, ventilation, and keeping gutters clean. If ice dams form, professional removal by Denver roofing contractors is recommended to avoid costly roof damage.',
      keywords: ['ice dams', 'prevention', 'attic insulation', 'ventilation', 'gutters', 'professional removal']
    },

    // Costs & Financing
    {
      id: 'costs-1',
      category: 'costs',
      question: 'How much does a new roof cost with Denver roofing companies?',
      answer: 'Roofing costs vary widely based on size, materials, and complexity. Basic asphalt shingle roofs typically range from $8,000-$15,000 for average Denver homes, while premium materials like metal roofing or tile roofing can range from $15,000-$30,000+. Impact-resistant materials may cost 10-20% more but offer long-term savings through insurance discounts and durability.',
      keywords: ['roof cost', 'pricing', '$8,000-$15,000', '$15,000-$30,000', 'asphalt shingles', 'metal roofing', 'tile roofing', 'impact-resistant']
    },
    {
      id: 'costs-2',
      category: 'costs',
      question: 'Do Denver roofing contractors offer financing options?',
      answer: 'Yes, Spencer Roofing works with several financing partners to offer competitive rates and flexible payment plans for roofing projects. We can also help Denver homeowners navigate insurance claims to minimize out-of-pocket costs when applicable for roof repair or roof replacement.',
      keywords: ['financing options', 'payment plans', 'competitive rates', 'insurance claims', 'out-of-pocket costs']
    },
    {
      id: 'costs-3',
      category: 'costs',
      question: 'Is it worth investing in premium roofing materials in Denver Colorado?',
      answer: 'In Colorado\'s harsh climate, premium roofing materials often provide better long-term value through increased durability, energy efficiency, and insurance discounts. Impact-resistant materials especially make sense for Denver roofing given our frequent hail storms and extreme weather conditions.',
      keywords: ['premium materials', 'long-term value', 'durability', 'energy efficiency', 'insurance discounts', 'harsh climate']
    },

    // Maintenance & Repair
    {
      id: 'maintenance-1',
      category: 'maintenance',
      question: 'How can Denver homeowners maintain their roof between professional inspections?',
      answer: 'Keep gutters clean, trim overhanging branches, look for obvious damage after Colorado storms, ensure proper attic ventilation, and address small roofing issues promptly. However, avoid walking on your roof - leave detailed roof inspections to professional Denver roofing contractors for safety reasons.',
      keywords: ['roof maintenance', 'gutters', 'branches', 'storm damage', 'attic ventilation', 'safety', 'professional inspections']
    },
    {
      id: 'maintenance-2',
      category: 'maintenance',
      question: 'When should I choose roof repair vs roof replacement in Denver?',
      answer: 'Roof repairs are suitable for localized damage affecting less than 30% of the roof, when the roof is less than 15 years old, and when structural elements are sound. Roof replacement is typically recommended for widespread damage, roofs over 20 years old, or when repair costs exceed 50% of replacement cost according to Denver roofing professionals.',
      keywords: ['repair vs replacement', 'localized damage', '30%', '15 years old', '20 years old', '50% replacement cost']
    },
    {
      id: 'maintenance-3',
      category: 'maintenance',
      question: 'Can Denver homeowners do roofing repairs themselves?',
      answer: 'We strongly recommend professional roof repairs by licensed Denver roofing contractors for safety and warranty reasons. DIY roofing repairs can be dangerous and may void manufacturer warranties or insurance coverage. Even small repairs require proper safety equipment and roofing expertise.',
      keywords: ['diy repairs', 'professional repairs', 'safety', 'warranties', 'insurance coverage', 'safety equipment']
    },

    // Choosing Contractors
    {
      id: 'contractors-1',
      category: 'contractors',
      question: 'What should I look for in Denver roofing companies?',
      answer: 'Essential qualities include: proper Colorado licensing and insurance, local Denver references, Better Business Bureau rating, experience with your roofing material, knowledge of local building codes, transparent roofing pricing, written warranties, and experience with Colorado insurance claims. Search for "roofing contractors near me" and verify credentials.',
      keywords: ['choosing contractors', 'licensing', 'insurance', 'references', 'bbb rating', 'building codes', 'warranties', 'credentials']
    },
    {
      id: 'contractors-2',
      category: 'contractors',
      question: 'How do I avoid roofing scams when searching for "roofers near me" in Denver?',
      answer: 'Red flags include: door-to-door solicitation, requests for full payment upfront, significantly low bids, no local Denver address, pressure tactics, and lack of proper licensing/insurance. Always get multiple quotes from established Denver roofing companies and verify credentials before signing roofing contracts.',
      keywords: ['roofing scams', 'red flags', 'door-to-door', 'upfront payment', 'low bids', 'pressure tactics', 'multiple quotes']
    },
    {
      id: 'contractors-3',
      category: 'contractors',
      question: 'What roofing warranties should I expect from Denver roofing contractors?',
      answer: 'Look for both manufacturer material warranties (typically 25-50 years) and contractor workmanship warranties (minimum 5-10 years). Ensure all warranty terms are clearly documented in your roofing contract with your chosen Denver roofing company.',
      keywords: ['warranties', 'manufacturer warranties', '25-50 years', 'workmanship warranties', '5-10 years', 'contract documentation']
    },

    // Energy Efficiency
    {
      id: 'energy-1',
      category: 'energy',
      question: 'How can my Denver roof improve energy efficiency?',
      answer: 'Proper insulation, ventilation, reflective roofing materials, and energy-efficient shingles can significantly reduce heating and cooling costs for Denver homeowners. In Colorado\'s climate, both summer cooling and winter heating efficiency matter for long-term savings.',
      keywords: ['energy efficiency', 'insulation', 'ventilation', 'reflective materials', 'energy-efficient shingles', 'heating cooling costs']
    },
    {
      id: 'energy-2',
      category: 'energy',
      question: 'Why is roof ventilation important for Denver roofing systems?',
      answer: 'Proper roofing ventilation prevents ice dams in winter, reduces cooling costs in summer, prevents moisture buildup that can lead to mold and rot, and extends roofing material life by reducing temperature extremes common in Colorado weather.',
      keywords: ['roof ventilation', 'ice dams', 'cooling costs', 'moisture buildup', 'mold', 'rot', 'temperature extremes']
    },
    {
      id: 'energy-3',
      category: 'energy',
      question: 'What are cool roofing options for Denver Colorado homes?',
      answer: 'Light-colored or reflective roofing materials can reduce cooling costs and extend material life. Options include reflective shingles, metal roofing with reflective coatings, and tile roofing in lighter colors. Denver roofing contractors can recommend the best energy-efficient options for your home.',
      keywords: ['cool roofing', 'light-colored', 'reflective materials', 'reflective shingles', 'metal roofing', 'reflective coatings', 'tile roofing']
    },

    // Emergency Services
    {
      id: 'emergency-1',
      category: 'emergency',
      question: 'Does Spencer Roofing provide emergency roofing services in Denver?',
      answer: 'Yes, we offer 24/7 emergency roofing services for urgent issues like active leaks, storm damage, or structural concerns. We provide temporary roof repairs to prevent further damage while planning permanent roofing solutions for Denver area homeowners.',
      keywords: ['emergency services', '24/7', 'active leaks', 'storm damage', 'structural concerns', 'temporary repairs']
    },
    {
      id: 'emergency-2',
      category: 'emergency',
      question: 'What constitutes a roofing emergency in Denver Colorado?',
      answer: 'Roofing emergencies include active leaks, missing large sections of roofing, structural damage, fallen trees on the roof, or any situation where the home\'s interior is exposed to Colorado weather conditions requiring immediate attention from emergency roofing contractors.',
      keywords: ['roofing emergency', 'active leaks', 'missing sections', 'structural damage', 'fallen trees', 'exposed interior']
    },
    {
      id: 'emergency-3',
      category: 'emergency',
      question: 'How quickly can Denver emergency roofers respond?',
      answer: 'Spencer Roofing strives to respond to true roofing emergencies within 2-4 hours during business hours and within 24 hours for after-hours calls. Response times may vary during major Colorado storm events when demand for emergency roofing services is high.',
      keywords: ['response time', '2-4 hours', '24 hours', 'business hours', 'after-hours', 'storm events']
    },

    // Commercial Roofing
    {
      id: 'commercial-1',
      category: 'commercial',
      question: 'Do you provide commercial roofing services in Denver Colorado?',
      answer: 'Yes, Spencer Roofing offers comprehensive commercial roofing services including installation, repair, and maintenance for Denver area businesses. Our commercial roofing contractors have experience with flat roofing, metal roofing, and other commercial roofing systems.',
      keywords: ['commercial roofing', 'businesses', 'installation', 'repair', 'maintenance', 'flat roofing', 'metal roofing', 'commercial systems']
    },
    {
      id: 'commercial-2',
      category: 'commercial',
      question: 'What types of commercial roofing materials work best in Denver?',
      answer: 'Popular commercial roofing options in Denver include TPO roofing, EPDM roofing, modified bitumen, and metal roofing systems. Denver commercial roofing contractors can recommend the best solution based on your building\'s needs and Colorado climate considerations.',
      keywords: ['commercial materials', 'tpo roofing', 'epdm roofing', 'modified bitumen', 'metal roofing systems', 'building needs', 'climate considerations']
    }
  ];

  const categories: FAQCategory[] = [
    { id: 'all', title: 'All Questions', description: 'Browse all frequently asked questions', icon: 'HelpCircle', count: faqData.length },
    { id: 'general', title: 'General Roofing', description: 'Basic roofing questions and information', icon: 'Home', count: faqData.filter(item => item.category === 'general').length },
    { id: 'insurance', title: 'Hail Damage & Insurance', description: 'Insurance claims and hail damage coverage', icon: 'Shield', count: faqData.filter(item => item.category === 'insurance').length },
    { id: 'seasonal', title: 'Seasonal & Weather', description: 'Weather-related roofing considerations', icon: 'Cloud', count: faqData.filter(item => item.category === 'seasonal').length },
    { id: 'costs', title: 'Costs & Financing', description: 'Pricing and payment options', icon: 'DollarSign', count: faqData.filter(item => item.category === 'costs').length },
    { id: 'maintenance', title: 'Maintenance & Repair', description: 'Roof care and repair information', icon: 'Wrench', count: faqData.filter(item => item.category === 'maintenance').length },
    { id: 'contractors', title: 'Choosing Contractors', description: 'How to select the right roofer', icon: 'Users', count: faqData.filter(item => item.category === 'contractors').length },
    { id: 'energy', title: 'Energy Efficiency', description: 'Energy-saving roofing options', icon: 'Zap', count: faqData.filter(item => item.category === 'energy').length },
    { id: 'emergency', title: 'Emergency Services', description: 'Urgent roofing situations', icon: 'AlertTriangle', count: faqData.filter(item => item.category === 'emergency').length },
    { id: 'commercial', title: 'Commercial Roofing', description: 'Business roofing solutions', icon: 'Building', count: faqData.filter(item => item.category === 'commercial').length }
  ];

  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(item =>
        item.question.toLowerCase().includes(searchLower) ||
        item.answer.toLowerCase().includes(searchLower) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
    
    trackEvent('faq_question_toggle', selectedCategory, id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    trackEvent('faq_search', 'search_term', e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm('');
    trackEvent('faq_category_filter', 'category', category);
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Home", path: "/" },
            { label: "FAQ", path: "/faq", active: true }
          ]} 
        />
        
        <div className="py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common roofing questions from Denver's trusted roofing contractors. 
              Learn about hail damage, insurance claims, costs, materials, and more.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.title} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {filteredFAQs.length} of {faqData.length} questions
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or selecting a different category.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      onClick={() => toggleExpanded(faq.id)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        {expandedItems.has(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    
                    {expandedItems.has(faq.id) && (
                      <div className="px-6 pb-4">
                        <div className="border-t pt-4">
                          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contact CTA */}
          <div className="bg-primary/5 p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-6">
              Can't find what you're looking for? Our Denver roofing experts are here to help 
              with personalized answers to your specific roofing questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <div className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors text-center cursor-pointer">
                  Contact Our Experts
                </div>
              </Link>
              <a 
                href="tel:720-360-8546" 
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors text-center w-full sm:w-auto"
              >
                Call (720) 360-8546
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* CTA Section */}
      <CTASection 
        title="Ready to Get Started?"
        text="Contact Spencer Roofing Solutions for professional roofing services throughout the Denver metro area."
        buttonText="Get Free Estimate"
        buttonLink="/contact"
        showPhoneButton={true}
      />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": filteredFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default FAQ;