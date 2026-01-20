
import React from 'react';
import { WEEKLY_TOURS, SEO_DESTINATIONS } from '../constants';
import TourCard from '../components/TourCard';
import { Tour, Region } from '../types';
import { Link } from 'react-router-dom';

interface HomeProps {
  onBook: (tour: Tour) => void;
}

const Home: React.FC<HomeProps> = ({ onBook }) => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/1015/1920/1080" 
            className="w-full h-full object-cover scale-105 animate-pulse-slow"
            alt="Majestic Mountains"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <span className="inline-block bg-light-blue text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-in slide-in-from-left duration-500">
              Premium Travels in Northern Pakistan
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] mb-8 animate-in slide-in-from-left duration-700">
              Discover the <br />
              <span className="text-light-blue">Peaks</span> of Serenity
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-xl animate-in slide-in-from-left duration-1000">
              Sandhu Travels offers world-class tours to the hidden gems of Khyber Pakhtunkhwa, Gilgit-Baltistan, and Azad Kashmir.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-1000 delay-500">
              <Link to="/weekly-tours" className="bg-light-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-sky-500 transition-all shadow-2xl hover:shadow-sky-400/50 flex items-center justify-center">
                Browse Tours
              </Link>
              <Link to="/destinations" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
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

      {/* Featured Weekly Tours */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Weekly Tour Plans</h2>
            <p className="text-slate-500 text-lg">Curated group tours with fixed departures for maximum adventure.</p>
          </div>
          <Link to="/weekly-tours" className="mt-6 md:mt-0 text-light-blue font-bold flex items-center group">
            View All Plans 
            <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WEEKLY_TOURS.slice(0, 3).map((tour) => (
            <TourCard key={tour.id} tour={tour} onBook={onBook} />
          ))}
        </div>
      </section>

      {/* Region Sections */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Explore by Region</h2>
            <p className="text-slate-400">Handpicked destinations across Pakistan's most scenic provinces.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[Region.KPK, Region.GILGIT_BALTISTAN, Region.AZAD_KASHMIR].map((region, idx) => (
              <div key={region} className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer">
                <img 
                  src={`https://picsum.photos/id/${1040 + idx}/800/1200`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" 
                  alt={region}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-2xl font-bold mb-4">{region}</h3>
                  <Link 
                    to={`/destinations?region=${region}`}
                    className="bg-white text-navy px-6 py-3 rounded-xl font-bold inline-block hover:bg-light-blue hover:text-white transition-all"
                  >
                    View Destinations
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By / Stats */}
      <section className="container mx-auto px-6 py-24 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <p className="text-5xl font-black text-navy mb-2">5K+</p>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">Happy Travelers</p>
          </div>
          <div>
            <p className="text-5xl font-black text-navy mb-2">120+</p>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">Tours Completed</p>
          </div>
          <div>
            <p className="text-5xl font-black text-navy mb-2">50+</p>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">Destinations</p>
          </div>
          <div>
            <p className="text-5xl font-black text-navy mb-2">10+</p>
            <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">Years Experience</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
