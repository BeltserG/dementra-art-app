import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header data="123"/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
