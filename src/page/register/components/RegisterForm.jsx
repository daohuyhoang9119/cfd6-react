import React from "react";
import RegisterLabel from "./RegisterLabel";

function RegisterForm(props) {
  return (
    <div className="form">
      <RegisterLabel title="Họ và tên" placeholder="Họ và tên bạn" />
      <RegisterLabel title="Số điện thoại" placeholder="Số điện thoại" />
      <RegisterLabel title="Email" placeholder="Email của bạn" />
      <RegisterLabel title="URL Facebook" placeholder="https://facebook.com" />
      <label className="disable">
        <p>Sử dụng COIN</p>
        <div className="checkcontainer">
          Hiện có <strong>300 COIN</strong>
          {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
          {/* Cần ít nhất 200 COIN để giảm giá */}
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />
        </div>
      </label>
      <label>
        <p>Hình thức thanh toán</p>
        <div className="select">
          <div className="head">Chuyển khoản</div>
          <div className="sub">
            <a href="#">Chuyển khoản</a>
            <a href="#">Thanh toán tiền mặt</a>
          </div>
        </div>
      </label>
      <RegisterLabel
        title="Ý kiến cá nhân"
        placeholder="Mong muốn cá nhân và lịch bạn có thể học."
      />
      <div className="btn main rect">đăng ký</div>
    </div>
  );
}

export default RegisterForm;
