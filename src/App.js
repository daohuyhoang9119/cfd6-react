import React from "react";
/*style*/
import "./assets/style/custom.scss";

/*component*/
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./page/home";
import Course from "./page/course";
import Email from "./page/email";
import Coop from "./page/coop";
import CourseDetail from "./page/coursedetail";
import Faq from "./page/faq";
import Profile from "./page/profile";
import Project from "./page/Project";
import Register from "./page/register";
import Pay from "./page/pay";
import Team from "./page/team";
import IntroCoin from "./page/introcoin";

function App() {
  return (
    <>
      <Header />
      <Nav />
      {/* <Home /> */}
      {/* <Course /> */}
      {/* <Email /> */}
      {/* <Coop /> */}
      {/* <CourseDetail /> */}
      {/* <Faq /> */}
      {/* <Profile /> */}
      {/* <Project /> */}
      <Register />
      {/* <Pay /> */}
      {/* <IntroCoin /> */}
      {/* <Team /> */}
      <Footer />
    </>
  );
}

export default App;
