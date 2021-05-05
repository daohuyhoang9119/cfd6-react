import React from "react";

function Tab1Label({ title, placeholder }) {
  return (
    <label>
      <p>
        {title}
        <span>*</span>
      </p>
      <input type="text" placeholder={placeholder} />
    </label>
  );
}

export default Tab1Label;
