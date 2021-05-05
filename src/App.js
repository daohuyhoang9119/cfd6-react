import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./page/home";
import Course from "./page/course";
import Email from "./page/email";
import HopTac from "./page/hoptac";
import CourseDetail from "./page/coursedetail";
import Faq from "./page/faq";
import Profile from "./page/profile";
import Project from "./page/Project";
import Register from "./page/register";
import ThanhToan from "./page/thanhtoan";
import Team from "./page/team";
import GioiThieuCoin from "./page/gioithieucoin";

function App() {
  return (
    <>
      <Header />
      <Nav />
      {/* <Home /> */}
      {/* <Course /> */}
      {/* <Email /> */}
      {/* <HopTac /> */}
      {/* <CourseDetail /> */}
      {/* <Faq /> */}
      {/* <Profile /> */}
      {/* <Project /> */}
      {/* <Register /> */}
      {/* <ThanhToan /> */}
      {/* <GioiThieuCoin /> */}
      <Team />
      <Footer />
    </>
  );
}

export default App;
