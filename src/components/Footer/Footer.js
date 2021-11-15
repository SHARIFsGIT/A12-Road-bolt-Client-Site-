import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="About">about us</a></li>
  	 				<li><a href="Home">our services</a></li>
  	 				<li><a href="About">privacy policy</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">return policy</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Support</h4> 
  	 			<ul>
  	 				<li><a href="#">Account</a></li>
  	 				<li><a href="#">Client Area</a></li>
  	 				<li><a href="#">Author Hangout</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
            <div class="footer">
                <p>© Copyright Road Bolt || By SHARIFUL ISLAM</p>
            </div>
  	 	</div>
  	 </div>
    );
};
export default Footer;