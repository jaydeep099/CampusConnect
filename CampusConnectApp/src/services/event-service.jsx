import { myAxios } from "./helper";

export const LoadAllEvents = () => {
  return myAxios.get("/api/event/allEvents").then((response) => {
    return response.data;
  });
};

export const UpcomingEvents = () => {
  return myAxios.get("/api/event/upcomingEvents").then((response) => {
    return response.data;
  });
};

export const EventsBWDate = (d1, d2) => {
  return myAxios
    .get(`/api/event/geteventbwdate/${d1}/${d2}`)
    .then((response) => {
      return response.data;
    });
};

export const loadEventById = (eventId) => {
  return myAxios.get("/api/event/" + eventId).then((response) => response.data);
};

export const createEvent = (eventData, clubId) => {
  return myAxios
    .post(`/api/event/createEvent/` + clubId, eventData)
    .then((response) => {
      response.data;
    });
};
