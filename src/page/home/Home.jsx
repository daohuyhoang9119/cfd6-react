import React, { useEffect, useState } from "react";
import Action from "./components/Action";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import ReactLoading from "react-loading";

//api from courses list
import CoursesApi from "../../service/coursesApi";

function Home(props) {
  const [list, setList] = useState({
    offline: [],
    online: [],
  });
  let loading = false;

  useEffect(() => {
    CoursesApi.list().then((res) => {
      setList(res);
    });
  }, []);

  if (loading)
    return (
      <ReactLoading type="cylon" color="#00afab" height={667} width={375} />
    );

  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList {...list} />
      <Different />
      <Testimonial />
      <Gallery />
      <Action />
    </main>
  );
}

export default Home;
