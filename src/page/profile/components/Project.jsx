import React from "react";
import Tab3Item from "./Tab3Item";

function Project() {
  return (
    <div className="tab3">
      <div className="row">
        <Tab3Item
          teacher_avatar="img/avt.png"
          teacher_name="Trần Nghĩa"
          title="Furnitown"
          img="img/img8.png"
          des="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
        />
        <Tab3Item
          teacher_avatar="img/avt.png"
          teacher_name="Trần Nghĩa"
          title="GboxMB"
          img="img/img8.png"
          des="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
        />
      </div>
      <div className="btn-wrap">
        <div className="btn overlay btn-icon round">
          <img src="img/icon-upload.svg" alt="" /> Tải lên
        </div>
      </div>
    </div>
  );
}

export default Project;
