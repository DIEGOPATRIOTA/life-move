import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountDown } = useContext(CountDownContext);

    const ChallengeBoxLabel = {
        mainCardLabel: "Finalize um ciclo para receber um desafio",
        secundaryCardLabel: "Avance de level completando desafios.",
        challengeFailedButtonLabel: "Falhei",
        challengeSucceededButtonLabel: "Completei",
        newChallngeLabel: "Novo desafio",
        earnPointsPartOne: "Ganhe ",
        earnPointsPartTwo: "xp"
    };

    function handleChallengeSucceeded() {
         completeChallenge();
         resetCountDown(); 
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountDown(); 
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>{ChallengeBoxLabel.earnPointsPartOne} { activeChallenge.amount } {ChallengeBoxLabel.earnPointsPartTwo}</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>{ChallengeBoxLabel.newChallngeLabel}</strong>
                        <p> { activeChallenge.description } </p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            {ChallengeBoxLabel.challengeFailedButtonLabel}
                        </button>
                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            {ChallengeBoxLabel.challengeSucceededButtonLabel}
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>{ChallengeBoxLabel.mainCardLabel}</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        {ChallengeBoxLabel.secundaryCardLabel}
                    </p>
                </div>
            )}

        </div>
    );
}