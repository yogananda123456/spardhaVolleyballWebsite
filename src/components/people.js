import React from 'react';
import NavBar from './NavBar';
import './people.css';

function People() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="people-container">
        <div className="main-panel">
          <div className="panel-header">Secretaries</div>
          <div className="panel-content">Coming soon</div>
        </div>
        <div className="main-panel">
          <div className="panel-header">Alumni</div>
          <div className="panel-content">Coming soon</div>
        </div>
        <div className="main-panel">
          <div className="panel-header">Coaches</div>
          <div className="panel-content">Coming soon</div>
        </div>
      </div>
    </div>
  );
}

export default People;