import { createContext } from 'react'

export const ActivePlayer = createContext();

export const Restart = createContext();

export const Player1Score = createContext({
    score: 0,
    setScore: () => {}
})