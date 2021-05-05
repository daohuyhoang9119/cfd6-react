import React from "react";
import Action from "./components/Action";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";

function index(props) {
  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList />
      <Different />
      <Testimonial />
      <Gallery />
      <Action />
    </main>
  );
}

export default index;
