import React from "react";
import { Link } from "react-router-dom";

function Header() {
  function toggleMenu() {
    document.body.classList.toggle("menu-is-show");
  }
  function toggleLogin(e) {
    e.preventDefault();
    document.querySelector(".register").style.display = "flex";
  }
  function toggleSignUp(e) {
    e.preventDefault();
    document.querySelector(".sign-up").style.display = "flex";
  }
  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger" onClick={toggleMenu}>
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <Link to="/" className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>CFD</h1>
          </Link>
          <div className="right">
            {/* <div className="have-login">
              <div className="account">
                <Link to="/profile" className="info">
                  <div className="name">Trần Lê Trọng Nghĩa</div>
                  <div className="avatar">
                    <img src="/img/avt.png" alt="" />
                  </div>
                </Link>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link to="/profile">Khóa học của tôi</Link>
                <Link to="/profile">Thông tin tài khoản</Link>
                <Link to="/profile">Đăng xuất</Link>
              </div>
            </div> */}

            <div class="not-login bg-none">
              <a href="#" class="btn-register" onClick={toggleLogin}>
                Đăng nhập
              </a>
              <a
                href="login.html"
                class="btn main btn-open-login"
                onClick={(e) => toggleSignUp(e)}
              >
                Đăng ký
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
