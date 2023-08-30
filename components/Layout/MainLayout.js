import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header data="123" />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
