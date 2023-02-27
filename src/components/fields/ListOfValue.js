import { Select } from "@mantine/core";
import React from "react";
// import {TfiSearch} from 'react-icons/tfi'
import { IoMdSearch } from "react-icons/io";
import { FiFeather } from "react-icons/fi";

function ListOfValue({
  labelWidth,
  inputWidth,
  placeholder,
  label,
  maxLength,
}) {
  const handleOpen = () => {
    var focusTrigger = document.getElementById("theField");
    focusTrigger.focus();
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
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
        size={"xs"}
        id="listOfValue"
        rightSection={
          <IoMdSearch style={{ marginLeft: "15px" }} size={18} color="grey" />
        }
        styles={{ rightSection: { pointerEvents: "none" } }}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
    </div>
  );
}

export default ListOfValue;
