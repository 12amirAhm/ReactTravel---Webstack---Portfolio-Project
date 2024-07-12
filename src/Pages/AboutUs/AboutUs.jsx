
import React from 'react';
import { Link } from 'react-router-dom';
import exampleImage1 from '../../Assets/Images/holiday-dubai.jpg';
import './About.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




function AboutUs() {
 
    return (   
      <>
      <section id="about-2" class="about-2 section">
        <div class="container">
          <div class="content">
            <div class="row justify-content-center">
              <div class="col-sm-12 col-md-5 col-lg-4 col-xl-4 order-lg-2 offset-xl-1 mb-4">
                <div class="img-wrap text-center text-md-left" data-aos="fade-up" data-aos-delay="100">
                  <div class="img">
                    <img src={exampleImage1} alt="circle image" class="img-fluid"/>
                  </div>
                </div>
              </div>
              <div class="offset-md-0 offset-lg-1 col-sm-12 col-md-5 col-lg-5 col-xl-4" data-aos="fade-up">
                <div class="px-3">
                  <strong style={{ color: 'green', fontSize: '20px' }} class="content-subtitle">Our Mission</strong>
                  <h5 class="content-title text-start">
                  We specialize in turning travel dreams into extraordinary experiences
                  </h5>
                  <p class="lead">
                  Our expert team is dedicated to providing seamless, enriching, and unforgettable travel moments, ensuring that your 
                  adventure with us is as unique as you are. Embark on your next journey with confidence and excitement, knowing that
                   React Travel is with you every step of the way.
                  </p>
                  <p>
                  <Link to='/SignUp'>
                    <a href="#" style={{ color: 'white', backgroundColor: 'green' }} class="btn-get-started">Get Started</a>
                  </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>  
        
    )
}

export default AboutUs;