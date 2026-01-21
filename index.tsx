
import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  HashRouter as Router, 
  Routes, 
  Route, 
  Link, 
  useLocation, 
  useParams, 
  Navigate,
  useNavigate 
} from 'react-router-dom';

// --- TYPES ---
export enum Region {
  KPK = 'Khyber Pakhtunkhwa (KPK)',
  GILGIT_BALTISTAN = 'Gilgit-Baltistan',
  AZAD_KASHMIR = 'Azad Kashmir'
}

export enum Category {
  VALLEY = 'Valley',
  LAKE = 'Lake',
  PASS = 'Pass',
  TREK = 'Trek'
}

export interface Tour {
  id: string;
  name: string;
  duration: string;
  destinations: string[];
  departureDays: string[];
  price: number;
  image: string;
  category?: Category;
  region: Region;
  tags: string[];
  bestSeason: string;
  accessibility: string;
}

export interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  tourId: string;
  travelDate: string;
  persons: number;
  packageType: 'Standard' | 'Premium' | 'Luxury';
  message?: string;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

// --- CONSTANTS & DATA ---
const getImg = (id: number, width = 800, height = 600) => 
  `https://images.weserv.nl/?url=https://picsum.photos/id/${id}/${width}/${height}&output=webp&q=80`;

export const WEEKLY_TOURS: Tour[] = [
  {
    id: 'naran-kaghan-3d',
    name: '3 Days Naran Kaghan Shogran Tour',
    duration: '3 Days',
    destinations: ['Naran', 'Kaghan', 'Shogran', 'Siri Paye'],
    departureDays: ['Every Mon, Thu & Sat'],
    price: 18500,
    image: getImg(1015),
    region: Region.KPK,
    tags: ['Family', 'Scenic'],
    bestSeason: 'Summer',
    accessibility: 'Car/Hiace'
  },
  {
    id: 'neelum-valley-3d',
    name: '3 Days Neelum Valley Tour',
    duration: '3 Days',
    destinations: ['Kutton', 'Keran', 'Upper Neelum'],
    departureDays: ['Every Mon & Thu'],
    price: 16000,
    image: getImg(1016),
    region: Region.AZAD_KASHMIR,
    tags: ['Adventure', 'Scenic'],
    bestSeason: 'Spring-Fall',
    accessibility: 'Jeep'
  },
  {
    id: 'swat-kalam-3d',
    name: '3 Days Swat Kalam Malam Jabba Tour',
    duration: '3 Days',
    destinations: ['Mingora', 'Kalam', 'Malam Jabba'],
    departureDays: ['Every Mon & Thu'],
    price: 17500,
    image: getImg(1018),
    region: Region.KPK,
    tags: ['Family', 'Snow'],
    bestSeason: 'Winter/Summer',
    accessibility: 'Car/Hiace'
  },
  {
    id: 'ratti-gali-3d',
    name: '3 Days Ratti Gali Tour',
    duration: '3 Days',
    destinations: ['Dowarian', 'Ratti Gali Lake'],
    departureDays: ['Every Mon & Thu'],
    price: 19000,
    image: getImg(1019),
    region: Region.AZAD_KASHMIR,
    tags: ['Trek', 'Scenic'],
    bestSeason: 'Summer',
    accessibility: 'Jeep/Hiking'
  },
  {
    id: 'taobat-4d',
    name: '4 Days Taobat Tour',
    duration: '4 Days',
    destinations: ['Kel', 'Taobat', 'Arang Kel'],
    departureDays: ['Every Wednesday Night'],
    price: 22000,
    image: getImg(1020),
    region: Region.AZAD_KASHMIR,
    tags: ['Off-Grid', 'Adventure'],
    bestSeason: 'Summer',
    accessibility: 'Jeep'
  },
  {
    id: 'hunza-skardu-8d',
    name: '8 Days Hunza Skardu Tour',
    duration: '8 Days',
    destinations: ['Chilas', 'Hunza', 'Skardu', 'Khunjerab'],
    departureDays: ['Every Friday'],
    price: 45000,
    image: getImg(1021),
    region: Region.GILGIT_BALTISTAN,
    tags: ['Adventure', 'Premium'],
    bestSeason: 'Summer/Autumn',
    accessibility: 'Coaster/Pajero'
  },
  {
    id: 'hunza-valley-5d',
    name: '5 Days Hunza Valley Tour',
    duration: '5 Days',
    destinations: ['Hunza', 'Attabad Lake', 'Passu'],
    departureDays: ['Every Tue & Fri'],
    price: 28000,
    image: getImg(1022),
    region: Region.GILGIT_BALTISTAN,
    tags: ['Scenic', 'Family'],
    bestSeason: 'All Year',
    accessibility: 'Car/Hiace'
  },
  {
    id: 'skardu-6d',
    name: '6 Days Skardu Tour',
    duration: '6 Days',
    destinations: ['Skardu', 'Shangrila', 'Deosai'],
    departureDays: ['Every Monday'],
    price: 32000,
    image: getImg(1023),
    region: Region.GILGIT_BALTISTAN,
    tags: ['Adventure', 'Family'],
    bestSeason: 'Summer',
    accessibility: 'Coaster/Jeep'
  },
  {
    id: 'kumrat-3d',
    name: '3 Days Kumrat Tour',
    duration: '3 Days',
    destinations: ['Kumrat Valley', 'Jahaz Banda'],
    departureDays: ['Every Thursday'],
    price: 18000,
    image: getImg(1024),
    region: Region.KPK,
    tags: ['Off-Grid', 'Nature'],
    bestSeason: 'Summer',
    accessibility: 'Jeep'
  }
];

