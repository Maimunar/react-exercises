import React, {useState} from 'react';
import './App.css';
import { Display } from './Display';
import { Drum } from './Drum';

import {KEYS} from './keys'

const App = () => {
  const [selected, setSelected] = useState("None");
  document.addEventListener("keydown", (e) => {
    KEYS.forEach((key) => {
      if (e.key.toUpperCase() === key.key) {
        const audio = document.getElementById(key.key);
        setSelected(key.title);
        return audio.play();
      }
    });
  });
  return (
    <>
      <h1>Drum machine</h1>
      <div id="drum-machine">
        <Display info={selected} />
        {KEYS.map((key) => (
          <Drum info={key} setSelected={setSelected} />
        ))}
      </div>
    </>
  );
};

export default App;
