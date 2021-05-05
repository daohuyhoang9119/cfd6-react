import React from "react";

function CoinCheck({ title }) {
  return (
    <label className="checkcontainer">
      {title}
      <input type="radio" name="radio" />
      <span className="checkmarkradio" />
    </label>
  );
}

export default CoinCheck;
