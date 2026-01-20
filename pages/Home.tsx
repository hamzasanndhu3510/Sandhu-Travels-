
import React, { useState } from 'react';
import { WEEKLY_TOURS } from '../constants';
import TourCard from '../components/TourCard';
import { Tour, Region } from '../types';
import { Link } from 'react-router-dom';

interface HomeProps {
  onBook: (tour: Tour) => void;
}

const Home: React.FC<HomeProps> = ({ onBook }) => {
  const regions = [Region.KPK, Region.GILGIT_BALTISTAN, Region.AZAD_KASHMIR];
  const [activeRegion, setActiveRegion] = useState<Region>(Region.KPK);

  // Images for Region Sections specifically requested
  // KPK: Mountains, Gilgit: Lake, Azad Kashmir: Mountains
  const regionVisuals = {
    [Region.KPK]: "https://images.weserv.nl/?url=https://picsum.photos/id/1036/800/1200&output=webp",
    [Region.GILGIT_BALTISTAN]: "https://images.weserv.nl/?url=https://picsum.photos/id/10/800/1200&output=webp",
    [Region.AZAD_KASHMIR]: "https://images.weserv.nl/?url=https://picsum.photos/id/1039/800/1200&output=webp",
  };

  const filteredTours = WEEKLY_TOURS.filter(t => t.region === activeRegion);

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.weserv.nl/?url=https://picsum.photos/id/1015/1920/1080&output=webp" 
            className="w-full h-full object-cover scale-105 animate-pulse-slow transition-transform duration-[10s] hover:scale-110"
            alt="Majestic Mountains"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <span className="inline-block bg-light-blue text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-in slide-in-from-left duration-500 shadow-lg shadow-sky-500/20">
              Premium Travels in Northern Pakistan
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] mb-8 animate-in slide-in-from-left duration-700 drop-shadow-2xl">
              Discover the <br />
              <span className="text-light-blue animate-pulse">Peaks</span> of Serenity
            </h1>
            <p className="text-xl text-black mb-10 leading-relaxed max-w-xl animate-in slide-in-from-left duration-1000 font-bold bg-white/10 backdrop-blur-[2px] p-2 rounded-lg">
              Sandhu Travels offers world-class tours to the hidden gems of Khyber Pakhtunkhwa, Gilgit-Baltistan, and Azad Kashmir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-1000 delay-500">
              <Link to="/weekly-tours" className="bg-light-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-sky-500 transition-all shadow-2xl hover:shadow-sky-400/50 flex items-center justify-center hover:-translate-y-1">
                Browse Tours
              </Link>
              <Link to="/destinations" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center hover:-translate-y-1">
                Explore Destinations
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Tabbed Weekly Tour Plans */}
      <section className="container mx-auto px-6 py-24 scroll-mt-20" id="weekly-plans">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-navy">Weekly Tour Plans</h2>
          <p className="text-slate-500 text-lg">Pick your preferred location to view available plans.</p>
        </div>

        {/* Region Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 reveal delay-200">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 transform ${
                activeRegion === region 
                  ? 'bg-navy text-white shadow-2xl scale-105 -translate-y-1' 
                  : 'bg-white text-navy hover:bg-slate-100 border border-slate-200 hover:scale-105'
              }`}
            >
              {region.split(' ')[0]}
            </button>
          ))}
        </div>

        <div key={activeRegion} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-700">
          {filteredTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} onBook={onBook} />
          ))}
          {filteredTours.length === 0 && (
            <div className="col-span-full text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 text-slate-400">
              New plans for this region coming soon!
            </div>
          )}
        </div>
      </section>

      {/* Region Sections (Visual Cards) */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Explore by Region</h2>
            <p className="text-slate-400">Handpicked destinations across Pakistan's most scenic provinces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, idx) => (
              <div 
                key={region} 
                className={`group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-[0_0_50px_rgba(56,189,248,0.3)] reveal`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <img 
                  src={regionVisuals[region]} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-70 group-hover:opacity-100" 
                  alt={region}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent transition-opacity duration-500 group-hover:opacity-40"></div>
                <div className="absolute bottom-12 left-10 right-10">
                  <h3 className="text-3xl font-black mb-4 group-hover:-translate-y-2 transition-transform duration-500">{region}</h3>
                  <Link 
                    to={`/destinations?region=${region}`}
                    className="bg-white text-navy px-8 py-4 rounded-2xl font-bold inline-block hover:bg-light-blue hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-xl"
                  >
                    View Destinations
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animations */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Happy Travelers', value: '5K+' },
            { label: 'Tours Completed', value: '120+' },
            { label: 'Destinations', value: '50+' },
            { label: 'Years Experience', value: '10+' }
          ].map((stat, idx) => (
            <div key={idx} className="reveal" style={{ animationDelay: `${idx * 100}ms` }}>
              <p className="text-6xl font-black text-navy mb-2 hover:text-light-blue transition-colors duration-500 cursor-default">{stat.value}</p>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
