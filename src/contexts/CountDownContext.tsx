import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextDate {
    minutes: number;
    segunds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

interface countDownProviderProps {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextDate);

let countDownTimeout: NodeJS.Timeout;

export function CountDownProvider ({ children }: countDownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext);
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const segunds = time % 60;

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(0.1 * 60);
    }

    useEffect(() => { 
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false); 
            startNewChallenge();     
        }

    }, [isActive, time]);

    return (
        <CountDownContext.Provider value={{
            minutes,
            segunds,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown,
        }}>
            {  children }
        </CountDownContext.Provider>
    );
}
