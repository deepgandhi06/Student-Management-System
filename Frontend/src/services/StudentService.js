import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/students";

export const listStudent = () => {
  return axios.get(REST_API_BASE_URL);
};

export const createStudent = (student) => {
  return axios.post(`${REST_API_BASE_URL}/add`, student);
};

export const getStudent = (RollNo) => {
  return axios.get(`${REST_API_BASE_URL}/update/${RollNo}`);
};

export const deleteStudent = (RollNo) => {
  return axios.delete(`${REST_API_BASE_URL}/delete/${RollNo}`);
};

export const updateStudent = (rollNo, student) => {
  return axios.put(`${REST_API_BASE_URL}/update/${rollNo}`, student);
};
