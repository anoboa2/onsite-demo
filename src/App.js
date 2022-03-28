import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NewHomePage from "./pages/NewHomepageTravelPage/NewHomePage";
import NewProfile from "./pages/NewHomepageTravelPage/NewTravelProfile/NewProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewHomePage />} />
      <Route path="/profile" element={<NewProfile />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;
