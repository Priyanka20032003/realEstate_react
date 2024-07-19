import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faInstagram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
      <div className='footer' >
          <div className='container'>
          <div className='icons'>
              <FontAwesomeIcon icon={faFacebook}  className='icon'/>
              <FontAwesomeIcon icon={faInstagram} className='icon'  />
              <FontAwesomeIcon icon={faTwitter} className='icon' />
              <FontAwesomeIcon icon={faYoutube} className='icon' />

          </div>
              <p> &copy; All rights reserved.</p>
              <div className='para'>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  
              </div>
             
              <ul>
                  <li>About us</li>
                  <li>Privacy & Policy</li>
                  <li>Contact us</li>
              </ul>
          </div>
          
          
    </div>
  )
}

export default Footer