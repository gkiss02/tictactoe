import styles from './ResultCard.module.css'

import { useContext } from 'react';
import { PlayerScoresContext } from '../../Context/Context';

function ResultCard (props) {
    const scoresArr = useContext(PlayerScoresContext);

    return (
        <div className={styles.container} style={{ backgroundColor: props.color }}>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.result}>{scoresArr.score[props.index]}</p>
        </div>
    )
}

export default ResultCard;