
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold mb-6">Sandhu Travels</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            Your premium gateway to the majestic peaks and serene valleys of Northern Pakistan. We specialize in crafting unforgettable memories.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-light-blue cursor-pointer transition-colors">f</div>
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-light-blue cursor-pointer transition-colors">ig</div>
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-light-blue cursor-pointer transition-colors">tw</div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
            <li><Link to="/weekly-tours" className="hover:text-white transition-colors">Weekly Tours</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-center space-x-3">
              <span>📍</span>
              <span>Head Office, Islamabad, Pakistan</span>
            </li>
            <li className="flex items-center space-x-3">
              <span>📞</span>
              <span>0322-8073331</span>
            </li>
            <li className="flex items-center space-x-3">
              <span>✉️</span>
              <span>info@sandhutravels.pk</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Weekly Highlights</h4>
          <p className="text-slate-400 text-sm mb-4">
            Join our 8-day Hunza Skardu tour starting every Friday for a truly premium experience.
          </p>
          <Link 
            to="/weekly-tours"
            className="inline-block text-light-blue font-semibold border-b-2 border-light-blue hover:text-white hover:border-white transition-all pb-1"
          >
            View Schedule
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Sandhu Travels. All rights reserved. Designed with ❤️ for Pakistan.</p>
      </div>
    </footer>
  );
};

export default Footer;
