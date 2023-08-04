import styles from './FieldContainer.module.css'

import Field from './Field'
import Modal from '../Modal/Modal'

import { ActivePlayerContext } from '../../Context/Context';
import { RestartContext } from '../../Context/Context';
import { PlayerScoresContext } from '../../Context/Context';
import { useContext, useState, useEffect } from 'react';

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

function draw (arr1, arr2, winnerArr) {
    if (arr1.length + arr2.length == 9 && winnerArr.length == 0) return true;
    return false;
}

function FieldContainer () {
    const arr = [0,1,2,3,4,5,6,7,8]

    const scoresArr = useContext(PlayerScoresContext);
    const activePlayer = useContext(ActivePlayerContext)
    const restart = useContext(RestartContext)
    const [modalShow, setModalShow] = useState(false);
    let [player1Arr, setPlayer1Arr] = useState([])
    let [player2Arr, setPlayer2Arr] = useState([])

    function arrReset() {
        setPlayer1Arr([])
        setPlayer2Arr([])
        setModalShow(false)
        activePlayer.setActivePlayer(true)
        restart.setRestart(false)
    }

    if (restart.restart) setTimeout(() => {
        arrReset()
    }, 100);

    function addClicked (element) {
        activePlayer.activePlayer ? player1Arr.push(element) : player2Arr.push(element)
        activePlayer.setActivePlayer(!activePlayer.activePlayer)
    }

    let player1Win = winnerDecider(player1Arr)
    let player2Win = winnerDecider(player2Arr)
    let winnerArr = [];
    let isWinner = false;

    if (player1Win != undefined) {
        winnerArr = player1Win;
        isWinner = true;
    }

    if (player2Win != undefined) {
        winnerArr = player2Win;
        isWinner = true;
    }

    const drawGame = draw(player1Arr, player2Arr, winnerArr);

    useEffect (() => {
        if (player1Win != undefined) scoresArr.setScore([scoresArr.score[0] + 1, scoresArr.score[1], scoresArr.score[2]])
        if (drawGame) scoresArr.setScore([scoresArr.score[0], scoresArr.score[1] + 1, scoresArr.score[2]])
        if (player2Win != undefined) scoresArr.setScore([scoresArr.score[0], scoresArr.score[1], scoresArr.score[2] + 1])
    }, [isWinner, drawGame])

    useEffect(() => {
        if (drawGame) {
            setTimeout(() => {
                setModalShow(true);
            }, 1000);
        }
    }, [drawGame]);

    useEffect(() => {
        if (isWinner) {
            setTimeout(() => {
                setModalShow(true);
            }, 5000);
        }
    }, [isWinner]);


    return (
        <section className={styles.container}>
            {modalShow && <Modal activePlayer={activePlayer.activePlayer} draw={drawGame} arrReset={arrReset}></Modal>}
        {arr.map(item =>
        <Field
            key={item}
            index={item}
            addClicked={addClicked}
            player1clicked = {player1Arr.includes(item)}
            player2clicked = {player2Arr.includes(item)}
            winnerArr = {isWinner && winnerArr.includes(item)}
            isWinner = {isWinner}
            modalShow={modalShow}
        >
        </Field>
        )}
    </section>
    )
}

export default FieldContainer;