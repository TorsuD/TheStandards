import React, { useState } from "react";
import {
  FiCalendar,
  FiChevronDown,
  FiCompass,
  FiFolder,
  FiHome,
  FiMessageSquare,
  FiMoon,
  FiPhone,
  FiPlusSquare,
  FiPower,
  FiSearch,
  FiSun,
  FiToggleLeft,
  FiToggleRight,
  FiUser,
} from "react-icons/fi";

function HeaderComponent() {
  const host = window.location.host;
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "black",
          padding: "10px",
          color: "white",
        }}
      >
        <div>
          <img
            src={`http://${host}/assets/fid.png`}
            style={{ height: "45px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginLeft: "20px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", fontSize: "13px" }}>
              <div>
                <FiUser style={{ marginBottom: "4px", marginRight: "6px" }} />
              </div>
              <div>Anna Smith</div>
              <div>
                <FiChevronDown style={{ marginLeft: "7px" }} />
              </div>
            </div>

            <div
              style={{ display: "flex", fontSize: "13px", marginLeft: "20px" }}
            >
              <div>
                <FiPhone style={{ marginBottom: "4px", marginRight: "6px" }} />
              </div>
              <div>Contacts</div>
              <div>
                <FiChevronDown style={{ marginLeft: "7px" }} />
              </div>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div
              style={{
                marginRight: "20px",
              }}
            >
              <FiCalendar
                style={{
                  backgroundColor: "#e87c32",
                  padding: "4px",
                  borderRadius: "10px",
                }}
                size={24}
              />
            </div>
            <div>
              <FiSearch style={{ marginRight: "20px" }} />
            </div>
            <div>
              <FiSun style={{ marginRight: "20px" }} />
            </div>
            <div style={{ marginRight: "20px" }} onClick={handleClick}>
              {click ? (
                <FiToggleRight size={24} color={"orange"} />
              ) : (
                <FiToggleLeft size={24} />
              )}
            </div>
            <div>
              <FiMoon style={{ marginRight: "20px" }} />
            </div>
            <div style={{ marginRight: "20px" }}>EN</div>
            <div>
              <FiPower style={{ marginRight: "20px" }} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "#e87c32",
          color: "white",
          padding: "7px",
          cursor: "pointer",
        }}
      >
        <div>
          <FiHome
            style={{
              marginRight: "10px",
              marginBottom: "5px",
            }}
          />
          Home
        </div>

        <div>
          <FiCompass
            style={{
              marginRight: "10px",
              marginBottom: "5px",
            }}
          />
          Loan Applications
        </div>

        <div>
          <FiMessageSquare
            style={{
              marginRight: "10px",
              marginBottom: "5px",
            }}
          />
          Messages
        </div>

        <div>
          <FiFolder
            style={{
              marginRight: "10px",
              marginBottom: "5px",
            }}
          />
          Documents
        </div>

        <div
          style={{
            border: "2px solid orange",
            padding: "2px",
            borderRadius: "4px",
          }}
        >
          <FiPlusSquare
            style={{
              marginRight: "10px",
              marginBottom: "5px",
            }}
          />
          Start new application
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
