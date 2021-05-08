import React from "react";
import ReactDOM from "react-dom";

function Login() {
  function closeSignUp() {
    document.querySelector(".sign-up").style.display = "none";
  }
  function closeLogin() {
    document.querySelector(".register").style.display = "none";
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
            <input type="text" placeholder="Email / Số điện thoại" />
            <input type="password" placeholder="Mật khẩu" />
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
            <div className="btn rect main btn-login">đăng nhập</div>
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
