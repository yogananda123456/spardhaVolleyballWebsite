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
           <div class='c'> Inter-IIT 2024 </div>
           <div className='hi'>coming soon </div>
            </div>
        <div className="gallery">
           <div class='c'>Farewell 2024</div>
           <div className='hi'>coming soon </div>
        </div>
        <div className="gallery">
            <div class='c'>Spardha 25</div>
            <div className='hi'>coming soon </div>
        </div>
        
    </div>
  );
}

export default Gallery;