
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Weekly Tours', path: '/weekly-tours' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
          <span className={`text-xl font-bold tracking-tight ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-navy'}`}>
            Sandhu Travels
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-light-blue ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-navy'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/weekly-tours"
            className="bg-light-blue text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-sky-500 transition-all shadow-lg hover:shadow-sky-200/50"
          >
            Reserve Now
          </Link>
        </nav>

        {/* Mobile Menu Button (Simplified) */}
        <button className="md:hidden text-navy">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
