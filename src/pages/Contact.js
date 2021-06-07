import React, { useEffect } from "react";
import "../App.scss";
import gsap from "gsap";

const Contact = () => {
  // TEXT ONLOAD ANIMATION
  useEffect(() => {
    gsap.from(".text", {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      ease: "back",
      stagger: 0.5,
      y: 25,
    });
  }, []);

  useEffect(() => {
    gsap.from("hr", {
      duration: 1,
      delay: 1.5,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.5,
      width: 0,
    });
  }, []);

  const buttonEnter = () => {
    gsap.to("button", {
      duration: 1,
      background: "black",
      color: "white",
      ease: "power4.out",
    });
  };
  const buttonLeave = () => {
    gsap.to("button", {
      duration: 1,
      background: "none",
      color: "black",
      ease: "power4.out",
    });
  };

  return (
    <>
      <div className='container'>
        <div className='contact'>
          <div className='schools'>
            <div className='text'>
              <h5>Skills</h5>
              <p>
                HTML5, CSS3, SCSS/SASS, JavaScript(ES6), Typescript, React,
                Photoshop, AfterEffects, Premiere, Adobe XD, Git, Zeplin.
              </p>
            </div>
            <hr />
            <div className='text'>
              <h5>Education</h5>
              <p>
                Atlanta, Georgia <br />
                Georgia State University B.B.A Marketing.
              </p>
              <p>
                Salt Lake City, Utah
                <br />
                Salt Lake Community College A.S General Studies.
              </p>
            </div>
            <hr />
          </div>
          <div className='about-grid'>
            <p className='text about-text'>
              Hey, my name is Carlos Zepeda, I'm a web designer/front-end
              developer based in Salt Lake City, Utah. I studied at the local
              community college before transfering to Georgia State in Atlanta,
              Georgia. My hobbies include music production, photography,
              strumming my guitar, and embroidering.
            </p>
            <button
              className='text about-text'
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}>
              <a href="mailto:cjzepedaa@gmail.com?subject=I'm interested in hiring you!">
                SEND EMAIL
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
