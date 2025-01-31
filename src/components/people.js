import React from 'react';
import NavBar from './NavBar';
import './people.css';

function People() {
    return (
      <div>
        <header>
          <NavBar />
        </header>
        
        <div class ="main-div">
          <h1>Secretaries</h1>
          <div className="peoples">Coming Soon</div>
        </div>
        <div  class ="main-div">
          <h1>Coaches</h1>
          <div className="peoples">Coming Soon</div>
        </div>
        <div  class ="main-div">
          <h1>Club Alumni</h1>
          <div className="peoples">Coming Soon</div>
        </div>
      </div>
    );
  }
  
  export default People;