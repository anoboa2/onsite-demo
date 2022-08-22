import NavBar from '../components/organisms/NavBar';
import PopularItineraries from '../components/organisms/PopularItineraries';
import Banner from '../components/molecules/Banner';
import Footer from '../components/organisms/Footer';
import ExploreBanner from '../content/ExploreBanner';


const Explore = () => {

  return (
    <div>
      <NavBar />
      <PopularItineraries />
      <Banner content={ExploreBanner}/>
      <Footer />
    </div>
  );
}

export default Explore;