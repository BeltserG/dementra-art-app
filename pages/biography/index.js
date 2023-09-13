import { getStaticPropsFromJSON } from "@/helpers/props/getStaticPropsFromJSON";

const biography = () => {
  return (
    <div>biography</div>
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

export default biography