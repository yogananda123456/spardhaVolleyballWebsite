import React from 'react';
import NavBar from './NavBar';
import './Gallery.css';


function Gallery() {
  return (
    <div>
        <header>
            <NavBar />
        </header>
       
        <div className="gallery">
           <h1> Inter-IIT 2024 </h1>
           coming soon 
            </div>
        <div className="gallery">
           <h1>Farewell 2024</h1>
           Coming soon 
        </div>
        <div className="gallery">
            <h1>Spardha 25</h1>
            Coming soon
        </div>
        
    </div>
  );
}

export default Gallery;