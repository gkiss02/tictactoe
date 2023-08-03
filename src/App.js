import { useState } from 'react';

import styles from './App.module.css';

import PlayerInformation from './Components/Header/PlayerInformation';
import ActivePlayerComponent from './Components/Header/ActivePlayerComponent'
import RestartButton from './Components/Header/RestartButton';
import FieldContainer from './Components/Fields/FieldContainer';
import ResultCard from './Components/Result/ResultCard';

import { ActivePlayer } from './Context/Context'
import { Player1Arr } from './Context/Context';
import { Player2Arr } from './Context/Context';

function App() {
  const [activePlayer, setActivePlayer] = useState(true);
  const [player1Arr, setPlayer1Arr] = useState([]);
  const [player2Arr, setPlayer2Arr] = useState([]);

  return (
    <Player2Arr.Provider value={[player1Arr, setPlayer1Arr]}>
      <Player1Arr.Provider value={[player2Arr, setPlayer2Arr]}>
        <ActivePlayer.Provider value={[activePlayer, setActivePlayer]}>
          <div className={styles.container}>
            <header className={styles['header-container']}>
              <PlayerInformation></PlayerInformation>
              <ActivePlayerComponent></ActivePlayerComponent>
              <RestartButton></RestartButton>
            </header>
        <FieldContainer></FieldContainer>
          <section className={styles['result-container']}>
            <ResultCard name='Player 1' result={3} color='#61c0bc'></ResultCard>
            <ResultCard name='Tie' result={11} color='#acbec7'></ResultCard>
            <ResultCard name='Player 2' result={23} color='#e5ac4d'></ResultCard>
          </section>
        </div>
      </ActivePlayer.Provider>
      </Player1Arr.Provider>
    </Player2Arr.Provider>
  );
}

export default App;
