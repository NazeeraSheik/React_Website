import React, { Component } from "react";
import "./styles.css";

class Testimonial extends Component {
  state = {};
  render() {
    return (
      <div>
        

        <section class="pt-5 pb-5">
  <div class="container">
    <div class="row">
        <div class="col-6">
            <h3 class="mb-3">Testimonials </h3>
        </div>
        <div class="col-6 text-right">
            <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <i class="fa fa-arrow-left"></i>
            </a>
            <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                <i class="fa fa-arrow-right"></i>
            </a>
        </div>
        <div class="col-12">
            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                 
                    <div class="carousel-item active">
                        <div class="row">

                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://www.lifeoptimism.com/wp-content/uploads/2020/08/Mark-Zuckerberg-Quotes.jpg"/>
                                    <div class="card-body">
                                        <h4 class="card-title">Mark Zukerberg</h4>
                                        <p class="card-text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://th.bing.com/th/id/OIP.oQwyxEnlEN832D5_kwUe7QHaE8?pid=ImgDet&rs=1"/>
                                    <div class="card-body">
                                        <h4 class="card-title">Elon Musk</h4>
                                        <p class="card-text">Stop wasting time and money designing and managing a website that doesn’t get results.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://th.bing.com/th/id/OIP.-BuXwS7e2fqidPqT5WIiygEsDJ?pid=ImgDet&rs=1"/>
                                    <div class="card-body">
                                        <h4 class="card-title">Steve Jobs</h4>
                                        <p class="card-text">Stop wasting time and money designing and managing a website that doesn’t get results.</p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">

                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://th.bing.com/th/id/OIP.HHqYMbc6fn5rar6AXdjEvgHaEK?pid=ImgDet&rs=1"/>
                                    <div class="card-body">
                                        <h4 class="card-title">Jeff Bezos</h4>
                                        <p class="card-text">Stop wasting time and money designing and managing a website that doesn’t get results..</p>

                                    </div>

                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://english.cdn.zeenews.com/sites/default/files/2016/08/22/521707-flipkartceo.jpg"/>
                                    <div class="card-body">
                                        <h4 class="card-title">Kalyan Krishnamurthy</h4>
                                        <p class="card-text">Stop wasting time and money designing and managing a website that doesn’t get results..</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="card">
                                    <img class="img-fluid" alt="100%x280" src="https://th.bing.com/th/id/OIP.jttdTvyn5IBkgdSNy5RNmgHaFB?pid=ImgDet&rs=1"/>
                                    <div class="card-body">
                                        <h4 class="card-title">Kevin Systrom</h4>
                                        <p class="card-text">Stop wasting time and money designing and managing a website that doesn’t get results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
      </div>
    );
  }
}

  export default Testimonial;    