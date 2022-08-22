// import { useState } from 'react';
import NavBar from '../components/organisms/NavBar';
import Banner from '../components/molecules/Banner';
import Footer from '../components/organisms/Footer';
import ExploreBanner from '../content/ExploreBanner';

const Explore = () => {
  // const [isLoading, setIsLoading] = useState(false);

  // const queryParams = new URLSearchParams(window.location.search);
  // const indicator = queryParams.get('indicator');

  return (
    <div>
      <NavBar />
      <Banner content={ExploreBanner}/>
      <Footer />
    </div>
  );
}

export default Explore;