import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);
    const LevelUpModalLabel = {
        congratulations: "Parabéns",
        secondaryConsiderations: "Você alcançou um novo level."
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header> { level } </header>
                <strong>{LevelUpModalLabel.congratulations}</strong>
                <p>{LevelUpModalLabel.secondaryConsiderations}</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
        </div>
    );
}