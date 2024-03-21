import { myAxios } from "./helper";

export const LoadAllEvents = () => {
    return myAxios.get('/api/event/allEvents').then((response) => {
        // console.log("Loadallevents");
        // console.log(response.data);
        return response.data;
    });
};

export const UpcomingEvents = () => {
    return myAxios.get('/api/event/upcomingEvents').then((response) => {
        return response.data;
    });
};

export const EventsBWDate = (d1,d2) => {
    console.log(d1);
    return myAxios.get(`/api/event/geteventbwdate/${d1}/${d2}`).then((response) => {
        return response.data;
    });
};

export const LoadEventById = (eventId) => {
    return myAxios.get(`/api/event/${eventId}`).then((response) => {
        return response.data;
    });
};