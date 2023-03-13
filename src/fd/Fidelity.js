import React from "react";
import { FiChevronDown } from "react-icons/fi";
import HeaderComponent from "./components/HeaderComponent";
import PersonalLoan from "./components/PersonalLoan";
import SliderComponent from "./components/SliderComponent";

function Fidelity() {
  const host = window.location.host;
  return (
    <div style={{ backgroundColor: "#fae9de" }}>
      <HeaderComponent />
      <div style={{ padding: "7px" }}>
        <div>
          <h5 style={{ padding: "9px" }}>Loan Calculator</h5>
          <div
            style={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              borderRadius: "5px",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <h5
              style={{
                textAlign: "center",
                color: "black",
              }}
            >
              Personal Use
            </h5>

            <br />
            <div
              style={{
                border: "2px solid #e6d1c3",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              <SliderComponent
                title={"Loan Amount"}
                min={1000}
                max={30000}
                step={500}
                defaultValue={30000}
                description={"EUR"}
                marks={[
                  { value: 1000, label: "1,000" },
                  { value: 5000, label: "5,000" },
                  { value: 10000, label: "10,000" },
                  { value: 15000, label: "15,000" },
                  { value: 20000, label: "20,000" },
                  { value: 25000, label: "25,000" },
                  { value: 30000, label: "30,000" },
                ]}
              />
              <br />
              <br />
              <br />

              <div>
                <SliderComponent
                  title={"Duration"}
                  min={0}
                  max={120}
                  step={12}
                  defaultValue={120}
                  description={"Months"}
                  marks={[
                    { value: 1, label: "1" },
                    { value: 12, label: "12" },
                    { value: 24, label: "24" },
                    { value: 36, label: "36" },
                    { value: 48, label: "48" },
                    { value: 60, label: "60" },
                    { value: 72, label: "72" },
                    { value: 84, label: "84" },
                    { value: 96, label: "96" },
                    { value: 108, label: "108" },
                    { value: 120, label: "120" },
                  ]}
                />
              </div>
              <br />
              <br />
              <br />

              <hr />

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h5>Optional loan options</h5>
                  <FiChevronDown size={25} />
                </div>

                <div>
                  <input
                    id="montly_net_income"
                    name="montly_net_income"
                    type="checkbox"
                    style={{ marginRight: "10px" }}
                  />
                  <label>Montly net income is over 1000 EUR</label>
                </div>
              </div>
            </div>

            <br />

            <div style={{ textAlign: "center" }}>
              <button
                style={{
                  backgroundColor: "#e87c32",
                  color: "white",
                  width: "200px",
                  height: "40px",
                  border: "none",
                  borderRadius: "4px",
                  fontSize: "18px",
                }}
              >
                Calculate
              </button>
            </div>
            <br />
          </div>
        </div>

        <br />
        <br />

        <div
          style={{
            boxShadow:
              "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            borderRadius: "5px",
            padding: "10px",
            backgroundColor: "white",
          }}
        >
          <h4>Results</h4>

          <div>
            <PersonalLoan />
            <br />
            <PersonalLoan />
            <br />
            <PersonalLoan />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fidelity;
