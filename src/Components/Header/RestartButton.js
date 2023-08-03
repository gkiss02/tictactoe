import styles from './RestartButton.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

function RestartButton () {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faRotateRight} color={'#1d2a31'} size={'3x'} className={styles.icon}/>
        </div>
    )
}

export default RestartButton;