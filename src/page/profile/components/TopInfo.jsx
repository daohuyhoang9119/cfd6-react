import React from "react";

function TopInfo(props) {
  return (
    <div className="top-info">
      <div className="avatar">
        {/* <span class="text">H</span> */}
        <img src="img/avatar-lg.png" alt="" />
        <div className="camera" />
      </div>
      <div className="name">Trần Nghĩa</div>
      <p className="des">Thành viên của team CFD1-OFFLINE</p>
    </div>
  );
}

export default TopInfo;
