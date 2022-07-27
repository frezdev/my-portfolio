import React from 'react';
import Info from '@containers/Info';
import Skills from '@containers/Skills';
import '@styles/Home.css';

function Home() {
  return (
    <main className="Home">
      <Info />
      <Skills />
    </main>
  );
}

export default Home;