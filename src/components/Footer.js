import React, { useEffect } from "react";
import "../App.scss";
import gsap from "gsap";

const Navbar = () => {
  useEffect(() => {
    gsap.from(".footer", {
      opacity: 0,
      duration: 1,
      y: 10,
      delay: 2,
      stagger: 0.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className='footer'>
      <p>
        <strong>2021</strong>
      </p>
    </div>
  );
};

export default Navbar;
