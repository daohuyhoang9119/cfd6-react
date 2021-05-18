import { endpoint } from "./config";

const CoursesApi = {
  list() {
    return fetch(`${endpoint}/elearning/v4/courses`, {
      method: "GET",
    }).then((res) => res.json());
  },
  register(data) {
    return fetch(`${endpoint}/elearning/v4/course-register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
};

export default CoursesApi;
