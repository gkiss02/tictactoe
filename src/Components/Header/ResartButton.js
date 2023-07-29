import styles from './ResartButton.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

function ResartButton () {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faRotateRight} color={'#1d2a31'} size={'3x'}/>
        </div>
    )
}

export default ResartButton