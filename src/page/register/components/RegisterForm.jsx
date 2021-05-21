import React, { useState, useEffect } from "react";
import useValidate from "../../../Hook/useValidate";
import CoursesApi from "../../../service/coursesApi";
import { useParams, useHistory } from "react-router";

function RegisterForm() {
  let { slug } = useParams();
  // let history = useHistory();
  // let [course, setCourse] = useState();

  //form
  const { form, error, inputOnChange, check } = useValidate(
    {
      name: "",
      phone: "",
      email: "",
      fb: "",
      coin: false,
      pay: "",
      feedback: "",
      gender: "female",
      payment: "chuyen-khoan",
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
        fb: {
          require: true,
          pattern: "urlFacebook",
        },
        feedback: {
          require: true,
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
        fb: {
          required: "Facebook cá nhân không được để trống",
          pattern: "Link Facebook cá nhân không đúng định dạng",
        },
      },
    }
  );

  // useEffect(async () => {
  //   let res = await CoursesApi.detail(slug);
  //   if (res.data) {
  //     setCourse(res.data);
  //   }
  // }, [slug]);

  async function onRegister() {
    let errorObj = check();

    if (Object.keys(errorObj).length === 0) {
      // console.log(form);
      //gửi giá trị lên API
      let res = CoursesApi.register(form, slug);
      console.log(res);
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
          value={form.fb}
          name="fb"
          onChange={inputOnChange}
        />
        {error.fb && <p className="error-text">{error.fb}</p>}
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
      <label>
        <p>Hình thức thanh toán</p>
        <div className="select">
          <div className="head">Chuyển khoản</div>
          <div className="sub">
            <a href="#" data-value="chuyen-khoan" data-name="payment">
              Chuyển khoản
            </a>

            <a href="#" data-value="tien-mat" data-name="payment">
              Thanh toán tiền mặt
            </a>
          </div>
        </div>
        {error.payment && <p className="error-text">{error.payment}</p>}
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
