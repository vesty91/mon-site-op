import React, { useState } from 'react';
    import './Services.css';
    import {
      FaPowerOff,
      FaFan,
      FaMicrochip,
      FaHdd,
      FaTools,
      FaThermometerHalf,
      FaCheck,
    } from 'react-icons/fa';

    function Services() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
      });
      const [selectedService, setSelectedService] = useState(null);
      const [isModalOpen, setIsModalOpen] = useState(false);

      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        alert(
          `Demande de service soumise:\nNom: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
        );
        setFormData({ name: '', email: '', service: '', message: '' });
        setIsModalOpen(false);
        setSelectedService(null);
      };

      const handleServiceClick = (service) => {
        setSelectedService(service);
        setFormData({ ...formData, service: service.title });
        setIsModalOpen(true);
      };

      const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
      };

      const services = [
        {
          id: 'repair',
          title: 'Réparation rapide',
          description:
            'Diagnostic et réparation de votre ordinateur sous 48 heures. Nous réparons tous types de problèmes, des écrans cassés aux problèmes de démarrage.',
          details:
            'Notre service de réparation rapide est conçu pour remettre votre ordinateur en état de marche le plus rapidement possible. Nous diagnostiquons et réparons tous types de problèmes, des écrans cassés aux problèmes de démarrage. Nos techniciens qualifiés utilisent des outils de pointe pour assurer une réparation efficace et durable.',
          icon: '/src/assets/repair.png',
        },
        {
          id: 'software',
          title: 'Installation de logiciels',
          description:
            "Installation d'antivirus, de systèmes d'exploitation et de logiciels divers. Nous vous aidons à choisir les meilleurs outils pour vos besoins.",
          details:
            "Nous vous aidons à installer et configurer tous types de logiciels, des antivirus aux systèmes d'exploitation. Nous vous conseillons sur les meilleurs outils pour vos besoins et nous assurons que tout fonctionne correctement.",
          icon: '/src/assets/software.png',
        },
        {
          id: 'pc-build',
          title: 'Assemblage de PC',
          description:
            'Du choix des composants à l\'installation complète. Nous vous accompagnons dans la création de votre PC sur mesure, adapté à vos besoins et à votre budget.',
          details:
            'Nous vous accompagnons dans la création de votre PC sur mesure, adapté à vos besoins et à votre budget. Nous vous conseillons sur le choix des composants et nous assurons un montage professionnel et soigné.',
          icon: '/src/assets/pc-build.png',
        },
        {
          id: 'data-recovery',
          title: 'Récupération de données',
          description:
            'Récupération de vos données perdues suite à une panne de disque dur, une suppression accidentelle ou un virus. Nous mettons tout en œuvre pour récupérer vos fichiers importants.',
          details:
            'Nous mettons tout en œuvre pour récupérer vos fichiers importants suite à une panne de disque dur, une suppression accidentelle ou un virus. Nos experts utilisent des techniques avancées pour récupérer vos données en toute sécurité.',
          icon: '/src/assets/data-recovery.png',
        },
        {
          id: 'network',
          title: 'Configuration réseau',
          description:
            'Configuration de votre réseau domestique ou professionnel. Nous vous aidons à mettre en place un réseau stable et sécurisé.',
          details:
            'Nous vous aidons à mettre en place un réseau stable et sécurisé, que ce soit pour votre domicile ou votre entreprise. Nous configurons votre matériel et nous assurons que tout fonctionne correctement.',
          icon: '/src/assets/network.png',
        },
        {
          id: 'cleaning',
          title: 'Nettoyage',
          description:
            'Nettoyage complet de votre ordinateur pour améliorer ses performances et sa durée de vie.',
          details:
            'Notre service de nettoyage comprend le dépoussiérage de tous les composants internes de votre ordinateur, le nettoyage des ventilateurs et le remplacement de la pâte thermique si nécessaire. Un ordinateur propre fonctionne mieux et dure plus longtemps.',
          icon: '/src/assets/cleaning.png',
                          },
      ];

      return (
        <div className="services">
          <h1>Nos Services</h1>
          <div className="service-list">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-item"
                onClick={() => handleServiceClick(service)}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                {service.id === 'cleaning' && (
                  <p>
                                    </p>
                )}
                <img src={service.icon} alt={service.title} />
              </div>
            ))}
          </div>
          {isModalOpen && (
            <div className="service-modal">
              <div className="service-modal-content">
                <button className="close-button" onClick={handleCloseModal}>
                  &times;
                </button>
                <div className="animation-container">
                  <div className="animation-circle"></div>
                </div>
                <div className="content-wrapper">
                  {selectedService && selectedService.id === 'cleaning' ? (
                    <>
                      <h1>Nettoyage de tour informatique</h1>
                      <div className="image-container">
                        <img
                          src="https://example.com/computer-cleaning-image.jpg"
                          alt="Nettoyage d'ordinateur"
                        />
                      </div>
                      <div className="service-description">
                        <p>Le nettoyage comprend :</p>
                        <p>
                          <FaPowerOff /> Dépoussiérage de l’alimentation, par
                          projection d’air pressurisé
                        </p>
                        <p>
                          <FaFan /> Dépoussiérage des ventilateurs, par projection
                          d’air pressurisé
                        </p>
                        <p>
                          <FaMicrochip /> Dépoussiérage de la ventilation du
                          processeur, par projection d’air pressurisé
                        </p>
                        <p>
                          <FaHdd /> Dépoussiérage de la tour, par projection d’air
                          pressurisé, puis à l’alcool ménager
                        </p>
                        <p>
                          <FaTools /> Démontage des composants, nettoyage par
                          nettoyant contact
                        </p>
                        <p>
                          <FaThermometerHalf /> Si dernier nettoyage effectué à
                          plus de 3 ans, changement de pâte thermique (facturé
                          10€TTC en supplément)
                        </p>
                        <p>
                          <FaCheck /> Vérification du câblage.
                        </p>
                        <p>
                          Attention : contrairement à ce que l’image suggère, nous
                          n’utilisons plus de bombe aérosol pour dépoussiérer les
                          ordinateurs, parce que le procédé est trop polluant.
                          Nous utilisons dorénavant un compresseur d’air, plus
                          puissant, plus écologique, plus efficace !
                        </p>
                        <p>
                          Prix : {selectedService.price}40€ {' '}
                          {selectedService.priceWithThermalPaste}
                        </p>
                      </div>
                      <a href="#" className="cta-button">
                        Réserver un nettoyage
                      </a>
                    </>
                  ) : (
                    <>
                      <h2>{selectedService.title}</h2>
                      <p>{selectedService.details}</p>
                      <form onSubmit={handleSubmit}>
                        <input
                          type="text"
                          name="name"
                          placeholder="Nom"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="text"
                          name="service"
                          placeholder="Service"
                          value={formData.service}
                          onChange={handleInputChange}
                          readOnly
                        />
                        <textarea
                          name="message"
                          placeholder="Message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                        <button type="submit">Envoyer la demande</button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    export default Services;
