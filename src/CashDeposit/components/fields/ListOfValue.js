import { Select } from "@mantine/core";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

function ListOfValue({
  labelWidth,
  inputWidth,
  placeholder,
  label,
  lovData,
  key,
  disabled,
}) {
  // const handleOpen = () => {
  //   var focusTrigger = document.getElementById("theField");
  //   focusTrigger.focus();
  // };

  if (lovData) {
    lovData = lovData;
  } else {
    lovData = ["No data"];
  }

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
          borderRadius: "3px",
          border: "none",
          fontsize: "90%",
          paddinglleft: "7px",
        }}
        searchable
        key={key}
        disabled={disabled}
        size={"xs"}
        id="listOfValue"
        rightSection={
          <IoMdSearch style={{ marginLeft: "15px" }} size={18} color="grey" />
        }
        styles={{ rightSection: { pointerEvents: "none" } }}
        data={lovData}
      />
    </div>
  );
}

export default ListOfValue;
