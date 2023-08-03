import styles from './FieldContainer.module.css'

import Field from './Field'
import Modal from '../Modal/Modal'

import { ActivePlayer } from '../../Context/Context';
import { useContext, useState } from 'react';

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

function FieldContainer () {
    const arr = [0,1,2,3,4,5,6,7,8]

    const [activePlayer, setActivePlayer] = useContext(ActivePlayer)
    let [player1Arr, setPlayer1Arr] = useState([])
    let [player2Arr, setPlayer2Arr] = useState([])

    function arrReset() {
        player1Arr = []
        player2Arr = []
        console.log(player1Arr);
        console.log(player2Arr);
        setActivePlayer(true)
    }

    function addClicked (element) {
        activePlayer ? player1Arr.push(element) : player2Arr.push(element)
        setActivePlayer(!activePlayer)
    }

    let player1Win = winnerDecider(player1Arr)
    let player2Win = winnerDecider(player2Arr)
    let winnerArr;
    let isWinner = false;

    if (player1Win != undefined) {
        winnerArr = player1Win;
        isWinner = true;
    }

    if (player2Win != undefined) {
        winnerArr = player2Win;
        isWinner = true;
    }

    return (
        <section className={styles.container}>
            {isWinner && <Modal activePlayer={activePlayer} arrReset={arrReset}></Modal>}
        {arr.map(item =>
        <Field
            key={item}
            index={item}
            addClicked={addClicked}
            player1clicked = {player1Arr.includes(item)}
            player2clicked = {player2Arr.includes(item)}
            winnerArr = {isWinner && winnerArr.includes(item)}
            isWinner = {isWinner}
        >
        </Field>
        )}
    </section>
    )
}

export default FieldContainer;