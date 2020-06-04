import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [sounds] = useState<{ [key: string]: HTMLAudioElement }>({
    "81": new Audio("/music/fm_clonk.wav"),
    "87": new Audio("/music/ignition-hit.wav"),
    "69": new Audio("/music/meep.wav"),
    "65": new Audio("/music/blonky.wav"),
    "83": new Audio("/music/bwip-1.wav"),
    "68": new Audio("/music/echoing-tinkle-hit.wav"),
    "90": new Audio("/music/fx-spindown.wav"),
    "88": new Audio("/music/metal-decay.wav"),
    "67": new Audio("/music/twotone-808-cowbell.wav"),
  });

  const playSound = (key: string) => {
    if (key && sounds[key]) {
      sounds[key].currentTime = 0;
      sounds[key].play();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { key } = e.currentTarget.dataset;
    playSound(key as string);
  };

  const handleKeydown = (e: KeyboardEvent) => {
    const keyCode = e.keyCode.toString();
    playSound(keyCode);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div id="drum-machine" className="App">
      <button data-key="81" onClick={handleClick}>
        Q
      </button>
      <button data-key="87" onClick={handleClick}>
        W
      </button>
      <button data-key="69" onClick={handleClick}>
        E
      </button>
      <button data-key="65" onClick={handleClick}>
        A
      </button>
      <button data-key="83" onClick={handleClick}>
        S
      </button>
      <button data-key="68" onClick={handleClick}>
        D
      </button>
      <button data-key="90" onClick={handleClick}>
        Z
      </button>
      <button data-key="88" onClick={handleClick}>
        X
      </button>
      <button data-key="67" onClick={handleClick}>
        C
      </button>
    </div>
  );
}

export default App;
