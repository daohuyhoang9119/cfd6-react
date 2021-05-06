import React from "react";

function Section({ title, content }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Section;
