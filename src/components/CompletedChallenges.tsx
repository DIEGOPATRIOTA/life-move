import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import stytes from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);
    const CompletedChallengesLabel = {
        challengeFinished: "Desafios completos"
    }
    return (
        <div className={stytes.completedChallengesContainer}>
            <span>{CompletedChallengesLabel.challengeFinished}</span>
            <span>{ challengesCompleted }</span>
        </div>
    );
}