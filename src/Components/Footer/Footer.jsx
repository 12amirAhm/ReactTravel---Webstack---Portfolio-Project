import React from 'react';
import Copyright from '../../Assets/Icons/c-circle.svg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer" class="footer light-background">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
          <div class="widget">
            <h3 class="widget-heading"> <strong style={{ color: 'rgb(8, 163, 8)' }}> About Us </strong> </h3>
            <p class="mb-4">
            We specialize in turning travel dreams into extraordinary experiences, offering a diverse range of 
            personalized tours and adventures to destinations around the globe.
            </p>
            <p class="mb-0">
            <Link to='/AboutUs'>
            <a href="#" style={{ backgroundColor: 'rgb(8, 163, 8)' }} class="btn-learn-more">Learn more</a>
            </Link>
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 pl-lg-5">
        <div class="widget">
        <h3 class="widget-heading"> <strong style={{ color: 'rgb(8, 163, 8)' }}> Our Services </strong></h3>
       <div className="ours">
       <span>Ticket Booking</span>
        <span>Car Rental</span>
        <span>Hotel Booking</span>
           
       </div>
       
        </div>
           
        </div>
        <div class="col-md-6 col-lg-3 pl-lg-5">
          <div class="widget">
            <h3 class="widget-heading"> <strong style={{ color: 'rgb(8, 163, 8)' }}> Our Location </strong></h3>
              <span>
              A108 Adam Street
              New York, NY 535022
              </span> 
      
            <h6> Phone: +1 5589 55488 55</h6>
            <h6> Email:   info@example.com</h6> 
         
              
          </div>
        </div>
        <div class="col-md-6 col-lg-3 pl-lg-5">
          <div class="widget">
            <h3 class="widget-heading"> <strong style={{ color: 'rgb(8, 163, 8)' }} > Connect Us </strong></h3>
            <ul class="list-unstyled social-icons light mb-3">
              <li>
              <a href="https://www.facebook.com/"><FaFacebook /></a>
              </li>
              <li>
              <a href="https://x.com/"><FaTwitter /></a>
              </li>
              <li>
              <a href="https://www.linkedin.com/"><FaLinkedin /></a>
              </li>
              <li>
              <a href="https://www.instagram.com/"><FaInstagram /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="copyright d-flex flex-column flex-md-row align-items-center justify-content-md-between">
        <p>© <span>Copyright</span> <strong style={{ color: 'rgb(8, 163, 8)' }} class="px-1 sitename">React Travel.</strong> <span>All Rights Reserved</span></p>
      </div>
    </div>
  </footer>

  )
}

export default Footer;