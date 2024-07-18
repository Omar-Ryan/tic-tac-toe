import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo initialName={"player-1"} symbol={"X"} />
          <PlayerInfo initialName={"player-2"} symbol={"O"} />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
