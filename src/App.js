import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Waitlist from './pages/Waitlist';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Nyc from './pages/Nyc';
import NewHomePage from "./pages/NewHomepageTravelPage/NewHomePage";
import NewProfile from "./pages/NewHomepageTravelPage/NewTravelProfile/NewProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewHomePage />} />
      {/* <Route path="/homeeee" element={<Home />} /> */}
      {/* <Route path="/booking" element={<Booking />} /> */}
      {/* <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/profile" element={<NewProfile />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/nyc" element={<Nyc />} />
    </Routes>
  );
}

export default App;
