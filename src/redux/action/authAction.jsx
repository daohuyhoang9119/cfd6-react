import Auth from "../../service/auth";
import { LOGIN, LOGOUT, ERROR } from "../type";

export function loginAction(data, success) {
  return async (dispatch) => {
    let res = await Auth.login(data);
    if (res.data) {
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
export function logoutAction() {
  return {
    type: LOGOUT,
  };
}
