import React, { useState } from "react";
import InputField from "../components/fields/InputField";
import Label from "../components/label/Label";
import SelectField from "../components/fields/SelectField";
import ButtonComponent from "../components/button/ButtonComponent";
import TextAreaField from "../components/fields/TextArea";
import ListOfValue from "../components/fields/ListOfValue";
import DataTable from "../components/data-table/DataTable";
import ButtonType from "../components/button/ButtonType";
const host = window.location.host;

const themes = {
  // default color
  defaultColorTheme: {
    backgroundColor: "#fff",
    backgroundImage: `url("http://${host}/assets/purple.jpeg")`,
    headerColor: "#845ef6",
    buttonColor: "#845ef6",
    nextColor: "violet",
  },

  // blue
  theme1: {
    backgroundColor: "#c8d6e8",
    backgroundImage: `url("http://${host}/assets/blue.png")`,
    headerColor: "rgb(21 163 183)",
    buttonColor: "rgb(66, 157, 232)",
    nextColor: "cyan",
  },

  // red
  theme2: {
    backgroundColor: "#facfcf",
    backgroundImage: `url("http://${host}/assets/redwall.jpeg")`,
    headerColor: "#ed716d",
    buttonColor: "#ed716d",
    nextColor: "red",
  },
  // grape or violet
  theme3: {
    backgroundColor: "#f2dcfa",
    backgroundImage: `url("http://${host}/assets/purpr.webp")`,
    headerColor: "#995ead",
    buttonColor: "#c895f5",
    nextColor: "grape",
  },
  // orange
  theme4: {
    backgroundColor: "#faddca",
    backgroundImage: `url("http://${host}/assets/orann.jpeg")`,
    headerColor: "#fc9403",
    buttonColor: "#edaf6d",
    nextColor: "orange",
  },

  // green
  theme5: {
    backgroundColor: "#b1fcb2",
    backgroundImage: `url("http://${host}/assets/leaf.jpeg")`,
    headerColor: "#008000a7",
    buttonColor: "#4eb550",
    nextColor: "green",
  },
};
function CashDeposit() {
  const [themeState, setThemeState] = useState(themes.theme1);

  //dropzone section
  function defaultColorTheme() {
    setThemeState(themes.defaultColorTheme);
  }

  function themeColor1() {
    setThemeState(themes.theme1);
  }

  function themeColor2() {
    setThemeState(themes.theme2);
  }

  function themeColor3() {
    setThemeState(themes.theme3);
  }

  function themeColor4() {
    setThemeState(themes.theme4);
  }

  function themeColor5() {
    setThemeState(themes.theme5);
  }

  // creating states to be used in the application
  const [permittedBal, setPermittedBal] = useState();
  const [availableBal, setAvailableBal] = useState();
  const [ledgerBal, setLedgerBal] = useState();
  const [accountBranch, setAccountBranch] = useState();
  const [transactionType, setTransactionType] = useState("CADD - CASH DEPOSIT");
  const handleEnter = () => {
    alert("Populate");
  };

  return (
    <div>
      <div
        className="cash__deposit"
        style={{
          backgroundColor: themeState.backgroundColor,
          paddingTop: "35px",
        }}
      >
        {/**Header */}

        {/**Top Level */}
        <div className="button-section" style={{ display: "flex" }}>
          <div className="action-button">
            <ButtonComponent
              label="Find By ID"
              buttonBackgroundColor={themeState.headerColor}
              buttonWidth="130px"
              buttonHeight="34px"
              buttonColor="white"
            />
          </div>

          <div className="action-button">
            <ButtonComponent
              label="Find By Number"
              buttonBackgroundColor={themeState.headerColor}
              buttonWidth="130px"
              buttonHeight="34px"
              buttonColor="white"
            />
          </div>
          <div className="action-button">
            <ButtonComponent
              label="Print Receipt"
              buttonBackgroundColor={themeState.headerColor}
              buttonWidth="130px"
              buttonHeight="34px"
              buttonColor="white"
            />
          </div>

          <div className="action-button">
            <ButtonComponent
              label="View Voucher"
              buttonBackgroundColor={themeState.headerColor}
              buttonWidth="130px"
              buttonHeight="34px"
              buttonColor="white"
            />
          </div>
        </div>

        {/*Whole card*/}
        <div className="whole-section" style={{ display: "flex" }}>
          {/*The left Card*/}
          <div
            className="cashDeposit__container"
            style={{
              display: "flex",
              flex: 0.7,
              justifyContent: "space-between",
              backgroundColor: "white",
              boxShadow: "4px 5px 15px -1px rgba(105,105,105,0.75)",
              marginLeft: "15px",
              marginRight: "15px",
              borderRadius: "5px",
            }}
          >
            {/**Left Section */}
            <div
              className="left-section"
              style={{
                flex: "0.5",
                // padding: "20px",
                borderRadius: "4px",
              }}
            >
              <InputField
                label={"Transaction Type"}
                labelWidth={"40%"}
                inputWidth={"50%"}
                disabled={true}
                value={transactionType}
              />
              <div onKeyDown={(e) => e.key === "Enter" && handleEnter()}>
                <InputField
                  label={"Credit Account"}
                  labelWidth={"40%"}
                  inputWidth={"50%"}
                  required={true}
                  type="number"
                />
              </div>

              <InputField
                label={"Currency"}
                labelWidth={"40%"}
                inputWidth={"50%"}
                required={true}
              />
              <InputField
                label={"Product"}
                labelWidth={"40%"}
                inputWidth={"50%"}
              />

              <InputField
                label={"Amount "}
                type="number"
                labelWidth={"40%"}
                inputWidth={"25%"}
                required={true}
              />
              <SelectField
                label={"Source of Funds"}
                labelWidth={"40%"}
                inputWidth={"50%"}
              />
              <SelectField
                label={"3rd Party Transaction"}
                labelWidth={"40%"}
                description={"Select Yes/No"}
                type="select"
                inputWidth={"50%"}
                option1={"YES"}
                option2={"NO"}
              />
            </div>

            {/*Right section*/}
            <div
              style={{
                flex: "0.5",
                padding: "20px",
                borderRadius: "4px",
              }}
            >
              <InputField
                label={"Voucher Ref"}
                labelWidth={"40%"}
                inputWidth={"50%"}
              />
              <ButtonComponent
                label="SigVer"
                buttonBackgroundColor={themeState.headerColor}
                buttonWidth="100px"
                buttonHeight="34px"
                buttonColor="white"
              />
              <InputField
                label={"Value Date"}
                type="date"
                labelWidth={"40%"}
                inputWidth={"50%"}
              />

              <ListOfValue
                label="List of Value"
                labelWidth={"40%"}
                inputWidth={"50%"}
              />

              <InputField
                label={"A/C Name"}
                labelWidth={"40%"}
                inputWidth={"50%"}
              />
              <TextAreaField
                labelWidth={"40%"}
                inputWidth={"50%"}
                label={"Narration 1"}
                required={true}
              />
              <InputField
                label={"Deposit By"}
                required={true}
                labelWidth={"40%"}
                inputWidth={"50%"}
              />
              <InputField
                label={"Contact / Telephone"}
                type="number"
                labelWidth={"40%"}
                inputWidth={"50%"}
              />
            </div>
          </div>

          {/**Right Sectionn Read Only */}
          <div className="read-only-section" style={{ flex: 0.3 }}>
            {/* <hr /> */}

            <div
              style={{
                backgroundColor: "white",
                boxShadow: "4px 5px 15px -1px rgba(105,105,105,0.75)",
                marginLeft: "15px",
                marginRight: "15px",
                borderRadius: "5px",
                paddingLeft: "15px",
                paddingRight: "15px",
                height: "100%",
                width: "90%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    marginLeft: "15px",
                    marginBottom: "15px",
                    textAlign: "center",
                  }}
                >
                  <Label
                    label="Account Balance"
                    color={themeState.headerColor}
                    fontWeight={700}
                    fontSize={24}
                  />
                </div>

                <InputField
                  label={"Permitted Balance"}
                  type="number"
                  labelWidth={"70%"}
                  inputWidth={"70%"}
                  disabled={true}
                  value={permittedBal}
                />
                <br />
                <InputField
                  label={"Ledger Balance"}
                  type="number"
                  labelWidth={"70%"}
                  inputWidth={"70%"}
                  disabled={true}
                  value={ledgerBal}
                />
                <br />

                <InputField
                  label={"Available Balance"}
                  type="number"
                  labelWidth={"70%"}
                  inputWidth={"70%"}
                  disabled={true}
                  value={availableBal}
                />
                <br />

                <InputField
                  label={"Account Branch"}
                  type="number"
                  labelWidth={"70%"}
                  inputWidth={"70%"}
                  disabled={true}
                  value={accountBranch}
                />
              </div>
            </div>
          </div>
          {/*End of Right Section*/}
        </div>

        <br />
        <br />
        <br />
        <DataTable />
      </div>
    </div>
  );
}

export default CashDeposit;
