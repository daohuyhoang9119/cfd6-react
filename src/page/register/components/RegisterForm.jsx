import React, { useState } from "react";
import RegisterLabel from "./RegisterLabel";

function RegisterForm(props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    url: "",
    // coin: "",
    feedback: "",
  });

  const [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    url: "",
    // coin: "",
    feedback: "",
  });

  function onRegister() {
    let errorObj = {};
    form.name.trim().replace(/ +/g, " ");
    if (!form.name.trim()) {
      errorObj.name = "Họ và tên là bắt buộc";
    }
    if (!form.phone.trim()) {
      errorObj.phone = "Số điện thoại là bắt buộc";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
      errorObj.phone = "Phone không đúng định dạng";
    }
    if (!form.email.trim()) {
      errorObj.email = "Email là bắt buộc";
    } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email.trim())) {
      errorObj.email = "Email không đúng định dạng";
    }
    if (!form.url.trim()) {
      errorObj.url = "Link Facebook cá nhân là bắt buộc";
    } else if (
      !/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/.test(
        form.url.trim()
      )
    ) {
      errorObj.url = "Link Facebook cá nhân không đúng định dạng";
    }
    if (!form.feedback.trim()) {
      errorObj.feedback = "Lời nhận xét là bắt buộc";
    }
    setError(errorObj);
    if (Object.keys(errorObj) === 0) {
      console.log(form);
    }
  }

  function inputOnchange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className="form">
      <RegisterLabel
        title="Họ và tên"
        placeholder="Họ và tên bạn"
        value={form.name}
        name="name"
        onChange={inputOnchange}
        // error={error}
      />
      <RegisterLabel
        title="Số điện thoại"
        placeholder="Số điện thoại"
        value={form.phone}
        name="phone"
        onChange={inputOnchange}
      />
      <RegisterLabel
        title="Email"
        placeholder="Email của bạn"
        value={form.email}
        name="email"
        onChange={inputOnchange}
      />
      <RegisterLabel
        title="URL Facebook"
        placeholder="https://facebook.com"
        value={form.url}
        name="url"
        onChange={inputOnchange}
      />
      <label className="disable">
        <p>Sử dụng COIN</p>
        <div className="checkcontainer">
          Hiện có <strong>300 COIN</strong>
          {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
          {/* Cần ít nhất 200 COIN để giảm giá */}
          <input
            type="checkbox"
            defaultChecked="checked"
            // value={form.coin}
            // name="coin"
            // onChange={inputOnchange}
          />
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
        value={form.feedback}
        name="feedback"
        onChange={inputOnchange}
      />
      <div className="btn main rect" onClick={onRegister}>
        đăng ký
      </div>
    </div>
  );
}

export default RegisterForm;
