import React from "react";

function CardComponent({ icon, title }) {
  const host = window.location.host;

  return (
    <div className="the-card-component">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div></div>
        <div
          style={{
            padding: "5px",
          }}
        >
          {icon}
        </div>
      </div>
      <div style={{ fontSize: "18px", fontWeight: "600", color: "#7F7FD5" }}>
        {title}
      </div>
    </div>
  );
}

export default CardComponent;
