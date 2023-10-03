import NavBar from "../organisms/NavBar";
import Footer from "../organisms/Footer";

const StandardPage = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default StandardPage;