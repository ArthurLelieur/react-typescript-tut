import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const toggleAuthMode = () => {
    setIsLogin(!isLogin); 
    
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    console.log(`Mode: ${isLogin ? 'Connexion' : 'Inscription'}`);
    console.log({ email, password });
    
    alert(`Formulaire de ${isLogin ? 'connexion' : "d'inscription"} soumis !`);
    
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="App">
      <div className="auth-container">
        <div className="auth-header">
          <h2>{isLogin ? 'Bon retour !' : 'Créer un compte'}</h2>
          <p>
            {isLogin 
              ? 'Veuillez vous connecter pour continuer.' 
              : 'Inscrivez-vous pour commencer.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Adresse Email</label>
            <input
              type="email"
              id="email"
              placeholder="exemple@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label htmlFor="confirm-password">Confirmer le mot de passe</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'Se connecter' : "S'inscrire"}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
            <button 
              type="button" 
              className="toggle-btn" 
              onClick={toggleAuthMode}
            >
              {isLogin ? "S'inscrire" : "Se connecter"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;