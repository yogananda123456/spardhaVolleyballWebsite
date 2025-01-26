import React from 'react';
import './Home.css';
import NavBar from './NavBar';

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
      </main>
    </div>
  );
}

export default Home;