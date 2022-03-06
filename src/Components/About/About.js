import React from "react";

const Title = (props) => {
  return (
    <>
      <div data-aos="zoom-in">
        <div className="title-container" style={{textAlign:"center"}}>
          <span className="fs-1 ffam" style={{color:props.color1}} >{props.title1}</span>
          <h1 className="fs-3 ffam" style={{color:props.color2}}>{props.title2}</h1>
        </div>
      </div>
      </>
  );
};

const About = () => {
  return (
    <>
      <Title title1="About Us" title2="WHO AM I?" color1="#E87C17" color2="#E5BA21"/>
      <p className="fs-4 para-styling">
        <h1>Front End Web Developer</h1>
        <p style={{marginTop:"3rem"}}>Build Quality Website Using HTML,CSS, JavaScript & ReactJS</p>
        <p>With Brushing Technical Skills on daily Basis, I like to create,develope and design a website</p>
        <p>Would love to be in surroundings where I would contribute towards path to success and motivate
        others and vice versa.</p>
      </p>
    </>
  );
};

export default About;
export { Title };
