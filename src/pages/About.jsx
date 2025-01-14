import React from 'react';
    import './About.css';

    function About() {
      return (
        <div className="about">
          <h1>À propos de Restor-Pc</h1>
          <section className="company-presentation">
            <h2>Notre Mission</h2>
            <p>
              Nous sommes dédiés à fournir des services de dépannage informatique de haute qualité et à
              aider nos clients à assembler des PC performants. Notre objectif est de rendre la
              technologie accessible et facile à utiliser pour tous.
            </p>
            <h2>Notre Histoire</h2>
            <p>
              Restor-Pc a été fondé en 2015 par une équipe de passionnés d'informatique. Nous avons
              commencé par des réparations à domicile et avons rapidement grandi grâce à notre
              engagement envers la satisfaction client.
            </p>
            <h2>Nos Valeurs</h2>
            <p>
              Nous croyons en l'importance de la transparence, de l'efficacité et de la qualité. Nous
              nous engageons à fournir un service personnalisé et à répondre aux besoins spécifiques de
              chaque client.
            </p>
          </section>
          <section className="team-gallery">
            <h2>Notre Équipe</h2>
            <div className="team-members">
              <div className="team-member">
                <img src="/src/assets/team-member1.jpg" alt="Membre de l'équipe 1" />
                <h3>John Doe</h3>
                <p>Technicien principal</p>
                <p>Expert en réparation de cartes mères et de systèmes d'exploitation.</p>
              </div>
              <div className="team-member">
                <img src="/src/assets/team-member2.jpg" alt="Membre de l'équipe 2" />
                <h3>Jane Smith</h3>
                <p>Spécialiste en assemblage PC</p>
                <p>Passionnée par les composants PC et l'optimisation des performances.</p>
              </div>
              <div className="team-member">
                <img src="/src/assets/team-member3.jpg" alt="Membre de l'équipe 3" />
                <h3>Bob Johnson</h3>
                <p>Technicien réseau</p>
                <p>Spécialiste en configuration de réseaux et en sécurité informatique.</p>
              </div>
            </div>
          </section>
          <section className="stats">
            <h2>Nos Statistiques</h2>
            <p>PC réparés: 500+</p>
            <p>Clients satisfaits: 450+</p>
            <p>Années d'expérience: 8+</p>
          </section>
          <section className="testimonials">
            <h2>Témoignages clients</h2>
            <div className="testimonial-card">
              <p>"Service rapide et efficace, je recommande vivement !"</p>
              <p>- Sophie L.</p>
            </div>
            <div className="testimonial-card">
              <p>
                "L'équipe de Restor-Pc a sauvé mon ordinateur ! Ils sont très professionnels et
                compétents."
              </p>
              <p>- Marc D.</p>
            </div>
            <div className="testimonial-card">
              <p>
                "J'ai fait assembler mon PC chez Restor-Pc et je suis très satisfait du résultat.
                Excellent travail !"
              </p>
              <p>- Julie R.</p>
            </div>
          </section>
        </div>
      );
    }

    export default About;
