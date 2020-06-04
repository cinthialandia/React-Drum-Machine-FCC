import React, { useState, useEffect } from "react";
import "./App.css";

interface AudioList {
  [key: string]: { audio: HTMLAudioElement; title: string };
}

function App() {
  const [name, setName] = useState("Hola perras!");

  const [sounds] = useState<AudioList>({
    "81": { audio: new Audio("/music/fm.wav"), title: "fm" },
    "87": { audio: new Audio("/music/ignition.wav"), title: "ignition" },
    "69": { audio: new Audio("/music/meep.wav"), title: "meep" },
    "65": { audio: new Audio("/music/blonky.wav"), title: "blonky" },
    "83": { audio: new Audio("/music/bwip.wav"), title: "bwip" },
    "68": { audio: new Audio("/music/echoing.wav"), title: "echoing" },
    "90": { audio: new Audio("/music/fx.wav"), title: "fx" },
    "88": { audio: new Audio("/music/metal.wav"), title: "metal" },
    "67": { audio: new Audio("/music/twotone.wav"), title: "twotone" },
  });

  const playSound = (key: string) => {
    if (key && sounds[key]) {
      sounds[key].audio.currentTime = 0;
      sounds[key].audio.play();
      setName(sounds[key].title);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(sounds);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="drum-machine" className="App">
      <button id="fm" className="drum-pad" data-key="81" onClick={handleClick}>
        Q<audio id="Q" className="clip" src="/music/fm.wav"></audio>
      </button>
      <button
        id="ignition"
        className="drum-pad"
        data-key="87"
        onClick={handleClick}
      >
        W<audio id="W" className="clip" src="/music/ignition.wav"></audio>
      </button>
      <button
        id="meep"
        className="drum-pad"
        data-key="69"
        onClick={handleClick}
      >
        E<audio id="E" className="clip" src="/music/meep.wav"></audio>
      </button>
      <button
        id="blonky"
        className="drum-pad"
        data-key="65"
        onClick={handleClick}
      >
        A<audio id="A" className="clip" src="/music/blonky.wav"></audio>
      </button>
      <button
        id="bwip"
        className="drum-pad"
        data-key="83"
        onClick={handleClick}
      >
        S<audio id="S" className="clip" src="/music/bwip.wav"></audio>
      </button>
      <button
        id="echoing"
        className="drum-pad"
        data-key="68"
        onClick={handleClick}
      >
        D<audio id="D" className="clip" src="/music/echoing.wav"></audio>
      </button>
      <button id="fx" className="drum-pad" data-key="90" onClick={handleClick}>
        Z<audio id="Z" className="clip" src="/music/fx.wav"></audio>
      </button>
      <button
        id="metal"
        className="drum-pad"
        data-key="88"
        onClick={handleClick}
      >
        X<audio id="X" className="clip" src="/music/metal.wav"></audio>
      </button>
      <button
        id="twotone"
        className="drum-pad"
        data-key="67"
        onClick={handleClick}
      >
        C<audio id="X" className="clip" src="/music/twotone.wav"></audio>
      </button>
      <div id="display">{name}</div>
    </div>
  );
}

export default App;
