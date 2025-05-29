import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient'; 
import { trackEvent } from '@/lib/analytics';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
  hearAbout: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: 'inspection', // Default to Free Inspection
    message: '',
    hearAbout: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [useDetailedForm, setUseDetailedForm] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [completedFields, setCompletedFields] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Track completed fields for real-time validation
    if (value.trim()) {
      setCompletedFields(prev => prev.includes(name) ? prev : [...prev, name]);
    } else {
      setCompletedFields(prev => prev.filter(field => field !== name));
    }
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    // Only validate required fields
    if (!formData.name.trim()) newErrors.name = 'We need your name to personalize your quote';
    if (!formData.phone.trim()) newErrors.phone = 'We need your phone number to schedule your inspection';
    if (!formData.service) newErrors.service = 'Please select the service you need';
    
    // Only validate email if provided (optional in quick form)
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      await apiRequest('POST', '/api/contact', formData);
      
      // Track form submission
      trackEvent('contact_form_submit', 'form', formData.service);
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        service: '',
        message: '',
        hearAbout: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting the form. Please try again or call us directly.');
      // Track form error
      trackEvent('contact_form_error', 'form', 'submission_error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-sans mb-4">Get Your Free Quote</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Quick 3-field form for immediate response, or detailed form for comprehensive assessment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <i className="fas fa-check-circle text-green-500 text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="mb-4">Your message has been received. We'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                {/* Form Toggle */}
                <div className="mb-6 flex justify-center">
                  <div className="bg-gray-100 p-1 rounded-lg flex">
                    <button
                      type="button"
                      onClick={() => setUseDetailedForm(false)}
                      className={`px-4 py-2 rounded-md font-medium transition-colors ${
                        !useDetailedForm 
                          ? 'bg-primary text-white shadow-sm' 
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      Quick Quote
                    </button>
                    <button
                      type="button"
                      onClick={() => setUseDetailedForm(true)}
                      className={`px-4 py-2 rounded-md font-medium transition-colors ${
                        useDetailedForm 
                          ? 'bg-primary text-white shadow-sm' 
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      Detailed Form
                    </button>
                  </div>
                </div>

                {/* Progress Indicator for Quick Quote */}
                {!useDetailedForm && (
                  <div className="mb-6 text-center">
                    <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
                      <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                      <span className="text-green-700 font-medium">Step 1 of 1 • Simple & Fast</span>
                    </div>
                  </div>
                )}

                <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                  {/* Required Fields */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label htmlFor="name" className="block font-semibold text-gray-800 mb-2">
                          Name <span className="text-red-400 text-sm">*</span>
                        </label>
                        <div className="relative">
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border-2 ${
                              errors.name ? 'border-red-300' : completedFields.includes('name') ? 'border-green-300' : 'border-gray-200'
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg`}
                            placeholder="Your full name"
                          />
                          {completedFields.includes('name') && !errors.name && (
                            <Check className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                          )}
                        </div>
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      
                      <div className="relative">
                        <label htmlFor="phone" className="block font-semibold text-gray-800 mb-2">
                          Phone <span className="text-red-400 text-sm">*</span>
                        </label>
                        <div className="relative">
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border-2 ${
                              errors.phone ? 'border-red-300' : completedFields.includes('phone') ? 'border-green-300' : 'border-gray-200'
                            } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg`}
                            placeholder="(720) 360-8546"
                          />
                          {completedFields.includes('phone') && !errors.phone && (
                            <Check className="absolute right-3 top-3 h-5 w-5 text-green-500" />
                          )}
                        </div>
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="service" className="block font-semibold text-gray-800 mb-2">
                        Service Needed <span className="text-red-400 text-sm">*</span>
                      </label>
                      <div className="relative">
                        <select 
                          id="service" 
                          name="service" 
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border-2 ${
                            errors.service ? 'border-red-300' : completedFields.includes('service') ? 'border-green-300' : 'border-gray-200'
                          } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg`}
                        >
                          <option value="inspection">Free Roof Inspection</option>
                          <option value="emergency">Emergency Repair</option>
                          <option value="insurance">Insurance Claim</option>
                          <option value="residential">New Roof Installation</option>
                          <option value="commercial">Commercial Roofing</option>
                          <option value="repair">Roof Repair</option>
                          <option value="gutters">Gutter Services</option>
                          <option value="other">Other</option>
                        </select>
                        {completedFields.includes('service') && !errors.service && (
                          <Check className="absolute right-8 top-3 h-5 w-5 text-green-500" />
                        )}
                      </div>
                      {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                    </div>
                  </div>

                  {/* Optional Fields Toggle */}
                  {!useDetailedForm && (
                    <div className="border-t pt-6">
                      <button
                        type="button"
                        onClick={() => setShowOptionalFields(!showOptionalFields)}
                        className="flex items-center justify-center w-full text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        <span className="mr-2">Additional Details (Optional)</span>
                        {showOptionalFields ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                    </div>
                  )}

                  {/* Optional Fields */}
                  {(useDetailedForm || showOptionalFields) && (
                    <div className="space-y-6 pt-4 border-t">
                      <div>
                        <label htmlFor="email" className="block text-gray-600 mb-2 text-sm">
                          Email Address <span className="text-gray-400">(Get project updates via email)</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-200'} rounded-md focus:outline-none focus:ring-1 focus:ring-primary`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-gray-600 mb-2 text-sm">Property Address</label>
                        <input 
                          type="text" 
                          id="address" 
                          name="address" 
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Property address for accurate estimate"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-gray-600 mb-2 text-sm">Message</label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows={3} 
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          placeholder="Brief description of your needs"
                        ></textarea>
                      </div>
                      
                      {useDetailedForm && (
                        <div>
                          <label htmlFor="hearAbout" className="block text-gray-600 mb-2 text-sm">How did you hear about us?</label>
                          <select 
                            id="hearAbout" 
                            name="hearAbout" 
                            value={formData.hearAbout}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          >
                            <option value="">Select an option</option>
                            <option value="google">Google Search</option>
                            <option value="referral">Referral</option>
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="drive-by">Saw a Job in Progress</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {submitError && (
                    <div className="bg-red-50 text-red-500 p-3 rounded-md">
                      {submitError}
                    </div>
                  )}

                  {/* Trust Signals */}
                  <div className="text-center text-sm text-gray-500 py-2">
                    No obligation • Licensed & Insured • Response within 2 hours
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-6 rounded-lg transition-colors flex justify-center text-lg shadow-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (useDetailedForm ? 'Get My Free Quote' : 'Schedule My Inspection')}
                  </button>
                </form>
              </div>
            )}
          </div>
          
          <div>
            <div className="bg-neutral-light rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:720-360-8546" className="text-primary hover:underline">720-360-8546</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:mattkspencer@gmail.com" className="text-primary hover:underline">mattkspencer@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>Englewood, Colorado</p>
                    <p className="text-gray-600">Serving the entire Denver metropolitan area</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <i className="fas fa-clock text-primary"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p>Monday - Friday: 8am - 6pm</p>
                    <p>Emergency services available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-light rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold mb-6">Service Area</h3>
              <p className="mb-4">We proudly serve the Denver metropolitan area and surrounding suburbs within a 2-hour radius.</p>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md h-64 relative">
                <iframe 
                  title="Denver Metropolitan Service Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.53980234532!2d-104.99519637970702!3d39.76451936682995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1645564505249!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}}
                  loading="lazy"
                  className="rounded-md absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
