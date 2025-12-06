import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-teal-800">
                Sahawas
              </span>
              <span className="text-[0.65rem] uppercase tracking-widest text-slate-500 font-medium">
                Skin & Laser Clinic
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Enhancing natural beauty through advanced science and compassionate care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-teal-600 hover:bg-teal-50 shadow-sm transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 shadow-sm transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-slate-900 mb-6">Clinic</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-600 hover:text-teal-700 transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-600 hover:text-teal-700 transition-colors">Treatments</a></li>
              <li><a href="#doctor" className="text-slate-600 hover:text-teal-700 transition-colors">About Dr. Mukta</a></li>
              <li><a href="#contact" className="text-slate-600 hover:text-teal-700 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
             <h4 className="font-serif text-lg font-bold text-slate-900 mb-6">Visit Us</h4>
             
             <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                <span className="text-slate-600">
                  26, Sahawas Hospital, Lane 6, <br />
                  Karvenagar, Pune 411052
                </span>
             </div>

             <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                <div className="text-slate-600">
                  <p>Mon - Sat</p>
                  <p>09:30 AM - 01:00 PM</p>
                  <p className="text-sm text-slate-400 mt-1">Sunday Closed</p>
                </div>
             </div>

             <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                <a href="tel:+918261808915" className="text-slate-900 font-medium hover:text-teal-700 underline decoration-teal-300 underline-offset-4 decoration-2">
                  +91 82618 08915
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Sahawas Skin & Laser Clinic. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">
            Designed for Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
