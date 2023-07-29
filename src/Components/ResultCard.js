import styles from './ResultCard.module.css'

function ResultCard (props) {
    return (
        <div className={styles.container} style={{ backgroundColor: props.color }}>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.result}>{props.result}</p>
        </div>
    )
}

export default ResultCard;