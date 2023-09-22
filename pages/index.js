import Hero from "@/components/widgets/shared/Hero/Hero";
import HomeGallerySection from "@/components/widgets/home/HomeGallerySection/HomeGallerySection";
import StateMade from "@/components/widgets/home/StateMade/StateMade";
import { getStaticPropsFromJSON } from "@/helpers/props/getStaticPropsFromJSON";
// import { getPathString } from "@/helpers/strings/getPathString";
const Mainpage = (props) => {
  return (
    <>
      <Hero />
      <StateMade biography={props.biography}/>
      <HomeGallerySection gallery={props.gallery}/>
    </>
  );
};



export async function getStaticProps(context){
  const dataNames = ["socialNetworks", "gallery", "biography"];
  const data = getStaticPropsFromJSON(dataNames);
  return {
    props:{
      ...data
    }
  }
}

export default Mainpage;