import React, { Component } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Contact />
        <Footer />
        <Header />
        <Portfolio />
        <Resume />
        <Testimonials />
      </div>
    );
  }
}

export default App;
