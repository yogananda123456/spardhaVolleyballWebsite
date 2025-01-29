import React, { useState, useEffect } from 'react';
import './scoring.css';
import NavBar from './NavBar';

const Results = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/results')
            .then(response => response.json())
            .then(data => setResults(data))
            .catch(error => console.error('Error fetching results:', error));
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
                    {results.map((result, index) => (
                        <div key={index} className="grid-item combined">
                            {result.teamA} {result.teamAscore} - {result.teamBscore} {result.teamB}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Results;
