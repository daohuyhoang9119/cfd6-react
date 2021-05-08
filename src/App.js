import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/*style*/
import "./assets/style/custom.scss";

/*component*/
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./page/home/Home";
import Course from "./page/course";
import Email from "./page/email";
import Coop from "./page/coop";
import CourseDetail from "./page/coursedetail/CourseDetail";
import Faq from "./page/faq";
import Profile from "./page/profile/Profile";
import Project from "./page/Project";
import Register from "./page/register/Register";
import Pay from "./page/pay";
import Team from "./page/team";
import IntroCoin from "./page/introcoin";
import Page404 from "./page/page404/Page404";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Login />
      <Nav />
      <Switch>
        <Route path="/course" component={Course} />
        <Route path="/email" component={Email} />
        <Route path="/coop" component={Coop} />
        <Route path="/coursedetail/:slug" component={CourseDetail} />
        <Route path="/coursedetail" component={CourseDetail} />
        <Route path="/faq" component={Faq} />
        <Route path="/profile" component={Profile} />
        <Route path="/Project" component={Project} />
        <Route path="/register" component={Register} />
        <Route path="/pay" component={Pay} />
        <Route path="/introcoin" component={IntroCoin} />
        <Route path="/team" component={Team} />
        <Route exact path="/" component={Home} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
