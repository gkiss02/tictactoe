import { RestartContext } from './Context'

import { useState } from 'react';

function Restart(props) {
    const [restart, setRestart] = useState(false);

    const obj = {
        restart,
        setRestart,
    };

    return (
        <RestartContext.Provider value={obj}>
            {props.children}
        </RestartContext.Provider>
    );
}

export default Restart;