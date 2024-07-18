const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  return (
    <ol id="game-board">
      {initialBoard.map((raw, rawIndex) => (
        <li key={rawIndex}>
          {raw.map((playerSymbol, colIndex) => (
            <ol key={colIndex}>
              <button>{playerSymbol}</button>
            </ol>
          ))}
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
