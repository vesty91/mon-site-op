import React, { useState } from 'react';
    import './Contact.css';

    function Contact() {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      const [errors, setErrors] = useState({});

      const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
          formErrors.name = 'Le nom est requis';
          isValid = false;
        }

        if (!formData.email.trim()) {
          formErrors.email = 'L\'email est requis';
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          formErrors.email = 'L\'email n\'est pas valide';
          isValid = false;
        }

        if (!formData.phone.trim()) {
          formErrors.phone = 'Le numéro de téléphone est requis';
          isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone)) {
          formErrors.phone = 'Le numéro de téléphone n\'est pas valide';
          isValid = false;
        }

        if (!formData.message.trim()) {
          formErrors.message = 'Le message est requis';
          isValid = false;
        }

        setErrors(formErrors);
        return isValid;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          alert(
            `Formulaire soumis:\nNom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nMessage: ${formData.message}`
          );
          setFormData({ name: '', email: '', phone: '', message: '' });
          setErrors({});
        }
      };

      return (
        <div className="contact">
          <h1>Contactez-nous</h1>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
              <input
                type="tel"
                name="phone"
                placeholder="Numéro de téléphone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {errors.message && <p className="error-message">{errors.message}</p>}
              <button type="submit">Envoyer</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Nos Coordonnées</h2>
            <p>Adresse: 123 Rue de l'Informatique, 75000 Paris</p>
            <p>Téléphone: 01 23 45 67 89</p>
            <p>Email: contact@restor-pc.com</p>
          </div>
          <div className="map">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.995444924998!2d2.349587515675787!3d48.85331787928979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sen!2sfr!4v1693920000000!5m2!1sen!2sfr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      );
    }

    export default Contact;
