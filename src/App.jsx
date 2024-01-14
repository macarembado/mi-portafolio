import React from 'react';
import MyNavbar from './components/navbar/navbar.jsx';
import MainContent from './components/contenido/contenido.jsx';
import Proyectos from './components/proyecto/proyecto.jsx';

function App() {
  return (
    <div className="app-container">
      <MyNavbar />
      <MainContent />
      <Proyectos />
    </div>
  );
}

export default App;
