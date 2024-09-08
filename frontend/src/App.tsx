import React from "react";
import { Route, Routes } from "react-router-dom";
import Uno from "./pages/uno/uno";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Uno />} />
      </Routes>
    </div>
  );
}

export default App;
