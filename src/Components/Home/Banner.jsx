import React from "react";
import "../../style.css";

const Banner = () => {
  const Icon = (props) => {
    console.log(props.link);
    return (
      <a href="#">
        <img
          className="img_style"
          src={props.link}
          alt="icons"
          style={{ height: "2.5rem", padding: "0 .5rem" }}
        />
      </a>
    );
  };

  return (
    <>
      <div className="banner-second-container">
        <div data-aos="fade-up">
          <img src="images/1.png" alt="myPic" />
        </div>
      </div>
      <div className="banner-first-container">
        <Icon link="images/facebook.png" />
        <Icon link="images/github.png" />
        <Icon link="images/instagram.png" />
        <Icon link="images/linkedin.png" />

        <div className="heading">
          <div data-aos="fade-right">
            <h1 className="fs-3">hello I'M Shubham Rawat</h1>
            <div className="dynamic_text fs-2">
              <p> Front End Developer </p>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <a download href="admit.pdf">
            <button className="spcl-btn">Resume</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
