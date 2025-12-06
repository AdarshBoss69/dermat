import React from 'react';
import { Zap, Activity, Scissors, Sun, Syringe, PlusCircle } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: 'Laser Hair Removal',
    description: 'Painless, long-term hair reduction using advanced diode lasers safe for all skin types.',
    icon: Zap,
  },
  {
    title: 'Acne Scar Revision',
    description: 'Fractional CO2 and microneedling treatments to smooth texture and restore confidence.',
    icon: Activity,
  },
  {
    title: 'Vitiligo Surgery',
    description: 'Specialized surgical interventions for stable vitiligo including melanocyte grafting.',
    icon: Scissors,
  },
  {
    title: 'Anti-Aging Peels',
    description: 'Customized chemical peels to rejuvenate dull skin and reduce fine lines.',
    icon: Sun,
  },
  {
    title: 'PRP Therapy',
    description: 'Platelet-Rich Plasma therapy for hair loss restoration and facial rejuvenation.',
    icon: Syringe,
  },
  {
    title: 'Mole Removal',
    description: 'Safe and aesthetic removal of benign moles and skin tags with minimal scarring.',
    icon: PlusCircle,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Curated Treatments
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-600 text-lg">
            Comprehensive dermatological solutions tailored to your unique skin and hair needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:shadow-teal-100/60 transition-all duration-500 border border-slate-100 flex flex-col h-full"
              >
                <div className="mb-6 inline-flex">
                  <div className="p-4 rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-gradient-to-br group-hover:from-teal-400 group-hover:to-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-teal-200">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-800 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center text-sm font-medium text-teal-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
