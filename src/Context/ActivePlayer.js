import { ActivePlayerContext } from './Context'

import { useState } from 'react';

function ActivePlayer(props) {
    const [activePlayer, setActivePlayer] = useState(true);

    const obj = {
        activePlayer,
        setActivePlayer,
    };

    return (
        <ActivePlayerContext.Provider value={obj}>
            {props.children}
        </ActivePlayerContext.Provider>
    );
}

export default ActivePlayer;