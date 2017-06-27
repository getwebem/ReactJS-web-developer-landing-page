import React, { Component } from 'react';


class Header extends Component {
  render() {
    if(this.props.data){
        var name = this.props.data.name;
        var occupation = this.props.data.occupation;
        var description = this.props.data.description;
        var city = this.props.data.address.city;
    }
    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name} .</h1>
            <h3>I'm a {city} based <span>{occupation} </span> {description}</h3>
            <hr />
            <ul className="social">
               <li><a href=""><i className="fa fa-facebook"></i></a></li>
               <li><a href=""><i className="fa fa-twitter"></i></a></li>
               <li><a href=""><i className="fa fa-google-plus"></i></a></li>
               <li><a href=""><i className="fa fa-linkedin"></i></a></li>
               <li><a href=""><i className="fa fa-instagram"></i></a></li>
               <li><a href=""><i className="fa fa-dribbble"></i></a></li>
               <li><a href=""><i className="fa fa-skype"></i></a></li>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
