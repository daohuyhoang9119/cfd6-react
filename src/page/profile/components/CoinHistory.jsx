import React from "react";
import ItemHistory from "./ItemHistory";

function CoinHistory(props) {
  return (
    <div className="coinhistory">
      <h3>
        <strong>Lịch sử COIN</strong>
      </h3>
      {/* <p>Chưa sử dụng COIN</p> */}
      <div className="itemhistory">
        <div className="td">
          <strong>COIN</strong>
        </div>
        <div className="td">
          <strong>Thời gian</strong>
        </div>
        <div className="td">
          <strong>Nội dung</strong>
        </div>
        <div className="td">
          <strong>Trạng thái</strong>
        </div>
      </div>
      <ItemHistory
        coin="-300"
        time="09/09/2020"
        content="Giới thiệu khóa học cho học viên mới"
        status="Đã chấp nhận"
      />
      <ItemHistory
        coin="+300"
        time="18/10/2020"
        content="Dùng COIN để quy đổi sang Voucher Tiki"
        status="Đã chấp nhận"
      />
      <ItemHistory
        coin="-300"
        time="09/09/2020"
        content="Dùng COIN để đổi sang Thẻ nạp điện thoại"
        status="Chờ duyệt"
      />
    </div>
  );
}

export default CoinHistory;
