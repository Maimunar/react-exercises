import { useEffect, useState } from 'react';
import './App.css';
import { BreakContainer } from './BreakContainer';
import { SessionContainer } from './SessionContainer';
import { Timer } from './Timer';

const App = () => {
  const [breakLen, setBreakLen] = useState(5);
  const [sessionLen, setSessionLen] = useState(25);
  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false);
  const [isSession, setIsSession] = useState(true);

  useEffect(() => {
    isSession && setTime(sessionLen * 60)
  }, [sessionLen])

  useEffect(() => {
    isSession || setTime(breakLen * 60)
  }, [breakLen])

  useEffect(() => {
    setTime(isSession ? sessionLen * 60 : breakLen * 60)
  }, [isSession])

  return (
    <div id="container">
        <h1>25 + 5 Clock</h1>
        <div id="change-container">
        <SessionContainer sessionLen={sessionLen} setSessionLen={setSessionLen} isActive={isActive} />
        <BreakContainer breakLen={breakLen} setBreakLen={setBreakLen} isActive={isActive}/>
        </div>
        <Timer  
        breakLen={breakLen} setBreakLen={setBreakLen}
        sessionLen={sessionLen} setSessionLen={setSessionLen}
        time={time} setTime={setTime} 
        isActive={isActive} setIsActive={setIsActive} 
        isSession={isSession} setIsSession={setIsSession} 
        />
    </div>
  );
}

export default App;
