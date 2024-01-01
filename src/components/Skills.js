import React from "react";
import "../css/skill.css";

export default function Skills({ image, title }) {
  return (
    <div
      className="skill-container col-md-2 "
      style={{ textAlign: "center", marginTop: "4rem" }}
    >
      <img src={image} alt="" style={{ width: "6rem", height: "6rem" }} />
      <h4 className="pt-4" style={{ color: "white" }}>
        {title}
      </h4>
    </div>
  );
}
