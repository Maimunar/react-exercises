import React from 'react'

export const BreakContainer = ({breakLen, setBreakLen, isActive}) => {
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