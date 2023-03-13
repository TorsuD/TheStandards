import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CashDeposit from "./CashDeposit/index";
import Test from "./screens/Test";
import Temp from "./sacco";
import LoanEnquiry from "./loan_enquiry";
import Fidelity from "./fd/Fidelity";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CashDeposit />} />
          <Route path="/test" element={<Test />} />
          <Route path="/sacco" element={<Temp />} />
          <Route path="/loan_enquiry" element={<LoanEnquiry />} />
          <Route path="/fidelity" element={<Fidelity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
