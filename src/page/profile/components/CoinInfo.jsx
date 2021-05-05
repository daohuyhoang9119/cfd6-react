import React from "react";
import CoinCheck from "./CoinCheck";

function CoinInfo(props) {
  return (
    <div className="coininfo">
      <div className="coininfo__box">
        <h3>
          <strong>Thông tin COIN</strong>
        </h3>
        <div className="coininfo__box-ct">
          <div>
            <img src="img/cfd-coin.png" alt="" />
            <p>
              Bạn có <strong>300</strong> COIN
            </p>
          </div>
        </div>
      </div>
      <div className="coininfo__box">
        <h3>
          <strong>Đổi COIN</strong>
        </h3>
        <div className="coininfo__box-ct">
          <CoinCheck title="Voucher Tiki 100k" />
          <CoinCheck title="Voucher Tiki 200k" />
          <CoinCheck title="Voucher Tiki 500k" />
          <CoinCheck title="Thẻ nạp điện thoại 100kk" />
          <CoinCheck title="Thẻ nạp điện thoại 200k" />
          <CoinCheck title="Thẻ nạp điện thoại 500k" />
          <small>
            <i>*Bạn có thể đổi COIN 1 lần</i>
          </small>
        </div>
        <a href="javascript:void(0)" className="btn main">
          Đổi COIN
        </a>
      </div>
    </div>
  );
}

export default CoinInfo;
