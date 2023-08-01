import { useContext, useState } from 'react';

import styles from './Field.module.css'
import { ActivePlayer } from '../../Context/ActivePlayer';

function Field () {
    console.log('fut');
    const playerContext = useContext(ActivePlayer);
    const [activePlayer, setActivePlayer] = useState(playerContext);

    function playerHandler() {
        setActivePlayer(!activePlayer);
    }

    console.log(activePlayer);

    return (
        <div className={styles.container} onClick={playerHandler}>

        </div>
    )
}

export default Field;