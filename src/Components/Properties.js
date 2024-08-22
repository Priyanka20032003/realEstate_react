import React from "react";
import "./Properties.css";
import house2 from '../images/house2.jpg'
import house3 from '../images/house3.jpg'
import house4 from '../images/house4.jpg'
import house5 from '../images/house5.jpg'
const Properties = () => {
  return (
    <div className="container properties">
      <h2 className="properties_title">New Properties</h2>
      <div className="cards">
        <div className="card">
          <div className="card_image">
            <img src={house2} />
          </div>

          <h4>Modern Home</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
          <p className="read">Read More</p>
        </div>
        <div className="card">
          <div className="card_image">
            <img src={house3} />
          </div>

          <h4>Modern Home</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
          <p className="read">Read More</p>
        </div>
        <div className="card">
          <div className="card_image">
            <img src={house4} />
          </div>

          <h4>Modern Home</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
          <p className="read">Read More</p>
        </div>
        <div className="card">
          <div className="card_image">
            <img src={house5} />
          </div>

          <h4>Modern Home</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
          <p className="read">Read More</p>
        </div>
      </div>
    </div>
  );
};

export default Properties;
