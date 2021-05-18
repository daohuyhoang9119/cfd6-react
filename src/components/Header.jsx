import React from "react";
import { Link } from "react-router-dom";

import useAuth from "../Hook/useAuth";

function Header() {
  let { login, handleLogout } = useAuth();

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
            {login ? (
              <div className="have-login">
                <div className="account">
                  <Link to="/profile" className="info">
                    <div className="name">{login.name}</div>
                    <div className="avatar">
                      <img src={login.avatar} alt="" />
                    </div>
                  </Link>
                </div>
                <div className="hamberger"></div>
                <div className="sub">
                  <Link to="/course">Khóa học của tôi</Link>
                  <Link to="/profile">Thông tin tài khoản</Link>
                  <Link onClick={handleLogout}>Đăng xuất</Link>
                  {/* ko cần để link trong đây vì setState tự redirect lại */}
                </div>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
