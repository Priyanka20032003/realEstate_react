import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./BottomTitle.css";
const BottomTitle = () => {
  return (
    <div className="bottom">
      <div className="container ">
        <div className="bottom_title">
          <FontAwesomeIcon icon={faHouse} className="logo" />
          <h4 className="logo_title">
            <span>Real</span>Estate
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BottomTitle;
