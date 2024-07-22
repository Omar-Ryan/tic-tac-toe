import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";
import { WINNING_COMBINATIONS } from "./winning-combination";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  let activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { raw, col } = square;
    gameBoard[(raw, col)] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].raw][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].raw][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].raw][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rawIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { raw: rawIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
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
        {winner && <p>you won, {winner} !</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
