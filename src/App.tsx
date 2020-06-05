import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [clickedKey, setClickedKey] = useState("");
  const [name, setName] = useState("Hey mate😆");

  const titles: { [key: string]: string } = {
    "81": "Clonk 😏",
    "87": "Ignition 😁",
    "69": "Meep 🤣",
    "65": "Blonky 😴",
    "83": "Bwip 🤪",
    "68": "Tinkle 👻",
    "90": "Spindown 👽",
    "88": "Metal 🥴",
    "67": "Twotone 🤓",
  };

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
      setClickedKey(key);
      setName(titles[key]);
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

  const handleTransitionEnd = () => {
    setClickedKey("");
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="App">
      <div className="title-drum-machine">Drum Machine</div>
      <div id="drum-machine">
        <div className="container1">
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "81" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#ffadad" }}
            data-key="81"
            onClick={handleClick}
          >
            Q
          </button>
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "87" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#ffd6a5" }}
            data-key="87"
            onClick={handleClick}
          >
            W
          </button>
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "69" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#fdffb6" }}
            data-key="69"
            onClick={handleClick}
          >
            E
          </button>
        </div>
        <div className="container2">
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "65" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#caffbf" }}
            data-key="65"
            onClick={handleClick}
          >
            A
          </button>
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "83" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#9bf6ff" }}
            data-key="83"
            onClick={handleClick}
          >
            S
          </button>
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "68" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#a0c4ff" }}
            data-key="68"
            onClick={handleClick}
          >
            D
          </button>
        </div>
        <div className="container3">
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "90" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#bdb2ff" }}
            data-key="90"
            onClick={handleClick}
          >
            Z
          </button>
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "88" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#ffc6ff" }}
            data-key="88"
            onClick={handleClick}
          >
            X
          </button>
          <button
            onTransitionEnd={handleTransitionEnd}
            className={
              clickedKey === "67" ? "drum-button clicked" : "drum-button"
            }
            style={{ backgroundColor: "#ffadad" }}
            data-key="67"
            onClick={handleClick}
          >
            C
          </button>
        </div>
      </div>
      <div className="title">{name}</div>
    </div>
  );
}

export default App;
