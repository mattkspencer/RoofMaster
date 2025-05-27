import nodemailer from 'nodemailer';

// Email service configuration using Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Interface for contact form data
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address?: string | null | undefined;
  service: string;
  message?: string | null | undefined;
  hearAbout?: string | null | undefined;
}

// Send contact form notification email
export const sendContactFormEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    // Email content for the business owner
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'mattkspencer@gmail.com',
      subject: `New Contact Form Submission - Spencer Roofing`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a></p>
            ${formData.address ? `<p><strong>Address:</strong> ${formData.address}</p>` : ''}
          </div>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #059669; margin-top: 0;">Service Information</h3>
            <p><strong>Service Requested:</strong> ${formData.service}</p>
            ${formData.hearAbout ? `<p><strong>How they heard about us:</strong> ${formData.hearAbout}</p>` : ''}
          </div>
          
          ${formData.message ? `
          <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #ea580c; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This email was automatically generated from your Spencer Roofing website contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString('en-US', { 
              timeZone: 'America/Denver',
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })} (Denver Time)</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Contact form email sent successfully to mattkspencer@gmail.com');
    return true;
    
  } catch (error) {
    console.error('Error sending contact form email:', error);
    return false;
  }
};

// Send confirmation email to the customer
export const sendCustomerConfirmationEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: formData.email,
      subject: 'Thank you for contacting Spencer Roofing',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Thank You for Contacting Spencer Roofing
          </h2>
          
          <p>Dear ${formData.name},</p>
          
          <p>Thank you for reaching out to Spencer Roofing! We have received your inquiry regarding <strong>${formData.service}</strong> and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">What happens next?</h3>
            <ul style="color: #374151;">
              <li>We'll review your request and contact information</li>
              <li>A Spencer Roofing specialist will call you at ${formData.phone}</li>
              <li>We'll schedule a free consultation at your convenience</li>
              <li>You'll receive a detailed estimate for your roofing needs</li>
            </ul>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #059669; margin-top: 0;">Need Immediate Assistance?</h3>
            <p>For urgent roofing issues or questions, feel free to call us directly:</p>
            <p style="font-size: 18px; font-weight: bold; color: #2563eb;">
              📞 <a href="tel:720-360-8546" style="color: #2563eb; text-decoration: none;">720-360-8546</a>
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p><strong>Spencer Roofing Solutions</strong><br>
            Licensed & Insured | Serving Denver Since 2012<br>
            📧 mattkspencer@gmail.com<br>
            📍 Englewood, Colorado</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Customer confirmation email sent successfully');
    return true;
    
  } catch (error) {
    console.error('Error sending customer confirmation email:', error);
    return false;
  }
};