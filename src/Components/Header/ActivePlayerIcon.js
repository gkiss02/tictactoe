import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

import { ActivePlayerContext } from '../../Context/Context';
import { useContext } from 'react'

function ActivePlayerIcon () {
    const activePlayer = useContext(ActivePlayerContext)

    if (!activePlayer.activePlayer) {
        return (
            <FontAwesomeIcon icon={faCircle} size={'2x'} color='#e5ac4d' />
            )
        }
        return (
            <FontAwesomeIcon icon={faX} size={'2x'} color='#61c0bc'/>
        )
}

export default  ActivePlayerIcon;