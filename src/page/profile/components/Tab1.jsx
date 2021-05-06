import React, { useState } from "react";
import Tab1Label from "./Tab1Label";

function Tab1(props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    urlFace: "",
    urlSkype: "",
    email: "",
  });
  const [error, setError] = useState({});
  function onSave() {
    let errorObj = {};

    //name
    form.name.trim().replace(/ +/g, " ");
    if (!form.name.trim()) {
      errorObj.name = "Họ và tên là bắt buộc";
    }
    //phone
    if (!form.phone.trim()) {
      errorObj.phone = "So dien thoai la bat buoc";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone.trim())) {
      errorObj.phone = "So dien thoai khong hop le";
    }

    //ulr facebook
    if (!form.urlFace.trim()) {
      errorObj.urlFace = "Tai khoan facebook la bat buoc";
    } else if (
      !/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/.test(
        form.urlFace.trim()
      )
    ) {
      errorObj.urlFace = "Tai khoan facebook khong hop le";
    }

    //url Skype
    if (!form.urlSkype.trim()) {
      errorObj.urlSkype = "Tai khoan skype la bat buoc";
    }
    //email

    if (!form.email.trim()) {
      errorObj.email = "Email la bat buoc";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email.trim())) {
      errorObj.email = "Email khong hop le";
    }

    console.log(errorObj);
    setError(errorObj);
    if (Object.keys(errorObj).length === 0) {
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
    <div className="tab1" /*style={{ display: "none" }}*/>
      <Tab1Label
        title="Họ và tên"
        placeholder="Nguyễn Văn A"
        value={form.name}
        name="name"
        onChange={inputOnchange}
        error={error.name}
      />
      <Tab1Label
        title="Số điện thoại"
        placeholder="0949******"
        value={form.phone}
        name="phone"
        onChange={inputOnchange}
        error={error}
      />
      <Tab1Label
        title="Facebook"
        placeholder="Facebook url"
        value={form.urlFace}
        name="urlFace"
        onChange={inputOnchange}
        error={error}
      />
      <Tab1Label
        title="Skype"
        placeholder="Skype url"
        value={form.urlSkype}
        name="urlSkype"
        onChange={inputOnchange}
        error={error}
      />
      <Tab1Label
        title="Email"
        placeholder="Email"
        value={form.email}
        name="email"
        onChange={inputOnchange}
        error={error}
      />

      <div className="btn main rect" onClick={onSave}>
        LƯU LẠI
      </div>
    </div>
  );
}

export default Tab1;
