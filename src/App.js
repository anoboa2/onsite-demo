import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Explore from './pages/Explore';
import FAQ from './pages/FAQ';
import Match from './pages/Match';
import MyItineraries from './pages/MyItineraries';
import NotFound from './pages/NotFound';
import Press from './pages/Press';
import Privacy from './pages/Privacy';
import Profile from './pages/Profile';
import Terms from './pages/Terms';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<Explore />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/match" element={<Match />} />
        <Route path="/myitineraries" element={<MyItineraries />} />
        <Route path="/press" element={<Press />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
