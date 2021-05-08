import React from "react";
import CourseBox from "../../course/components/CourseBox";
import TextBox from "./TextBox";

function SiteProject() {
  return (
    <section className="section-3">
      <div className="container">
        <TextBox sub_title="DỰ ÁN" main_title="THÀNH VIÊN" />
        <div className="list row">
          <CourseBox
            img="img/img.png"
            name="React JS"
            desc="One of the best corporate fashion brands in Sydney"
            teacher_avatar="img/avt.png"
            teacher_name="Vương Đặng"
          />
          <CourseBox
            img="img/img2.png"
            name="Animation"
            desc="One of the best corporate fashion brands in Sydney"
            teacher_avatar="img/avt.png"
            teacher_name="Trần Nghĩa"
          />
          <CourseBox
            img="img/img3.png"
            name="Scss, Grunt JS và Boostrap 4"
            desc="One of the best corporate fashion brands in Sydney"
            teacher_avatar="img/avt.png"
            teacher_name="Trần Nghĩa"
          />
        </div>
      </div>
    </section>
  );
}

export default SiteProject;
