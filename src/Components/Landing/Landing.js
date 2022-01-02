import React from "react";
import "./Landing.css";
import BannerSamsung from "../assets/banner-s-z.jpg";
import lgPhone from "../assets/lg.jpg";
import samsungD from "../assets/samsungd.webp";
import watch6 from "../assets/watchseries6.jpg";
import mackBook from "../assets/macbook-apple1.jpg";

import Off from "./off%/off";

const Landing = () => {
  return (
    <div>
      <div className="container-fluid landing-body my-3">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-12 col-md-8">
            <div
              className="carousel slide"
              id="mycarousel"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="mycarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="mycarousel" data-slide-to="1"></li>
                <li data-target="mycarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={BannerSamsung}
                    alt="banner"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img src={lgPhone} alt="img3" className="d-block w-100" />
                </div>
                <div className="carousel-item ">
                  <img src={samsungD} alt="img2" className="d-block w-100" />
                </div>
                <a
                  class="carousel-control-prev"
                  href="#mycarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#mycarousel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 lnading-single-img col-md-3 mt-1">
            <img src={watch6} alt="img" />
            <img src={mackBook} alt="img" className="mt-4" />
          </div>
          <Off />
        </div>
      </div>
    </div>
  );
};

export default Landing;
