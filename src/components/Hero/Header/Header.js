import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import Bars from "../../../assets/bars.png";
import {Link} from "react-scroll";
import "./Header.css";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header" id="header">
      <img src={Logo} alt="logo" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={()=> setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li
          className="header-item">
            <Link 
             to='header'
             activeClass='active'
             span={true}
             smooth={true}
            onClick={() => setMenuOpened(false)}  className="header-link" href="/">
              Home
            </Link>
          </li>
          < li  className="header-item">
            <Link 
            onClick={() => setMenuOpened(false)}
            to='programs'
            span={true}
            smooth={true}
            className="header-link" href="/">
              Program
            </Link>
          </li>
          <li  className="header-item">
            <Link
             onClick={() => setMenuOpened(false)} 
             to='reasons'
             span={true}
             smooth={true}
             className="header-link" href="/">
              Why us
            </Link>
          </li>
          <li  className="header-item">
            <Link 
            onClick={() => setMenuOpened(false)} 
            to='plans'
            span={true}
            smooth={true}
            className="header-link" href="/">
              Plan
            </Link>
          </li>
          <li  className="header-item">
            <Link onClick={() => setMenuOpened(false)}
            to='testimonials'
            span={true}
            smooth={true}
            className="header-link" href="/">
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
