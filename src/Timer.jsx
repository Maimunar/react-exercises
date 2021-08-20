import React, { useRef } from 'react'
var timerInterval = null;
export const Timer = ({
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

    const convertTime = prev => {
        const MIN = Math.floor(prev/60);
        const SEC = Math.floor(prev%60);
        return `${MIN < 10 ? `0${MIN}` : MIN}:${SEC < 10 ? `0${SEC}` : SEC}`
    }

    // const convertTime = toConvert => new Date(toConvert * 1000).toISOString().substr(14, 5)
    
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
                <button id="start_stop" onClick={handleClick}>{isActive? 'Pause' : 'Start'}</button>
                <button id="reset" onClick={reset}>Reset</button>
            </div>
            <audio id="beep" ref={audio} src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'/>
        </div>
    );
}