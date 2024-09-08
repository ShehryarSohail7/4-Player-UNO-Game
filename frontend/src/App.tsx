import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Uno from "./pages/uno/uno";
import JoinRoom from "./pages/JoinRoom";
import WaitingRoom from "./pages/WaitingRoom";
import Full from "./pages/Full";
import { io } from "socket.io-client";

function App() {
  useEffect(() => {
    const socket = io("http://localhost:3001");
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<JoinRoom />} />
        <Route path="/waiting" element={<WaitingRoom />} />
        <Route path="/uno" element={<Uno />} />
        <Route path="/full" element={<Full />} />
      </Routes>
    </div>
  );
}

export default App;
