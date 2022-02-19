import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="" className="logo" />
      </div>
      <ul  className="app__navbar-links">
        {["home", "about", "skills", "work", "contact"].map((item) => (
        <li key={`link-${item}`}  className="app__flex p-text">
            <div>

            </div>
            <a href={`#${item}`}>{item}</a>
        </li>
        ))}
        {/* insted of {} used () IIEF for return <li>  */}
      </ul>
    </nav>
  );
};
export default Navbar;