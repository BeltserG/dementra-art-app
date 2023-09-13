import { getStaticPropsFromJSON } from "@/helpers/props/getStaticPropsFromJSON";

const digital = () => {
  return (
    <div>digital</div>
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