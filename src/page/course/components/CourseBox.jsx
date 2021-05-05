import React from "react";

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
          <div className="register-btn">Đăng Ký</div>
        </div>
      </div>
    </div>
  );
}

export default CourseBox;
