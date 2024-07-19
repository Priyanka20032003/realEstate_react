import React from "react";
import "./Clients.css";
const Clients = () => {
  return (
    <div className="container clients">
      <h2 className="clients_title">Our Happy Clients</h2>
      <div className="client_cards">
        <div className="client_card">
          <div className="client_card_top">
            <div className="client_image">
              <img src="https://media.istockphoto.com/id/1016761216/photo/portrait-concept.jpg?s=612x612&w=0&k=20&c=JsGhLiCeBZs7NeUY_3wjDlLfVkgDJcD9UCXeWobe7Ak=" />
            </div>
            <div className="client_card_info">
              <h4>Your Name</h4>
              <p>Customers</p>
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="client_card">
          <div className="client_card_top">
            <div className="client_image">
              <img src="https://www.shutterstock.com/image-photo/headshot-close-portrait-indian-latin-260nw-2343004301.jpg" />
            </div>
            <div className="client_card_info">
              <h4>Your Name</h4>
              <p>Customers</p>
            </div>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
