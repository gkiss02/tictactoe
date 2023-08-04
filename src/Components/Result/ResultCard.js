import styles from './ResultCard.module.css'

import { useContext } from 'react';
import { Player1Score } from '../../Context/Context';

function ResultCard (props) {
    const ctx = useContext(Player1Score);

    return (
        <div className={styles.container} style={{ backgroundColor: props.color }}>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.result}>{ctx.score[props.index]}</p>
        </div>
    )
}

export default ResultCard;