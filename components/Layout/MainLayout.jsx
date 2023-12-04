import Header from "../widgets/shared/Header/Header";
import Footer from "../widgets/shared/Footer/Footer";
import { useRouter } from "next/router";

const MainLayout = ({ children, pageProps }) => {
  const {route} = useRouter();
  let isError = false;
  if(route === "/_error" || route === "/404"){
    isError = true
  }
  console.log(route)
  console.log(isError)
  return (
    <>
      <div id="modal"></div>
      {!isError && <Header />}
      <main>{children}</main>
      {!isError && <Footer pageProps={pageProps}/>}
    </>
  );
};

export default MainLayout;