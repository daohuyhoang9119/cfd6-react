import React from "react";
import CourseBox from "../../course/components/CourseBox";
import TextBox from "./TextBox";

function Section4(props) {
  return (
    <section className="section-4">
      <div className="container">
        <TextBox sub_title="Khóa học" main_title="Liên quan" />
        <div className="list row">
          <CourseBox
            img="img/img.png"
            name="Front-end căn bản"
            desc="One of the best corporate fashion brands in Sydney"
            teacher_avatar="img/avt.png"
            teacher_name="Vương Đặng"
          />
          <CourseBox
            img="img/img2.png"
            name="Front-end căn bản"
            desc="One of the best corporate fashion brands in Sydney"
            teacher_avatar="img/avt.png"
            teacher_name="Trần Nghĩa"
          />
          <CourseBox
            img="img/img3.png"
            name="Laravel framework"
            desc="One of the best corporate fashion brands in Sydney"
            teacher_avatar="img/avt.png"
            teacher_name="Trần Nghĩa"
          />
        </div>
      </div>
    </section>
  );
}

export default Section4;
