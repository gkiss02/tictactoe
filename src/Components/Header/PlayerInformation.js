import styles from './PlayerInformation.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'


function PlayerInformation () {
    return (
        <div>
            <div className={styles.container}>
                <p className={styles.text}>Player 1: </p>
                <FontAwesomeIcon icon={faCircle} size={'2x'} color='#e5ac4d' />
            </div>
            <div className={styles.container}>
                <p className={styles.text}>Player 2: </p>
                <FontAwesomeIcon icon={faX} size={'2x'} color='#61c0bc'/>
            </div>
        </div>
    )
}

export default PlayerInformation;