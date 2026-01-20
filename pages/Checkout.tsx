
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [booking, setBooking] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<'summary' | 'payment' | 'success'>('summary');

  useEffect(() => {
    const saved = localStorage.getItem('lastBooking');
    if (!saved) {
      navigate('/');
      return;
    }
    setBooking(JSON.parse(saved));
  }, [navigate]);

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate Payment Gateway (Stripe/PayPal)
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsProcessing(false);
    setStep('success');
    localStorage.removeItem('lastBooking'); // Clear session
  };

  if (!booking) return null;

  if (step === 'success') {
    return (
      <div className="pt-40 pb-24 container mx-auto px-6 text-center">
        <div className="max-w-md mx-auto bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl">✓</div>
          <h1 className="text-3xl font-black mb-4">Payment Successful!</h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Congratulations! Your seat for <strong>{booking.tourName}</strong> has been reserved. Check your email for details.
          </p>
          <div className="p-6 bg-slate-50 rounded-2xl mb-8 text-left">
            <p className="text-xs text-slate-400 font-bold uppercase mb-2">Order Reference</p>
            <p className="font-mono text-navy font-bold">ST-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
          <Link to="/" className="inline-block bg-navy text-white px-10 py-4 rounded-xl font-bold hover:bg-light-blue transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div>
            <h2 className="text-3xl font-black mb-8">Order Summary</h2>
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
              <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-slate-100">
                <div className="w-24 h-24 rounded-2xl bg-slate-100 overflow-hidden">
                  <img src="https://picsum.photos/id/1015/200/200" alt="Tour" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{booking.tourName}</h3>
                  <p className="text-slate-500 text-sm">{booking.travelDate} • {booking.persons} Persons</p>
                  <span className="inline-block bg-navy/5 text-navy px-2 py-0.5 rounded text-[10px] font-bold uppercase mt-2">{booking.packageType}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-slate-500">
                  <span>Base Fare ({booking.persons} x PKR {(booking.totalPrice / booking.persons).toLocaleString()})</span>
                  <span>PKR {booking.totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Service Fee</span>
                  <span>PKR 500</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between">
                  <span className="text-xl font-bold">Total Amount</span>
                  <span className="text-2xl font-black text-navy">PKR {(booking.totalPrice + 500).toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-2xl flex items-start space-x-4 border border-blue-100">
              <span className="text-2xl">🛡️</span>
              <p className="text-sm text-blue-900 leading-relaxed">
                Your booking is protected by Sandhu Travels. Flexible cancellation available up to 72 hours before departure.
              </p>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="text-3xl font-black mb-8">Secure Payment</h2>
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
              <p className="text-slate-500 mb-8">Select your preferred payment method to complete the reservation.</p>
              
              <div className="space-y-4 mb-8">
                <label className="flex items-center p-5 rounded-2xl border-2 border-light-blue bg-sky-50 cursor-pointer">
                  <input type="radio" name="payment" defaultChecked className="w-5 h-5 text-light-blue" />
                  <div className="ml-4 flex-grow">
                    <p className="font-bold">Card Payment / Mobile Wallet</p>
                    <p className="text-xs text-slate-500">Stripe, JazzCash, EasyPaisa</p>
                  </div>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-5 bg-slate-200 rounded"></div>
                    <div className="w-8 h-5 bg-slate-300 rounded"></div>
                  </div>
                </label>
                <label className="flex items-center p-5 rounded-2xl border-2 border-slate-100 hover:border-slate-200 cursor-not-allowed opacity-60">
                  <input type="radio" name="payment" disabled className="w-5 h-5" />
                  <div className="ml-4">
                    <p className="font-bold">Bank Transfer</p>
                    <p className="text-xs text-slate-500">Direct deposit to our HBL account</p>
                  </div>
                </label>
              </div>

              {isProcessing ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 border-4 border-light-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-slate-500 font-medium">Processing Transaction...</p>
                </div>
              ) : (
                <button 
                  onClick={handlePayment}
                  className="w-full bg-navy text-white py-5 rounded-2xl font-black text-xl hover:bg-light-blue transition-all shadow-2xl hover:shadow-sky-200"
                >
                  Pay Now
                </button>
              )}

              <div className="mt-8 flex items-center justify-center space-x-6 grayscale opacity-30">
                <div className="h-6 w-12 bg-slate-400 rounded"></div>
                <div className="h-6 w-12 bg-slate-400 rounded"></div>
                <div className="h-6 w-12 bg-slate-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
