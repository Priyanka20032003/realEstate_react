import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div>
      <div className="header container">
        <div className="header_left">
          <FontAwesomeIcon icon={faHouse} className="logo" />
          <h4 className="logo_title">
            <span>Real</span>Estate
          </h4>
        </div>
        <div className="header_right">
          <nav>
            <ul>
              <li className="find">Find</li>
              <li  className="build">Build</li>
              <li  className="luxury">Luxury</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
