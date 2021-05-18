import React from "react";
import CourseItem from "../../.././components/CourseItem";

function CourseList({ online, offline }) {
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
            {offline.map((value, i) => (
              <CourseItem key={value.slug} {...value} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-courseonline section-blue">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title">Khóa học Online</h2>
          </div>
          <div className="list row">
            {online.map((value, i) => (
              <CourseItem key={value.slug} {...value} />
            ))}
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </>
  );
}

export default CourseList;
