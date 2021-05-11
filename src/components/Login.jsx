import React, { useState } from "react";
import ReactDOM from "react-dom";

function Login() {
  function closeSignUp() {
    document.querySelector(".sign-up").style.display = "none";
  }
  function closeLogin() {
    document.querySelector(".register").style.display = "none";
  }

  const [form, setForm] = useState({
    email: "",
    password: "",
    savePassword: false,
  });
  const [error, setError] = useState({});

  function onSubmit() {
    let errObj = {};
    if (!form.email.trim()) {
      errObj.email = "Email là bắt buộc";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email.trim())) {
      errObj.email = "Email không đúng định dạng";
    }
    if (!form.password.trim()) {
      errObj.password = "Password là bắt buộc";
    } else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(
        form.password.trim()
      )
    ) {
      errObj.password =
        "Password phải hơn 8 ký tự, ít nhất 1 số, ít nhất 1 ký tự đặc biệt";
    }

    setError(errObj);

    if (Object.keys(errObj).length === 0) {
      console.log(form);
    }
  }

  function inputOnChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    if ((e.target.type = "checkbox")) {
      value = e.target.checked;
      name = "savePassword";
    }

    setForm({
      ...form,
      [name]: value,
    });
  }

  return ReactDOM.createPortal(
    <>
      <div
        className="popup-form popup-login register"
        style={{ display: "none" }}
      >
        <div className="wrap">
          {/* login-form */}
          <div className="ct_login" style={{ display: "block" }}>
            <h2 className="title">Đăng nhập</h2>
            <label>
              <input
                type="text"
                placeholder="Email / Số điện thoại"
                value={form.email}
                name="email"
                onChange={inputOnChange}
              />
              {error.email && <p className="error-text-login">{error.email}</p>}
            </label>
            <label>
              <input
                type="password"
                placeholder="Mật khẩu"
                value={form.password}
                name="password"
                onChange={inputOnChange}
              />
              {error.password && (
                <p className="error-text-login">{error.password}</p>
              )}
            </label>
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input
                    type="checkbox"
                    defaultChecked={form.savePassword}
                    onChange={inputOnChange}
                  />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="#" className="forget">
                Quên mật khẩu?
              </a>
            </div>
            <div className="btn rect main btn-login" onClick={onSubmit}>
              đăng nhập
            </div>
            <div className="text-register">
              <strong>hoặc đăng ký bằng</strong>
            </div>
            <div>
              <div className="btn btn-icon rect white btn-google">
                <img src="img/google.svg" alt="" />
                Google
              </div>
            </div>
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div>
          </div>
          {/* email form */}
          <div className="ct_email">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <input type="text" placeholder="Email" />
            <div className="btn rect main btn-next">Tiếp theo</div>
            <div className="back" />
            <div className="close">
              <img src="img/close-icon.png" alt="" onClick={closeLogin} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="popup-form popup-login sign-up"
        style={{ display: "none" }}
      >
        <div className="wrap">
          <h2 className="title">Đăng ký</h2>
          <div className="btn btn-icon rect white btn-google">
            <img src="img/google.svg" alt="" />
            Google
          </div>
          <p className="policy">
            Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a>{" "}
            của CFD
          </p>
          <div className="close" onClick={closeSignUp}>
            <img src="img/close-icon.png" alt="" />
          </div>
        </div>
      </div>
    </>,
    document.getElementById("root2")
  );
}

export default Login;
