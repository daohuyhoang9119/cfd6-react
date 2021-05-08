import React from "react";
import { NavLink } from "react-router-dom";

function TabTitle({ path }) {
  return (
    <div className="tab-title">
      <NavLink to={`${path}`} exact>
        Thông tin tài khoản
      </NavLink>
      <NavLink to={`${path}/course`}>Khóa học của bạn</NavLink>
      <NavLink to={`${path}/project`}>Dự án đã làm</NavLink>
      <NavLink to={`${path}/history`}>Lịch sử thanh toán</NavLink>
      <NavLink to={`${path}/coin`}>Quản lý COIN của tôi</NavLink>
    </div>
  );
}

export default TabTitle;
