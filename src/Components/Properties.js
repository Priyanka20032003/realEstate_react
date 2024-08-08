import React from "react";
import "./Properties.css";
const Properties = () => {
  return (
    <div className="container properties">
      <h2 className="properties_title">New Properties</h2>
      <div className="cards">
        <div className="card">
          <div className="card_image">
            <img src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </div>

          <h4>Modern Home</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
          <p>Read More</p>
        </div>
        <div className="card">
          <div className="card_image">
            <img src="https://images.surferseo.art/fdb08e2e-5d39-402c-ad0c-8a3293301d9e.png" />
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
            <img src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg" />
          </div>

          <h4>Modern Home</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
          <p>Read More</p>
        </div>
        <div className="card">
          <div className="card_image">
            <img src="https://i.pinimg.com/564x/fe/29/8a/fe298a70a49d93f50c62ae40c5ecce3a.jpg" />
          </div>

          <h4>Modern Home</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
          </p>
          <p>Read More</p>
        </div>
      </div>
    </div>
  );
};

export default Properties;
