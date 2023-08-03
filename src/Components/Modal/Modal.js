import {createPortal} from 'react-dom';

import styles from './Modal.module.css'

function Modal (props) {
    console.log(props.activePlayer);

    return (
        createPortal(
            <div className={styles.container}>
                <p className={styles.text}>{!props.activePlayer? 'Player 1' : 'Player 2'} wins!</p>
                <button className={styles.button}>Restart</button>
            </div>
        , document.body)
    )
}

export default Modal;