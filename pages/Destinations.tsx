
import React from 'react';
import { SEO_DESTINATIONS } from '../constants';
import { Link } from 'react-router-dom';

const Destinations: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl font-black mb-6">Explore Destinations</h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            From the high peaks of the Karakoram to the lush valleys of the Himalayas, discover where your next journey takes you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SEO_DESTINATIONS.map((dest) => (
            <Link 
              key={dest.id} 
              to={`/destination/${dest.id}`}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={dest.image} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={dest.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <span className="inline-block bg-light-blue text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                  {dest.region}
                </span>
                <h2 className="text-4xl font-black text-white mb-4 group-hover:translate-x-2 transition-transform">
                  {dest.title}
                </h2>
                <p className="text-slate-300 line-clamp-2 mb-6">
                  {dest.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {dest.highlights.map(h => (
                    <span key={h} className="text-[10px] bg-white/10 backdrop-blur-md text-white px-2 py-1 rounded uppercase tracking-tighter">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
