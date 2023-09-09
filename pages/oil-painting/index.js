import { getStaticPropsFromJSON } from "@/helpers/props/getStaticPropsFromJSON";
import { getPathString } from "@/helpers/strings/getPathString";

const oil_painting = () => {
  return (
    <div>oil_painting</div>
  )
}

export async function getStaticProps(context){
  const dataName = "socialNetworks";
  const filePath = getPathString(["data"], `${dataName}.json`);
  return getStaticPropsFromJSON(filePath, dataName);
}

export default oil_painting