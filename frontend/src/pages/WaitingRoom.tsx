import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface props {
  roomSize: number;
}

const WaitingRoom: React.FC<props> = ({ roomSize }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (roomSize === 4) {
      setTimeout(() => {
        navigate("/uno");
      }, 1000);
    }
  }, [roomSize]);

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        {roomSize === 1 ? (
          <h1>{roomSize} player have joined so far</h1>
        ) : (
          <h1>{roomSize} players have joined so far</h1>
        )}
        <p>waiting for other players to join...</p>
      </div>
    </div>
  );
};

export default WaitingRoom;
