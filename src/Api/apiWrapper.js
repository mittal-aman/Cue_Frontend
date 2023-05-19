import axios from "axios";

const environments = {
  test: "https://localhost:8443",
  prod: "http://128.122.136.144:8080"
};

console.log(process.env.NODE_ENV);

// Set base URL according to the environment
const baseUrl = process.env.NODE_ENV === 'production' ? environments.prod : environments.test;

const responseBody = response => response.data;

const requests = {
  get: async (url, header) => await axios.get(`${baseUrl}${url}`, header).then(responseBody),
  post: async (url, body, header) => await axios.post(`${baseUrl}${url}`, body, header).then(responseBody),
}

const API = {
  getFaculty: headers => requests.get('/CUE/F', headers),
  getFacultyById: (id, headers) => requests.get(`/getFaculty/${id}`, headers),
  getStaff: headers => requests.get('/CUE/S', headers)
};

export { API };