import React from "react";

function RegisterLabel({ title, placeholder, value, name, onChange, error }) {
  return (
    <label>
      <p>
        {title}
        <span>*</span>
      </p>
      <input
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      {/* {error.name ? <p className="error-text">{error.name}</p> : null} */}
    </label>
  );
}

export default RegisterLabel;
