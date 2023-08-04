import { useState } from 'react';

import styles from './App.module.css';

import PlayerInformation from './Components/Header/PlayerInformation';
import ActivePlayerComponent from './Components/Header/ActivePlayerComponent'
import RestartButton from './Components/Header/RestartButton';
import FieldContainer from './Components/Fields/FieldContainer';
import ResultCard from './Components/Result/ResultCard';

import PlayerScoreComponent from './Context/playerScore'

import { ActivePlayer } from './Context/Context'
import { Restart } from './Context/Context'

function App() {
  const [activePlayer, setActivePlayer] = useState(true);
  const [restart, setRestart] = useState(false);

  return (
    <PlayerScoreComponent>
          <Restart.Provider value={[restart, setRestart]}>
      <ActivePlayer.Provider value={[activePlayer, setActivePlayer]}>
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
      </ActivePlayer.Provider>
    </Restart.Provider>

    </PlayerScoreComponent>
  );
}

export default App;
