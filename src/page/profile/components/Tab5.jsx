import React from "react";
import CoinHistory from "./CoinHistory";
import CoinInfo from "./CoinInfo";

function Tab5(props) {
  return (
    <div className="tab5 cointab" style={{ display: "block" }}>
      <CoinInfo />
      <CoinHistory />
    </div>
  );
}

export default Tab5;
