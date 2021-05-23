import { ERROR, LOGIN, LOGOUT, UPDATE } from "../type";

let initState = {
  login: JSON.parse(localStorage.getItem("login")),
  loginError: "",
};

function authReducer(state = initState, action) {
  if (action.type === LOGIN) {
    localStorage.setItem("login", JSON.stringify(action.payload));
    return {
      ...state,
      login: action.payload,
    };
  } else if (action.type === LOGOUT) {
    localStorage.setItem("login", false);
    return {
      ...state,
      login: false,
    };
  } else if (action.type === ERROR) {
    return {
      ...state,
      loginError: action.payload,
    };
  } else if (action.type === UPDATE) {
    return {
      ...state,
      login: action.payload,
    };
  }

  return state;
}
export default authReducer;
