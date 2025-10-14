#!/bin/bash

# TEDx Razorpay Setup Script
echo "🚀 Setting up TEDx Razorpay Integration..."

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    cp env.example .env.local
    echo "✅ Created .env.local file"
    echo "⚠️  Please update .env.local with your actual Razorpay keys!"
else
    echo "✅ .env.local already exists"
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your Razorpay keys"
echo "2. Update src/config/razorpay.js with your public key ID"
echo "3. Run 'npm run dev' to start the development server"
echo "4. Test the payment flow!"
echo ""
echo "For detailed instructions, see RAZORPAY_SETUP.md"
