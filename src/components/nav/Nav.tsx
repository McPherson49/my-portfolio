
import "./Nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import {BsBagFill} from "react-icons/bs";
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a onClick={() => setActiveNav("#home__")} className={activeNav === "#" ? 'active' : ""} href="#home__">
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? 'active' : ""}
      >
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? 'active' : ""}
      
      >
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? 'active' : ""}
      >
        <RiServiceLine />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? 'active' : ""}
      >
        <BsBagFill />
      </a>
      <a href="#contact" onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? 'active' : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav