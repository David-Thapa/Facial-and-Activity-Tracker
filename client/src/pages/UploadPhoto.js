import React from 'react';
import Logo1 from '../assests/images/Logo1.png'
import "../assests/style/UploadPhoto.css"
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const UploadPhoto = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleUploadClick = () => {
    // Handle the file upload logic here, if needed
    console.log('File uploaded:', selectedFile);
  };

  const [popup,setPop]=useState(false)
    const handleClickOpen=()=>{
        setPop(!popup)
    }
    const closePopup=()=>{
        setPop(false)
    }

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
      <div className="main-content">
      <div className="drop-area-container">
        <p><b>Hi! Have you spotted and clicked a bird that you couldn’t identify?</b></p>
<p><b>No Problem! Just upload the Photo of the bird and find out which species it is!</b></p>
      <div
        className="drop-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag & drop here or</p>
        <label htmlFor="fileInput" className="browse-label">
        <FaCloudUploadAlt className="upload-icon" /> Browse file
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
        {selectedFile ? (
          <div className="preview-container">
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Selected Preview"
              className="preview-image"
            />
            <p>Selected File: {selectedFile.name}</p>
          </div>
        
        ) : (
          <p>No file selected</p>
        )}
        </div>
        
        <div>
      <button className='upload-button' onClick={handleClickOpen}>
        Upload Photo
      </button>
      <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>Photo Uploaded Successfully!</h1>
                            </div>
                      </div>
                    </div>:""
                }
            </div>
      </div>
      </div> 
    </div>
    </div>
  );
}

export default UploadPhoto;

