import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

import { ActivePlayer } from '../../Context/ActivePlayer';
import { useContext } from 'react'

function ActivePlayerIcon () {
    const [activePlayer, setActivePlayer] = useContext(ActivePlayer);

    if (!activePlayer) {
        return (
            <FontAwesomeIcon icon={faCircle} size={'2x'} color='#e5ac4d' />
            )
        }
        return (
            <FontAwesomeIcon icon={faX} size={'2x'} color='#61c0bc'/>
        )
}

export default  ActivePlayerIcon;