import axios from "axios";

const baseUrl = "http://128.122.136.144:8080"; // testURL
// const baseUrl = "http://128.122.136.144:8080"; // prodURL

const responseBody = (response) => response.data;

export const requests = {
  get: (url, header) => axios.get(url, header).then(responseBody),
  post: (url, body, header) => axios.post(url, body, header).then(responseBody),
}

const API = {
  getFaculty: (headers) => requests.get(`${baseUrl}/CUE/F`, headers),
  getFacultyById: (id, headers) => requests.get(`${baseUrl}/getFaculty/${id}`, headers),
  getStaff: (headers) => requests.get(`${baseUrl}/CUE/S`, headers),
};

export {
  API
};
