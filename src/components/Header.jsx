import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import './Header.css';
    import AuthModal from './AuthModal';
    import UserProfile from './UserProfile';

    function Header() {
      const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
      const [currentUser, setCurrentUser] = useState(null);

      useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          setCurrentUser(JSON.parse(storedUser));
        }
      }, []);

      const handleAuth = (user) => {
        setCurrentUser(user);
      };

      const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
      };

      return (
        <header className="header">
          <div className="container header-content">
            <Link to="/" className="logo">
              Restor-Pc
            </Link>
            <nav className="nav">
              <Link to="/">Accueil</Link>
              <Link to="/services">Services</Link>
              <Link to="/configurator">Config PC</Link>
              <Link to="/about">À propos</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/faq">FAQ</Link>
            </nav>
            {currentUser ? (
              <UserProfile user={currentUser} onLogout={handleLogout} />
            ) : (
              <button
                className="appointment-button"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Se connecter
              </button>
            )}
            <AuthModal
              isOpen={isAuthModalOpen}
              onClose={() => setIsAuthModalOpen(false)}
              onAuth={handleAuth}
            />
          </div>
        </header>
      );
    }

    export default Header;
