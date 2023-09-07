import Hero from "@/components/widgets/home/Hero/Hero";
import HomeGallerySection from "@/components/widgets/home/HomeGallerySection/HomeGallerySection";
import StateMade from "@/components/widgets/home/StateMade/StateMade";
import { getLocalDataFromJSON } from "@/helpers/getLocalDataFromJSON";
import { getPathString } from "@/helpers/getPathString";
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
  const filePath = getPathString(["data"], "social-networks.json");
  const data = getLocalDataFromJSON(filePath);
  return {
    props:{
      socialNetworks: data
    }
  }
}

export default Mainpage;
