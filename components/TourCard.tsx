
import React from 'react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
  onBook: (tour: Tour) => void;
}

const TourCard: React.FC<TourCardProps> = ({ tour, onBook }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-navy px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {tour.duration}
          </span>
          <span className="bg-light-blue text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {tour.region.split(' ')[0]}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/40 backdrop-blur-md px-3 py-2 rounded-lg text-white">
            <p className="text-[10px] uppercase tracking-wider font-semibold opacity-80">Departure</p>
            <p className="text-sm font-medium">{tour.departureDays}</p>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 group-hover:text-light-blue transition-colors leading-tight">
          {tour.name}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tour.tags.map(tag => (
            <span key={tag} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100 uppercase tracking-tighter font-semibold">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <p className="text-xs text-slate-400">Starting from</p>
            <p className="text-xl font-bold text-navy">PKR {tour.price.toLocaleString()}</p>
          </div>
          <button 
            onClick={() => onBook(tour)}
            className="bg-navy text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-light-blue transition-colors text-sm"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
