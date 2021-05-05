import React from "react";
import RegisterForm from "./components/RegisterForm";
import RegisterInfo from "./components/RegisterInfo";

function index(props) {
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
    </main>
  );
}

export default index;
