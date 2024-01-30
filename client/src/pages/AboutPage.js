import React from 'react'
import Logo1 from '../assests/images/Logo1.png'
import "../assests/style/AboutPage.css"
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import TwoBirds from '../assests/images/TwoBirds.jpg'

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="avian-vision">
      <div className="header">
        <nav className="navigation">
          <Link to='/'>
            <img src={Logo1} alt="Logo is AvianVision" className="Logo-avian" />
          </Link>                
          <ul className='middle'>
            <li><Link to="AboutPage">About</Link></li>
            <li><Link to="UploadPhoto">Upload Photo</Link></li>
            <li><Link to="#">Leave a Message</Link></li>
          </ul>
          <ul className='last'>
            <li><button className="log-out-button" onClick={() => navigate("/")}>Log out</button></li>
          </ul>
        </nav>
      </div>
      <div className='hero'>
        <div className='hero-left'>
          <p>Welcome to AvianVision - your go-to destination for seamless bird identification and exploration! At AvianVision, our passion for connecting people with the natural world drives us. As avid birdwatchers and technology enthusiasts, we envisioned a seamless bridge between the beauty of birdwatching and the power of cutting-edge technology. Established with a commitment to making bird identification accessible to all, AvianVision combines user-friendly design with advanced CNN models, ensuring accurate and instant results.
          </p>
          <div className='hero-right'>
            <img src={TwoBirds} alt='Two birds photo' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage

