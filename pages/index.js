import Hero from "@/components/widgets/home/Hero/Hero";
import HomeGallerySection from "@/components/widgets/home/HomeGallerySection/HomeGallerySection";
import StateMade from "@/components/widgets/home/StateMade/StateMade";
import { getStaticPropsFromJSON } from "@/helpers/props/getStaticPropsFromJSON";
import { getPathString } from "@/helpers/strings/getPathString";
const Mainpage = (props) => {
  return (
    <>
      <Hero />
      <StateMade />
      <HomeGallerySection />
    </>
  );
};

export async function getStaticProps(context){
  const dataName = "socialNetworks";
  const filePath = getPathString(["data"], `${dataName}.json`);
  return getStaticPropsFromJSON(filePath, dataName);
}

export default Mainpage;