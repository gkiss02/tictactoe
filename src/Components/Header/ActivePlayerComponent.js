import styles from './ActivePlayerComponent.module.css'

import ActivePlayerIcon from './ActivePlayerIcon';

function ActivePlayerComponent () {


    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <ActivePlayerIcon></ActivePlayerIcon>
            </div>
            <p className={styles.title}>Turn</p>
        </div>
    )
}

export default ActivePlayerComponent;