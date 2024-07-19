import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((currActPlayer) => (currActPlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highLight-player">
          <PlayerInfo
            initialName={"player-1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
          <PlayerInfo
            initialName={"player-2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
