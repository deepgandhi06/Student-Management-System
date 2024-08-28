import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/courses";

export const Coursedata = () => {
  return axios.get(REST_API_BASE_URL);
};
