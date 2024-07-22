const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <ol id="game-board">
      {board.map((raw, rawIndex) => (
        <li key={rawIndex}>
          {raw.map((playerSymbol, colIndex) => (
            <ol key={colIndex}>
              <button
                onClick={() => onSelectSquare(rawIndex, colIndex)}
                disabled={playerSymbol !== null}
              >
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
