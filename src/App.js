import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Parallax from './components/Parallax/Parallax';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <section id="Home">
        <Navbar />  
        <Hero />
      </section>
      <section id='Projects'><Parallax /></section>
      <Portfolio />
      <section id='Contact'><Contact /></section>
    </div>
  );
}

export default App;
