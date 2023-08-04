import { Player1Score } from './Context'

import { useState } from 'react';

function PlayerScoreComponent(props) {
    const [score, setScore] = useState([0,0,0]);

    const value = {
        score,
        setScore,
    };

    return (
        <Player1Score.Provider value={value}>
            {props.children}
        </Player1Score.Provider>
    );
}

export default PlayerScoreComponent;