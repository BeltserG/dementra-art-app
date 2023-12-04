import { getStaticPropsFromJSON } from "@/helpers/props/getStaticPropsFromJSON";

const oil_painting = () => {
  return (
    <div>oil_painting</div>
  )
}

export async function getStaticProps(context){
  const dataNames = ["socialNetworks", "gallery", "biography"];
  // const filePath = getPathString(["data"], `${dataName}.json`);
  const data = getStaticPropsFromJSON(dataNames);
  return {
    props:{
      ...data
    }
  }
}

export default oil_painting