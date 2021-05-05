import React from "react";
import Banner from "./components/Banner";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

function index(props) {
  return (
    <main class="course-detail" id="main">
      <Banner />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}

export default index;
