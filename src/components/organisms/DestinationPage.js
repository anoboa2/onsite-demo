import * as React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import DestinationHero from "./DestinationHero";
import DestinationProfile from "./DestinationProfile";
import OnsiteTravelerIcons from "./OnsiteTravelerIcons";
import PopularItinerariesCountry from "./PopularItinerariesCountry";
import ExploreBanner from "../../content/ExploreBanner";
import Banner from "../molecules/Banner";



const DestinationPage = () => {
  return (
    <div>
      <NavBar />
      <DestinationHero/>
      <OnsiteTravelerIcons/>
      <PopularItinerariesCountry/>
      <DestinationProfile />
      <Banner content={ExploreBanner}/>
      <Footer />
    </div>
  );
}

export default DestinationPage;