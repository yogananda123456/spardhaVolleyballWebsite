import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Live.css';
import NavBar from './NavBar';

const Live = () => {
    const [matches, setMatches] = useState([]);
    const [livematches, setLivematches] = useState([]);
    const [livematches2, setLivematches2] = useState([]);
    const [view, setView] = useState('live');

    const fetchData = () => {
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

        fetch('http://localhost:5000/api/sheet2data')
            .then(response => response.json())
            .then(data => setLivematches(data))
            .catch(error => console.error('Error fetching sheet2data:', error));

        fetch('http://localhost:5000/api/sheet3data')
            .then(response => response.json())
            .then(data => {
                console.log('Sheet 3 data:', data); // Log the data to check if it's being fetched
                setLivematches2(data);
            })
            .catch(error => console.error('Error fetching sheet3data:', error));
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000); // Refresh every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
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
                {view === 'live' && livematches.map((livematch,index)=>( 
                    <React.Fragment key={index}>  
                        {matches.length === 0 ? (
                            <div className="no-matches">No Live Matches</div>
                        ) : matches.length === 1 ? (
                            <div className="main-panel">
                                <h2 className="panel-heading"><span id="match-type1">{matches[0].matchType}</span></h2>
                                <div className="Gender">{matches[0].gender}</div>
                                <div className="team-container">
                                    <div className="team-panel" id="team-a">{matches[0].teamA}</div>
                                    <div className="versus">Vs</div>
                                    <div className="team-panel" id="team-b">{matches[0].teamB}</div>
                                </div>
                                <div className="scores-container">
                                    <div className="set-score" id="set-score-a">{livematch.match1Asets}</div>
                                    <div className="score" id="score-a">{livematch.match1Ascore}</div>
                                    <div className="score-separator">:</div>
                                    <div className="score" id="score-b">{livematch.match1Bscore}</div>
                                    <div className="set-score" id="set-score-b">{livematch.match1Bsets}</div>
                                </div>
                            </div>
                        ) :  matches.length === 2 ? (
                            <div className="main-panel">
                                <h2 className="panel-heading"><span id="match-type1">{matches[0].matchType}</span></h2>
                                <div className="Gender">{matches[0].gender}</div>
                                <div className="team-container">
                                    <div className="team-panel" id="team-a">{matches[0].teamA}</div>
                                    <div className="versus">Vs</div>
                                    <div className="team-panel" id="team-b">{matches[0].teamB}</div>
                                </div>
                                <div className="scores-container">
                                    <div className="set-score" id="set-score-a">{livematch.match1Asets}</div>
                                    <div className="score" id="score-a">{livematch.match1Ascore}</div>
                                    <div className="score-separator">:</div>
                                    <div className="score" id="score-b">{livematch.match1Bscore}</div>
                                    <div className="set-score" id="set-score-b">{livematch.match1Bsets}</div>
                                </div>
                            </div>
                        )  : null }
                            
                    </React.Fragment>
                ))}
                {view === 'live' && livematches2.map((livematch2,index)=>( 
                    <React.Fragment key={index}>  
                        {matches.length === 2 ? (
                            <div className="main-panel">
                                <h2 className="panel-heading"><span id="match-type1">{matches[1].matchType}</span></h2>
                                <div className="Gender">{matches[1].gender}</div>
                                <div className="team-container">
                                    <div className="team-panel" id="team-a">{matches[1].teamA}</div>
                                    <div className="versus">Vs</div>
                                    <div className="team-panel" id="team-b">{matches[1].teamB}</div>
                                </div>
                                <div className="scores-container">
                                    <div className="set-score" id="set-score-a">{livematch2.match2Asets}</div>
                                    <div className="score" id="score-a">{livematch2.match2Ascore}</div>
                                    <div className="score-separator">:</div>
                                    <div className="score" id="score-b">{livematch2.match2Bscore}</div>
                                    <div className="set-score" id="set-score-b">{livematch2.match2Bsets}</div>
                                </div>
                            </div>
                            
                        ) : null }
                            
                    </React.Fragment>
                ))}
            </main>
        </div>
    );
};

export default Live;