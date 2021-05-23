import React, { useState, useEffect } from "react";
import CoursesApi from "../../service/coursesApi";
import RegisterForm from "./components/RegisterForm";
import RegisterInfo from "./components/RegisterInfo";
import { useParams, useHistory } from "react-router";

function Register() {
  let { slug } = useParams();
  let history = useHistory();

  let [course, setCourse] = useState();

  useEffect(async () => {
    let res = await CoursesApi.detail(slug);
    if (res.data) {
      setCourse(res.data);
    }
  }, [slug]);

  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">{course?.title} </h1>
            <RegisterInfo {...course} />
            <RegisterForm />
          </div>
        </div>
      </section>
      {/* <div className="register-success">
        <div className="contain">
          <div className="main-title">đăng ký thành công</div>
          <p>
            <strong>
              Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.
            </strong>{" "}
            <br />
            Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi
            sẽ chủ động liên lạc với bạn thông qua facebook hoặc số điện thoại
            của bạn.
          </p>
        </div>
        <a href="/" className="btn main rect">
          về trang chủ
        </a>
      </div> */}
    </main>
  );
}

export default Register;
