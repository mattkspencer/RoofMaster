import { sendContactFormEmail } from './emailService';

// Test email delivery directly
const testEmailDelivery = async () => {
  console.log('Testing email delivery to mattkspencer@gmail.com...');
  console.log('GMAIL_USER:', process.env.GMAIL_USER ? 'Set' : 'Not set');
  console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? 'Set' : 'Not set');
  
  const testData = {
    name: 'Test Customer',
    email: 'test@example.com',
    phone: '720-555-0123',
    service: 'Email Test',
    message: 'Testing email delivery system'
  };
  
  try {
    const result = await sendContactFormEmail(testData);
    console.log('Email delivery result:', result);
  } catch (error) {
    console.error('Email delivery error:', error);
  }
};

testEmailDelivery();