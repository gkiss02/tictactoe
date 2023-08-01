import styles from './ActivePlayerComponent.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

function ActivePlayerComponent () {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faCircle} size={'2x'} color='#e5ac4d' />
            <p className={styles.title}>Turn</p>
        </div>
    )
}

export default ActivePlayerComponent;