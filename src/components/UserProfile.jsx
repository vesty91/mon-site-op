import React from 'react';
    import './UserProfile.css';

    function UserProfile({ user, onLogout }) {
      return (
        <div className="user-profile">
          <span>Bonjour, {user.username}</span>
          <button onClick={onLogout}>Déconnexion</button>
        </div>
      );
    }

    export default UserProfile;
