# Email Configuration Guide

## Setting Up Email Service for TEDx Booking Confirmations

### 1. Gmail Setup (Recommended)

#### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to Security → 2-Step Verification
3. Enable 2-Step Verification if not already enabled

#### Step 2: Generate App Password
1. Go to Security → App passwords
2. Select "Mail" as the app
3. Select "Other" as the device and enter "TEDx App"
4. Copy the generated 16-character password

#### Step 3: Update Environment Variables
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_character_app_password
```

### 2. Alternative Email Services

#### Outlook/Hotmail
```javascript
// In send-confirmation-email.js, change:
service: 'hotmail'
```

#### Yahoo Mail
```javascript
// In send-confirmation-email.js, change:
service: 'yahoo'
```

#### Custom SMTP
```javascript
// In send-confirmation-email.js, replace transporter config:
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### 3. Testing Email Functionality

#### Test During Payment Flow
1. Complete a test payment using Razorpay test cards
2. Check your email for the confirmation
3. Verify all details are correct

#### Test Email API Directly (Optional)
```bash
curl -X POST http://localhost:3000/api/send-confirmation-email \
  -H "Content-Type: application/json" \
  -d '{
    "bookingData": {
      "name": "Test User",
      "email": "test@example.com",
      "phone": "1234567890",
      "tickets": 2
    },
    "paymentData": {
      "payment_id": "pay_test123",
      "order_id": "order_test123",
      "amount": 2
    }
  }'
```

### 4. Email Template Features

✅ **Beautiful HTML Design** - Professional TEDx branding  
✅ **Responsive Layout** - Works on all devices  
✅ **Booking Details** - Complete booking information  
✅ **Event Information** - Date, time, venue details  
✅ **Important Instructions** - What to bring, arrival time  
✅ **QR Code Placeholder** - Ready for QR code integration  
✅ **Social Media Links** - TEDx social presence  

### 5. Email Content Includes

- **Booking ID & Payment ID**
- **Number of tickets purchased**
- **Amount paid**
- **Customer contact details**
- **Event date and time**
- **Venue information**
- **Important instructions**
- **Contact information**

### 6. Troubleshooting

#### Common Issues:

1. **"Invalid login" error**
   - Use app password, not regular password
   - Ensure 2FA is enabled

2. **"Connection timeout" error**
   - Check internet connection
   - Verify email service settings

3. **Email not received**
   - Check spam folder
   - Verify email address is correct

#### Debug Mode:
Add this to your API to see detailed logs:
```javascript
console.log('Email config:', {
  service: 'gmail',
  user: process.env.EMAIL_USER,
  // Don't log password!
});
```

### 7. Production Considerations

1. **Use dedicated email service** (SendGrid, Mailgun, etc.)
2. **Implement email queuing** for high volume
3. **Add email templates** for different languages
4. **Set up email analytics** and tracking
5. **Implement retry logic** for failed emails

### 8. Security Notes

- ✅ Email credentials stored in environment variables
- ✅ No sensitive data in email logs
- ✅ Email sending doesn't block payment verification
- ✅ Graceful error handling for email failures
