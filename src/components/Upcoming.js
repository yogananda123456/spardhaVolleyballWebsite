import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Live.css';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDays, faClock } from '@fortawesome/free-solid-svg-icons';

const Upcoming = () => {
    const [upcomingMatches, setUpcomingMatches] = useState([]);
    const [view, setView] = useState('upcoming');

    useEffect(() => {
        fetch('https://back-end-volleyball.vercel.app/api/upcoming')
            .then(response => response.json())
            .then(data => setUpcomingMatches(data))
            .catch(error => console.error('Error fetching upcoming matches:', error));
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
                {view === 'upcoming' && upcomingMatches.map((match, index) => (
                    <div key={index} className="main-panel">
                        <h2 className="panel-heading"><span id="match-type1">{match.matchType}</span> </h2>
                        <div className="Gender">{match.gender}</div>
                        <div className="team-container">
                            <div className="team-panel" id="team-a">{match.teamA}</div>
                            <div className="versus">Vs</div>
                            <div className="team-panel" id="team-b">{match.teamB}</div>
                        </div>
                        <div className="match-details">
                            <div className="detail-block">
                                <FontAwesomeIcon icon={faCalendarDays} /> {match.date}
                            </div>
                            <div className="detail-block">
                                <FontAwesomeIcon icon={faClock} /> {match.time}
                            </div>
                            <div className="detail-block">
                                <FontAwesomeIcon icon={faLocationDot} /> {match.court}
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Upcoming;
