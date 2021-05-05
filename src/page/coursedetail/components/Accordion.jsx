import React from "react";

function Accordion({ day, name, content }) {
  return (
    <div className="accordion">
      <div className="accordion__title">
        <div className="date">{day}</div>
        <h3>{name}</h3>
      </div>
      <div className="content">{content}</div>
    </div>
  );
}

export default Accordion;
