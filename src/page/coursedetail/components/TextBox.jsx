import React from "react";

function TextBox({ sub_title, main_title }) {
  return (
    <div className="textbox">
      <h3 className="sub-title">{sub_title}</h3>
      <h2 className="main-title">{main_title}</h2>
    </div>
  );
}

export default TextBox;
