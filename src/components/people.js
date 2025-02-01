import React from 'react';
import NavBar from './NavBar';
import './people.css';

function People() {
    return (
      <div class ='main'>
        <header>
          <NavBar />
        </header>
        
        <div class ="main-div">
          <div class='a'>Secretaries</div>
          <div className="peoples">Coming Soon</div>
        </div>
        <div  class ="main-div">
          <div class='a'>Coaches</div>
          <div className="peoples">Coming Soon</div>
        </div>
        <div  class ="main-div">
          <div class='a'>Club Alumni</div>
          <div className="peoples">Coming Soon</div>
        </div>
      </div>
    );
  }
  
  export default People;