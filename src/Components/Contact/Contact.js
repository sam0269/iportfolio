import React,{useState} from "react";
import { Title } from "../About/About";

const Contact = () => {
  const [text, setText] = useState({
    fname:"",
    email:""
  })
  const changeText = (event) =>{
    setText((preVal)=>{
      const text = event.target.value;
      return {
        ...preVal,
        [text]: event.target.value,
      }
    })
  }
  return (
    <>
      <Title
        title1="Contact"
        title2="Get In Touch"
        color1="#E87C17"
        color2="#fff"
      />
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
     <div className="contact-content">
        <div className="first-contact-content fs-4">
          <h1 className="fs-3">Get In Touch</h1>
          <p>A-269 Shyam Vihar</p>
          <p>Najafgarh, New Delhi-110043</p>
          <p>India</p>
          <span>Humbly Made By || &copy;Shubham Rawat</span>
        </div>
        <div className="second-contact-content">
          <form action="/">
            <label htmlFor="fname">
              <input type="text" placeholder="enter name"  onChange={changeText}/>
              <p>{text.fname}</p>
            </label>
            <label htmlFor="email">
              <input type="text" placeholder="enter email"  onChange={changeText} />
              <p>{text.email}</p>
            </label>
            <textarea
              name="textfiled"
              cols="50"
              rows="15"
              placeholder="enter your msg..."
            ></textarea>
          </form>
          <button className="spcl-btn">Resume</button>
        </div>
      </div>
</div>
      
    </>
  );
};

export default Contact;
