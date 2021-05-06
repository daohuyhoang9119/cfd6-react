import React from "react";

function TabTitle({ changeTab, tab }) {
  return (
    <div className="tab-title">
      <a
        href="#"
        className={tab === 0 ? "active" : ""}
        onClick={(e) => {
          changeTab(e, 0);
        }}
      >
        Thông tin tài khoản
      </a>
      <a
        href="#"
        className={tab === 1 ? "active" : ""}
        onClick={(e) => {
          changeTab(e, 1);
        }}
      >
        Khóa học của bạn
      </a>
      <a
        href="#"
        className={tab === 2 ? "active" : ""}
        onClick={(e) => {
          changeTab(e, 2);
        }}
      >
        Dự án đã làm
      </a>
      <a
        href="#"
        className={tab === 3 ? "active" : ""}
        onClick={(e) => {
          changeTab(e, 3);
        }}
      >
        Lịch sử thanh toán
      </a>
      <a
        href="#"
        className={tab === 4 ? "active" : ""}
        onClick={(e) => {
          changeTab(e, 4);
        }}
      >
        Quản lý COIN của tôi
      </a>
    </div>
  );
}

export default TabTitle;
