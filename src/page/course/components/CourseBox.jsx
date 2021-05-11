import React from "react";
import { Link } from "react-router-dom";
function CourseBox({ img, name, desc, teacher_avatar, teacher_name }) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <a className="cover" href="#">
          <img src={img} alt="" />
        </a>
        <div className="info">
          <a className="name" href="#">
            {name}
          </a>
          <p className="des">{desc}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={teacher_avatar} alt="" />
            </div>
            <div className="name">{teacher_name}</div>
          </div>
          <Link className="register-btn" to="/register">
            Đăng Ký
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseBox;
