import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NewHomePage from "./pages/NewHomepageTravelPage/NewHomePage";
import NewProfile from "./pages/NewHomepageTravelPage/NewTravelProfile/NewProfile";
import NewBooking from "./pages/NewHomepageTravelPage/HeroImage/NewBooking";
import AboutUs from "./pages/AboutUs";
import LearnMore from "./pages/LearnMore";
import NotFoundError from "./pages/NewHomepageTravelPage/NotFoundError";
import axios from "axios";
import Influyente from "./pages/Influyente";


const currentVersion = 2
let data = localStorage.getItem('data')
let version = localStorage.getItem('version')
if (!version || version < currentVersion) {
  axios.get('/data').then((response) => {
    data = response.data.data
    localStorage.setItem('data', response.data.data)
    localStorage.setItem('version', currentVersion)
  })
}

function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route path="/" element={<NewHomePage />} />
      <Route path="/booking" element={<NewBooking />} />
      <Route path="/learnmore" element={<LearnMore />} />
      <Route path="/profile" element={<NewProfile />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/itineraries" element={<Influyente />} />
      <Route path="/*" element={<NotFoundError />} />
    </Routes>
    </div>
  );
}

export default App;