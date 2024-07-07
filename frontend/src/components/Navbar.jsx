import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBitcoin, FaYoutube } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to={"/"} className={pathname === "/" ? "active" : ""}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to={"/donate"}
                className={pathname === "/donate" ? "active" : ""}
              >
                DONATE US
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={pathname === "/about" ? "active" : ""}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className={pathname === "/contact" ? "active" : ""}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <FaBitcoin />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaGithubSquare />
            </li>
            <li>
              <BsInstagram />
            </li>
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
