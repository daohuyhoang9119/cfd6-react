import React from "react";
import Accordion from "./Accordion";
import CheckItem from "./CheckItem";

function Intro({ content, long_description }) {
  return (
    <section className="section-2">
      <div className="container">
        <p className="des">{long_description}</p>
        <h2 className="title">giới thiệu về khóa học</h2>
        <div className="cover">
          <img src="/img/course-detail-img.png" alt="" />
        </div>
        <h3 className="title">nội dung khóa học</h3>
        {/* render ra qua trinh day cac buoi hoc */}

        {content?.map((item, i) => (
          <Accordion key={i} {...item} day={i + 1} />
        ))}

        <h3 className="title">yêu cầu cần có</h3>
        <div className="row row-check">
          <CheckItem content="Đã từng học qua HTML, CSS" />
          <CheckItem content="Cài đặt phần mềm Photoshop, Adobe illustrator, Skype" />
        </div>
        <h3 className="title">hình thức học</h3>
        <div className="row row-check">
          <CheckItem content="Học offline tại văn phòng, cùng Trần Nghĩa và 3 đồng nghiệp." />
          <CheckItem content="Dạy và thực hành thêm bài tập online thông qua Skype." />
          <CheckItem
            content="Được các mentor và các bạn trong team CFD hổ trợ thông qua group CFD
            Facebook hoặc phần mềm điều khiển máy tính."
          />
          <CheckItem content="Thực hành 2 dự án thực tế với sự hướng dẫn của CFD Team." />
        </div>
        <h3 className="title">
          <div className="date-start">lịch học</div>
          <div className="sub">
            *Lịch học và thời gian có thể thống nhất lại theo số đông học viên.
          </div>
        </h3>
        <p>
          <strong>Ngày bắt đầu: </strong> 09/09/2020 <br />
          <strong>Thời gian học: </strong> Thứ 3 từ 18h45-21h45, Thứ 7 từ
          12h-15h, Chủ nhật từ 15h-18h
        </p>
        <h3 className="title">Người dạy</h3>
        <div className="teaches">
          <div className="teacher">
            <div className="avatar">
              <img src="img/avatar-lg.png" alt="" />
            </div>
            <div className="info">
              <div className="name">TRẦN NGHĨA</div>
              <div className="title">
                Founder CFD &amp; Creative Front-End Developer
              </div>
              <p className="intro">
                My education, career, and even personal life have been molded by
                one simple principle; well designed information resonates with
                people and can change lives.I have a passion for making
                information resonate. It all starts with how people think. With
                how humans work. As humans we have learned how to read and write
                and while that is incredible, we are also already hard-wired to
                do some things a bit more "automatically"
              </p>
              <p>
                <strong>Website:</strong> <a href="#">http://nghiatran.info</a>
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="user">
            <img src="img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
          </div>
          <div className="btn main btn-register round">đăng ký</div>
          <div className="btn-share btn overlay round btn-icon">
            <img src="img/facebook.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
