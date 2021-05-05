import React from "react";

function Header(props) {
  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger">
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>
        <a href="#" className="logo">
          <img src="img/logo.svg" alt="" />
          <h1>CFD</h1>
        </a>
        <div className="right">
          <div className="have-login">
            <div className="account">
              <a href="#" className="info">
                <div className="name">Trần Lê Trọng Nghĩa</div>
                <div className="avatar">
                  <img src="img/avt.png" alt="" />
                </div>
              </a>
            </div>
            <div className="hamberger"></div>
            <div className="sub">
              <a href="#">Khóa học của tôi</a>
              <a href="#">Thông tin tài khoản</a>
              <a href="#">Đăng xuất</a>
            </div>
          </div>
          {/* <div class="not-login bg-none">
                <a href="#" class="btn-register">Đăng nhập</a>
                <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
            </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
