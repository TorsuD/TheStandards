import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CashDeposit from "./screens/CashDeposit";
import Test from "./screens/Test";
import Temp from "./sacco";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CashDeposit />} />
          <Route path="/test" element={<Test />} />
          <Route path="/sacco" element={<Temp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
