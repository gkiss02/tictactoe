import {createPortal} from 'react-dom';

import styles from './Modal.module.css'

function Modal (props) {
    let resultText;
    if (props.draw) {
        resultText = "Draw"
    } else {
        resultText = `${!props.activePlayer? 'Player 1' : 'Player 2'} wins`
    }
    return (
        createPortal(
            <div className={styles.container}>
                <p className={styles.text}>{resultText}</p>
                <button className={styles.button} onClick={props.arrReset}>Restart</button>
            </div>
        , document.body)
    )
}

export default Modal;