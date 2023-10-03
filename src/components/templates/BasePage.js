import NavBar from "../organisms/NavBar";
import Footer from "../organisms/Footer";

const BasePage = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default BasePage;