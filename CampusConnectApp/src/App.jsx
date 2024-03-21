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
import ClubRegistration from "./components/ClubRegistration";
import EventDashBoard from "./page/EventDashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/clubDetail" element={<ClubDetail/>}/>
        <Route path="/eventDashBoard" element={<EventDashBoard/>}/>
        
      </Routes>
    </BrowserRouter>
  //  <ClubRegistration/>
  //  <EventDashBoard/>
  );
}

export default App;
