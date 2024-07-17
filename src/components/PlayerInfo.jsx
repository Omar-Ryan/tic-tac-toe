import React, { useState } from "react";

const PlayerInfo = ({ name, symbol }) => {
  const [isEdit, SetIsEdit] = useState(false);

  function handleEditing() {
    SetIsEdit(!isEdit);
  }

  let playerName = <span className="player-name">{name}</span>;
  if (isEdit) {
    playerName = <input type="text" required placeholder="the name" />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
};

export default PlayerInfo;
