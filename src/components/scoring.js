import React, { useState, useEffect } from 'react';
import './scoring.css';
import NavBar from './NavBar';

const Scoring = () => {
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
        fetch('http://localhost:5000/api/upcoming')
            .then(response => response.json())
            .then(data => setUpcomingMatches(data))
            .catch(error => console.error('Error fetching upcoming matches:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/api/results')
            .then(response => response.json())
            .then(data => setResults(data))
            .catch(error => console.error('Error fetching results:', error));
    }, []);

    const handleIncrement = (index, key) => {
        const updatedMatches = matches.map((match, i) => {
            if (i === index) {
                return { ...match, [key]: match[key] + 1 };
            }
            return match;
        });
        setMatches(updatedMatches);
    };

    const handleDecrement = (index, key) => {
        const updatedMatches = matches.map((match, i) => {
            if (i === index) {
                return { ...match, [key]: match[key] - 1 };
            }
            return match;
        });
        setMatches(updatedMatches);
    };

    const resetScores = (index) => {
        const updatedMatches = matches.map((match, i) => {
            if (i === index) {
                return { ...match, teamAscore: 0, teamBscore: 0, teamAset: 0, teamBset: 0 };
            }
            return match;
        });
        setMatches(updatedMatches);
    };

    return (
        <div>
            <header>
                <NavBar />
            </header>
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
                    Live Now
                </button>
                <button
                    id="Results"
                    className={view === 'results' ? 'button-active' : ''}
                    onClick={() => setView('results')}
                >
                    Results
                </button>
            </div>
            <main>
                {view === 'live' && matches.map((match, index) => (
                    <div key={index} className="main-panel">
                        <div className="start-scoring">
                            start scoring
                        </div>
                        <h2 className="panel-heading"><span id="match-type">League</span> Match</h2>
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
                ))}
                {view === 'upcoming' && upcomingMatches.map((match, index) => (
                    <div key={index} className="main-panel">
                        
                        <h2 className="panel-heading"><span id="match-type">League</span> Match</h2>
                        <div className="team-container">
                            <div className="team-panel" id="team-a">{match.teamA}</div>
                            <div className="versus">Vs</div>
                            <div className="team-panel" id="team-b">{match.teamB}</div>
                        </div>
                    </div>
                ))}
                {view === 'results' && results.map((result, index) => (
                    <div key={index} className="main-panel">
                        
                        <h2 className="panel-heading"><span id="match-type">League</span> Match</h2>
                        <div className="team-container">
                            <div className="team-panel" id="team-a">{result.teamA}</div>
                            <div className="versus">Vs</div>
                            <div className="team-panel" id="team-b">{result.teamB}</div>
                        </div>
                        <div className="scores-container">
                            <div className="set-score" id="set-score-a">{result.teamAset}</div>
                            <div className="score" id="score-a">{result.teamAscore}</div>
                            <div className="score-separator">:</div>
                            <div className="score" id="score-b">{result.teamBscore}</div>
                            <div className="set-score" id="set-score-b">{result.teamBset}</div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Scoring;