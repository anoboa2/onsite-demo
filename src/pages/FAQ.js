import NavBar from '../components/organisms/NavBar';
import FAQHero from '../components/organisms/FAQHero';
import FAQSection from '../components/organisms/FAQSection';
import Footer from '../components/organisms/Footer';
import Banner from '../components/molecules/Banner';
import SubscribeEmailBanner from '../content/SubscribeEmailBanner';

const FAQ = () => {
  return (
    <div>
      <NavBar />
      <FAQHero />
      <FAQSection />
      <Banner content={SubscribeEmailBanner} />
      <Footer />
    </div>
  );
}

export default FAQ;