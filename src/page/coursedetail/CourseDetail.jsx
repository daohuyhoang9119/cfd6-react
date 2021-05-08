import React from "react";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import SiteProject from "./components/SiteProject";
import Courses from "./components/Courses";
import { useParams } from "react-router";

function CourseDetail(props) {
  // let { slug } = useParams();
  // console.log(slug);

  //query pram

  return (
    <main class="course-detail" id="main">
      <Banner />
      <Intro />
      <SiteProject />
      <Courses />
    </main>
  );
}

export default CourseDetail;