export const SEO_DESTINATIONS = [
  {
    id: 'gilgit-baltistan',
    title: 'Gilgit-Baltistan',
    region: Region.GILGIT_BALTISTAN,
    description: 'The land of giants and turquoise lakes. Home to K2 and breathtaking Hunza Valley.',
    image: getImg(10, 1200, 600), // Lake theme for Gilgit
    highlights: ['K2 Base Camp', 'Baltit Fort', 'Attabad Lake'],
  },
  {
    id: 'khyber-pakhtunkhwa',
    title: 'Khyber Pakhtunkhwa (KPK)',
    region: Region.KPK,
    description: 'Lush green valleys, roaring rivers, and hospitality like no other.',
    image: getImg(1036, 1200, 600), // Mountain theme for KPK
    highlights: ['Naran Kaghan', 'Swat Valley', 'Kumrat Valley'],
  },
  {
    id: 'azad-kashmir',
    title: 'Azad Kashmir',
    region: Region.AZAD_KASHMIR,
    description: 'The Heaven on Earth. Thick forests, waterfalls, and the stunning Neelum River.',
    image: getImg(1039, 1200, 600), // Mountain theme for Kashmir
    highlights: ['Neelum Valley', 'Ratti Gali', 'Arang Kel'],
  }
];

// --- COMPONENTS ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Weekly Tours', path: '/weekly-tours' },
    { name: 'Contact', path: '/contact' },
  ];

  const isLight = !isScrolled && location.pathname === '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
          <span className={`text-xl font-bold tracking-tight ${isLight ? 'text-white' : 'text-navy'}`}>
            Sandhu Travels
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-light-blue ${isLight ? 'text-white' : 'text-navy'}`}>
              {link.name}
            </Link>
          ))}
          <Link to="/weekly-tours" className="bg-light-blue text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-sky-500 transition-all shadow-lg">
            Reserve Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-navy text-white pt-20 pb-10">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-6">Sandhu Travels</h3>
        <p className="text-slate-400 leading-relaxed mb-6">Premium gateway to the majestic peaks and serene valleys of Northern Pakistan.</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/weekly-tours">Weekly Tours</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
        <ul className="space-y-4 text-slate-400 text-sm">
          <li>📍 Islamabad, Pakistan</li>
          <li>📞 0322-8073331</li>
          <li>✉️ info@sandhutravels.pk</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-6">Schedule</h4>
        <p className="text-slate-400 text-sm mb-4">Join our 8-day Hunza Skardu tour starting every Friday.</p>
        <Link to="/weekly-tours" className="text-light-blue font-semibold border-b border-light-blue pb-1">View Schedule</Link>
      </div>
    </div>
  </footer>
);

const TourCard: React.FC<{ tour: Tour; onBook: (tour: Tour) => void }> = ({ tour, onBook }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
    <div className="relative h-64 overflow-hidden">
      <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <span className="bg-white/90 backdrop-blur-sm text-navy px-3 py-1 rounded-full text-xs font-bold">{tour.duration}</span>
        <span className="bg-light-blue text-white px-3 py-1 rounded-full text-xs font-bold">{tour.region.split(' ')[0]}</span>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-black/40 backdrop-blur-md px-3 py-2 rounded-lg text-white">
          <p className="text-[10px] uppercase tracking-wider font-semibold opacity-80">Departure</p>
          <p className="text-sm font-medium">{tour.departureDays}</p>
        </div>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-3 group-hover:text-light-blue transition-colors leading-tight">{tour.name}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {tour.tags.map(tag => (
          <span key={tag} className="text-[10px] bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100 uppercase font-semibold">{tag}</span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
        <div>
          <p className="text-xs text-slate-400">Starting from</p>
          <p className="text-xl font-bold text-navy">PKR {tour.price.toLocaleString()}</p>
        </div>
        <button onClick={() => onBook(tour)} className="bg-navy text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-light-blue transition-colors text-sm">Reserve</button>
      </div>
    </div>
  </div>
);

const BookingModal: React.FC<{ tour: Tour; onClose: () => void }> = ({ tour, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookingData>({
    fullName: '', email: '', phone: '', tourId: tour.id, travelDate: '', persons: 1, packageType: 'Standard', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    localStorage.setItem('lastBooking', JSON.stringify({ ...formData, tourName: tour.name, totalPrice: tour.price * formData.persons }));
    setIsSuccess(true);
    setTimeout(() => { navigate('/checkout'); onClose(); }, 2000);
  };

  if (isSuccess) return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-navy/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl animate-in zoom-in duration-300">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
        <h2 className="text-2xl font-bold mb-4 text-navy">Request Received!</h2>
        <p className="text-slate-600">Redirecting to checkout...</p>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center px-4 bg-navy/60 backdrop-blur-sm">
      <div className="bg-white rounded-t-3xl md:rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-500" style={{ maxHeight: '90vh' }}>
        <div className="relative h-32 bg-navy overflow-hidden">
          <img src={tour.image} className="w-full h-full object-cover opacity-30" alt="" />
          <div className="absolute inset-0 flex items-center px-8">
            <h2 className="text-white text-2xl font-bold">{tour.name}</h2>
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 text-white">✕</button>
        </div>
        <form onSubmit={handleSubmit} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 128px)' }}>
          <input required type="text" placeholder="Full Name" className="w-full bg-slate-50 border rounded-xl px-4 py-3" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
          <input required type="email" placeholder="Email" className="w-full bg-slate-50 border rounded-xl px-4 py-3" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          <input required type="tel" placeholder="Phone" className="w-full bg-slate-50 border rounded-xl px-4 py-3" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
          <input required type="date" className="w-full bg-slate-50 border rounded-xl px-4 py-3" value={formData.travelDate} onChange={e => setFormData({...formData, travelDate: e.target.value})} />
          <input required type="number" min="1" className="w-full bg-slate-50 border rounded-xl px-4 py-3" value={formData.persons} onChange={e => setFormData({...formData, persons: parseInt(e.target.value) || 1})} />
          <select className="w-full bg-slate-50 border rounded-xl px-4 py-3" value={formData.packageType} onChange={e => setFormData({...formData, packageType: e.target.value as any})}>
            <option value="Standard">Standard</option><option value="Premium">Premium</option><option value="Luxury">Luxury</option>
          </select>
          <button type="submit" className="w-full bg-navy text-white py-4 rounded-xl font-bold md:col-span-2 hover:bg-light-blue transition-all">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

const WhatsAppButton: React.FC = () => (
  <a href={`https://wa.me/03228073331?text=${encodeURIComponent('Hello Sandhu Travels, I would like to reserve a travel package.')}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce">
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
  </a>
);

