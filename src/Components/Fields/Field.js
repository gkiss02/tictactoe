import { useState, useContext, useEffect } from 'react';
import { ActivePlayer } from '../../Context/ActivePlayer';

import styles from './Field.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

function Field (props) {
    const [activePlayer, setActivePlayer] = useContext(ActivePlayer)
    const [buttonClicked, setButtonClicked] = useState(false);
    const [playerClicked, setPlayerClicked] = useState()

    function clickHandle() {
        props.playerHandler()
        setButtonClicked(true)
        setPlayerClicked(activePlayer);
    }


    return (
        <div className={styles.container} onClick={clickHandle}>
            {buttonClicked && playerClicked && <FontAwesomeIcon icon={faX} size={'10x'} style={{position: 'absolute'}} color='#61c0bc'/>}
            {buttonClicked && !playerClicked && <FontAwesomeIcon icon={faCircle} size={'10x'} style={{position: 'absolute'}} color='#e5ac4d'/>}
        </div>
    )
}

export default Field;