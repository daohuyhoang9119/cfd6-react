import React from "react";
import ProjectItem from "./components/ProjectItem";

function index(props) {
  return (
    <main className="projectpage" id="main">
      <section className="section-1">
        <div className="container">
          <h2 className="main-title">dự án</h2>
          <p className="top-des">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam
            tincidunt elementum sem non luctus
          </p>
          <div className="list row">
            <ProjectItem
              img="img/project/project (1).jpg"
              name="furnitown"
              makeBy="Hoàn thành với Trần Nghĩa"
            />
            <ProjectItem
              img="img/project/project (2).jpg"
              name="kymco"
              makeBy="Hoàn thành với Huỳnh Tiến Tài"
            />
            <ProjectItem
              img="img/project/project (3).jpg"
              name="gboxmb"
              makeBy="Hoàn thành với Nguyễn Văn Tuấn"
            />
            <ProjectItem
              img="img/project/project (4).jpg"
              name="wooder"
              makeBy="Hoàn thành với Nguyễn Đức Huy"
            />
            <ProjectItem
              img="img/project/project (5).jpg"
              name="gboxmb"
              makeBy="Hoàn thành với Nguyễn Văn Tuấ"
            />
            <ProjectItem
              img="img/project/project (5).jpg"
              name="wooder"
              makeBy="Hoàn thành với Nguyễn Đức Huy"
            />
            <ProjectItem
              img="img/project/project (5).jpg"
              name="wooder"
              makeBy="Hoàn thành với Nguyễn Đức Huy"
            />
            <ProjectItem
              img="img/project/project (5).jpg"
              name="wooder"
              makeBy="Hoàn thành với Nguyễn Đức Huy"
            />
          </div>
          <div className="bottom">
            <div className="btn overlay round btn-more">tải thêm</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default index;
