import React, { useEffect } from "react";
import kanye from "../images/kanyeimg.png";
import LOQUEDICEN from "../images/Rauw.png";
import "../App.scss";
import gsap from "gsap";

const Work = () => {
  //IMAGE ONLOAD ANIMATION
  useEffect(() => {
    gsap.from(".work-image", {
      ease: "back",
      x: -100,
      opacity: 0,
      duration: 1.5,
    });
  });
  useEffect(() => {
    gsap.fromTo(
      ".work-image",
      {
        ease: "power4.out",
        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      },
      {
        delay: 1,
        duration: 2,
        ease: "power4.out",
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
      }
    );
  });
  // TEXT ONLOAD ANIMATION
  useEffect(() => {
    gsap.from(".work-text", {
      duration: 1.5,
      opacity: 0,
      ease: "back",
      stagger: 0.25,
      x: -100,
    });
  }, []);

  return (
    <>
      {/* <div className='container'>
        <div className='project-container'>
          <img className='work-image' src={LOQUEDICEN} alt='kanye' />
          <div className='work-wrapper'>
            <h3 className='work-text'>BLANK CASE STUDY</h3>
            <p className='work-text'>
              LOQUEDICEN is a modern redesign on what a music blog website
              should look like. Made with HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div> */}
      <div className='container'>
        <div className='project-container'>
          <a
            href='https://loquedicen.netlify.app/'
            target='_blank'
            rel='noreferrer'>
            <img className='work-image' src={LOQUEDICEN} alt='kanye' />
          </a>
          <div className='work-wrapper'>
            <h3 className='work-text'>LOQUEDICEN</h3>
            <p className='work-text'>
              LOQUEDICEN is a modern redesign on what a music blog website
              should look like. Made with HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='project-container'>
          <a
            href='https://infallible-mclean-df3ccb.netlify.app/'
            target='_blank'
            rel='noreferrer'>
            <img className='work-image' src={kanye} alt='kanye' />
          </a>
          <div className='work-wrapper'>
            <h3 className='work-text'>KANYE QUOTE GENERATOR</h3>
            <p className='work-text'>
              Simple Kanye quote generator made in React and using Axios.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
