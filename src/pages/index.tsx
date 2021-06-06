import React, { useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountDownProvider } from '../contexts/CountDownContext';

import { DefaultTheme, ThemeProvider } from 'styled-components';
import Switch from 'react-switch';
import { combineTheme, dark, light } from '../styles/themes';
import GlobalStyles from '../styles/global';
interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(light));
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? combineTheme(dark) : combineTheme(light));
  };
  
  const homeLabel = {
    title: "Inicio | life-move"
  };

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch checked={theme.title === 'dark'} onChange={toggleTheme} />
      <div className={styles.container}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
          <link rel="stylesheet icon" href="favicon.png" type="image/x-icon" />
          <title>{homeLabel.title}</title>
        </Head>

        <ExperienceBar />

        <CountDownProvider>
          <section>
            <div >
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
      </ThemeProvider>       
    </ChallengesProvider> 
  )
}

//what data will be passed from next.js to the client
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
} 
