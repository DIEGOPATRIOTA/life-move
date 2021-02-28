import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEMy403nxA05Q/profile-displayphoto-shrink_200_200/0/1587423161275?e=1619654400&v=beta&t=rmODC6o7t2riYS4m7hQo0i1uRrYjkiXltkbSrWBbnT4" alt="Diego Patriota" />
            <div>
                <strong>Diego Patriota</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level { level }
                </p>
            </div>
        </div>
    );
}