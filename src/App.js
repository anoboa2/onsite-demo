import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Booking from "./pages/Booking";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Waitlist from './pages/Waitlist';
import Profile from './pages/Profile';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Nyc from './pages/Nyc';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/booking" element={<Booking />} /> */}
      {/* <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/nyc" element={<Nyc />} />
    </Routes>
  );
}

export default App;
