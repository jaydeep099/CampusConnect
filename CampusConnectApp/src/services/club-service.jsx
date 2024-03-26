import { myAxios } from "./helper";

export const signUp = (club) => {
  return myAxios
    .post("/api/club/register", club)
    .then((response) => response.json());
};

export const LoadAllClubs = () => {
  return myAxios.get("/api/club/AllClub").then((response) => {
    return response.data;
  });
};

export const LoadClubById = (clubId) => {
  return myAxios.get(`/api/club/${clubId}`).then((response) => {
    console.log("loadclubbyid -- ", response.data);
    return response.data;
  });
};

export const createClub = (clubdata) => {
  return myAxios.post(`/api/club/register`).then((response) => response.data);
};
