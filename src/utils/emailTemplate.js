// Email template for TEDx booking confirmation
export const generateBookingConfirmationEmail = (bookingData, paymentData) => {
  const { name, email, phone, tickets } = bookingData;
  const { payment_id, order_id, amount } = paymentData;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEDx NIT Andhra Pradesh - Booking Confirmation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #dc2626, #b91c1c);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
            font-weight: bold;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 30px 20px;
        }
        
        .success-icon {
            text-align: center;
            margin-bottom: 20px;
        }
        
        .success-icon .checkmark {
            width: 60px;
            height: 60px;
            background-color: #10b981;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            color: white;
        }
        
        .greeting {
            font-size: 18px;
            margin-bottom: 20px;
            color: #1f2937;
        }
        
        .booking-details {
            background-color: #f9fafb;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #dc2626;
        }
        
        .booking-details h3 {
            color: #dc2626;
            margin-bottom: 15px;
            font-size: 18px;
        }
        
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .detail-row:last-child {
            border-bottom: none;
        }
        
        .detail-label {
            font-weight: 600;
            color: #374151;
        }
        
        .detail-value {
            color: #6b7280;
        }
        
        .event-info {
            background-color: #fef2f2;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border: 1px solid #fecaca;
        }
        
        .event-info h3 {
            color: #dc2626;
            margin-bottom: 15px;
            font-size: 18px;
        }
        
        .event-details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        .event-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .event-icon {
            width: 20px;
            height: 20px;
            background-color: #dc2626;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 12px;
        }
        
        .important-notes {
            background-color: #fef3c7;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            border-left: 4px solid #f59e0b;
        }
        
        .important-notes h3 {
            color: #92400e;
            margin-bottom: 15px;
            font-size: 18px;
        }
        
        .notes-list {
            list-style: none;
        }
        
        .notes-list li {
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
        }
        
        .notes-list li:before {
            content: "⚠️";
            position: absolute;
            left: 0;
        }
        
        .footer {
            background-color: #1f2937;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .footer p {
            margin-bottom: 10px;
        }
        
        .social-links {
            margin-top: 15px;
        }
        
        .social-links a {
            color: #dc2626;
            text-decoration: none;
            margin: 0 10px;
        }
        
        .qr-code {
            text-align: center;
            margin: 20px 0;
        }
        
        .qr-placeholder {
            width: 150px;
            height: 150px;
            background-color: #f3f4f6;
            border: 2px dashed #d1d5db;
            border-radius: 8px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #6b7280;
            font-size: 14px;
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
            }
            
            .event-details {
                grid-template-columns: 1fr;
            }
            
            .detail-row {
                flex-direction: column;
                gap: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1>TEDx NIT Andhra Pradesh</h1>
            <p>Booking Confirmation</p>
        </div>
        
        <!-- Content -->
        <div class="content">
            <!-- Success Icon -->
            <div class="success-icon">
                <div class="checkmark">✓</div>
            </div>
            
            <!-- Greeting -->
            <div class="greeting">
                <strong>Dear ${name},</strong><br>
                Thank you for registering for TEDx NIT Andhra Pradesh! Your booking has been confirmed.
            </div>
            
            <!-- Booking Details -->
            <div class="booking-details">
                <h3>📋 Booking Details</h3>
                <div class="detail-row">
                    <span class="detail-label">Booking ID:</span>
                    <span class="detail-value">${order_id}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Payment ID:</span>
                    <span class="detail-value">${payment_id}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Tickets Booked:</span>
                    <span class="detail-value">${tickets} ${tickets === 1 ? 'Ticket' : 'Tickets'}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Amount Paid:</span>
                    <span class="detail-value">₹${amount}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Email:</span>
                    <span class="detail-value">${email}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Phone:</span>
                    <span class="detail-value">${phone}</span>
                </div>
            </div>
            
            <!-- Event Information -->
            <div class="event-info">
                <h3>🎯 Event Information</h3>
                <div class="event-details">
                    <div class="event-item">
                        <div class="event-icon">📅</div>
                        <div>
                            <strong>Date:</strong><br>
                            October 5th, 2024
                        </div>
                    </div>
                    <div class="event-item">
                        <div class="event-icon">🕐</div>
                        <div>
                            <strong>Time:</strong><br>
                            2:00 PM - 6:00 PM
                        </div>
                    </div>
                    <div class="event-item">
                        <div class="event-icon">📍</div>
                        <div>
                            <strong>Venue:</strong><br>
                            NIT Andhra Pradesh
                        </div>
                    </div>
                    <div class="event-item">
                        <div class="event-icon">🎤</div>
                        <div>
                            <strong>Speakers:</strong><br>
                            6 Inspiring Speakers
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- QR Code Placeholder -->
            <div class="qr-code">
                <div class="qr-placeholder">
                    QR Code<br>
                    (Generate with booking ID)
                </div>
            </div>
            
            <!-- Important Notes -->
            <div class="important-notes">
                <h3>📝 Important Instructions</h3>
                <ul class="notes-list">
                    <li>Please arrive at the venue 30 minutes before the event starts</li>
                    <li>Bring a valid government-issued ID for verification</li>
                    <li>Show this email or the QR code at the entrance</li>
                    <li>Parking facilities are available at the venue</li>
                    <li>Follow us on social media for event updates</li>
                </ul>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p><strong>TEDx NIT Andhra Pradesh</strong></p>
            <p>Spreading Ideas Worth Sharing</p>
            <div class="social-links">
                <a href="#">Facebook</a> |
                <a href="#">Instagram</a> |
                <a href="#">Twitter</a> |
                <a href="#">LinkedIn</a>
            </div>
            <p style="margin-top: 15px; font-size: 12px; opacity: 0.8;">
                This is an automated email. Please do not reply to this email.<br>
                For support, contact us at: info@tedxnitandhrapradesh.com
            </p>
        </div>
    </div>
</body>
</html>
  `;
};
