import React from "react";

function RegisterLabel({ title, placeholder }) {
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

export default RegisterLabel;
