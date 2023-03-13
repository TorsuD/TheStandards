import React from "react";
import { Select } from "@mantine/core";
import { FiChevronDown } from "react-icons/fi";

function SelectField({ labelWidth, inputWidth, label, placeholder, lovData }) {
  //   const dat = ["male", "female", "other"];
  return (
    <div
      className="flex-fallen"
      style={{
        display: "flex",
        alignItems: "center",
        margin: "10px",
        whiteSpace: "nowrap",
        color: "rgb(92, 92, 92)",
      }}
    >
      <label style={{ width: labelWidth, fontSize: "85%" }}>{label}</label>
      <Select
        placeholder={placeholder}
        style={{
          width: inputWidth,
        }}
        variant="unstyled"
        searchable
        size={"xs"}
        id="selectField"
        rightSection={
          <FiChevronDown
            style={{ marginLeft: "15px" }}
            size={18}
            color="grey"
          />
        }
        styles={{ rightSection: { pointerEvents: "none" } }}
        data={["hu"]}
      />
    </div>
  );
}

export default SelectField;
