import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Event from "./page/Event";
import Clubs from "./page/Clubs";
import Contact from "./page/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events" element={<Event />}></Route>
        <Route path="/clubs" element={<Clubs />}></Route>
        <Route path="/contactus" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
