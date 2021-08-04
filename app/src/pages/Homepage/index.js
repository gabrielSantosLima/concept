import React from 'react';

import './styles.css'

const Homepage = () => {
  return(
    <div className="content">
      <aside className="o-aside">
      <header className="o-title">
            <h1>Concept</h1>
      </header>
      <main className = "o-content">
        <a>
          Organize suas ideias<br />
          em um só lugar.
        </a>
      </main>
      <footer className="o-botao">
            <button><a>Ir para as minhas notas</a></button>
      </footer>
      </aside>
      <main className="o-main">
        <img src="Tech Life Communication.svg" alt="" />
      </main>
    </div>
  );
}

export default Homepage;