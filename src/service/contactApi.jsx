import { endpoint } from "./config";

const ContactApi = {
  contact(data) {
    return fetch(`${endpoint}/elearning/v4/contact`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
};

export default ContactApi;
