import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Treatments', href: '#services' },
  { label: 'Dr. Mukta', href: '#doctor' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // WhatsApp configuration
  const phoneNumber = '918261808915';
  const message = encodeURIComponent('Hello Sahawas Clinic, I would like to book an appointment.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-white/20'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-teal-800 tracking-tight">
                Sahawas
              </span>
              <span className="text-[0.65rem] uppercase tracking-widest text-slate-500 font-medium">
                Skin & Laser Clinic
              </span>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-teal-700 font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium text-sm shadow-lg shadow-teal-200 hover:shadow-teal-300 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-teal-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-100">
               <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold shadow-lg"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;