import React from "react";
import Tab2Item from "./Tab2Item";

function Tab2(props) {
  return (
    <div className="tab2">
      <Tab2Item
        title="front-end căn bản"
        img="img/img3.png"
        start="09/09/2019"
      />
      <Tab2Item
        title="front-end nâng cao"
        img="img/img7.png"
        start="09/09/2019"
      />
    </div>
  );
}

export default Tab2;
