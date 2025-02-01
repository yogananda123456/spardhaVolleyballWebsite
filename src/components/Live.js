import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolleyball } from '@fortawesome/free-solid-svg-icons';
import './Live.css';
import NavBar from './NavBar';

const Live = () => {
    const [matches, setMatches] = useState([]);
    const [livematches, setLivematches] = useState([]);
    const [livematches2, setLivematches2] = useState([]);
    const [view, setView] = useState('live');
    const [servingTeam1, setServingTeam1] = useState(null);
    const [servingTeam2, setServingTeam2] = useState(null);

    const prevLivematches = useRef([]);
    const prevLivematches2 = useRef([]);

    const fetchData = () => {
        fetch('https://back-end-volleyball.vercel.app/api/data')
            .then(response => response.json())
            .then(data => {
                const sortedMatches = data.sort((a, b) => {
                    const courtA = parseInt(a.court.replace(/\D/g, ''), 10);
                    const courtB = parseInt(b.court.replace(/\D/g, ''), 10);
                    return courtA - courtB;
                });
                setMatches(sortedMatches);
                console.log(sortedMatches);
            })
            .catch(error => console.error('Error fetching team data:', error));

        fetch('https://back-end-volleyball.vercel.app/api/court1data')
            .then(response => response.json())
            .then(data => {
                setLivematches(data);
            })
            .catch(error => console.error('Error fetching sheet2data:', error));

        fetch('https://back-end-volleyball.vercel.app/api/court2data')
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

    useEffect(() => {
        if (prevLivematches.current.length > 0) {
            if (livematches[0]?.match1Ascore !== prevLivematches.current[0]?.match1Ascore) {
                setServingTeam1('teamA');
            } else if (livematches[0]?.match1Bscore !== prevLivematches.current[0]?.match1Bscore) {
                setServingTeam1('teamB');
            }
        }
        prevLivematches.current = livematches;
    }, [livematches]);

    useEffect(() => {
        if (prevLivematches2.current.length > 0) {
            if (livematches2[0]?.match2Ascore !== prevLivematches2.current[0]?.match2Ascore) {
                setServingTeam2('teamA');
            } else if (livematches2[0]?.match2Bscore !== prevLivematches2.current[0]?.match2Bscore) {
                setServingTeam2('teamB');
            }
        }
        prevLivematches2.current = livematches2;
    }, [livematches2]);

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
                {view === 'live' && livematches.map((livematch, index) => (
                    <React.Fragment key={index}>
                        {matches.length === 0 ? (
                            <div className="no-matches">No Live Matches</div>
                        ) : matches.length === 1 ? (
                            <div className="main-panel">
                                <h2 className="panel-heading"><span id="match-type1">{matches[0].matchType}</span></h2>
                                <div className="Gender">{matches[0].gender}</div>
                                <div className="team-container">
                                    <div className="team-panel" id="team-a">
                                        {matches[0].teamA}
                                        {matches[0].court === 'Court 1' && servingTeam1 === 'teamA' && <FontAwesomeIcon icon={faVolleyball} style={{ marginLeft: '10px' }} />}
                                        {matches[0].court === 'Court 2' && servingTeam2 === 'teamA' && <FontAwesomeIcon icon={faVolleyball} style={{ marginLeft: '10px' }} />}
                                    </div>
                                    <div className="versus">Vs</div>
                                    <div className="team-panel" id="team-b">
                                        {matches[0].court === 'Court 1' && servingTeam1 === 'teamB' && <FontAwesomeIcon icon={faVolleyball} style={{ marginRight: '10px' }} />}
                                        {matches[0].court === 'Court 2' && servingTeam2 === 'teamB' && <FontAwesomeIcon icon={faVolleyball} style={{ marginRight: '10px' }} />}
                                        {matches[0].teamB}
                                    </div>
                                </div>
                                {matches[0].court === 'Court 1' ? (
                                    <div className="scores-container">
                                        <div className="set-score" id="set-score-a">{livematch.match1Asets}</div>
                                        <div className="score" id="score-a">{livematch.match1Ascore}</div>
                                        <div className="score-separator">:</div>
                                        <div className="score" id="score-b">{livematch.match1Bscore}</div>
                                        <div className="set-score" id="set-score-b">{livematch.match1Bsets}</div>
                                    </div>
                                ) : matches[0].court === 'Court 2' ? (
                                    <div className="scores-container">
                                        <div className="set-score" id="set-score-a">{livematches2[0].match2Asets}</div>
                                        <div className="score" id="score-a">{livematches2[0].match2Ascore}</div>
                                        <div className="score-separator">:</div>
                                        <div className="score" id="score-b">{livematches2[0].match2Bscore}</div>
                                        <div className="set-score" id="set-score-b">{livematches2[0].match2Bsets}</div>
                                    </div>
                                ) : null}
                            </div>
                        ) : matches.length === 2 ? (
                            <div className="main-panel">
                                <h2 className="panel-heading"><span id="match-type1">{matches[0].matchType}</span></h2>
                                <div className="Gender">{matches[0].gender}</div>
                                <div className="team-container">
                                    <div className="team-panel" id="team-a">
                                        {matches[0].teamA}
                                        {servingTeam1 === 'teamA' && <FontAwesomeIcon icon={faVolleyball} style={{ marginLeft: '10px' }} />}
                                    </div>
                                    <div className="versus">Vs</div>
                                    <div className="team-panel" id="team-b">
                                        {servingTeam1 === 'teamB' && <FontAwesomeIcon icon={faVolleyball} style={{ marginRight: '10px' }} />}
                                        {matches[0].teamB}
                                    </div>
                                </div>
                                <div className="scores-container">
                                    <div className="set-score" id="set-score-a">{livematch.match1Asets}</div>
                                    <div className="score" id="score-a">{livematch.match1Ascore}</div>
                                    <div className="score-separator">:</div>
                                    <div className="score" id="score-b">{livematch.match1Bscore}</div>
                                    <div className="set-score" id="set-score-b">{livematch.match1Bsets}</div>
                                </div>
                            </div>
                        ) : null}
                    </React.Fragment>
                ))}
                {view === 'live' && livematches2.map((livematch2, index) => (
                    <React.Fragment key={index}>
                        {matches.length === 2 ? (
                            <div className="main-panel">
                                <h2 className="panel-heading"><span id="match-type1">{matches[1].matchType}</span></h2>
                                <div className="Gender">{matches[1].gender}</div>
                                <div className="team-container">
                                    <div className="team-panel" id="team-a">
                                        {matches[1].teamA}
                                        {servingTeam2 === 'teamA' && <FontAwesomeIcon icon={faVolleyball} style={{ marginLeft: '10px' }} />}
                                    </div>
                                    <div className="versus">Vs</div>
                                    <div className="team-panel" id="team-b">
                                        {servingTeam2 === 'teamB' && <FontAwesomeIcon icon={faVolleyball} style={{ marginRight: '10px' }} />}
                                        {matches[1].teamB}
                                    </div>
                                </div>
                                <div className="scores-container">
                                    <div className="set-score" id="set-score-a">{livematch2.match2Asets}</div>
                                    <div className="score" id="score-a">{livematch2.match2Ascore}</div>
                                    <div className="score-separator">:</div>
                                    <div className="score" id="score-b">{livematch2.match2Bscore}</div>
                                    <div className="set-score" id="set-score-b">{livematch2.match2Bsets}</div>
                                </div>
                            </div>
                        ) : null}
                    </React.Fragment>
                ))}
            </main>
        </div>
    );
};

export default Live;