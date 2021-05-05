import React from "react";
import CourseItem from "../../.././components/CourseItem";

function CourseList(props) {
  return (
    <>
      <section className="section-courseoffline">
        <div className="container">
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h2 className="main-title">Khóa học Offline</h2>
          </div>
          <div className="list row">
            <CourseItem
              name="Reactjs + Redux"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img1.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="da-ket-thuc"
            />
            <CourseItem
              name="Webresponsive"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img2.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="dang-dien-ra"
            />
            <CourseItem
              name="Reactjs + Redux"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img3.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
            />
            <CourseItem
              name="Reactjs + Redux"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img4.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="dang-dien-ra"
            />
            <CourseItem
              name="Reactjs + Redux"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img5.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
            />
            <CourseItem
              name="Reactjs + Redux"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img6.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="dang-dien-ra"
            />
          </div>
        </div>
      </section>
      <section className="section-courseonline section-blue">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title">Khóa học Online</h2>
          </div>
          <div className="list row">
            <CourseItem
              name="Reactjs + Redux"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img6.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="dang-dien-ra"
            />
            <CourseItem
              name="Reactjs + Redux"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img6.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="dang-dien-ra"
            />
            <CourseItem
              name="Reactjs + Redux"
              description="One of the best corporate fashion brands in Sydney"
              image="img/img6.png"
              teacher_name="Đặng Thuyền Vương"
              teacher_avatar="img/avt.png"
              status="dang-dien-ra"
            />
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </>
  );
}

export default CourseList;
