import Header from "../widgets/shared/Header/Header";
import Footer from "../widgets/shared/Footer/Footer";

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
