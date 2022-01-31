import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Booking from "./pages/Booking";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Waitlist from './pages/Waitlist';
import WaitlistV2 from './pages/WaitlistV2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/waitlist" element={<Waitlist />} />
    </Routes>
  );
}

export default App;
