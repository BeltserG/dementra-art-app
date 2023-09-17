import { getStaticPropsFromJSON } from "@/helpers/props/getStaticPropsFromJSON";
import DigitalGallery from "@/components/widgets/digital/DigitalGallery/DigitalGallery";
import { getDataForTheCurrentPage } from "@/helpers/props/getDataForTheCurrentPage";
const digital = (props) => {
  const data  =getDataForTheCurrentPage(props.gallery);
  return (
    <>
      <DigitalGallery data={data}/>
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