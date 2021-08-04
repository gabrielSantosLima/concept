import React from 'react';
import { useHistory } from 'react-router-dom'

import './styles.css'

import LandingImage from '../../assets/Tech Life Communication.svg' 

const Homepage = () => {
  const history = useHistory()

  function handleListNotesPage(){
    history.push('/notes')
  }

  return(
    <div className="content-homepage">
      <aside className="o-aside">
      <header className="o-title">
            <h1>Concept</h1>
      </header>
      <main className = "o-content">
        <a> Organize suas ideias em um só lugar.</a>
      </main>
      <footer className="o-botao">
        <button onClick={handleListNotesPage}>
          Ir para as minhas notas
        </button>
      </footer>
      </aside>
      <main className="o-main">
        <img src={LandingImage} alt="Página Inicial" />
      </main>
    </div>
  );
}

export default Homepage;