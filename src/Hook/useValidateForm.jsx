import React, { useState } from "react";

let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i;
let facebookPattern =
  /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/i;

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
    let { rule, message } = validate;
    for (let i in rule) {
      let r = rule[i];
      let m = message?.[i] || {};

      //Nếu field đó có require và giá trị i trong form khong có giá trị
      if (r.require && !form[i]?.trim()) {
        errorObj[i] = m?.require || "Trường này không được để trống";
        //err obj thứ i sẽ lấy message nếu có hoặc trường này ...
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
