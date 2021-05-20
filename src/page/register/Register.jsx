import React, { useState, useEffect } from "react";
import CoursesApi from "../../service/coursesApi";
import RegisterForm from "./components/RegisterForm";
import RegisterInfo from "./components/RegisterInfo";

function Register() {
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">Thực chiến front-end căn bản </h1>
            <RegisterInfo />
            <RegisterForm />
          </div>
        </div>
      </section>
      {/* <div className="register-success">
        <div className="contain">
          <div className="main-title">đăng ký thành công</div>
          <p>
            <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br />
            Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
            hoặc số điện thoại của bạn.
          </p>
        </div>
        <a href="/" className="btn main rect">về trang chủ</a>
      </div> */}
    </main>
  );
}

export default Register;
