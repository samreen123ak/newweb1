import React from 'react'; 
import './mycss/navbar.css';
import './mycss/mainpage.css';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <img src="logo.png"/>
      <div className="manu1">
      <a href="#home">COMPANY</a>
      <a href="#news">SERVICES</a>
      <a href="#contact">PROJECTS</a>
      <a href="#about">IPTV</a>
      <a href="#about">CAREER</a>
      </div>
      <button>get a quote</button>
    </div>
    </>
  );
 
};

export default Navbar;
