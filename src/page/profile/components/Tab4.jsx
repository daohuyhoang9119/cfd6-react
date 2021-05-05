import React from "react";
import Tab4Item from "./Tab4Item";

function Tab4(props) {
  return (
    <div className="tab4" style={{ display: "none" }}>
      <Tab4Item
        name="Khóa học CFD1-offline"
        date="09/09/2020"
        money="1.500.000 VND"
      />
      <Tab4Item
        name="Khóa học CFD1-offline"
        date="18/10/2020"
        money="1.500.000 VND"
      />
      <Tab4Item
        name="Khóa học CFD1-offline"
        date="09/09/2020"
        money="1.500.000 VND"
      />
      <Tab4Item
        name="Khóa học CFD1-offline"
        date="09/09/2020"
        money="1.500.000 VND"
      />
    </div>
  );
}

export default Tab4;
