import React, { useEffect, useState } from "react";
import "../App.scss";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(null);
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
          <NavLink exact to='/'>
            HOME
          </NavLink>
        </li>
        <li className='list-item'>
          <NavLink exact to='/work'>
            WORKS
          </NavLink>
        </li>
        <li className='list-item'>
          <NavLink exact to='/contact'>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
