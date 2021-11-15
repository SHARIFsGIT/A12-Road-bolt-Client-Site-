import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="About">about us</a></li>
  	 				<li><a href="Home">our services</a></li>
  	 				<li><a href="About">privacy policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">return policy</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Support</h4> 
  	 			<ul>
  	 				<li><a href="#">Account</a></li>
  	 				<li><a href="#">Client Area</a></li>
  	 				<li><a href="#">Author Hangout</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
            <div className="footer">
                <p>© Copyright ROAD-BOLT || By SHARIFUL ISLAM</p>
            </div>
  	 	</div>
  	 </div>
    );
};
export default Footer;