import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountDownProvider } from '../contexts/CountDownContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CountDownProvider>
        <Component {...pageProps} />
      </CountDownProvider>
    </ChallengesProvider>
    )
}

export default MyApp
