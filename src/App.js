import styles from './App.module.css';

import PlayerInformation from './Components/Header/PlayerInformation';
import ActivePlayerComponent from './Components/Header/ActivePlayerComponent'
import ResartButton from './Components/Header/ResartButton';
import Field from './Components/Fields/Field';
import ResultCard from './Components/Result/ResultCard';

import { ActivePlayer } from './Context/ActivePlayer'

function App() {
  const arr = [0,1,2,3,4,5,6,7,8];

  return (
    <ActivePlayer.Provider value={true}>
      <div className={styles.container}>
        <header className={styles['header-container']}>
          <PlayerInformation></PlayerInformation>
          <ActivePlayerComponent></ActivePlayerComponent>
          <ResartButton></ResartButton>
        </header>
        <section className={styles['field-container']}>
        {arr.map((item, index) =>
          <Field key={index}></Field>
        )}
        </section>
        <section className={styles['result-container']}>
          <ResultCard name='Player 1' result={23} color='#e5ac4d'></ResultCard>
          <ResultCard name='Tie' result={11} color='#acbec7'></ResultCard>
          <ResultCard name='Player 2' result={3} color='#61c0bc'></ResultCard>
        </section>
      </div>
    </ActivePlayer.Provider>
  );
}

export default App;
