import styles from './RestartButton.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'

import { Restart } from '../../Context/Context'

function RestartButton () {
    const [restart, setRestart] = useContext(Restart)
    function clickHandle () {
        setRestart(true)
    } 
    return (
        <div className={styles.container} onClick={clickHandle}>
            <FontAwesomeIcon icon={faRotateRight} color={'#1d2a31'} size={'3x'} className={styles.icon}/>
        </div>
    )
}

export default RestartButton;