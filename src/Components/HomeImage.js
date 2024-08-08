import React from "react";
import "./HomeImage.css";
import house1 from '../images/house1.jpg'

const HomeImage = () => {
  return (
    <div>
      <div className="home_image">
        <img src={house1} />
      </div>
    </div>
  );
};

export default HomeImage;
