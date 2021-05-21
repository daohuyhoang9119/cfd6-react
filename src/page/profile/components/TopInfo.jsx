import React from "react";
import { useSelector } from "react-redux";
import useAuth from "../../../Hook/useAuth";

function TopInfo(props) {
  let { login } = useSelector((store) => store.authReducer);

  return (
    <div className="top-info">
      <div className="avatar">
        {/* <span class="text">H</span> */}
        <img src="/img/avatar-lg.png" alt="" />
        <div className="camera" />
      </div>
      <div className="name">{login.name}</div>
      <p className="des">Thành viên của team CFD1-OFFLINE</p>
    </div>
  );
}

export default TopInfo;
