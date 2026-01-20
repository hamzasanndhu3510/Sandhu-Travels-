
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import WeeklyTours from './pages/WeeklyTours';
import DestinationDetail from './pages/DestinationDetail';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import WhatsAppButton from './components/WhatsAppButton';
import BookingModal from './components/BookingModal';
import { Tour } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookNow = (tour: Tour) => {
    setSelectedTour(tour);
    setIsBookingOpen(true);
  };

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
        
        {isBookingOpen && selectedTour && (
          <BookingModal 
            tour={selectedTour} 
            onClose={() => setIsBookingOpen(false)} 
          />
        )}
      </div>
    </Router>
  );
};

export default App;
