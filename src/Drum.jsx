import React from 'react'

export const Drum = ({ info, setSelected }) => {
    const handleClick = (e) => {
      const audio = document.getElementById(info.key);
      setSelected(info.title);
      audio.play();
    };
    return (
      <div id={`audio-${info.key}`} class="drum-pad" onClick={handleClick}>
        <audio id={info.key} src={info.sound} className="clip" />
        {info.key}
      </div>
    );
  };