import React from "react";
import "./Banner.css";
import logo1 from "../../../assets/01.svg";
import logo2 from "../../../assets/02.svg";
import logo3 from "../../../assets/03.svg";
import logo4 from "../../../assets/04.svg";
import banner from "../../../assets/ca.jpg";
const Banner = () => {
  return (
    <div>
      <main>
        <section id="hero">
          {/* <!----------------- container starts -----------------------> */}
          <div class="container">
            <div class="hero__text">
              <div class="sub__header">
                <div class="circle"></div>
                <h4>Collaborative Learning Together</h4>
              </div>
              <h1 class="text-7xl text-start col-span-12">
                StudySync Invites You to Collaborate and Succeed
              </h1>
            </div>
            <div class="image__container">
              <svg width="100%" height="100%" viewBox="0 0 100 40">
                <clipPath id="border">
                  <path
                    id="main__image__path"
                    d="M 7 5 L 85 5 
                        A 2.5 2.5 0 0 0 87.5 2.5 
                        A 2.5 2.5 0 0 1 90 0 
                        L 97.5 0
                        A 2.5 2.5 0 0 1 100 2.5
                        L 100 25
                        A 2.5 2.5 0 0 1 97.5 27.5
                        L 80 27.5
                        A 2.5 2.5 0 0 0 77.5 30
                        L 77.5 35
                        A 2.5 2.5 0 0 1 75 37.5
                        L 10 37.5
                        A 2.5 2.5 0 0 1 7.5 35
                        L 7.5 20
                        A 2.5 2.5 0 0 0 5 17.5
                        L 2.5 17.5
                        A 2.5 2.5 0 0 1 0 15
                        L 0 7.5
                        A 2.5 2.5 0 0 1 2.5 5
                        z"
                  ></path>
                </clipPath>
                <image
                  clip-path="url(#border)"
                  preserveAspectRatio="xMidYMid slice"
                  width="100%"
                  height="100%"
                  href="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                ></image>
              </svg>
            </div>
            <div class="carousel">
              <div class="left__carousel"></div>
              <div class="right__carousel"></div>
              <div class="carousel__inner">
                <div class="item">
                  <img src={logo1} />
                </div>
                <div class="item">
                  <img src={logo2} />
                </div>
                <div class="item">
                  <img src={logo3} />
                </div>
                <div class="item">
                  <img src={logo4} />
                </div>
                <div class="item">
                  <img src={logo1} />
                </div>
                <div class="item">
                  <img src={logo2} />
                </div>
                <div class="item">
                  <img src={logo3} />
                </div>
                <div class="item">
                  <img src={logo4} />
                </div>
              </div>
            </div>
          </div>
          {/* <!----------------- container ends -----------------------> */}
          <div class="bottom__div">
            <div class="left"></div>
            <div class="right">
              <div class="services">
                <h5>Services</h5>
              </div>
            </div>
          </div>
        </section>
        <section class="about">
          <div class="about__container">
            <div class="about__text">
              <h2>
                We create without the need for coding to give ambitious brands
                the upper hand
              </h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Banner;
