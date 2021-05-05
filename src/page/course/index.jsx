import React from "react";
import CourseBox from "./components/CourseBox";

function index(props) {
  return (
    <>
      <main className="homepage" id="main">
        <section className="section-1">
          <div className="container">
            <h2 className="main-title">KHÓA HỌC CFD</h2>
            <p className="top-des">
              The readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </p>
            <div className="textbox">
              <h3 className="sub-title">KHÓA HỌC</h3>
              <h2 className="main-title">ONLINE</h2>
            </div>
            <div className="list row">
              <CourseBox
                img="img/img1.png"
                name="Front-end căn bản"
                desc="One of the best corporate fashion brands in Sydney"
                teacher_avatar="img/avt.png"
                teacher_name="Trần Nghĩa"
              />
              <CourseBox
                img="img/img.png"
                name="React JS"
                desc="One of the best corporate fashion brands in Sydney"
                teacher_avatar="img/avt.png"
                teacher_name="Vương Đặng"
              />
              <CourseBox
                img="img/img2.png"
                name="Animation"
                desc="One of the best corporate fashion brands in Sydney"
                teacher_avatar="img/avt.png"
                teacher_name="Trần Nghĩa"
              />
              <CourseBox
                img="img/img3.png"
                name="Scss, Grunt JS và Boostrap 4"
                desc="One of the best corporate fashion brands in Sydney"
                teacher_avatar="img/avt.png"
                teacher_name="Vương Đặng"
              />
              <CourseBox
                img="img/img4.png"
                name="UX/UI Design"
                desc="One of the best corporate fashion brands in Sydney"
                teacher_avatar="img/avt.png"
                teacher_name="Trần Nghĩa"
              />
              <CourseBox
                img="img/img5.png"
                name="Web Responsive"
                desc="One of the best corporate fashion brands in Sydney"
                teacher_avatar="img/avt.png"
                teacher_name="Trần Nghĩa"
              />
            </div>
          </div>
        </section>
        <section className="section-2 section-blue">
          <div className="container">
            <div className="textbox white">
              <h3 className="sub-title">KHÓA HỌC</h3>
              <h2 className="main-title">OFFLINE</h2>
            </div>
            <div className="list row">
              <CourseBox
                img="img/img6.png"
                name=" Front-end căn bản"
                desc="One of the best corporate fashion brands in Sydney"
                teacher_avatar="img/avt.png"
                teacher_name="Trần Nghĩa"
              />
              <CourseBox
                img="img/img7.png"
                name="Front-end nâng cao"
                desc="One of the best corporate fashion brands in Sydney"
                teacher_avatar="img/avt.png"
                teacher_name="Trần Nghĩa"
              />
              <CourseBox
                img="img/img8.png"
                name="Laravel framework"
                desc="One of the best corporate fashion brands in Sydney"
                teacher_avatar="img/avt.png"
                teacher_name="Trần Nghĩa"
              />
            </div>
            <div className="text-deco">C</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default index;
