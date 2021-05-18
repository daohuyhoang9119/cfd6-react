import React, { useState } from "react";

let emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i;
// let passwordPattern =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
let websitePattern =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i;
let facebookPattern =
  /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/i;

function useValidate(initForm, validate) {
  const [form, setForm] = useState(initForm);
  const [error, setError] = useState({});

  function check() {
    let errorObj = {};
    let { rule, message } = validate;
    if (!message) {
      message = {};
    }
    for (let i in rule) {
      let r = rule[i];
      let m = message[i] || {};
      if (r.require && !form[i]?.trim()) {
        errorObj[i] = m?.require || "Trường này là bắt buộc";
        continue;
      }

      if (r.pattern && form[i]) {
        let { pattern } = r;
        if (pattern === "email") pattern = emailPattern;
        if (pattern === "phone") pattern = phonePattern;
        if (pattern === "website") pattern = websitePattern;
        // if (pattern === "password") pattern = websitePattern;
        if (pattern === "urlFacebook") pattern = facebookPattern;
        if (!pattern?.test(form[i])) {
          errorObj[i] = m?.pattern || "Trường này không đúng định dạng";
        }
      }

      if (r.min) {
        if (form[i].length < r.min) {
          errorObj[i] = m?.min || `Trường này không được ít hơn ${r.min} ký tự`;
        }
      }
      if (r.max) {
        if (form[i].length > r.max) {
          errorObj[i] =
            m?.max || `Trường này không được nhiều hơn ${r.max} ký tự`;
        }
      }
    }
    setError(errorObj);
    return errorObj;
  }

  function inputOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  }

  return { form, error, inputOnChange, check };
}

export default useValidate;
