import { getStaticPropsFromJSON } from "@/helpers/props/getStaticPropsFromJSON";
import DigitalGallery from "@/components/widgets/digital/DigitalGallery/DigitalGallery";

const digital = () => {
  return (
    <>
      <DigitalGallery />
    </>
  )
}

export async function getStaticProps(context){
  const dataNames = ["socialNetworks", "gallery", "biography"];
  const data = getStaticPropsFromJSON(dataNames);
  return {
    props:{
      ...data
    }
  }
}

export default digital