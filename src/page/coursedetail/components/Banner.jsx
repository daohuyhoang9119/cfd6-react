import React from "react";

function Banner(props) {
  return (
    <section className="banner style2" style={{ backgroundColor: "#cde6fb" }}>
      <div className="container">
        <div className="info">
          <h1>Thực Chiến front-end căn bản</h1>
          <div className="row">
            <div className="date">
              <strong>Khai giảng:</strong> 12/10/2020
            </div>
            <div className="time">
              <strong>Thời lượng:</strong> 18 buổi
            </div>
          </div>
          <div className="btn white round" style={{ color: "#70b6f1" }}>
            đăng ký
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="video">
            <div className="icon">
              <img src="img/play-icon-white.png" alt="" />
            </div>{" "}
            <span>giới thiệu</span>
          </div>
          <div className="money">4.000.000 VND</div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
