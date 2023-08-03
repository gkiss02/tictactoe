import styles from './FieldContainer.module.css'
import Field from './Field'
import { ActivePlayer } from '../../Context/Context';
import { useContext, useEffect, useState } from 'react';

function FieldContainer () {
    const arr = [0,1,2,3,4,5,6,7,8];
    
    const [activePlayer, setActivePlayer] = useContext(ActivePlayer)

    const [winnerArr, setWinnerArr] = useState();

    function playerHandler() {
        setActivePlayer(!activePlayer);
    }

    function winnerArrFunc(arr) {
        if (!arraysEqual(arr, winnerArr)) {
            setWinnerArr(arr);
        }
    }

    function arraysEqual(arr1, arr2) {
        if (arr1 === arr2) return true;
        if (arr1 == null || arr2 == null) return false;
        if (arr1.length !== arr2.length) return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    console.log(winnerArr);

    return (
        <section className={styles.container}>
            {arr.map((item, index) =>
                <Field 
                    key={item} 
                    index={item} 
                    playerHandler={playerHandler} 
                    winnerArrFunc={winnerArrFunc} 
                    winnerElements={winnerArr && winnerArr.includes(index)}>
                </Field>
            )}
        </section>
    )
}

export default FieldContainer;
