import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Uno from "./pages/uno/uno";
import JoinRoom from "./pages/JoinRoom";
import WaitingRoom from "./pages/WaitingRoom";
import Full from "./pages/Full";
import { io, Socket } from "socket.io-client";

function App() {
  const [roomSize, setRoomSize] = useState(0);
  function roomSizeHandler(input: number) {
    setRoomSize(input);
  }

  const socket: Socket = io("http://localhost:3001"); // this is a mistake (re-rendering causes multiple connections)

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <JoinRoom socket={socket} roomSizeHandler={roomSizeHandler} />
          }
        />
        <Route path="/waiting" element={<WaitingRoom roomSize={roomSize} />} />
        <Route path="/uno" element={<Uno />} />
        <Route path="/full" element={<Full />} />
      </Routes>
    </div>
  );
}

export default App;
