import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import SiteProject from "./components/SiteProject";
import Courses from "./components/Courses";
import CoursesApi from "../../service/coursesApi";

function CourseDetail() {
  let { slug } = useParams();
  let [info, setInfo] = useState({});
  let [coursesRelated, setCoursesRelated] = useState([]);

  //api cho info
  useEffect(async () => {
    let res = await CoursesApi.detail(slug);
    setInfo({ ...res.data });
  }, [slug]);

  //api cho course related
  useEffect(async () => {
    let res = await CoursesApi.related(slug);
    setCoursesRelated([...res.data]);
  }, [slug]);

  return (
    <main class="course-detail" id="main">
      <Banner {...info} />
      <Intro {...info} />
      <SiteProject />
      <Courses coursesRelated={coursesRelated} />
    </main>
  );
}

export default CourseDetail;
