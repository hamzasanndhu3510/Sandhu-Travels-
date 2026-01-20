
import React, { useState } from 'react';
import { Tour, BookingData } from '../types';
import { useNavigate } from 'react-router-dom';

interface BookingModalProps {
  tour: Tour;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ tour, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookingData>({
    fullName: '',
    email: '',
    phone: '',
    tourId: tour.id,
    travelDate: '',
    persons: 1,
    packageType: 'Standard',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to Google Sheets
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store in local storage to simulate "success state" or redirect to checkout
      localStorage.setItem('lastBooking', JSON.stringify({
        ...formData,
        tourName: tour.name,
        totalPrice: tour.price * formData.persons,
        timestamp: new Date().toISOString()
      }));

      setIsSuccess(true);
      setTimeout(() => {
        navigate('/checkout');
        onClose();
      }, 2000);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-navy/60 backdrop-blur-sm">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            ✓
          </div>
          <h2 className="text-2xl font-bold mb-4">Request Received!</h2>
          <p className="text-slate-600 mb-8">
            We've received your booking request for <strong>{tour.name}</strong>. Redirecting you to checkout...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center px-4 bg-navy/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-t-3xl md:rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-500"
        style={{ maxHeight: '90vh' }}
      >
        <div className="relative h-32 bg-navy overflow-hidden">
          <img src={tour.image} className="w-full h-full object-cover opacity-30" alt="" />
          <div className="absolute inset-0 flex items-center px-8">
            <div>
              <p className="text-light-blue text-xs font-bold uppercase tracking-widest mb-1">Reservation Form</p>
              <h2 className="text-white text-2xl font-bold">{tour.name}</h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full text-white flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-8 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 128px)' }}>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Full Name</label>
              <input 
                required
                type="text"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-blue transition-all"
                value={formData.fullName}
                onChange={e => setFormData({...formData, fullName: e.target.value})}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
              <input 
                required
                type="email"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-blue transition-all"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
              <input 
                required
                type="tel"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-blue transition-all"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                placeholder="03xx-xxxxxxx"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Travel Date</label>
              <input 
                required
                type="date"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-blue transition-all"
                value={formData.travelDate}
                onChange={e => setFormData({...formData, travelDate: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Number of Persons</label>
              <input 
                required
                type="number"
                min="1"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-blue transition-all"
                value={formData.persons}
                onChange={e => setFormData({...formData, persons: parseInt(e.target.value) || 1})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Package Type</label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-blue transition-all"
                value={formData.packageType}
                onChange={e => setFormData({...formData, packageType: e.target.value as any})}
              >
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>
            <div className="col-span-1 md:col-span-2 space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Optional Message</label>
              <textarea 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-light-blue transition-all"
                rows={3}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                placeholder="Any special requirements?"
              ></textarea>
            </div>

            <div className="col-span-1 md:col-span-2 pt-4">
              <button 
                disabled={isSubmitting}
                className="w-full bg-navy text-white py-4 rounded-xl font-bold text-lg hover:bg-light-blue disabled:bg-slate-300 disabled:cursor-not-allowed transition-all shadow-xl hover:shadow-sky-200"
              >
                {isSubmitting ? 'Processing...' : `Confirm & Proceed to Payment`}
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">
                By clicking confirm you agree to our terms of service
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
