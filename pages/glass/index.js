import { getStaticPropsFromJSON } from "@/helpers/props/getStaticPropsFromJSON";
import { getPathString } from "@/helpers/strings/getPathString";

const glass = () => {
  return (
    <div>glass</div>
  )
}

export async function getStaticProps(context){
  const dataName = "socialNetworks";
  const filePath = getPathString(["data"], `${dataName}.json`);
  return getStaticPropsFromJSON(filePath, dataName);
}

export default glass