
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEO_DESTINATIONS, WEEKLY_TOURS } from '../constants';
import { Tour } from '../types';
import TourCard from '../components/TourCard';

interface DestinationDetailProps {
  onBook: (tour: Tour) => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ onBook }) => {
  const { id } = useParams();
  const destination = SEO_DESTINATIONS.find(d => d.id === id);

  if (!destination) {
    return <Navigate to="/destinations" />;
  }

  // Find related tours
  const relatedTours = WEEKLY_TOURS.filter(t => t.region === destination.region);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img 
            src={destination.image} 
            className="w-full h-full object-cover" 
            alt={destination.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 pb-20">
          <span className="bg-light-blue text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            {destination.region}
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">
            {destination.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            {destination.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black mb-8">What to Expect</h2>
            <div className="prose prose-lg text-slate-600 mb-12">
              <p>
                Traveling to {destination.title} is an experience unlike any other. Whether you're a nature lover, 
                an adventure seeker, or simply looking for peace, this region offers something unique for everyone. 
                With its towering peaks, crystal-clear lakes, and warm hospitality, it's a must-visit destination 
                on any traveler's bucket list.
              </p>
              <p className="mt-4">
                Our tours are designed to give you the most authentic experience possible, combining comfort with adventure. 
                From the bustling local markets to the quiet, serene mountain trails, we ensure you see the best of what 
                {destination.title} has to offer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-3">✨</span> Highlights
                </h3>
                <ul className="space-y-3">
                  {destination.highlights.map(h => (
                    <li key={h} className="flex items-center text-slate-600">
                      <span className="w-2 h-2 bg-light-blue rounded-full mr-3"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="mr-3">📅</span> Best Season
                </h3>
                <p className="text-slate-600">
                  The ideal time to visit is typically from **May to October** for summer activities, 
                  and **December to February** for winter sports and snow viewing.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32 p-10 bg-navy rounded-[2rem] text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Plan Your Trip</h3>
              <p className="text-slate-400 mb-8">
                Ready to explore {destination.title}? Contact our travel experts today for a customized itinerary.
              </p>
              <button 
                onClick={() => onBook(WEEKLY_TOURS[0])} // Defaulting to first tour for demo
                className="w-full bg-light-blue text-white py-4 rounded-2xl font-bold hover:bg-sky-500 transition-all mb-4"
              >
                Inquire Now
              </button>
              <div className="text-center">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-4">Or Contact via</p>
                <a href="tel:03228073331" className="text-xl font-black hover:text-light-blue transition-colors">
                  0322-8073331
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black mb-12">Related Tour Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedTours.map(tour => (
              <TourCard key={tour.id} tour={tour} onBook={onBook} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail;
