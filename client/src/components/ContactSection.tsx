import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient'; 
import { trackEvent } from '@/lib/analytics';

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
  hearAbout: string;
  emailConsent: boolean;
  smsConsent: boolean;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: '',
    hearAbout: '',
    emailConsent: false,
    smsConsent: false
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.service) newErrors.service = 'Please select a service';
    
    // SMS consent validation
    if (formData.smsConsent && !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for SMS marketing consent';
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
      await apiRequest('/api/contact', 'POST', formData);
      
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
        hearAbout: '',
        emailConsent: false,
        smsConsent: false
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
          <h2 className="text-3xl font-bold font-sans mb-4">Contact Us</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Get in touch with us for a free consultation or to schedule a roof inspection.
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
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-gray-700 mb-2">Property Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">Service Needed *</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  >
                    <option value="">Select a Service</option>
                    <option value="residential">Residential Roofing</option>
                    <option value="commercial">Commercial Roofing</option>
                    <option value="repair">Roof Repair</option>
                    <option value="inspection">Free Roof Inspection</option>
                    <option value="insurance">Insurance Claim Assistance</option>
                    <option value="gutters">Gutter Installation/Repair</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Project Details</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="hearAbout" className="block text-gray-700 mb-2">How did you hear about us?</label>
                  <select 
                    id="hearAbout" 
                    name="hearAbout" 
                    value={formData.hearAbout}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
                
                {/* Marketing Consent Checkboxes */}
                <div className="border-t pt-6 space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Marketing Preferences (Optional)</h3>
                  
                  {/* Email Marketing Consent */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="emailConsent"
                      name="emailConsent"
                      checked={formData.emailConsent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="emailConsent" className="text-sm text-gray-700 leading-relaxed">
                      Send me helpful roofing tips, maintenance reminders, and special offers via email. You can unsubscribe anytime.
                    </label>
                  </div>
                  
                  {/* SMS Marketing Consent */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="smsConsent"
                      name="smsConsent"
                      checked={formData.smsConsent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="smsConsent" className="text-sm text-gray-700 leading-relaxed">
                      By checking this box, I give my express written consent for Spencer Roofing to send me marketing text messages about roofing services, tips, and promotions to the phone number provided. I understand that message and data rates may apply, message frequency varies, and I can opt out by replying STOP at any time.
                    </label>
                  </div>
                  
                  {/* Legal Disclaimer */}
                  <div className="text-xs text-gray-700 mt-4 leading-relaxed">
                    By submitting this form, you agree to our{' '}
                    <a href="/terms-of-service" className="text-blue-700 underline hover:text-blue-900 font-medium">Terms of Service</a>{' '}
                    and{' '}
                    <a href="/privacy-policy" className="text-blue-700 underline hover:text-blue-900 font-medium">Privacy Policy</a>.
                    Your information will only be used to contact you about your roofing project and, if you opt-in above, to send marketing communications.
                  </div>
                </div>
                
                {submitError && (
                  <div className="bg-red-50 text-red-500 p-3 rounded-md">
                    {submitError}
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors flex justify-center shadow-md"
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
                  ) : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
          
          <div>
            <div className="bg-gray-50 rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <i className="fas fa-phone text-blue-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:720-360-8546" className="text-blue-600 hover:underline">720-360-8546</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <i className="fas fa-envelope text-blue-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:mattkspencer@gmail.com" className="text-blue-600 hover:underline">mattkspencer@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <i className="fas fa-map-marker-alt text-blue-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>Englewood, Colorado</p>
                    <p className="text-gray-600">Serving the entire Denver metropolitan area</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <i className="fas fa-clock text-blue-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p>Monday - Friday: 8am - 6pm</p>
                    <p>Emergency services available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
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
