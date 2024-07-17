import PlayerInfo from "./components/PlayerInfo";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo name={"player-1"} symbol={"X"} />
          <PlayerInfo name={"player-2"} symbol={"O"} />
        </ol>
        Border Game
      </div>
      LOG
    </main>
  );
}

export default App;
