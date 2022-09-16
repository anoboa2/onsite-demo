import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Explore from './pages/Explore';
import FAQ from './pages/FAQ';
import IgRedirect from './pages/IgRedirect';
import Match from './pages/Match';
import MyItineraries from './pages/MyItineraries';
import NotFound from './pages/NotFound';
import PostCheckout from './pages/PostCheckout';
import Press from './pages/Press';
import Privacy from './pages/Privacy';
import Profile from './pages/Profile';
import SpecialistProfile from './pages/SpecialistProfile';
import Terms from './pages/Terms';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';
import ComingSoon from './pages/ComingSoon';

const Destinations = [
  {
    path: '/italy'
  },
  {
    path: '/paris'
  },
  {
    path: '/iceland'
  },
  {
    path: '/thailand'
  },
  {
    path: '/canada'
  }
]


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<SpecialistProfile />} />
        <Route path="/igredirect" element={<IgRedirect />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/match" element={<Match />} />
        <Route path="/myitineraries" element={<MyItineraries />} />
        <Route path="/thankyou" element={<PostCheckout />} />
        <Route path="/press" element={<Press />} />
        {Destinations.map(({ path }) => (
        <Route path={path} element={<ComingSoon />} />
        ))}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
