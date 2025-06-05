import { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | Spencer Roofing Solutions";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Terms of service for Spencer Roofing Solutions. Understand our service expectations, policies, and terms for roofing projects in the Denver metro area.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Home", path: "/" },
            { label: "Terms of Service", path: "/terms-of-service", active: true }
          ]} 
        />
        
        <div className="py-12 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
              <p className="mb-4">
                By using the Spencer Roofing Solutions website or contacting us for services, you agree to these terms. 
                If you don't agree with any part of these terms, please don't use our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Our Services</h2>
              <p className="mb-4">Spencer Roofing Solutions provides:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Residential and commercial roofing installation</li>
                <li>Roof repairs and maintenance</li>
                <li>Insurance claim assistance</li>
                <li>Gutter installation and repair</li>
                <li>Free roof inspections and estimates</li>
              </ul>
              <p className="mb-4">
                We serve the Denver metropolitan area and surrounding communities within a 2-hour radius.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Service Expectations</h2>
              <h3 className="text-xl font-semibold mb-3">What We Promise</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Professional, licensed, and insured roofing services</li>
                <li>Honest assessments and fair pricing</li>
                <li>Quality workmanship with appropriate warranties</li>
                <li>Timely communication about project status</li>
                <li>Respect for your property and cleanup after work</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">What We Expect</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Accurate information about your roofing needs</li>
                <li>Safe access to your property for inspections and work</li>
                <li>Timely payment according to agreed terms</li>
                <li>Reasonable notice for scheduling changes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Estimates and Pricing</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Free estimates are provided without obligation</li>
                <li>Estimates are valid for 30 days unless otherwise specified</li>
                <li>Final pricing may vary if additional work is discovered</li>
                <li>We will discuss any changes before proceeding with additional work</li>
                <li>Payment terms will be clearly outlined in your service agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Insurance and Permits</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We carry appropriate liability and workers' compensation insurance</li>
                <li>We assist with insurance claims but cannot guarantee claim approval</li>
                <li>Necessary permits are the responsibility of the property owner unless otherwise agreed</li>
                <li>We will advise you of permit requirements for your project</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Warranties</h2>
              <p className="mb-4">
                We provide warranties on our workmanship as specified in your service agreement. 
                Material warranties are provided by the manufacturer. Warranty terms vary by project type and will be clearly explained before work begins.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Website Use</h2>
              <p className="mb-4">Our website is provided for informational purposes. You agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Use the website lawfully and respectfully</li>
                <li>Provide accurate information in contact forms</li>
                <li>Not attempt to damage or disrupt the website</li>
                <li>Respect our intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by law, Spencer Roofing Solutions shall not be liable for any indirect, 
                incidental, special, or consequential damages arising from our services or website use.
              </p>
              <p className="mb-4">
                Our total liability for any claim shall not exceed the amount paid for the specific service in question.
              </p>
              <p className="mb-4">
                This limitation does not affect any warranties or guarantees specifically provided in your service agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Force Majeure</h2>
              <p className="mb-4">
                We are not responsible for delays or inability to perform services due to circumstances beyond our reasonable control, 
                including severe weather, natural disasters, material shortages, or government restrictions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
              <p className="mb-4">
                We prefer to resolve any issues directly through open communication. If you have concerns about our services, 
                please contact us immediately so we can address them promptly.
              </p>
              <p className="mb-4">
                Any disputes will be governed by Colorado state law and resolved in the appropriate courts of Colorado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="mb-4">
                We may update these terms occasionally. Material changes will be posted on our website. 
                Continued use of our services indicates acceptance of updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-4">
                Questions about these terms? Contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Spencer Roofing Solutions</strong></p>
                <p>Email: <a href="mailto:mattkspencer@gmail.com" className="text-blue-600 hover:underline">mattkspencer@gmail.com</a></p>
                <p>Phone: <a href="tel:720-360-8546" className="text-blue-600 hover:underline">720-360-8546</a></p>
                <p>Location: Englewood, Colorado</p>
                <p>Hours: Monday - Friday: 8am - 6pm</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;