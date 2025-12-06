import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-slate-100 -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-2">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                Premier Skin & Laser Care
              </span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15]">
              Reclaim Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                Natural Confidence
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Advanced dermatology and laser care in Pune by Dr. Mukta Tulpule Dani. 
              Bridging the gap between medical expertise and aesthetic artistry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#services"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-200 hover:-translate-y-1"
              >
                Explore Treatments
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white text-slate-700 border border-slate-200 font-medium hover:bg-slate-50 transition-all duration-300 hover:border-teal-200 group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
               {/* Decorative Ring */}
              <div className="absolute inset-0 border-2 border-teal-500/10 rounded-full scale-110 animate-[spin_10s_linear_infinite]" />
              
              {/* Image Mask */}
              <div className="w-full h-full overflow-hidden blob-shape shadow-2xl shadow-teal-900/10 bg-white p-2">
                 <img
                  src="https://res.cloudinary.com/subframe/image/upload/v1740924976/uploads/387/a1a1f021-93e1-4560-84c6-e6113b5e406f.png"
                  alt="Dr. Mukta Tulpule Dani"
                  className="w-full h-full object-cover blob-shape"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 hidden sm:block">
                <p className="font-serif text-3xl font-bold text-teal-800">10+</p>
                <p className="text-xs text-slate-600 font-medium uppercase tracking-wide">Years Experience</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;