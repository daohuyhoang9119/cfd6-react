import React, { useState } from "react";

function Info() {
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
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Nguyễn Văn A"
          value={form.name}
          name="name"
          onChange={inputOnchange}
        />
        {error.name && <p className="error-text">{error.name}</p>}
      </label>
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Số điện thoại"
          value={form.phone}
          name="name"
          onChange={inputOnchange}
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
          onChange={inputOnchange}
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
          onChange={inputOnchange}
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
          onChange={inputOnchange}
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
