import React from "react";

function Accordion({ title, content, day }) {
  return (
    <div className="accordion">
      <div className="accordion__title">
        <div className="date">{`Ngày ${day}`}</div>
        <h3>{title}</h3>
      </div>
      <div className="content">{content}</div>
    </div>
  );
}

export default Accordion;