// --- PAGES ---

const Home: React.FC<{ onBook: (tour: Tour) => void }> = ({ onBook }) => {
  const regions = [Region.KPK, Region.GILGIT_BALTISTAN, Region.AZAD_KASHMIR];
  const [activeRegion, setActiveRegion] = useState<Region>(Region.KPK);

  const regionVisuals = {
    [Region.KPK]: "https://images.weserv.nl/?url=https://picsum.photos/id/1036/800/1200&output=webp",
    [Region.GILGIT_BALTISTAN]: "https://images.weserv.nl/?url=https://picsum.photos/id/10/800/1200&output=webp",
    [Region.AZAD_KASHMIR]: "https://images.weserv.nl/?url=https://picsum.photos/id/1039/800/1200&output=webp",
  };

  const filteredTours = WEEKLY_TOURS.filter(t => t.region === activeRegion);

  return (
    <div className="pb-20">
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.weserv.nl/?url=https://picsum.photos/id/1015/1920/1080&output=webp" className="w-full h-full object-cover scale-105 animate-pulse-slow transition-transform duration-[10s] hover:scale-110" alt="Majestic Mountains" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <span className="inline-block bg-light-blue text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-in slide-in-from-left duration-500">Premium Travels in Northern Pakistan</span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] mb-8 animate-in slide-in-from-left duration-700 drop-shadow-2xl">Discover the <br /><span className="text-light-blue animate-pulse">Peaks</span> of Serenity</h1>
            <p className="text-xl text-black mb-10 leading-relaxed max-w-xl animate-in slide-in-from-left duration-1000 font-bold">Sandhu Travels offers world-class tours to the hidden gems of Khyber Pakhtunkhwa, Gilgit-Baltistan, and Azad Kashmir.</p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-1000 delay-500">
              <Link to="/weekly-tours" className="bg-light-blue text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-sky-500 transition-all shadow-2xl flex items-center justify-center hover:-translate-y-1">Browse Tours</Link>
              <Link to="/destinations" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center hover:-translate-y-1">Explore Destinations</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 scroll-mt-20">
        <div className="text-center mb-16 reveal"><h2 className="text-4xl md:text-5xl font-black mb-4 text-navy">Weekly Tour Plans</h2><p className="text-slate-500 text-lg">Pick your preferred location to view available plans.</p></div>
        <div className="flex flex-wrap justify-center gap-4 mb-16 reveal delay-200">
          {regions.map((region) => (
            <button key={region} onClick={() => setActiveRegion(region)} className={`px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 transform ${activeRegion === region ? 'bg-navy text-white shadow-2xl scale-105 -translate-y-1' : 'bg-white text-navy hover:bg-slate-100 border border-slate-200 hover:scale-105'}`}>{region.split(' ')[0]}</button>
          ))}
        </div>
        <div key={activeRegion} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-700">
          {filteredTours.map((tour) => <TourCard key={tour.id} tour={tour} onBook={onBook} />)}
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal"><h2 className="text-4xl md:text-5xl font-black mb-4">Explore by Region</h2><p className="text-slate-400">Handpicked destinations across Pakistan's most scenic provinces.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, idx) => (
              <div key={region} className={`group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer reveal`} style={{ animationDelay: `${idx * 150}ms` }}>
                <img src={regionVisuals[region]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-70 group-hover:opacity-100" alt={region} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"></div>
                <div className="absolute bottom-12 left-10 right-10">
                  <h3 className="text-3xl font-black mb-4">{region}</h3>
                  <Link to={`/destinations?region=${region}`} className="bg-white text-navy px-8 py-4 rounded-2xl font-bold inline-block hover:bg-light-blue hover:text-white transition-all shadow-xl">View Destinations</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Destinations: React.FC = () => (
  <div className="pt-32 pb-24 container mx-auto px-6">
    <div className="mb-16"><h1 className="text-5xl font-black mb-6 text-navy">Explore Destinations</h1><p className="text-xl text-slate-500 max-w-2xl">From high peaks to serene lakes, find your next adventure.</p></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {SEO_DESTINATIONS.map((dest) => (
        <Link key={dest.id} to={`/destination/${dest.id}`} className="group relative h-[450px] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
          <img src={dest.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={dest.title} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10">
            <h2 className="text-4xl font-black text-white mb-4">{dest.title}</h2>
            <div className="flex flex-wrap gap-2">{dest.highlights.map(h => <span key={h} className="text-[10px] bg-white/10 backdrop-blur-md text-white px-2 py-1 rounded uppercase">{h}</span>)}</div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const WeeklyTours: React.FC<{ onBook: (tour: Tour) => void }> = ({ onBook }) => {
  const regions = [Region.KPK, Region.GILGIT_BALTISTAN, Region.AZAD_KASHMIR];
  return (
    <div className="pt-32 pb-24 bg-slate-50 container mx-auto px-6">
      <div className="max-w-3xl mb-16"><h1 className="text-5xl md:text-6xl font-black mb-6 text-navy">Weekly Tour Plans</h1><p className="text-xl text-slate-500">Categorized by breathtaking regions.</p></div>
      <div className="space-y-32">
        {regions.map((region) => {
          const regionTours = WEEKLY_TOURS.filter(t => t.region === region);
          if (regionTours.length === 0) return null;
          return (
            <section key={region} className="animate-in fade-in duration-1000">
              <h2 className="text-4xl font-black text-navy mb-12 border-b-2 border-slate-200 pb-6">{region}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">{regionTours.map((tour) => <TourCard key={tour.id} tour={tour} onBook={onBook} />)}</div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

const DestinationDetail: React.FC<{ onBook: (tour: Tour) => void }> = ({ onBook }) => {
  const { id } = useParams();
  const destination = SEO_DESTINATIONS.find(d => d.id === id);
  if (!destination) return <Navigate to="/destinations" />;
  const relatedTours = WEEKLY_TOURS.filter(t => t.region === destination.region);
  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative h-[70vh] flex items-end">
        <div className="absolute inset-0"><img src={destination.image} className="w-full h-full object-cover" alt={destination.title} /><div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"></div></div>
        <div className="container mx-auto px-6 relative z-10 pb-20"><h1 className="text-6xl md:text-8xl font-black text-white mb-6">{destination.title}</h1><p className="text-xl text-slate-300 max-w-2xl">{destination.description}</p></div>
      </section>
      <section className="py-24 bg-white container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2"><h2 className="text-3xl font-black mb-8 text-navy">What to Expect</h2><div className="prose prose-lg text-slate-600"><p>{destination.description}</p></div></div>
        <div className="lg:col-span-1 sticky top-32 p-10 bg-navy rounded-[2rem] text-white"><h3 className="text-2xl font-bold mb-6">Plan Your Trip</h3><button onClick={() => onBook(WEEKLY_TOURS[0])} className="w-full bg-light-blue text-white py-4 rounded-2xl font-bold hover:bg-sky-500">Inquire Now</button></div>
      </section>
      <section className="py-24 bg-slate-50 container mx-auto px-6"><h2 className="text-3xl font-black mb-12 text-navy">Related Packages</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{relatedTours.map(tour => <TourCard key={tour.id} tour={tour} onBook={onBook} />)}</div></section>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); await new Promise(r => setTimeout(r, 1000)); setSent(true); };
  return (
    <div className="pt-32 pb-24 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div><h1 className="text-5xl md:text-6xl font-black mb-8 text-navy">Let's start your adventure.</h1><p className="text-xl text-slate-500 mb-12">Contact our travel specialists today.</p></div>
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl border">
        {sent ? <div className="text-center py-20"><h3 className="text-2xl font-bold text-navy">Message Sent!</h3></div> : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input required placeholder="Name" className="w-full bg-slate-50 border rounded-2xl px-6 py-4" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            <input required placeholder="Email" type="email" className="w-full bg-slate-50 border rounded-2xl px-6 py-4" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            <textarea required placeholder="Message" className="w-full bg-slate-50 border rounded-2xl px-6 py-4" rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
            <button className="w-full bg-navy text-white py-5 rounded-2xl font-bold shadow-xl">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
};

const Checkout: React.FC = () => {
  const [booking, setBooking] = useState<any>(null);
  const [step, setStep] = useState<'summary' | 'success'>('summary');
  useEffect(() => { const saved = localStorage.getItem('lastBooking'); if (saved) setBooking(JSON.parse(saved)); }, []);
  if (!booking) return null;
  if (step === 'success') return <div className="pt-40 pb-24 text-center"><h1 className="text-3xl font-black text-navy">Payment Successful!</h1><Link to="/" className="mt-8 inline-block bg-navy text-white px-10 py-4 rounded-xl font-bold">Back Home</Link></div>;
  return (
    <div className="pt-32 pb-24 container mx-auto px-6 max-w-5xl"><h2 className="text-3xl font-black mb-8 text-navy">Order Summary</h2>
      <div className="bg-white p-8 rounded-[2rem] shadow-xl border"><h3 className="text-xl font-bold mb-4">{booking.tourName}</h3><p className="text-2xl font-black text-navy mb-8">Total: PKR {booking.totalPrice?.toLocaleString()}</p>
        <button onClick={() => setStep('success')} className="w-full bg-navy text-white py-5 rounded-2xl font-black text-xl hover:bg-light-blue transition-all shadow-2xl">Confirm Payment</button>
      </div>
    </div>
  );
};

// --- APP ---

const App: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const handleBookNow = (tour: Tour) => setSelectedTour(tour);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-navy">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onBook={handleBookNow} />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/weekly-tours" element={<WeeklyTours onBook={handleBookNow} />} />
            <Route path="/destination/:id" element={<DestinationDetail onBook={handleBookNow} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        {selectedTour && <BookingModal tour={selectedTour} onClose={() => setSelectedTour(null)} />}
      </div>
    </Router>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<React.StrictMode><App /></React.StrictMode>);
}
