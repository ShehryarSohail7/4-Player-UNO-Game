import React, { useState } from "react";

const WaitingRoom = () => {
  const [totalPlayers, setTotalPlayers] = useState(1);

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        {totalPlayers === 1 ? (
          <h1>{totalPlayers} player have joined so far</h1>
        ) : (
          <h1>{totalPlayers} players have joined so far</h1>
        )}
        <p>waiting for other players to join...</p>
      </div>
    </div>
  );
};

export default WaitingRoom;
