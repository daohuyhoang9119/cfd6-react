import { endpoint } from "./config";

const Auth = {
  login(data) {
    return fetch(`${endpoint}/elearning/v4/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
  register() {},
  update(data) {
    let token = JSON.parse(localStorage.getItem("login")?.token?.accessToken);
    return fetch(`${endpoint}/elearning/v4/profile/update`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  },
};

export default Auth;
