import Auth from "../../service/auth";
import { LOGIN, LOGOUT, ERROR, UPDATE } from "../type";

export function loginAction(data, success) {
  return async (dispatch) => {
    let res = await Auth.login(data);
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
      success(); //close popup login
    } else if (res.error) {
      dispatch({
        type: ERROR,
        payload: res.error,
      });
    }
  };

  // return {
  //   type: LOGIN,
  //   payload: data,
  // };
}
export function updateAction(data) {
  return async (dispatch) => {
    let res = await Auth.update(data);
    if (res?.data) {
      dispatch({
        type: UPDATE,
        payload: res.data,
      });
    } else if (res.error) {
      dispatch({
        type: ERROR,
        payload: res.error,
      });
    }
  };
}

export function logoutAction() {
  return {
    type: LOGOUT,
  };
}
