import React, { useState } from "react";
import useValidate from "../../Hook/useValidate";
import ContactApi from "../../service/contactApi";

function Coop() {
  const { form, error, inputOnChange, check } = useValidate(
    {
      name: "",
      phone: "",
      email: "",
      website: "",
      title: "",
      content: "",
    },
    {
      rule: {
        name: {
          require: true,
        },
        phone: {
          pattern: "phone",
          require: true,
        },
        email: {
          require: true,
          pattern: "email",
        },
        website: {
          pattern: "website",
        },
        title: {
          require: true,
        },
        content: {
          require: true,
        },
      },
      message: {
        name: {
          require: "Họ và tên không được để trống",
        },
        phone: {
          require: "Số điện thoại không được để trống",
          pattern: "Số điện thoại không đúng định dạng",
        },
        email: {
          require: "Email không được để trống ",
          pattern: "Email không đúng định dạng",
        },
        website: {
          require: "Website không đúng định dạng",
        },
      },
    }
  );

  function onSubmit() {
    let errorObj = check();

    if (Object.keys(errorObj).length === 0) {
      ContactApi.contact(form);
    }
  }

  return (
    <main className="register-course" id="main">
      <section className="section-1 wrap container">
        {/* <div class="main-sub-title">liên hệ</div> */}
        <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
        <p className="top-des">
          Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra
          những sản phẩm giá trị, cũng như việc hợp tác với các đối tác tuyển
          dụng và công ty trong và ngoài nước.
        </p>
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
            <p>Website</p>
            <input
              type="text"
              placeholder="Đường dẫn website http://"
              value={form.website}
              name="website"
              onChange={inputOnChange}
            />
            {error.website && <p className="error-text">{error.website}</p>}
          </label>
          <label>
            <p>
              Tiêu đề<span>*</span>
            </p>
            <input
              type="text"
              placeholder="Tiêu đề liên hệ"
              value={form.title}
              name="title"
              onChange={inputOnChange}
            />
            {error.title && <p className="error-text">{error.title}</p>}
          </label>
          <label>
            <p>
              Nội dung<span>*</span>
            </p>
            <textarea
              id
              cols={30}
              rows={10}
              defaultValue={""}
              value={form.content}
              name="content"
              onChange={inputOnChange}
            />
            {error.content && <p className="error-text">{error.content}</p>}
          </label>
          <div className="btn main rect" onClick={onSubmit}>
            đăng ký
          </div>
        </div>
      </section>
    </main>
  );
}

export default Coop;
