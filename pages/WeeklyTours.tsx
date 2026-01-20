
import React from 'react';
import { WEEKLY_TOURS } from '../constants';
import TourCard from '../components/TourCard';
import { Tour, Region } from '../types';

interface WeeklyToursProps {
  onBook: (tour: Tour) => void;
}

const WeeklyTours: React.FC<WeeklyToursProps> = ({ onBook }) => {
  const regions = [Region.KPK, Region.GILGIT_BALTISTAN, Region.AZAD_KASHMIR];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Weekly Tour Plans</h1>
          <p className="text-xl text-slate-500">
            Adventure awaits! Explore our full catalog of professionally managed weekly group tours, categorized by Pakistan's breathtaking regions.
          </p>
        </div>

        {/* Quick Jump Filters */}
        <div className="flex flex-wrap gap-4 mb-20 sticky top-24 z-40 bg-slate-50/80 backdrop-blur-md py-4">
          <span className="text-xs font-black uppercase text-slate-400 w-full mb-2 tracking-widest">Jump to Region</span>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => scrollToSection(region.replace(/\s+/g, '-').toLowerCase())}
              className="px-6 py-2.5 rounded-xl font-bold bg-white text-navy hover:bg-light-blue hover:text-white transition-all border border-slate-200 shadow-sm"
            >
              {region.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Region-wise Sections */}
        <div className="space-y-32">
          {regions.map((region) => {
            const regionTours = WEEKLY_TOURS.filter(t => t.region === region);
            if (regionTours.length === 0) return null;

            return (
              <section 
                key={region} 
                id={region.replace(/\s+/g, '-').toLowerCase()}
                className="animate-in fade-in duration-1000"
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-slate-200 pb-6">
                  <div>
                    <h2 className="text-4xl font-black text-navy mb-2">{region}</h2>
                    <p className="text-slate-500 font-medium">Discover the best of {region.split('(')[0].trim()}.</p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center space-x-2">
                    <span className="text-4xl font-black text-light-blue/20">{regionTours.length}</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Available<br/>Tours</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {regionTours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} onBook={onBook} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeeklyTours;
