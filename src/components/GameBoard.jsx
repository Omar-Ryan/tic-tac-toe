// import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, turns }) => {
  let gameBoard = initialBoard;

  for (const turn of turns) {
    const { square, player } = turns;
    const { raw, col } = square;
    gameBoard[(raw, col)] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialBoard);
  // function handleSelectSquare(rawIndex, colIndex) {
  //   setGameBoard((prevBoard) => {
  //     const updateBoard = [...prevBoard.map((innerArray) => [...innerArray])];
  //     updateBoard[rawIndex][colIndex] = activePlayerSymbol;
  //     return updateBoard;
  //   });
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((raw, rawIndex) => (
        <li key={rawIndex}>
          {raw.map((playerSymbol, colIndex) => (
            <ol key={colIndex}>
              <button onClick={() => onSelectSquare(rawIndex, colIndex)}>
                {playerSymbol}
              </button>
            </ol>
          ))}
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
