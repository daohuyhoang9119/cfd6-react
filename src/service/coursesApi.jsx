import { endpoint } from "./config";

const CoursesApi = {
  list() {
    return fetch(`${endpoint}/elearning/v4/courses`, {
      method: "GET",
    }).then((res) => res.json());
  },
  detail(slug) {
    return fetch(`${endpoint}/elearning/v4/course/${slug}`, {
      method: "GET",
    }).then((res) => res.json());
  },
  register(data, slug) {
    let token = JSON.parse(localStorage.getItem("token"));

    return fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.accessToken}`,
      },
    }).then((res) => res.json());
  },
  related(slug) {
    return fetch(`${endpoint}/elearning/v4/course-related/${slug}`, {
      method: "GET",
    }).then((res) => res.json());
  },
};

export default CoursesApi;
