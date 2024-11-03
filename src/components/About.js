import React, { useEffect } from 'react';
import './About.css';

function About() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="story-container">
      {/* Sekcja 1: Początki */}
      <section className="story-section fade-in" id="beginnings">
        <h2 className="section-title">Początki</h2>
        <p className="section-text">
          Zaczynałem z aparatem analogowym, który otrzymałem od mojego dziadka. Był to moment, który obudził we mnie
          prawdziwą pasję do fotografii. Każde zdjęcie było dla mnie odkrywaniem nowego świata.
        </p>
      </section>

      {/* Sekcja 2: Pierwsze zlecenia */}
      <section className="story-section fade-in" id="first-jobs">
        <h2 className="section-title">Pierwsze Zlecenia</h2>
        <p className="section-text">
          Moje pierwsze zlecenia były pełne wyzwań, ale każde z nich nauczyło mnie czegoś nowego. Klienci doceniali moje
          zaangażowanie i wyjątkowe podejście do każdego projektu.
        </p>
      </section>

      {/* Sekcja 3: Rozwój Stylu */}
      <section className="story-section fade-in" id="style-development">
        <h2 className="section-title">Rozwój Stylu</h2>
        <p className="section-text">
          Z czasem zacząłem rozwijać swój unikalny styl. Eksperymentowanie z różnymi technikami oraz inspiracje naturą
          sprawiły, że moje zdjęcia zaczęły oddawać moją osobistą wizję świata.
        </p>
      </section>

      {/* Sekcja 4: Dzisiejsze Projekty */}
      <section className="story-section fade-in" id="current-projects">
        <h2 className="section-title">Dzisiejsze Projekty</h2>
        <p className="section-text">
          Obecnie pracuję nad wieloma projektami, które pozwalają mi uchwycić piękno i emocje w każdej chwili.
          Dzięki tym projektom mogę wyrażać siebie i realizować swoją pasję.
        </p>
      </section>
    </div>
  );
}

export default About;



