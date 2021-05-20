import React from "react";
import { Link } from "react-router-dom";
function CourseBox({ title, short_description, teacher, thumbnail }) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <a className="cover" href="#">
          <img src={thumbnail.link} alt="" />
        </a>
        <div className="info">
          <a className="name" href="#">
            {title}
          </a>
          <p className="des">{short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={teacher.avatar} alt="" />
            </div>
            <div className="name">{teacher.title}</div>
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
