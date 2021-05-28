import React, { useEffect } from "react";
import "../App.scss";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    gsap.from(".list-item", {
      opacity: 0,
      duration: 1,
      y: 10,
      delay: 2,
      stagger: 0.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <nav>
      <ul>
        <li className='list-item'>
          <Link to='/'>HOME</Link>
        </li>
        <li className='list-item'>
          <Link to='/work'>WORKS</Link>
        </li>
        <li className='list-item'>
          <Link to='/contact'>CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
