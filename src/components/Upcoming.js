import React, { useState, useEffect } from 'react';
import './scoring.css';
import NavBar from './NavBar';

const Upcoming = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/upcoming')
            .then(response => response.json())
            .then(data => setMatches(data))
            .catch(error => console.error('Error fetching upcoming matches:', error));
    }, []);

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <div className="buttons-container">
                <button id="Upcoming">Upcoming</button>
                <button id="Live-now">Live Now</button>
                <button id="Results">Results</button>
            </div>
            <main>
                <div className="grid-container">
                    {matches.map((match, index) => (
                        <div key={index} className="grid-item combined">
                            {match.teamA} vs {match.teamB}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Upcoming;
