import React from "react";

function SmallBanner({ student_name, course }) {
  return (
    <div className="item col-md-3 col-sm-4 col-xs-6">
      <div className="wrap">
        <div className="cover">
          <span className="text">H</span>
          <img src="img/thumb-member.jpg" alt="" />
        </div>
        <div className="info">
          <div className="name">{student_name}</div>
          <p className="title">{course}</p>
        </div>
      </div>
    </div>
  );
}

export default SmallBanner;
