import React, { useState } from 'react';
    import './FAQ.css';

    function FAQ() {
      const [activeItem, setActiveItem] = useState(null);

      const faqData = [
        {
          id: 1,
          question: 'Quels types de services proposez-vous ?',
          answer:
            'Nous proposons des services de dépannage informatique, d\'assemblage de PC sur mesure, d\'installation de logiciels, de récupération de données et de configuration réseau.',
        },
        {
          id: 2,
          question: 'Comment puis-je prendre rendez-vous ?',
          answer:
            'Vous pouvez prendre rendez-vous en nous contactant par téléphone, par email ou en utilisant le formulaire de contact sur notre site web.',
        },
        {
          id: 3,
          question: 'Quels sont vos tarifs ?',
          answer:
            'Nos tarifs varient en fonction du type de service demandé. Nous vous invitons à nous contacter pour obtenir un devis personnalisé.',
        },
        {
          id: 4,
          question: 'Où êtes-vous situés ?',
          answer:
            'Nous sommes situés à Paris, mais nous nous déplaçons dans les communes de BRUNOY, MONTGERON, CROSNE et bien d\'autres encore.',
        },
        {
          id: 5,
          question: 'Combien de temps faut-il pour réparer un ordinateur ?',
          answer:
            'Le temps de réparation dépend de la nature du problème. Nous nous efforçons de réparer votre ordinateur sous 48 heures.',
        },
        {
          id: 6,
          question: 'Proposez-vous des garanties sur vos services ?',
          answer:
            'Oui, nous proposons des garanties sur nos services. N\'hésitez pas à nous contacter pour en savoir plus.',
        },
      ];

      const toggleFAQ = (id) => {
        setActiveItem(activeItem === id ? null : id);
      };

      return (
        <div className="faq">
          <h1>Foire aux Questions</h1>
          <div className="faq-list">
            {faqData.map((item) => (
              <div
                key={item.id}
                className={`faq-item ${activeItem === item.id ? 'active' : ''}`}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(item.id)}
                >
                  {item.question}
                </div>
                <div className="faq-answer">{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default FAQ;
