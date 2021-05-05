import React from "react";
import Tab1Label from "./Tab1Label";

function Tab1(props) {
  return (
    <div className="tab1" style={{ display: "none" }}>
      <Tab1Label title="Họ và tên" placeholder="Nguyễn Văn A" />
      <Tab1Label title="Số điện thoại" placeholder="0949******" />
      <Tab1Label title="Facebook" placeholder="Facebook url" />
      <Tab1Label title="Skype" placeholder="Skype url" />
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
      </label>
      <div className="btn main rect">LƯU LẠI</div>
    </div>
  );
}

export default Tab1;
