import React from 'react';
    import './Home.css';

    function Home() {
      return (
        <div className="home">
          <section className="hero">
            <div className="hero-content">
              <h1>Votre partenaire pour un PC toujours performant</h1>
              <p>
                Découvrez nos services de dépannage informatique et assemblez votre PC personnalisé.
              </p>
              <div className="hero-buttons">
                <button>Découvrir nos services</button>
                <button>Démarrer votre configuration</button>
              </div>
            </div>
          </section>
          <section className="intro-text">
            <h2>Un problème avec votre ordinateur ? Pas de panique, on s’occupe de tout !</h2>
            <p>
              Votre ordinateur rame comme un vieux tracteur ? Il bug comme un téléphone des années 90 ?
              Ou pire... il ne s’allume plus du tout, comme après une grasse matinée bien méritée ?
              <br />
              Pas de souci ! Restor-Pc est là pour remettre vos machines sur pied.
            </p>
            <p>
              Spécialisés dans le dépannage et la réparation informatique, nous trouvons des solutions à
              tous vos soucis techniques, même les plus capricieux !
            </p>
            <h3>👨‍🔧 Ce que nous faisons pour vous :</h3>
            <ul>
              <li>Réparation d'ordinateurs</li>
              <li>Sauvegarde de vos données précieuses</li>
              <li>Conseils pour vos achats informatiques</li>
              <li>
                Interventions à domicile si votre ordinateur refuse de bouger (ou si c’est vous qui
                préférez rester au chaud !)
              </li>
            </ul>
            <p>
              📍 Nous nous déplaçons dans les communes de BRUNOY, MONTGERON, CROSNE… et bien d'autres
              encore.
            </p>
            <p>
              Fini le stress des bugs : appelez Restor-Pc, et repartez avec un ordinateur comme neuf
              (et peut-être un sourire en plus) ! 😊
            </p>
          </section>
          <section className="services-preview">
            <h2>Nos Services</h2>
            <div className="service-cards">
              <div className="service-card">
                <h3>Réparation rapide</h3>
                <p>Diagnostic et réparation sous 48 heures.</p>
              </div>
              <div className="service-card">
                <h3>Installation de logiciels</h3>
                <p>Antivirus, systèmes d'exploitation, et logiciels divers.</p>
              </div>
              <div className="service-card">
                <h3>Assemblage de PC</h3>
                <p>Du choix des composants à l'installation complète.</p>
              </div>
            </div>
          </section>
          <section className="testimonials">
            <h2>Témoignages clients</h2>
            <div className="testimonial-card">
              <p>"Service rapide et efficace, je recommande !"</p>
              <p>- Client satisfait</p>
            </div>
          </section>
          <section className="company-info">
            <h2>À propos de nous</h2>
            <p>
              Nous sommes une équipe de passionnés d'informatique avec plusieurs années d'expérience.
            </p>
          </section>
          <section className="pc-gallery">
            <h2>Nos Réalisations</h2>
            <div className="pc-images">
              <img src="/src/assets/pc-build-1.jpg" alt="PC Build 1" />
              <img src="/src/assets/pc-build-2.jpg" alt="PC Build 2" />
              <img src="/src/assets/pc-build-3.jpg" alt="PC Build 3" />
              <img src="/src/assets/pc-build-4.jpg" alt="PC Build 4" />
            </div>
          </section>
        </div>
      );
    }

    export default Home;
