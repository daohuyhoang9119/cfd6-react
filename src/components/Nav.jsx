import React from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";
import useDelayLink from "../Hook/useDelayLink";

function Nav() {
  const { delayLink, test } = useDelayLink();

  function closeMenu() {
    document.body.classList.remove("menu-is-show");
    document.querySelector(".loading-page").style.transform = "scale(14)";
  }

  return ReactDOM.createPortal(
    <>
      <nav className="nav">
        <ul>
          <li className="li_login">
            <a href="#">Đăng nhập</a>
            <a href="#">Đăng ký</a>
          </li>
          <li>
            <NavLink
              exact
              to="/"

              // onClick={(e) => {
              //   closeMenu();
              //   delayLink(e);
              // }}
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              onClick={(e) => {
                closeMenu();
                delayLink(e);
              }}
            >
              CFD Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/course"
              onClick={(e) => {
                closeMenu();
                delayLink(e);
              }}
            >
              Khóa Học
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              onClick={(e) => {
                closeMenu();
                delayLink(e);
              }}
            >
              Dự Án
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/coop"
              onClick={(e) => {
                closeMenu();
                delayLink(e);
              }}
            >
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className="overlay_nav"
        onClick={() => {
          document.body.classList.remove("menu-is-show");
        }}
      />
    </>,
    document.body
  );
}

export default Nav;
