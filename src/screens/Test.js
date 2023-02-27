import React, { useState } from "react";
import InputField from "../components/fields/InputField";

function Test() {
  const [age, setAge] = useState();
  const [girls, setGirls] = useState("");
  const [gender, setGender] = useState("");

  function handleAge() {
    setAge(4);
    setGirls("yes");
    setGender("Male");
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>Name</div>
        <div
          onKeyDown={(e) => e.key === "Enter" && handleAge()}
          onBlur={handleAge}
        >
          <InputField required={true} />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div>Age</div>
        <div onBlur={handleAge}>
          <InputField value={age} disabled={true} />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div>Girls</div>
        <div>
          <InputField value={girls} />
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div>Gender</div>
        <div>
          <InputField value={gender} />
        </div>
      </div>
    </div>
  );
}

export default Test;
