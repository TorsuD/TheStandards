import React from "react";
import { FiFeather } from "react-icons/fi";
import { Menu, Button, Text } from "@mantine/core";

function HeaderComponent({ icon, title }) {
  return (
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
          backgroundColor: "rgb(21 163 183)",
          fontSize: "20px",
          textTransform: "uppercase",
          fontWeight: "700",
          paddingLeft: "15px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px", marginBottom: "5px" }}>{icon}</div>
          <div>{title}</div>
        </div>

        <div>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Text>
                <FiFeather />
              </Text>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item icon={<FiFeather size={14} />}>Blue</Menu.Item>
              <Menu.Item icon={<FiFeather size={14} />}>Orange</Menu.Item>
              <Menu.Item icon={<FiFeather size={14} />}>Red</Menu.Item>
              <Menu.Item icon={<FiFeather size={14} />}>Green</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
