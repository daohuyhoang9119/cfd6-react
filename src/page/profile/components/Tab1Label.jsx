import React from "react";

function Tab1Label({ title, placeholder, value, name, onChange, error }) {
  console.log(error);
  return (
    <label>
      <p>
        {title}
        <span>*</span>
      </p>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />

      {error?.name && <p className="error-text">{error.name}</p>}
      {error?.phone && <p className="error-text">{error.phone}</p>}
      {error?.urlFace && <p className="error-text">{error.urlFace}</p>}
      {error?.urlSkype && <p className="error-text">{error.urlSkype}</p>}
      {error?.email && <p className="error-text">{error.email}</p>}
    </label>
  );
}

export default Tab1Label;
