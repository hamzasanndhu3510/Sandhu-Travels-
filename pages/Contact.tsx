
import React, { useState } from 'react';
import { ContactData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-light-blue font-bold uppercase tracking-widest text-sm mb-4 inline-block">Get in Touch</span>
            <h1 className="text-5xl md:text-6xl font-black mb-8">Let's start your <br />next adventure.</h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
              Have questions about our packages? Want a custom itinerary for your family? 
              Our travel specialists are here to help you 24/7.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-3xl">📍</div>
                <div>
                  <h4 className="font-bold text-lg">Our Office</h4>
                  <p className="text-slate-500">Sector F-7, Islamabad, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-3xl">📞</div>
                <div>
                  <h4 className="font-bold text-lg">Phone Number</h4>
                  <p className="text-slate-500">0322-8073331</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white shadow-lg rounded-2xl flex items-center justify-center text-3xl">✉️</div>
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-slate-500">bookings@sandhutravels.pk</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100">
            {status === 'success' ? (
              <div className="text-center py-20 animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-slate-500">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-light-blue/10 focus:border-light-blue transition-all"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                  <input 
                    required
                    type="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-light-blue/10 focus:border-light-blue transition-all"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">How can we help?</label>
                  <textarea 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-light-blue/10 focus:border-light-blue transition-all"
                    rows={5}
                    placeholder="Tell us about your travel plans..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'submitting'}
                  className="w-full bg-navy text-white py-5 rounded-2xl font-bold text-lg hover:bg-light-blue transition-all shadow-xl shadow-navy/20 disabled:bg-slate-300"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
