import React from 'react';
import './contenido.css';
import miFoto from '../../assets/mifoto.jpg'; 
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiBootstrap, DiGithub } from 'react-icons/di';

function Contenido() {
  return (
    <div className="main-content">
      <div className="content-with-image">
        <div>
          <p>¡Hola! 👋 Soy Macarena</p>
          <p>Desarrolladora Front-End</p>
        </div>
        <img src={miFoto} alt="Mi Foto" className="round-image" />
      </div>

  
      <div className="tools-container">
        <div className='herramientas'>
        <h2>HERRAMIENTAS:</h2>
        </div>
              <div className="tools-icons">
          <DiHtml5 size={40} />
          <DiCss3 size={40} />
          <DiJavascript1 size={40} />
          <DiReact size={40} />
          <DiBootstrap size={40} />
          <DiGithub size={40} />
        </div>
      </div>
    </div>
  );
}

export default Contenido;