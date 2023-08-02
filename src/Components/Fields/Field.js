import { useState, useContext } from 'react';
import { ActivePlayer } from '../../Context/Context';
import { Player1Arr } from '../../Context/Context';
import { Player2Arr } from '../../Context/Context';

import styles from './Field.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

function Field (props) {
    const [activePlayer, setActivePlayer] = useContext(ActivePlayer)
    const [buttonClicked, setButtonClicked] = useState(false);
    const [playerClicked, setPlayerClicked] = useState()

    const player1Arr = useContext(Player1Arr);
    const player2Arr = useContext(Player2Arr);

    function clickHandle() {
        props.playerHandler()
        setButtonClicked(true)
        setPlayerClicked(activePlayer);
    }

    if (buttonClicked && playerClicked && !player1Arr.includes(props.index)) player1Arr.push(props.index)
    if (buttonClicked && !playerClicked && !player2Arr.includes(props.index)) player2Arr.push(props.index)

    return (
        <div className={styles.container} onClick={!buttonClicked ? clickHandle : undefined}>
            {buttonClicked && playerClicked && <FontAwesomeIcon icon={faX} size={'10x'} style={{position: 'absolute'}} color='#61c0bc'/>}
            {buttonClicked && !playerClicked && <FontAwesomeIcon icon={faCircle} size={'10x'} style={{position: 'absolute'}} color='#e5ac4d'/>}
        </div>
    )
}

export default Field;