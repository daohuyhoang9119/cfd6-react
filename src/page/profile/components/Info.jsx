import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useValidate from "../../../Hook/useValidate";
import { updateAction } from "../../../redux/action/authAction";
import Auth from "../../../service/auth";

function Info() {
  let { login } = useSelector((store) => store.authReducer);
  const { form, error, check, inputOnChange } = useValidate(
    {
      name: login.name,
      phone: login.phone,
      fb: login.fb,
      urlSkype: login.urlSkype,
      email: login.email,
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
        fb: {
          require: true,
          pattern: "urlFacebook",
        },
        urlSkype: {
          require: true,
        },
        email: {
          require: true,
          pattern: "email",
        },
      },
      message: {
        name: {
          require: "Tên không được để trống",
        },
        phone: {
          require: "Số điện thoại không được để trống",
          pattern: "Phải là số điện thoại VN gồm 10 hoặc 11 số",
        },
        fb: {
          require: "Link Facebook không được để trống",
          pattern: "Link Facebook không đúng định dạng",
        },
        urlSkype: {
          require: "Link Skype không được để trống",
          pattern: "Link Skype không đúng định dạng",
        },
        email: {
          require: "Email không đúng được để trống",
          pattern: "Email không đúng định dạng",
        },
      },
    }
  );
  let dispatch = useDispatch();

  async function onSave() {
    let errorObj = check();

    if (Object.keys(errorObj).length === 0) {
      // console.log(form);
      // let res = await Auth.update(form);
      dispatch(updateAction(form));
      // console.log(res);
    }
  }

  return (
    <div className="tab1" /*style={{ display: "none" }}*/>
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Nguyễn Văn A"
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
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Skype url"
          value={form.urlSkype}
          name="urlSkype"
          onChange={inputOnChange}
        />
        {error.urlSkype && <p className="error-text">{error.urlSkype}</p>}
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          name="email"
          onChange={inputOnChange}
          disabled
        />
        {error.email && <p className="error-text">{error.email}</p>}
      </label>

      <div className="btn main rect" onClick={onSave}>
        LƯU LẠI
      </div>
    </div>
  );
}

export default Info;
