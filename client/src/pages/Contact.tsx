import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import Breadcrumb from '@/components/Breadcrumb';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

// Optimized form schema - only required fields are enforced
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  service: z.string().min(1, { message: 'Please select a service' }),
  phone: z.string().optional(),
  address: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "Contact Us | Spencer Roofing";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact Spencer Roofing for a free roof inspection and estimate. Professional roofing services in Denver - residential, commercial, repairs, and insurance claims assistance.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      phone: '',
      address: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest('/api/contact', 'POST', data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll contact you soon!",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Home", path: "/" },
            { label: "Contact Us", path: "/contact", active: true }
          ]} 
        />
        
        <div className="py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-lg mb-4">
              Get in touch with our roofing experts for a free inspection and estimate.
              We're here to help with all your roofing needs in the Denver metro area.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4" aria-hidden="true">
                  <i className="fas fa-phone text-primary"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a 
                    href="tel:720-360-8546" 
                    className="text-lg hover:text-primary hover:underline transition-colors cursor-pointer"
                    aria-label="Call Spencer Roofing at 720-360-8546"
                  >
                    720-360-8546 cell
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4" aria-hidden="true">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a 
                    href="mailto:mattkspencer@gmail.com" 
                    className="text-lg hover:text-primary hover:underline transition-colors cursor-pointer"
                    aria-label="Send email to Spencer Roofing at mattkspencer@gmail.com"
                  >
                    mattkspencer@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4" aria-hidden="true">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-lg">Englewood, Colorado</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-8">
              <h2 id="contact-form-heading" className="text-2xl font-bold mb-6">Get Your Free Roof Inspection</h2>
              
              {/* Trust Badges */}
              <div className="flex flex-col sm:flex-row items-center justify-center text-sm text-gray-600 py-3 mb-6 border-b border-gray-100">
                <div className="flex items-center mb-2 sm:mb-0">
                  <span className="text-green-600 mr-1">✓</span>
                  <span>Licensed & Insured</span>
                </div>
                <span className="hidden sm:inline mx-3 text-gray-400">|</span>
                <div className="flex items-center mb-2 sm:mb-0">
                  <span className="text-green-600 mr-1">✓</span>
                  <span>Serving Denver Since 2012</span>
                </div>
                <span className="hidden sm:inline mx-3 text-gray-400">|</span>
                <div className="flex items-center">
                  <span className="text-green-600 mr-1">✓</span>
                  <span>Free Estimates</span>
                </div>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" role="form" aria-labelledby="contact-form-heading">
                  {/* Full Name - Required */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Full Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-12 text-gray-700"
                            placeholder="Enter your full name"
                            aria-required="true"
                            aria-describedby="name-error"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" id="name-error" />
                      </FormItem>
                    )}
                  />

                  {/* Email Address - Required */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Email Address <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-12 text-gray-700"
                            placeholder="your.email@example.com"
                            aria-required="true"
                            aria-describedby="email-error"
                            autoComplete="email"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" id="email-error" />
                      </FormItem>
                    )}
                  />

                  {/* Service Needed - Required */}
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Service Needed <span className="text-red-500">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-12 text-gray-700" aria-required="true" aria-describedby="service-error">
                              <SelectValue placeholder="Select a Service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="inspection">Free Roof Inspection</SelectItem>
                            <SelectItem value="repair">Roof Repair</SelectItem>
                            <SelectItem value="installation">New Roof Installation</SelectItem>
                            <SelectItem value="insurance">Insurance Claims Assistance</SelectItem>
                            <SelectItem value="gutters">Gutter Installation/Repair</SelectItem>
                            <SelectItem value="emergency">Emergency Roof Repair</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />

                  {/* Phone Number - Optional */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="(720) 555-0123"
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-12 text-gray-700"
                            autoComplete="tel"
                            aria-describedby="phone-help"
                          />
                        </FormControl>
                        <p id="phone-help" className="text-sm text-gray-500 mt-1">Optional - We'll call you to schedule your free inspection</p>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />

                  {/* Property Address - Optional */}
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Property Address
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 h-12 text-gray-700"
                            placeholder="1234 Main St, Denver, CO 80202"
                            autoComplete="street-address"
                            aria-describedby="address-help"
                          />
                        </FormControl>
                        <p id="address-help" className="text-sm text-gray-500 mt-1">Optional - Address where roofing work is needed</p>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />

                  {/* Project Details - Optional */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Project Details
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your roofing needs or describe the issue..."
                            rows={4}
                            {...field}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-700 resize-none"
                            aria-describedby="message-help"
                          />
                        </FormControl>
                        <p id="message-help" className="text-sm text-gray-500 mt-1">Optional - Describe your roofing project, damage, or questions</p>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      disabled={contactMutation.isPending}
                      className="w-full md:w-auto md:min-w-[280px] h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200 shadow-md"
                      aria-describedby="submit-help"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2" aria-hidden="true"></i>
                          Sending...
                        </>
                      ) : "Schedule My Free Inspection"}
                    </Button>
                    
                    {/* Reassuring message */}
                    <p id="submit-help" className="text-sm text-gray-500 mt-3">
                      We typically reply within 12 hours
                    </p>
                  </div>
                </form>
              </Form>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.1280506698!2d-104.99519538565025!3d39.764381801354595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1654567890123!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Spencer Roofing Location"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Our Service Area</h3>
                  <p className="mb-4">
                    Spencer Roofing provides expert roofing services throughout the Denver metro area, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <ul className="space-y-1">
                        <li>• Denver</li>
                        <li>• Aurora</li>
                        <li>• Lakewood</li>
                        <li>• Arvada</li>
                        <li>• Westminster</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1">
                        <li>• Thornton</li>
                        <li>• Centennial</li>
                        <li>• Boulder</li>
                        <li>• Littleton</li>
                        <li>• Highlands Ranch</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 text-sm">
                    Not sure if we serve your area? Give us a call!
                  </p>
                </div>
              </div>
              
              <div className="bg-primary text-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-xl font-bold mb-4">Emergency Service</h3>
                <p className="mb-4">
                  Experiencing an urgent roofing issue? We offer 24/7 emergency roof repair services.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <i className="fas fa-phone-alt text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm">Call our emergency line</p>
                    <a 
                      href="tel:720-360-8546" 
                      className="text-xl font-bold hover:underline hover:text-gray-200 transition-colors cursor-pointer"
                    >
                      720-360-8546
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;