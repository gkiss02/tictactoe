import styles from './App.module.css';

import PlayerInformation from './Components/Header/PlayerInformation';
import ActivePlayer from './Components/Header/ActivePlayer'
import ResartButton from './Components/Header/ResartButton';
import Field from './Components/Field';
import ResultCard from './Components/ResultCard';

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
        {arr.map(item =>
          <Field></Field>
        )}
      </section>
      <section className={styles['result-container']}>
        <ResultCard name='Player 1' result={23} color='#e5ac4d'></ResultCard>
        <ResultCard name='Tie' result={11} color='#acbec7'></ResultCard>
        <ResultCard name='Player 2' result={3} color='#61c0bc'></ResultCard>
      </section>
    </div>
  );
}

export default App;
