import React from "react";

function ItemHistory({ coin, time, content, status }) {
  return (
    <div className="itemhistory">
      <div className="td">
        <span className="coin red">{coin}</span>
      </div>
      <div className="td">{time}</div>
      <div className="td">{content}</div>
      <div className="td">{status}</div>
    </div>
  );
}

export default ItemHistory;
