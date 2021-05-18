import React, { useState } from "react";
import ReactDOM from "react-dom";
import useAuth from "../Hook/useAuth";
import useValidate from "../Hook/useValidate";

function Login() {
  let [loginError, setLoginError] = useState(null);
  const { form, error, check, inputOnChange } = useValidate(
    {
      username: "",
      password: "",
    },
    {
      rule: {
        username: {
          require: true,
          pattern: "email",
        },
        password: {
          require: true,
          min: 6,
          max: 32,
        },
      },
      message: {
        username: {
          require: "Email không được để trống ",
          pattern: "Email không đúng định dạng",
        },
        password: {
          require: "Password không được để trống",
          pattern:
            "Password phải hơn 8 ký tự, ít nhất 1 số, ít nhất 1 ký tự đặc biệt",
        },
      },
    }
  );

  let { handleLogin } = useAuth();

  function closeSignUp() {
    document.querySelector(".sign-up").style.display = "none";
  }
  function closeLogin() {
    document.querySelector(".register").style.display = "none";
  }

  async function onSubmit() {
    let errObj = check();
    if (Object.keys(errObj).length === 0) {
      let res = await handleLogin(form.username, form.password);
      if (res.success) {
        closeLogin();
      } else if (res.error) {
        setLoginError(res.error);
      }
    }
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
            {loginError && <p className="error-text">{loginError}</p>}
            <label>
              <input
                type="text"
                placeholder="Email / Số điện thoại"
                value={form.username}
                name="username"
                onChange={inputOnChange}
              />
              {error.username && (
                <p className="error-text-login">{error.username}</p>
              )}
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
                  <input type="checkbox" />
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
