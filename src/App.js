import { Routes, Route } from "react-router-dom";
import './App.css';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NewHomePage from "./pages/NewHomepageTravelPage/NewHomePage";
import NewProfile from "./pages/NewHomepageTravelPage/NewTravelProfile/NewProfile";
import NewBooking from "./pages/NewHomepageTravelPage/HeroImage/NewBooking";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewHomePage />} />
      <Route path="/booking" element={<NewBooking />} />
      <Route path="/profile" element={<NewProfile />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
