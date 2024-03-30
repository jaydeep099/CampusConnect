import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Event from "./page/Event";
import Clubs from "./page/Clubs";
import Contact from "./page/Contact";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Registration from "./page/Registration";
import ClubDetail from "./page/ClubDetail";
import EventDashboard from "./components/EventDashboard";
import EventRegistration from "./components/ClubComponents/EventRegistration";
import ClubRegistration from "./components/ClubRegistration";
import ClubNavbar from "./components/ClubComponents/ClubNavbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/eventdetails/:eventId" element={<EventDashboard />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/clubDetail" element={<ClubDetail />} />
        {/*Private Event and club ma avse */}
        <Route path="/eventRegistry" element={<EventRegistration />} />
        <Route path="/clubRegistry" element={<ClubRegistration />} />
      </Routes>
    </BrowserRouter>
   // <ClubNavbar/>
  );
}

  export default App;
