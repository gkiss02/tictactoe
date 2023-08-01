import styles from './Field.module.css'

function Field (props) {
    return (
        <div className={styles.container} onClick={props.playerHandler}>

        </div>
    )
}

export default Field;