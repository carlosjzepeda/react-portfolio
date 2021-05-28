import React, { useEffect, useRef } from "react";
import model from "../images/pexels-wesley-carvalho-4126254.jpg";
import "../App.scss";
import gsap from "gsap";

const Slides = () => {
  //IMAGE ONLOAD ANIMATION
  useEffect(() => {
    gsap.from(".image", {
      ease: "power4.out",
      y: 100,
      opacity: 0,
      duration: 1.5,
    });
  });
  // TEXT ONLOAD ANIMATION
  useEffect(() => {
    gsap.from(".text", {
      duration: 1.5,
      opacity: 0,
      ease: "back",
      stagger: 0.5,
      y: 30,
    });
  }, []);

  return (
    <>
      <div className='container '>
        <div className='image-container'>
          {/* image on the right text on the left */}
          <div>
            <p className='text'>p r o j e c t</p>{" "}
            <h4 className='text'>LOQUEDICEN</h4>
            <p className='text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Venenatis lectus magna fringilla urna porttitor rhoncus. Enim
            </p>
          </div>
          <img className='image' src={model} alt='model'></img>
        </div>
      </div>
      <div className='container '>
        <div className='image-container'>
          {/* image on the left text on the right */}
          <img className='image' src={model} alt='model'></img>
          <div className='right'>
            <p className='text'>p r o j e c t</p>{" "}
            <h4 className='text'>LOQUEDICEN</h4>
            <p className='text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Venenatis lectus magna fringilla urna porttitor rhoncus. Enim
            </p>
          </div>
        </div>
      </div>
      <div className='container '>
        <div className='image-container'>
          {/* image on the right text on the left */}
          <div>
            <p className='text'>p r o j e c t</p>{" "}
            <h4 className='text'>LOQUEDICEN</h4>
            <p className='text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Venenatis lectus magna fringilla urna porttitor rhoncus. Enim
            </p>
          </div>
          <img className='image' src={model} alt='model'></img>
        </div>
      </div>
      <div className='container'>
        <div className='image-container'>
          {/* image on the left text on the right */}
          <img className='image' src={model} alt='model'></img>
          <div className='right'>
            <p className='text'>p r o j e c t</p>{" "}
            <h4 className='text'>LOQUEDICEN</h4>
            <p className='text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Venenatis lectus magna fringilla urna porttitor rhoncus. Enim
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slides;
