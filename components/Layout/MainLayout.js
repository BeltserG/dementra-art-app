import Header from "../widgets/shared/Header/Header";
import Footer from "../widgets/shared/Footer/Footer";
import { useRouter } from "next/router";

const MainLayout = ({ children, pageProps }) => {
  const {route} = useRouter();
  
  return (
    <>
      <div id="modal-view"></div>
      {route !== "/_error" && <Header />}
      <main>{children}</main>
      {route !== "/_error" && <Footer pageProps={pageProps}/>}
    </>
  );
};

export default MainLayout;