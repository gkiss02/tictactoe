import styles from './FieldContainer.module.css'

import Field from './Field'
import { ActivePlayer } from '../../Context/ActivePlayer';
import { useContext } from 'react';

function FieldContainer () {
    const arr = [0,1,2,3,4,5,6,7,8];
    
    const [activePlayer, setActivePlayer] = useContext(ActivePlayer)

    function playerHandler() {
        setActivePlayer(!activePlayer);
    }

    return (
        <section className={styles['field-container']}>
        {arr.map((item, index) =>
            <Field key={index} playerHandler={playerHandler}></Field>
        )}
        </section>
    )
}

export default FieldContainer;