import React from "react";
import "./Clients.css";
import client1 from '../images/client1.jpg';
import client2 from '../images/client2.jpg'
const Clients = () => {
  return (
    <div className="container clients">
      <h2 className="clients_title">Our Happy Clients</h2>
      <div className="client_cards">
        <div className="client_card">
          <div className="client_card_top">
            <div className="client_image">
              <img src={client1} />
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
              <img src={client2} />
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
