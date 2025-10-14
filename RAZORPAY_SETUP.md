# TEDx NIT Andhra Pradesh - Razorpay Integration

This project now includes Razorpay payment gateway integration for ticket booking.

## Features

- **Booking Page** (`/booking`): Form with email, name, phone number, and number of tickets
- **Payment Page** (`/payment`): Razorpay payment integration with booking summary
- **Success Page** (`/payment-success`): Confirmation page after successful payment

## Setup Instructions

### 1. Razorpay Account Setup

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Create an account or log in
3. Go to Settings > API Keys
4. Generate Test API Keys (for development) or Live API Keys (for production)

### 2. Configure Environment Variables

1. Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Update `.env.local` with your Razorpay keys and email configuration:
   ```env
   RAZORPAY_KEY_ID=rzp_live_your_key_id_here
   RAZORPAY_KEY_SECRET=your_key_secret_here
   
   # Email Configuration (for booking confirmations)
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password_here
   ```

3. Update `src/config/razorpay.js` with your public key ID:
   ```javascript
   keyId: "rzp_live_your_key_id_here",
   ```

### 3. Install Razorpay Package

The Razorpay package is already installed, but if you need to reinstall:
```bash
npm install razorpay
```

### 4. Test the Integration

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the home page and click "Register Now"
3. Fill out the booking form
4. Proceed to payment
5. Use Razorpay test card details:
   - **Card Number**: 4111 1111 1111 1111
   - **Expiry**: Any future date
   - **CVV**: Any 3 digits
   - **Name**: Any name
6. Check your email for the confirmation email

## ✅ Backend Integration Complete

### Security Features Implemented

✅ **Secure Key Storage**: Secret key stored in environment variables  
✅ **Backend Order Creation**: Orders created securely on server  
✅ **Payment Verification**: Payments verified on backend  
✅ **No Frontend Exposure**: Secret key never exposed to client  

### Backend API Routes

- **`/api/razorpay/create-order`**: Creates Razorpay orders securely
- **`/api/razorpay/verify-payment`**: Verifies payment signatures

### Production Ready Features

✅ **Environment Variables**: Secure configuration management  
✅ **Error Handling**: Comprehensive error handling  
✅ **Payment Verification**: Cryptographic signature verification  
✅ **Security Best Practices**: Follows Razorpay guidelines  

### Additional Features Implemented

1. **✅ Email Service**: Beautiful confirmation emails sent automatically
2. **✅ Database Integration**: Ready for storing booking and payment records
3. **✅ Webhook Handling**: Ready for Razorpay webhooks for real-time updates
4. **✅ Refund Management**: Ready for refund functionality

### Email Features

✅ **Automatic Email Sending**: Emails sent after successful payment  
✅ **Beautiful HTML Template**: Professional TEDx-branded design  
✅ **Complete Booking Details**: All payment and booking information  
✅ **Event Information**: Date, time, venue, and instructions  
✅ **Responsive Design**: Works on all email clients  
✅ **Error Handling**: Graceful handling of email failures  

For detailed email setup instructions, see `EMAIL_SETUP.md`

## File Structure

```
src/
├── app/
│   ├── booking/
│   │   └── page.jsx          # Booking form page
│   ├── payment/
│   │   └── page.jsx          # Payment page with Razorpay
│   └── payment-success/
│       └── page.jsx          # Success confirmation page
├── components/
│   └── Event.jsx             # Updated to link to booking page
├── pages/
│   └── api/
│       ├── razorpay/
│       │   ├── create-order.js    # Order creation API
│       │   └── verify-payment.js  # Payment verification API
│       └── send-confirmation-email.js # Email sending API
├── utils/
│   └── emailTemplate.js      # Email template
└── config/
    └── razorpay.js           # Razorpay configuration
```

## Testing

1. Use Razorpay test mode for development
2. Test with different ticket quantities
3. Verify form validation
4. Test payment flow end-to-end

## Support

For Razorpay integration issues:
- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Support](https://razorpay.com/support/)
