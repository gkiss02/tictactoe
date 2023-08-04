import { PlayerScoresContext } from './Context'

import { useState } from 'react';

function PlayerScores(props) {
    const [score, setScore] = useState([0,0,0]);

    const obj = {
        score,
        setScore,
    };

    return (
        <PlayerScoresContext.Provider value={obj}>
            {props.children}
        </PlayerScoresContext.Provider>
    );
}

export default PlayerScores;