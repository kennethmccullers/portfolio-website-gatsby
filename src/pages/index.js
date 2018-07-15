import React from 'react';
import Link from 'gatsby-link';
import "../styles/layout-override.css";
import "./css/fontawesome.css";
import "./css/brands.css";



const IndexPage = () => (
  <div style={{ textAlign: 'center', padding: '8.25rem', color: 'black' }}>
   <h1 style={{ color: 'black', fontSize: '40px' }}>Kenneth McCullers</h1>
   <h3 style={{ color: 'black' }}> A Digital Artist</h3>

   <div class="social-icons" style={{ marginRight: '0.5rem'}}>
   <a href="https://deviantart.com/" className="deviantart-link"> <i className="fab fa-deviantart" style={{ color: 'black', fontSize: '25px' }}></i> </a>
   <a href="https://behance.com/"><i className="fab fa-behance" style={{ color: 'black', fontSize: '25px', paddingLeft: '25px' }}></i> </a>
   <a href="https://twitter.com/"><i className="fab fa-twitter" style={{ color: 'black', fontSize: '25px', paddingLeft: '25px'  }}></i> </a>
   <a href="https://instagram.com/"><i className="fab fa-instagram" style={{ color: 'black', fontSize: '25px', paddingLeft: '25px'  }}></i> </a>
   <a href="https://facebook.com/"><i className="fab fa-facebook" style={{ color: 'black', fontSize: '25px', paddingLeft: '25px'  }}></i> </a>
   </div>
   < br />
   <div class="buttons" style={{ marginRight: '-2rem' }}>
   		<a className="button1">Portfolio</a>
   		<a className="button1" href="/contact">Contact Me</a>
   </div>
      </div>

)

export default IndexPage
