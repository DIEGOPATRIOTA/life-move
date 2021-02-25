import { useState, useEffect } from 'react';
import styles from '../styles/components/CountDown.module.css'

export function CountDown() {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const segunds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [segundLeft, segundRight] = String(segunds).padStart(2, '0').split('');

    function startCountDown() {
        setActive(true);
    }

    useEffect(() => { 
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        }
    }, [active, time]);

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

            <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountDown}
            >
                Iniciar um ciclo
            </button>
        </div>
    );
}