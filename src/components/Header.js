import React from 'react';
import './Header.css'; // Dodajemy dodatkowy plik CSS dla stylizacji i animacji

function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-20 top-0 left-0 transition-transform duration-500 ease-in-out">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Portfolio Fotografa</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="nav-link">Strona Główna</a></li>
            <li><a href="#about" className="nav-link">O mnie</a></li>
            <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li><a href="#contact" className="nav-link">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

