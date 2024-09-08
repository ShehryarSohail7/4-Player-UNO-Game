import React from "react";
import { useNavigate } from "react-router-dom";

const JoinRoom = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/waiting");
  };

  return (
    <div>
      <input title="player_id" type="text" placeholder="Enter player ID " />
      <button title="submit" onClick={handleClick}>
        Enter the Room
      </button>
    </div>
  );
};

export default JoinRoom;
