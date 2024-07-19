import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
  const [gameBoard, setGameBoard] = useState(initialBoard);
  function handleSelectSquare(rawIndex, colIndex) {
    setGameBoard((prevBoard) => {
      const updateBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      updateBoard[rawIndex][colIndex] = activePlayerSymbol;
      return updateBoard;
    });
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {initialBoard.map((raw, rawIndex) => (
        <li key={rawIndex}>
          {raw.map((playerSymbol, colIndex) => (
            <ol key={colIndex}>
              <button onClick={() => handleSelectSquare(rawIndex, colIndex)}>
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
