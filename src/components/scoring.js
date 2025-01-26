import React, { useState } from 'react';
import './scoring.css';
import NavBar from './NavBar';

const Scoring = () => {
    const [teamAscore, setTeamAscore] = useState(0);
    const [teamBscore, setTeamBscore] = useState(0);
    const [teamAset, setTeamAset] = useState(0);
    const [teamBset, setTeamBset] = useState(0);

    const handleIncrement = (setter, value) => {
        setter(value + 1);
    };

    const handleDecrement = (setter, value) => {
        setter(value - 1);
    };

    const resetScores = () => {
        setTeamAscore(0);
        setTeamBscore(0);
    };

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
                    <div className="grid-item combined">Team A</div>
                    <div className="grid-item combined">Team B</div>
                    <div className="grid-item">
                        <button className="plus-button" onClick={() => handleIncrement(setTeamAset, teamAset)}>+</button>
                    </div>
                    <div className="grid-item">
                        <button className="plus-button" onClick={() => handleIncrement(setTeamAscore, teamAscore)}>+</button>
                    </div>
                    <div className="grid-item">
                        <button className="plus-button" onClick={() => handleIncrement(setTeamBscore, teamBscore)}>+</button>
                    </div>
                    <div className="grid-item">
                        <button className="plus-button" onClick={() => handleIncrement(setTeamBset, teamBset)}>+</button>
                    </div>
                    <div className="grid-item" id="teamAsets">{teamAset}</div>
                    <div className="grid-item" id="teamAscore">{teamAscore}</div>
                    <div className="grid-item" id="teamBscore">{teamBscore}</div>
                    <div className="grid-item" id="teamBsets">{teamBset}</div>
                    <div className="grid-item">
                        <button className="plus-button" onClick={() => handleDecrement(setTeamAset, teamAset)}>-</button>
                    </div>
                    <div className="grid-item">
                        <button className="plus-button" onClick={() => handleDecrement(setTeamAscore, teamAscore)}>-</button>
                    </div>
                    <div className="grid-item">
                        <button className="plus-button" onClick={() => handleDecrement(setTeamBscore, teamBscore)}>-</button>
                    </div>
                    <div className="grid-item">
                        <button className="plus-button" onClick={() => handleDecrement(setTeamBset, teamBset)}>-</button>
                    </div>
                    <div className="grid-item empty"></div>
                    <div className="grid-item combined">
                        <button id="reset" onClick={resetScores}>Reset</button>
                    </div>
                    <div className="grid-item empty"></div>
                    <div className="grid-item empty"></div>
                    <div className="grid-item empty"></div>
                    <div className="grid-item empty"></div>
                    <div className="grid-item">
                        <button id="end-match">End Match</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Scoring;
