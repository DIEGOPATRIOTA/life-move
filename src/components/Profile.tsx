import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    const profileLabel = {
        userName: "Diego Patriota",
        userImg: "profile.jpg"
    };

    return (
        <div className={styles.profileContainer}>
            <img src={profileLabel.userImg} alt={profileLabel.userName} />
            <div>
                <strong>{ profileLabel.userName }</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level { level }
                </p>
            </div>
        </div>
    );
}