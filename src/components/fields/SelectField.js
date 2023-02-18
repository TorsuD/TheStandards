import React from "react";
import { Link } from "react-router-dom";

function SelectField({
  labelWidth,
  inputWidth,
  label,
  description,
  option1,
  option2,
  path,
}) {
  //   const dat = ["male", "female", "other"];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
        whiteSpace: "nowrap",
      }}
    >
      <label style={{ width: labelWidth, fontSize: "90%" }}>{label}</label>
      <select
        className="inputField"
        style={{ width: inputWidth, color: "#595959" }}
      >
        <option>{description}</option>

        <option>
          <Link to={"/test"}>{option1}</Link>
        </option>
        <option>{option2}</option>
      </select>
    </div>
  );
}

export default SelectField;
