import React from 'react'
import Logo1 from '../assests/images/Logo1.png'
import "../assests/style/AboutPage.css"
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import TwoBirds from '../assests/images/TwoBirds.jpg'
import snap from '../assests/images/snap.png'
import Upload from '../assests/images/Upload.png'
import Discover from'../assests/images/Discover.png'

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
          <p>Welcome to AvianVision - your go-to destination for seamless bird identification and exploration! At AvianVision, 
            our passion for connecting people with the natural world drives us. As avid birdwatchers and technology enthusiasts, 
           we envisioned a seamless bridge between the beauty of birdwatching and the power of cutting-edge technology. 
            Established with a commitment to making bird identification accessible to all, AvianVision combines user-friendly design 
            with advanced CNN models, ensuring accurate and instant results.
          </p>
        </div>
        <div className='hero-right'>
          <img src={TwoBirds} alt='Two birds photo' />
        </div>       
      </div>


      <div className='card'>
        <div className='circle'>
          <img className='snap-img' src={snap} alt='snap photo' />
        </div>
        <h3 className='card-title'>Snap</h3>
        <p>Capture the wonder of winged creatures with AvianVision! 
          Take a quick snap of any bird you spot during your outdoor escapades. 
          No need to be an expert photographer—just capture the moment. Our 
          user-friendly app makes it easy for anyone to become an amateur ornithologist.
        </p>
      </div>

      <div className='card'>
        <div className='circle'>
          <img className='upload-img' src={Upload} alt='upload photo' />
        </div>
        <h3 className='card-title'>Upload</h3>
        <p>Simplify birdwatching with AvianVision's straightforward upload process. Just submit your bird photo, and let our intelligent system, powered by advanced CNN technology, swiftly analyze distinctive features, unveiling the identity of the bird in your snapshot.
        </p>
      </div>

      <div className='card'>
        <div className='circle'>
          <img className='snap-img' src={Discover} alt='discover photo' />
        </div>
        <h3 className='card-title'>Discover</h3>
        <p>Once your photo is uploaded, AvianVision doesn't just stop at identification. Discover fascinating facts about the bird species you've encountered. From habitat details to intriguing behaviors, AvianVision transforms your snapshots into a personalized birdwatching adventure.
        </p>
      </div>
      
    </div>
  )
}

export default AboutPage

