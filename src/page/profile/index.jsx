import React from "react";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import Tab4 from "./components/Tab4";
import TabTitle from "./components/TabTitle";
import TopInfo from "./components/TopInfo";

function index(props) {
  return (
    <main className="profile" id="main">
      <section>
        <TopInfo />
        <div className="container">
          <div className="tab">
            <TabTitle />
            <div className="tab-content">
              <Tab1 />
              <Tab2 />
              <Tab3 />
              <Tab4 />
              <div className="tab5 cointab" style={{ display: "block" }}>
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
                      <label className="checkcontainer">
                        Voucher Tiki 100k
                        <input type="radio" name="radio" />
                        <span className="checkmarkradio" />
                      </label>
                      <label className="checkcontainer">
                        Voucher Tiki 200k
                        <input type="radio" name="radio" />
                        <span className="checkmarkradio" />
                      </label>
                      <label className="checkcontainer">
                        Voucher Tiki 500k
                        <input type="radio" name="radio" />
                        <span className="checkmarkradio" />
                      </label>
                      <label className="checkcontainer">
                        Thẻ nạp điện thoại 100k
                        <input type="radio" name="radio" />
                        <span className="checkmarkradio" />
                      </label>
                      <label className="checkcontainer">
                        Thẻ nạp điện thoại 200k
                        <input type="radio" name="radio" />
                        <span className="checkmarkradio" />
                      </label>
                      <label className="checkcontainer">
                        Thẻ nạp điện thoại 500k
                        <input type="radio" name="radio" />
                        <span className="checkmarkradio" />
                      </label>
                      <small>
                        <i>*Bạn có thể đổi COIN 1 lần</i>
                      </small>
                    </div>
                    <a href="javascript:void(0)" className="btn main">
                      Đổi COIN
                    </a>
                  </div>
                </div>
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
                  <div className="itemhistory">
                    <div className="td">
                      <span className="coin red">-300</span>
                    </div>
                    <div className="td">09/09/2020</div>
                    <div className="td">
                      Giới thiệu khóa học cho học viên mới
                    </div>
                    <div className="td">Đã chấp nhận</div>
                  </div>
                  <div className="itemhistory">
                    <div className="td">
                      <span className="coin">+300</span>
                    </div>
                    <div className="td">18/10/2020</div>
                    <div className="td">
                      Dùng COIN để quy đổi sang Voucher Tiki
                    </div>
                    <div className="td">Đã chấp nhận</div>
                  </div>
                  <div className="itemhistory">
                    <div className="td">
                      <span className="coin red">-300</span>
                    </div>
                    <div className="td">18/10/2020</div>
                    <div className="td">
                      Dùng COIN để đổi sang Thẻ nạp điện thoại
                    </div>
                    <div className="td">Chờ duyệt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default index;
