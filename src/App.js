import React, { Component } from 'react';
import $ from 'jquery';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

      portfolioData: {}
    }
  }
   getPortfolioData(){
     //Ajax request
    $.ajax({
      url: 'http://localhost:3000/portfolioData.json',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({  portfolioData: data  });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });

   }


  componentDidMount(){
    this.getPortfolioData();
  }
  render() {
    console.log(this.state.portfolioData);
    return (
      <div className="App">
        <Header data={this.state.portfolioData.main} />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
