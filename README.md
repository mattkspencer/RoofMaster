# Spencer Roofing Solutions Website

A professional roofing contractor website built with React, Node.js, and Express, featuring a comprehensive contact form with email delivery system.

## Features

- **Contact Form Email Delivery**: Automatically sends contact form submissions to mattkspencer@gmail.com
- **Customer Confirmation Emails**: Sends professional confirmation emails to customers
- **Form Validation**: Server-side validation for all form fields including email format validation
- **Roofing Assistant Chatbot**: AI-powered assistant with comprehensive roofing knowledge
- **Google Analytics Integration**: Track visitor behavior and form submissions
- **Mobile-Responsive Design**: Optimized for all devices
- **Professional Trust Signals**: Licensed & insured badges with hover animations

## Setup Instructions

### 1. Environment Variables Configuration

The website requires several environment variables to be configured in Replit's Secrets tab:

#### Required Email Configuration:
```
GMAIL_USER=mattkspencer@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
```

#### Google Analytics (Optional):
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 2. Gmail App Password Setup

To enable email delivery through Gmail's SMTP server:

1. **Enable 2-Factor Authentication**:
   - Go to your Google Account settings
   - Select "Security" > "2-Step Verification"
   - Follow the setup process if not already enabled

2. **Create App Password**:
   - Go to "Security" > "App passwords"
   - Select "Mail" as the app
   - Generate a new 16-character password
   - Use this password as `GMAIL_APP_PASSWORD` (not your regular Gmail password)

3. **Add to Replit Secrets**:
   - In your Replit project, click on "Secrets" tab
   - Add `GMAIL_USER` with value: `mattkspencer@gmail.com`
   - Add `GMAIL_APP_PASSWORD` with your generated app password

### 3. Contact Form Configuration

The contact form includes the following validated fields:
- **Name** (required): Customer's full name
- **Email** (required): Validated email format
- **Phone** (required): Customer's phone number
- **Address** (optional): Property address
- **Service** (required): Type of roofing service needed
- **Message** (optional): Additional details
- **How did you hear about us?** (optional): Marketing source tracking

### 4. Email Templates

The system sends two types of emails:

#### Business Owner Notification Email:
- Sent to: `mattkspencer@gmail.com`
- Subject: "New Contact Form Submission - Spencer Roofing"
- Contains: All form data in a professional HTML format with company branding

#### Customer Confirmation Email:
- Sent to: Customer's email address
- Subject: "Thank you for contacting Spencer Roofing"
- Contains: Confirmation message, next steps, and contact information

### 5. Server-Side Validation

The backend validates all form submissions:
- **Required fields**: Name, email, phone, service
- **Email format**: Uses regex validation for proper email format
- **Data sanitization**: All inputs are validated before processing
- **Error handling**: Proper error responses for validation failures

### 6. Error Handling

The system includes comprehensive error handling:
- **Email delivery failures**: Logged but don't prevent form submission storage
- **Validation errors**: Returns specific field-level error messages
- **Server errors**: Generic error messages to prevent information disclosure
- **Fallback storage**: Form submissions are always saved to storage even if email fails

## Technology Stack

- **Frontend**: React with TypeScript, Tailwind CSS
- **Backend**: Node.js with Express
- **Email Service**: Nodemailer with Gmail SMTP
- **Validation**: Zod schema validation
- **Analytics**: Google Analytics 4
- **Hosting**: Replit with automatic deployments

## API Endpoints

### POST /api/contact
Handles contact form submissions with email delivery.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "720-555-0123",
  "address": "123 Main St, Denver, CO",
  "service": "Roof Repair",
  "message": "I need help with a leak",
  "hearAbout": "Google Search"
}
```

**Success Response:**
```json
{
  "message": "Contact form submitted successfully",
  "submission": {
    "id": 1,
    "createdAt": "2024-01-27T10:30:00Z"
  },
  "emailSent": true,
  "confirmationSent": true
}
```

## Development

1. **Install Dependencies**: `npm install`
2. **Set Environment Variables**: Configure secrets in Replit
3. **Start Development Server**: `npm run dev`
4. **Access Website**: Open the Replit URL

## Security Features

- **Environment Variable Protection**: Sensitive credentials stored in Replit Secrets
- **Input Validation**: All form inputs validated and sanitized
- **SMTP Authentication**: Secure Gmail App Password authentication
- **Error Handling**: Prevents information disclosure through error messages

## Contact Information

**Spencer Roofing Solutions**
- **Phone**: 720-360-8546
- **Email**: mattkspencer@gmail.com
- **Location**: Englewood, Colorado
- **Established**: 2012

Licensed & Insured | Serving Denver Metro Area

---

For technical support or questions about this website, please contact the development team or refer to the Replit project documentation.