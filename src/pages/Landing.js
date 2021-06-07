import React, { useEffect } from "react";
import "../App.scss";
import gsap from "gsap";

const About = () => {
  //TEXT INTRO
  useEffect(() => {
    gsap.from("h1", {
      opacity: 0,
      duration: 1,
      y: 30,
      delay: 0.5,
      ease: "back",
    });
  });

  //IMAGE ANIMATION
  useEffect(() => {
    gsap.from(".image", {
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      x: 100,
      ease: "power4.out",
    });
  });

  return (
    <>
      <div className='container'>
        <div className='landing'>
          <h1>
            Hi, I'm Carlos Zepeda a Web Designer based in Salt Lake City, Utah.
            <br />
            <br />
            Welcome to my portfolio.
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
