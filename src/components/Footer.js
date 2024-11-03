import React from 'react';
import './Footer.css'; // Nowy plik CSS dla stylizacji i animacji

function Footer() {
  return (
    <footer className="footer bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="footer-text">&copy; 2024 Moje Portfolio Fotograficzne. Wszelkie prawa zastrzeżone.</p>
        
        <div className="social-links mt-4 flex justify-center space-x-6">
          <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-linkedin-in"></i>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

