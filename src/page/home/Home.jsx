import React from "react";
import Action from "./components/Action";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import ReactLoading from "react-loading";
import Login from "../../components/Login";

function Home(props) {
  let loading = false;
  if (loading)
    return (
      <ReactLoading type="cylon" color="#00afab" height={667} width={375} />
    );
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

export default Home;
