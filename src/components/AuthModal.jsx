import React, { useState } from 'react';
    import './AuthModal.css';

    function AuthModal({ isOpen, onClose, onAuth }) {
      const [isLogin, setIsLogin] = useState(true);
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      const handleAuth = () => {
        if (!username.trim() || !password.trim()) {
          setError('Veuillez remplir tous les champs.');
          return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (isLogin) {
          const user = users.find(
            (u) => u.username === username && u.password === password
          );
          if (user) {
            onAuth(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            onClose();
          } else {
            setError('Nom d\'utilisateur ou mot de passe incorrect.');
          }
        } else {
          const existingUser = users.find((u) => u.username === username);
          if (existingUser) {
            setError('Ce nom d\'utilisateur est déjà pris.');
            return;
          }
          const newUser = { username, password };
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          onAuth(newUser);
          localStorage.setItem('currentUser', JSON.stringify(newUser));
          onClose();
        }
      };

      if (!isOpen) return null;

      return (
        <div className="auth-modal">
          <div className="auth-modal-content">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleAuth}>
              {isLogin ? 'Se connecter' : 'S\'inscrire'}
            </button>
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin
                ? 'Créer un compte'
                : 'J\'ai déjà un compte'}
            </button>
          </div>
        </div>
      );
    }

    export default AuthModal;
