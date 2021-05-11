import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload,
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
  }
  return state;
}

function Coop() {
  const [state, dispatch] = useReducer(reducer, {
    form: {
      name: "",
      phone: "",
      email: "",
      website: "",
      title: "",
      content: "",
    },
    error: {
      name: "",
      phone: "",
      email: "",
      website: "",
      title: "",
      content: "",
    },
  });

  let { form, error } = state;

  function onSubmit() {
    let errorObj = {};

    form.name.trim().replace(/ +/g, " ");
    if (!form.name.trim()) {
      errorObj.name = "Name la bat buoc";
    }

    if (!form.phone.trim()) {
      errorObj.phone = "Phone la bat buoc";
    } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone.trim())) {
      errorObj.phone = "Phone khong dung dinh dang";
    }

    if (!form.email.trim()) {
      errorObj.email = "Email la bat buoc";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email.trim())) {
      errorObj.email = "Email khong dung dinh dang";
    }

    //website
    if (
      form.website.trim() &&
      !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
        form.website.trim()
      )
    ) {
      errorObj.website = "Website khong dung dinh dang";
    }

    if (!form.title.trim()) {
      errorObj.title = "Title la bat buoc";
    }

    if (!form.content.trim()) {
      errorObj.content = "Content la bat buoc";
    }

    // setError(errorObj);
    dispatch({
      type: "SET_ERROR",
      payload: errorObj,
    });

    if (Object.keys(errorObj).length === 0) {
      console.log(form);
    }
  }

  function inputOnchange(e) {
    let name = e.target.name;
    let value = e.target.value;
    //console.log(e.target.name);
    dispatch({
      type: "INPUT_CHANGE",
      payload: {
        [name]: value,
      },
    });
    // setForm({
    //   ...form,
    //   [name]: value,
    // });
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
              onChange={inputOnchange}
            />
            {error.name && <p className="error-text">{error.name}</p>}
          </label>
          <label>
            <p>Số điện thoại</p>
            <input
              type="text"
              placeholder="Số điện thoại"
              value={form.phone}
              name="phone"
              onChange={inputOnchange}
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
              onChange={inputOnchange}
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
              onChange={inputOnchange}
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
              onChange={inputOnchange}
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
              onChange={inputOnchange}
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
