import React from 'react'

export const SessionContainer = ({sessionLen, setSessionLen, isActive}) => {
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