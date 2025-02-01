import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Live.css';
import NavBar from './NavBar';

const getBackgroundColor = (teamAset, teamBset) => {
    if (teamAset > teamBset) {
        return { teamA: '#70f56c', teamB: 'white' };
    } else if (teamAset < teamBset) {
        return { teamA: 'white', teamB: '#70f56c' };
    } else {
        return { teamA: 'white', teamB: 'white' }; // or any default color for tie
    }
};

const Results = () => {
    const [results, setResults] = useState([]);
    const [view, setView] = useState('results');

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
                <NavLink to="/spardha/upcoming">
                    <button
                        id="Upcoming"
                        className={view === 'upcoming' ? 'button-active' : ''}
                        onClick={() => setView('upcoming')}
                        style={{ backgroundColor: view === 'upcoming' ? 'white' : '' }}
                    >
                        Upcoming
                    </button>
                </NavLink>
                <NavLink to="/spardha/live">
                    <button
                        id="Live-now"
                        className={view === 'live' ? 'button-active' : ''}
                        onClick={() => setView('live')}
                        style={{ backgroundColor: view === 'live' ? 'white' : '' }}
                    >
                        Live
                    </button>
                </NavLink>
                <NavLink to="/spardha/results">
                    <button
                        id="Results"
                        className={view === 'results' ? 'button-active' : ''}
                        onClick={() => setView('results')}
                        style={{ backgroundColor: view === 'results' ? 'white' : '' }}
                    >
                        Results
                    </button>
                </NavLink>
            </div>
            <main>
                {view === 'results' && results.map((match, index) => {
                    const backgroundColors = getBackgroundColor(match.teamAs, match.teamBs);
                    return (
                        <div key={index} className="main-panel">
                            <h2 className="panel-heading"><span id="match-type1">{match.matchType}</span> </h2>
                            <div className="Gender">{match.gender}</div>
                            <div className="team-container">
                                <div
                                    className="team-panel"
                                    id="team-a"
                                    style={{ backgroundColor: backgroundColors.teamA }}
                                >
                                    {match.teamA}
                                </div>
                                <div className="versus">Vs</div>
                                <div
                                    className="team-panel"
                                    id="team-b"
                                    style={{ backgroundColor: backgroundColors.teamB }}
                                >
                                    {match.teamB}
                                </div>
                            </div>
                            <div className="scores-container">
                                <div className="score" id="score-a">{match.teamAs}</div>
                                <div className="score-separator">:</div>
                                <div className="score" id="score-b">{match.teamBs}</div>
                            </div>
                        </div>
                    );
                })}
            </main>
        </div>
    );
};

export default Results;
