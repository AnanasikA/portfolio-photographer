import React from 'react';
import './Contact.css'; // Nowy plik CSS dla efektów specjalnych

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="text-3xl font-semibold text-center mb-10">Kontakt</h2>
      
      <form className="glass-form space-y-4 max-w-lg mx-auto p-8 rounded-lg shadow-lg">
        <div className="input-group">
          <i className="fas fa-user icon"></i>
          <input type="text" placeholder="Imię" className="input-field" />
        </div>
        <div className="input-group">
          <i className="fas fa-envelope icon"></i>
          <input type="email" placeholder="Email" className="input-field" />
        </div>
        <div className="input-group">
          <i className="fas fa-phone icon"></i>
          <input type="text" placeholder="Numer telefonu" className="input-field" />
        </div>
        <div className="input-group">
          <i className="fas fa-comment icon"></i>
          <textarea placeholder="Twoja wiadomość" className="input-field" rows="5"></textarea>
        </div>
        <button type="submit" className="submit-button">
          Wyślij wiadomość
        </button>
      </form>

      <div className="text-center mt-10">
        <p className="text-gray-800">Możesz również skontaktować się ze mną przez media społecznościowe:</p>
        <div className="social-links mt-4">
          <a href="#" className="social-link">Instagram</a>
          <a href="#" className="social-link">Facebook</a>
          <a href="#" className="social-link">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

