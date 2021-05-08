import React, { useState } from "react";

function RegisterForm(props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    url: "",
    coin: false,
    pay: "",
    feedback: "",
    gender: "female",
  });

  const [error, setError] = useState({});

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
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email.trim())) {
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

    if (Object.keys(errorObj).length === 0) {
      console.log(form);
    }
  }

  function inputOnchange(e) {
    let name = e.target.name;
    let value = e.target.value;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
      name = "coin";
    }
    // if (e.target.type === "radio") {
    //   value = e.target.checked;
    //   console.log(e.target.value);
    // }
    console.log(e.target.value);
    console.log(e.target.type);

    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className="form">
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Họ và tên bạn"
          value={form.name}
          name="name"
          onChange={inputOnchange}
        />
        {error.name && <p className="error-text">{error.name}</p>}
      </label>
      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Số điện thoại"
          value={form.phone}
          name="phone"
          onChange={inputOnchange}
        />
        {error.phone && <p className="error-text">{error.phone}</p>}
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Email của bạn"
          value={form.email}
          name="email"
          onChange={inputOnchange}
        />
        {error.email && <p className="error-text">{error.email}</p>}
      </label>
      <label>
        <p>
          URL Facebook<span>*</span>
        </p>
        <input
          type="text"
          placeholder="https://facebook.com"
          value={form.url}
          name="url"
          onChange={inputOnchange}
        />
        {error.url && <p className="error-text">{error.url}</p>}
      </label>

      <label className="disable">
        <p>Sử dụng COIN</p>
        <div className="checkcontainer">
          Hiện có <strong>300 COIN</strong>
          {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
          {/* Cần ít nhất 200 COIN để giảm giá */}
          <input
            type="checkbox"
            defaultChecked={form.coin}
            onChange={inputOnchange}
          />
          <span className="checkmark" />
        </div>
      </label>
      <div>
        <label className="disable">
          <p>Gender</p>
          <label
            className="checkcontainer"
            style={{ marginRight: "30px", zIndex: "1" }}
          >
            <strong>Nam</strong>

            <input
              type="radio"
              value="male"
              name="gender"
              checked={form.gender === "male"}
              onChange={inputOnchange}
              style={{ zIndex: "10" }}
            />
            <span className="checkmark" />
          </label>
          <label className="checkcontainer" style={{ zIndex: "1" }}>
            <strong>Nu</strong>
            <input
              type="radio"
              value="female"
              name="gender"
              checked={form.gender === "female"}
              onChange={inputOnchange}
              style={{ zIndex: "10" }}
            />
            <span className="checkmark" />
          </label>
        </label>
      </div>
      {/* <div style={{ display: "flex" }}>
        <label className="disable">
          <p>Gender</p>
          <div className="checkcontainer">
            <strong>Male</strong>
            <input
              name="gender"
              value="male"
              type="radio"
              onChange={inputOnchange}
              checked={form.gender === "male"}
            />
            <span className="checkmark" />
          </div>
        </label>
        <label className="disable">
          <div className="checkcontainer">
            <strong>Female</strong>
            <input
              name="gender"
              value="female"
              type="radio"
              onChange={inputOnchange}
              checked={form.gender === "female"}
            />
            <span className="checkmark" />
          </div>
        </label>
      </div> */}
      <label>
        <p>Hình thức thanh toán</p>
        <div className="select">
          <div className="head">Chuyển khoản</div>
          <div className="sub">
            <a href="#" value="CK">
              Chuyển khoản
            </a>

            <a href="#" value="TM">
              Thanh toán tiền mặt
            </a>
          </div>
        </div>
      </label>
      <label>
        <p>
          Ý kiến cá nhân<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Mong muốn cá nhân và lịch bạn có thể học."
          value={form.feedback}
          name="feedback"
          onChange={inputOnchange}
        />
        {error.feedback && <p className="error-text">{error.feedback}</p>}
      </label>

      <div className="btn main rect" onClick={onRegister}>
        đăng ký
      </div>
    </div>
  );
}

export default RegisterForm;
