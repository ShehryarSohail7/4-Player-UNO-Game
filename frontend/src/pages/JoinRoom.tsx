import React from "react";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";

interface JoinRoomProps {
  socket: Socket;
  roomSizeHandler: (input: number) => void;
}

const JoinRoom: React.FC<JoinRoomProps> = ({ socket, roomSizeHandler }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    socket.emit("joinRoom", "UNO_mafia");
    socket.on("roomJoinStatus", (status: boolean, roomSize: number) => {
      let navigationflag = status;
      console.log("flag", navigationflag);
      roomSizeHandler(roomSize);
      navigationflag ? navigate("/waiting") : navigate("/full");
    });
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
