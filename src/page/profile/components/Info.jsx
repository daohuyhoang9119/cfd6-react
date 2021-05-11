import React, { useState } from "react";
import useValidate from "../../../Hook/useValidate";

function Info() {
  const { form, error, check, inputOnChange } = useValidate(
    {
      name: "",
      phone: "",
      urlFace: "",
      urlSkype: "",
      email: "",
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
        urlFace: {
          require: true,
          pattern: "urlFace",
        },
        urlSkype: {
          require: true,
          pattern: "urlSkype",
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
        urlFace: {
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

  function onSave() {
    let errorObj = check();
    if (Object.keys(errorObj).length === 0) {
      console.log(form);
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
          name="name"
          onChange={inputOnChange}
        />
        {error.phone && <p className="error-text">{error.phone}</p>}
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Facebook url"
          value={form.name}
          name="urlFace"
          onChange={inputOnChange}
        />
        {error.urlFace && <p className="error-text">{error.urlFace}</p>}
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
