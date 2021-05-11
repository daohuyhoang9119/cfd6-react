import React from "react";
import useValidateForm from "../../../Hook/useValidateForm";

function RegisterForm() {
  const { form, error, inputOnChange, check } = useValidateForm(
    {
      name: "",
      phone: "",
      email: "",
      url: "",
      coin: false,
      pay: "",
      feedback: "",
      gender: "female",
    },
    {
      rule: {
        name: {
          require: true,
        },
        phone: {
          require: true,
          pattern: "phone",
        },
        email: {
          require: true,
          pattern: "email",
        },
        url: {
          require: true,
          pattern: "facebook",
        },
        feedback: {
          require: true,
          pattern: "feedback",
        },
      },
      message: {
        name: {
          required: "Họ và tên không được để trống",
        },
        phone: {
          required: "Phải là số điện thoại Việt Nam",
          pattern: "Phải là số điện thoại Việt Nam",
        },
        email: {
          required: "Email không được để trống",
          pattern: "Email không đúng định dạng",
        },
        url: {
          required: "Facebook cá nhân không được để trống",
          pattern: "Link Facebook cá nhân không đúng định dạng",
        },
      },
    }
  );

  function onRegister() {
    let errorObj = check();

    if (Object.keys(errorObj).length === 0) {
      console.log(form);
    }
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
          onChange={inputOnChange}
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
          onChange={inputOnChange}
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
          onChange={inputOnChange}
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
          onChange={inputOnChange}
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
            onChange={inputOnChange}
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
              onChange={inputOnChange}
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
              onChange={inputOnChange}
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
          onChange={inputOnChange}
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
