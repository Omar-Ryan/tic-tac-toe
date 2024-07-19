import React, { useState } from "react";

const PlayerInfo = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEdit, SetIsEdit] = useState(false);

  function handleEditCleck() {
    SetIsEdit((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editPlayerName = <span className="player-name">{playerName}</span>;
  if (isEdit) {
    editPlayerName = (
      <input
        type="text"
        required
        placeholder="the name"
        Value={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditCleck}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
};

export default PlayerInfo;
