import { useEffect } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Spencer Roofing";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Spencer Roofing privacy policy. Learn how we collect, use, and protect your personal information when you contact us for roofing services.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { label: "Home", path: "/" },
            { label: "Privacy Policy", path: "/privacy-policy", active: true }
          ]} 
        />
        
        <div className="py-12 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="mb-4">
                When you contact Spencer Roofing through our website, we collect the following personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Name:</strong> To identify you and personalize our communication</li>
                <li><strong>Email Address:</strong> To respond to your inquiries and send project updates</li>
                <li><strong>Phone Number:</strong> To contact you directly about your roofing project</li>
                <li><strong>Property Address:</strong> To locate your property for estimates and services</li>
                <li><strong>Service Type:</strong> To understand your specific roofing needs</li>
                <li><strong>Project Details:</strong> Any additional information you provide about your roofing project</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use your personal information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Primary Purpose:</strong> To contact you about your roofing project, provide estimates, and deliver services</li>
                <li><strong>Customer Service:</strong> To respond to your questions and provide support</li>
                <li><strong>Project Management:</strong> To schedule appointments, track project progress, and coordinate services</li>
                <li><strong>Optional Marketing:</strong> Only if you specifically consent, we may send helpful roofing tips, maintenance reminders, and special offers via email or SMS</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Marketing Consent</h2>
              <p className="mb-4">
                We only send marketing communications if you explicitly opt-in by checking the consent boxes on our contact form:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Email Marketing:</strong> Roofing tips, maintenance reminders, and special offers</li>
                <li><strong>SMS Marketing:</strong> Text messages about services, tips, and promotions (requires express written consent)</li>
              </ul>
              <p className="mb-4">
                You can opt out of marketing communications at any time by:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Clicking the unsubscribe link in any marketing email</li>
                <li>Replying "STOP" to any marketing text message</li>
                <li>Contacting us directly using the information below</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Sharing and Third Parties</h2>
              <p className="mb-4">
                <strong>We do not sell, rent, or share your personal information with third parties for their marketing purposes.</strong>
              </p>
              <p className="mb-4">
                We may share your information only in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>With trusted service providers who help us operate our business (like email services)</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In the event of a business transfer (merger, acquisition, etc.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="mb-4">
                We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. 
                However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="mb-4">
                We retain your personal information for as long as necessary to provide our services and for legitimate business purposes. 
                Marketing consent records are kept to comply with legal requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Request access to your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of marketing communications at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or want to exercise your rights regarding your personal information, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Spencer Roofing</strong></p>
                <p>Email: <a href="mailto:mattkspencer@gmail.com" className="text-blue-600 hover:underline">mattkspencer@gmail.com</a></p>
                <p>Phone: <a href="tel:720-360-8546" className="text-blue-600 hover:underline">720-360-8546</a></p>
                <p>Location: Englewood, Colorado</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website. 
                Your continued use of our services after any changes indicates your acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;