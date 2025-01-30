import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Live.css';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDays, faClock } from '@fortawesome/free-solid-svg-icons';

const Live = () => {
    const [matches, setMatches] = useState([]);
    const [upcomingMatches, setUpcomingMatches] = useState([]);
    const [results, setResults] = useState([]);
    const [view, setView] = useState('live');

    useEffect(() => {
        fetch('http://localhost:5000/api/data')
            .then(response => response.json())
            .then(data => {
                const initialMatches = data.map(match => ({
                    ...match,
                    teamAscore: 0,
                    teamBscore: 0,
                    teamAset: 0,
                    teamBset: 0
                }));
                setMatches(initialMatches);
            })
            .catch(error => console.error('Error fetching team data:', error));
    }, []);

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
                        Live Now
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
                {view === 'live' && matches.map((match, index) => (
                    <div>
                   
                    <div key={index} className="main-panel">
                        
                        <h2 className="panel-heading"><span id="match-type1">{matches[index].matchType}</span> </h2>
                        <div className="Gender">{match.gender}</div>
                        <div className="team-container">
                            <div className="team-panel" id="team-a">{match.teamA}</div>
                            <div className="versus">Vs</div>
                            <div className="team-panel" id="team-b">{match.teamB}</div>
                        </div>
                        <div className="scores-container">
                            <div className="set-score" id="set-score-a">{match.teamAset}</div>
                            <div className="score" id="score-a">{match.teamAscore}</div>
                            <div className="score-separator">:</div>
                            <div className="score" id="score-b">{match.teamBscore}</div>
                            <div className="set-score" id="set-score-b">{match.teamBset}</div>
                        </div>
                    </div>
                    </div>
                ))}
                
            </main>
        </div>
    );
};

export default Live;