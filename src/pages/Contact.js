import React, { useEffect } from "react";
import "../App.scss";
import gsap from "gsap";

const Contact = () => {
  useEffect(() => {
    gsap.from(".item2", {
      opacity: 0,
      duration: 1,
      y: 30,
      delay: 0.5,
      ease: "power4.out",
    });
  });
  useEffect(() => {
    gsap.from(".item", {
      opacity: 0,
      duration: 1,
      y: 30,
      delay: 1,
      ease: "power4.out",
      stagger: 0.5,
    });
  });
  const emailEnter = () => {
    gsap.to("button", {
      backgroundColor: "gray",
      width: 200,
      duration: 0.5,
      ease: "power4.out",
    });
  };
  const emailLeave = () => {
    gsap.to("button", {
      ease: "power4.out",
      duration: 0.5,
      backgroundColor: "white",
      width: 150,
    });
  };
  return (
    <>
      <div className='container Contact'>
        <h2 className='item2'>
          Hey there and welcome to my page I'm Carlos Zepeda. I'm a web designer
          / front-end developer based in Salt Lake City, UT. I attended Salt
          Lake Community College before transferring to Georgia State Unversity
          in Atlanta to get a Bachelors in Business for Marketing. My hobbies
          include music production, videography, embroidering and traveling.
        </h2>
        <div className='grid item'>
          <div>
            <h5>Skills</h5>
            <ul>
              <li>
                HTML5, CSS3, SASS/SCSS, JavaScript(ES6), ReactJS, Bootstrap,
                GSAP Adobe Photoshop, Adobe After Effects, Adobe Premiere, Adobe
                XD, Zeplin, Git, AJAX, Axios.
              </li>
            </ul>
          </div>
          <div>
            <h5>Education</h5>
            <ul>
              <li>
                Georgia State University, Atlanta, GA, B.B.A Marketing 2019 -
                Present
              </li>
              <li>
                Salt Lake Community College, Salt Lake City, UT, A.S General
                Studies 2017-2019
              </li>
            </ul>
          </div>
        </div>
        <h3 className='item'>
          Connect with me, just click below to send me an email and I'll respond
          as soon as possible.
        </h3>
        <a
          className='item'
          href='mailto:cjzepedaa@gmail.com'
          onMouseEnter={emailEnter}
          onMouseLeave={emailLeave}>
          <button>cjzepedaa@gmail.com</button>
        </a>
      </div>
    </>
  );
};

export default Contact;
