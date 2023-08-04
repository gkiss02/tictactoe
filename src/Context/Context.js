import { createContext } from 'react'

export const ActivePlayerContext = createContext({
    activePlayer: true,
    setActivePlayer: () => {}
});

export const RestartContext = createContext({
    restart: false,
    setRestart: () => {}
});

export const PlayerScoresContext = createContext({
    scores: 0,
    setScore: () => {}
})