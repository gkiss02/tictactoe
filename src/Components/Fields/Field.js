import { useState, useContext } from 'react';
import { ActivePlayer } from '../../Context/Context';
import { Player1Arr } from '../../Context/Context';
import { Player2Arr } from '../../Context/Context';

import styles from './Field.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'


function winnerDecider (arr) {
    if ((arr.includes(0) && arr.includes(1) && arr.includes(2))) return [0, 1 ,2];
    if ((arr.includes(3) && arr.includes(4) && arr.includes(5))) return [3, 4 ,5];
    if ((arr.includes(6) && arr.includes(7) && arr.includes(8))) return [6, 7 ,8];
    if ((arr.includes(0) && arr.includes(3) && arr.includes(6))) return [0, 3 ,6];
    if ((arr.includes(1) && arr.includes(4) && arr.includes(7))) return [1, 4 ,7];
    if ((arr.includes(2) && arr.includes(5) && arr.includes(8))) return [2, 5 ,8];
    if ((arr.includes(2) && arr.includes(4) && arr.includes(6))) return [2, 4 ,6];
    if ((arr.includes(0) && arr.includes(4) && arr.includes(8))) return [0, 4 ,8];
}

function Field (props) {
    const [activePlayer, setActivePlayer] = useContext(ActivePlayer)
    const [buttonClicked, setButtonClicked] = useState(false);
    const [playerClicked, setPlayerClicked] = useState()

    const player1Arr = useContext(Player1Arr);
    const player2Arr = useContext(Player2Arr);

    const activePlayerArr = !activePlayer ? player1Arr : player2Arr;

    function clickHandle() {
        props.playerHandler()
        setButtonClicked(true)
        setPlayerClicked(activePlayer);
    }

    if (buttonClicked && playerClicked && !player1Arr.includes(props.index)) player1Arr.push(props.index)
    if (buttonClicked && !playerClicked && !player2Arr.includes(props.index)) player2Arr.push(props.index)

    const winnerArr = winnerDecider(activePlayerArr);
    props.winnerArrFunc(winnerArr)

    return (
        <div className={`${styles.container} ${props.winnerElements && styles.win} ${!winnerArr && styles.default}`} onClick={!buttonClicked && winnerArr == undefined ? clickHandle : undefined}>
            {buttonClicked && playerClicked && <FontAwesomeIcon icon={faX} size={'10x'} style={{position: 'absolute'}} color='#61c0bc'/>}
            {buttonClicked && !playerClicked && <FontAwesomeIcon icon={faCircle} size={'10x'} style={{position: 'absolute'}} color='#e5ac4d'/>}
        </div>
    )
}

export default Field;