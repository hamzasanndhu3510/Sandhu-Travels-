
import React, { useState } from 'react';
import { WEEKLY_TOURS } from '../constants';
import TourCard from '../components/TourCard';
import { Tour, Region } from '../types';

interface WeeklyToursProps {
  onBook: (tour: Tour) => void;
}

const WeeklyTours: React.FC<WeeklyToursProps> = ({ onBook }) => {
  const [filter, setFilter] = useState<Region | 'All'>('All');

  const filteredTours = filter === 'All' 
    ? WEEKLY_TOURS 
    : WEEKLY_TOURS.filter(t => t.region === filter);

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Weekly Tour Plans</h1>
          <p className="text-xl text-slate-500">
            Adventure awaits! Select from our professionally managed weekly group tours departing from major cities.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {['All', Region.KPK, Region.GILGIT_BALTISTAN, Region.AZAD_KASHMIR].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f as any)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${
                filter === f 
                  ? 'bg-navy text-white shadow-xl shadow-navy/20' 
                  : 'bg-white text-navy hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onBook={onBook} />
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-xl text-slate-400 font-medium">No tours found for this region yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeeklyTours;
