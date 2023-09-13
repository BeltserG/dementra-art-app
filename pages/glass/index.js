import { getStaticPropsFromJSON } from "@/helpers/props/getStaticPropsFromJSON";
import { getPathString } from "@/helpers/strings/getPathString";

const glass = () => {
  return (
    <div>glass</div>
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

export default glass