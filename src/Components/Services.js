import React from 'react'
import './Services.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faHammer,faBuilding } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
      <div className=' services'>
          <div className='container'>
          <h2 className='services_title'>Our Main Services</h2>
          <div className='boxes'>
              <div className='box'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="services_logo" />
                  <h4>Find Home</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button>
                      Learn More
                  </button>


              </div>
              <div className='box'>
              <FontAwesomeIcon icon={faHammer} className="services_logo" />
                  <h4>Build Home</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button>
                      Learn More
                  </button>


              </div>
              <div className='box'>
                  <FontAwesomeIcon icon={faBuilding} className="services_logo" />
                  <h4>Buy property</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button>
                      Learn More
                  </button>


            </div>
          </div>
              
          </div>
          
    </div>
  )
}

export default Services