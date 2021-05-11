import React, { useState } from "react";

let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i;
let facebookPattern = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/i;

function useValidateForm(initForm, validate) {
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

  function inputOnChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
      name = "coin";
    }
    setForm({
      ...form,
      [name]: value,
    });
  }
  function check() {
    let errorObj = {};
    // form.name.trim().replace(/ +/g, " ");
    // if (!form.name.trim()) {
    //   errorObj.name = "Họ và tên là bắt buộc";
    // }
    // if (!form.phone.trim()) {
    //   errorObj.phone = "Số điện thoại là bắt buộc";
    // } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
    //   errorObj.phone = "Phone không đúng định dạng";
    // }
    // if (!form.email.trim()) {
    //   errorObj.email = "Email là bắt buộc";
    // } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email.trim())) {
    //   errorObj.email = "Email không đúng định dạng";
    // }
    // if (!form.url.trim()) {
    //   errorObj.url = "Link Facebook cá nhân là bắt buộc";
    // } else if (
    //   !/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/.test(
    //     form.url.trim()
    //   )
    // ) {
    //   errorObj.url = "Link Facebook cá nhân không đúng định dạng";
    // }
    // if (!form.feedback.trim()) {
    //   errorObj.feedback = "Lời nhận xét là bắt buộc";
    // }

    let { rule, message } = validate;
    console.log(rule);
    for (let i in rule) {
      let r = rule[i];
      let m = message?.[i] || {};

      if (r.require && !form[i]?.trim()) {
        errorObj[i] = m?.require || "Trường này không được để trống";
      }

      if (r.pattern && form[i]) {
        let { pattern } = r;
        if (pattern === "email") pattern = emailPattern;
        if (pattern === "phone") pattern = phonePattern;
        if (pattern === "facebook") pattern = facebookPattern;
        if (!pattern?.test(form[i])) {
          errorObj[i] = m?.pattern || "Trường này không đúng định dạng";
        }
      }
    }

    setError(errorObj);
    return errorObj;
  }

  return {
    form,
    error,
    inputOnChange,
    check,
  };
}

export default useValidateForm;
