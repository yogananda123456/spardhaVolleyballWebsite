import React from 'react';
import './Home.css';
import NavBar from './NavBar';
import instagramLogo from './instagram-logo.png';

function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/dravos.jpg`} alt="Dravos" />
          <div className="welcome-text">
            <p id="101">Welcome to Dravos!!</p>
            <p id="102">Volleyball Club of IITG</p>
            
          </div>
        </div>
        <div className="instagram-container">
          <a href="https://www.instagram.com/dravos_iitg?igsh=M3F3OTd4Y2RpZTFi" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" className="instagram-logo" />
          </a>
          <a href="https://www.instagram.com/dravos_iitg?igsh=M3F3OTd4Y2RpZTFi" target="_blank" rel="noopener noreferrer">dravos_iitg</a>
        </div>
      </main>
    </div>
  );
}

export default Home;