import React from 'react';
import Parrot from '../assests/images/Parrot.png'
import Logo1 from '../assests/images/Logo1.png'
import "../assests/style/HomePage.css"
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="avian-vision">
      <div className="header">
        <nav className="navigation">
            <img src={Logo1} alt="Logo is AvianVision" className="Logo-avian" />
                <ul className='middle'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="AboutPage">About</Link></li>
                    <li><Link to="UploadPhoto">Upload Photo</Link></li>
                    <li><Link to="#">Leave a Message</Link></li>
                </ul>
                <ul className='last'>
                    <li><a href="SignIn">Sign in</a></li>
                    <li><button className="sign-up-button" onClick={() => navigate("/SignUp")}>Sign up</button></li>
                </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="text-content">
          <h1>Unlock the world of birds with</h1>
          <h2>AvianVision</h2>
          <p className="slogan">Snap, Upload, Discover</p>
          <p className="description">Your go-to web app for effortless bird identification and detailed bird information at your fingertips!</p>
          <button className="get-started-button" onClick={() => navigate("/SignUp")}>Get started</button>
        </div>
        <div className='parrot-container'>
          <img src={Parrot} alt="Colorful parrot on green background" className="parrot-image" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

