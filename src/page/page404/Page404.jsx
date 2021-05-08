import React from "react";

function Page404() {
  return (
    <main className="notfound" id="main">
      <div className="container">
        <section>
          <h2 className="main-title">404</h2>
          <p>Không tìm thấy trang</p>
          <a href="#" className="btn main round">
            Trang chủ
          </a>
        </section>
      </div>
    </main>
  );
}

export default Page404;
