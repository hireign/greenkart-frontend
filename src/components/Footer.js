import React from 'react';
import './Footer.css'
import logo from '../images/GreenKartLogo_transparent.png';


function Footer(){
    return (<div className="footer">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><img src={logo} style={{width:170}}/></a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/search">Our Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contactus">Contact Us</a>
      </li>
    </ul>
  </div>
  <span style={{marginLeft:"50px", marginRight:"50px"}}>Copyright GreenKart inc 2020</span>
</nav>
    </div>
    )
}

export default Footer;