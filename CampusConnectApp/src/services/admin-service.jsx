import { myAxios } from "./helper";

export const ChangeClubStatus = (clubEmail,status) => {
  console.log(clubEmail);
  return myAxios.put(`/api/admin/changeStatus/${clubEmail}/${status}`);
};

export const LoadPendingClubs = () => {
  return myAxios.get("/api/admin/clubs").then((response) => {
    return response.data;
  });
};

export const CheckClubStatus = (clubEmail) => {
  return myAxios.get(`/api/admin/checkStatus/${clubEmail}`).then((response) => {
    return response.data;
  });
};
