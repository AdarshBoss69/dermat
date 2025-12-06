import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import DoctorProfile from './components/DoctorProfile';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <DoctorProfile />
      </main>
      <Footer />
    </div>
  );
};

export default App;
