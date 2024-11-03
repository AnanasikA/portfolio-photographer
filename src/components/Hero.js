import React from 'react';
import './Hero.css'; // Dodajemy dodatkowy plik CSS do efektów specjalnych

function Hero() {
  return (
    <div className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-50">
        <source src="https://videos.pexels.com/video-files/3772428/3772428-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      
      {/* Animowane elementy w tle */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="animated-circle top-1/3 left-1/4"></div>
        <div className="animated-circle top-1/2 left-3/4"></div>
        <div className="animated-circle bottom-1/4 right-1/4"></div>
      </div>

      <div className="relative z-10 text-center">
        <h1 className="glitch text-5xl font-bold mb-4">Twórcze Uchwycenie Chwil</h1>
        <p className="text-lg mb-8">Fotografia, która opowiada historię w każdym kadrze.</p>
        <a href="#portfolio" className="px-6 py-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition">
          Zobacz Portfolio
        </a>
      </div>
    </div>
  );
}

export default Hero;


