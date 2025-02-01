import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './spNavbar.css';

function SpNavbar() {
    const [view, setView] = useState('live');

    return (
        <div>
            <div className="buttons-container">
                <button
                    id="Upcoming"
                    className={view === 'upcoming' ? 'button-active' : ''}
                    onClick={() => setView('upcoming')}
                >
                    Upcoming 
                </button>
                <button
                    id="Live-now"
                    className={view === 'live' ? 'button-active' : ''}
                    onClick={() => setView('live')}
                >
                    Live
                </button>
                <button
                    id="Results"
                    className={view === 'results' ? 'button-active' : ''}
                    onClick={() => setView('results')}
                >
                    Results
                </button>
            </div>
        </div>
    );
}

export default SpNavbar;