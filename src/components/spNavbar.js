import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './SpNavbar.css';

function SpNavbar() {
    const [view, setView] = useState('live');

    return (
        <div>
            
            <div className="buttons-container">
                <button
                    id="Upcoming"
                    className={view === 'upcoming' ? 'button-active' : ''}
                    onClick={() => setView('upcoming')}
                    style={{ backgroundColor: view === 'upcoming' ? 'white' : '' }}
                >
                    Upcoming
                </button>
                <button
                    id="Live-now"
                    className={view === 'live' ? 'button-active' : ''}
                    onClick={() => setView('live')}
                    style={{ backgroundColor: view === 'live' ? 'white' : '' }}
                >
                    Live Now
                </button>
                <button
                    id="Results"
                    className={view === 'results' ? 'button-active' : ''}
                    onClick={() => setView('results')}
                    style={{ backgroundColor: view === 'results' ? 'white' : '' }}
                >
                    Results
                </button>
            </div>
        </div>
    );
}

export default SpNavbar;