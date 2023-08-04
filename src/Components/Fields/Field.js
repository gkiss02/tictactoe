import styles from './Field.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

function Field (props) {
    function clickHandle () {
        props.addClicked(props.index);
    }

    const isElement = props.player1clicked || props.player2clicked;

    return (
        <div className={`${styles.container} ${!props.isWinner && !isElement && styles.default} ${props.winnerArr && styles.win}`} onClick={!props.isWinner && !isElement ? clickHandle : undefined}>
            {!props.modalShow && props.player1clicked && <FontAwesomeIcon icon={faX} size={'10x'} style={{position: 'absolute'}} color='#61c0bc'/>}
            {!props.modalShow && props.player2clicked && <FontAwesomeIcon icon={faCircle} size={'10x'} style={{position: 'absolute'}} color='#e5ac4d'/>}
        </div>
    )
}

export default Field;