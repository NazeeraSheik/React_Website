import React, { Component } from "react";
import "./style.css";
import Header from "./header";
import Intro from "./Intro";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Data from "./Data";
import Footer from "./footer";

import Testimonial from "./Testimonial";
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="home" class="header-hero bg_cover">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8 col-lg-10">
                <div class="header-content text-center">
                  <h3 class="header-title">
                    Handcrafted Landing Page for Startups and SaaS Businesses
                  </h3>

                  <p class="text">
                    A simple, customizable, and, beautiful SaaS business focused
                    landing page to make your project closer to launch!
                  </p>
                  <ul class="header-btn">
                    <li>
                      <a class="main-btn btn-one" href="#">
                        GET IN TOUCH
                      </a>
                    </li>
                    <li>
                      <a
                        class="main-btn btn-two video-popup"
                        href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                      >
                        WATCH THE VIDEO <i class="lni-play"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="header-shape">
            <img
              src="https://hdhtech.com/wp-content/uploads/2018/04/12.2-800x450.jpg"
              alt="shape"
            />
          </div>
        </div>
        <br />
        <br />
        <Intro />
    
        <Pricing/>
     
        <Contact />
        <Testimonial />
     
        <Data />
        <Footer />
      </div>
    );
  }
}

export default Home;
