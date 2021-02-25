import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import stytes from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={stytes.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{ challengesCompleted }</span>
        </div>
    );
}