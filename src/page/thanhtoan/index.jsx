import React from "react";
import Info from "./components/Info";
import Section from "./components/Section";

function index(props) {
  return (
    <main className="paypage" id="main">
      <div className="container">
        <section>
          <h2 className="main-title">thanh toán</h2>
          <div className="content">
            <Info />
            <Section
              title="Hoàn trả học phí"
              content="CFD không chịu trách nhiệm hoàn trả học phí trong bất kỳ trường
                hợp nào trừ khi dịch vụ của CFD bị gián đoạn, trục trặc do lỗi
                từ phía CFD gây ảnh hưởng nghiêm trọng đến quyền lợi của học
                viên."
            />
            <Section
              title="Chính sách ưu đãi"
              content="Sẽ được CFD thông báo công khai tại website theo từng chương trình ưu đãi cụ thể"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default index;
