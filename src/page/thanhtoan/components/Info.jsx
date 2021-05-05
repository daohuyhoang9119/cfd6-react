import React from "react";

function Info(props) {
  return (
    <div className="section">
      <h2>Hình thức thanh toán</h2>
      <h3>
        <strong>Hình thức chuyển khoản</strong>
      </h3>
      <p>
        - Thẻ ATM nội địa; <br />
        - Thẻ Visa, Master, JCB...; <br />- Ví MOMO.
      </p>
      <p>
        CFD chỉ gửi xác nhận sau khi học phí được chuyển đến tài khoản của CFD
        và sẽ không chịu trách nhiệm hay hoàn trả học phí khi có sai sót trong
        quá trình chuyển khoản hoặc sai thông tin chuyển khoản. Nếu xảy ra sai
        sót, Bạn vui lòng làm việc với ngân hàng để được xử lí.
      </p>
      <p>
        <strong>THÔNG TIN TÀI KHOẢN:</strong> <br />
        <strong>Chủ tài khoản</strong>: TRAN LE TRONG NGHIA
        <br />
        <strong>Số tài khoản</strong>: 004704070012672
        <br />
        <strong>Ngân hàng</strong>: HD Bank - chi nhánh Nguyễn Trãi (hoặc chọn
        Tp Hồ Chí Minh)
        <br />
        <strong>Nội dung chuyển khoản</strong>: Họ và tên số điện thoại mã khóa
        học (ví dụ: Nguyen Tuan Anh 0989998881 CFD2)
      </p>
      <p>
        <i>
          Sau khi thanh toán và CFD nhận được tiền sẽ chủ động nhắn tin để xác
          nhận.
        </i>
      </p>
      <h3>
        <strong>Hình thức trực tiếp</strong>
      </h3>
      <p>
        Hình thức thanh toán này chỉ áp dụng cho các thành viên tham gia khóa
        CFD OFFLINE. Thanh toán ngày đầu tiên khi tham gia khóa học.
      </p>
    </div>
  );
}

export default Info;
