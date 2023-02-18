import React, { useState } from "react";
import { GiReceiveMoney } from "../../node_modules/react-icons/gi/index.esm";
import InputField from "../components/fields/InputField";
import Label from "../components/label/Label";
import SelectField from "../components/fields/SelectField";
import ButtonComponent from "../components/button/ButtonComponent";
import TextAreaField from "../components/fields/TextArea";
import {
  FiCloudRain,
  FiEye,
  FiFeather,
  FiGift,
  FiPaperclip,
} from "react-icons/fi";
import { Menu, Text } from "@mantine/core";
import { MdColorLens } from "react-icons/md";
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

  // orange
  theme4: {
    backgroundColor: "#faddca",
    backgroundImage: `url("http://${host}/assets/orann.jpeg")`,
    headerColor: "#fc9403",
    buttonColor: "#edaf6d",
    nextColor: "orange",
  },

  // grape or violet
  theme3: {
    backgroundColor: "#f2dcfa",
    backgroundImage: `url("http://${host}/assets/purpr.webp")`,
    headerColor: "#995ead",
    buttonColor: "#c895f5",
    nextColor: "grape",
  },

  // red
  theme2: {
    backgroundColor: "#facfcf",
    backgroundImage: `url("http://${host}/assets/redwall.jpeg")`,
    headerColor: "#ed716d",
    buttonColor: "#ed716d",
    nextColor: "red",
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
  return (
    <div>
      <div
        className="cash__deposit"
        style={{ backgroundColor: themeState.backgroundColor, height: "110vh" }}
      >
        {/**Header */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              paddingRight: "15px",
              color: "white",
              height: "50px",
              marginBottom: "20px",
              backgroundColor: themeState.headerColor,
              fontSize: "20px",
              textTransform: "uppercase",
              fontWeight: "700",
              paddingLeft: "15px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "10px", marginBottom: "5px" }}>
                <GiReceiveMoney />
              </div>
              <div>Cash Deposit</div>
            </div>

            <div>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Text>
                    <MdColorLens size={24} />
                  </Text>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Choose a theme</Menu.Label>
                  <div onClick={themeColor4}>
                    <Menu.Item
                      icon={<FiCloudRain size={14} color={"orange"} />}
                      style={{ color: "orange" }}
                    >
                      Orange
                    </Menu.Item>
                  </div>

                  <div onClick={themeColor1}>
                    <Menu.Item
                      icon={<FiEye size={14} color={"blue"} />}
                      style={{ color: "blue" }}
                    >
                      Blue
                    </Menu.Item>
                  </div>

                  <div onClick={themeColor2}>
                    <Menu.Item
                      icon={<FiPaperclip size={14} color={"red"} />}
                      style={{ color: "red" }}
                    >
                      Red
                    </Menu.Item>
                  </div>

                  <div onClick={themeColor5}>
                    <Menu.Item
                      icon={<FiFeather size={14} color={"green"} />}
                      style={{ color: "green" }}
                    >
                      Green
                    </Menu.Item>
                  </div>

                  <div onClick={themeColor3}>
                    <Menu.Item
                      icon={<FiGift size={14} color={"purple"} />}
                      style={{ color: "purple" }}
                    >
                      Grape
                    </Menu.Item>
                  </div>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
        </div>
        {/**Top Level */}
        <div className="button-section" style={{ display: "flex" }}>
          <div className="action-button">
            <ButtonComponent
              label="Print Receipt"
              buttonBackgroundColor={themeState.headerColor}
              buttonWidth="170px"
              buttonHeight="40px"
              buttonColor="white"
            />
          </div>

          <div className="action-button">
            <ButtonComponent
              label="View Voucher"
              buttonBackgroundColor={themeState.headerColor}
              buttonWidth="170px"
              buttonHeight="40px"
              buttonColor="white"
            />
          </div>
        </div>
        <div
          className="cashDeposit__container"
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            backgroundColor: "white",
            boxShadow: "0px -1px 9px -1px rgba(0,0,0,0.75)",
            marginLeft: "15px",
            marginRight: "15px",
            borderRadius: "5px",
          }}
        >
          {/**Left Section */}
          <div
            style={{
              flex: "0.5",
              padding: "20px",
              borderRadius: "4px",
            }}
          >
            <InputField
              label={"Transaction Type"}
              labelWidth={"40%"}
              inputWidth={"50%"}
            />

            <InputField
              label={"Credit Account"}
              labelWidth={"40%"}
              inputWidth={"50%"}
              required={true}
            />

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
              inputWidth={"50%"}
              required={true}
            />
            <SelectField
              label={"Source of Funds"}
              labelWidth={"40%"}
              inputWidth={"50%"}
            />
            <SelectField
              label={"Third Party Transaction"}
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
              buttonWidth="30%"
              buttonHeight="35px"
              buttonColor="white"
            />
            <InputField
              label={"Value Date"}
              type="date"
              labelWidth={"40%"}
              inputWidth={"50%"}
            />

            <InputField
              label={"A/C Number"}
              labelWidth={"40%"}
              inputWidth={"50%"}
            />

            <TextAreaField
              labelWidth={"40%"}
              inputWidth={"50%"}
              label={"Narration"}
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

        {/**Lower Level */}
        <div
          style={{
            marginTop: "10px",
            marginLeft: "15px",
            marginBottom: "15px",
          }}
        >
          <Label
            label="Account Balance"
            color={themeState.headerColor}
            fontWeight={700}
            fontSize={24}
          />
        </div>

        <div
          className="cashDeposit__container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            boxShadow: "0px -1px 9px -1px rgba(0,0,0,0.75)",
            marginLeft: "15px",
            marginRight: "15px",
            borderRadius: "5px",
          }}
        >
          <div style={{ flex: 0.5, padding: "20px", borderRadius: "4px" }}>
            <InputField
              label={"Permitted Balance"}
              type="number"
              labelWidth={"40%"}
              inputWidth={"50%"}
              disabled={true}
            />
            <InputField
              label={"Ledger Balance"}
              type="number"
              labelWidth={"40%"}
              inputWidth={"50%"}
              disabled={true}
            />
          </div>
          <div style={{ flex: "0.5", padding: "20px", borderRadius: "4px" }}>
            <InputField
              label={"Available Balance"}
              type="number"
              labelWidth={"40%"}
              inputWidth={"50%"}
              disabled={true}
            />
            <InputField
              label={"Account Branch"}
              type="number"
              labelWidth={"40%"}
              inputWidth={"50%"}
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CashDeposit;
