import styles from './App.module.css';

import PlayerInformation from './Components/Header/PlayerInformation';
import ActivePlayerComponent from './Components/Header/ActivePlayerComponent'
import RestartButton from './Components/Header/RestartButton';
import FieldContainer from './Components/Fields/FieldContainer';
import ResultCard from './Components/Result/ResultCard';

import PlayerScores from './Context/PlayerScores';
import ActivePlayer from './Context/ActivePlayer';
import Restart from './Context/Restart';

function App() {
  return (
    <PlayerScores>
      <Restart>
        <ActivePlayer>
          <div className={styles.container}>
            <header className={styles['header-container']}>
              <PlayerInformation></PlayerInformation>
              <ActivePlayerComponent></ActivePlayerComponent>
              <RestartButton></RestartButton>
            </header>
            <FieldContainer></FieldContainer>
            <section className={styles['result-container']}>
              <ResultCard name='Player 1' index={0} color='#61c0bc'></ResultCard>
              <ResultCard name='Tie' index={1} color='#acbec7'></ResultCard>
              <ResultCard name='Player 2' index={2} color='#e5ac4d'></ResultCard>
            </section>
          </div>
          </ActivePlayer>
      </Restart>
    </PlayerScores>
  );
}

export default App;
