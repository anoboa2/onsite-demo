import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Profile from './pages/Profile';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NewHomePage from "./pages/NewHomepageTravelPage/NewHomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewHomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;
