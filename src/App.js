import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CashDeposit from "./screens/CashDeposit";
import Test from "./screens/Test";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CashDeposit />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
