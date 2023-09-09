import Header from "../widgets/shared/Header/Header";
import Footer from "../widgets/shared/Footer/Footer";

const MainLayout = ({ children, pageProps }) => {
  console.log(pageProps)
  return (
    <>
      {/* <LightBox /> */}
      <Header data="123" />
      <main>{children}</main>
      <Footer pageProps={pageProps}/>
    </>
  );
};

export default MainLayout;