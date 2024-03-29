import { myAxios } from "./helper";

export const SignUpFunc = (student) => {
  console.log("in signup function");
  console.log(student);
  return myAxios.post("/api/student/create", student);
};

export const LoginStudent = (username, password) => {
  console.log(username);
  console.log(password);

  return myAxios
    .get(`/api/student/${username}/${password}`)
    .then((response) => {
      return response.data;
    });
};

export const LoadStudentById = (studentId) => {
  return myAxios
    .get(`/api/student/${studentId}`)
    .then((response) => response.data);
};

export const getStudetnIdByStudentUsername = (username, password) => {
  return myAxios
    .get(`/api/student/getstudentid/${username}/${password}`)
    .then((response) => {
      return response.data;
    });
};
