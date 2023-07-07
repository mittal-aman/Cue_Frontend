import axios from "axios";

const environments = {
  test: "https://localhost:8443",
  prod: "https://128.122.136.144:8443"
};

// Set base URL according to the environment
const baseUrl = process.env.NODE_ENV === 'development' ? environments.test : environments.prod;

const responseBody = response => response.data;

const requests = {
  get: async (url, header) => {
    console.log("GET request URL:", `${baseUrl}${url}`);
    return await axios.get(`${baseUrl}${url}`, header).then(responseBody);
  },
  post: async (url, body, header) => await axios.post(`${baseUrl}${url}`, body, header).then(responseBody),
};

const API = {
  getFaculty: headers => requests.get('/CUE/F', headers),
  // getFacultyById: (id, headers) => requests.get(`/getFaculty/${id}`, headers),
  getStaff: headers => requests.get('/CUE/S', headers),
  getAreaOfStudyList: headers => requests.get('/CUE/list/A', headers),
  getResearchGroupList: headers => requests.get('/CUE/list/R', headers),
  getAreaOfStudy: (groupName, headers) => {
    const encodedGroupName = encodeURIComponent(groupName);
    return requests.get(`/CUE/aos/${encodedGroupName}`, headers);
  },
  getResearchGroup: (groupName, headers) => {
    const encodedGroupName = encodeURIComponent(groupName);
    return requests.get(`/CUE/rg/${encodedGroupName}`, headers);
  },
  getStudentClub: headers => requests.get('/CUE/sc', headers),
  getFacultyItems: headers => requests.get('/CUE/facultyTypes', headers),
  getFacultyByFacultyType: (facultyType, headers) => {
    const encodedFacultyType = encodeURIComponent(facultyType);
    return requests.get(`/CUE/F/${encodedFacultyType}`, headers);
  }
};

export { API };
