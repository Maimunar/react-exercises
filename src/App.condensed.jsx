import React, {useState, useEffect, useRef} from 'react'

const App = () => {
    const [breakLen, setBreakLen] = useState(5);
    const [sessionLen, setSessionLen] = useState(25);
    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false);
    const [isSession, setIsSession] = useState(true);
  
    useEffect(() => {
      isSession && setTime(sessionLen * 6)
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
  

  const BreakContainer = ({breakLen, setBreakLen, isActive}) => {
    const handleClick = isIncrement => () => {
        if (isActive) return;

        if (isIncrement && breakLen < 60)
            setBreakLen(prev => prev + 1)
        else if (!isIncrement && breakLen > 1)
            setBreakLen(prev => prev - 1)
    }

    return (
        <div id='break-container'>
            <h3 id="break-label">Break Length</h3>
            <h4 id="break-length">{breakLen}</h4>
            <div>
            <button id="break-decrement" onClick={handleClick(false)}>-</button>
            <button id="break-increment" onClick={handleClick(true)}>+</button>
            </div>
            
        </div>
    );
}

const SessionContainer = ({sessionLen, setSessionLen, isActive}) => {
    const handleClick = isIncrement => () => {
        if (isActive) return;

        if (isIncrement && sessionLen < 60)
            setSessionLen(prev => prev + 1)
        else if (!isIncrement && sessionLen > 1)
            setSessionLen(prev => prev - 1)
    }
        return (
            <div id='session-container'>
                <h3 id="session-label">Session Length</h3>
                <h4 id="session-length">{sessionLen}</h4>
                <div>
                <button id="session-decrement" onClick={handleClick(false)}>-</button>
                <button id="session-increment" onClick={handleClick(true)}>+</button>
                </div>
                
            </div>
        );
}

var timerInterval = null;
const Timer = ({
    time, 
    setTime, 
    breakLen, 
    setBreakLen, 
    sessionLen, 
    setSessionLen, 
    isActive, 
    setIsActive,
    isSession, 
    setIsSession,
}) => {

    const audio = useRef();

    const reset = () => {
        audio.current.pause()
        audio.current.currentTime = 0;
        setBreakLen(5);
        setSessionLen(25);
        setIsActive(false);
        setIsSession(true);
        setTime(25 * 60)
        clearInterval(timerInterval)
    }

    const convertTime = toConvert => new Date(toConvert * 1000).toISOString().substr(14, 5)
    
    const timerAction = () => {
        if (document.getElementById('time-left').innerHTML==='00:00') {
            audio.current.play()
            setIsSession(prev => !prev);
        }
        setTime(prev => prev - 1);
    }


    const handleClick = () => {
        if (isActive){
            clearInterval(timerInterval);
            setIsActive(false);
        } else {
            timerInterval = setInterval(timerAction, 1000);
            setIsActive(true);
        }
    }

    return (
        <div id="timer-container">
            <h3 id="timer-label">{isSession ? 'Session' : 'Break'}</h3>
            <h4 id="time-left">{convertTime(time)}</h4>
            <div>
                <button id="start-stop" onClick={handleClick}>{isActive? 'Pause' : 'Start'}</button>
                <button id="reset" onClick={reset}>Reset</button>
            </div>
            <audio id="beep" ref={audio} src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'/>
        </div>
    );
}