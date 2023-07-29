import styles from './App.module.css';

import PlayerInformation from './Components/Header/PlayerInformation';
import ActivePlayer from './Components/Header/ActivePlayer'
import ResartButton from './Components/Header/ResartButton';
import Field from './Components/Field';

function App() {
  const arr = [1,2,3,4,5,6,7,8,9];

  return (
    <div className={styles.container}>
      <header className={styles['header-container']}>
        <PlayerInformation></PlayerInformation>
        <ActivePlayer></ActivePlayer>
        <ResartButton></ResartButton>
      </header>
      <section className={styles['field-container']}>
        {arr.map((item, index) =>
          <Field></Field>
        )}
      </section>
    </div>
  );
}

export default App;
