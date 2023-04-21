import axios from "axios";

export const baseUrl = "https://20.10.22.22"; //testing server
// export const baseUrl = "https://20.10.22.22"; //production server

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const responseBody = (response) => response.data;

export const requests = {
  get: (url, header) => axios.get(url, header).then(responseBody),
  post: (url, body, header) => axios.post(url, body, header).then(responseBody),
}

const TandonSchoolApis = {
  getFaculty: (headers) => requests.get(`${baseUrl}/getFaculty`, headers),
  getFacultyById: (id, headers) => requests.get(`${baseUrl}/getFaculty/${id}`, headers),
};

export default {
    TandonSchoolApis
};
