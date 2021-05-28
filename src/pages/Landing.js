import React, { useEffect } from "react";
import picture from "../images/pexels-ben-mack-6775388.jpg";
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
      ease: "power4.out",
    });
  });
  useEffect(() => {
    gsap.from(".title-item", {
      opacity: 0,
      duration: 1,
      y: 30,
      delay: 1,
      ease: "power4.out",
      stagger: 0.25,
    });
  });

  //IMAGE ANIMATION
  useEffect(() => {
    gsap.from(".image", {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      x: 50,
      ease: "power4.out",
    });
  });

  const imgEnter = () => {
    gsap.to(".image", {
      filter: "invert(1)",
      cursor: "pointer",
    });
  };
  const imgLeave = () => {
    gsap.to(".image", {
      filter: "invert(0)",
      cursor: "pointer",
    });
  };

  return (
    <>
      <div className='container landing'>
        <div className='grid'>
          <div className='grid-item'>
            <h1>Hi, my name is Carlos Zepeda</h1>
            <div className='title-list'>
              <h2 className='title-item'>Web Designer/</h2>
              <h2 className='title-item'>Front-end Developer/</h2>
              <h2 className='title-item'>Salt Lake City</h2>
            </div>
          </div>
          <div className='grid-item'>
            <img
              className='image'
              src={picture}
              alt='me'
              onMouseEnter={() => imgEnter()}
              onMouseLeave={() => imgLeave()}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
