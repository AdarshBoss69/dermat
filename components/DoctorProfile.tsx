import React from 'react';
import { Award, GraduationCap, Globe } from 'lucide-react';

const DoctorProfile: React.FC = () => {
  return (
    <section id="doctor" className="bg-slate-900 py-24 relative overflow-hidden">
        {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-emerald-400 rounded-3xl transform rotate-3 scale-105 opacity-20" />
            <img
              src="https://res.cloudinary.com/subframe/image/upload/v1740924976/uploads/387/57a78377-2245-4206-880c-7b2575d3886f.jpg"
              alt="Dr. Mukta Tulpule Dani"
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px] lg:h-[600px]"
            />
          </div>

          {/* Text Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-teal-400 font-medium tracking-widest uppercase text-sm mb-3">
                Meet The Expert
              </h2>
              <h3 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
                Dr. Mukta Tulpule Dani
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                A dedicated dermatologist committed to combining medical precision with aesthetic refinement. Dr. Mukta brings years of international experience and a gentle, patient-centric approach to every consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <GraduationCap className="w-8 h-8 text-teal-400 mt-1" />
                <div>
                  <h4 className="text-white font-serif font-bold text-lg">Education</h4>
                  <p className="text-slate-400">MBBS from MIT MIMER, DNB Dermatology from KEM Hospital, Pune.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Award className="w-8 h-8 text-emerald-400 mt-1" />
                <div>
                  <h4 className="text-white font-serif font-bold text-lg">Specialization</h4>
                  <p className="text-slate-400">Expert in Clinical Dermatology, Lasers, and Dermatosurgery.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <Globe className="w-8 h-8 text-cyan-400 mt-1" />
                <div>
                  <h4 className="text-white font-serif font-bold text-lg">International Fellow</h4>
                  <p className="text-slate-400">Former Fellow at National Skin Center, Singapore.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;