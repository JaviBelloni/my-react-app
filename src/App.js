import React, { useState } from 'react';
import Login from './Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Bienvenido a la aplicación</h1>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;