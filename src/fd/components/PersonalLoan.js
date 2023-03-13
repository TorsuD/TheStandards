import React from "react";
import { FiChevronRight, FiInbox } from "react-icons/fi";

function PersonalLoan() {
  return (
    <div
      style={{
        boxShadow:
          "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        borderRadius: "5px",
        padding: "10px",
        margin: "5px",
        // backgroundColor: "#e87c32",
        backgroundColor: "#292928",
        color: "white",
      }}
    >
      <div>
        <div
          style={{
            color: "white",
            fontSize: "20px",
            // fontWeight: "700",
            color: "#e87c32",
          }}
        >
          <FiInbox
            style={{
              marginRight: "10px",
              color: "#e87c32",
              marginBottom: "5px",
              fontWeight: "700",
            }}
          />
          Personal Loan EUR#1
        </div>
        <br />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div>Installment</div>
          <div style={{ fontSize: "24px", color: "white", fontWeight: "700" }}>
            38 EUR
          </div>
        </div>

        <div>
          <div>Arrival Interest Rate</div>
          <div style={{ fontSize: "24px" }}>5.65</div>
        </div>

        <div>
          <div>APR</div>
          <div
            style={{
              fontSize: "24px",
              color: "white",
              fontWeight: "700 !important",
            }}
          >
            5.65%
          </div>
        </div>

        <div>
          <div>Total sum to be paid</div>
          <div style={{ fontSize: "24px" }}>2 280 EUR</div>
        </div>

        <button
          style={{
            backgroundColor: "#e87c32",
            color: "white",
            width: "100px",
            height: "35px",
            border: "none",
            borderRadius: "4px",
            fontSize: "18px",
          }}
        >
          Apply
          <FiChevronRight color={"white"} />
        </button>
      </div>
    </div>
  );
}

export default PersonalLoan;
