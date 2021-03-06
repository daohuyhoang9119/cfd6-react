import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

//redux
import store from "./redux";

//private ROute
import PrivateRoute from "./components/PrivateRouter";

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

//demo
import Demo from "./page/demo";
//
import Login from "./components/Login";
// import Auth from "./service/auth";

// export let Context = React.createContext({});

function App() {
  // let [state, setState] = useState({
  //   login: JSON.parse(localStorage.getItem("login")),
  //   loginError: null,
  // });

  // useEffect(() => {
  //   localStorage.setItem("login", JSON.stringify(state.login));
  // }, [state.login]);

  // async function handleLogin(username, password) {
  //   try {
  //     let res = await Auth.login({
  //       username,
  //       password,
  //     });

  //     if (res.data) {
  //       localStorage.setItem("token", JSON.stringify(res.data.token));
  //       setState({
  //         ...state,
  //         login: res.data,
  //       });
  //       return {
  //         success: true,
  //       };
  //     } else if (res.error) {
  //       return {
  //         error: res.error,
  //       };
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // function handleLogout() {
  //   setState({
  //     ...state,
  //     login: false,
  //   });
  // }

  return (
    <Provider store={store}>
      {/* <Context.Provider value={{ ...state, handleLogin, handleLogout }}> */}
      <BrowserRouter>
        <Header />
        <Nav />
        <Login />
        <Switch>
          <Route path="/course" component={Course} />
          <Route path="/email" component={Email} />
          <Route path="/coop" component={Coop} />
          <Route path="/coursedetail/:slug" component={CourseDetail} />
          <Route path="/faq" component={Faq} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route path="/Project" component={Project} />
          <Route path="/register/:slug" component={Register} />
          <Route path="/pay" component={Pay} />
          <Route path="/introcoin" component={IntroCoin} />
          <Route path="/team" component={Team} />
          <Route path="/demo" component={Demo} />
          <Route exact path="/" component={Home} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </BrowserRouter>
      {/* </Context.Provider> */}
    </Provider>
  );
}

export default App;
