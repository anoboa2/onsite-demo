import NavBar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';

const IgRedirect = () => {
  // get query parameters
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  return (
    <>
      <NavBar />
      <div>
        <h2>Redirected from Instagram</h2>
        {code && <p>Code: {code}</p>}
      </div>
      <Footer />
    </>
  );
}

export default IgRedirect;