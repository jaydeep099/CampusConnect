import { myAxios } from "./helper";

export const SignUpFunc = (student) => {
    console.log("in signup function");
    console.log(student);
  return myAxios.post('/api/student/create', student);
};