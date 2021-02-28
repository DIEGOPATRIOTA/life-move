import { useState, useEffect, useContext } from 'react';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css'

export function CountDown() {

    const { minutes, segunds, hasFinished, isActive, startCountDown, resetCountDown } = useContext(CountDownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [segundLeft, segundRight] = String(segunds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{segundLeft}</span>
                    <span>{segundRight}</span>
                </div>
            </div>
            {
                hasFinished ? (
                    <button
                    disabled
                    className={styles.countdownButton}                    
                >
                    Ciclo encerrado
                </button>
                ) : (
                    <>
                        { isActive ? (
                            <button 
                                type="button" 
                                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                                onClick={resetCountDown}
                            >
                                Abandonar ciclo
                            </button>
                        ) : (
                            <button 
                                type="button" 
                                className={styles.countdownButton}
                                onClick={startCountDown}
                            >
                                Iniciar um ciclo
                            </button>

                        ) }
                    </>
                )
            }
          
        </div>
    );
}